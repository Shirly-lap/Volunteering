import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link';

interface LinkProps {
  path: string,
  label: string,
  Icon?: IconType
  className: string,
}

const NavLink = ({ path, label, Icon, className }: LinkProps) => {
  return (
    <Link href={path} className={`link-primary ${className}`}>
      {Icon && <Icon size={20}></Icon>}
      {label}
    
    </Link>
  )
}

export default NavLink;