export class BaseProps {
    public createdDate: Date;
    public updatedDate: Date;
    public updatedBy: string;
    public createdBy: string;
}

export abstract class Base {
    abstract dbAddress: string;
    abstract props: BaseProps;
}