import HeaderClient from './Header.client';
import HeaderServer from './Header.server';

export default function Header() {
    return (
        <HeaderClient>
            <HeaderServer />
        </HeaderClient>
    )
}