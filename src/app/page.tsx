import { getProducts } from "@/services/api";
import { ProductType } from "@/types/ProductType";
import { Product } from "./components/Product";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {
          products.map((item: ProductType) => (
            <Product item={item} />
          ))
        }
      </div>
    </div>
  );
}
