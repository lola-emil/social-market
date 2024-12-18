import { Request, Response } from "express";
import { } from "../../../models/user";
import {} from "../../../models/user-address";
import {} from "../../../models/user-profile";



export async function signIn(req: Request, res: Response) {
    const {
        profile,
        address,
        user,
    } = req.body;

    
}