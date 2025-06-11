import { ProductCard } from "@/Products";
import { products } from "@/Products/data/products";


export default function ProductsPage() {
    return (
        <div className="grid grid-cals-1 sm:grid-cols-3 gap-2">
            {
                products.map( (product) => (
                    <ProductCard key={ product.id } { ...product } /> 
                ))
            }
        </div>
    );
};