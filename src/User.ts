import * as faker from 'faker';
import Subject from './Subject';
import IMappable from './IMappable';
import IContent from './IContent';

class User extends Subject implements IMappable, IContent {
    protected firstName: string;
    protected lastName: string;

    constructor() {
        super();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.firstName();
    }

    public describe = function(): string {
        return `<p>Hello ${this.firstName} ${this.lastName}</p>`;
    };
}

export default User;
