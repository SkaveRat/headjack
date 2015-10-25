import React from 'react';
import Contacts from './contacts.jsx';
import MatrixActions from '../actions/MatrixActions'


const Main = React.createClass({

    componentDidMount: function() {
        MatrixActions.init();
    },

    render: function() {
        return <div className="container">
            <div className="row">
                <Contacts />
                <div className="col-xs-6">World</div>
            </div>
            </div>
    }
});
module.exports = Main;