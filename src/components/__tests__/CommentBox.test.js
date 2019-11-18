import React from 'react';
import CommentBox from "components/CommentBox";
import {mount} from "enzyme";
import Root from 'Root'

let wrapped;

//globaly run before each `it` excecution
beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it("has a textarea and two buttons", () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });

        wrapped.update();
    });

    it('has a text that users can type', function () {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it('after submit form the textarea gets cleaned', function () {
        wrapped.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        wrapped.update();

        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});