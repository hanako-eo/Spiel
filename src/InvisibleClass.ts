import SpielInterface from "./../types/index"

export default class InvisibleClass {
  private ianim = 0
  private startAnim: number
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
}
