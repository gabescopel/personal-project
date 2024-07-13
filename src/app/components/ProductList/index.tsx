import { ProductSummary } from "../ProductSummary";
import { FavoritesProvider } from "../../contexts/FavoritesContext/FavoritesContext";
import { CartProvider } from "../../contexts/CartContext/CartContext";
import { products } from "@/services/api";

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
