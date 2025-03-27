"use client";

import { Theme, useTheme, useThemeClass } from "@/app/contexts/ThemeContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

type FormFieldsType = {
  name?: string;
  email?: string;
  title?: string;
  message?: string;
};

const ContactForm = () => {
  const [fields, setFields] = useState<FormFieldsType>({});
  const [errors, setErrors] = useState<FormFieldsType>({});

  const [sent, setSent] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newErrors: FormFieldsType = {};

    if (!fields.name) newErrors.name = "Required field.";
    if (!fields.email) newErrors.email = "Required field.";
    if (!fields.message) newErrors.message = "Required field.";
    if (!fields.title) newErrors.title = "Required field.";

    setErrors(newErrors); // Update state once with all errors

    // submit using emailjs
    // emailjs.send(serviceID, templateID, templateParams, options);
    // https://www.emailjs.com/docs/sdk/send/

    const { name, email, message, title } = fields;

    // should probably have this in it's own file
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.error(
        "Missing emailjs .ENV variables (public key, service ID, or template ID."
      );
      return;
    }

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      { name, email, message, title },
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        limitRate: {
          id: "app",
          throttle: 100000,
        },
      }
    );

    setSent(true);
  };

  const cardClass =
    useTheme().theme === Theme.DARK
      ? "bg-black text-secondary"
      : "bg-white text-primary";

  const sentClass = sent ? "brightness-75 pointer-events-none select-none" : "";

  const inputClass =
    useTheme().theme === Theme.DARK
      ? "bg-primary focus:outline focus:outline-primary"
      : "bg-secondary focus:outline focus:outline-secondary";

  return (
    <Card
      className={`rounded-xl w-full ${cardClass} border-none w-full relative overflow-hidden`}
    >
      <div
        className={`bg-gray-500/50 absolute w-full h-full flex justify-center items-center ${
          sent
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none select-none"
        } transition-all duration-500 z-30`}
      >
        <div
          className={`${useThemeClass()}  brightness-90 w-64 h-64 flex flex-col justify-center items-center rounded-xl text-center p-2`}
        >
          <FiMail className="w-32 h-32 text-gray-500" />
          <span className="text-gray-500 text-xl">Sent!</span>
          <span className="text-gray-500">
            I will get back to you as soon as possibile.
          </span>
        </div>
      </div>
      <div className={`${sentClass} w-full h-full`}>
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
                    setFields({ ...fields, name: e.target.value });
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
                    setFields({ ...fields, email: e.target.value });
                  }}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">{errors.email}</span>
                )}
              </label>
            </div>
            <label htmlFor="title" className="flex flex-col w-full">
              Title
              <input
                type="text"
                id="title"
                className={`focus:outline-none outline-none h-10 rounded-xl ${inputClass} p-2`}
                placeholder="Title"
                onChange={(e) => {
                  setErrors({ ...errors, title: undefined });
                  setFields({ ...fields, title: e.target.value });
                }}
              />
              {errors.name && (
                <span className="text-red-600 text-sm">{errors.name}</span>
              )}
            </label>
            <label htmlFor="message" className="flex flex-col">
              Message
              <textarea
                id="message"
                className={`${inputClass} rounded-xl p-2 outline-none focus:outline-none h-32 w-full flex justify-start items-start`}
                placeholder="Leave a message..."
                onChange={(e) => {
                  setErrors({ ...errors, message: undefined });
                  setFields({ ...fields, message: e.target.value });
                }}
              />
              {errors.message && (
                <span className="text-red-600 text-sm">{errors.message}</span>
              )}
            </label>
            <input
              className={`w-full ${
                sent ? "bg-gray-100" : "bg-accent"
              } rounded-xl p-2 hover:cursor-pointer hover:bg-opacity-75 transition `}
              type="submit"
            />
          </form>
        </CardContent>
      </div>
    </Card>
  );
};

export default ContactForm;
