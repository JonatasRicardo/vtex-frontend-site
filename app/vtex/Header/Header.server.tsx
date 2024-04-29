import Image from 'next/image'

export default function HeaderServer() {
    return (
        <h1 className="max-w-[200px] md:max-w-[400px] lg:max-w-[600px]">
            <Image
                src="/img/logo-vtex-front-end.svg"
                alt="Curso VTEX IO"
                width={700}
                height={100}
                priority
                className="w-full"
            />
        </h1>
    )
}