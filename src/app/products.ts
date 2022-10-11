export interface Product{
    id:number;
    name:string;
    price:number;
    description:string;
}
export const products = [
    {
        id: 1,
        name: "Real me",
        price: 10000,
        description: 'A large phone with one of the best screens'
    },
    {
        id: 2,
        name: "Vivo",
        price: 8999,
        description:'A large phone with worst features'
    },
    {
        id: 3,
        name: "MI",
        price: 15000,
        description: 'A large phone with Best features with advanced'
    },
]