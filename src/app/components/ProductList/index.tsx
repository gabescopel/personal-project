import { ProductType } from "@/types/ProductType";
import { ProductSummary } from "../ProductSummary";
import { FavoritesProvider } from "../../contexts/FavoritesContext/FavoritesContext";
import { CartProvider } from "../../contexts/CartContext/CartContext";
import productImage from '../../../../public/images/productImage.png'

const products: ProductType[] = [
    {
        productId: 1,
        productImage: productImage,
        title: 'Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
        listPrice: 2813,
        sellingPrice: 2599,
        installments: 10,
    },
    {
        productId: 2,
        productImage: productImage,
        title: 'Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
        listPrice: 2813,
        sellingPrice: 2599,
        installments: 10,
    },
];

export function ProductList() {
    return (
        <FavoritesProvider>
            <CartProvider>
                <div className="App grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 xl:gap-6">
                    {products.map((item) => (
                        <ProductSummary
                            key={item.productId}
                            item={item}
                        />
                    ))}
                </div>
            </CartProvider>
        </FavoritesProvider>
    );
}
