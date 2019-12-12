interface IMappable {
    getLocation(some?: string): {
        lat: number;
        lng: number;
    };
}

export default IMappable;
