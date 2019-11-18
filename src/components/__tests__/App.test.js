import React from 'react';
import App from "components/App";
import CommentBox from "components/CommentBox";
// import shallow from "enzyme";
import CommentList from "components/ComentList";
import {shallow} from "enzyme";

let wrapped;

//globaly run before each `it` excecution
beforeEach(() => {
    wrapped = shallow(<App/>);
});

it("show's a comment box", () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show's a comment list", () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});