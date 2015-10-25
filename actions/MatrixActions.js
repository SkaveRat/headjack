import MatrixSDK from 'matrix-js-sdk';
import AppDipatcher from '../dispatcher/AppDispatcher.js'
import RoomConstants from '../constants/RoomConstants.js'

class MatrixActions {

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
        });

        matrixClient.startClient();
    }

}

module.exports = MatrixActions;