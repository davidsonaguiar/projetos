import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projetos Automatizados do GitHub",
  description: "Testando a biblioteca github-automated-repos",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <h1 className="p-4 text-center scroll-m-20 text-primary text-4xl font-extrabold tracking-tight lg:text-5xl">
            github-automated-repos
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
