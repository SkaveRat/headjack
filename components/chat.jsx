import React from 'react';
import ChatStore from '../stores/ChatStore.js';


function getChatState() {
    return {}
}

const Chat = React.createClass({

    getInitialState: function() {
        return getChatState();
    },

    componentDidMount: function() {
        ChatStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        RoomStore.removeChangeListener(this._onChange);
    },

    render: function() {

        return <div className="col-xs-6">

            <h1>Hello world!</h1>


        </div>
    },

    _onChange: function() {
        this.setState(getChatState());
    }
});
module.exports = Chat;