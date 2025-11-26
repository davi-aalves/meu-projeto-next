import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 font-sans dark:bg-slate-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-blue-50 dark:bg-slate-900 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-blue-600 dark:text-blue-400">
            Bem-vindo ao Mini-Site Next.js
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-4 px-2">
            Este é um projeto desenvolvido com Next.js para praticar criação de
            rotas, componentes e estrutura inicial de um projeto web moderno.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-4 px-2">
            Explore as páginas disponíveis e conheça mais sobre este projeto.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/sobre"
          >
            Sobre
          </Link>
        </div>
      </main>
    </div>
  );
}
