import { CategoryProduct } from './categoryProduct';


export interface Product {
    id?:number,
    name?: string,
    description?: string,
    price?: number,
    availableStock?: number,
    categoryProduct?: CategoryProduct

}



