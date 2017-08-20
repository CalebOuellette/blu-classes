import { Base, BaseProps } from './base';

export class OrderProps extends BaseProps {
    public externalID: string; //ID to be used by our drivers and Management in order to have a clear understanding.
    public customerID: string; //
    public orderTime: number; //Time at which the customer confirmed the order.
    public paymentType: string;    
    public to: string;
}

export class Order extends Base {
    public static props: OrderProps = new OrderProps();
    public static dbAddress: string = "Orders";
}