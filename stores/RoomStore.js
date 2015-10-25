
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var RoomConstants = require('../constants/RoomConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _rooms = {}; // collection of rooms

/**
 * Create a Room item.
 * @param {string} id Room id
 */
function create(id) {
    // Using the current timestamp in place of a real id.
    _rooms[id] = {
        id: id,
        members: 0,
        name: id
    };
}

/**
 * Delete a Room
 * @param {string} id
 */
function destroy(id) {
    delete _rooms[id];
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
        var room_id;

        switch(action.actionType) {
            case RoomConstants.ROOM_LIST:
                console.log(action.rooms);
                break;

            // add more cases for other actionTypes, like TODO_UPDATE, etc.
        }

        return true; // No errors. Needed by promise in Dispatcher.
    })

});

module.exports = RoomStore;