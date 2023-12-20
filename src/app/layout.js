import { Inter } from 'next/font/google'
import './globals.css'
import SessionProvider from './SessionProvider'
import GlobalState from './context/page'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Giphy App',
  description: 'Giphy app using firebase and next authentication and giphhy api',
}

export default function RootLayout({ children }) {
  return (
    <GlobalState>
      <html lang="en" className='h-full'>
        <body className='h-full'>
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
      </html>
    </GlobalState>
  )
}
