const Store = require("./Store")

const storageKeyPrefix = "todolist"

class ProgressiveStore extends Store {

    constructor(){
        super()
        this.state.progressiveState = {
            loaded: false,
            synced: false
        }
        this.commit("loadStorage")
        this.commitSubject.subscribe((e) => this.state.progressiveState.synced = false)
        this.commitSubject.throttleTime(1000).subscribe((e) => this.commit("saveStorage"))
    }

    // ACTIONS

    loadStorageAction(options,payload){
        let storageContent = window.localStorage.getItem(this.localStorageKey);
        if(storageContent){
            Object.assign(this.state,JSON.parse(storageContent))
            this.state.progressiveState.loaded = true
            this.state.progressiveState.synced = true
        }
    }

    saveStorageAction(options,payload){
        let toSaveContent = Object.assign({},this.state)
        toSaveContent.progressiveState = undefined
        window.localStorage.setItem(this.localStorageKey,JSON.stringify(toSaveContent))
        this.state.progressiveState.synced = true
        console.log(`saved state of ${this.localStorageKey}`)
    }

    // UTILS

    get localStorageKey(){
        return `${storageKeyPrefix}.${this.constructor.name}`
    }

}

module.exports = ProgressiveStore