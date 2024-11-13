import { Text, Title } from '@/ui/atoms'
import NavLink from '@/ui/atoms/Link'
import LoginForm from '@/ui/organisms/auth/LoginForm'
import React from 'react'

const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100">
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
        <Title label='Iniciar Sesión' className='' level={1}/>
        <Text className='' label='Ingresa tus credenciales para acceder a tu cuenta'/>
        <LoginForm />
        <NavLink path='/register' className='' label='Olvidaste tu contraseña?'/>
        <Text label='No tienes una cuenta?' className=''>
          <NavLink className='' path='/register' label='Regitrate aquí'/>
        </Text>
      </div>
    </div>
  )
}

export default LoginTemplate