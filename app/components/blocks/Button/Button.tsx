"use client";
import type { ComponentProps } from 'react';
import type { BtnColors, BtnMode } from './common';
import { getBtnClasses } from './common';

interface ButtonProps extends ComponentProps<"button"> {
    mode?: BtnMode;
    color?: BtnColors;
}

export default function Button({
    mode,
    color,
    className,
    ...props
}: ButtonProps) {

    const classes = getBtnClasses({ mode, color, className });

    return (
        <button
            className={classes}
            {...props}
        />
    )
}