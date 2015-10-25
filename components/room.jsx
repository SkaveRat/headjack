
import React from 'react';


const Room = React.createClass({
    render: function() {
        return <li className="list-group-item">
            <span className="label label-default label-pill pull-right">14</span>
            Foobar
        </li>
    }
});

module.exports = Room;