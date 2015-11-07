import Reflux from 'reflux';

import MatrixActions from '../actions/MatrixActions.js';


export default Reflux.createStore({

    data: {},

    getCredentials: function() {
        return this.data;
    },
    setCredentials: function (credentials) {
        this.data = credentials;
        localStorage.credentials = JSON.stringify(credentials);
    },

    getInitialState: function() {
        if(localStorage.credentials) {
            return JSON.parse(localStorage.credentials);
        }

        return {};
    },

    init: function() {
        this.listenTo(MatrixActions.login.failed, this.handleFailedLoginRequest);
        this.listenTo(MatrixActions.login.success, this.handleSuccessLoginRequest)
    },

    handleSuccessLoginRequest: function (res) {
        this.setCredentials({
            base_url: res.base_url,
            user_id: res.user_id,
            access_token: res.access_token,
            home_server: res.home_server
        });

        this.trigger(this.getCredentials());
    },

    handleFailedLoginRequest: function (res) {
        console.log("login failed: " + res.errcode);
    }
});