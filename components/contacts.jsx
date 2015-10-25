const React = require('react');
const RoomStore = require('./../stores/RoomStore');

const Room = require('./room.jsx');

function getRoomState() {
    return {
        allRooms: RoomStore.getAll()
    }
}

const Contacts = React.createClass({

    getInitialState: function() {
        return getRoomState();
    },

    componentDidMount: function() {
        RoomStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        RoomStore.removeChangeListener(this._onChange);
    },

    render: function() {
        let allTodos = getRoomState();

        //for (var key in allTodos.allRooms) {
        //    console.log(key);
        //}

        return <ul className="list-group">

        </ul>
    },

    _onChange: function() {
        this.setState(getRoomState());
    }
});
module.exports = Contacts;