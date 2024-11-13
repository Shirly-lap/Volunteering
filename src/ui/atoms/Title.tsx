import React from 'react'


interface TitleProps {
  label: string,
  level: 1 | 2 | 3 | 4 | 5 | 6,
  className: string;

}
export const Title = ({ label, level, className }: TitleProps) => {
  const TitleTag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <TitleTag className={className}>{label}</TitleTag>
  )
}
