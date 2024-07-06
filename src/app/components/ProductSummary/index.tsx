'use client';

import { ProductType } from "@/types/ProductType";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/utils";
import { useFavorites } from '../../contexts/FavoritesContext/FavoritesContext';
import { useCart } from '../../../app/contexts/CartContext/CartContext';
import { ProductWishlist } from "./ProductWishlist";
import { ProductBuyButton } from "./ProductBuyButton";

export function ProductSummary({ item }: { item: ProductType }) {
    const { favorites, toggleFavorite } = useFavorites();
    const { cart, toggleCart } = useCart();

    const { productId, listPrice, sellingPrice, title, installments } = item;

    const hasProductId = cart.includes(productId);
    const installmentsValue = installments > 0 ? formatPrice(sellingPrice / installments) : null;

    return (
        <div className="flex flex-col gap-6 md:gap-8 rounded-lg bg-white pointer p-4 md:p-8 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.14)] transition-shadow">
            <div className="relative">
                <ProductImage product={item} />
                <ProductWishlist
                    id={productId}
                    isFavorited={favorites.includes(productId)}
                    toggleFavorite={toggleFavorite}
                />
            </div>

            <div className="flex flex-col gap-5 md:gap-6">
                <h3 className="font-medium text-base-color max-[768px]:truncate">{title}</h3>

                <div className="flex flex-col gap-1 text-md text-teal-300">
                    {listPrice && listPrice !== sellingPrice && (
                        <span className="font-medium line-through text-gray-extralight text-xs md:text-sm">
                            R${formatPrice(listPrice)}
                        </span>
                    )}
                    <span className="font-semibold text-price-highlight text-xl md:text-2xl">
                        R${formatPrice(sellingPrice)}
                    </span>

                    {installments && installmentsValue && (
                        <p className="text-xs font-medium text-gray-light">
                            em até <span className="text-base-color">{installments}x de R${installmentsValue}</span> sem juros
                        </p>
                    )}
                </div>
            </div>

            <div>
                <ProductBuyButton productId={productId} toggleCart={toggleCart} hasProductId={hasProductId} title={title} />
            </div>
        </div>
    );
}