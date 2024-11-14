import { icons } from '@/app/core/application/dto'
import { Title } from '@/ui/atoms'
import NavLink from '@/ui/atoms/Link'
import { Header } from '@/ui/molecules'
import React from 'react'

const navBarItems=[
  {path: "/projects", title:"Proyectos" , Icon:icons.folder},
  {path: "/projects", title:"Cerrar sesion", Icon: icons.salir},


]

const HeaderProjects = () => {
  return (
    <aside className='flex-col p-5 flex gap-5 bg-white '>
      <Title className='font-bold text-2xl' level={2} label='VolunteerConnect'/>
      <Header className='flex flex-col gap-2'>
        {navBarItems.map(( item,key)=>(
          <NavLink path={item.path} key={key} label={item.title} className='gap-2 flex  bg-slate-100 h-16 border-none' Icon={item.Icon}/>
        ))}
      </Header>
    </aside>
  )
}

export default HeaderProjects