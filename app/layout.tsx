import './globals.css'
import { Inter, Sulphur_Point } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sulphur_point = Sulphur_Point({
  subsets: ['latin'],
  variable: '--font-sulphur-point',
  weight: ["300", "400", "700"]
})

export const metadata = {
  title: 'ensinando.tech',
  description: 'Ensinando tecnologia para quem não tem tempo a perder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#001447" />
        <meta name="msapplication-TileColor" content="#001447" />
        <title>O melhor curso de desenvolvimento VTEX IO!</title>
        <meta name="description" content="Treinamento para desenvolvedores VTEX IO!" />
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              "description": "Ensinando tecnologia para quem não tem tempo a perder",
              "name": "ensinando.tech",
            })
          }}
        />
      </head>
      <body className={`${sulphur_point.className} bg-lightGray`}>{children}</body>
    </html>
  )
}
