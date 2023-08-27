import Header from '@/components/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Аренда спецтехники в Минске и Беларуси',
  description: 'У нас вы можете взять в аренду спецтехнику в Минске и других городах Беларуси - экскаваторы, бульдозеры, самосвалы и другую строительную технику. Большой парк техники, доставка по всей стране, выгодные цены. Звоните прямо сейчас!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
