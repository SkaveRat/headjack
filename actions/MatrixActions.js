import MatrixSDK from 'matrix-js-sdk';
import Reflux from 'reflux';

import request from 'request';
import dns from 'dns';

let MatrixActions = Reflux.createActions({
    "login": {children: ["success", "failed"]}
});


MatrixActions.login.listen(function (user_id, password) {

    let domain = user_id.split(':')[1];


    dns.resolveSrv('_matrix._tcp.' + domain,(err, data) => {

        let port = '';
        if(!err) {
            port = ':' + data[0].port;
        }

        let client = MatrixSDK.createClient({
            request: request,
            baseUrl: 'https://' + domain + port
        });

        client.loginWithPassword(user_id, password)
            .then(this.success)
            .catch(this.failed);

    });
});

//import request from 'request';
//
//class MatrixActions {
//
//    static init() {
//        var matrixClient = MatrixSDK.createClient({
//            baseUrl: "https://m.skaverat.net:61448",
//            accessToken: myAccessToken,
//            userId: myUserId
//        });
//
//        matrixClient.on("syncComplete", function(){
//            var rooms = matrixClient.getRooms();
//            AppDipatcher.dispatch({
//                action: {
//                    actionType: RoomConstants.ROOM_LIST,
//                    rooms: rooms
//                },
//                source: 'Event'
//            });
//
//            matrixClient.on("Room.timeline", function (event, state) {
//                AppDipatcher.dispatch({
//                    action: {
//                        actionType: RoomConstants.ROOM_UPDATE,
//                        room: state
//                    },
//                    source: 'Event'
//                })
//            });
//
//        });
//
//        matrixClient.startClient();
//    }
//
//}

module.exports = MatrixActions;