const React = require('react');
const Reflux = require('reflux');

const MatrixActions = require('../actions/MatrixActions');
const CredentialsStore = require('../stores/CredentialsStore');

const LoginScreen = React.createClass({

    mixins: [Reflux.connect(CredentialsStore)],

    getInitialState: function () {
        return {
            user_id: '',
            password: ''
        };
    },

    render: function() {

        let user_id = this.state.user_id;
        let password = this.state.password;

        console.log(this.state);

        return <div className="row">
            <h1>{this.state.access_token}</h1>
            <div className="col-xs-offset-2 col-xs-8">
                <form onSubmit={this.handleLogin}>
                    <div className="form-group row">
                        <label className="col-xs-3 form-control-label" htmlFor="user_id">Matrix ID</label>
                        <div className="col-xs-6">
                            <input type="text" className="form-control" id="user_id" placeholder="@bob:matrix.org" onChange={this.handleUserId} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 form-control-label" htmlFor="inputPassword3">Password</label>
                        <div className="col-xs-6">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.handlePassword} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-xs-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-secondary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    },

    handleUserId: function (evnt) {
        this.state.user_id = evnt.target.value;
    },

    handlePassword: function (evnt) {
        this.state.password = evnt.target.value;
    },

    handleLogin: function(evnt) {
        evnt.preventDefault();
        MatrixActions.login(this.state.user_id, this.state.password);

        return;
    }
});
module.exports = LoginScreen;