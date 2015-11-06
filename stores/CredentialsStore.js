import Reflux from 'reflux';

import MatrixActions from '../actions/MatrixActions.js';


export default Reflux.createStore({

    data: {},

    getInitialState() {
        return this.data;
    },

    init: function() {
        this.listenTo(MatrixActions.login.failed, this.handleFailedLoginRequest);
        this.listenTo(MatrixActions.login.success, this.handleSuccessLoginRequest)
    },

    handleSuccessLoginRequest: function (res) {
        this.data = {
            user_id: res.user_id,
            access_token: res.access_token,
            home_server: res.home_server
        };

        this.trigger(this.data);
    },

    handleFailedLoginRequest: function (res) {
        console.log("login failed: " + res.errcode);
    }
});