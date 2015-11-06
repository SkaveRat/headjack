const React = require('react');
const Reflux = require('reflux');
const RoomStore = require('./../stores/RoomStore');
const Room = require('./room.jsx');


export default React.createClass({
    mixins: [Reflux.connect(RoomStore, 'rooms')],

    getInitialState: function() {
        return this.state;
    },

    render: function() {
        let roomsObject = this.state.rooms;
        let rooms = [];
        for (var key in roomsObject) {
            rooms.push(roomsObject[key]);
        }

        rooms.sort((a,b) => {
            return a.timeline[a.timeline.length-1].event.age - b.timeline[b.timeline.length-1].event.age;
        });

        return <ul className="list-group">
                {rooms.map((room) =>
                    <li className="list-group-item" key={room.roomId}>{room.name}</li>
                )}
            </ul>
    }
});