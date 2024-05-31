import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'Аренда спецтехники в Минске и Беларуси',
  description: 'У нас вы можете взять в аренду спецтехнику в Минске и других городах Беларуси - экскаваторы, бульдозеры, самосвалы и другую строительную технику. Большой парк техники, доставка по всей стране, выгодные цены. Звоните прямо сейчас!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="android-chrome-192x192" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="android-chrome-512x512" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="google-site-verification" content="elE_9qoRzFPkKkJXY_pMCHBRQKRc9mNMGBNI37mwvP0" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
