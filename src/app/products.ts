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
        description: "OS: Android 12, Realme UI 3.0 , 128GB 6GB RAM" 
    },
    {
        id: 2,
        name: "Vivo",
        price: 8999,
        description:'OS: Android 10, Vivo k9 , 64GB 4GB RAM'
    },
    {
        id: 3,
        name: "MI",
        price: 15000,
        description: 'OS: Android 10, MI 11 , 64GB 4GB RAM'
    },
]