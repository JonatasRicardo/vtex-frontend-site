import Link from 'next/link';
import type { ComponentProps } from 'react';
import type { BtnColors, BtnMode } from './common';
import { getBtnClasses } from './common';

interface LinkButtonProps extends ComponentProps<typeof Link> {
    mode?: BtnMode;
    color?: BtnColors;
}

export default function LinkButton({
    mode,
    color,
    className,
    ...props
}: LinkButtonProps) {

    const classes = getBtnClasses({ mode, color, className });

    return (
        <Link
            className={classes}
            {...props}
        />
    )
}