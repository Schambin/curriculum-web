'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kauan Schamber - Desenvolvedor Full Stack',
  description: 'Portfólio profissional de Kauan Schamber, Desenvolvedor Full Stack especializado em JavaScript, React, e Node.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {React.cloneElement(children as React.ReactElement, { toggleDarkMode })}
      </body>
    </html>
  )
}