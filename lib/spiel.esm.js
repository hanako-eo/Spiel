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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
	__importDefault: __importDefault,
	__classPrivateFieldGet: __classPrivateFieldGet,
	__classPrivateFieldSet: __classPrivateFieldSet
});

var EventEmitter_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
    }
    EventEmitter.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(event in this.events))
            return false;
        (_a = this.events)[event].apply(_a, tslib_es6.__spread(args));
        return true;
    };
    EventEmitter.on = function (event, listener) {
        this.events[event] = listener;
    };
    EventEmitter.events = {};
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
        this.ianim = 0;
    }
    InvisibleClass.prototype.anim = function () {
        var self = this;
        return function (o, step) {
            var _this = this;
            if (step === void 0) { step = function (i) { }; }
            if (self.startAnim === undefined)
                self.startAnim = Math.trunc((Date.now() + this.animationSpeed));
            var spritP = Object.assign({}, { x: 0, y: 0 }, o);
            var arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length;
            if (!Array.isArray(spritP.x))
                this.sprit.x = spritP.x;
            if (!Array.isArray(spritP.y))
                this.sprit.y = spritP.y;
            var intervalFunction = function () {
                if (self.startAnim <= Math.trunc((Date.now()))) {
                    self.startAnim = undefined;
                    step(self.ianim);
                    if (self.ianim < arrLength) {
                        if (Array.isArray(spritP.x))
                            _this.sprit.x = spritP.x[self.ianim];
                        if (Array.isArray(spritP.y))
                            _this.sprit.y = spritP.y[self.ianim];
                        if (self.startAnim === undefined) {
                            self.startAnim = Math.trunc((Date.now() + _this.animationSpeed));
                            self.ianim += 1;
                        }
                    }
                    else
                        clearInterval(interval + (self.ianim = 0));
                }
            };
            var interval = setInterval(intervalFunction, 1);
        };
    };
    InvisibleClass.prototype.collide = function (that, entity, clone, border) {
        if (border === void 0) { border = null; }
        var isCollided = false;
        var side = "none";
        if (border !== null) {
            var top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (border * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var left = that.x < clone.x + (border * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (border * clone.scale);
            var right = that.x < clone.x + (entity.entityWidth * clone.scale) - (border * clone.scale) &&
                that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var inside = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            isCollided = top || left || bottom || right;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (inside)
                side = "inside";
        }
        else if (entity.body !== null) {
            var top = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + 1 &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            var left = that.x < clone.x + 1 &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            var bottom = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.height + 1;
            var right = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.width + 1 &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            isCollided = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (isCollided)
                side = "inside";
        }
        else {
            var top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y &&
                that.y + that.entityHeight > clone.y;
            var left = that.x < clone.x &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (clone.scale);
            var right = that.x < clone.x + (entity.entityWidth * clone.scale) - (clone.scale) &&
                that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            isCollided = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (isCollided)
                side = "inside";
        }
        return {
            side: side,
            collide: isCollided
        };
    };
    return InvisibleClass;
}());
exports.default = InvisibleClass;
//# sourceMappingURL=InvisibleClass.js.map
});

unwrapExports(InvisibleClass_1);

var uniformFunction = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (a) {
    function toArrowFunction(_, _f, funcArgs, accolade, arrowFuncArgs, first_character) {
        return "(" + ((funcArgs || arrowFuncArgs) || "") + ") =>" + (accolade || first_character);
    }
    var aRet = false;
    var av = a.toString().replace(/(function)? *[A-z0-9_$]+ *\(([^\r]+)?\) *({)|\(([^\r]+)?\) *=> *([^\{]|{)/g, toArrowFunction).replace(/{ *return */g, function () {
        aRet = true;
        return "";
    });
    if (aRet)
        av = av.split("").reverse().join("").replace(/}/, "").split("").reverse().join("");
    return av;
});
//# sourceMappingURL=uniformFunction.js.map
});

unwrapExports(uniformFunction);

/*!
 * Contro
 * (c) 2020 Niklas Higi
 * Released under the MIT License.
 */
const store = {
    preferGamepad: false,
};

class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

const mouseButtons = ['left', 'middle', 'right'];
class Mouse {
    constructor({ canvas, doc }) {
        this.pointerMovement = new Vector2();
        this.pressedButtons = new Set();
        this.queuedButtons = new Set();
        this.scrollDistance = 0;
        this.canvas = canvas;
        this.document = doc !== null && doc !== void 0 ? doc : document;
        const on = this.canvas.addEventListener.bind(this.canvas);
        on('mousedown', (event) => {
            store.preferGamepad = false;
            this.pressedButtons.add(event.button);
            this.queuedButtons.add(event.button);
        });
        on('mouseup', (event) => {
            store.preferGamepad = false;
            this.pressedButtons.delete(event.button);
            this.queuedButtons.delete(event.button);
        });
        on('mousemove', (event) => {
            store.preferGamepad = false;
            this.pointerMovement.x += event.movementX;
            this.pointerMovement.y += event.movementY;
        });
        on('wheel', (event) => {
            store.preferGamepad = false;
            const distance = event.deltaY;
            this.scrollDistance += distance;
        });
    }
    parseButton(button) {
        if (typeof button === 'string') {
            if (mouseButtons.includes(button)) {
                return mouseButtons.indexOf(button);
            }
            else {
                throw new Error(`There is no mouse button called "${button}"!`);
            }
        }
        else {
            if (button < mouseButtons.length) {
                return button;
            }
            else {
                throw new Error(`There is no mouse button with the index ${button}!`);
            }
        }
    }
    button(button) {
        const buttonNumber = this.parseButton(button);
        const label = ['Left', 'Middle', 'Right'][buttonNumber] + ' Mouse Button';
        return {
            label,
            query: () => this.pressedButtons.has(buttonNumber),
            trigger: {
                label,
                query: () => {
                    if (this.queuedButtons.has(buttonNumber)) {
                        this.queuedButtons.delete(buttonNumber);
                        return true;
                    }
                    return false;
                },
            },
        };
    }
    pointer() {
        return {
            label: 'Cursor',
            query: () => {
                const movement = this.pointerMovement;
                this.pointerMovement = new Vector2(0, 0);
                return movement;
            },
        };
    }
    wheel() {
        return {
            label: 'Mouse wheel',
            query: () => {
                const distance = this.scrollDistance;
                this.scrollDistance = 0;
                return distance;
            },
        };
    }
    lockPointer() {
        this.canvas.requestPointerLock();
    }
    unlockPointer() {
        this.document.exitPointerLock();
    }
    isPointerLocked() {
        return this.document.pointerLockElement === this.canvas;
    }
}

/**
 * A map of all the supported key values (property names) and their respective
 * aliases (property values)  that can be used with the `Keyboard` class. The
 * first alias for each key value will be used as a label.
 */
const keyMap = {
    ' ': ['Space', 'Spacebar', 'Space Bar'],
    'AltGraph': ['Alt Gr'],
    'ArrowDown': ['Down'],
    'ArrowLeft': ['Left'],
    'ArrowRight': ['Right'],
    'ArrowUp': ['Up'],
    'Backspace': ['Backspace'],
    'Control': ['Ctrl', 'Ctl'],
    'Delete': ['Delete', 'Del'],
    'Enter': ['Enter', 'Return'],
    'Escape': ['Escape', 'Esc'],
    'Insert': ['Insert', 'Ins'],
    'PageDown': ['Page Down', 'PgDown'],
    'PageUp': ['Page Up', 'PgUp'],
    'Tab': ['Tab'],
};
function findKeyValue(keyString) {
    if (keyString.length === 1)
        return keyString.toLowerCase();
    for (const keyValue in keyMap) {
        for (const key of keyMap[keyValue]) {
            if (keyString.toLowerCase() === key.toLowerCase()) {
                return keyValue;
            }
        }
    }
    return keyString;
}
function getKeyLabel(key) {
    if (key in keyMap)
        return keyMap[key][0];
    if (key.length === 1)
        return key.toUpperCase();
    return key;
}

const arrowKeyTemplates = {
    arrows: ['Arrow keys', ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']],
    wasd: ['WASD', ['W', 'A', 'S', 'D']],
};
class Keyboard {
    constructor(
    { doc = document } = {}) {
        this.pressedKeys = new Set();
        this.queuedKeys = new Set();
        this.document = doc;
        this.document.addEventListener('keydown', (event) => {
            store.preferGamepad = false;
            let key = event.key;
            if (key === key.toUpperCase())
                key = key.toLowerCase();
            this.pressedKeys.add(key);
            this.queuedKeys.add(key);
            return false;
        });
        this.document.addEventListener('keyup', (event) => {
            store.preferGamepad = false;
            let key = event.key;
            if (key === key.toUpperCase())
                key = key.toLowerCase();
            this.pressedKeys.delete(key);
            this.queuedKeys.delete(key);
            return false;
        });
    }
    key(key) {
        const keyValue = findKeyValue(key);
        const label = getKeyLabel(keyValue);
        return {
            label: getKeyLabel(keyValue),
            query: () => this.pressedKeys.has(keyValue),
            trigger: {
                label,
                query: () => this.queuedKeys.delete(keyValue),
            },
        };
    }
    directionalKeys(keys, label) {
        let defaultLabel;
        let keyValues;
        if (typeof keys === 'string') {
            const templateId = keys.toLowerCase();
            if (templateId in arrowKeyTemplates) {
                const template = arrowKeyTemplates[templateId];
                defaultLabel = template[0];
                keyValues = template[1];
            }
            else {
                throw new Error(`Directional key template "${keys}" not found!`);
            }
        }
        else {
            if (keys.length === 4) {
                keyValues = keys.map(key => findKeyValue(key));
                defaultLabel = keys.map(key => getKeyLabel(key)).join('');
            }
            else {
                throw new Error('Directional key templates have to consist of four keys!');
            }
        }
        return {
            label: label || defaultLabel,
            query: () => {
                const vector = new Vector2();
                if (this.key(keyValues[0]).query())
                    vector.y -= 1; // Up
                if (this.key(keyValues[1]).query())
                    vector.x -= 1; // Left
                if (this.key(keyValues[2]).query())
                    vector.y += 1; // Down
                if (this.key(keyValues[3]).query())
                    vector.x += 1; // Right
                return vector;
            },
        };
    }
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

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * A map of all the supported button numbers (array indices) and their
 * respective aliases (the strings in the arrays) that can be used with the
 * `Gamepad` class. The first alias for each button will be used as a label.
 */
const buttonMap = [
    ['A'],
    ['B'],
    ['X'],
    ['Y'],
    ['Left Bumper', 'LB'],
    ['Right Bumper', 'RB'],
    ['Left Trigger', 'LT'],
    ['Right Trigger', 'RT'],
    ['Back', 'View'],
    ['Start'],
    ['Left Stick'],
    ['Right Stick'],
    ['Up', 'DpadUp'],
    ['Down', 'DpadDown'],
    ['Left', 'DpadLeft'],
    ['Right', 'DpadRight'],
    ['Home', 'Guide', 'Xbox'],
];
function findButtonNumber(button) {
    if (typeof button === 'number')
        return button;
    let buttonNumber = 0;
    for (const buttonAliases of buttonMap) {
        for (const buttonAlias of buttonAliases) {
            if (button.toLowerCase() === buttonAlias.toLowerCase()) {
                return buttonNumber;
            }
        }
        buttonNumber++;
    }
    throw new Error(`There is no gamepad button called "${button}"!`);
}
function getButtonLabel(button) {
    return buttonMap[button][0];
}

const gamepadSticks = {
    left: { label: 'Left stick', xAxis: 0, yAxis: 1 },
    right: { label: 'Right stick', xAxis: 2, yAxis: 3 },
};
class Gamepad {
    constructor(
    { win = window, nav = navigator } = {}) {
        this.pressedButtons = new Set();
        this.gamepadTimestamp = 0;
        this.window = win;
        this.navigator = nav;
        this.window.addEventListener('gamepadconnected', ({ gamepad }) => {
            if (this.isConnected())
                return;
            if (gamepad.mapping === 'standard') {
                this.gamepadIndex = gamepad.index;
                store.preferGamepad = true;
            }
        });
        this.window.addEventListener('gamepaddisconnected', ({ gamepad }) => {
            if (this.gamepadIndex !== gamepad.index)
                return;
            this.gamepadIndex = undefined;
            store.preferGamepad = false;
        });
    }
    isConnected() {
        return this.gamepadIndex !== undefined && this.gamepad.connected;
    }
    get gamepad() {
        const gamepad = this.navigator.getGamepads()[this.gamepadIndex];
        if (gamepad.timestamp > this.gamepadTimestamp) {
            store.preferGamepad = true;
            this.gamepadTimestamp = gamepad.timestamp;
        }
        return gamepad;
    }
    button(button) {
        const buttonNumber = findButtonNumber(button);
        const label = getButtonLabel(buttonNumber);
        return {
            label,
            query: () => {
                if (!this.isConnected())
                    return false;
                return this.gamepad.buttons[buttonNumber].pressed;
            },
            fromGamepad: true,
            trigger: {
                label,
                query: () => {
                    if (!this.isConnected())
                        return false;
                    if (this.gamepad.buttons[buttonNumber].pressed) {
                        if (this.pressedButtons.has(buttonNumber))
                            return false;
                        this.pressedButtons.add(buttonNumber);
                        return true;
                    }
                    this.pressedButtons.delete(buttonNumber);
                    return false;
                },
                fromGamepad: true,
            },
        };
    }
    stick(stick) {
        let gpStick;
        if (typeof stick === 'string') {
            if (stick in gamepadSticks) {
                gpStick = gamepadSticks[stick];
            }
            else {
                throw new Error(`Gamepad stick "${stick}" not found!`);
            }
        }
        else {
            gpStick = stick;
        }
        return {
            label: gpStick.label,
            query: () => {
                if (!this.isConnected())
                    return new Vector2(0, 0);
                return new Vector2(this.gamepad.axes[gpStick.xAxis], this.gamepad.axes[gpStick.yAxis]);
            },
        };
    }
    vibrate(duration, { weakMagnitude, strongMagnitude } = {}) {
        return __awaiter$1(this, void 0, void 0, function* () {
            if (!this.isConnected())
                return;
            const actuator = this.gamepad.vibrationActuator;
            if (!actuator || actuator.type !== 'dual-rumble')
                return;
            yield actuator.playEffect('dual-rumble', {
                duration, strongMagnitude, weakMagnitude,
            });
        });
    }
}

function and(...controls) {
    if (controls.length < 2)
        throw new Error('Less than two controls specified!');
    return {
        label: controls.map(control => control.label).join(' + '),
        query: () => {
            for (const control of controls) {
                if (!control.query())
                    return false;
            }
            return true;
        },
    };
}

function or(...controls) {
    if (controls.length < 2)
        throw new Error('Less than two controls specified!');
    return {
        get label() {
            const hasGamepadControls = controls.some(control => control.fromGamepad);
            if (!hasGamepadControls)
                return controls[0].label;
            return (store.preferGamepad
                ? controls.find(control => control.fromGamepad)
                : controls.find(control => !control.fromGamepad)).label;
        },
        query: () => {
            let sampleQueryValue;
            for (const control of controls) {
                const queryValue = control.query();
                sampleQueryValue = queryValue;
                if (queryValue)
                    return queryValue;
            }
            if (typeof sampleQueryValue === 'boolean')
                return false;
        },
    };
}

var contro_esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Gamepad: Gamepad,
	Keyboard: Keyboard,
	Mouse: Mouse,
	and: and,
	or: or
});

var EventEmitter_1$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
    }
    EventEmitter.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(event in this.events))
            return false;
        (_a = this.events)[event].apply(_a, tslib_es6.__spread(args));
        return true;
    };
    EventEmitter.on = function (event, listener) {
        this.events[event] = listener;
    };
    EventEmitter.events = {};
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
        this.ianim = 0;
    }
    InvisibleClass.prototype.anim = function () {
        var self = this;
        return function (o, step) {
            var _this = this;
            if (step === void 0) { step = function (i) { }; }
            if (self.startAnim === undefined)
                self.startAnim = Math.trunc((Date.now() + this.animationSpeed));
            var spritP = Object.assign({}, { x: 0, y: 0 }, o);
            var arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length;
            if (!Array.isArray(spritP.x))
                this.sprit.x = spritP.x;
            if (!Array.isArray(spritP.y))
                this.sprit.y = spritP.y;
            var intervalFunction = function () {
                if (self.startAnim <= Math.trunc((Date.now()))) {
                    self.startAnim = undefined;
                    step(self.ianim);
                    if (self.ianim < arrLength) {
                        if (Array.isArray(spritP.x))
                            _this.sprit.x = spritP.x[self.ianim];
                        if (Array.isArray(spritP.y))
                            _this.sprit.y = spritP.y[self.ianim];
                        if (self.startAnim === undefined) {
                            self.startAnim = Math.trunc((Date.now() + _this.animationSpeed));
                            self.ianim += 1;
                        }
                    }
                    else
                        clearInterval(interval + (self.ianim = 0));
                }
            };
            var interval = setInterval(intervalFunction, 1);
        };
    };
    InvisibleClass.prototype.collide = function (that, entity, clone, border) {
        if (border === void 0) { border = null; }
        var isCollided = false;
        var side = "none";
        if (border !== null) {
            var top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (border * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var left = that.x < clone.x + (border * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (border * clone.scale);
            var right = that.x < clone.x + (entity.entityWidth * clone.scale) - (border * clone.scale) &&
                that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var inside = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            isCollided = top || left || bottom || right;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (inside)
                side = "inside";
        }
        else if (entity.body !== null) {
            var top = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + 1 &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            var left = that.x < clone.x + 1 &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            var bottom = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.height + 1;
            var right = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.width + 1 &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            isCollided = that.x < clone.x + entity.body.x + entity.body.width &&
                that.x + that.entityWidth > clone.x + entity.body.x &&
                that.y < clone.y + entity.body.y + entity.body.height &&
                that.y + that.entityHeight > clone.y + entity.body.y;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (isCollided)
                side = "inside";
        }
        else {
            var top = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y &&
                that.y + that.entityHeight > clone.y;
            var left = that.x < clone.x &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            var bottom = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y + (entity.entityHeight * clone.scale) - (clone.scale);
            var right = that.x < clone.x + (entity.entityWidth * clone.scale) - (clone.scale) &&
                that.x + that.entityWidth > clone.x + (entity.entityWidth * clone.scale) &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            isCollided = that.x < clone.x + (entity.entityWidth * clone.scale) &&
                that.x + that.entityWidth > clone.x &&
                that.y < clone.y + (entity.entityHeight * clone.scale) &&
                that.y + that.entityHeight > clone.y;
            if (top)
                side = "top";
            else if (left)
                side = "left";
            else if (bottom)
                side = "bottom";
            else if (right)
                side = "right";
            else if (isCollided)
                side = "inside";
        }
        return {
            side: side,
            collide: isCollided
        };
    };
    return InvisibleClass;
}());
exports.default = InvisibleClass;
//# sourceMappingURL=InvisibleClass.js.map
});

unwrapExports(InvisibleClass_1$1);

var uniformFunction$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (a) {
    function toArrowFunction(_, _f, funcArgs, accolade, arrowFuncArgs, first_character) {
        return "(" + ((funcArgs || arrowFuncArgs) || "") + ") =>" + (accolade || first_character);
    }
    var aRet = false;
    var av = a.toString().replace(/(function)? *[A-z0-9_$]+ *\(([^\r]+)?\) *({)|\(([^\r]+)?\) *=> *([^\{]|{)/g, toArrowFunction).replace(/{ *return */g, function () {
        aRet = true;
        return "";
    });
    if (aRet)
        av = av.split("").reverse().join("").replace(/}/, "").split("").reverse().join("");
    return av;
});
//# sourceMappingURL=uniformFunction.js.map
});

unwrapExports(uniformFunction$1);

var app = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });

var EventEmitter_1 = tslib_es6.__importDefault(EventEmitter_1$1);
var InvisibleClass_1 = tslib_es6.__importDefault(InvisibleClass_1$1);
var uniformFunction_1 = tslib_es6.__importDefault(uniformFunction$1);
var contro_1 = tslib_es6.__importDefault(contro_esm);
var isClass = function (fn) {
    try {
        return /^\s*class/.test(fn.toString());
    }
    catch (error) {
        return false;
    }
};
var self = {
    startOut: {},
    iout: {},
    cancelOut: {}
};
function timeoutfn(fn, time, n) {
    if (n === void 0) { n = 1; }
    if (uniformFunction_1.default(fn) in self.cancelOut === false) {
        if (uniformFunction_1.default(fn) in self.startOut === false) {
            self.startOut[uniformFunction_1.default(fn)] = null;
            self.iout[uniformFunction_1.default(fn)] = 0;
        }
        if (self.startOut[uniformFunction_1.default(fn)] === null)
            self.startOut[uniformFunction_1.default(fn)] = Math.trunc((Date.now() + time));
        var intervalFunction = function () {
            if (self.startOut[uniformFunction_1.default(fn)] <= Math.trunc((Date.now()))) {
                self.startOut[uniformFunction_1.default(fn)] = null;
                fn(self.iout[uniformFunction_1.default(fn)]);
                if (++self.iout[uniformFunction_1.default(fn)] < n) {
                    if (self.startOut[uniformFunction_1.default(fn)] === null)
                        self.startOut[uniformFunction_1.default(fn)] = Math.trunc((Date.now() + time));
                }
                else
                    clearInterval(interval_1 + (self.iout[uniformFunction_1.default(fn)] = 0));
            }
        };
        var interval_1 = setInterval(intervalFunction, 1);
    }
}
function canceltimeoutfn(fn) {
    self.cancelOut[uniformFunction_1.default(fn)] = true;
}
var nTick = {};
var cancelTick = {};
function tickfn(fn, tick) {
    if (uniformFunction_1.default(fn) in cancelTick === false) {
        if (uniformFunction_1.default(fn) in nTick === false)
            nTick[uniformFunction_1.default(fn)] = 0;
        if (++nTick[uniformFunction_1.default(fn)] >= tick) {
            fn();
            nTick[uniformFunction_1.default(fn)] = 0;
        }
    }
}
function canceltickfn(fn) {
    cancelTick[uniformFunction_1.default(fn)] = true;
}
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
                EventEmitter_1.default.emit("loaded");
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
                EventEmitter_1.default.emit("loaded");
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
                EventEmitter_1.default.emit("loaded");
                wait({
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    color: color,
                    text: text,
                    alpha: alpha,
                    padding: padding,
                    title: "Text"
                });
            });
        });
    }
    Loader.Text = Text;
})(Loader = exports.Loader || (exports.Loader = {}));
// Class
var Entity;
(function (Entity) {
    var Image = /** @class */ (function () {
        function Image() {
            this.alpha = 1;
            this.index = 1;
            this.body = null;
            this.scale = 1;
            this.hidden = false;
            this.fixed = false;
            this.x = 0;
            this.y = 0;
            this.clones = [];
            this.rotation = 0;
        }
        Image.prototype.init = function () { };
        Image.prototype.afterRedraw = function () { };
        Image.prototype.redraw = function () { };
        Image.prototype.beforeRedraw = function () { };
        Image.prototype.on = function (event, fn) { };
        Image.prototype.off = function (event) { };
        Image.prototype.tick = function (fn, tick) {
            if (tick === void 0) { tick = 1; }
            return tickfn(fn, tick);
        };
        Image.prototype.cancelTick = function (fn) { return canceltickfn(fn); };
        Image.prototype.timeout = function (fn, time, n) { return timeoutfn(fn, time, n); };
        Image.prototype.cancelTimeout = function (fn) { return canceltimeoutfn(fn); };
        Image.prototype.changeScene = function (name) { };
        Image.prototype.audio = function (name) { return document.createElement("audio"); };
        Image.prototype.collide = function (entity, border) { return { side: "none", collide: false }; };
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
        Text.prototype.setPadding = function (v) { };
        Text.prototype.getFontSize = function () { return 0; };
        Text.prototype.getFontFamily = function () { return ""; };
        Text.prototype.getColor = function () { return ""; };
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
        Camera.prototype.tick = function (fn, tick) {
            if (tick === void 0) { tick = 1; }
            return tickfn(fn, tick);
        };
        Camera.prototype.cancelTick = function (fn) { return canceltickfn(fn); };
        Camera.prototype.timeout = function (fn, time, n) { return timeoutfn(fn, time, n); };
        Camera.prototype.cancelTimeout = function (fn) { return canceltimeoutfn(fn); };
        Camera.prototype.audio = function (name) { return document.createElement("audio"); };
        Camera.prototype.getEntity = function (entity) { return Object.assign({}, this); };
        Camera.prototype.getTarget = function () { return Object.assign({}, this); };
        Camera.prototype.setTarget = function (entity) { };
        return Camera;
    }());
    Entity.Camera = Camera;
})(Entity = exports.Entity || (exports.Entity = {}));
var Plugin = /** @class */ (function () {
    function Plugin() {
    }
    Plugin.prototype.onCamera = function (camera) { };
    Plugin.prototype.onEntity = function (entity) { };
    Plugin.prototype.onFirstSetCamera = function (camera) { };
    Plugin.prototype.changeScene = function (entities, sceneName) { };
    Plugin.prototype.sceneUpdate = function (entities, sceneName) { };
    Plugin.prototype.entityUpdate = function (entity) { };
    Plugin.prototype.onCanvas = function (canvas, entities, onEntities) { };
    Plugin.prototype.cameraUpdate = function (camera) { };
    Plugin.prototype.onFirstSetEntity = function (entity) { };
    return Plugin;
}());
exports.Plugin = Plugin;
var FPSPlugin = /** @class */ (function (_super) {
    tslib_es6.__extends(FPSPlugin, _super);
    function FPSPlugin() {
        var _this = _super.call(this) || this;
        _this.fps = 0;
        _this.i = 0;
        setInterval(function () {
            _this.fps = _this.i;
            _this.i = 0;
        }, 1000);
        return _this;
    }
    FPSPlugin.prototype.sceneUpdate = function () {
        this.i++;
    };
    FPSPlugin.prototype.onEntity = function (entity) {
        if (this.fps !== entity.fps)
            entity.fps = this.fps;
    };
    return FPSPlugin;
}(Plugin));
exports.FPSPlugin = FPSPlugin;
var Game = /** @class */ (function () {
    function Game(o, w, h) {
        var _this = this;
        if (w === void 0) { w = 800; }
        if (h === void 0) { h = 600; }
        this.w = w;
        this.h = h;
        this.state = {};
        this.audio = {};
        this.saveObject = {};
        this.load = {};
        this.camera = {};
        this.cameraBackground = {};
        this.target = {};
        this.onTarget = {};
        this.plugins = o.plugins || [];
        this.state = o.state || {};
        this.canvas = o.canvas || document.body.appendChild(document.createElement("canvas"));
        this.canvas.height = this.h;
        this.canvas.width = this.w;
        this.context = this.canvas.getContext("2d");
        if (o.pixel)
            this.canvas.style.imageRendering = "pixelated";
        this.scenes = o.scene.map(function (scene) {
            for (var entityName in scene.entity)
                if (isClass(scene.entity[entityName]))
                    scene.entity[entityName] = ex(scene.entity[entityName]);
            return scene;
        });
        this.sceneId = 0;
        this.use = this.scenes[this.sceneId].name;
        this.control = {
            gamepad: new contro_1.default.Gamepad(),
            keyboard: new contro_1.default.Keyboard(),
            mouse: new contro_1.default.Mouse({ canvas: this.canvas }),
            detectAnd: contro_1.default.and,
            detectOr: contro_1.default.or
        };
        var _loop_1 = function (entityName) {
            o.load[entityName].then(function (l) {
                if (l instanceof HTMLAudioElement)
                    _this.audio[entityName] = l;
                else
                    _this.load[entityName] = l;
            });
        };
        for (var entityName in o.load) {
            _loop_1(entityName);
        }
        var i = 0;
        EventEmitter_1.default.on("loaded", function () {
            _this.context.clearRect(0, 0, _this.w, _this.h);
            var per = Math.round((++i / Object.keys(o.load).length) * 100);
            if (per > 100)
                _this.start(o);
            else if ("loadScene" in o)
                o.loadScene(_this.context, per);
            if (per === 100)
                EventEmitter_1.default.emit("loaded");
        });
    }
    Game.prototype.createSaveJson = function () {
        var o = {
            currentSceneId: this.sceneId,
            currentSceneName: this.use,
            allScene: Object.assign({}, this.saveObject)
        };
        for (var sceneId in o.allScene)
            for (var entityName in o.allScene[sceneId])
                delete o.allScene[sceneId][entityName].canvas;
        return JSON.stringify(o);
    };
    Game.prototype.setEntity = function (o, scene, entityName, l) {
        var e_1, _a;
        var _this = this;
        var invisible = new InvisibleClass_1.default();
        var entity = scene.entity[entityName];
        if (entity.x === undefined)
            entity.x = 0;
        if (entity.y === undefined)
            entity.y = 0;
        entity.scene = scene;
        entity.game = this;
        entity.canvas = this.canvas;
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
            entity.control = this.control;
            entity.on = function (event, fn) {
                var _a;
                _this.onTarget[_this.sceneId][entityName] = (_a = {}, _a[event] = fn, _a);
            };
            entity.off = function (event) {
                if (entityName in _this.onTarget[_this.sceneId])
                    delete _this.onTarget[_this.sceneId][entityName][event];
            };
            entity.changeScene = function (name) {
                var e_2, _a;
                _this.sceneId = _this.scenes.findIndex(function (scene) { return scene.name === name; });
                if (_this.sceneId !== -1 && "toScene" in _this.scenes[_this.sceneId] === false || _this.scenes[_this.sceneId].toScene(_this.use)) {
                    if (!(_this.sceneId in _this.saveObject))
                        _this.saveObject[_this.sceneId] = _this.scenes[_this.sceneId].entity;
                    _this.use = _this.scenes[_this.sceneId].name;
                    try {
                        for (var _b = tslib_es6.__values(_this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var plugin = _c.value;
                            plugin.changeScene(_this.saveObject[_this.sceneId], _this.use);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            };
            if (l instanceof HTMLImageElement) {
                if (entity.entityWidth === undefined)
                    entity.entityWidth = l.width;
                if (entity.entityHeight === undefined)
                    entity.entityHeight = l.height;
                entity.collide = function (entityName, border) {
                    var _this = this;
                    if (border === void 0) { border = null; }
                    var entitySelected = scene.entity[entityName];
                    var isCollided = false;
                    var side = "none";
                    var collitionEntitySelected = invisible.collide(this, entitySelected, entitySelected, border);
                    if (collitionEntitySelected.side !== "none")
                        side = collitionEntitySelected.side;
                    if (collitionEntitySelected.collide !== false)
                        isCollided = collitionEntitySelected.collide;
                    entitySelected.clones.forEach(function (positionClone) {
                        var collitionCloneEntitySelected = invisible.collide(_this, entitySelected, positionClone, border);
                        if (collitionCloneEntitySelected.side !== "none")
                            side = collitionCloneEntitySelected.side;
                        if (collitionCloneEntitySelected.collide !== false)
                            isCollided = collitionCloneEntitySelected.collide;
                    });
                    return {
                        side: side,
                        collide: isCollided
                    };
                };
                if (entity instanceof Entity.Sprit) {
                    entity.animation = invisible.anim();
                }
            }
            else {
                entity.setFontSize = function (v) { l.fontSize = v; };
                entity.setFontFamily = function (v) { l.fontFamily = v; };
                entity.setColor = function (v) { l.color = v; };
                entity.setPadding = function (v) { l.padding = v; };
                entity.getFontSize = function () { return l.fontSize; };
                entity.getFontFamily = function () { return l.fontFamily; };
                entity.getColor = function () { return l.color; };
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
        try {
            for (var _b = tslib_es6.__values(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                if (entity instanceof Entity.Camera && entityName === "@camera")
                    plugin.onFirstSetCamera(entity);
                else
                    plugin.onFirstSetEntity(entity);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Game.prototype.start = function (o) {
        var e_3, _a;
        var _this = this;
        if (this.sceneId !== -1) {
            this.scene(o, this.sceneId);
            if (this.onTarget[this.sceneId] === undefined)
                this.onTarget[this.sceneId] = {};
            try {
                for (var _b = tslib_es6.__values(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var plugin = _c.value;
                    plugin.onCanvas(this.canvas, this.saveObject[this.sceneId], this.onTarget[this.sceneId]);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            var on_1 = function (event, ev) {
                for (var entityName in _this.onTarget[_this.sceneId]) {
                    if (event in _this.onTarget[_this.sceneId][entityName]) {
                        if (ev.offsetX < _this.saveObject[_this.sceneId][entityName].x + (_this.saveObject[_this.sceneId][entityName].entityWidth * _this.saveObject[_this.sceneId][entityName].scale) &&
                            ev.offsetX > _this.saveObject[_this.sceneId][entityName].x &&
                            ev.offsetY < _this.saveObject[_this.sceneId][entityName].y + (_this.saveObject[_this.sceneId][entityName].entityHeight * _this.saveObject[_this.sceneId][entityName].scale) &&
                            ev.offsetY > _this.saveObject[_this.sceneId][entityName].y)
                            _this.onTarget[_this.sceneId][entityName][event]();
                    }
                }
            };
            this.canvas.onmouseover = function (ev) { return on_1("hover", ev); };
            this.canvas.onclick = function (ev) { return on_1("click", ev); };
        }
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
                        if (this.saveObject[sceneId]["@camera"].canvas === undefined) {
                            this.setEntity(o, this.scenes[sceneId], "@camera");
                            this.camera[sceneId] = this.saveObject[sceneId]["@camera"];
                        }
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
                                if (this.saveObject[sceneId][entityName].canvas === undefined)
                                    this.setEntity(o, this.scenes[sceneId], entityName, this.load[this.saveObject[sceneId][entityName].use] || this.load[entityName]);
                                if ("init" in this.saveObject[sceneId][entityName]) {
                                    this.saveObject[sceneId][entityName].init();
                                    if (o.save || ("save" in o))
                                        this.saveObject[sceneId][entityName].init = function () { };
                                }
                                this.draw(entityName, sceneId);
                            }
                        }
                        update = function () { return tslib_es6.__awaiter(_this, void 0, void 0, function () {
                            var _a, _b, plugin;
                            var e_4, _c;
                            return tslib_es6.__generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        EventEmitter_1.default.emit("key:tick-increment");
                                        this.context.clearRect(0, 0, this.w, this.h);
                                        return [4 /*yield*/, this.update(o, sceneId)];
                                    case 1:
                                        _d.sent();
                                        try {
                                            for (_a = tslib_es6.__values(this.plugins), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                plugin = _b.value;
                                                plugin.sceneUpdate(this.saveObject[sceneId], this.use);
                                            }
                                        }
                                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_4) throw e_4.error; }
                                        }
                                        if (this.use === this.scenes[sceneId].name)
                                            requestAnimationFrame(update);
                                        else if (sceneId !== -1)
                                            this.scene(o, this.sceneId);
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        requestAnimationFrame(update);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Game.prototype.drawCamera = function (sceneId) {
        var e_5, _a;
        try {
            for (var _b = tslib_es6.__values(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                plugin.cameraUpdate(this.camera[sceneId]);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.context.drawImage(this.cameraBackground[sceneId], this.camera[sceneId].x, this.camera[sceneId].y);
    };
    Game.prototype.draw = function (entityName, sceneId) {
        var e_6, _a;
        var _this = this;
        var entity = this.saveObject[sceneId][entityName];
        try {
            for (var _b = tslib_es6.__values(this.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                plugin.entityUpdate(entity);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (entityName in this.saveObject[sceneId]) {
            var o_1 = this.load[entity.use] || this.load[entityName];
            this.context.globalAlpha = entity.alpha;
            if (o_1 instanceof HTMLImageElement) {
                if ("sprit" in entity) {
                    this.context.save();
                    this.context.translate(entity.x + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].x), entity.y + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].y));
                    this.context.rotate(entity.rotation * (Math.PI / 180));
                    this.context.drawImage(o_1, (entity.entityWidth * entity.sprit.x), (entity.entityHeight * entity.sprit.y), entity.entityWidth, entity.entityHeight, 0, 0, entity.entityWidth * entity.scale, entity.entityHeight * entity.scale);
                    this.context.restore();
                    entity.clones.forEach(function (_a) {
                        var x = _a.x, y = _a.y, scale = _a.scale, sprit = _a.sprit, _b = _a.rotation, rotation = _b === void 0 ? 0 : _b, _c = _a.fixed, fixed = _c === void 0 ? false : _c;
                        _this.context.save();
                        _this.context.translate(x + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].x), y + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].y));
                        _this.context.rotate(rotation * (Math.PI / 180));
                        _this.context.drawImage(o_1, (entity.entityWidth * (sprit || entity.sprit).x), (entity.entityHeight * (sprit || entity.sprit).y), entity.entityWidth, entity.entityHeight, 0, 0, entity.entityWidth * scale, entity.entityHeight * scale);
                        _this.context.restore();
                    });
                }
                else {
                    this.context.save();
                    this.context.translate(entity.x + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].x), entity.y + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].y));
                    this.context.rotate(entity.rotation * (Math.PI / 180));
                    this.context.drawImage(o_1, 0, 0, entity.entityWidth * entity.scale, entity.entityHeight * entity.scale);
                    this.context.restore();
                    entity.clones.forEach(function (_a) {
                        var x = _a.x, y = _a.y, _b = _a.rotation, rotation = _b === void 0 ? 0 : _b, scale = _a.scale, _c = _a.fixed, fixed = _c === void 0 ? false : _c;
                        _this.context.save();
                        _this.context.translate(x + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].x), y + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].y));
                        _this.context.rotate(rotation * (Math.PI / 180));
                        _this.context.drawImage(o_1, 0, 0, entity.entityWidth * (scale || entity.scale), entity.entityHeight * (scale || entity.scale));
                        _this.context.restore();
                    });
                }
            }
            else if (!(o_1 instanceof HTMLAudioElement)) {
                var text_1 = o_1.text;
                if ("replaced" in entity)
                    tslib_es6.__spread([["", ""]], entity.replaced).forEach(function (arr) {
                        text_1 = text_1.replace.apply(text_1, tslib_es6.__spread(arr)).replace(/\*[a-z0-9_]+/i, function (result) { return result.slice(1) in entity ? entity[result.slice(1)] : result; });
                    });
                entity.entityWidth = 0;
                entity.entityHeight = 0;
                this.context.save();
                this.context.translate(entity.x + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].x), entity.y + (this.camera[sceneId] === undefined || entity.fixed ? 0 : this.camera[sceneId].y) + (o_1.fontSize * entity.scale / 1.4));
                this.context.rotate(entity.rotation * (Math.PI / 180));
                this.context.font = o_1.fontSize * entity.scale + "px " + o_1.fontFamily;
                this.context.fillStyle = o_1.color;
                text_1.split("\n").forEach(function (text, i) {
                    if (entity.entityWidth < _this.context.measureText(text).width)
                        entity.entityWidth = _this.context.measureText(text).width;
                    entity.entityHeight = (o_1.fontSize * (i + 1) + o_1.padding * i);
                    _this.context.fillText(text.trim(), 0, ((o_1.fontSize + o_1.padding) * i));
                });
                this.context.restore();
                entity.clones.forEach(function (_a) {
                    var x = _a.x, y = _a.y, _b = _a.rotation, rotation = _b === void 0 ? 0 : _b, scale = _a.scale, _c = _a.fixed, fixed = _c === void 0 ? false : _c;
                    _this.context.save();
                    _this.context.translate(x + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].x), y + (o_1.fontSize * scale / 1.4) + (_this.camera[sceneId] === undefined || fixed ? 0 : _this.camera[sceneId].y));
                    _this.context.rotate(rotation * (Math.PI / 180));
                    _this.context.font = o_1.fontSize * scale + "px " + o_1.fontFamily;
                    _this.context.fillStyle = o_1.color;
                    text_1.split("\n").forEach(function (text, i) {
                        if (entity.entityWidth < _this.context.measureText(text).width)
                            entity.entityWidth = _this.context.measureText(text).width;
                        entity.entityHeight = (o_1.fontSize * (i + 1) + o_1.padding * i);
                        _this.context.fillText(text.trim(), 0, ((o_1.fontSize + o_1.padding) * i));
                    });
                    _this.context.restore();
                });
            }
        }
    };
    Game.prototype.update = function (o, sceneId) {
        return tslib_es6.__awaiter(this, void 0, void 0, function () {
            var target, speed, speed, _a, _b, plugin, _c, _d, entityName, _e, _f, plugin;
            var e_7, _g, e_8, _h, e_9, _j;
            var _this = this;
            return tslib_es6.__generator(this, function (_k) {
                if (this.scenes[sceneId].backgroundColor || o.darkmode || !("darkmode" in o)) {
                    this.context.save();
                    this.context.fillStyle = this.scenes[sceneId].backgroundColor ? this.scenes[sceneId].backgroundColor : "#000";
                    this.context.rect(0, 0, this.w, this.h);
                    this.context.fill();
                    this.context.restore();
                }
                if (this.camera[sceneId] !== undefined) {
                    if (this.target[sceneId]) {
                        target = this.target[sceneId];
                        if (this.canvas.width / 2 <= target.x + target.entityWidth / 2) {
                            speed = null;
                            if (this.camera[sceneId].width - (this.canvas.width / 2) <= target.x + target.entityWidth / 2 && this.camera[sceneId].x <= this.canvas.width - this.camera[sceneId].width)
                                speed = this.canvas.width - this.camera[sceneId].width;
                            else
                                speed = (this.canvas.width / 2) - (target.x + target.entityWidth / 2);
                            this.camera[sceneId].x = Math.round(speed);
                        }
                        if (this.canvas.height / 2 <= target.y + target.entityHeight / 2) {
                            speed = null;
                            if (this.camera[sceneId].height - (this.canvas.height / 2) <= target.y + target.entityHeight / 2 && this.camera[sceneId].y <= this.canvas.height - this.camera[sceneId].height)
                                speed = this.canvas.height - this.camera[sceneId].height;
                            else
                                speed = (this.canvas.height / 2) - (target.y + target.entityHeight / 2);
                            this.camera[sceneId].y = Math.round(speed);
                        }
                    }
                    this.drawCamera(sceneId);
                    try {
                        for (_a = tslib_es6.__values(this.plugins), _b = _a.next(); !_b.done; _b = _a.next()) {
                            plugin = _b.value;
                            plugin.onCamera(this.camera[sceneId]);
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    this.camera[sceneId].update();
                }
                try {
                    for (_c = tslib_es6.__values(Object.keys(this.saveObject[sceneId]).filter(function (n) { return n !== "@camera"; }).sort(function (a, b) { return _this.saveObject[sceneId][a].index - _this.saveObject[sceneId][b].index; })), _d = _c.next(); !_d.done; _d = _c.next()) {
                        entityName = _d.value;
                        try {
                            for (_e = (e_9 = void 0, tslib_es6.__values(this.plugins)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                plugin = _f.value;
                                plugin.onEntity(this.saveObject[sceneId][entityName]);
                            }
                        }
                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                            }
                            finally { if (e_9) throw e_9.error; }
                        }
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
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    return Game;
}());
exports.Game = Game;

});

var app$1 = unwrapExports(app);
var app_1 = app.ex;
var app_2 = app.Loader;
var app_3 = app.Entity;
var app_4 = app.Plugin;
var app_5 = app.FPSPlugin;
var app_6 = app.Game;

export default app$1;
export { app_3 as Entity, app_5 as FPSPlugin, app_6 as Game, app_2 as Loader, app_4 as Plugin, app_1 as ex };
