type BtnMode = 'normal' | 'ghost';
type BtnColors = 'green' | 'darkGreen' | 'blue' | 'navy' | 'orange' | 'yellow';

export type { BtnMode, BtnColors }

export function getBtnClasses({
    mode = 'normal',
    color = 'green',
    className }: { mode?: BtnMode, color?: BtnColors, className?: string }
) {
    const normalDefaults = 'shadow-[-6px_6px_0px_0px_#00000095]';
    const normalColors = {
        'green': `bg-green text-navy ${normalDefaults}`,
        'darkGreen': `bg-darkGreen text-white ${normalDefaults}`,
        'blue': `bg-blue text-white ${normalDefaults}`,
        'navy': `bg-navy text-white ${normalDefaults}`,
        'orange': `bg-orange text-navy ${normalDefaults}`,
        'yellow': `bg-yellow text-navy ${normalDefaults}`
    }

    const ghostDefaults = 'border-2 text-2xl';
    const ghostColors = {
        'green': `text-green border-green ${ghostDefaults}`,
        'darkGreen': `text-darkGreen border-darkGreen ${ghostDefaults}`,
        'blue': `text-blue border-blue ${ghostDefaults}`,
        'navy': `text-navy border-navy ${ghostDefaults}`,
        'orange': `text-orange border-orange ${ghostDefaults}`,
        'yellow': `text-yellow border-yellow ${ghostDefaults}`,
    }

    const colors = mode === 'normal' ? normalColors : ghostColors;

    const classes = `
        ${colors[color]} 
        flex
        items-center
        justify-center

        rounded-full px-4 py-2
        text-xl
        transition-transform
        hover:scale-105

        lg:text-2xl
        lg:px-10

        ${className ?? ''}
    `;

    return classes;
}