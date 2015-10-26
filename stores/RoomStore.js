
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var RoomConstants = require('../constants/RoomConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _rooms = {};

/**
 * Create or update a Room item.
 * @param {Room} room Room id
 */
function create(room) {
    _rooms[room.roomId] = room
}

var RoomStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getAll: function() {
        return _rooms;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch(action.actionType) {
            case RoomConstants.ROOM_LIST:
                action.rooms.forEach(function (room) {
                    create(room);
                });
                RoomStore.emitChange();
                break;

            case RoomConstants.ROOM_UPDATE:
                create(action.room);
                RoomStore.emitChange();
                break;

        }

        return true; // No errors. Needed by promise in Dispatcher.
    })

});

module.exports = RoomStore;