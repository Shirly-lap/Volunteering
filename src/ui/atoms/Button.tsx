import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  children?: React.ReactNode
  className: string,
  Icon?: IconType,
  onClick?: () => void;

}
export const Button = ({ label, Icon, onClick, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`btn-primary ${className}`} onClick={onClick}>
      {Icon &&  <Icon size={20}/>}
      {label}
    </button>
  )
}
