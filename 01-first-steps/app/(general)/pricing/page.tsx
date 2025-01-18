import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nuestros precios',
    description: 'Detallamos los precios de nuestros servicios',
};

export default function PricingPage(){
    return (
        <span className="text-7xl"> Pricing Page </span>
    )
};