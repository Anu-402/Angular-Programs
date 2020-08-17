import { CartInformation } from './CartInformation';
import { CustomerInformation } from './CustomerInformation';

export class OrderInformation
{
    orderId:number;
    recipientName:String;
    recipientPhoneNumber:String;
    streetAddress:String;
    city:String;
    zipCode:number;
    country:String;
    shippingAddress:String;
    quantity:number;
    totalPrice:number;
    orderStatus:String;
    paymentMethod:String;
    orderDate:String;
    cart:CartInformation= new CartInformation();
    customer:CustomerInformation =new CustomerInformation();
 }