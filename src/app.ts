import EventEmitter from "./EventEmitter"
import SpielInterface from "./../types/index"
import InvisibleClass from "./InvisibleClass"
import uniformFunction from "./uniformFunction"
import KeyManager from "./KeyManager"
const isClass = (fn) =>{
  try {
    return /^\s*class/.test(fn.toString())
  } catch (error) {
    return false
  }
}
let self = {
  startOut: {},
  iout: {},
  cancelOut: {}
}
function timeoutfn(fn: (i: number) =>void, time: number, n: number = 1){
  if(uniformFunction(fn) in self.cancelOut === false){
    if(uniformFunction(fn) in self.startOut === false){
      self.startOut[uniformFunction(fn)] = null
      self.iout[uniformFunction(fn)] = 0
    }
    if(self.startOut[uniformFunction(fn)] === null) self.startOut[uniformFunction(fn)] = Math.trunc((Date.now() + time))
    const intervalFunction = () =>{
      if(self.startOut[uniformFunction(fn)] <= Math.trunc((Date.now()))){
        self.startOut[uniformFunction(fn)] = null
        fn(self.iout[uniformFunction(fn)])
        if(++self.iout[uniformFunction(fn)] < n){
          if(self.startOut[uniformFunction(fn)] === null) self.startOut[uniformFunction(fn)] = Math.trunc((Date.now() + time))
        }
        else clearInterval((interval as unknown as number) + (self.iout[uniformFunction(fn)] = 0))
      }
    }
    const interval = setInterval(intervalFunction, 1)
  }
}
function canceltimeoutfn(fn: (i: number) =>void){
  self.cancelOut[uniformFunction(fn)] = true
}
let nTick = {}
let cancelTick = {}
function tickfn(fn: () =>void, tick: number){
  if(uniformFunction(fn) in cancelTick === false){
    if(uniformFunction(fn) in nTick === false) nTick[uniformFunction(fn)] = 0
    if(++nTick[uniformFunction(fn)] >= tick){
      fn()
      nTick[uniformFunction(fn)] = 0
    }
  }
}
function canceltickfn(fn: () =>void){
  cancelTick[uniformFunction(fn)] = true
}
export function ex(Class: new (args: any) =>any, ...args: any): any{
  return new Class(args)
}
export namespace Loader{
  export function Image(link: string){
    return new Promise<HTMLImageElement>((wait, fail) =>{
      const img = document.createElement("img")
      img.title = "Image"
      img.src = link
      img.onload = () =>{
        EventEmitter.emit("loaded")
        wait(img)
      }
      img.onerror = fail
    })
  }
  export function Audio(link: string){
    return new Promise<HTMLAudioElement>((wait, fail) =>{
      const audio = document.createElement("audio")
      audio.title = "Audio"
      audio.src = link
      audio.onloadeddata = () =>{
        EventEmitter.emit("loaded")
        wait(audio)
      }
      audio.onerror = fail
    })
  }
  export function Text(text: string, style?: {fontSize?: number, fontFamily?: string, color?: string, alpha?: number, padding?: number}){
    return new Promise<SpielInterface.TextInterface>((wait, fail) =>{
      const fontSize = "fontSize" in (style || {}) ? style.fontSize : 10
      const fontFamily = "fontFamily" in (style || {}) ? style.fontFamily : "sans-serif"
      const color = "color" in (style || {}) ? style.color : "#000"
      const alpha = "alpha" in (style || {}) ? style.alpha : 1
      const padding = "padding" in (style || {}) ? style.padding : 5
      setTimeout(() =>{
        EventEmitter.emit("loaded")
        wait({
          fontSize, 
          fontFamily,
          color,
          text, 
          alpha,
          padding,
          title: "Text"
        })
      })
    })
  }
}

// Class
export namespace Entity{
  export class Image implements SpielInterface.EntityInterface{
    public use: string
    public index = 1
    public body = null
    public scale = 1
    public game: Game
    public scene: SpielInterface.SceneInterface
    public hidden = false
    public fixed = false
    public canvas: HTMLCanvasElement
    public x: number
    public y: number
    public entityWidth: number
    public entityHeight: number
    public key: KeyManager
    init(){}
    afterRedraw(){}
    redraw(){}
    beforeRedraw(){}
    tick(fn: () =>void, tick: number = 1): void{ return tickfn(fn, tick) }
    cancelTick(fn: () =>void): void{ return canceltickfn(fn) }
    timeout(fn: (i: number) =>void, time: number, n?: number){ return timeoutfn(fn, time, n) }
    cancelTimeout(fn: (i: number) =>void){ return canceltimeoutfn(fn) }
    changeScene(name: string | number){}
    audio(name: string): HTMLAudioElement{ return document.createElement("audio") }
    collide(entity: string, border: number | null): boolean{ return false }
    getEntity(entity: string): SpielInterface.EntityInterface{ return Object.assign({}, this) }
  }
  export class Text extends Image implements SpielInterface.TextEntityInterface{
    public replaced: Array<[string | RegExp, any]> = []
    setFontSize(v: number){}
    setFontFamily(v: string){}
    setColor(v: string){}
    setAlpha(v: number){}
    setPadding(v: number){}
    getFontSize(): number{return 0}
    getFontFamily(): string{return ""}
    getColor(): string{return ""}
    getAlpha(): number{return 0}
    getPadding(): number{return 0}
  }
  export class Sprit extends Image implements SpielInterface.SpritEntityInterface{
    public sprit = {x: 0, y: 0}
    public animationSpeed = 300
    animation(o: {x?: number | Array<number>, y?: number | Array<number>}, step?: (n: number) =>void){}
  }
  export class Camera implements SpielInterface.CameraInterface{
    public canvas: HTMLCanvasElement
    public x: number = 0
    public y: number = 0
    public width: number
    public height: number
    public scene: SpielInterface.SceneInterface
    public game: Game
    public background: Promise<HTMLImageElement>
    init(){}
    update(){}
    tick(fn: () =>void, tick: number = 1): void{ return tickfn(fn, tick) }
    cancelTick(fn: () =>void): void{ return canceltickfn(fn) }
    timeout(fn: (i: number) =>void, time: number, n?: number){ return timeoutfn(fn, time, n) }
    cancelTimeout(fn: (i: number) =>void){ return canceltimeoutfn(fn) }
    audio(name: string): HTMLAudioElement{ return document.createElement("audio") }
    getEntity(entity: string): SpielInterface.EntityInterface{ return Object.assign({}, (this as unknown as SpielInterface.EntityInterface)) }
    getTarget(): SpielInterface.EntityInterface{ return Object.assign({}, (this as unknown as SpielInterface.EntityInterface)) }
    setTarget(entity: string){}
  }
}
export class Game{
  public fps = 60
  public state = {}
  private key = new KeyManager()
  private scenes: SpielInterface.SceneInterface[]
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private use: string | number
  private audio: {[x: string]: HTMLAudioElement} = {}
  private sceneId: number
  private saveObject: {[x: string]: SpielInterface.SceneEntity} = {}
  private load: {[x: string]: HTMLImageElement | HTMLAudioElement | SpielInterface.TextInterface} = {}
  private camera: {[x: number]: SpielInterface.CameraInterface} = {}
  private cameraBackground: {[x: number]: HTMLImageElement} = {}
  private target: {[x: number]: SpielInterface.EntityInterface} = {}
  constructor(o: SpielInterface.OptionInterface, private w = 800, private h = 600){
    this.state = o.state || {}
    this.canvas = o.canvas ? o.canvas : document.body.appendChild(document.createElement("canvas"))
    this.canvas.height = this.h
    this.canvas.width = this.w
    this.context = this.canvas.getContext("2d")
    if(o.pixel) this.canvas.style.imageRendering = "pixelated"
    this.scenes = o.scene
    this.sceneId = 0
    this.use = this.scenes[this.sceneId].name
    for(const entityName in o.load) o.load[entityName].then((l) =>{
      if(l instanceof HTMLAudioElement) this.audio[entityName] = l
      else this.load[entityName] = l
    })
    let i = 0
    EventEmitter.on("loaded", () =>{
      this.context.clearRect(0, 0, this.w, this.h)
      let per = Math.round((++i / Object.keys(o.load).length) * 100)
      if(per > 100) this.start(o)
      else if("loadScene" in o) o.loadScene(this.context, per)
      if(per === 100) EventEmitter.emit("loaded")
    })
  }
  public createSaveJson(): string{
    const o = {
      currentSceneId: this.sceneId,
      currentSceneName: this.use,
      allScene: Object.assign({}, this.saveObject)
    }
    for(const sceneId in o.allScene){
      for(const entityName in o.allScene[sceneId]){
        delete o.allScene[sceneId][entityName].canvas
        o.allScene[sceneId][entityName].key = []
      }
    }
    return JSON.stringify(o)
  }
  private setEntity(o: SpielInterface.OptionInterface, scene: SpielInterface.SceneInterface, entityName: string, l?: HTMLImageElement | HTMLAudioElement | SpielInterface.TextInterface){
    const invisible = new InvisibleClass();
    const entity = scene.entity[entityName]
    if(entity.x === undefined) entity.x = 0
    if(entity.y === undefined) entity.y = 0
    entity.scene = scene
    entity.game = this
    entity.canvas = this.canvas
    entity.getEntity = function(entity){
      if(scene.entity[entity] instanceof Entity.Camera) throw new TypeError("You can't get the camera")
      return Object.assign({}, scene.entity[entity])
    }
    entity.audio = (name) =>{
      if(!(name in o.load)) throw new ReferenceError(`${name} is not loaded or defined with this name`)
      if(name in this.audio) return this.audio[name]
      throw new TypeError(`${name} is not Audio Element`)
    }
    if(!(entity instanceof Entity.Camera) && entityName !== "@camera"){
      entity.changeScene = (name) =>{
        this.sceneId = this.scenes.findIndex((scene) =>scene.name === name)
        if(this.sceneId !== -1){
          if(!(this.sceneId in this.saveObject)) this.saveObject[this.sceneId] = this.scenes[this.sceneId].entity
          this.use = this.scenes[this.sceneId].name
        }
      }
      if(l instanceof HTMLImageElement){
        if(entity.entityWidth === undefined) entity.entityWidth = l.width
        if(entity.entityHeight === undefined) entity.entityHeight = l.height
        entity.collide = function(this: SpielInterface.EntityInterface, entity, border = null){
          if(border === null){
            if(scene.entity[entity].body === null) return this.x < scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) &&
              this.x + this.entityWidth > scene.entity[entity].x &&
              this.y < scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) &&
              this.y + this.entityHeight > scene.entity[entity].y
            return this.x < scene.entity[entity].x + scene.entity[entity].body.x + scene.entity[entity].body.width &&
              this.x + this.entityWidth > scene.entity[entity].x + scene.entity[entity].body.x &&
              this.y < scene.entity[entity].y + scene.entity[entity].body.y + scene.entity[entity].body.height &&
              this.y + this.entityHeight > scene.entity[entity].y + scene.entity[entity].body.y
          }
          return (this.x < scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) &&
            this.x + this.entityWidth > scene.entity[entity].x &&
            this.y < scene.entity[entity].y + (border * scene.entity[entity].scale) &&
            this.y + this.entityHeight > scene.entity[entity].y) ||
            (this.x < scene.entity[entity].x + (border * scene.entity[entity].scale) &&
            this.x + this.entityWidth > scene.entity[entity].x &&
            this.y < scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) &&
            this.y + this.entityHeight > scene.entity[entity].y) || 
            (this.x < scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) &&
            this.x + this.entityWidth > scene.entity[entity].x &&
            this.y < scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) &&
            this.y + this.entityHeight > scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) - (border * scene.entity[entity].scale)) ||
            (this.x < scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) - (border * scene.entity[entity].scale) &&
            this.x + this.entityWidth > scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) &&
            this.y < scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) &&
            this.y + this.entityHeight > scene.entity[entity].y)
        }
        if(entity instanceof Entity.Sprit){
          (entity as SpielInterface.SpritEntityInterface).animation = invisible.anim()
        }
      }else{
        entity.setFontSize = (v: number) =>{(l as SpielInterface.TextInterface).fontSize = v}
        entity.setFontFamily = (v: string) =>{(l as SpielInterface.TextInterface).fontFamily = v}
        entity.setColor = (v: string) =>{(l as SpielInterface.TextInterface).color = v}
        entity.setAlpha = (v: number) =>{(l as SpielInterface.TextInterface).alpha = v}
        entity.setPadding = (v: number) =>{(l as SpielInterface.TextInterface).padding = v}
        entity.getFontSize = () =>(l as SpielInterface.TextInterface).fontSize
        entity.getFontFamily = () =>(l as SpielInterface.TextInterface).fontFamily
        entity.getColor = () =>(l as SpielInterface.TextInterface).color
        entity.getAlpha = () =>(l as SpielInterface.TextInterface).alpha
        entity.getPadding = () =>(l as SpielInterface.TextInterface).padding
      }
    }else if(entity instanceof Entity.Camera && entityName === "@camera"){
      entity.getTarget = () =>{
        return this.target[this.sceneId]
      }
      entity.setTarget = (entity) =>{
        if(scene.entity[entity] instanceof Entity.Camera) throw new TypeError("You can't target the camera")
        this.target[this.sceneId] = scene.entity[entity]
      }
    }
  }
  private start(o: SpielInterface.OptionInterface){
    window.onkeydown = (ev: KeyboardEvent) =>{
      ev.preventDefault()
      const key = [ev.ctrlKey ? "Ctrl" : null, ev.altKey ? "Alt" : null, ev.shiftKey ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Deconste" ? "Del" : ev.key === " " ? "Space" : ev.key]
        .filter((keys) =>keys !== null)
        .join("+")
      if(key !== "Alt+F4") ev.preventDefault()
      this.key.add(key)
    }
    window.onkeyup = (ev: KeyboardEvent) =>this.key.remove([ev.ctrlKey || ev.key === "Control" ? "Ctrl" : null, ev.altKey || ev.key === "Alt" ? "Alt" : null, ev.shiftKey || ev.key === "Shift" ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Deconste" ? "Del" : ev.key === " " ? "Space" : ev.key]
      .filter((keys) =>keys !== null)
      .join("+"))
    if(this.sceneId !== -1) this.scene(o, this.sceneId)
  }
  private scene(o: SpielInterface.OptionInterface, sceneId: number){
    if(!(sceneId in this.saveObject)) this.saveObject[sceneId] = this.scenes[sceneId].entity
    setTimeout(async () =>{
      if("@camera" in this.saveObject[sceneId]){
        if(isClass(this.saveObject[sceneId]["@camera"])) this.saveObject[sceneId]["@camera"] = ex(this.saveObject[sceneId]["@camera"] as unknown as new () =>SpielInterface.CameraInterface)
        this.setEntity(o, this.scenes[sceneId], "@camera")
        this.camera[sceneId] = (this.saveObject[sceneId]["@camera"] as unknown as SpielInterface.CameraInterface)
        if("init" in this.camera[sceneId]){
          this.camera[sceneId].init()
          if(o.save || ("save" in o)) this.camera[sceneId].init = () =>{}
        }
        this.cameraBackground[sceneId] = await this.camera[sceneId].background
        this.camera[sceneId].width = this.cameraBackground[sceneId].width
        this.camera[sceneId].height = this.cameraBackground[sceneId].height
        this.drawCamera(sceneId)
      }
      for(const entityName in this.saveObject[sceneId]){
        if(entityName !== "@camera"){
          if(isClass(this.saveObject[sceneId][entityName])) this.saveObject[sceneId][entityName] = ex(this.saveObject[sceneId][entityName] as unknown as new () =>SpielInterface.EntityInterface)
          this.setEntity(o, this.scenes[sceneId], entityName, this.load[entityName] || this.load[this.saveObject[sceneId][entityName].useImage])
          if("init" in this.saveObject[sceneId][entityName]){
            this.saveObject[sceneId][entityName].init()
            if(o.save || ("save" in o)) this.saveObject[sceneId][entityName].init = () =>{}
          }
          this.draw(entityName, sceneId)
        }
      }
      let i = 0
      setInterval(() =>{
        this.fps = i
        i = 0
      }, 1000)
      const update = () =>{
        i++
        EventEmitter.emit("key:tick-increment")
        this.context.clearRect(0, 0, this.w, this.h)
        this.update(o, sceneId)
        if(this.use === this.scenes[sceneId].name) requestAnimationFrame(update)
        else if(sceneId !== -1) this.scene(o, this.sceneId)
      }
      requestAnimationFrame(update)
    })
  }
  private drawCamera(sceneId: number){
    this.context.drawImage(
      this.cameraBackground[sceneId],
      this.camera[sceneId].x, 
      this.camera[sceneId].y
    )
  }
  private draw(entityName: string, sceneId: number){
    if(entityName in this.saveObject[sceneId]){
      const o = this.load[this.saveObject[sceneId][entityName].use] || this.load[entityName]
      if(o instanceof HTMLImageElement){
        if("sprit" in this.saveObject[sceneId][entityName]) this.context.drawImage(
          o,
          (this.saveObject[sceneId][entityName].entityWidth * (this.saveObject[sceneId][entityName] as SpielInterface.SpritEntityInterface).sprit.x),
          (this.saveObject[sceneId][entityName].entityHeight * (this.saveObject[sceneId][entityName] as SpielInterface.SpritEntityInterface).sprit.y),
          this.saveObject[sceneId][entityName].entityWidth,
          this.saveObject[sceneId][entityName].entityHeight,
          this.saveObject[sceneId][entityName].x + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].x),
          this.saveObject[sceneId][entityName].y + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].y),
          this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale,
          this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale
        ) 
        else this.context.drawImage(
          o, 
          this.saveObject[sceneId][entityName].x + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].x), 
          this.saveObject[sceneId][entityName].y + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].y),
          this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale,
          this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale
        )
      }
      else if(!(o instanceof HTMLAudioElement)){
        let text = o.text
        if("replaced" in this.saveObject[sceneId][entityName]) [(["", ""] as [string, string]), ...(this.saveObject[sceneId][entityName] as SpielInterface.TextEntityInterface).replaced].forEach((arr) =>{
          text = text.replace(...arr).replace(/\*[a-z0-9_]+/i, (result) =>result.slice(1) in this.saveObject[sceneId][entityName] ? this.saveObject[sceneId][entityName][result.slice(1)] : result)
        })
        this.saveObject[sceneId][entityName].entityWidth = null
        this.saveObject[sceneId][entityName].entityHeight = null
        this.context.font = `${o.fontSize * this.saveObject[sceneId][entityName].scale}px ${o.fontFamily}`
        this.context.globalAlpha = o.alpha
        this.context.fillStyle = o.color
        text.split("\n").forEach((text, i) =>{
          if(this.saveObject[sceneId][entityName].entityWidth < this.context.measureText(text).width) this.saveObject[sceneId][entityName].entityWidth = this.context.measureText(text).width
          this.saveObject[sceneId][entityName].entityHeight = (o.fontSize * (i + 1) + o.padding * i)
          this.context.fillText(
            text.trim(), 
            this.saveObject[sceneId][entityName].x + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].x), 
            this.saveObject[sceneId][entityName].y + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].y) + ((o.fontSize + o.padding) * i)
          )
        })
      }
    }
  }
  private update(o: SpielInterface.OptionInterface, sceneId: number){
    if(this.scenes[sceneId].backgroundColor || o.darkmode || !("darkmode" in o)){
      this.context.save()
      this.context.fillStyle = this.scenes[sceneId].backgroundColor ? this.scenes[sceneId].backgroundColor : "#000"
      this.context.rect(0, 0, this.w, this.h)
      this.context.fill()
      this.context.restore()
    }
    if(this.camera[sceneId] !== undefined){
      if(this.target[sceneId]){
        const target = this.target[sceneId]
        if(this.canvas.width / 2 <= target.x + target.entityWidth / 2){
          let speed = null
          if(this.camera[sceneId].width - (this.canvas.width / 2) <= target.x + target.entityWidth / 2 && this.camera[sceneId].x <= this.canvas.width - this.camera[sceneId].width) speed = this.canvas.width - this.camera[sceneId].width
          else speed = (this.canvas.width / 2) - (target.x + target.entityWidth / 2)
          this.camera[sceneId].x = Math.round(speed)
        }
        if(this.canvas.height / 2 <= target.y + target.entityHeight / 2){
          let speed = null
          if(this.camera[sceneId].height - (this.canvas.height / 2) <= target.y + target.entityHeight / 2 && this.camera[sceneId].y <= this.canvas.height - this.camera[sceneId].height) speed = this.canvas.height - this.camera[sceneId].height
          else speed = (this.canvas.height / 2) - (target.y + target.entityHeight / 2)
          this.camera[sceneId].y = Math.round(speed)
        }
      }
      this.drawCamera(sceneId)
      this.camera[sceneId].update()
    }
    for(const entityName of Object.keys(this.saveObject[sceneId]).filter((n) =>n !== "@camera").sort((a, b) =>this.saveObject[sceneId][a].index - this.saveObject[sceneId][b].index)){
      this.saveObject[sceneId][entityName].key = this.key
      if("beforeRedraw" in this.saveObject[sceneId][entityName]) this.saveObject[sceneId][entityName].beforeRedraw()
      if("redraw" in this.saveObject[sceneId][entityName]) this.saveObject[sceneId][entityName].redraw()
      if(!this.saveObject[sceneId][entityName].hidden) this.draw(entityName, sceneId)
      if("afterRedraw" in this.saveObject[sceneId][entityName]) this.saveObject[sceneId][entityName].afterRedraw()
    }
  }
}