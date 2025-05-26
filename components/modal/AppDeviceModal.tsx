import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useBrowserContext } from "@/context/BrowserContext";
import { useDeviceContext } from "@/context/DeviceContext";
import { DeviceInterface } from "@/types/types";

interface AppDeviceModalProps {
  open: boolean;
  onClose: () => void;
  data: DeviceInterface[];
  onUpdate: (item: DeviceInterface) => void;
}

const AppDeviceModal: FC<AppDeviceModalProps> = ({
  open,
  onClose,
  data,
  onUpdate,
}) => {
  const [desktopValue, setDesktopValue] = useState<number>(0);
  const [mobileValue, setMobileValue] = useState<number>(0);

  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const selected = data.find((item) => item.month === selectedMonth);
  useEffect(() => {
    if (selected) {
      setDesktopValue(selected.desktop);
      setMobileValue(selected.mobile);
    }
  }, [selectedMonth]);

  const handleSave = () => {
    if (selected) {
      onUpdate({
        ...selected,
        desktop: desktopValue,
        mobile: mobileValue,
      });
      onClose();
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Month</DialogTitle>
          </DialogHeader>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Month" />
            </SelectTrigger>
            <SelectContent>
              {data.map((device) => (
                <SelectItem key={device.id} value={device.month}>
                  {device.month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Desktop</label>
            <Input
                type="number"
                value={desktopValue}
                onChange={(e) => setDesktopValue(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Mobile</label>
            <Input
                type="number"
                value={mobileValue}
                onChange={(e) => setMobileValue(Number(e.target.value))}
            />
          </div>
          <DialogFooter>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSave}>Save</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppDeviceModal;
