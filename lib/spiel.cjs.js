'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    }
    EventEmitter.emit = function (event) {
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
 * (c) 2019 Niklas Higi
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
    constructor({ canvas, doc = document }) {
        this.pointerLocked = false;
        this.pointerMovement = new Vector2();
        this.pressedButtons = new Set();
        this.queuedButtons = new Set();
        this.scrollDistance = 0;
        this.canvas = canvas;
        this.document = doc;
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
        const that = this;
        button = this.parseButton(button);
        return {
            label: ['Left', 'Middle', 'Right'][button] + ' Mouse Button',
            query() {
                button = that.parseButton(button);
                if (!this.hasOwnProperty('trigger')) {
                    if (that.queuedButtons.has(button)) {
                        that.queuedButtons.delete(button);
                        return true;
                    }
                    return false;
                }
                else {
                    return that.pressedButtons.has(button);
                }
            },
            get trigger() {
                delete this.trigger;
                return this;
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
    Object.keys(keyMap).forEach(keyValue => {
        keyMap[keyValue].forEach(key => {
            if (keyString.toLowerCase() === key.toLowerCase()) {
                keyString = keyValue;
            }
        });
    });
    return keyString;
}
function getKeyLabel(key) {
    return key in keyMap ? keyMap[key][0] : (key.length === 1 ? key.toUpperCase() : key);
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
        const that = this;
        key = findKeyValue(key);
        return {
            label: getKeyLabel(key),
            query() {
                return this.hasOwnProperty('trigger') ? that.pressedKeys.has(key) : that.queuedKeys.delete(key);
            },
            get trigger() {
                delete this.trigger;
                return this;
            },
        };
    }
    directionalKeys(keys, label) {
        let defaultLabel;
        if (typeof keys === 'string') {
            keys = keys.toLowerCase();
            if (keys in arrowKeyTemplates) {
                const template = arrowKeyTemplates[keys.toLowerCase()];
                defaultLabel = template[0];
                keys = template[1];
            }
            else {
                throw new Error(`Directional key template "${keys}" not found!`);
            }
        }
        else {
            if (keys.length === 4) {
                keys = keys.map(key => findKeyValue(key));
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
                if (this.key(keys[0]).query())
                    vector.y -= 1;
                if (this.key(keys[1]).query())
                    vector.x -= 1;
                if (this.key(keys[2]).query())
                    vector.y += 1;
                if (this.key(keys[3]).query())
                    vector.x += 1;
                return vector;
            },
        };
    }
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
            if (!this.isConnected()) {
                if (gamepad.mapping === 'standard') {
                    this.gamepadIndex = gamepad.index;
                    store.preferGamepad = true;
                }
            }
        });
        this.window.addEventListener('gamepaddisconnected', ({ gamepad }) => {
            if (this.gamepadIndex === gamepad.index) {
                this.gamepadIndex = undefined;
                store.preferGamepad = false;
            }
        });
    }
    isConnected() {
        return this.gamepadIndex !== undefined && this.gamepad.connected;
    }
    get gamepad() {
        const gamepad = this.navigator.getGamepads()[this.gamepadIndex];
        if (gamepad.timestamp > this.gamepadTimestamp)
            store.preferGamepad = true;
        this.gamepadTimestamp = gamepad.timestamp;
        return gamepad;
    }
    button(button) {
        const that = this;
        const buttonNumber = findButtonNumber(button);
        return {
            label: getButtonLabel(buttonNumber),
            fromGamepad: true,
            query() {
                if (!that.isConnected())
                    return false;
                if (!this.hasOwnProperty('trigger')) {
                    if (that.gamepad.buttons[buttonNumber].pressed) {
                        if (!that.pressedButtons.has(buttonNumber)) {
                            that.pressedButtons.add(buttonNumber);
                            return true;
                        }
                    }
                    else {
                        that.pressedButtons.delete(buttonNumber);
                    }
                    return false;
                }
                else {
                    return that.gamepad.buttons[buttonNumber].pressed;
                }
            },
            get trigger() {
                delete this.trigger;
                return this;
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
        const { gamepad } = this;
        return {
            label: gpStick.label,
            query() {
                return new Vector2(gamepad.axes[gpStick.xAxis], gamepad.axes[gpStick.yAxis]);
            },
        };
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
            return (controls.filter(control => control.fromGamepad).length === 0 ?
                controls[0]
                : store.preferGamepad ?
                    controls.filter(control => control.fromGamepad === true)[0]
                    : controls.filter(control => control.fromGamepad !== true)[0]).label;
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
        (_a = this.events)[event].apply(_a, args);
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
var Game = /** @class */ (function () {
    function Game(o, w, h) {
        var _this = this;
        if (w === void 0) { w = 800; }
        if (h === void 0) { h = 600; }
        this.w = w;
        this.h = h;
        this.fps = 60;
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
        this.scenes = o.scene;
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
                _this.sceneId = _this.scenes.findIndex(function (scene) { return scene.name === name; });
                if (_this.sceneId !== -1 && "toScene" in _this.scenes[_this.sceneId] === false || _this.scenes[_this.sceneId].toScene(_this.use)) {
                    if (!(_this.sceneId in _this.saveObject))
                        _this.saveObject[_this.sceneId] = _this.scenes[_this.sceneId].entity;
                    _this.use = _this.scenes[_this.sceneId].name;
                    for (var _i = 0, _a = _this.plugins; _i < _a.length; _i++) {
                        var plugin = _a[_i];
                        plugin.changeScene(_this.saveObject[_this.sceneId], _this.use);
                    }
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
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            if (entity instanceof Entity.Camera && entityName === "@camera")
                plugin.onFirstSetCamera(entity);
            else
                plugin.onFirstSetEntity(entity);
        }
    };
    Game.prototype.start = function (o) {
        var _this = this;
        if (this.sceneId !== -1) {
            this.scene(o, this.sceneId);
            if (this.onTarget[this.sceneId] === undefined)
                this.onTarget[this.sceneId] = {};
            for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
                var plugin = _a[_i];
                plugin.onCanvas(this.canvas, this.saveObject[this.sceneId], this.onTarget[this.sceneId]);
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
            var _a, _b, entityName, i, update;
            var _this = this;
            return tslib_es6.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!("@camera" in this.saveObject[sceneId])) return [3 /*break*/, 2];
                        if (this.saveObject[sceneId]["@camera"].canvas === undefined) {
                            if (isClass(this.saveObject[sceneId]["@camera"]))
                                this.saveObject[sceneId]["@camera"] = ex(this.saveObject[sceneId]["@camera"]);
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
                                if (this.saveObject[sceneId][entityName].canvas === undefined) {
                                    if (isClass(this.saveObject[sceneId][entityName]))
                                        this.saveObject[sceneId][entityName] = ex(this.saveObject[sceneId][entityName]);
                                    this.setEntity(o, this.scenes[sceneId], entityName, this.load[this.saveObject[sceneId][entityName].use] || this.load[entityName]);
                                }
                                if ("init" in this.saveObject[sceneId][entityName]) {
                                    this.saveObject[sceneId][entityName].init();
                                    if (o.save || ("save" in o))
                                        this.saveObject[sceneId][entityName].init = function () { };
                                }
                                this.draw(entityName, sceneId);
                            }
                        }
                        i = 0;
                        setInterval(function () {
                            _this.fps = i;
                            i = 0;
                        }, 1000);
                        update = function () {
                            i++;
                            EventEmitter_1.default.emit("key:tick-increment");
                            _this.context.clearRect(0, 0, _this.w, _this.h);
                            _this.update(o, sceneId);
                            for (var _i = 0, _a = _this.plugins; _i < _a.length; _i++) {
                                var plugin = _a[_i];
                                plugin.sceneUpdate(_this.saveObject[sceneId], _this.use);
                            }
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
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.cameraUpdate(this.camera[sceneId]);
        }
        this.context.drawImage(this.cameraBackground[sceneId], this.camera[sceneId].x, this.camera[sceneId].y);
    };
    Game.prototype.draw = function (entityName, sceneId) {
        var _this = this;
        this.context.save();
        for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            plugin.entityUpdate(this.saveObject[sceneId][entityName]);
        }
        if (entityName in this.saveObject[sceneId]) {
            var o_1 = this.load[this.saveObject[sceneId][entityName].use] || this.load[entityName];
            this.context.globalAlpha = this.saveObject[sceneId][entityName].alpha;
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
                        text_1 = text_1.replace.apply(text_1, arr).replace(/\*[a-z0-9_]+/i, function (result) { return result.slice(1) in _this.saveObject[sceneId][entityName] ? _this.saveObject[sceneId][entityName][result.slice(1)] : result; });
                    });
                this.saveObject[sceneId][entityName].entityWidth = 0;
                this.saveObject[sceneId][entityName].entityHeight = 0;
                this.context.font = o_1.fontSize * this.saveObject[sceneId][entityName].scale + "px " + o_1.fontFamily;
                this.context.fillStyle = o_1.color;
                text_1.split("\n").forEach(function (text, i) {
                    if (_this.saveObject[sceneId][entityName].entityWidth < _this.context.measureText(text).width)
                        _this.saveObject[sceneId][entityName].entityWidth = _this.context.measureText(text).width;
                    _this.saveObject[sceneId][entityName].entityHeight = (o_1.fontSize * (i + 1) + o_1.padding * i);
                    _this.context.fillText(text.trim(), _this.saveObject[sceneId][entityName].x + (_this.camera[sceneId] === undefined || _this.saveObject[sceneId][entityName].fixed ? 0 : _this.camera[sceneId].x), _this.saveObject[sceneId][entityName].y + (o_1.fontSize * _this.saveObject[sceneId][entityName].scale / 1.4) + (_this.camera[sceneId] === undefined || _this.saveObject[sceneId][entityName].fixed ? 0 : _this.camera[sceneId].y) + ((o_1.fontSize + o_1.padding) * i));
                });
            }
        }
        this.context.restore();
    };
    Game.prototype.update = function (o, sceneId) {
        var _this = this;
        if (this.scenes[sceneId].backgroundColor || o.darkmode || !("darkmode" in o)) {
            this.context.save();
            this.context.fillStyle = this.scenes[sceneId].backgroundColor ? this.scenes[sceneId].backgroundColor : "#000";
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
            for (var _i = 0, _a = this.plugins; _i < _a.length; _i++) {
                var plugin = _a[_i];
                plugin.onCamera(this.camera[sceneId]);
            }
            this.camera[sceneId].update();
        }
        for (var _b = 0, _c = Object.keys(this.saveObject[sceneId]).filter(function (n) { return n !== "@camera"; }).sort(function (a, b) { return _this.saveObject[sceneId][a].index - _this.saveObject[sceneId][b].index; }); _b < _c.length; _b++) {
            var entityName = _c[_b];
            for (var _d = 0, _e = this.plugins; _d < _e.length; _d++) {
                var plugin = _e[_d];
                plugin.onEntity(this.saveObject[sceneId][entityName]);
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
var app_5 = app.Game;

exports.Entity = app_3;
exports.Game = app_5;
exports.Loader = app_2;
exports.Plugin = app_4;
exports.default = app$1;
exports.ex = app_1;
