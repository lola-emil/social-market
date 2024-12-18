import { db } from "../config/database";

const TBL_NAME = "user_contact_no";
export type UserContactNo = {
    id: number,
    contact_no: string,

    user_id: number, // fk user table

    created_at: Date,
    updated_at: Date,
};

export async function insert(data: Partial<UserContactNo>) {
    const result = await db<UserContactNo>(TBL_NAME).insert(data);
    return result;
}

export async function find(query: Partial<UserContactNo>) {
    const result = await db<UserContactNo>(TBL_NAME).select().where(query);
    return result;
}


export async function updateById(id: number, data: Partial<UserContactNo>) {
    const result = await db<UserContactNo>(TBL_NAME).update(data).where("id", id);
    return result;
}

