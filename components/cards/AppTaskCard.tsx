"use client";
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CircleXIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { useTaskContext } from "@/context/TaskContext";

const AppTaskCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const addTask = () => {
    if (newTitle && selectedDate) {
      createTask({
        id: Date.now(),
        title: newTitle,
        date: selectedDate,
        completed: false,
      });

      setNewTitle("");
      setOpen(false);
    }
  };

  const { tasks, createTask, toggleTask, deleteTask } = useTaskContext();
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Task list</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-auto">
          <div className="flex flex-col gap-2 mb-4">
            <Input
              className={"mb-2"}
              placeholder="Task description"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Button onClick={addTask}>Add Task</Button>
          </div>

          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date);
            }}
            className="rounded-md "
          />
        </PopoverContent>
      </Popover>
      <ScrollArea className="max-h-[550px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <Card className="p-4" key={task.id}>
              <div className={"flex items-center gap-4"}>
                <Checkbox
                  id={task.id.toString()}
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className={
                    task.completed
                      ? "!text-green-600 !bg-transparent border-0"
                      : "p-1"
                  }
                />
                <label
                  htmlFor={task.id.toString()}
                  className={`flex-1 text-sm text-muted-foreground ${task.completed ? "!text-green-600" : ""}`}
                >
                  {task.title} -{" "}
                  {task.date?.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                  })}
                </label>
                <Button
                  onClick={() => deleteTask(task.id)}
                  variant="ghost"
                  className="!bg-transparent hover:bg-transparent p-1 text-red-500 hover:text-red-600 cursor-pointer"
                >
                  <CircleXIcon className="" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AppTaskCard;
