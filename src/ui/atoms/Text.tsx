import React from 'react'

interface TextProps extends React.HTMLProps <HTMLParagraphElement>{
  className: string,
  label: string,
}
export const Text = ({className, label, ...props}: TextProps) => {
  return (
    <p className={`txt-primary ${className}`} {...props}>{label}</p>
  )
}
