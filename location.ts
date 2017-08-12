import { Base, BaseProps } from './base';

export class LocationProps extends BaseProps {
    public name: string;
    public description: string;
    public hours: string;
    public address;
}

export class Location implements Base {
    props: LocationProps = new LocationProps();
    dbAddress: string = "Locations";
}