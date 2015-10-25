const React = require('react');

const Contacts = React.createClass({
    render: function() {
        return <ul className="list-group">
            <li className="list-group-item">
                <span className="label label-default label-pill pull-right">14</span>
                Cras justo odio
            </li>
            <li className="list-group-item">
                <span className="label label-default label-pill pull-right">2</span>
                Dapibus ac facilisis in
            </li>
            <li className="list-group-item">
                <span className="label label-default label-pill pull-right">1</span>
                Morbi leo risus
            </li>
        </ul>
    }
});
module.exports = Contacts;