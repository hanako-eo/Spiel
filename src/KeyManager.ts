import Key from "./Key"

export default class KeyManager{
    private keys: {[x: string]: Key} = {}
    public add(key: string){
        if(!this.has(key)) this.keys[key] = new Key(key, Date.now())
    }
    public remove(key: string){
        delete this.keys[key]
    }
    public has(key: string){
        return key in this.keys
    }
    public getKey(key: string){
        if(!this.has(key)) return null
        return this.keys[key]
    }
    public clear(){
        this.keys = {}
    }
}