import type { ComponentProps, ReactNode} from 'react';
import Button from '@/app/components/blocks/Button';
import Link from 'next/link';

interface PriceBoxProps extends ComponentProps<"div"> {
    title: string,
    features: string[] | ReactNode[],
    from?: string,
    to?: string,
    instalments?: number,
    action?: () => void,
    actionText: string,
    color?: 'green' | 'yellow' | 'orange',
    link: string,
}

export default function PriceBox({
   title,
   features = [],
   from,
   to,
   instalments,
   action = () => {},
   actionText = 'Eu quero',
   color = 'green',
   className,
   link,
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
            <div className="py-5 px-8 pb-2 rounded-2xl translate-x-2 translate-y-2 bg-white lg:min-h-[346px]">
                <ul>
                    {features.map((feature, i) => <li className="list-disc md:text-lg" key={i}>{feature}</li>)}
                </ul>
                <div className="text-right mt-6">
                    {from && <span className="line-through text-2xl">{from}</span>}<br/>
                    {instalments && (<span className="text-md">{instalments}x de </span>)}
                    {to && (<span className="text-6xl text-blue">{to}</span>)}
                </div>
                <Link href={link}>
                    <Button mode="ghost" color={color} className="w-full mt-6" >Eu quero</Button>
                </Link>
            </div>
        </div>
    )
}