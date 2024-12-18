import { db } from "../config/database"


const TBL_NAME = "user_email";
export type UserEmail = {
    id: number,

    email: string,

    user_id: number,

    created_at: Date,
    updated_at: Date
}


export async function insert(data: Partial<UserEmail>) {
    const result = await db<UserEmail>(TBL_NAME).insert(data);
    return result;
}

export async function find(query: Partial<UserEmail>) {
    const result = await db<UserEmail>(TBL_NAME).select().where(query);
    return result;
}


export async function updateById(id: number, data: Partial<UserEmail>) {
    const result = await db<UserEmail>(TBL_NAME).update(data).where("id", id);
    return result;
}
