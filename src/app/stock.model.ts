export class Stock {
    name: string;
    index: string;
    value: string;
    change_1: string;
    change_2: string;

    constructor({name, index, value, change_1, change_2} :
        {name: string, index: string, value: string, change_1: string, change_2: string}) {
            this.name = name;
            this.index = index;
            this.value = value;
            this.change_1 = change_1;
            this.change_2 = change_2;
        }
}