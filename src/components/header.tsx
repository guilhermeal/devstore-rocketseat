import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold text-black dark:text-white"
        >
          devstore
        </Link>

        <form
          action=""
          className="flex w-[320px] items-center gap-3 rounded-full px-5 py-3 bg-zinc-200 ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700"
        >
          <Search className="w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-500" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            alt=""
            src="https://github.com/guilhermeal.png"
            className="h-6 w-6 rounded-full"
            height={24}
            width={24}
          />
        </Link>
      </div>
    </div>
  );
}
