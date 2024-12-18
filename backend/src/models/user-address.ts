import { db } from "../config/database";

const TBL_NAME = "user_address";
export type UserAddress = {
    id: number,
    house_no: string,
    street: string,
    suburban: string, // barangay
    city: string, // or municipality
    province: string,
    country: string,
    zipcode: string,

    user_id: number, // table user foreign key


    created_at: Date,
    updated_at: Date,
};

export async function insert(data: Partial<UserAddress>) {
    const result = await db<UserAddress>(TBL_NAME).insert(data);
    return result;
}

export async function find(query: Partial<UserAddress>) {
    const result = await db<UserAddress>(TBL_NAME).select().where(query);
    return result;
}

export async function updateById(id: number, data: Partial<UserAddress>) {
    const result = await db<UserAddress>(TBL_NAME).update(data).where("id", id);
    return result;
}