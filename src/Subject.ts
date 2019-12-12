import * as faker from 'faker';

abstract class Subject {
    protected location: {
        lat: number;
        lng: number;
    }

    protected constructor() {
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    public getLocation(): { lat: number; lng: number } {
        return {
            lat: this.location.lat,
            lng: this.location.lng
        };
    }
}

export default Subject;
