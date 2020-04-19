import * as Contro from 'contro'
import { Control } from "contro/dist/core/control"

export interface ControlInterface{
  gamepad: Contro.Gamepad;
  keyboard: Contro.Keyboard;
  mouse: Contro.Mouse;
  detectAnd: (...controls: Control<boolean>[]) => Control<boolean>;
  detectOr: (...controls: Control<any>[]) => Control<any>;
}
export interface OptionInterface{
  plugins?: Array<Plugin>
  darkmode?: boolean
  pixel?: boolean
  canvas?: HTMLCanvasElement
  load: {[x: string]: Promise<HTMLImageElement | HTMLAudioElement | TextInterface>}
  scene: Array<SceneInterface>
  save?: boolean
  loadScene?(ctx: CanvasRenderingContext2D, percentage: number): void
  state?: {}
}
interface AnyEntity{
  [x: string]: EntityInterface | SpritEntityInterface | TextEntityInterface
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
  toScene?(prevScene: string | number): boolean
}
export interface BodyEntityInterface{
  x: number
  y: number
  width: number
  height: number
}
export interface CameraInterface{
  init(): void
  update(): void
  audio(name: string): HTMLAudioElement
  getEntity(entity: string): EntityInterface
  getTarget(): EntityInterface | SpritEntityInterface | TextEntityInterface
  setTarget(entity: string): void
  tick(fn: () =>void, tick: number): void
  cancelTick(fn: () =>void): void
  timeout(fn: (i: number) =>void, time: number, n?: number): void
  cancelTimeout(fn: (i: number) =>void): void
  canvas: HTMLCanvasElement
  x?: number
  y?: number
  width?: number
  height?: number
  scene?: SceneInterface
  game?: Game
  background?: Promise<HTMLImageElement>
}
export interface EntityInterface{
  on(event: string, fn: () =>any): void
  off(event: string): void
  init(): void
  beforeRedraw(): void
  redraw(): void
  afterRedraw(): void
  audio(name: string): HTMLAudioElement
  collide(entity: string, border: number | null): { side: "top" | "left" | "bottom" | "right" | "inside" | "none", collide: boolean }
  getEntity(entity: string): EntityInterface
  changeScene(name: string | number): void
  tick(fn: () =>void, tick: number): void
  cancelTick(fn: () =>void): void
  timeout(fn: (i: number) =>void, time: number, n?: number): void
  cancelTimeout(fn: (i: number) =>void): void
  use: string
  alpha: number
  index: number
  fixed?: boolean
  scene?: SceneInterface
  game?: Game
  body?: BodyEntityInterface
  hidden?: boolean
  control?: ControlInterface
  canvas: HTMLCanvasElement
  x?: number
  y?: number
  entityWidth?: number
  entityHeight?: number
  scale?: number
  rotation?: number
  clones?: Array<{x: number, y: number, scale?: number, sprit?: {x: number; y: number}, rotation?: number, fixed?: boolean}>
}
export interface SpritEntityInterface extends EntityInterface{
  sprit: {x: number; y: number}
  animationSpeed: number
  animation(o: {x: number | Array<number>; y: number | Array<number>}, step?: () =>void): void
}
export interface TextEntityInterface extends EntityInterface{
  replaced?: Array<[string | RegExp, any]>
  setFontSize(v: number): void
  setFontFamily(v: string): void
  setColor(v: string): void
  setPadding(v: number): void
  getFontSize(): number
  getFontFamily(): string
  getColor(): string
  getPadding(): number
}
export function ex(Class: new (...args: any[]) =>any, ...any: any): any
export namespace Loader{
  export function Image(link: string): Promise<HTMLImageElement>
  export function Audio(link: string): Promise<HTMLAudioElement>
  export function Text(text: string, style?: {fontSize?: number, fontFamily?: string, color?: string, alpha?: number, padding?: number}): Promise<TextInterface>
}
export namespace Entity{
  export class Image implements EntityInterface{
    public alpha: number
    public use: string
    public index: number
    public fixed: boolean
    public game: Game
    public scale: number
    public canvas: HTMLCanvasElement
    public x: number
    public y: number
    public entityWidth: number
    public entityHeight: number
    public control: ControlInterface
    on(event: string, fn: () =>any): void
    off(event: string): void
    init(): void
    afterRedraw(): void
    redraw(): void
    beforeRedraw(): void
    audio(name: string): HTMLAudioElement
    collide(entity: string): { side: "top" | "left" | "bottom" | "right" | "inside" | "none", collide: boolean }
    getEntity(entity: string): EntityInterface
    changeScene(name: string | number): void
    tick(fn: () =>void, tick: number): void
    cancelTick(fn: () =>void): void
    timeout(fn: (i: number) =>void, time: number, n?: number): void
    cancelTimeout(fn: (i: number) =>void): void
  }
  export class Text extends Image implements TextEntityInterface{
    public replaced: Array<[string | RegExp, any]>
    setFontSize(v: number): void
    setFontFamily(v: string): void
    setColor(v: string): void
    setAlpha(v: number): void
    setPadding(v: number): void
    getFontSize(): number
    getFontFamily(): string
    getColor(): string
    getAlpha(): number
    getPadding(): number
  }
  export class Sprit extends Image implements SpritEntityInterface{
    public sprit: { x: number; y: number }
    public animationSpeed: number
    animation(o: { x?: number | Array<number>; y?: number | Array<number> }, step?: (n: number) =>void): void
  }
  export class Camera implements CameraInterface{
    init(): void
    update(): void
    audio(name: string): HTMLAudioElement
    getEntity(entity: string): EntityInterface
    getTarget(): EntityInterface | SpritEntityInterface | TextEntityInterface
    setTarget(entity: string): void
    tick(fn: () =>void, tick: number): void
    cancelTick(fn: () =>void): void
    timeout(fn: (i: number) =>void, time: number, n?: number): void
    cancelTimeout(fn: (i: number) =>void): void
    canvas: HTMLCanvasElement
    x?: number
    y?: number
    width?: number
    height?: number
    scene?: SceneInterface
    game?: Game
    background?: Promise<HTMLImageElement>
  }
}
export class Plugin{
  onEntity(entity: EntityInterface | SpritEntityInterface | TextEntityInterface): void
  onFirstSetCamera(camera: CameraInterface): void
  onCamera(camera: CameraInterface): void
  changeScene(entities: SceneEntity, sceneName: string | number): void
  sceneUpdate(entities: SceneEntity, sceneName: string | number): void
  entityUpdate(entity: EntityInterface | SpritEntityInterface | TextEntityInterface): void
  onCanvas(canvas: HTMLCanvasElement, entities: SceneEntity, onEntities: {[x: string]: {[x: string]: () =>void}}): void
  cameraUpdate(camera: CameraInterface): void
  onFirstSetEntity(entity: EntityInterface | SpritEntityInterface | TextEntityInterface): void
}
export class Game{
  public state: {[x: string]: any}
  constructor(o: OptionInterface, w?: number, h?: number)
  createSaveJson(): string
}
