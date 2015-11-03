import React from 'react';
import Contacts from './contacts.jsx';
import LoginScreen from './loginscreen.jsx';
import MatrixActions from '../actions/MatrixActions'


const Main = React.createClass({

    componentDidMount: function() {
        //MatrixActions.init();
    },

    render: function() {

        let loggedIn = false;
        let view = null;


        if(!loggedIn) {
            view = <LoginScreen />;
        }else{
            view = <Contacts />;
        }


        return <div className="container">
                {view}
                <div className="col-xs-6">World</div>
            </div>
    }
});
module.exports = Main;