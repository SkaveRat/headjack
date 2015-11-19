import React from 'react';
import ReactDOM from 'react-dom';
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

    componentWillUpdate: function() {
        var node = ReactDOM.findDOMNode(this.refs.log);
        this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
    },

    componentDidUpdate: function() {
        if (this.shouldScrollBottom) {
            var node = ReactDOM.findDOMNode(this.refs.log);
            node.scrollTop = node.scrollHeight
        }
    },

    render: function () {
        return <section id="chatlog" className="container-vertical flex-5">
            <div id="log" className="flex-8" ref="log">
                {this.state.messages.room_messages.map((event) =>
                <div className="message" key={event.event.event_id}>
                    <strong>{event.sender.name}:</strong> <br/> <span>{event.event.content.body}</span>
                </div>
                    )}
            </div>
            <div id="input" className="flex-1">INPUT</div>
        </section>
    }
});