import React from 'react'

interface HeaderProps{
  children: React.ReactNode,
  className?: string,
}

export const Header = ({children, className}: HeaderProps) => {
  return (
    <nav className={className} >
      {children}

    </nav>
  )
}
