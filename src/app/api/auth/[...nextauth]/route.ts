import { ILoginRequest } from "@/app/core/application/dto";
import { AuthService } from "@/app/infrastructure/services/auth.service";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface AuthToken {
  id?: string;
  token?: string;
  photo?: string;
  role?: string;
  name?: string,


}

interface AuthUser {
  id: string;
  email: string;
  role: string;
  token: string;
  photo: string;
  name?: string,
}

export interface CustomSession extends Session {
  user: {
    id?: string;
    token?: string;
    role?: string | null;
    email?: string | null;
    photo?: string | null;
    name?: string,
  };
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo Electrónico", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {

        console.log("object", credentials)
        if (!credentials?.password || !credentials.email) {
          console.error("Credenciales faltantes")
          return null
        }
        const loginRequest: ILoginRequest = {
          password: credentials.password,
          email: credentials.email
        }

        console.log("pase el if ", loginRequest)
        try {
          const authService = new AuthService()
          const response = await authService.login(loginRequest)
          console.log(response)
          const subId: string = response.data.user.sub.toString();

          return {
            email: response.data.user.email,
            id: subId,
            name: response.data.user.name,
            photo: response.data.user.photo,
            token: response.data.access_token
          } as AuthUser

        } catch (error) {
          console.log(error)
          return Promise.reject(new Error(JSON.stringify(error)))
        }
      },
    }),

  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const authUser = user as AuthUser;
        token.id = authUser.id;
        token.token = authUser.token;
        token.role = authUser.role;
        token.photo = authUser.photo;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user.id = (token as AuthToken).id;
      customSession.user.token = (token as AuthToken).token;
      customSession.user.role = (token as AuthToken).role;
      customSession.user.photo = (token as AuthToken).photo;

      return customSession;
    },
  },
  pages:{
    signIn: '/login',
  }
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
