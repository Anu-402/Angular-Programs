import { BookInformation } from './BookInformation';

export class CartInformation
{
    cartId:number;
    customerId:number;
    quantity:number;
    status:string;
    book : BookInformation =new BookInformation();
}