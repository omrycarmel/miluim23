import { IsNotEmpty } from "class-validator"

export class User{
    @IsNotEmpty()
    privateNumber: number;
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    phone: string
    constructor(
      name: string,
      phone: string,
      privateNumber: number
    )
    {
        this.name = name;
        this.phone = phone;
        this.privateNumber = privateNumber;
    }
}