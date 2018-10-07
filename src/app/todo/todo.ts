export class Todo {
    private id: number;
    private title: string;
    private description: string;
    private complete: boolean;
    constructor(values: Object = {}){
        Object.assign(this, values);
    }
    
    public get getId() : number {
        return this.id;
    }
    public get getTitle() : string {
        return this.title;
    }
    public get getDescription() : string {
        return this.description;
    }
    public get isComplete() : boolean {
        return this.complete;
    }
    public set setId(id : number) {
        this.id = id;
    }    
    public set setTitle(title : string) {
        this.title = title;
    }
    public set setDescription(description : string) {
        this.description = description;
    }

    public set setComplete(complete : boolean) {
        this.complete = complete;
    }
    
}