import React from 'react';
import {connect} from 'react-redux';

class CommentList extends React.Component {
    renderComment() {
        const {comments} = this.props;

        return comments.map(comment => {
            return <li key={comment}>{comment}</li>;
        })
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComment()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);