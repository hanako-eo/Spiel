(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.Spiel = {}));
}(this, function (exports) { 'use strict';

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

	var domain;

	// This constructor is used to store event handlers. Instantiating this is
	// faster than explicitly calling `Object.create(null)` to get a "clean" empty
	// object (tested with v8 v4.9).
	function EventHandlers() {}
	EventHandlers.prototype = Object.create(null);

	function EventEmitter() {
	  EventEmitter.init.call(this);
	}

	// nodejs oddity
	// require('events') === require('events').EventEmitter
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.usingDomains = false;

	EventEmitter.prototype.domain = undefined;
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	EventEmitter.init = function() {
	  this.domain = null;
	  if (EventEmitter.usingDomains) {
	    // if there is an active domain, then attach to it.
	    if (domain.active && !(this instanceof domain.Domain)) ;
	  }

	  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
	    this._events = new EventHandlers();
	    this._eventsCount = 0;
	  }

	  this._maxListeners = this._maxListeners || undefined;
	};

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
	  if (typeof n !== 'number' || n < 0 || isNaN(n))
	    throw new TypeError('"n" argument must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	function $getMaxListeners(that) {
	  if (that._maxListeners === undefined)
	    return EventEmitter.defaultMaxListeners;
	  return that._maxListeners;
	}

	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
	  return $getMaxListeners(this);
	};

	// These standalone emit* functions are used to optimize calling of event
	// handlers for fast cases because emit() itself often has a variable number of
	// arguments and can be deoptimized because of that. These functions always have
	// the same number of arguments and thus do not get deoptimized, so the code
	// inside them can execute faster.
	function emitNone(handler, isFn, self) {
	  if (isFn)
	    handler.call(self);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self);
	  }
	}
	function emitOne(handler, isFn, self, arg1) {
	  if (isFn)
	    handler.call(self, arg1);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1);
	  }
	}
	function emitTwo(handler, isFn, self, arg1, arg2) {
	  if (isFn)
	    handler.call(self, arg1, arg2);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2);
	  }
	}
	function emitThree(handler, isFn, self, arg1, arg2, arg3) {
	  if (isFn)
	    handler.call(self, arg1, arg2, arg3);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].call(self, arg1, arg2, arg3);
	  }
	}

	function emitMany(handler, isFn, self, args) {
	  if (isFn)
	    handler.apply(self, args);
	  else {
	    var len = handler.length;
	    var listeners = arrayClone(handler, len);
	    for (var i = 0; i < len; ++i)
	      listeners[i].apply(self, args);
	  }
	}

	EventEmitter.prototype.emit = function emit(type) {
	  var er, handler, len, args, i, events, domain;
	  var doError = (type === 'error');

	  events = this._events;
	  if (events)
	    doError = (doError && events.error == null);
	  else if (!doError)
	    return false;

	  domain = this.domain;

	  // If there is no 'error' event listener then throw.
	  if (doError) {
	    er = arguments[1];
	    if (domain) {
	      if (!er)
	        er = new Error('Uncaught, unspecified "error" event');
	      er.domainEmitter = this;
	      er.domain = domain;
	      er.domainThrown = false;
	      domain.emit('error', er);
	    } else if (er instanceof Error) {
	      throw er; // Unhandled 'error' event
	    } else {
	      // At least give some kind of context to the user
	      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	      err.context = er;
	      throw err;
	    }
	    return false;
	  }

	  handler = events[type];

	  if (!handler)
	    return false;

	  var isFn = typeof handler === 'function';
	  len = arguments.length;
	  switch (len) {
	    // fast cases
	    case 1:
	      emitNone(handler, isFn, this);
	      break;
	    case 2:
	      emitOne(handler, isFn, this, arguments[1]);
	      break;
	    case 3:
	      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
	      break;
	    case 4:
	      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
	      break;
	    // slower
	    default:
	      args = new Array(len - 1);
	      for (i = 1; i < len; i++)
	        args[i - 1] = arguments[i];
	      emitMany(handler, isFn, this, args);
	  }

	  return true;
	};

	function _addListener(target, type, listener, prepend) {
	  var m;
	  var events;
	  var existing;

	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');

	  events = target._events;
	  if (!events) {
	    events = target._events = new EventHandlers();
	    target._eventsCount = 0;
	  } else {
	    // To avoid recursion in the case that type === "newListener"! Before
	    // adding it to the listeners, first emit "newListener".
	    if (events.newListener) {
	      target.emit('newListener', type,
	                  listener.listener ? listener.listener : listener);

	      // Re-assign `events` because a newListener handler could have caused the
	      // this._events to be assigned to a new object
	      events = target._events;
	    }
	    existing = events[type];
	  }

	  if (!existing) {
	    // Optimize the case of one listener. Don't need the extra array object.
	    existing = events[type] = listener;
	    ++target._eventsCount;
	  } else {
	    if (typeof existing === 'function') {
	      // Adding the second element, need to change to array.
	      existing = events[type] = prepend ? [listener, existing] :
	                                          [existing, listener];
	    } else {
	      // If we've already got an array, just append.
	      if (prepend) {
	        existing.unshift(listener);
	      } else {
	        existing.push(listener);
	      }
	    }

	    // Check for listener leak
	    if (!existing.warned) {
	      m = $getMaxListeners(target);
	      if (m && m > 0 && existing.length > m) {
	        existing.warned = true;
	        var w = new Error('Possible EventEmitter memory leak detected. ' +
	                            existing.length + ' ' + type + ' listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit');
	        w.name = 'MaxListenersExceededWarning';
	        w.emitter = target;
	        w.type = type;
	        w.count = existing.length;
	        emitWarning(w);
	      }
	    }
	  }

	  return target;
	}
	function emitWarning(e) {
	  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
	}
	EventEmitter.prototype.addListener = function addListener(type, listener) {
	  return _addListener(this, type, listener, false);
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.prependListener =
	    function prependListener(type, listener) {
	      return _addListener(this, type, listener, true);
	    };

	function _onceWrap(target, type, listener) {
	  var fired = false;
	  function g() {
	    target.removeListener(type, g);
	    if (!fired) {
	      fired = true;
	      listener.apply(target, arguments);
	    }
	  }
	  g.listener = listener;
	  return g;
	}

	EventEmitter.prototype.once = function once(type, listener) {
	  if (typeof listener !== 'function')
	    throw new TypeError('"listener" argument must be a function');
	  this.on(type, _onceWrap(this, type, listener));
	  return this;
	};

	EventEmitter.prototype.prependOnceListener =
	    function prependOnceListener(type, listener) {
	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');
	      this.prependListener(type, _onceWrap(this, type, listener));
	      return this;
	    };

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener =
	    function removeListener(type, listener) {
	      var list, events, position, i, originalListener;

	      if (typeof listener !== 'function')
	        throw new TypeError('"listener" argument must be a function');

	      events = this._events;
	      if (!events)
	        return this;

	      list = events[type];
	      if (!list)
	        return this;

	      if (list === listener || (list.listener && list.listener === listener)) {
	        if (--this._eventsCount === 0)
	          this._events = new EventHandlers();
	        else {
	          delete events[type];
	          if (events.removeListener)
	            this.emit('removeListener', type, list.listener || listener);
	        }
	      } else if (typeof list !== 'function') {
	        position = -1;

	        for (i = list.length; i-- > 0;) {
	          if (list[i] === listener ||
	              (list[i].listener && list[i].listener === listener)) {
	            originalListener = list[i].listener;
	            position = i;
	            break;
	          }
	        }

	        if (position < 0)
	          return this;

	        if (list.length === 1) {
	          list[0] = undefined;
	          if (--this._eventsCount === 0) {
	            this._events = new EventHandlers();
	            return this;
	          } else {
	            delete events[type];
	          }
	        } else {
	          spliceOne(list, position);
	        }

	        if (events.removeListener)
	          this.emit('removeListener', type, originalListener || listener);
	      }

	      return this;
	    };

	EventEmitter.prototype.removeAllListeners =
	    function removeAllListeners(type) {
	      var listeners, events;

	      events = this._events;
	      if (!events)
	        return this;

	      // not listening for removeListener, no need to emit
	      if (!events.removeListener) {
	        if (arguments.length === 0) {
	          this._events = new EventHandlers();
	          this._eventsCount = 0;
	        } else if (events[type]) {
	          if (--this._eventsCount === 0)
	            this._events = new EventHandlers();
	          else
	            delete events[type];
	        }
	        return this;
	      }

	      // emit removeListener for all listeners on all events
	      if (arguments.length === 0) {
	        var keys = Object.keys(events);
	        for (var i = 0, key; i < keys.length; ++i) {
	          key = keys[i];
	          if (key === 'removeListener') continue;
	          this.removeAllListeners(key);
	        }
	        this.removeAllListeners('removeListener');
	        this._events = new EventHandlers();
	        this._eventsCount = 0;
	        return this;
	      }

	      listeners = events[type];

	      if (typeof listeners === 'function') {
	        this.removeListener(type, listeners);
	      } else if (listeners) {
	        // LIFO order
	        do {
	          this.removeListener(type, listeners[listeners.length - 1]);
	        } while (listeners[0]);
	      }

	      return this;
	    };

	EventEmitter.prototype.listeners = function listeners(type) {
	  var evlistener;
	  var ret;
	  var events = this._events;

	  if (!events)
	    ret = [];
	  else {
	    evlistener = events[type];
	    if (!evlistener)
	      ret = [];
	    else if (typeof evlistener === 'function')
	      ret = [evlistener.listener || evlistener];
	    else
	      ret = unwrapListeners(evlistener);
	  }

	  return ret;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  if (typeof emitter.listenerCount === 'function') {
	    return emitter.listenerCount(type);
	  } else {
	    return listenerCount.call(emitter, type);
	  }
	};

	EventEmitter.prototype.listenerCount = listenerCount;
	function listenerCount(type) {
	  var events = this._events;

	  if (events) {
	    var evlistener = events[type];

	    if (typeof evlistener === 'function') {
	      return 1;
	    } else if (evlistener) {
	      return evlistener.length;
	    }
	  }

	  return 0;
	}

	EventEmitter.prototype.eventNames = function eventNames() {
	  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
	};

	// About 1.5x faster than the two-arg version of Array#splice().
	function spliceOne(list, index) {
	  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
	    list[i] = list[k];
	  list.pop();
	}

	function arrayClone(arr, i) {
	  var copy = new Array(i);
	  while (i--)
	    copy[i] = arr[i];
	  return copy;
	}

	function unwrapListeners(arr) {
	  var ret = new Array(arr.length);
	  for (var i = 0; i < ret.length; ++i) {
	    ret[i] = arr[i].listener || arr[i];
	  }
	  return ret;
	}

	var app = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	// Function
	var LoaderEmitter = new EventEmitter.EventEmitter();
	function click(entity, listener) {
	    entity.canvas.addEventListener("click", function (ev) {
	        var mouseX = Math.abs(entity.canvas.offsetLeft - ev.x);
	        var mouseY = Math.abs(entity.canvas.offsetTop - ev.y);
	        if ((entity.x <= mouseX && (entity.x + entity.entityWidth) >= mouseX) && (entity.y <= mouseY && (entity.y + entity.entityWidth) >= mouseY))
	            listener(Object.assign({}, ev, { x: mouseX, y: mouseY }));
	    });
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
	            var fontSize = "fontSize" in (style || {}) ? style.fontSize : "10px";
	            var fontFamily = "fontFamily" in (style || {}) ? style.fontFamily : "sans-serif";
	            setTimeout(function () {
	                LoaderEmitter.emit("loaded");
	                wait({ font: fontSize + " " + fontFamily, text: text, title: "Text" });
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
	})(Entity = exports.Entity || (exports.Entity = {}));
	var Camera = /** @class */ (function () {
	    function Camera() {
	    }
	    return Camera;
	}());
	exports.Camera = Camera;
	var Game = /** @class */ (function () {
	    function Game(o, w, h) {
	        var _this = this;
	        if (w === void 0) { w = 800; }
	        if (h === void 0) { h = 600; }
	        this.w = w;
	        this.h = h;
	        this.key = [];
	        this.saveObject = {};
	        this.load = {};
	        this.canvas = o.canvas || document.body.appendChild(document.createElement("canvas"));
	        if (o.pixel)
	            this.canvas.style.imageRendering = "pixelated";
	        if (o.darkmode || !("darkmode" in o))
	            this.canvas.style.backgroundColor = "#000";
	        this.context = this.canvas.getContext("2d");
	        this.scenes = o.scene;
	        this.canvas.height = this.h;
	        this.canvas.width = this.w;
	        this.sceneId = 0;
	        this.use = this.scenes[this.sceneId].name;
	        var _loop_1 = function (entityName) {
	            o.load[entityName].then(function (l) {
	                _this.load[entityName] = l;
	                _this.scenes.forEach(function (scene) {
	                    if (entityName in scene.entity) {
	                        scene.entity[entityName].spielEngine = _this;
	                        scene.entity[entityName].canvas = _this.canvas;
	                        scene.entity[entityName].getEntity = function (entity) {
	                            if (scene.entity[entity] instanceof Camera)
	                                throw new TypeError("You can't get the camera");
	                            return Object.assign({}, scene.entity[entity]);
	                        };
	                        scene.entity[entityName].audio = function (name) {
	                            if (!(name in o.load))
	                                throw new ReferenceError(name + " is not loaded or defined with this name");
	                            if (name in _this.load) {
	                                if (_this.load[name].title !== "Audio")
	                                    throw new TypeError(name + " is not Audio Element");
	                                return _this.load[name];
	                            }
	                            return document.createElement("audio");
	                        };
	                        if (!(scene.entity[entityName] instanceof Camera)) {
	                            scene.entity[entityName].changeScene = function (name) {
	                                _this.sceneId = _this.scenes.findIndex(function (scene) { return scene.name === name; });
	                                if (_this.sceneId !== -1) {
	                                    if (!(_this.sceneId in _this.saveObject))
	                                        _this.saveObject[_this.sceneId] = _this.scenes[_this.sceneId].entity;
	                                    _this.use = _this.scenes[_this.sceneId].name;
	                                }
	                            };
	                            if (l instanceof HTMLImageElement) {
	                                if (scene.entity[entityName].entityWidth === undefined)
	                                    scene.entity[entityName].entityWidth = l.width;
	                                if (scene.entity[entityName].entityHeight === undefined)
	                                    scene.entity[entityName].entityHeight = l.height;
	                                scene.entity[entityName].collide = function (entity, border) {
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
	                                if (scene.entity[entityName] instanceof Entity.Sprit) {
	                                    var InvisibleClass = /** @class */ (function () {
	                                        function InvisibleClass() {
	                                            this.i = 0;
	                                        }
	                                        InvisibleClass.prototype.anim = function () {
	                                            var self = this;
	                                            return function (o, step) {
	                                                var _this = this;
	                                                if (step === void 0) { step = function (i) { }; }
	                                                if (self.start === undefined)
	                                                    self.start = Math.trunc((Date.now() + this.animationSpeed) / 10) * 10;
	                                                var spritP = Object.assign({}, { x: 0, y: 0 }, o);
	                                                var arrLength = Array.isArray(spritP.x) ? spritP.x.length : Array.isArray(spritP.y) ? spritP.y.length : [0].length;
	                                                if (!Array.isArray(spritP.x))
	                                                    this.sprit.x = spritP.x;
	                                                if (!Array.isArray(spritP.y))
	                                                    this.sprit.y = spritP.y;
	                                                var intervalFunction = function () {
	                                                    if (self.start === Math.trunc((Date.now()) / 10) * 10) {
	                                                        self.start = undefined;
	                                                        step(self.i);
	                                                        if (self.i < arrLength) {
	                                                            if (Array.isArray(spritP.x))
	                                                                _this.sprit.x = spritP.x[self.i];
	                                                            if (Array.isArray(spritP.y))
	                                                                _this.sprit.y = spritP.y[self.i];
	                                                            if (self.start === undefined) {
	                                                                self.start = Math.trunc((Date.now() + _this.animationSpeed) / 10) * 10;
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
	                                        return InvisibleClass;
	                                    }());
	                                    var invisible = new InvisibleClass();
	                                    scene.entity[entityName].animation = invisible.anim();
	                                }
	                            }
	                        }
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
	            if (++i === iL)
	                _this.start(o);
	            else {
	                var text = "Game Loaded at " + (i / iL) * 100 + "%";
	                _this.context.save();
	                _this.context.clearRect(0, 0, _this.w, _this.h);
	                _this.context.font = "26px sans-serif";
	                if (o.darkmode || !("darkmode" in o))
	                    _this.context.fillStyle = "#fff";
	                _this.context.fillText(text, _this.w / 2 - _this.context.measureText(text).width / 2, _this.h / 2 - 26 / 2);
	                _this.context.restore();
	            }
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
	        for (var entityName in this.saveObject[sceneId]) {
	            if ("init" in this.saveObject[sceneId][entityName]) {
	                this.saveObject[sceneId][entityName].init();
	                if (o.save || ("save" in o))
	                    this.saveObject[sceneId][entityName].init = function () { };
	            }
	            this.draw(entityName, sceneId);
	        }
	        var update = function () {
	            _this.context.clearRect(0, 0, _this.w, _this.h);
	            _this.update(sceneId);
	            if (_this.use === _this.scenes[sceneId].name)
	                requestAnimationFrame(update);
	            else if (sceneId !== -1)
	                _this.scene(o, _this.sceneId);
	        };
	        this.loop = requestAnimationFrame(update);
	    };
	    Game.prototype.draw = function (entityName, sceneId) {
	        var _this = this;
	        if (entityName in this.load) {
	            var o = this.load[entityName];
	            if (o instanceof HTMLImageElement) {
	                if ("sprit" in this.saveObject[sceneId][entityName])
	                    this.context.drawImage(o, (this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].sprit.x), (this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].sprit.y), this.saveObject[sceneId][entityName].entityWidth, this.saveObject[sceneId][entityName].entityHeight, this.saveObject[sceneId][entityName].x, this.saveObject[sceneId][entityName].y, this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale, this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale);
	                else
	                    this.context.drawImage(o, this.saveObject[sceneId][entityName].x, this.saveObject[sceneId][entityName].y, this.saveObject[sceneId][entityName].entityWidth * this.saveObject[sceneId][entityName].scale, this.saveObject[sceneId][entityName].entityHeight * this.saveObject[sceneId][entityName].scale);
	            }
	            else if (!(o instanceof HTMLAudioElement)) {
	                var text_1 = o.text;
	                if ("replaced" in this.saveObject[sceneId][entityName])
	                    tslib_es6.__spreadArrays([["", ""]], this.saveObject[sceneId][entityName].replaced).forEach(function (arr) {
	                        text_1 = text_1.replace.apply(text_1, arr).replace(/\*[a-z0-9]+/i, function (result) { return result.slice(1) in _this.saveObject[sceneId][entityName] ? _this.saveObject[sceneId][entityName][result.slice(1)] : result; });
	                    });
	                this.context.font = o.font;
	                this.context.fillText(text_1, this.saveObject[sceneId][entityName].x, this.saveObject[sceneId][entityName].y);
	            }
	        }
	    };
	    Game.prototype.update = function (sceneId) {
	        for (var entityName in this.saveObject[sceneId]) {
	            if (this.saveObject[sceneId][entityName] instanceof Entity.Image)
	                this.saveObject[sceneId][entityName].key = this.key;
	            if ("beforeRedraw" in this.saveObject[sceneId][entityName])
	                this.saveObject[sceneId][entityName].beforeRedraw();
	            if ("redraw" in this.saveObject[sceneId][entityName])
	                this.saveObject[sceneId][entityName].redraw();
	            this.draw(entityName, sceneId);
	            if ("afterRedraw" in this.saveObject[sceneId][entityName])
	                this.saveObject[sceneId][entityName].afterRedraw();
	        }
	    };
	    return Game;
	}());
	exports.Game = Game;
	//# sourceMappingURL=app.js.map
	});

	var app$1 = unwrapExports(app);
	var app_1 = app.ex;
	var app_2 = app.Loader;
	var app_3 = app.Entity;
	var app_4 = app.Camera;
	var app_5 = app.Game;

	exports.Camera = app_4;
	exports.Entity = app_3;
	exports.Game = app_5;
	exports.Loader = app_2;
	exports.default = app$1;
	exports.ex = app_1;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
