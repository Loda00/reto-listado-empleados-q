export interface IUser {
  id: number,
  nombre: string,
  correo: string,
  cargo: string,
  departamento: string,
  oficina: string,
  estadoCuenta: string,
}

export interface IError {
  message: string
  status: string
}