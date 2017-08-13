import { Base, BaseProps } from './base';

export class LocationProps extends BaseProps {
    public name: string;
    public description: string;
    public hours: string;
    public address;
}

export class Location extends Base {
    public static props: LocationProps = new LocationProps();
    public static dbAddress: string = "Locations";
}