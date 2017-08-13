import { Base, BaseProps } from './base';

export class CategoryProps extends BaseProps {
    public name: string;
    public description: string;
    public locationID: string;
}

export class Category extends Base {
    public static props: CategoryProps = new CategoryProps();
    public static dbAddress: string = "Locations";
}