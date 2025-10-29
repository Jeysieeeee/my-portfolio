import React from 'react'
import { Header } from './Header'

export function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden">
        <Header/>
        <main className="flex grow items-center justify-center pt-5">{children}</main>
    </div>
  )
}
