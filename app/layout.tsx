import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test MCP Next.js App',
  description: 'A minimal Next.js application scaffold',
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
