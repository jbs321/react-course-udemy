import React from 'react';
import CommentBox from "components/CommentBox";
import CommentList from "components/ComentList";
import {Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div id={"app"} className={"app"}>
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
}

export default App;