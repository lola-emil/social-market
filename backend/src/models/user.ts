import { db } from "../config/database";

const TBL_NAME = "user";
export type User = {
    id: number,
    username: string,
    email: string,
    password: string,

    created_at: Date,
    updated_at: Date,
};


export async function insert(data: Partial<User>) {
    const result = await db<User>(TBL_NAME).insert(data);
    return result;
}

export async function find(query: Partial<User>) {
    const result = await db<User>(TBL_NAME).select().where(query);
    return result;
}

export async function updateById(id: number, data: Partial<User>) {
    const result = await db<User>(TBL_NAME).update(data).where("id", id);
    return result;   
}