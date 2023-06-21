import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<"button"> {
  mode?: 'normal' | 'ghost';
  color?: 'green' | 'blue' | 'navy' | 'orange' | 'yellow';
}

export default function Button({
    mode = 'normal',
    color = 'green',
    className,
    ...rest
}: ButtonProps) {

    
    const normalColors = {
        'green': 'bg-green text-navy shadow-[-6px_6px_0px_0px_#00000095]',
        'blue': 'bg-green text-navy shadow-[-6px_6px_0px_0px_#00000095]',
        'navy': 'bg-green text-navy shadow-[-6px_6px_0px_0px_#00000095]',
        'orange': 'bg-green text-navy shadow-[-6px_6px_0px_0px_#00000095]',
        'yellow': 'bg-green text-navy shadow-[-6px_6px_0px_0px_#00000095]'
    }
    
    const ghostColors = {
        'green': 'text-green border-green border-2 text-2xl border-dashed',
        'blue': 'text-blue border-blue border-2 text-2xl border-dashed',
        'navy': 'text-navy border-navy border-2 text-2xl border-dashed',
        'orange': 'text-orange border-orange border-2 text-2xl border-dashed',
        'yellow': 'text-yellow border-yellow border-2 text-2xl border-dashed',
    }


    const colors = mode === 'normal' ? normalColors : ghostColors;

    return (
        <button
            className={`
                ${colors[color]} 
                rounded-full px-4 py-2 mb-3
                text-2xl
                transition-transform
                hover:scale-105
                w-fit

                lg:text-2xl
                lg:px-10

                ${className ?? ''}
            `}
            {...rest}
        />
    )

}