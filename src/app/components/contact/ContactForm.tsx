"use client";

import { Theme, useTheme } from "@/app/contexts/ThemeContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name) newErrors.name = "Required field.";
    if (!email) newErrors.email = "Required field.";
    if (!message) newErrors.message = "Required field.";

    setErrors(newErrors); // Update state once with all errors

    console.log(errors);

    // submit
  };

  const inputClass =
    useTheme().theme === Theme.DARK ? "bg-primary" : "bg-secondary";

  return (
    <Card className="rounded-xl w-full">
      <CardHeader>
        <CardTitle>Leave a message</CardTitle>
        <CardDescription>I will respond as soon as possible!</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
          <div className="flex gap-x-4">
            <label htmlFor="name" className="flex flex-col w-1/2">
              Name
              <input
                type="text"
                id="name"
                className={`focus:outline-none outline-none h-10 rounded-xl ${inputClass} p-2`}
                placeholder="John Smith"
                onChange={(e) => {
                  setErrors({ ...errors, name: undefined });
                  setName(e.target.value);
                }}
              />
              {errors.name && (
                <span className="text-red-600 text-sm">{errors.name}</span>
              )}
            </label>
            <label htmlFor="email" className="flex flex-col w-1/2">
              Email
              <input
                type="email"
                id="email"
                className={`focus:outline-none outline-none h-10 rounded-xl ${inputClass} p-2`}
                placeholder="xyz@gmail.com"
                onChange={(e) => {
                  setErrors({ ...errors, email: undefined });
                  setEmail(e.target.value);
                }}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">{errors.email}</span>
              )}
            </label>
          </div>
          <label htmlFor="message" className="flex flex-col">
            Message
            <textarea
              id="message"
              className={`${inputClass} rounded-xl p-2 outline-none focus:outline-none h-32 w-full flex justify-start items-start`}
              placeholder="Leave a message..."
              onChange={(e) => {
                setErrors({ ...errors, message: undefined });
                setMessage(e.target.value);
              }}
            />
            {errors.message && (
              <span className="text-red-600 text-sm">{errors.message}</span>
            )}
          </label>
          <input
            className="w-full bg-accent rounded-xl p-2 hover:cursor-pointer hover:bg-opacity-75 transition"
            type="submit"
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
