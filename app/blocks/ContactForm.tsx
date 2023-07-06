"use client";
import { EventHandler, SyntheticEvent, useEffect, useState } from "react";
import TextField from "./TextField";

export interface FormFields {
    name: string,
    email: string,
    tel: string
}

interface ContatFormProps {
    onChange: (fields: FormFields) => any | void,

}

export default function ContactForm({ onChange }: ContatFormProps) {
    const [fields, setFields] = useState<FormFields>({ name: '', email: '', tel: '' });

    useEffect(() => {
      onChange(fields);
    }, [fields, onChange])

    const handleFormChange = (event: React.ChangeEvent<HTMLFormElement>) => {
        const { value, name } = event.target;
        setFields({
            ...fields,
            [name]: value
        })
    }

    return (
        <form action="" className="" onChange={handleFormChange}>
            <div className="flex flex-col lg:flex-row lg:flex-wrap w-full">
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Nome" name="name" id="name" value={fields.name} />
                </div>
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Email" type="email" name="email" id="email" value={fields.email}/>
                </div>
                <div className="lg:w-2/4 p-4">
                    <TextField placeholder="Tel/WhatsApp" type="tel" name="tel" id="tel" value={fields.tel} pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" />
                </div>
            </div>
        </form>
    )
}