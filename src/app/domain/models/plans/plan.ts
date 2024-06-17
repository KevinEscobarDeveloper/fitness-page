export class Plan {
    public name: string;
    public priceMonth: number;
    public priceYear: number;
    public characteristics: string[];

    constructor(name: string, priceMonth: number, priceYear: number, characteristics: string[]) {
        this.name = name;
        this.priceMonth = priceMonth;
        this.priceYear = priceYear;
        this.characteristics = characteristics;
    }
}