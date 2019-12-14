export interface OptionInterface{
  darkmode?: boolean
  pixel?: boolean
  canvas?: HTMLCanvasElement
  load: {[x: string]: Promise<HTMLImageElement | HTMLAudioElement | TextInterface>}
  scene: Array<SceneInterface>
  save?: boolean
  loadScene?(ctx: CanvasRenderingContext2D, percentage: number): void
}
interface AnyEntity{
  [x: string]: EntityInterface | SpritEntityInterface | TextEntityInterface | any
}
export interface TextInterface{
  fontSize?: number
  fontFamily?: string
  color?: string
  alpha?: number
  padding?: number
  text?: string
  title?: string
}
export type SceneEntity = AnyEntity & {
  "@camera"?: CameraInterface
}
export interface SceneInterface{
  name: string | number
  entity: SceneEntity
  backgroundColor?: string
}
export interface BodyEntityInterface{
  x: number
  y: number
  width: number
  height: number
}
export interface CameraInterface{
  init?(): void
  update?(): void
  audio?(name: string): HTMLAudioElement
  getEntity?(entity: string): EntityInterface
  getTarget(): EntityInterface | SpritEntityInterface | TextEntityInterface
  setTarget(entity: string): void
  timeout?(fn: (i: number) =>void, time: number, number_step: number): void
  canvas: HTMLCanvasElement
  x?: number
  y?: number
  width?: number
  height?: number
  scene?: SceneInterface
  spielEngine?: Game
  background?: Promise<HTMLImageElement>
}
export interface EntityInterface{
  init?(): void
  beforeRedraw?(): void
  redraw?(): void
  afterRedraw?(): void
  audio?(name: string): HTMLAudioElement
  collide?(entity: string, border: number | null): boolean
  getEntity?(entity: string): EntityInterface
  on?(name: "click", listener: (e: MouseEvent) =>void): void
  changeScene(name: string | number): void
  timeout?(fn: (i: number) =>void, time: number, number_step: number): void
  fixed?: boolean
  scene?: SceneInterface
  spielEngine?: Game
  body?: BodyEntityInterface
  hidden?: boolean
  key?: Array<string>
  canvas: HTMLCanvasElement
  x?: number
  y?: number
  entityWidth?: number
  entityHeight?: number
  scale?: number
}
export interface SpritEntityInterface extends EntityInterface{
  sprit: {x: number; y: number}
  animationSpeed: number
  animation(o: {x: number | Array<number>; y: number | Array<number>}, step?: () =>void): void
}
export interface TextEntityInterface extends EntityInterface{
  replaced?: Array<[string | RegExp, any]>
}
export function ex(Class: new (...args: any[]) =>any, ...any: any): any
export namespace Loader{
  export function Image(link: string): Promise<HTMLImageElement>
  export function Audio(link: string): Promise<HTMLAudioElement>
  export function Text(text: string, style?: {fontSize?: number, fontFamily?: string, color?: string, alpha?: number, padding?: number}): Promise<TextInterface>
}
export namespace Entity{
  export class Image implements EntityInterface{
    public fixed: boolean
    public spielEngine: Game
    public scale: number
    public canvas: HTMLCanvasElement
    public x: number
    public y: number
    public entityWidth: number
    public entityHeight: number
    public key: Array<string>
    init(): void
    afterRedraw(): void
    redraw(): void
    beforeRedraw(): void
    on(name: "click", listener: (e: MouseEvent) =>void): void
    audio(name: string): HTMLAudioElement
    colide(entity: string): boolean
    getEntity(entity: string): EntityInterface
    changeScene(name: string | number): void
    timeout(fn: (i: number) =>void, time: number, number_step?: number): void
  }
  export class Text extends Image implements TextEntityInterface{
    public replaced: Array<[string | RegExp, any]>
  }
  export class Sprit extends Image implements SpritEntityInterface{
    public sprit: { x: number; y: number }
    public animationSpeed: number
    animation(o: { x?: number | Array<number>; y?: number | Array<number> }, step?: (n: number) =>void): void
  }
  export class Camera implements CameraInterface{
    init?(): void
    update?(): void
    audio?(name: string): HTMLAudioElement | null
    getEntity?(entity: string): EntityInterface
    getTarget(): EntityInterface | SpritEntityInterface | TextEntityInterface
    setTarget(entity: string): void
    canvas: HTMLCanvasElement
    x?: number
    y?: number
    width?: number
    height?: number
    scene?: SceneInterface
    spielEngine?: Game
    background?: Promise<HTMLImageElement>
  }
}
export class Game{
  constructor(o: OptionInterface, w?: number, h?: number)
  createSaveJson(): string
}
