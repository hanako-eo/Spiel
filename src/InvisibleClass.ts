import SpielInterface from "./../types/index"

export default class InvisibleClass {
  private ianim = 0
  private startAnim: number
  private iout = 0
  private startOut: number
  private nTick: number = 0
  anim(){
    const self = this
    return function(this: SpielInterface.SpritEntityInterface, o: {x?: number | number[], y?: number | number[]}, step = (i: number) =>{}){
      if(self.startAnim === undefined) self.startAnim = Math.trunc((Date.now() + this.animationSpeed))
      const spritP = Object.assign({}, { x: 0, y: 0 }, o)
      const arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length
      if(!Array.isArray(spritP.x)) this.sprit.x = spritP.x
      if(!Array.isArray(spritP.y)) this.sprit.y = spritP.y
      const intervalFunction = () =>{
        if(self.startAnim <= Math.trunc((Date.now()))){
          self.startAnim = undefined
          step(self.ianim)
          if(self.ianim < arrLength){
            if(Array.isArray(spritP.x)) this.sprit.x = spritP.x[self.ianim]
            if(Array.isArray(spritP.y)) this.sprit.y = spritP.y[self.ianim]
            if(self.startAnim === undefined){
              self.startAnim = Math.trunc((Date.now() + this.animationSpeed))
              self.ianim += 1
            }
          } else clearInterval((interval as unknown as number) + (self.ianim = 0))
        }
      }
      const interval = setInterval(intervalFunction, 1)
    }
  }
  tick(fn: () =>void, tick: number){
    if(this.nTick++ < tick){
      fn()
      this.nTick = 0
    }
  }
  timeout(){
    const self = this
    return function(fn: (i: number) =>void, time: number, n: number = 1){
      if(self.startOut === undefined) self.startOut = Math.trunc((Date.now() + time))
      const intervalFunction = () =>{
        if(self.startOut <= Math.trunc((Date.now()))){
          self.startOut = undefined
          fn(self.iout)
          if(++self.iout < n){
            if(self.startOut === undefined) self.startOut = Math.trunc((Date.now() + time))
          }
          else clearInterval((interval as unknown as number) + (self.iout = 0))
        }
      }
      const interval = setInterval(intervalFunction, 1)
    }
  }
}
