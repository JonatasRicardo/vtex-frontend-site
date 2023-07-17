import PlayButton from '../components/blocks/PlayButton';
import Button from '../components/blocks/Button/Button';
import Go2Price from './Go2Price';

export default function Hero() {

    return (
        <section
            className={`
                w-full 
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
                <div className="flex justify-center">
                    <Go2Price className="mb-10 lg:mb-16">Quero treinar minha equipe</Go2Price>
                </div>
            </div>
        </section>
    )

}