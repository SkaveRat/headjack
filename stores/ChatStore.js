import Reflux from 'reflux';

import UiActions from '../actions/UiActions';
import MatrixActions from '../actions/MatrixActions';

export default Reflux.createStore({

    data: {
        room_messages: [],
        messages: {}
    },

    init: function () {
        this.listenTo(UiActions.rooms.select, this.handleRoomsSelect);
        this.listenTo(MatrixActions.room.timeline, this.handleRoomTimeline);
    },

    handleRoomsSelect: function (room_id) {
        this.data.room_messages = this.data.messages[room_id];
        this.trigger(this.data);
    },

    handleRoomTimeline: function (event, room, toStartOfTimeline) {

        if (!this.data.messages[room.roomId])
            this.data.messages[room.roomId] = [];

        if (event.event.type == 'm.room.message') {
            if (toStartOfTimeline) {
                this.data.messages[room.roomId].unshift(event);
            } else {
                this.data.messages[room.roomId].push(event);
            }
        }
        this.trigger(this.data);
    }
});