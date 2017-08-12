import { Base, BaseProps } from './base';

export class OrderItemProps extends BaseProps {
    public name: string; //ID to be used by our drivers and Management in order to have a clear understanding.
    public price: string; //
    public description: Date; //Time at which the customer confirmed the order.
    public productID?: string;
    public orderID: string;
}

export class OrderItem implements Base {
    props: OrderItemProps = new OrderItemProps();
    dbAddress: string = "OrdersItems";
}