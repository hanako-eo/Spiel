import { EventEmitter } from "events"
import SpielInterface from "./../types/index"

// Function
let LoaderEmitter = new EventEmitter()
function click(entity: SpielInterface.EntityInterface, listener){
  entity.canvas.addEventListener("click", (ev) =>{
    let mouseX = Math.abs(entity.canvas.offsetLeft - ev.x)
    let mouseY = Math.abs(entity.canvas.offsetTop - ev.y)
    if((entity.x <= mouseX && (entity.x + entity.entityWidth) >= mouseX) && (entity.y <= mouseY && (entity.y + entity.entityWidth) >= mouseY)) listener(Object.assign({}, ev, {x: mouseX, y: mouseY}))
  })
}
export function ex(Class: new (args: any) =>any, ...args: any): any{
  return new Class(args)
}
export namespace Loader{
  export function Image(link: string){
    return new Promise<HTMLImageElement>((wait, fail) =>{
      let img = document.createElement("img")
      img.title = "Image"
      img.src = link
      img.onload = () =>{
        LoaderEmitter.emit("loaded")
        wait(img)
      }
      img.onerror = fail
    })
  }
  export function Audio(link: string){
    return new Promise<HTMLAudioElement>((wait, fail) =>{
      let audio = document.createElement("audio")
      audio.title = "Audio"
      audio.src = link
      audio.onloadeddata = () =>{
        LoaderEmitter.emit("loaded")
        wait(audio)
      }
      audio.onerror = fail
    })
  }
  export function Text(text: string, style?: {fontSize?: string, fontFamily?: string}){
    return new Promise<{font: string, text: string, title: string}>((wait, fail) =>{
      let fontSize = "fontSize" in (style || {}) ? style.fontSize : "10px"
      let fontFamily = "fontFamily" in (style || {}) ? style.fontFamily : "sans-serif"
      setTimeout(() =>{
        LoaderEmitter.emit("loaded")
        wait({font: `${fontSize} ${fontFamily}`, text, title: "Text"})
      }, 1)
    })
  }
}

// Class
export namespace Entity{
  export class Image implements SpielInterface.EntityInterface{
    public body = null
    public scale = 1
    public canvas: HTMLCanvasElement
    public x: number
    public y: number
    public entityWidth: number
    public entityHeight: number
    public key: Array<string> = []
    init(){}
    afterRedraw(){}
    redraw(){}
    beforeRedraw(){}
    on(name: "click", listener: (e: MouseEvent) =>void){
      if(name === "click") click(this, listener)
    }
    changeScene(name: string | number){}
    audio(name: string): HTMLAudioElement{ return document.createElement("audio") }
    collide(entity: string, border: number | null): boolean{ return false }
    getEntity(entity: string): SpielInterface.EntityInterface{ return Object.assign({}, this) }
  }
  export class Text extends Image implements SpielInterface.TextEntityInterface{
    public replaced: Array<[string | RegExp, any]> = []
  }
  export class Sprit extends Image implements SpielInterface.SpritEntityInterface{
    public sprit = {x: 0, y: 0}
    public animationSpeed = 300
    animation(o: {x?: number | Array<number>; y?: number | Array<number>}, step?: (n: number) =>void){}
  }
}
export class Game{
  private key = []
  private camera = {use: false, width: this.w, height: this.h}
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private use: string | number
  private load: {[x: string]: HTMLImageElement | HTMLAudioElement | {font: string, text: string}} = {}
  private entityList: {[x: string]: SpielInterface.EntityInterface | SpielInterface.TextEntityInterface}
  constructor(o: SpielInterface.OptionInterface, private w = 800, private h = 600){
    this.canvas = o.canvas || document.body.appendChild(document.createElement("canvas"))
    if(o.pixel) this.canvas.style.imageRendering = "pixelated"
    if(o.darkmode || !("darkmode" in o)) this.canvas.style.backgroundColor = "#000"
    this.context = this.canvas.getContext("2d")
    this.canvas.height = this.h
    this.canvas.width = this.w
    this.camera = Object.assign({}, this.camera, o.camera)
    this.use = o.scene[0].name
    for(const entityName in o.load) o.load[entityName].then((l) =>{
      this.load[entityName] = l
      o.scene.forEach((scene) =>{
        const self = this
        if(entityName in scene.entity){
          scene.entity[entityName].canvas = this.canvas
          scene.entity[entityName].getEntity = function(entity){
            return Object.assign({}, scene.entity[entity])
          }
          scene.entity[entityName].audio = (name) =>{
            if(!(name in o.load)) throw new ReferenceError(`${name} is not loaded or defined with this name`)
            if(name in this.load){
              if((this.load[name] as HTMLAudioElement).title !== "Audio") throw new TypeError(`${name} is not Audio Element`)
              return this.load[name] as HTMLAudioElement
            }
            return document.createElement("audio")
          }
          scene.entity[entityName].changeScene = (name) =>{
            let i = o.scene.findIndex((scene) =>scene.name === name)
            if(i !== -1) this.use = o.scene[i].name
          }
          if(l instanceof HTMLImageElement){
            if(scene.entity[entityName].entityWidth === undefined) scene.entity[entityName].entityWidth = l.width
            if(scene.entity[entityName].entityHeight === undefined) scene.entity[entityName].entityHeight = l.height
            scene.entity[entityName].collide = function(this: SpielInterface.EntityInterface, entity, border = null){
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
            if(scene.entity[entityName] instanceof Entity.Sprit){
              class InvisibleClass{
                private i = 0
                private start: number
                anim(){
                  const self = this
                  return function(this: SpielInterface.SpritEntityInterface, o: {x?: number | number[]; y?: number | number[]}, step = (i: number) =>{}){
                    if(self.start === undefined) self.start = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10
                    let spritP = Object.assign({}, {x: 0, y: 0}, o)
                    let arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length
                    if(!Array.isArray(spritP.x)) this.sprit.x = spritP.x
                    if(!Array.isArray(spritP.y)) this.sprit.y = spritP.y
                    let intervalFunction = () =>{
                      if(self.start === Math.trunc((Date.now()) / 10) * 10){
                        self.start = undefined
                        step(self.i)
                        if(self.i < arrLength){
                          if(Array.isArray(spritP.x)) this.sprit.x = spritP.x[self.i]
                          if(Array.isArray(spritP.y)) this.sprit.y = spritP.y[self.i]
                          if(self.start === undefined){
                            self.start = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10
                            self.i += 1
                          }
                        }else clearInterval((interval as unknown as number) + (self.i = 0))
                      }
                    }
                    let interval = setInterval(intervalFunction, 10)
                  }
                }
              }
              let invisible = new InvisibleClass();
              (scene.entity[entityName] as SpielInterface.SpritEntityInterface).animation = invisible.anim()
            }
          }
        }
      })
    })
    let i = 0
    let iL = Object.keys(o.load).length
    LoaderEmitter.on("loaded", () =>{
      if(++i === iL) this.start(o)
      else{
        let text = `Game Loaded at ${(i / iL) * 100}%`
        this.context.save()
        this.context.clearRect(0, 0, this.w, this.h)
        this.context.font = "26px sans-serif"
        if(o.darkmode || !("darkmode" in o)) this.context.fillStyle = "#fff"
        this.context.fillText(text, this.w / 2 - this.context.measureText(text).width / 2, this.h / 2 - 26 / 2)
        this.context.restore()
      }
    })
  }
  private start(o: SpielInterface.OptionInterface){
    window.onkeydown = (ev: KeyboardEvent) =>{
      ev.preventDefault()
      this.key.push([ev.ctrlKey ? "Ctrl" : null, ev.altKey ? "Alt" : null, ev.shiftKey ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Delete" ? "Del" : ev.key === " " ? "Space" : ev.key]
        .filter((keys) =>keys !== null)
        .join("+"))
    }
    window.onkeyup = (ev: KeyboardEvent) =>this.key = this.key.filter((v) =>v !== [ev.ctrlKey ? "Ctrl" : null, ev.altKey ? "Alt" : null, ev.shiftKey ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Delete" ? "Del" : ev.key === " " ? "Space" : ev.key]
      .filter((keys) =>keys !== null)
      .join("+"))
    let sceneId = o.scene.findIndex((scene) =>this.use === scene.name)
    if(sceneId !== -1) this.scene(o, sceneId)
  }
  private scene(o: SpielInterface.OptionInterface, sceneId: number){
    this.entityList = o.scene[sceneId].entity
    setTimeout(() =>{
      for(const entityName in this.entityList){
        if("init" in this.entityList[entityName]) this.entityList[entityName].init()
        this.draw(entityName)
      }
      const update = () =>{
        setTimeout(() =>{
          this.context.clearRect(0, 0, this.w, this.h)
          this.update()
        })
        if(this.use === o.scene[sceneId].name) requestAnimationFrame(update)
        else{
          let sceneId = o.scene.findIndex((scene) =>this.use === scene.name)
          if(sceneId !== -1) this.scene(o, sceneId)
        }
      }
      requestAnimationFrame(update)
    })
  }
  private draw(entityName: string){
    if(entityName in this.load){
      const o = this.load[entityName]
      if(o instanceof HTMLImageElement){
        if("sprit" in this.entityList[entityName]) this.context.drawImage(
          o,
          (this.entityList[entityName].entityWidth * (this.entityList[entityName] as SpielInterface.SpritEntityInterface).sprit.x),
          (this.entityList[entityName].entityHeight * (this.entityList[entityName] as SpielInterface.SpritEntityInterface).sprit.y),
          this.entityList[entityName].entityWidth,
          this.entityList[entityName].entityHeight,
          this.entityList[entityName].x,
          this.entityList[entityName].y,
          this.entityList[entityName].entityWidth * this.entityList[entityName].scale,
          this.entityList[entityName].entityHeight * this.entityList[entityName].scale
        ) 
        else this.context.drawImage(
          o, 
          this.entityList[entityName].x, 
          this.entityList[entityName].y,
          this.entityList[entityName].entityWidth * this.entityList[entityName].scale,
          this.entityList[entityName].entityHeight * this.entityList[entityName].scale
        )
      }
      else if(!(o instanceof HTMLAudioElement)){
        let text = o.text
        if("replaced" in this.entityList[entityName]) [(["", ""] as [string, string]), ...(this.entityList[entityName] as SpielInterface.TextEntityInterface).replaced].forEach((arr) =>{
          text = text.replace(...arr).replace(/\*[a-z0-9]+/i, (result) =>result.slice(1) in this.entityList[entityName] ? this.entityList[entityName][result.slice(1)] : result)
        })
        this.context.font = o.font
        this.context.fillText(text, this.entityList[entityName].x, this.entityList[entityName].y)
      }
    }
  }
  private update(){
    for(const entityName in this.entityList){
      if(this.entityList[entityName] instanceof Entity.Image) (this.entityList[entityName] as SpielInterface.EntityInterface).key = this.key 
      if("beforeRedraw" in this.entityList[entityName]) this.entityList[entityName].beforeRedraw()
      if("redraw" in this.entityList[entityName]) this.entityList[entityName].redraw()
      this.draw(entityName)
      if("afterRedraw" in this.entityList[entityName]) this.entityList[entityName].afterRedraw()
    }
  }
}