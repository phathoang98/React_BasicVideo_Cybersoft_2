
/**
 *  ----- FILE CHỨA CÁC "ACTION" CỦA DỰ ÁN
 *  snippet: rxaction
 */

import { ADD_COMMENT } from "../types/reduxAppType";


export const addCommentAction = (userComment) => ({
    type: ADD_COMMENT,
    userComment
})
