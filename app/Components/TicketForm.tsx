"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {

    const stateTicket = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "not started",
        category: "Hardware Problem",
    };

    const categories = [
        "Hardware Problem",
        "Software Problem",
        "Application Deveopment",
        "Project",
    ];

    const [formData, setFormData] = useState(stateTicket);
    const router = useRouter();

    const handleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/tickets", {
            method: "POST",
            body: JSON.stringify({ formData }),
            //@ts-ignore
            "Content-Type": "application/json",
        });

        if (!res.ok) {
            throw new Error("Failed to create ticket");
        }
        
        router.push("/");
    }

    return (
        <div className=" flex justify-center">
            <form method="post" className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
                <h3>Create New Ticket</h3>
                <label>Title</label>
                <input id="title" name="title" type="text" required={true} value={formData.title} onChange={handleChange} />
                <label>Description</label>
                {/* @ts-ignore */}
                <textarea id="description" name="description" required={true} value={formData.description} rows="5" onChange={handleChange} />
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                    {categories?.map((category, _index) => (
                        <option key={_index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <label>Priority</label>
                <div>
                    <input id="priority-1" name="priority" type="radio" value={1} checked={formData.priority == 1} onChange={handleChange} />
                    <label>1</label>
                    <input id="priority-2" name="priority" type="radio" value={2} checked={formData.priority == 2} onChange={handleChange} />
                    <label>2</label>
                    <input id="priority-3" name="priority" type="radio" value={3} checked={formData.priority == 3} onChange={handleChange} />
                    <label>3</label>
                    <input id="priority-4" name="priority" type="radio" value={4} checked={formData.priority == 4} onChange={handleChange} />
                    <label>4</label>
                    <input id="priority-5" name="priority" type="radio" value={5} checked={formData.priority == 5} onChange={handleChange} />
                    <label>5</label>
                </div>
                <label>Progress</label>
                <input type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" onChange={handleChange} />
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value="started">Started</option>
                    <option value="done">Done</option>
                </select>
                <input type="submit" className="btn max-w-xs" value="Create Ticket" />
            </form>
        </div>
    )
}

export default TicketForm