import '../globals.css'
import Link from "next/link"

export const metadata = {
  title: 'Buvi',
  description: 'Portfolio',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10 bg-gray-900">
        {/* <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent text-lg font-bold">BhuvaN</Link>
          <Link href={'./RESUME'} className="text-cyan-400 flex items-center gap-5 text-lg font-bold">
            RESUME
          </Link>
        </header> */}
        
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}
