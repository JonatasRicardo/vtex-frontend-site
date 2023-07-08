import BoxGradient from "../../components/blocks/BoxGradient";
import PrixeBox from "./PrixeBox";

export default function Pricing() {
    return (
        <BoxGradient className="w-full flex justify-center">
            <div className="container overflow-scroll"
            >
                <div className="pb-8 py-4 flex w-max gap-6 lg:justify-around lg:w-full lg:pt-16">
                    <PrixeBox
                        title="Anual"
                        features={[
                            'VTEX IO',
                            'VTEX CMS',
                            'Acesso por 1 ano',
                            <span className="text-blue" key="3">3 dias grátis</span>,
                        ]}
                        className="ml-4 w-60 lg:ml-0 lg:w-80"
                        actionText="Eu quero"
                        from="R$ 4997,00"
                        to="299,11"
                        instalments={12}
                    />
                    <PrixeBox
                        title="Vitalício"
                        color="yellow"
                        features={[
                            'VTEX IO',
                            'VTEX CMS',
                            <span className="text-blue" key="2">Acesso vitalício</span>,
                            <span className="text-blue" key="3">4 Horas de consultoria</span>,
                        ]}
                        className="w-60 lg:w-80"
                        actionText="Eu quero"
                        from="R$ 7.997,00"
                        to="498,72"
                        instalments={12}
                    />
                    <PrixeBox
                        title="Consultoria"
                        color="orange"
                        features={[
                            <span className="text-blue" key="0">Atuamos como co-tech lead no primeiro projeto</span>,
                            <span className="text-blue" key="1">Implantação de equipe própria para lojistas </span>,
                            <span className="text-blue" key="2">Arquitetura de Soluções</span>,
                            <span className="text-blue" key="3">Treinamento personalizado</span>
                        ]}
                        className="w-60 mr-4 lg:w-80"
                        actionText="Saiba mais"
                    />
                </div>
            </div>
        </BoxGradient>
    )
}