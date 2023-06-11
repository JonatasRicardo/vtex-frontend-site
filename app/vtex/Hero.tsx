import PlayButton from '../blocks/PlayButton';
import Button from '../blocks/Button';

export default function Hero() {
    return (
        <section
            className={`
                w-screen 
                aspect-square 
                pt-[var(--header-height-mobile)]
                justify-center
                flex
                relative
                overflow-hidden

                md:aspect-[16/10]
                md:pt-[var(--header-height-desktop)] 

                lg:max-h-screen 

            `}
        >
            <div className="container px-4 xl:px-0 flex flex-col z-10">
                <div>
                    <div className="sm:w-8/12" >
                        <h2 className="text-white text-md md:text-lg lg:text-4xl leading-tight mb-4 lg:mb-10">Desvende os segredos da VTEX e impulsione seus resultados com o curso de VTEX IO!</h2>
                        <p className="text-white text-xs md:text-sm lg:text-xl leading-tight ">Acelere as inovações e as vendas, automatize o treinamento de novos devs e fique um passo a frente da concorrência.</p>
                    </div>
                </div>
                <div className="flex grow items-center justify-center">
                    <PlayButton />
                </div>
                <div className="text-center">
                    <Button className="mb-10 lg:mb-16">Quero treinar minha equipe</Button>
                </div>
            </div>
        </section>
    )

}