import axios from 'axios';
import {SAVE_COMMENT, FETCH_COMMENTS} from "./types";

export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchCommnets() {
    const response = axios.get('http://jsonplaceholder.typicode.com/posts/1/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}