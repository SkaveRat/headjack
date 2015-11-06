const React = require('react');
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');

const CredentialsStore = require('../stores/CredentialsStore');
const RoomStore = require('../stores/RoomStore');

const Rooms = require('./rooms.jsx');

export default React.createClass({

    mixins: [
        Reflux.connect(CredentialsStore, 'credentials'),
        Reflux.connect(RoomStore, 'rooms')
    ],

    getInitialState: function () {
        return this.state;
    },

    componentDidMount: function () {
        MatrixActions.init(this.state.credentials);
    },

    render: function () {
        return <Rooms />
    }
});