import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'sobre nosotros',
    description: 'Esta pagina habla de la web',
    keywords: ['matias','información','about']
};


export default function AboutPage() {
    return (
        <span className="text-7xl"> About Page </span>
    )
};