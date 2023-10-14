import '../globals.css'

export const metadata = {
  title: 'Ora Admin',
  description: 'By Bhuvi!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
