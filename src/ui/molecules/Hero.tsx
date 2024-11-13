import React from 'react'


interface HeroProps {
  children: React.ReactNode
}
const Hero = ({children}: HeroProps) => {
  return (
    <div className="hero flex flex-col gap-5 text-center my-40 justify-center items-center">
      {children}
  </div>
  )
}

export default Hero