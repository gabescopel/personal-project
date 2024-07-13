import { StaticImageData } from "next/image"

export type ProductType = {
    productId: number,
    productImage: StaticImageData | string,
    title: string,
    listPrice: number | null,
    sellingPrice: number,
    installments: number,
}

export type BuyButtonProps = {
    toggleCart: (id: number) => void,
    productId: number,
    hasProductId: boolean,
    title: string,
}

export type WishlistProps = {
    id: number,
    isFavorited: boolean, 
    toggleFavorite: (id: number) => void,
}