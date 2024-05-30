import { ProductType } from "@/types/ProductType";
import { ProductImage } from "./ProductImage";

type ProductProps = {
    item: ProductType
}

export const Product = ({ item }: ProductProps) => {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={item} fill/>
            </div>
            <div className="flex justify-between font-bold">
                <h3 className="text-gray-300 w-40 truncate">{item.title}</h3>
            </div>
            <div className="text-md text-teal-300">
                <span>{item.price}</span>
            </div>
            <div className="rounded-md bg-teal-600 text-white px-3.5 py-2.5">
                <button className="flex w-full h-full text-center justify-center text-sm">Adicionar ao Carrinho</button>
            </div>
        </div>
    )
}