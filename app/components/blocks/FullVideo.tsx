"use client"
import { useContext } from "react"
import ReactPlayer from "react-player"
import { Context } from "@/app/vtex/PageContext"

export default function FullVideo() {
    const { showVideo } = useContext(Context)

    return (
        <>
            {showVideo && <div className="absolute w-full h-full z-10 t-0">
                <ReactPlayer
                    playing
                    url="https://www.youtube.com/embed/CFvkBMvyxMA"
                    width="100%"
                    height="100%"
                />
            </div>}
        </>
    )
}