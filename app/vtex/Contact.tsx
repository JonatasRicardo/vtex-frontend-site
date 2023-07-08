"use client";
import Image from 'next/image';
import SizeBox from "../components/blocks/SizeBox";
import Button from "../components/blocks/Button";
import Modal from '../components/blocks/Modal';
import ContactForm, { FormFields } from '../components/blocks/ContactForm';
import { useState } from 'react';

export default function Contact() {
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

    const ContactOrWz = () => (

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center w-full lg:py-6">
            <div className="w-full lg:w-5/12">
                <Button onClick={toggleModal} color="navy" className="lg:hidden shadow-none h-full w-full lg:px-4">
                    Solicitar Contato
                </Button>
                <Button type="submit" color="navy" className="hidden lg:block shadow-none h-full w-full lg:px-4">
                    {loading ? 'enviando...' : 'Solicitar Contato'}
                </Button>
            </div>
            <div className="w-full lg:w-1/12 flex justify-center items-center">
                <span className="text-blue text-2xl">ou</span>
            </div>
            <div className="w-full lg:w-5/12">
                <Button mode="ghost" color="darkGreen" className="shadow-none w-full px-4 lg:px-6 2xl:px-8" onClick={openWhatsApp}>
                    <Image
                        src="/img/logo-whats-app.svg"
                        width={30}
                        height={30}
                        alt=""
                        aria-label="ícone do whatsapp"
                    />
                    <span className="text-left pl-4">Nos Chame no WhatsApp</span>
                </Button>
            </div>
        </div>

    )

    return (
        <>
            <div className="bg-sky w-full py-10 flex justify-center lg:pt-10">
                <div className="container flex justify-center">

                    <h3 className="hidden text-5xl text-blue lg:w-4/12 xl:w-4/12  lg:block lg:pr-8">Quer saber se é pra você?</h3>

                    <SizeBox className="lg:hidden w-full m-4 lg:w-8/12 xl:w-6/12">
                        <h3 className="text-center pt-6 pb-10 text-2xl text-blue">Quer saber se é pra você?</h3>

                        <div className="">
                            <ContactOrWz />
                        </div>
                    </SizeBox>

                    <SizeBox className="hidden lg:block w-full m-4 lg:w-8/12 xl:w-6/12">
                        <h3 className="lg:hidden text-center pt-6 pb-10 text-2xl text-blue">Quer saber se é pra você?</h3>

                        <div className="">
                            <div className="hidden lg:block">
                                <ContactForm
                                    onSubmit={contactSubmit}
                                >
                                    <ContactOrWz />
                                </ContactForm>
                            </div>
                        </div>
                    </SizeBox>

                </div>
            </div>

            <Modal
                open={showModal}
                onClose={toggleModal}
                title="Solicitar Contato"
            >
                <ContactForm
                    onSubmit={contactSubmit}
                >
                    <Button type="submit" color="navy" className="shadow-none h-full w-full lg:px-4">
                        {loading ? 'enviando...' : 'Solicitar Contato'}
                    </Button>
                </ContactForm>
            </Modal>
        </>
    )
}