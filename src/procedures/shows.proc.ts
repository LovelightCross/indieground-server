import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetShows');   
};

const create = (showId: string, venueId: string, name: string, startTime: string, endTime: string, price: string, url: string) => {
    return row('spCreateShow', [showId, venueId, name, startTime, endTime, price, url]);
}

export default {
    all,
    create
};