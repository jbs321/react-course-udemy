import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('saveComment', () => {
    it('had correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('had correct payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual("New Comment");
    });
});

