import React, { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
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
import {BrowserInterface} from "@/types/types";

interface AppBrowserModalProps {
    open: boolean;
    onClose: () => void;
    data: BrowserInterface[];
    onUpdate: (item: BrowserInterface) => void;
}

const AppBrowserModal: FC<AppBrowserModalProps> = ({
                                                     open,
                                                     onClose,
                                                     data,
                                                     onUpdate,
                                                 }) => {
    const [visitorsValue, setVisitorsValue] = useState<number>(0);

    const [selectedBrowser, setSelectedBrowser] = useState<string>("");
    const selected = data.find((item) => item.browser === selectedBrowser);
    useEffect(() => {
        if (selected) {
            setVisitorsValue(selected.visitors);
        }
    }, [selectedBrowser]);

    const handleSave = () => {
        if (selected) {
            onUpdate({
                ...selected,
                visitors: visitorsValue,
            });
            onClose();
        }
    };

    return (
        <div>

            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Choose Browser</DialogTitle>
                    </DialogHeader>
                    <Select value={selectedBrowser} onValueChange={setSelectedBrowser}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose Browser" />
                        </SelectTrigger>
                        <SelectContent>
                            {data.map((item) => (
                                <SelectItem key={item.id} value={item.browser}>
                                    {item.browser}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Visitors</label>
                        <Input
                            type="number"
                            value={visitorsValue}
                            onChange={(e) => setVisitorsValue(Number(e.target.value))}
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

export default AppBrowserModal;
