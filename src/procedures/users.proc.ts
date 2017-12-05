import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetUsers');   
};

const create = (first_name: string, last_name: string, email: string, password: string) => {
    return row('spCreateUser', [first_name, last_name, email, password]);
}
export default {
    all,
    create
};