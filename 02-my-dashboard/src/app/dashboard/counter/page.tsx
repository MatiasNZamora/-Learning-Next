import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata:Metadata = { 
    title: 'Shopping Cart',
    description: 'Un simple contador'
};

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span> Productos en el carrito de compras </span>
            <CartCounter value={4} />
        </div>
    );
}