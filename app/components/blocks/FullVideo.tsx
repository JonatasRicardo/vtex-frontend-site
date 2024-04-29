"use client"
import { useContext, useState } from "react"
import ReactPlayer from "react-player"
import Button from '@/app/components/blocks/Button/Button';
import Link from 'next/link';
import { Context } from "@/app/vtex/PageContext"
import { CHECKOUT_URL } from "@/app/constants";

export default function FullVideo() {
    const { showVideo, setShowVideo } = useContext(Context);
    const [ showBtnCheckout, setShowBtnCheckout ]= useState(false);

    return (
        <>
            {showVideo &&
                <>
                    <div className="fixed w-full h-full z-50 t-0 bg-navy bg-opacity-80" onClick={() => setShowVideo(false)} />
                    <div className="fixed w-11/12 h-[80%] z-50 m-16 t-0">
                        <div className="text-right pb-3">
                            <button className="text-white text-2xl" onClick={() => setShowVideo(false)} title="fechar">fechar</button>
                        </div>
                        <ReactPlayer
                            playing
                            url="https://www.youtube.com/embed/09FchcgsI_M"
                            width="100%"
                            height="90%"
                            controls
                            onProgress={({ playedSeconds }) => {
                                if (playedSeconds > 333) {
                                    setShowBtnCheckout(true)
                                }
                            }}
                        />
                        {showBtnCheckout && <Link href={CHECKOUT_URL}>
                            <Button className="w-full mt-6" >Comprar Agora!</Button>
                        </Link>}
                    </div>
                </>
            }
        </>
    )
}