import React from 'react';
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');
const ChatStore = require('../stores/ChatStore');

export default React.createClass({

    mixins: [
        Reflux.connect(ChatStore, 'messages')
    ],

    getInitialState: function () {
        return {messages: {room_messages: []}};
    },

    render: function () {

        return <section id="chatlog" className="container-vertical">
            <div id="log">
                {this.state.messages.room_messages.map((event) =>
                <li key={event.event.event_id} className="list-group-item">
                    <span>{event.event.content.body}</span>
                </li>
                    )}
            </div>
            <div id="input">INPUT</div>
        </section>
    }
});