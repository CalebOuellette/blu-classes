import { Base, BaseProps } from './base';

export class OrderItemProps extends BaseProps {
    public name?: string; 
    public price?: string;
    public description: string;    
    public productID?: string;
    public orderID: string;
    public locationDescription?: string;
    public locationID?: string;
    public alternativeItemDescription?: string;
}

export class OrderItem extends Base {
    public static props: OrderItemProps = new OrderItemProps();
    public static dbAddress: string = "OrdersItems";
}