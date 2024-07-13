'use client';

import { useState } from "react";
import Image from "next/image";
import { ProductType } from "@/types/types";

export function ProductImage({ product }: { product: ProductType }) {
  const [loading, setLoading] = useState(true);
  
  return (
    <div className="relative">
      <Image
        src={product.productImage}
        alt={product.title}
        width={400}
        height={700}
        sizes="(max-width: 768px) 162px, 700px"
        className={`object-cover transition-transform duration-500 ${
          loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoadingComplete={() => setLoading(false)}
        // placeholder="blur"
      />
    </div>
  );
}