export interface LoginModel {
    username: String,
    password: String
}

export interface RegisterModel{
    firstName:string,
    middleName:string,
    lastName:string,
    email:string,
    password:string,
    phone:string,
    citizenNumber:string
}

export interface TokenModel{
    status:number,
    timeStamp: number,
    token:string
}