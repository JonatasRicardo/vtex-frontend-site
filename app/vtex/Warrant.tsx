import Image from 'next/image';


export default function Warrant() {

    return (
        <div className="bg-sky w-full flex justify-center py-8 lg:pt-10 lg:pb-8">

            <div className="container flex justify-center">
                <div className="hidden md:block">
                    <Image
                        src="/img/arrows-yellow-blue-left.svg"
                        alt=""
                        width={105}
                        height={65}
                        priority
                        aria-hidden="true"
                    />
                </div>
                <div className=" text-center text-blue px-6 mx-8">
                    <div className="text-xl mb-2 lg:text-2xl"><span className="text-2xl mb-2 lg:text-4xl">30 dias</span> de garantia em todos os planos</div>
                    <div className="text-sm lg:text-xl">Não gostou? Devolvemos seu dinheiro sem burocracia</div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/img/arrows-yellow-blue-right.svg"
                        alt=""
                        width={105}
                        height={65}
                        priority
                        aria-hidden="true"
                    />
                </div>
            </div>
        </div>
    )
}
