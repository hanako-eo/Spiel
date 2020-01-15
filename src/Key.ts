import EventEmitter from "./EventEmitter"

export default class Key{
    private tick = 0
    constructor(private key: string, private date: number){
        EventEmitter.on("key:tick-increment", () =>this.tick++)
    }
    getKey(){
        return this.key
    }
    getTime(){
        return Date.now() - this.date
    }
    getTick(){
        return this.tick
    }
}