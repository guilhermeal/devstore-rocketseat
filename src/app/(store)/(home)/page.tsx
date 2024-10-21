import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg dark:bg-zinc-800 bg-zinc-300 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-java.png"
          width={800}
          height={800}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-white px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg dark:bg-zinc-800 bg-zinc-300 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          width={450}
          height={450}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-white px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg dark:bg-zinc-800 bg-zinc-300 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          width={450}
          height={450}
          quality={100}
          alt=""
          className="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate text-white">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 text-white px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
