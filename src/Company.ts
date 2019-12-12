import * as faker from 'faker';
import Subject from './Subject';
import IMappable from './IMappable';
import IContent from './IContent';

class Company extends Subject implements IMappable, IContent {
    protected companyName: string;
    protected catchPhrase: string;

    constructor() {
        super();
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
    }

    public describe = function (): string {
        return `
            <div style="text-align: center;">
                <h3>${this.companyName}</h3> 
                <p>${this.catchPhrase}</p>
            </div>
        `;
    }
}

export default Company;
