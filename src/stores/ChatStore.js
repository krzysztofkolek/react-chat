import { EventEmitter } from 'events'

import dispatcher from '../dispatcher/ChatDispatcher'
import ChatStoreConstants from '../constants/ChatStoreConstants'

let instance = null;

export class ChatStore extends EventEmitter {
    constructor() {
        super();

        if(!instance){
              instance = this;
              instance.messages = [];
        }

        return instance;
    }

    addMessage(payload) {
        instance.messages.push({
            id: Date.now(),
            author: payload.author,
            dateTime: payload.dateTime,
            message: payload.message
        });

        this.emit('change');
    }

    getAll() {
        return instance.messages;
    }
    
    handleActions(data) {
        console.log('ChatStore dispatcher' + data);
        switch (data.type) {
            case ChatStoreConstants.ADD_MESSAGE:
                addMessage(data);
                break;        
            case ChatStoreConstants.GET_ALL:
                return getAll();
        }
    }
} 
if(instance == null) {
    instance = new ChatStore();
    dispatcher.register(instance.handleActions.bind(instance));
}

export default instance;