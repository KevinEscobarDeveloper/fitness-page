export class Review {
    public photo: string;
    public name: string;
    public state: string;
    public calification: number;
    public opinion: string;

    constructor(name: string, state: string, calification: number, opinion: string, photo: string) {
        this.name = name;
        this.state = state;
        this.calification = calification;
        this.opinion = opinion;
        this.photo = photo;
    }
}