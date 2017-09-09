import { Base, BaseProps } from './base';

export class AppSettingsProps extends BaseProps  {
    public isOpen: boolean;
    public closedText: string;
    public closedSubText: string;
    public deliveryFee: number;
}


export class AppSettings extends Base {
    public static props: AppSettingsProps = new AppSettingsProps();
    public static dbAddress: string = "AppSettings";
}