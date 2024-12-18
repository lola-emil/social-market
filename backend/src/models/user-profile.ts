import { db } from "../config/database";

const TBL_NAME = "user_profile";
export type UserProfile = {
    id: number,
    firstname: string,
    middlename?: string,
    lastname: string,

    profile_img_id: number, // foreign key didto sa media nga table

    user_id: number, // table user foreign key

    created_at: Date,
    updated_at: Date,
};

export async function insert(data: Partial<UserProfile>) {
    const result = await db<UserProfile>(TBL_NAME).insert(data);
    return result;
}

export async function find(query: Partial<UserProfile>) {
    const result = await db<UserProfile>(TBL_NAME).select().where(query);
    return result;
}

export async function updateById(id: number, data: Partial<UserProfile>) {
    const result = await db<UserProfile>(TBL_NAME).update(data).where("id", id);
    return result;
}