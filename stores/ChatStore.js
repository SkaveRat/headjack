import Reflux from 'reflux';

import UiActions from '../actions/UiActions';

export default Reflux.createStore({

    data: {
        room_messages: [],
        messages: {
            '!GnEEPYXUhoaHbkFBNX:matrix.org': ['foo', 'bar'],
            '!XqBunHwQIXUiqCaoxq:matrix.org': ['baz']
        }
    },

    init: function () {
        this.listenTo(UiActions.rooms.select, this.handleRoomsSelect);
    },

    handleRoomsSelect: function (room_id) {
        this.data.room_messages = this.data.messages[room_id];
        this.trigger(this.data);
    }
});