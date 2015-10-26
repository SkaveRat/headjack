const React = require('react');
const RoomStore = require('./../stores/RoomStore');

const Room = require('./room.jsx');

function getRoomsState() {
    return {
        rooms: RoomStore.getAll()
    }
}

const Contacts = React.createClass({

    getInitialState: function() {
        return getRoomsState();
    },

    componentDidMount: function() {
        RoomStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        RoomStore.removeChangeListener(this._onChange);
    },

    render: function() {
        let rooms = getRoomsState().rooms;


        rooms.sort((a,b) => {
            return a.timeline[a.timeline.length-1].event.age - b.timeline[b.timeline.length-1].event.age;
        });

        return <div className="col-xs-6">
            <ul className="list-group">
                {rooms.map((room) =>
                    <li className="list-group-item" key={room.roomId}>{room.name}</li>
                )}
            </ul>
        </div>
    },

    _onChange: function() {
        this.setState(getRoomsState());
    }
});
module.exports = Contacts;