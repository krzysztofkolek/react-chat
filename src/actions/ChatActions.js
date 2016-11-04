import dispatcher from '../dispatcher/ChatDispatcher'
import ChatStoreConstants from '../constants/ChatStoreConstants'

export function addChatMessage(payload) {
    dispatcher.dispatch({
        type: ChatStoreConstants.ADD_MESSAGE,
        payload: payload
    });
}

export function getAllMessages() {
    dispatcher.dispatch({
        type: ChatStoreConstants.GET_ALL
    });
}