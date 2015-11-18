const React = require('react');
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');

const CredentialsStore = require('../stores/CredentialsStore');
const RoomStore = require('../stores/RoomStore');

const Sidebar = require('./sidebar.jsx');
const Chatlog = require('./chatlog.jsx');

export default React.createClass({

    mixins: [
        Reflux.connect(CredentialsStore, 'credentials')
    ],

    getInitialState: function () {
        return this.state;
    },

    componentDidMount: function () {
        MatrixActions.init(this.state.credentials);
    },

    render: function () {
        return <div className="container-horizontal">
            <Sidebar />
            <Chatlog />
        </div>
    }
});