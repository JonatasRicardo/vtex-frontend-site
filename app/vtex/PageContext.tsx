"use client";
import { ReactNode, useState, createContext, useRef } from "react";
import openWhatsApp from '@/app/utils/openWhatsApp';

interface PageCtx {
    showModal: boolean,
    loading: boolean,
    toggleModal: () => void,
    openWhatsApp: ({}) => void,
    contactSubmit: (event: any) => void,
    scrollToId: (query: string) => void,
    showVideo: boolean,
    setShowVideo: React.Dispatch<React.SetStateAction<boolean>>
}

const scrollToId = (elementId: string) => {
    const destinationPosition = window.document.getElementById(elementId)?.offsetTop;
    const headerHeight = window.document.getElementById('header')?.offsetHeight ?? 0;
    if(destinationPosition) {
        window.scrollTo({
            top: destinationPosition-headerHeight,
            left: 0,
            behavior: "smooth",
        });
    }
}

export const Context = createContext<PageCtx>({
    showModal: false,
    loading: false,
    toggleModal: () => {},
    openWhatsApp: () => {},
    contactSubmit: () => {},
    showVideo: false,
    setShowVideo: () => {},
    scrollToId: () => {},
});

export const Provider = (props: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [showVideo, setShowVideo] = useState<boolean>(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const contactSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        var formData = new FormData(form);

        (async () => {
            setLoading(() => true);
            const response = await fetch('/marketing/api/send-email', {
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
                scrollToId,
                showVideo,
                setShowVideo,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};