export class BaseProps {
    public createdDate: Date;
    public updatedDate: Date;
    public updatedBy: string;
    public createdBy: string;
}

export abstract class Base {
    static dbAddress: string;
    static props: BaseProps;
}