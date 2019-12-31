function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

var tslib_es6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	__extends: __extends,
	get __assign () { return __assign; },
	__rest: __rest,
	__decorate: __decorate,
	__param: __param,
	__metadata: __metadata,
	__awaiter: __awaiter,
	__generator: __generator,
	__exportStar: __exportStar,
	__values: __values,
	__read: __read,
	__spread: __spread,
	__spreadArrays: __spreadArrays,
	__await: __await,
	__asyncGenerator: __asyncGenerator,
	__asyncDelegator: __asyncDelegator,
	__asyncValues: __asyncValues,
	__makeTemplateObject: __makeTemplateObject,
	__importStar: __importStar,
	__importDefault: __importDefault
});

var EventEmitter_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(event in this.events))
            return false;
        (_a = this.events)[event].apply(_a, args);
        return true;
    };
    EventEmitter.prototype.on = function (event, listener) {
        this.events[event] = listener;
    };
    return EventEmitter;
}());
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map
});

unwrapExports(EventEmitter_1);

var InvisibleClass_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var InvisibleClass = /** @class */ (function () {
    function InvisibleClass() {
        this.i = 0;
    }
    InvisibleClass.prototype.anim = function () {
        var self = this;
        return function (o, step) {
            var _this = this;
            if (step === void 0) { step = function (i) { }; }
            if (self.startAnim === undefined)
                self.startAnim = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10;
            var spritP = Object.assign({}, { x: 0, y: 0 }, o);
            var arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length;
            if (!Array.isArray(spritP.x))
                this.sprit.x = spritP.x;
            if (!Array.isArray(spritP.y))
                this.sprit.y = spritP.y;
            var intervalFunction = function () {
                if (self.startAnim <= Math.trunc((Date.now()) / 10) * 10) {
                    self.startAnim = undefined;
                    step(self.i);
                    if (self.i < arrLength) {
                        if (Array.isArray(spritP.x))
                            _this.sprit.x = spritP.x[self.i];
                        if (Array.isArray(spritP.y))
                            _this.sprit.y = spritP.y[self.i];
                        if (self.startAnim === undefined) {
                            self.startAnim = Math.trunc((Date.now() + _this.animationSpeed) / 10) * 10;
                            self.i += 1;
                        }
                    }
                    else
                        clearInterval(interval + (self.i = 0));
                }
            };
            var interval = setInterval(intervalFunction, 10);
        };
    };
    InvisibleClass.prototype.timeout = function () {
        var self = this;
        return function (fn, time, n) {
            if (fn === void 0) { fn = function (i) { }; }
            if (n === void 0) { n = 1; }
            if (self.startOut === undefined)
                self.startOut = Math.trunc((Date.now() + time) / 10) * 10;
            var intervalFunction = function () {
                if (self.startOut <= Math.trunc((Date.now()) / 10) * 10) {
                    self.startOut = undefined;
                    fn(self.i);
                    if (++self.i < n) {
                        if (self.startOut === undefined) {
                            self.startOut = Math.trunc((Date.now() + time) / 10) * 10;
                        }
                    }
                    else
                        clearInterval(interval + (self.i = 0));
                }
            };
            var interval = setInterval(intervalFunction, 10);
        };
    };
    return InvisibleClass;
}());
exports.default = InvisibleClass;
//# sourceMappingURL=InvisibleClass.js.map
});

unwrapExports(InvisibleClass_1);

var EventEmitter_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(event in this.events))
            return false;
        (_a = this.events)[event].apply(_a, args);
        return true;
    };
    EventEmitter.prototype.on = function (event, listener) {
        this.events[event] = listener;
    };
    return EventEmitter;
}());
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map
});

unwrapExports(EventEmitter_1$1);

var InvisibleClass_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var InvisibleClass = /** @class */ (function () {
    function InvisibleClass() {
        this.i = 0;
    }
    InvisibleClass.prototype.anim = function () {
        var self = this;
        return function (o, step) {
            var _this = this;
            if (step === void 0) { step = function (i) { }; }
            if (self.startAnim === undefined)
                self.startAnim = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10;
            var spritP = Object.assign({}, { x: 0, y: 0 }, o);
            var arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length;
            if (!Array.isArray(spritP.x))
                this.sprit.x = spritP.x;
            if (!Array.isArray(spritP.y))
                this.sprit.y = spritP.y;
            var intervalFunction = function () {
                if (self.startAnim <= Math.trunc((Date.now()) / 10) * 10) {
                    self.startAnim = undefined;
                    step(self.i);
                    if (self.i < arrLength) {
                        if (Array.isArray(spritP.x))
                            _this.sprit.x = spritP.x[self.i];
                        if (Array.isArray(spritP.y))
                            _this.sprit.y = spritP.y[self.i];
                        if (self.startAnim === undefined) {
                            self.startAnim = Math.trunc((Date.now() + _this.animationSpeed) / 10) * 10;
                            self.i += 1;
                        }
                    }
                    else
                        clearInterval(interval + (self.i = 0));
                }
            };
            var interval = setInterval(intervalFunction, 10);
        };
    };
    InvisibleClass.prototype.timeout = function () {
        var self = this;
        return function (fn, time, n) {
            if (fn === void 0) { fn = function (i) { }; }
            if (n === void 0) { n = 1; }
            if (self.startOut === undefined)
                self.startOut = Math.trunc((Date.now() + time) / 10) * 10;
            var intervalFunction = function () {
                if (self.startOut <= Math.trunc((Date.now()) / 10) * 10) {
                    self.startOut = undefined;
                    fn(self.i);
                    if (++self.i < n) {
                        if (self.startOut === undefined) {
                            self.startOut = Math.trunc((Date.now() + time) / 10) * 10;
                        }
                    }
                    else
                        clearInterval(interval + (self.i = 0));
                }
            };
            var interval = setInterval(intervalFunction, 10);
        };
    };
    return InvisibleClass;
}());
exports.default = InvisibleClass;
//# sourceMappingURL=InvisibleClass.js.map
});

unwrapExports(InvisibleClass_1$1);

var app = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var EventEmitter_1 = tslib_es6.__importDefault(EventEmitter_1$1);
var InvisibleClass_1 = tslib_es6.__importDefault(InvisibleClass_1$1);
var LoaderEmitter = new EventEmitter_1.default();
function click(entity, listener) {
    entity.canvas.addEventListener("click", function (ev) {
        var mouseX = Math.abs(entity.canvas.offsetLeft - ev.x);
        var mouseY = Math.abs(entity.canvas.offsetTop - ev.y);
        if ((entity.x <= mouseX && (entity.x + entity.entityWidth) >= mouseX) && (entity.y <= mouseY && (entity.y + entity.entityWidth) >= mouseY))
            listener(Object.assign({}, ev, { x: mouseX, y: mouseY }));
    });
}
var isClass = function (fn) {
    try {
        return /^\s*class/.test(fn.toString());
    }
    catch (error) {
        return false;
    }
};
function ex(Class) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return new Class(args);
}
exports.ex = ex;
var Loader;
(function (Loader) {
    function Image(link) {
        return new Promise(function (wait, fail) {
            var img = document.createElement("img");
            img.title = "Image";
            img.src = link;
            img.onload = function () {
                LoaderEmitter.emit("loaded");
                wait(img);
            };
            img.onerror = fail;
        });
    }
    Loader.Image = Image;
    function Audio(link) {
        return new Promise(function (wait, fail) {
            var audio = document.createElement("audio");
            audio.title = "Audio";
            audio.src = link;
            audio.onloadeddata = function () {
                LoaderEmitter.emit("loaded");
                wait(audio);
            };
            audio.onerror = fail;
        });
    }
    Loader.Audio = Audio;
    function Text(text, style) {
        return new Promise(function (wait, fail) {
            var fontSize = "fontSize" in (style || {}) ? style.fontSize : 10;
            var fontFamily = "fontFamily" in (style || {}) ? style.fontFamily : "sans-serif";
            var color = "color" in (style || {}) ? style.color : "#000";
            var alpha = "alpha" in (style || {}) ? style.alpha : 1;
            var padding = "padding" in (style || {}) ? style.padding : 5;
            setTimeout(function () {
                LoaderEmitter.emit("loaded");
                wait({
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    color: color,
                    text: text,
                    alpha: alpha,
                    padding: padding,
                    title: "Text"
                });
            }, 1);
        });
    }
    Loader.Text = Text;
})(Loader = exports.Loader || (exports.Loader = {}));
// Class
var Entity;
(function (Entity) {
    var Image = /** @class */ (function () {
        function Image() {
            this.body = null;
            this.scale = 1;
            this.hidden = false;
            this.fixed = false;
            this.key = [];
        }
        Image.prototype.init = function () { };
        Image.prototype.afterRedraw = function () { };
        Image.prototype.redraw = function () { };
        Image.prototype.beforeRedraw = function () { };
        Image.prototype.on = function (name, listener) {
            if (name === "click")
                click(this, listener);
        };
        Image.prototype.changeScene = function (name) { };
        Image.prototype.audio = function (name) { return document.createElement("audio"); };
        Image.prototype.collide = function (entity, border) { return false; };
        Image.prototype.getEntity = function (entity) { return Object.assign({}, this); };
        return Image;
    }());
    Entity.Image = Image;
    var Text = /** @class */ (function (_super) {
        tslib_es6.__extends(Text, _super);
        function Text() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.replaced = [];
            return _this;
        }
        Text.prototype.setFontSize = function (v) { };
        Text.prototype.setFontFamily = function (v) { };
        Text.prototype.setColor = function (v) { };
        Text.prototype.setAlpha = function (v) { };
        Text.prototype.setPadding = function (v) { };
        Text.prototype.getFontSize = function () { return 0; };
        Text.prototype.getFontFamily = function () { return ""; };
        Text.prototype.getColor = function () { return ""; };
        Text.prototype.getAlpha = function () { return 0; };
        Text.prototype.getPadding = function () { return 0; };
        return Text;
    }(Image));
    Entity.Text = Text;
    var Sprit = /** @class */ (function (_super) {
        tslib_es6.__extends(Sprit, _super);
        function Sprit() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sprit = { x: 0, y: 0 };
            _this.animationSpeed = 300;
            return _this;
        }
        Sprit.prototype.animation = function (o, step) { };
        return Sprit;
    }(Image));
    Entity.Sprit = Sprit;
    var Camera = /** @class */ (function () {
        function Camera() {
            this.x = 0;
            this.y = 0;
        }
        Camera.prototype.init = function () { };
        Camera.prototype.update = function () { };
        Camera.prototype.audio = function (name) { return document.createElement("audio"); };
        Camera.prototype.getEntity = function (entity) { return Object.assign({}, this); };
        Camera.prototype.getTarget = function () { return Object.assign({}, this); };
        Camera.prototype.setTarget = function (entity) { };
        return Camera;
    }());
    Entity.Camera = Camera;
})(Entity = exports.Entity || (exports.Entity = {}));
var Game = /** @class */ (function () {
    function Game(o, w, h) {
        var _this = this;
        if (w === void 0) { w = 800; }
        if (h === void 0) { h = 600; }
        this.w = w;
        this.h = h;
        this.key = [];
        this.audio = {};
        this.saveObject = {};
        this.load = {};
        this.camera = {};
        this.cameraBackground = {};
        this.target = {};
        this.canvas = o.canvas ? o.canvas : document.body.appendChild(document.createElement("canvas"));
        this.canvas.height = this.h;
        this.canvas.width = this.w;
        this.context = this.canvas.getContext("2d");
        if (o.pixel)
            this.canvas.style.imageRendering = "pixelated";
        if (o.darkmode || !("darkmode" in o)) {
            this.context.save();
            this.context.fillStyle = "#000";
            this.context.rect(0, 0, this.w, this.h);
            this.context.fill();
            this.context.restore();
        }
        this.scenes = o.scene;
        this.sceneId = 0;
        this.use = this.scenes[this.sceneId].name;
        var _loop_1 = function (entityName) {
            o.load[entityName].then(function (l) {
                if (l instanceof HTMLAudioElement)
                    _this.audio[entityName] = l;
                else
                    _this.load[entityName] = l;
                _this.scenes.forEach(function (scene) {
                    if (entityName in scene.entity) {
                        if (isClass(scene.entity[entityName]))
                            scene.entity[entityName] = ex(scene.entity[entityName]);
                        _this.setEntity(o, scene, entityName, l);
                    }
                });
            });
        };
        for (var entityName in o.load) {
            _loop_1(entityName);
        }
        var i = 0;
        var iL = Object.keys(o.load).length;
        LoaderEmitter.on("loaded", function () {
            _this.context.clearRect(0, 0, _this.w, _this.h);
            if (++i === iL)
                _this.start(o);
            else if ("loadScene" in o)
                o.loadScene(_this.context, Math.round(i / iL) * 100);
        });
    }
    Game.prototype.createSaveJson = function () {
        var o = {
            currentSceneId: this.sceneId,
            currentSceneName: this.use,
            allScene: Object.assign({}, this.saveObject)
        };
        for (var sceneId in o.allScene) {
            for (var entityName in o.allScene[sceneId]) {
                delete o.allScene[sceneId][entityName].canvas;
                o.allScene[sceneId][entityName].key = [];
            }
        }
        return JSON.stringify(o);
    };
    Game.prototype.setEntity = function (o, scene, entityName, l) {
        var _this = this;
        var invisible = new InvisibleClass_1.default();
        var entity = scene.entity[entityName];
        if (entity.x === undefined)
            entity.x = 0;
        if (entity.y === undefined)
            entity.y = 0;
        entity.scene = scene;
        entity.spielEngine = this;
        entity.canvas = this.canvas;
        entity.timeout = invisible.timeout();
        entity.getEntity = function (entity) {
            if (scene.entity[entity] instanceof Entity.Camera)
                throw new TypeError("You can't get the camera");
            return Object.assign({}, scene.entity[entity]);
        };
        entity.audio = function (name) {
            if (!(name in o.load))
                throw new ReferenceError(name + " is not loaded or defined with this name");
            if (name in _this.audio)
                return _this.audio[name];
            throw new TypeError(name + " is not Audio Element");
        };
        if (!(entity instanceof Entity.Camera) && entityName !== "@camera") {
            entity.changeScene = function (name) {
                _this.sceneId = _this.scenes.findIndex(function (scene) { return scene.name === name; });
                if (_this.sceneId !== -1) {
                    if (!(_this.sceneId in _this.saveObject))
                        _this.saveObject[_this.sceneId] = _this.scenes[_this.sceneId].entity;
                    _this.use = _this.scenes[_this.sceneId].name;
                }
            };
            if (l instanceof HTMLImageElement) {
                if (entity.entityWidth === undefined)
                    entity.entityWidth = l.width;
                if (entity.entityHeight === undefined)
                    entity.entityHeight = l.height;
                entity.collide = function (entity, border) {
                    if (border === void 0) { border = null; }
                    if (border === null) {
                        if (scene.entity[entity].body === null)
                            return this.x < scene.entity[entity].x + (scene.entity[entity].entityWidth * scene.entity[entity].scale) &&
                                this.x + this.entityWidth > scene.entity[entity].x &&
                                this.y < scene.entity[entity].y + (scene.entity[entity].entityHeight * scene.entity[entity].scale) &&
                                this.y + this.entityHeight > scene.entity[entity].y;
                        return this.x < scene.entity[entity].x + scene.entity[entity].body.x + scene.entity[entity].body.width &&
                            this.x + this.entityWidth > scene.entity[entity].x + scene.entity[entity].body.x &&
                            this.y < scene.entity[entity].y + scene.entity[entity].body.y + scene.entity[entity].body.height &&
                            this.y + this.entityHeight > scene.entity[entity].y + scene.entity[entity].body.y;
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
                            this.y + this.entityHeight > scene.entity[entity].y);
                };
                if (entity instanceof Entity.Sprit) {
                    entity.animation = invisible.anim();
                }
            }
            else {
                entity.setFontSize = function (v) { l.fontSize = v; };
                entity.setFontFamily = function (v) { l.fontFamily = v; };
                entity.setColor = function (v) { l.color = v; };
                entity.setAlpha = function (v) { l.alpha = v; };
                entity.setPadding = function (v) { l.padding = v; };
                entity.getFontSize = function () { return l.fontSize; };
                entity.getFontFamily = function () { return l.fontFamily; };
                entity.getColor = function () { return l.color; };
                entity.getAlpha = function () { return l.alpha; };
                entity.getPadding = function () { return l.padding; };
            }
        }
        else if (entity instanceof Entity.Camera && entityName === "@camera") {
            entity.getTarget = function () {
                return _this.target[_this.sceneId];
            };
            entity.setTarget = function (entity) {
                if (scene.entity[entity] instanceof Entity.Camera)
                    throw new TypeError("You can't target the camera");
                _this.target[_this.sceneId] = scene.entity[entity];
            };
        }
    };
    Game.prototype.start = function (o) {
        var _this = this;
        window.onkeydown = function (ev) {
            ev.preventDefault();
            var key = [ev.ctrlKey ? "Ctrl" : null, ev.altKey ? "Alt" : null, ev.shiftKey ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Deconste" ? "Del" : ev.key === " " ? "Space" : ev.key]
                .filter(function (keys) { return keys !== null; })
                .join("+");
            if (key !== "Alt+F4")
                ev.preventDefault();
            if (!_this.key.find(function (v) { return v === key; }))
                _this.key.push(key);
        };
        window.onkeyup = function (ev) { return _this.key = _this.key.filter(function (v) { return v !== [ev.ctrlKey || ev.key === "Control" ? "Ctrl" : null, ev.altKey || ev.key === "Alt" ? "Alt" : null, ev.shiftKey || ev.key === "Shift" ? "Shift" : null, ev.key === "Control" || ev.key === "Alt" || ev.key === "Shift" ? null : ev.key === "Deconste" ? "Del" : ev.key === " " ? "Space" : ev.key]
            .filter(function (keys) { return keys !== null; })
            .join("+"); }); };
        if (this.sceneId !== -1)
            this.scene(o, this.sceneId);
    };
    Game.prototype.scene = function (o, sceneId) {
        var _this = this;
        if (!(sceneId in this.saveObject))
            this.saveObject[sceneId] = this.scenes[sceneId].entity;
        setTimeout(function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
            var _a, _b, entityName, update;
            var _this = this;
            return tslib_es6.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!("@camera" in this.saveObject[sceneId])) return [3 /*break*/, 2];
                        if (isClass(this.saveObject[sceneId]["@camera"]))
                            this.saveObject[sceneId]["@camera"] = ex(this.saveObject[sceneId]["@camera"]);
                        this.setEntity(o, this.scenes[sceneId], "@camera");
                        this.camera[sceneId] = this.saveObject[sceneId]["@camera"];
                        if ("init" in this.camera[sceneId]) {
                            this.camera[sceneId].init();
                            if (o.save || ("save" in o))
                                this.camera[sceneId].init = function () { };
                        }
                        _a = this.cameraBackground;
                        _b = sceneId;
                        return [4 /*yield*/, this.camera[sceneId].background];
                    case 1:
                        _a[_b] = _c.sent();
                        this.camera[sceneId].width = this.cameraBackground[sceneId].width;
                        this.camera[sceneId].height = this.cameraBackground[sceneId].height;
                        this.drawCamera(sceneId);
                        _c.label = 2;
                    case 2:
                        for (entityName in this.saveObject[sceneId]) {
                            if (entityName !== "@camera") {
                                if ("init" in this.saveObject[sceneId][entityName]) {
                                    this.saveObject[sceneId][entityName].init();
                                    if (o.save || ("save" in o))
                                        this.saveObject[sceneId][entityName].init = function () { };
                                }
                                this.draw(entityName, sceneId);
                            }
                        }
                        update = function () {
                            _this.context.clearRect(0, 0, _this.w, _this.h);
                            _this.update(sceneId);
                            if (_this.use === _this.scenes[sceneId].name)
                                requestAnimationFrame(update);
                            else if (sceneId !== -1)
                                _this.scene(o, _this.sceneId);
                        };
                        requestAnimationFrame(update);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Game.prototype.drawCamera = function (sceneId) {
        this.context.drawImage(this.cameraBackground[sceneId], this.camera[sceneId].x, this.camera[sceneId].y);
    };
    Game.prototype.draw = function (entityName, sceneId) {
        var _this = this;
        if (entityName in this.load) {
            var o_1 = this.load[entityName];
            if (o_1 instanceof HTMLImageElement) {
                if ("sprit" in this.saveObject[sceneId][entityName])
                    this.context.drawImage(o_1, (this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].sprit.x), (this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].sprit.y), this.saveObject[sceneId][entityName].entityWidth, this.saveObject[sceneId][entityName].entityHeight, this.saveObject[sceneId][entityName].x + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].x), this.saveObject[sceneId][entityName].y + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].y), this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale, this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale);
                else
                    this.context.drawImage(o_1, this.saveObject[sceneId][entityName].x + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].x), this.saveObject[sceneId][entityName].y + (this.camera[sceneId] === undefined || this.saveObject[sceneId][entityName].fixed ? 0 : this.camera[sceneId].y), this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale, this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale);
            }
            else if (!(o_1 instanceof HTMLAudioElement)) {
                var text_1 = o_1.text;
                if ("replaced" in this.saveObject[sceneId][entityName])
                    tslib_es6.__spreadArrays([["", ""]], this.saveObject[sceneId][entityName].replaced).forEach(function (arr) {
                        text_1 = text_1.replace.apply(text_1, arr).replace(/\*[a-z0-9]+/i, function (result) { return result.slice(1) in _this.saveObject[sceneId][entityName] ? _this.saveObject[sceneId][entityName][result.slice(1)] : result; });
                    });
                this.context.font = o_1.fontSize * this.saveObject[sceneId][entityName].scale + "px " + o_1.fontFamily;
                this.context.globalAlpha = o_1.alpha;
                this.context.fillStyle = o_1.color;
                text_1.split("\n").forEach(function (text, i) {
                    _this.context.fillText(text.trim(), _this.saveObject[sceneId][entityName].x + (_this.camera[sceneId] === undefined || _this.saveObject[sceneId][entityName].fixed ? 0 : _this.camera[sceneId].x), _this.saveObject[sceneId][entityName].y + (_this.camera[sceneId] === undefined || _this.saveObject[sceneId][entityName].fixed ? 0 : _this.camera[sceneId].y) + ((o_1.fontSize + o_1.padding) * i));
                });
            }
        }
    };
    Game.prototype.update = function (sceneId) {
        if (this.scenes[sceneId].backgroundColor) {
            this.context.save();
            this.context.fillStyle = this.scenes[sceneId].backgroundColor;
            this.context.rect(0, 0, this.w, this.h);
            this.context.fill();
            this.context.restore();
        }
        if (this.camera[sceneId] !== undefined) {
            if (this.target[sceneId]) {
                var target = this.target[sceneId];
                if (this.canvas.width / 2 <= target.x + target.entityWidth / 2) {
                    var speed = null;
                    if (this.camera[sceneId].width - (this.canvas.width / 2) <= target.x + target.entityWidth / 2 && this.camera[sceneId].x <= this.canvas.width - this.camera[sceneId].width)
                        speed = this.canvas.width - this.camera[sceneId].width;
                    else
                        speed = (this.canvas.width / 2) - (target.x + target.entityWidth / 2);
                    this.camera[sceneId].x = Math.round(speed);
                }
                if (this.canvas.height / 2 <= target.y + target.entityHeight / 2) {
                    var speed = null;
                    if (this.camera[sceneId].height - (this.canvas.height / 2) <= target.y + target.entityHeight / 2 && this.camera[sceneId].y <= this.canvas.height - this.camera[sceneId].height)
                        speed = this.canvas.height - this.camera[sceneId].height;
                    else
                        speed = (this.canvas.height / 2) - (target.y + target.entityHeight / 2);
                    this.camera[sceneId].y = Math.round(speed);
                }
            }
            this.drawCamera(sceneId);
            this.camera[sceneId].update();
        }
        for (var entityName in this.saveObject[sceneId]) {
            if (entityName !== "@camera") {
                this.saveObject[sceneId][entityName].key = this.key;
                if ("beforeRedraw" in this.saveObject[sceneId][entityName])
                    this.saveObject[sceneId][entityName].beforeRedraw();
                if ("redraw" in this.saveObject[sceneId][entityName])
                    this.saveObject[sceneId][entityName].redraw();
                if (!this.saveObject[sceneId][entityName].hidden)
                    this.draw(entityName, sceneId);
                if ("afterRedraw" in this.saveObject[sceneId][entityName])
                    this.saveObject[sceneId][entityName].afterRedraw();
            }
        }
    };
    return Game;
}());
exports.Game = Game;

});

var app$1 = unwrapExports(app);
var app_1 = app.ex;
var app_2 = app.Loader;
var app_3 = app.Entity;
var app_4 = app.Game;

export default app$1;
export { app_3 as Entity, app_4 as Game, app_2 as Loader, app_1 as ex };
