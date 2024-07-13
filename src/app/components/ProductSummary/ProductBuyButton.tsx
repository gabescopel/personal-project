import clsx from "clsx";
import { CheckIcon } from "../Icons/CheckIcon";
import { BuyButtonProps } from "@/types/types";

export function ProductBuyButton({ 
    toggleCart, 
    hasProductId, 
    title, 
    productId 
}: BuyButtonProps) {
    return (
        <button
            onClick={() => toggleCart(productId)}
            className={clsx(
                'flex items-center justify-center gap-1 w-full px-3.5 py-2.5 rounded-md transition-all text-sm md:text-base font-bold outline-none',
                {
                    'bg-buy-button-active text-base-color': hasProductId,
                    'bg-buy-button hover:bg-buy-button-hovered text-white': !hasProductId,
                }
            )}
            aria-label={`${hasProductId ? 'Adicionado' : 'Adicionar'} ${title} ao carrinho`}
        >
            {
                hasProductId
                    ?
                    <>
                        <CheckIcon />
                        <span>ADICIONADO</span>
                    </>
                    :
                    <span>ADICIONAR</span>
            }
        </button>
    )
}