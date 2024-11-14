import { Title } from '@/ui/atoms'
import NavLink from '@/ui/atoms/Link'
import { Header } from '@/ui/molecules'
import React from 'react'


export const HeaderHome = () => {
  return (
    <Header className='flex justify-between m-4 items-center '>

      <Title label='VolunteerConnect' level={1} className='text-blue-600 font-bold text-2xl' />

      <div className="flex gap-3 items-center justify-between w-60">
        <NavLink label='Iniciar sesión' path='/login' className='flex justify-center ' />
        <NavLink label='Registrarse' path='/login' className='bg-black rounded-md text-white w-full h-11 justify-center' />
      </div>
    </Header>
  )
}
