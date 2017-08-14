import { Base, BaseProps } from './base';

export class LocationProps extends BaseProps {
    public name: string;
    public description: string;
    public hours: string;
    public address: string;
    public logoUrl: string;
    public partnered: boolean;
}

export class Location extends Base {
    public static props: LocationProps = new LocationProps();
    public static dbAddress: string = "Locations";
}