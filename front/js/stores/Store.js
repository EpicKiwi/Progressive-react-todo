const Rx = require("rxjs");

class Store {

    constructor(){
        this.state = {};
        this.actionSubjects = {};
        this.commitSubject = new Rx.Subject()
    }

    commit(action,options){
        let actionName = action+"Action"
        if(!this[actionName] || typeof this[actionName] != 'function') throw new Error("No action named "+actionName+" on this store");
        let payload = {
            action: action,
            options: options,
            state: this.state
        };
        let result = this[actionName](options,payload);
        if(result === false) return;
        if(this.actionSubjects[action]){
            this.actionSubjects[action].next(payload)
        }
        this.commitSubject.next(payload)
        return payload;
    }

    getCommitObservable(){
        return this.commitSubject
    }

    getActionObservable(action){
        if(!this.actionSubjects[action])
            this.actionSubjects[action] = new Rx.Subject()
        return this.actionSubjects[action]
    }

}

module.exports = Store;