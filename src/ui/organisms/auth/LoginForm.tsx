import { ILoginRequest } from '@/app/core/application/dto'
import { Button } from '@/ui/atoms'
import { FormField } from '@/ui/molecules'
import React from 'react'

const LoginForm = () => {
  return (

    <form action="">
      <FormField<ILoginRequest>
        // control={ }
        type="email"
        label="Correo Electrónico"
        name="userName"
        // error={ }
        placeholder="Ingresa tu correo"
      />

      <FormField<ILoginRequest>
        // control={control}
        type="password"
        label="Contraseña"
        name="password"
        // error={errors.password}
        placeholder="Ingresa tu contraseña"
      />

      <Button type='submit' label='Iniciar sesión' className='w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600'/>

    </form>
  )
}

export default LoginForm;