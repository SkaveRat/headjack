import MatrixSDK from 'matrix-js-sdk';
import AppDipatcher from '../dispatcher/AppDispatcher.js'
import RoomConstants from '../constants/RoomConstants.js'

import request from 'request';

class MatrixActions {

    static login(user_id, password) {

        let client = MatrixSDK.createClient({
            request: request,
            baseUrl: 'https://m.skaverat.net:61448'
        });

        client.loginWithPassword(user_id, password)
            .then(function (foo) {
                console.log(foo);
            }).catch(function (foo) {
                console.log(foo);
            });

    }



    static init() {
        var matrixClient = MatrixSDK.createClient({
            baseUrl: "https://m.skaverat.net:61448",
            accessToken: myAccessToken,
            userId: myUserId
        });

        matrixClient.on("syncComplete", function(){
            var rooms = matrixClient.getRooms();
            AppDipatcher.dispatch({
                action: {
                    actionType: RoomConstants.ROOM_LIST,
                    rooms: rooms
                },
                source: 'Event'
            });

            matrixClient.on("Room.timeline", function (event, state) {
                AppDipatcher.dispatch({
                    action: {
                        actionType: RoomConstants.ROOM_UPDATE,
                        room: state
                    },
                    source: 'Event'
                })
            });

        });

        matrixClient.startClient();
    }

}

module.exports = MatrixActions;