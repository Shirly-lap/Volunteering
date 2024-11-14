"use client";
import {
  ErrorResponse,
  ILoginRequest,
} from "@/app/core/application/dto";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
});

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter()
  const handleLogin = async (data: ILoginRequest) => {
    console.log(data);
    //SERVICE LOGIN
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(result);

      if (result?.error) {
        console.log("Ocurrio un error", JSON.parse(result.error));
        handleError(JSON.parse(result.error))
        return;
      }
      router.push("/dashboard/projects")
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = (error: unknown) => {
    // Aseguramos que el error se trate como un ErrorResponse
    const errorData = error as ErrorResponse;
  
    // Verificamos si la respuesta de error tiene los campos que esperamos
    if (errorData) {
      // Si hay un mensaje de error, lo mostramos en el formulario (por ejemplo, en el campo 'email')
      if (errorData.message) {
        setError("email", { // Suponiendo que 'email' es el campo que quieres mostrar el error
          message: errorData.message, // El mensaje general de error
        });
      }
  
      // Puedes manejar otros casos específicos con el campo 'error' o 'statusCode' si es necesario
      if (errorData.error) {
        console.error(`Error type: ${errorData.error}`);
      }
  
      if (errorData.statusCode) {
        console.log(`HTTP Status Code: ${errorData.statusCode}`);
      }
    }
  };
  

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >

      <FormField<ILoginRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        name="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />

      <FormField<ILoginRequest>
        control={control}
        type="password"
        label="Contraseña"
        name="password"
        error={errors.password}
        placeholder="Ingresa tu contraseña"
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-black text-white rounded-lg font-medium hover:bg-blue-600"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};
