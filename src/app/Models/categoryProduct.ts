import { Product } from './Product';

export interface CategoryProduct {
    id?:number
    name?: string,
    description?: string,
    products?: Array<Product>

}