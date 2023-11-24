export interface IEmploye{
  id: number;
  nombre: string;
  correo: string;
  cargo: string;
  departamento: string;
  oficina: string;
  estadoCuenta: string;
}

export interface IResponseListEmploye {
  status: string;
  data: IEmploye[];
  total: number;
}