import { Button, Text, Title } from '@/ui/atoms'
import React from 'react'
import { icons } from '../../../app/core/application/dto/common/Icon';
import Image from 'next/image';

const ProjectsTemplate = () => {
  return (
    <>
      <div className="flex bg-white justify-between items-center p-2 ">
        <Title label='Dashboard de proyectos' level={2} className='capitalize font-bold text-xl' />
        <div className="flex gap-3  items-center bg-blue-400 mr-4  justify-end">
          <div className="flex gap-6 ">
            <Button label='descargar reporte' className=' capitalize bg-black text-white font-semibold h-11 justify-center gap-1' Icon={icons.file} />
            <Button label='nuevo proyecto' className='capitalize bg-black text-white font-semibold h-11 justify-center gap-1' Icon={icons.add} />
          </div>
          <div className="flex gap-2 items-center p-3">
            <Image
              src="/favicon.ico"  // Ruta de la imagen (local o URL externa)
              alt="Descripción de la imagen"
              width={30}  // Ancho en píxeles
              height={30} // Alto en píxeles
              className='border rounded-full'
            />
            <Text className='text-xs w-full capitalize' label="Maria Cristina" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsTemplate