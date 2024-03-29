
import { BaseProps, Base } from './base';


export class ProductProps extends BaseProps{
    public name: string;
    public price: string;
    public imageUrl?: string;
    public locationID?: string;
    public description?: string;
    public categoryID?: string;
}

export class Product extends Base{

    public static props: ProductProps = new ProductProps;
    public static dbAddress: string = "Products";

}