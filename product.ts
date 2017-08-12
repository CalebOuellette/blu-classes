
import { BaseProps, Base } from './base';


export class ProductProps extends BaseProps{
    public name: string;
    public displayName: string;
    public price: string;
    public imageUrl?: string;
    public locationID?: string;
    public description: string;
}

export class Product extends Base{

    public props: ProductProps = new ProductProps;
    public dbAddress: string = "Products";

}