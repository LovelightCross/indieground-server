import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetUsers');   
};

const read = (id: number) => {
    return row('spGetUser', [id]);
};

const destroy = (id: number) => {
    return empty('spDeleteUser', [id]);
};

const create = (first_name: string, last_name: string, email: string, password: string) => {
    return row('spCreateUser', [first_name, last_name, email, password]);
}

const update = (id: number, first_name: string, last_name: string, email: string, password: string) => {
    return empty('spUpdateUser', [id, first_name, last_name, email, password]);
};

const login = (email: string) => {
    return row('spGetUserByEmail' , [email]);
}
export default {
    all,
    read,
    destroy,
    create,
    update,
    login
};