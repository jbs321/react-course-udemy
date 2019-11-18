import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = {
        comment: ''
    };

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {comment} = this.state;
        const {saveComment} = this.props;

        if((new RegExp(/^\s*$/)).test(comment)) {
            this.setState({comment: ''});
            return;
        }

        saveComment(this.state.comment);

        this.setState({comment: ''});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchCommnets}>Fetch Comment</button>
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);