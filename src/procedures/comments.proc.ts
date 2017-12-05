import { rows, row, empty } from "./base.proc";

const all = () => {
    return rows('spGetComments');   
};

const create = (userId: string, postId: string, body: string,) => {
    return row('spCreateComment', [userId, postId, body]);
}

export default {
    all,
    create
};