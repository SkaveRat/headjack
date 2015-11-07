import Reflux from 'reflux';

import MatrixActions from '../actions/MatrixActions.js';

export default Reflux.createStore({
    get: function() {
        return this.data;
    },
    set: function (rooms) {
        this.data = rooms;
        localStorage.rooms = JSON.stringify(rooms);
    },

    getInitialState: function() {
        if(localStorage.rooms) {
            return JSON.parse(localStorage.rooms);
        }

        return {};
    },

    init: function () {
        this.listenTo(MatrixActions.init.success, this.handleInitSync)
    },

    handleInitSync: function (data) {
        this.set(data.rooms);
        this.trigger(this.get());
    }
});