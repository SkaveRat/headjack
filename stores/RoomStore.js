import Reflux from 'reflux';

import MatrixActions from '../actions/MatrixActions.js';

export default Reflux.createStore({
    data: {},

    init: function () {
        this.listenTo(MatrixActions.init.success, this.handleInitSync)
    },

    handleInitSync: function (data) {
        this.data = data.rooms;
        this.trigger(this.data);
    }
});