import { IsNotEmpty } from "class-validator"

export class User{
    @IsNotEmpty()
    name: string
    phone: string
    constructor(
      name: string,
      phone: string
    )
    {
        this.name = name;
        this.phone = phone;
    }
}