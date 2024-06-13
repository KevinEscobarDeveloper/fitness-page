export class Plan {
    public name: string;
    public price: number;
    public characteristics: string[];

    constructor(name: string, price: number, characteristics: string[]) {
        this.name = name;
        this.price = price;
        this.characteristics = characteristics;
    }
}