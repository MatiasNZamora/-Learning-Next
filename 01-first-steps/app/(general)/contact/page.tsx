import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'informacion de contacto',
    description: 'esta pagina no da la informacion de como contactarnos',
};

export default function ContactPage(){
    return (
        <span className="text-7xl"> Contact Page </span>
    )
};