'use client'
import Header from '@/components/Header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Header/>  
        {children}
        <ToastContainer/>
        </Provider>
        </body>
    </html>
  )
}
