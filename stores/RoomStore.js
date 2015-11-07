import Reflux from 'reflux';

import MatrixActions from '../actions/MatrixActions.js';
import UiActions from '../actions/UiActions.js';

export default Reflux.createStore({

    /**
     * data
     *  - rooms: Array ([Room, Room])
     *  - selectedRoom: String (room_id)
     */
    data: {},

    set: function (rooms) {
        this.data.rooms = rooms;
        this.sortRooms();
    },

    //TODO: add selectedRoom to localstorage
    //TODO: add rooms to a storage (nedb?) for earlier room list on startup

    init: function () {
        this.listenTo(MatrixActions.init.success, this.handleInitSync);
        this.listenTo(UiActions.rooms.select, this.handleRoomSelect);
    },

    handleInitSync: function (data) {
        this.set(data.rooms);
        this.trigger(this.data);
    },

    handleRoomSelect: function(data) {
        this.data.selectedRoom = data;
        this.trigger(this.data);
    },

    sortRooms: function () {
        this.data.rooms.sort((a,b) => {
            return a.timeline[a.timeline.length-1].event.age - b.timeline[b.timeline.length-1].event.age;
        });

    }
});