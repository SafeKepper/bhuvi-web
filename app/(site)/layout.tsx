import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import MainPage from "../components/mainpage"

export const metadata = {
  title: 'Buvi',
  description: 'Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 bg-gray-900">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-lg font-bold">BhuvaN</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline font-semibold text-lg text-white">{page.title}</Link>
            ))}

          </div>
        </header>
        
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
