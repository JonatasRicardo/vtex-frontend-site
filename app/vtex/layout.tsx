import '../globals.css'
import { Inter, Sulphur_Point } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sulphur_point = Sulphur_Point({
  subsets: ['latin'],
  variable: '--font-sulphur-point',
  weight: ["300", "400", "700"]
})

export const metadata = {
  title: 'O melhor curso de desenvolvimento VTEX IO! [teste grátis]',
  description: 'Treinamento para desenvolvedores VTEX IO!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
     <head>
        <meta name="theme-color" content="#142032" />
        <meta name="msapplication-TileColor" content="#142032" />
        <title>O melhor curso de desenvolvimento VTEX IO! [teste grátis]</title>
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
              "@id": "#product",
              "@type": "IndividualProduct",
              "description": "Treinamento para desenvolvedores VTEX IO!",
              "name": "O melhor curso de desenvolvimento VTEX IO! [teste grátis]"
            })
          }}
        />
      </head>
      <body className={`${sulphur_point.className} bg-navy`}>{children}</body>
    </html>
  )
}
