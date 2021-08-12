export interface UserData {
  token?: undefined | string;
  preference?: any;
  userNumber?: number;
  DrugList?: undefined | object
  Procedure?: undefined | object
}


export interface User {
  name: string
  info: string
  characterstics: string
  gender: string
  notes: string
  image: string
  knowFrom: string
  email: string
}

export interface Login {
  email: string
  password: string
  role: string
}
export interface Signup {
  fname: string
  lname: string
  email: string
  password: string
  confirmPassword?: string
  device_type?: string
  device_id?: string
  role?: string
}

