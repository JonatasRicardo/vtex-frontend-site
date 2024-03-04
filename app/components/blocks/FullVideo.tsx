"use client"
import { useContext } from "react"
import ReactPlayer from "react-player"
import { Context } from "@/app/vtex/PageContext"

export default function FullVideo() {
    const { showVideo, setShowVideo } = useContext(Context)

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
                            url="https://www.youtube.com/embed/CFvkBMvyxMA"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </>
            }
        </>
    )
}