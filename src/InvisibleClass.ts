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
  collide(that: SpielInterface.EntityInterface, entity, clone, border = null){
    let isCollided = false
    let side: "top" | "left" | "bottom" | "right" | "inside" | "none" = "none"
    if(border !== null){
      let top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (border * clone.scale) &&
        that.y + that.entityHeight > clone.y
      let left = that.x < clone.x + (border * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y
      let bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (border * clone.scale)
      let right = that.x < clone.x + (entity.entityWidth * clone.scale) - (border * clone.scale) &&
        that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y
      let inside = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y
      
      isCollided = top || left || bottom || right
      
      if(top) side = "top"
      else if(left) side = "left"
      else if(bottom) side = "bottom"
      else if(right) side = "right"
      else if(inside) side = "inside"
    }else if(entity.body !== null){
      let top = that.x < clone.x + entity.body.x + entity.body.width &&
        that.x + that.entityWidth > clone.x + entity.body.x &&
        that.y < clone.y + 1 &&
        that.y + that.entityHeight > clone.y + entity.body.y
      let left = that.x < clone.x + 1 &&
        that.x + that.entityWidth > clone.x + entity.body.x &&
        that.y < clone.y + entity.body.y + entity.body.height &&
        that.y + that.entityHeight > clone.y + entity.body.y
      let bottom = that.x < clone.x + entity.body.x + entity.body.width &&
        that.x + that.entityWidth > clone.x + entity.body.x &&
        that.y < clone.y + entity.body.y + entity.body.height &&
        that.y + that.entityHeight > clone.y + entity.body.height + 1
      let right = that.x < clone.x + entity.body.x + entity.body.width &&
        that.x + that.entityWidth > clone.x + entity.body.width + 1 &&
        that.y < clone.y + entity.body.y + entity.body.height &&
        that.y + that.entityHeight > clone.y + entity.body.y

      isCollided = that.x < clone.x + entity.body.x + entity.body.width &&
        that.x + that.entityWidth > clone.x + entity.body.x &&
        that.y < clone.y + entity.body.y + entity.body.height &&
        that.y + that.entityHeight > clone.y + entity.body.y

      if(top) side = "top"
      else if(left) side = "left"
      else if(bottom) side = "bottom"
      else if(right) side = "right"
      else if(isCollided) side = "inside"
    }else{
      let top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y &&
        that.y + that.entityHeight > clone.y
      let left = that.x < clone.x &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y
      let bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (clone.scale)
      let right = that.x < clone.x + (entity.entityWidth * clone.scale) - (clone.scale) &&
        that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y

      isCollided = that.x < clone.x + (entity.entityWidth * clone.scale) &&
        that.x + that.entityWidth > clone.x &&
        that.y < clone.y + (entity.entityHeight * clone.scale) &&
        that.y + that.entityHeight > clone.y

      if(top) side = "top"
      else if(left) side = "left"
      else if(bottom) side = "bottom"
      else if(right) side = "right"
      else if(isCollided) side = "inside"
    }
    return {
      side: side,
      collide: isCollided
    }
  }
}
