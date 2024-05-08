import { PHONE_NUMBER } from "../constants";

const DEFAULT_MESSAGE = 'Tenho interesse no treinamento vtex';

interface openWhatsAppProps {
    tel?: string,
    message?: string
}
export default function openWhatsApp({
    tel = PHONE_NUMBER,
    message = DEFAULT_MESSAGE
 }: openWhatsAppProps) {
    const formatedMessage = encodeURIComponent(message);
    window.location.href = `https://api.whatsapp.com/send?phone=${tel}&text=${formatedMessage}`;
}