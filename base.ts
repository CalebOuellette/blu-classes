export class BaseProps {
    public createdDate: number;
    public updatedDate: number;
    public updatedBy: string;
    public createdBy: string;
    public $key: string;
}

export abstract class Base {
    static dbAddress: string;
    static props: BaseProps;
}