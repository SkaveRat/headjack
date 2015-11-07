const React = require('react');

const UiActions = require('../../actions/UiActions');

export default React.createClass({

    render: function() {

        let room_id = this.props.roomId;
        let room_name = this.props.roomName;

        return <li onClick={this.handleRoomSelect.bind(null, room_id)} className="list-group-item">{room_name}</li>
    },

    handleRoomSelect: function (event) {
        UiActions.rooms.select(event);
    }
});