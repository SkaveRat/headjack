import MatrixSDK from 'matrix-js-sdk';
import Reflux from 'reflux';

import request from 'request';
import dns from 'dns';

let MatrixActions = Reflux.createActions({
    "login": {children: ["success", "failed"]},
    "init": {children: ["success", "failed"]},
    "room": {children: ["timeline", "failed"]}
});


MatrixActions.login.listen(function (user_id, password) {

    let domain = user_id.split(':')[1];

    dns.resolveSrv('_matrix._tcp.' + domain, (err, data) => {

        let port = ':8448';
        if (!err) {
            domain = data[0].name;
            port = ':' + data[0].port;
        }

        var base_url = 'https://' + domain + port;
        let client = MatrixSDK.createClient({
            request: request,
            baseUrl: base_url
        });

        client.loginWithPassword(user_id, password)
            .then((res) => {
                res.base_url = base_url;
                this.success(res)
            })
            .catch(this.failed);

    });
});

MatrixActions.init.listen(function(credentials) {
    var _this = this;

    let matrixClient = MatrixSDK.createClient({
        baseUrl: credentials.base_url,
        accessToken: credentials.access_token,
        userId: credentials.user_id
    });

    matrixClient.on("syncComplete", function () {
        let rooms = matrixClient.getRooms();
        _this.success({
            rooms: rooms
        })
    });


    matrixClient.on("Room.timeline", function (event, room, start) {
        MatrixActions.room.timeline(room, start)
    });


    matrixClient.startClient();
});
export default MatrixActions;