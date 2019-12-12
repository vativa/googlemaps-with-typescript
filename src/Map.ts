import IMappable from './IMappable';
import IContent from './IContent';

class Map {
    private map: google.maps.Map;

    constructor(id: string) {
        this.map = new google.maps.Map(document.getElementById(id), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    public addMarker = function (subject: (IMappable & IContent)): void {
        const marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: subject.getLocation().lat,
                lng: subject.getLocation().lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: subject.describe()
            });
            infoWindow.open(this.map, marker);
        });
    }
}

export default Map;
