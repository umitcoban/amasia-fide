export interface UserDTO {
    id:number,
    firstName:string,
    middleName?: string,
    lastName: string,
    citizenNumber: string,
    email: string,
    phone: string,
    createdAt: Date,
    updatedAt: Date
}