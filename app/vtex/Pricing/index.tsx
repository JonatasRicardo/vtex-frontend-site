import { useContext } from 'react';
import BoxGradient from "../../components/blocks/BoxGradient";
import PrixeBox from "./PrixeBox";
import { Context } from '@/app/vtex/PageContext';

export default function Pricing() {

    return (
        <BoxGradient id="price" className="w-full flex justify-center">
            <div className="container overflow-scroll"
            >
                <div className="pb-8 py-4 flex w-max gap-6 lg:justify-around lg:w-full lg:pt-16">
                    <PrixeBox
                        title="Acesso Vitalício"
                        features={[
                            'VTEX IO',
                            'VTEX CMS',
                            <span className="text-blue" key="2">Acesso vitalício</span>,
                            <span className="text-blue" key="3">2 Horas de consultoria</span>,
                            <span className="text-blue" key="4">Plano de ação personalizado</span>,
                        ]}
                        className="ml-4 w-5/12 lg:ml-0 lg:w-1/3"
                        actionText="Compre agora"
                        from="R$ 4997,00"
                        priceText='por apenas'
                        to="1497"
                        btnMode='normal'
                        link='https://pay.hotmart.com/N23548953B?off=j15mi9vw&bid=1714354922733'
                    />
                    <PrixeBox
                        title="Consultoria"
                        color="orange"
                        features={[
                            'VTEX IO',
                            'VTEX CMS',
                            <span className="text-blue" key="0">Atuamos como co-tech lead no primeiro projeto</span>,
                            <span className="text-blue" key="1">Implantação de equipe própria para lojistas </span>,
                            <span className="text-blue" key="2">Arquitetura de Soluções</span>,
                            <span className="text-blue" key="3">Treinamento personalizado</span>
                        ]}
                        priceText="a partir de"
                        to="4000/mês"
                        className="w-8/12 mr-4 lg:w-1/3"
                        actionText="Saiba mais"
                        destination='contact'
                    />
                </div>
            </div>
        </BoxGradient>
    )
}