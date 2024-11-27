

type UserAddress = {
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