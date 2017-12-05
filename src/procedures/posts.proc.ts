import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetPosts');   
};

const create = (title: string, body: string, userId: string, dateTime: string) => {
    return row('spCreatePost', [title, body, userId, dateTime]);
}

export default {
    all,
    create
};