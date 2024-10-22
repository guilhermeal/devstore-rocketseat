import { api } from "@/data/api";
import { IProduct } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<IProduct[]> {
  const response = await api("/products/featured", {
    cache: 'no-store',
    // next: {
    //   revalidate: 60 * 60,  // refaz o cache a cada segundo (60s*60s = 3600s == 1h)
    // }
  });
  const products = await response.json();

  return products;
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        key={`/product/${highlightedProduct.slug}`}
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg dark:bg-zinc-800 bg-zinc-300 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highlightedProduct.image}
          width={800}
          height={800}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">
            {highlightedProduct.title}
          </span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-white px-4 font-semibold">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={`/product/${product.slug}`}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg dark:bg-zinc-800 bg-zinc-300 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              width={450}
              height={450}
              quality={100}
              alt=""
              className="group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate text-white">
                {product.title}
              </span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-white px-4 font-semibold">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
