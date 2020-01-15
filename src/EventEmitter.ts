export default class EventEmitter{
    private static events: {[x: string]: (...args: any[]) => void} = {}
    public static emit(event: string, ...args: any[]): boolean{
        if(!(event in this.events)) return false
        this.events[event](...args)
        return true
    }
    public static on(event: string, listener: (...args: any[]) => void){
        this.events[event] = listener
    }
}
