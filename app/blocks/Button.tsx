import type { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<"button"> {
  mode?: 'normal' | 'ghost' | undefined;
  color?: 'green' | 'blue' | 'navy' | 'orange' | 'yellow';
}

export default function Button({
    mode = 'normal',
    color = 'green',
    className,
    ...rest
}: ButtonProps) {

    const colors = {
        'green': 'bg-green text-navy',
        'blue': 'bg-green text-navy',
        'navy': 'bg-green text-navy',
        'orange': 'bg-green text-navy',
        'yellow': 'bg-green text-navy'
    }

    return (
        <button
            className={`
                ${colors[color]} 
                rounded-full px-4 py-2 mb-3
                text-lg
                shadow-[-6px_6px_0px_0px_#00000095]
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