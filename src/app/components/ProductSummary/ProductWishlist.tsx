'use client';

import { useState } from "react";
import { WishlistEmpty } from "../Icons/WishlistEmpty";
import { WishlistFill } from "../Icons/WishlistFill";
import { WishlistProps } from "@/types/types";


export function ProductWishlist({ id, isFavorited, toggleFavorite }: WishlistProps) {
    const [ hover, setHover ] = useState<boolean>(false);

    return (
        <button 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => toggleFavorite(id)}
            className="absolute top-0 right-0 outline-none"
        >
            { isFavorited ? <WishlistFill hover={hover} /> : <WishlistEmpty hover={hover} /> }
        </button>
    );
}