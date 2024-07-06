import { StaticImageData } from "next/image"

export type ProductType = {
    productId: number,
    productImage: StaticImageData,
    title: string,
    listPrice: number | null,
    sellingPrice: number,
    installments: number,
}