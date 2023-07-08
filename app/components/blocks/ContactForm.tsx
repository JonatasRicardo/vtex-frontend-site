"use client";
import { ComponentProps, ReactNode, useEffect, useState } from "react";
import TextField from "./TextField";

export interface FormFields {
    name: string,
    email: string,
    tel: string
}

interface ContatFormProps extends ComponentProps<"form"> {
    errors?: FormFields,
    children?: ReactNode
}

export default function ContactForm({
    children,
    onSubmit = () => {}
}: ContatFormProps) {

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Nome" name="name" id="name" required />
                </div>
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Email" type="email" name="email" id="email" required/>
                </div>
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Tel/WhatsApp" type="tel" name="tel" id="tel" required />
                </div>
            </div>
            {children}
        </form>
    )
}