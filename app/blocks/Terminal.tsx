import type { ComponentProps, ReactNode } from 'react';

interface Terminal {
  children: ReactNode
}

export default function Terminal({
    children
}: Terminal) {

    return (
        <div className="bg-blue w-full rounded-tl-lg rounded-bl-lg drop-shadow-[10px_10px_0_rgba(0,0,0,0.33)] md:rounded-lg md:drop-shadow-[16px_16px_0_rgba(0,0,0,0.33)]">
            <div className="p-4 flex md:p-6">
                <div className="w-4 h-4 bg-orange rounded-full mr-2" />
                <div className="w-4 h-4 bg-yellow rounded-full mr-2" />
                <div className="w-4 h-4 bg-green rounded-full" />
            </div>

            <div className="bg-black p-4 w-full text-green rounded-tl-lg rounded-bl-lg md:p-6 md:rounded-lg">
                {children}
            </div>
        </div>
    )

}