const React = require('react');
const Reflux = require('reflux');
const RoomStore = require('./../stores/RoomStore');

const Room = require('./partials/room.jsx');


export default React.createClass({
    mixins: [Reflux.connect(RoomStore, 'room_store')],

    getInitialState: function() {
        return {room_store:{}};
    },

    render: function() {
        let rooms = this.state.room_store.rooms || [];

        return <ul id="roomlist" className="list-group">
                {rooms.map((room) =>
                    <Room key={room.roomId} roomName={room.name} roomId={room.roomId} />
                )}
            </ul>
    }
});