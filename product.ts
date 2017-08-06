
import { BaseProps, Base } from './base';


export class ProductProps extends BaseProps{
    public name: string;
    public displayName: string;
    public price: string;
    public imageUrl: string;
}

export class Product extends Base{

    public static props: ProductProps = new ProductProps;
    public static dbAddress: string = "Products";


}