// export interface ILoginResponse {
//   message: string;
//   token: string;
// }

export interface ILoginResponse {
  statusCode: number;
  message:    string;
  data:       Data;
}

export interface Data {
  access_token: string;
  user:         User;
}

export interface User {
  email: string;
  role:  string;
  sub:number;
  photo: string;
  name?: string,
}