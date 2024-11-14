import { Button, Text, Title } from '@/ui/atoms'
import Hero from '@/ui/molecules/Hero'
import React from 'react'

const HeroHomePage = () => {
  return (
    <>
      <Hero>
        <Title className='capitalize font-bold text-4xl' level={1} label='colabora, colabora cambia el mundo' />
        <div className="w-4/12">
          <Text className='text-xl	' label='Únete a nuestra comunidad de voluntarios y organizadores. 
          Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad.' />
        </div>
        <div className="flex gap-3 w-1/4">
          <Button className='capitalize bg-black rounded-md text-white w-full h-11 justify-center' label='explora proyectos' />
          <Button
            className='capitalize bg-slate-100 w-full h-11 text-center border border-slate-300 justify-center'
            label='comenzar como organizador' />
        </div>
      </Hero>
    </>
  )
}

export default HeroHomePage