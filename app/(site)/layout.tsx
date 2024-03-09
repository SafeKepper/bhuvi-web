import '../globals.css'
// import Link from "next/link"


export const metadata = {
  title: 'BhuvaN',
  description: 'Stay Strong!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <link rel="icon" href="https://img.icons8.com/doodle/96/winner.png" sizes="<generated>" />
      <body className="max-w-4xl mx-auto py-1 pl-8 bg-white">
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
