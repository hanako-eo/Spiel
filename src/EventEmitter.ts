export default class EventEmitter{
    private events: {[x: string]: (...args: any[]) => void} = {}
    public emit(event: string, ...args: any[]): boolean{
        if(!(event in this.events)) return false
        this.events[event](...args)
        return true
    }
    public on(event: string, listener: (...args: any[]) => void){
        this.events[event] = listener
    }
}
