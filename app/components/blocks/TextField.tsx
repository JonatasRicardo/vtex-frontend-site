import type { ComponentProps } from 'react';

export default function SizeBox({
    children,
    type = 'text',
    className = '',
    ...props
}: ComponentProps<'input'>) {
    return (
        <input type={type} className={`w-full p-2 lg:p-4 bg-transparent placeholder-blue border border-blue border-r-0 border-t-0 ${className}`} {...props} />
    )
}