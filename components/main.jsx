import React from 'react';
import Reflux from 'reflux';
import Contacts from './contacts.jsx';
import LoginScreen from './loginscreen.jsx';

import CredentialsStore from '../stores/CredentialsStore.js';

const Main = React.createClass({

    mixins: [Reflux.connect(CredentialsStore, 'credentials')],

    render: function() {
        let view = null;

        if(this.state.credentials.access_token) {
            view = <Contacts />;
        }else{
            view = <LoginScreen />;
        }


        return <div className="container">
                {view}
                <div className="col-xs-6">World</div>
            </div>
    }
});
module.exports = Main;