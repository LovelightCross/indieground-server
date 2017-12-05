import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetVenues');   
};

const create = (venueId: string, name: string, address1: string, address2: string, city: string, state: string, zip: string) => {
    return row('spCreateVenues', [venueId, name, address1, address2, city, state, zip]);
}

export default {
    all,
    create
};