import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { constant } from "src/constant";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "Rajnish",
            password: "Raj123",
            email: "rajnish@gmail.com",
            role: constant.ROLES.Web_Dev
        },
        {
            username: "manish",
            password: "manish123",
            email: "manish@gmail.com",
            role: constant.ROLES.Game_Dev
        }
    ];

    getUserByUserName(userName: string): User {
        return this.users.find((user: User) => user.username === userName)
    }
}