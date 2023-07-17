"use client";
import { useContext, useState } from 'react';
import Image from 'next/image';
import SizeBox from "../components/blocks/SizeBox";
import Button from "../components/blocks/Button/Button";
import Modal from '../components/blocks/Modal';
import ContactForm, { FormFields } from '../components/blocks/ContactForm';
import { Context } from '@/app/vtex/PageContext';

export default function Contact() {

    const {
        showModal,
        loading,
        toggleModal,
        openWhatsApp,
        contactSubmit,
    } = useContext(Context);

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
                <Button mode="ghost" color="darkGreen" className="shadow-none w-full px-2 lg:px-6 2xl:px-8" onClick={openWhatsApp}>
                    <div className="w-6 lg:w-10">
                        <Image
                            src="/img/logo-whats-app.svg"
                            width={100}
                            height={100}
                            alt=""
                            aria-label="ícone do whatsapp"
                            className="w-fit"
                        />
                    </div>
                    <span className="text-left pl-2 lg:pl-4">Nos Chame no WhatsApp</span>
                </Button>
            </div>
        </div>

    )

    return (
        <>
            <div className="bg-sky w-full pb-10 pt-0 flex justify-center lg:pt-10">
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
                    <Button type="submit" color="navy" className="mt-5 shadow-none h-full w-full lg:px-4">
                        {loading ? 'enviando...' : 'Solicitar Contato'}
                    </Button>
                </ContactForm>
            </Modal>
        </>
    )
}