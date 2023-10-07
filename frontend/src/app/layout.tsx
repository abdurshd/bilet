import Header from '@/components/Header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ReduxProvider } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Header/>  
        {children}
        <ToastContainer/>
        </ReduxProvider>
        </body>
    </html>
  )
}
