'use client'
import React, {useState} from 'react';
import {ScrollArea} from "@/components/ui/scroll-area"
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {CalendarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Input} from "@/components/ui/input";

interface ITask {
    id: number;
    text: string;
    date: Date | undefined;
    completed: boolean;
}

const TaskCard = () => {
    const [taskList, setTaskList] = useState<ITask[]>([
        {
            id: 1,
            text: "task",
            date: undefined,
            completed: false

        },
        {
            id: 2,
            text: "task",
            date: undefined,
            completed: false

        },
        {
            id: 3,
            text: "task",
            date: undefined,
            completed: false
        },
        {
            id: 4,
            text: "task",
            date: undefined,
            completed: false
        },
    ])
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    const toggleTaskCompleted = (id: number) => {
        setTaskList(prevList =>
            prevList.map(task =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    }
    const [newTaskText, setNewTaskText] = useState("");
    const addTask = () => {
        if (newTaskText && selectedDate) {
            const newTask: ITask = {
                id: Date.now(),
                text: newTaskText,
                date: selectedDate,
                completed: false,
            };
            setTaskList([...taskList, newTask]);
            setNewTaskText("");
            setOpen(false);
        }
    };
    return (
        <div>
            <h1 className="text-lg font-medium mb-6">Task list</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon/>
                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-4 w-auto">
                    <div className="flex flex-col gap-2 mb-4">
                        <Input
                            className={"mb-2"}
                            placeholder="Task description"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
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
                    {taskList.map((task) => (
                        <Card className="p-4">
                            <div className="flex items-center gap-4">
                                <Checkbox id={task.id.toString()} checked={task.completed}
                                          onCheckedChange={() => toggleTaskCompleted(task.id)}/>
                                <label htmlFor={task.id.toString()}
                                       className={`flex-1 text-sm text-muted-foreground ${
                                           task.completed ? "line-through text-gray-500" : ""
                                       }`}
                                >
                                    {task.text} {task.date?.toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                })}
                                </label>
                            </div>
                        </Card>
                    ))}
                </div>

            </ScrollArea>
        </div>
    );
};

export default TaskCard;