import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/posts/1/comments', {
        status: 200,
        response: [
            {name: "Fetch #1"},
            {name: "Fetch #2"},
        ]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find(".fetch-comments").simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    });
});