import type { ComponentProps, ReactNode} from 'react';
import Button from '@/app/components/blocks/Button/Button';
import Link from 'next/link';
import { BtnMode } from '@/app/components/blocks/Button/common';
import Go2Id from '../Go2Id';

interface PriceBoxProps extends ComponentProps<"div"> {
    title: string,
    features: string[] | ReactNode[],
    from?: string,
    to?: string,
    priceText?: string,
    btnMode?: BtnMode,
    instalments?: number,
    action?: () => void,
    actionText: string,
    color?: 'green' | 'yellow' | 'orange',
    link?: string,
    destination?: string
}

export default function PriceBox({
   title,
   features = [],
   from,
   to,
   instalments,
   priceText,
   action = () => {},
   btnMode = 'ghost',
   actionText = 'Eu quero',
   color = 'green',
   className,
   link,
   destination,
   ...props
}: PriceBoxProps) {

    const colors = {
        'green': { border : 'border-green', text: 'text-green'},
        'yellow': { border : 'border-yellow', text: 'text-yellow'},
        'orange': { border : 'border-orange', text: 'text-orange'},
    }

    return (
        <div className={`flex flex-col self-baseline border-dashed border-2 rounded-2xl ${colors[color].border} ${className}`} {...props}>
            <h2 className={`text-2xl font-bold font p-3 text-center ${colors[color].text}`}>{title}</h2>
            <div className="py-5 px-8 pb-2 rounded-2xl translate-x-2 translate-y-2 bg-white min-h-[356px] lg:min-h-[395px]">
                <ul>
                    {features.map((feature, i) => <li className="list-disc md:text-lg" key={i}>{feature}</li>)}
                </ul>
                <div className="text-right mt-6">
                    {from && <span className="line-through text-2xl">{from}</span>}<br/>
                    {priceText && (<span className="text-md">{priceText}</span>)}
                    {instalments && (<span className="text-md">{instalments}x de </span>)}
                    {to && (<span className="text-6xl text-blue">{to}</span>)}
                </div>
                {link && <Link href={link}>
                    <Button mode={btnMode} color={color} className="w-full mt-6" >{actionText}</Button>
                </Link>}
                {destination && !link && <Go2Id destination={destination} mode={btnMode} color={color} className="w-full mt-6">{actionText}</Go2Id>}
            </div>
        </div>
    )
}