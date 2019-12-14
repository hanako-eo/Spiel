import SpielInterface from "./../types/index"

export default class InvisibleClass {
  private i = 0
  private startAnim: number
  private startOut: number
  anim(){
    const self = this
    return function(this: SpielInterface.SpritEntityInterface, o: {x?: number | number[], y?: number | number[]}, step = (i: number) =>{}){
      if(self.startAnim === undefined) self.startAnim = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10
      const spritP = Object.assign({}, { x: 0, y: 0 }, o)
      const arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length
      if(!Array.isArray(spritP.x)) this.sprit.x = spritP.x
      if(!Array.isArray(spritP.y)) this.sprit.y = spritP.y
      const intervalFunction = () =>{
        if(self.startAnim <= Math.trunc((Date.now()) / 10) * 10){
          self.startAnim = undefined
          step(self.i)
          if(self.i < arrLength){
            if(Array.isArray(spritP.x)) this.sprit.x = spritP.x[self.i]
            if(Array.isArray(spritP.y)) this.sprit.y = spritP.y[self.i]
            if(self.startAnim === undefined){
              self.startAnim = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10
              self.i += 1
            }
          } else clearInterval((interval as unknown as number) + (self.i = 0))
        }
      }
      const interval = setInterval(intervalFunction, 10)
    }
  }
  timeout(){
    const self = this
    return function(fn = (i: number) =>{}, time: number, n: number = 1){
      if (self.startOut === undefined) self.startOut = Math.trunc((Date.now() + time) / 10) * 10
      const intervalFunction = () =>{
        if(self.startOut <= Math.trunc((Date.now()) / 10) * 10){
          self.startOut = undefined
          fn(self.i)
          if(++self.i < n){
            if(self.startOut === undefined){
              self.startOut = Math.trunc((Date.now() + time) / 10) * 10
            }
          }else clearInterval((interval as unknown as number) + (self.i = 0))
        }
      }
      const interval = setInterval(intervalFunction, 10)
    }
  }
}
