


type UserProfile = {
    id: number,
    firstname: string,
    middlename?: string,
    lastname: string,

    profile_img_id: number, // foreign key didto sa media nga table

    user_id: number, // table user foreign key

    created_at: Date,
    updated_at: Date,
};