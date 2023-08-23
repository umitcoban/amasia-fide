export interface LoginModel {
    username: String,
    password: String
}

export interface RegisterModel {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    citizenNumber: string
}

export interface UserActivateModel {
    email: string,
    activationCode: number
}

export interface TokenModel {
    status: number,
    timeStamp: number,
    token: string
}
export interface ApiResponseModel<Type> {
    status: number,
    timeStamp: number,
    data: Type
}