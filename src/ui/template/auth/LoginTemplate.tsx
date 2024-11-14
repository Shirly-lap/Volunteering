import { Text, Title } from '@/ui/atoms'
import NavLink from '@/ui/atoms/Link'
import { LoginForm } from '@/ui/organisms'
import React from 'react'

const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100">
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
        <Title label='Iniciar Sesión' className='font-bold text-3xl text-center' level={1} />
        <Text className='text-gray-400 text-center' label='Ingresa tus credenciales para acceder a tu cuenta' />
        <LoginForm />
        <NavLink path='/register' className='text-blue-500' label='Olvidaste tu contraseña?' />
        <div className="register flex gap-0">
          <Text label='No tienes una cuenta?' className='text-center' />
          <NavLink className='' path='/register' label='Regitrate aquí' />
        </div>
      </div>
    </div>
  )
}

export default LoginTemplate