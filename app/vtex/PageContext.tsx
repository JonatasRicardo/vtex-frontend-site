"use client";
import { ReactNode, useState, createContext } from "react";

export const Context = createContext({
    showModal: false,
    loading: false,
    toggleModal: () => {},
    openWhatsApp: () => {},
    contactSubmit: (event: any) => {},
});

export const Provider = (props: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const openWhatsApp = () => {
        const telefone = '5521982863515';
        window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=Tenho%20interesse%20no%20treinamento%20vtex`, "_blank")
    }

    const contactSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        var formData = new FormData(form);

        (async () => {
            setLoading(() => true);
            const response = await fetch('/api/leads/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });
            const data = await response.json();
            setLoading(() => false);
            form.reset()
        })();
    }

    return (
        <Context.Provider
            value={{
                showModal,
                loading,
                toggleModal,
                openWhatsApp,
                contactSubmit,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};