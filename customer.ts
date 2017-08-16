import { Base, BaseProps } from './base';

export class CustomerProps extends BaseProps {
    public name: string;
    public phone: string;
    public email: string;    
}

export class Customer extends Base {
    public static props: CustomerProps = new CustomerProps();
    public static dbAddress: string = "Customers";
}