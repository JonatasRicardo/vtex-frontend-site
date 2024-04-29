"use client";

import { Context } from '@/app/vtex/PageContext';
import Image from 'next/image';
import { useContext } from 'react';

export default function PlayButton() {
    const { setShowVideo } = useContext(Context)
    return (
        <button
            onClick={() => setShowVideo(true)}
            className={`
                bg-blue-950 rounded-full p-4 flex justify-end items-center w-14 h-14
                border border-green
                shadow-md hover:shadow-lg shadow-green/40 hover:shadow-green/60 
                mb-2 mt-2
                lg:scale-150
                lg:hover:scale-[1.8]
                transition-all
                animate-pulse
            `}
        >
            <Image
                src="/img/icon-play.svg"
                alt="botão play: iniciar vídeo"
                width={18}
                height={18}
                priority
                
            />
        </button>
    )

}