"use client"

import { useEffect } from "react"
import openWhatsApp from "../utils/openWhatsApp"

export default function Whatsapp() {

    useEffect(() => {
        openWhatsApp({});
    })

    return (
        <></>
    )
}