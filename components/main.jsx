import React from 'react';
import Reflux from 'reflux';
import Chat from './chat.jsx';
import LoginScreen from './loginscreen.jsx';

import CredentialsStore from '../stores/CredentialsStore.js';

const Main = React.createClass({

    mixins: [Reflux.connect(CredentialsStore, 'credentials')],

    render: function() {
        let view = null;

        if(this.state.credentials.access_token) {
            view = <Chat />;
        }else{
            view = <LoginScreen />;
        }


        return <div className="container">
                {view}
            </div>
    }
});
module.exports = Main;