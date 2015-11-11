const React = require('react');
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');

const CredentialsStore = require('../stores/CredentialsStore');
const RoomStore = require('../stores/RoomStore');

const Rooms = require('./rooms.jsx');
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
        return <div className="row">
            <div className="col-xs-4">
                <Rooms />
            </div>
            <div className="col-xs-8">
                <Chatlog />
            </div>

        </div>;

    }
});