// Typescript maps
import Map from './Map';
import User from './User';
import Company from './Company';

const map = new Map('map');
const user = new User();
const company = new Company();

console.log(map);
console.log(user);
console.log(company);

map.addMarker(user);
map.addMarker(company);
