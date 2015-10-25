const React = require('react');
const Contacts = require('./contacts.jsx');

const Main = React.createClass({
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