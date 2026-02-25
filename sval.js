!(function(sent$e, sent$t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = sent$t() : "function" == typeof define && define.amd ? define(sent$t) : (sent$e = "undefined" != typeof globalThis ? globalThis : sent$e || self).Sval = sent$t();
})(this, function() {
  "use strict";
  var ObjectFreeze$D = Object.freeze({
      __proto__: null,
      get ExpressionStatement() {
        return ExpressionStatement$Wt;
      },
      get BlockStatement() {
        return body$Gt;
      },
      get EmptyStatement() {
        return EmptyStatement$Ht;
      },
      get DebuggerStatement() {
        return DebuggerStatement$zt;
      },
      get ReturnStatement() {
        return ReturnStatement$Kt;
      },
      get BreakStatement() {
        return BreakStatement$Qt;
      },
      get ContinueStatement() {
        return ContinueStatement$Xt;
      },
      get LabeledStatement() {
        return LabeledStatement$Yt;
      },
      get WithStatement() {
        return body$Zt;
      },
      get IfStatement() {
        return IfStatement$Jt;
      },
      get SwitchStatement() {
        return SwitchStatement$$t;
      },
      get SwitchCase() {
        return SwitchCase$er;
      },
      get ThrowStatement() {
        return ThrowStatement$tr;
      },
      get TryStatement() {
        return TryStatement$rr;
      },
      get CatchClause() {
        return CatchClause$ir;
      },
      get WhileStatement() {
        return WhileStatement$nr;
      },
      get DoWhileStatement() {
        return DoWhileStatement$sr;
      },
      get ForStatement() {
        return ForStatement$ar;
      },
      get ForInStatement() {
        return ForInStatement$or;
      },
      get ForOfStatement() {
        return ForOfStatement$cr;
      }
    }),
    ObjectFreeze$O = Object.freeze({
      __proto__: null,
      get FunctionDeclaration() {
        return FunctionDeclaration$hr;
      },
      get VariableDeclaration() {
        return left$lr;
      },
      get VariableDeclarator() {
        return VariableDeclarator$ur;
      },
      get ClassDeclaration() {
        return ClassDeclaration$pr;
      },
      get ClassBody() {
        return ClassBody$dr;
      },
      get MethodDefinition() {
        return MethodDefinition$fr;
      },
      get PropertyDefinition() {
        return static$mr;
      },
      get StaticBlock() {
        return sent$yr;
      },
      get ImportDeclaration() {
        return ImportDeclaration$gr;
      },
      get ExportDefaultDeclaration() {
        return ExportDefaultDeclaration$vr;
      },
      get ExportNamedDeclaration() {
        return ExportNamedDeclaration$br;
      },
      get ExportAllDeclaration() {
        return ExportAllDeclaration$xr;
      }
    }),
    ObjectFreeze$M = Object.freeze({
      __proto__: null,
      get ExpressionStatement() {
        return ExpressionStatement$Or;
      },
      get BlockStatement() {
        return body$Mr;
      },
      get EmptyStatement() {
        return EmptyStatement$Fr;
      },
      get DebuggerStatement() {
        return DebuggerStatement$jr;
      },
      get ReturnStatement() {
        return ReturnStatement$Ur;
      },
      get BreakStatement() {
        return BreakStatement$qr;
      },
      get ContinueStatement() {
        return ContinueStatement$Wr;
      },
      get LabeledStatement() {
        return LabeledStatement$Gr;
      },
      get WithStatement() {
        return body$Hr;
      },
      get IfStatement() {
        return IfStatement$zr;
      },
      get SwitchStatement() {
        return SwitchStatement$Kr;
      },
      get SwitchCase() {
        return SwitchCase$Qr;
      },
      get ThrowStatement() {
        return ThrowStatement$Xr;
      },
      get TryStatement() {
        return TryStatement$Yr;
      },
      get CatchClause() {
        return CatchClause$Zr;
      },
      get WhileStatement() {
        return WhileStatement$Jr;
      },
      get DoWhileStatement() {
        return DoWhileStatement$$r;
      },
      get ForStatement() {
        return ForStatement$ei;
      },
      get ForInStatement() {
        return ForInStatement$ti;
      },
      get ForOfStatement() {
        return ForOfStatement$ri;
      }
    }),
    ObjectFreeze$F = Object.freeze({
      __proto__: null,
      get FunctionDeclaration() {
        return FunctionDeclaration$ii;
      },
      get VariableDeclaration() {
        return left$ni;
      },
      get VariableDeclarator() {
        return VariableDeclarator$si;
      },
      get ClassDeclaration() {
        return ClassDeclaration$ai;
      },
      get ClassBody() {
        return ClassBody$oi;
      },
      get MethodDefinition() {
        return MethodDefinition$ci;
      },
      get PropertyDefinition() {
        return static$hi;
      },
      get StaticBlock() {
        return superClass$li;
      },
      get ImportDeclaration() {
        return ImportDeclaration$ui;
      },
      get ExportDefaultDeclaration() {
        return ExportDefaultDeclaration$pi;
      },
      get ExportNamedDeclaration() {
        return ExportNamedDeclaration$di;
      },
      get ExportAllDeclaration() {
        return ExportAllDeclaration$fi;
      }
    });

  function sent$v(sent$i, sent$n) {
    var sent$s, onlyBlock$a, sent$o, sent$c = {
        label: 0,
        sent: function $sent() {
          if (1 & sent$o[0]) throw sent$o[1];
          return sent$o[1];
        },
        trys: [],
        ops: []
      },
      sent$e = {
        next: sent$t(0),
        throw: sent$t(1),
        return: sent$t(2)
      };
    return ("function" == typeof Symbol && (sent$e[Symbol.iterator] = function() {
      return this;
    }), sent$e);

    function sent$t(sent$r) {
      return function(sent$e) {
        var sent$t = [sent$r, sent$e];
        if (sent$s) throw new TypeError("Generator is already executing.");
        for (; sent$c;) try {
          if ((sent$s = 1, onlyBlock$a && (sent$o = 2 & sent$t[0] ? onlyBlock$a.return : sent$t[0] ? onlyBlock$a.throw || ((sent$o = onlyBlock$a.return) && sent$o.call(onlyBlock$a), 0) : onlyBlock$a.next) && !(sent$o = sent$o.call(onlyBlock$a, sent$t[1])).done)) return sent$o;
          switch ((onlyBlock$a = 0, (sent$t = sent$o ? [2 & sent$t[0], sent$o.value] : sent$t)[0])) {
            case 0:
            case 1:
              sent$o = sent$t;
              break;
            case 4:
              return (sent$c.label++, {
                value: sent$t[1],
                done: !1
              });
            case 5:
              (sent$c.label++, onlyBlock$a = sent$t[1], sent$t = [0]);
              continue;
            case 7:
              (sent$t = sent$c.ops.pop(), sent$c.trys.pop());
              continue;
            default:
              if (!(sent$o = 0 < (sent$o = sent$c.trys).length && sent$o[sent$o.length - 1]) && (6 === sent$t[0] || 2 === sent$t[0])) {
                sent$c = 0;
                continue;
              }
              if (3 === sent$t[0] && (!sent$o || sent$t[1] > sent$o[0] && sent$t[1] < sent$o[3])) sent$c.label = sent$t[1];
              else if (6 === sent$t[0] && sent$c.label < sent$o[1])(sent$c.label = sent$o[1], sent$o = sent$t);
              else {
                if (!(sent$o && sent$c.label < sent$o[2])) {
                  (sent$o[2] && sent$c.ops.pop(), sent$c.trys.pop());
                  continue;
                }
                (sent$c.label = sent$o[2], sent$c.ops.push(sent$t));
              }
          }
          sent$t = sent$n.call(sent$i, sent$c);
        } catch (sent$e) {
          (sent$t = [6, sent$e], onlyBlock$a = 0);
        } finally {
          sent$s = sent$o = 0;
        }
        if (5 & sent$t[0]) throw sent$t[1];
        return {
          value: sent$t[0] ? sent$t[1] : void 0,
          done: !0
        };
      };
    }
  }

  function sent$b(sent$e) {
    var sent$t = "function" == typeof Symbol && sent$e[Symbol.iterator],
      sent$r = 0;
    return sent$t ? sent$t.call(sent$e) : {
      next: function $next() {
        return {
          value: (sent$e = sent$e && sent$r >= sent$e.length ? void 0 : sent$e) && sent$e[sent$r++],
          done: !sent$e
        };
      }
    };
  }

  function apply$j() {
    for (var sent$e = [], sent$t = 0; sent$t < arguments.length; sent$t++) sent$e = sent$e.concat((function(sent$e, sent$t) {
      var sent$r = "function" == typeof Symbol && sent$e[Symbol.iterator];
      if (!sent$r) return sent$e;
      var sent$i, sent$n, sent$s = sent$r.call(sent$e),
        onlyBlock$a = [];
      try {
        for (;
          (void 0 === sent$t || 0 < sent$t--) && !(sent$i = sent$s.next()).done;) onlyBlock$a.push(sent$i.value);
      } catch (sent$e) {
        sent$n = {
          error: sent$e
        };
      } finally {
        try {
          sent$i && !sent$i.done && (sent$r = sent$s.return) && sent$r.call(sent$s);
        } finally {
          if (sent$n) throw sent$n.error;
        }
      }
      return onlyBlock$a;
    })(arguments[sent$t]));
    return sent$e;
  }
  var ObjectFreeze$U = Object.freeze,
    ObjectGetOwnPropertyDescriptor$q$f = Object.defineProperty,
    ObjectGetOwnPropertyDescriptor$q = Object.getOwnPropertyDescriptor,
    ObjectPrototypeHasOwnProperty$W = Object.prototype.hasOwnProperty;

  function imported$G(sent$e, sent$t) {
    return ObjectPrototypeHasOwnProperty$W.call(sent$e, sent$t);
  }
  var ObjectGetOwnPropertyNames$H = Object.getOwnPropertyNames,
    ObjectSetPrototypeOf$z = Object.setPrototypeOf;
  var ObjectGetPrototypeOf$K = Object.getPrototypeOf;

  function getPrototypeOf$Q(sent$e) {
    return ObjectGetPrototypeOf$K ? ObjectGetPrototypeOf$K(sent$e) : sent$e.__proto__;
  }
  var ObjectGetOwnPropertyDescriptor$X = Object.getOwnPropertyDescriptor;

  function writable$Y(sent$e, sent$t, sent$r) {
    for (; sent$t;) {
      var sent$i = ObjectGetOwnPropertyDescriptor$X(sent$t, sent$r),
        sent$i = void 0 !== sent$i && void 0 === sent$i.writable && "function" == typeof sent$i[sent$e] && sent$i[sent$e];
      if (sent$i) return sent$i;
      sent$t = getPrototypeOf$Q(sent$t);
    }
  }

  function find$Z(sent$e, sent$t) {
    return writable$Y("get", sent$e, sent$t);
  }

  function property$J(sent$e, sent$t) {
    return writable$Y("set", sent$e, sent$t);
  }
  var ObjectCreate$$ = Object.create;

  function construct$ee(sent$e, sent$t) {
    var sent$r, sent$i;
    (sent$r = sent$e, sent$i = sent$t, ObjectSetPrototypeOf$z ? ObjectSetPrototypeOf$z(sent$r, sent$i) : sent$r.__proto__ = sent$i, sent$e.prototype = ObjectCreate$$(sent$t.prototype, {
      constructor: {
        value: sent$e,
        writable: !0
      }
    }));
  }

  function ReferenceError$te(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = []);
    var sent$i = !1;
    try {
      sent$i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (sent$e) {}
    return sent$i ? Reflect.construct(sent$t, sent$r, getPrototypeOf$Q(sent$e).constructor) : sent$t.apply(sent$e, sent$r);
  }

  function window$global$re(sent$e) {
    if (!sent$e.Object) throw 0;
    ObjectCreate$$$ie = ObjectGetOwnPropertyNames$H(sent$i = sent$e).filter(function(sent$e) {
      return -1 === ["webkitStorageInfo", "GLOBAL", "root"].indexOf(sent$e);
    });
  }
  var find$m = Object.assign || (function(sent$e) {
      for (var sent$t = 1; sent$t < arguments.length; ++sent$t) {
        var sent$r, sent$i = arguments[sent$t];
        for (sent$r in sent$i) imported$G(sent$i, sent$r) && (sent$e[sent$r] = sent$i[sent$r]);
      }
      return sent$e;
    }),
    ObjectCreate$$$ie = [],
    sent$i = ObjectCreate$$(null);
  try {
    window$global$re(window);
  } catch (sent$e) {
    try {
      window$global$re(self);
    } catch (sent$e) {
      try {
        window$global$re(global);
      } catch (sent$e) {
        try {
          window$global$re(globalThis);
        } catch (sent$e) {
          try {
            sent$i.Object = Object;
          } catch (sent$e) {}
          try {
            sent$i.Function = Function;
          } catch (sent$e) {}
          try {
            sent$i.Array = Array;
          } catch (sent$e) {}
          try {
            sent$i.Number = Number;
          } catch (sent$e) {}
          try {
            sent$i.parseFloat = parseFloat;
          } catch (sent$e) {}
          try {
            sent$i.parseInt = parseInt;
          } catch (sent$e) {}
          try {
            sent$i.Infinity = 1 / 0;
          } catch (sent$e) {}
          try {
            sent$i.NaN = Infinity$NaN;
          } catch (sent$e) {}
          try {
            sent$i.undefined = void 0;
          } catch (sent$e) {}
          try {
            sent$i.Boolean = Boolean;
          } catch (sent$e) {}
          try {
            sent$i.String = String;
          } catch (sent$e) {}
          try {
            sent$i.Symbol = Symbol;
          } catch (sent$e) {}
          try {
            sent$i.Date = Date;
          } catch (sent$e) {}
          try {
            sent$i.Promise = Promise;
          } catch (sent$e) {}
          try {
            sent$i.RegExp = RegExp;
          } catch (sent$e) {}
          try {
            sent$i.Error = Error;
          } catch (sent$e) {}
          try {
            sent$i.EvalError = EvalError;
          } catch (sent$e) {}
          try {
            sent$i.RangeError = RangeError;
          } catch (sent$e) {}
          try {
            sent$i.ReferenceError = ReferenceError;
          } catch (sent$e) {}
          try {
            sent$i.SyntaxError = SyntaxError;
          } catch (sent$e) {}
          try {
            sent$i.TypeError = TypeError;
          } catch (sent$e) {}
          try {
            sent$i.URIError = URIError;
          } catch (sent$e) {}
          try {
            sent$i.JSON = JSON;
          } catch (sent$e) {}
          try {
            sent$i.Math = Math;
          } catch (sent$e) {}
          try {
            sent$i.console = console;
          } catch (sent$e) {}
          try {
            sent$i.Intl = Intl;
          } catch (sent$e) {}
          try {
            sent$i.ArrayBuffer = ArrayBuffer;
          } catch (sent$e) {}
          try {
            sent$i.Uint8Array = Uint8Array;
          } catch (sent$e) {}
          try {
            sent$i.Int8Array = Int8Array;
          } catch (sent$e) {}
          try {
            sent$i.Uint16Array = Uint16Array;
          } catch (sent$e) {}
          try {
            sent$i.Int16Array = Int16Array;
          } catch (sent$e) {}
          try {
            sent$i.Uint32Array = Uint32Array;
          } catch (sent$e) {}
          try {
            sent$i.Int32Array = Int32Array;
          } catch (sent$e) {}
          try {
            sent$i.Float32Array = Float32Array;
          } catch (sent$e) {}
          try {
            sent$i.Float64Array = Float64Array;
          } catch (sent$e) {}
          try {
            sent$i.Uint8ClampedArray = Uint8ClampedArray;
          } catch (sent$e) {}
          try {
            sent$i.DataView = DataView;
          } catch (sent$e) {}
          try {
            sent$i.Map = DataView$Map;
          } catch (sent$e) {}
          try {
            sent$i.Set = DataView$Set;
          } catch (sent$e) {}
          try {
            sent$i.WeakMap = WeakMap;
          } catch (sent$e) {}
          try {
            sent$i.WeakSet = WeakSet;
          } catch (sent$e) {}
          try {
            sent$i.Proxy = Proxy;
          } catch (sent$e) {}
          try {
            sent$i.Reflect = Reflect;
          } catch (sent$e) {}
          try {
            sent$i.BigInt = BigInt;
          } catch (sent$e) {}
          try {
            sent$i.decodeURI = decodeURI;
          } catch (sent$e) {}
          try {
            sent$i.decodeURIComponent = decodeURIComponent;
          } catch (sent$e) {}
          try {
            sent$i.encodeURI = encodeURI;
          } catch (sent$e) {}
          try {
            sent$i.encodeURIComponent = encodeURIComponent;
          } catch (sent$e) {}
          try {
            sent$i.escape = escape;
          } catch (sent$e) {}
          try {
            sent$i.unescape = unescape;
          } catch (sent$e) {}
          try {
            sent$i.eval = eval;
          } catch (sent$e) {}
          try {
            sent$i.isFinite = isFinite;
          } catch (sent$e) {}
          try {
            sent$i.isNaN = isNaN;
          } catch (sent$e) {}
          try {
            sent$i.SharedArrayBuffer = SharedArrayBuffer;
          } catch (sent$e) {}
          try {
            sent$i.Atomics = Atomics;
          } catch (sent$e) {}
          try {
            sent$i.WebAssembly = WebAssembly;
          } catch (sent$e) {}
          try {
            sent$i.clearInterval = clearInterval;
          } catch (sent$e) {}
          try {
            sent$i.clearTimeout = clearTimeout;
          } catch (sent$e) {}
          try {
            sent$i.setInterval = setInterval;
          } catch (sent$e) {}
          try {
            sent$i.setTimeout = setTimeout;
          } catch (sent$e) {}
          try {
            sent$i.crypto = crypto;
          } catch (sent$e) {}
          try {
            sent$i.URL = crypto$URL;
          } catch (sent$e) {}
          ObjectCreate$$$ie = ObjectGetOwnPropertyNames$H(sent$i);
        }
      }
    }
  }
  sent$i.Symbol && (sent$i.Symbol.iterator || (sent$i.Symbol.iterator = LABEL$p("iterator")), sent$i.Symbol.asyncIterator || (sent$i.Symbol.asyncIterator = LABEL$p("asynciterator")));
  for (var ObjectCreate$$$ne = ObjectCreate$$({}), ObjectCreate$$$se = 0; ObjectCreate$$$se < ObjectCreate$$$ie.length; ObjectCreate$$$se++) {
    var ObjectCreate$$$ae = ObjectCreate$$$ie[ObjectCreate$$$se];
    try {
      ObjectCreate$$$ne[ObjectCreate$$$ae] = sent$i[ObjectCreate$$$ae];
    } catch (sent$e) {}
  }
  var apply$oe = LABEL$p("window");

  function LABEL$p(sent$e) {
    return sent$e + Math.random().toString(36).substring(2);
  }
  var fromCharCode$ce = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
    fromCharCode$he = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
    sent$e = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
    reservedWordsStrictBind$le = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      strict: "implements interface let package private protected public static yield",
      strictBind: "eval arguments"
    },
    sent$t = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
    strictBind$ue = {
      5: sent$t,
      "5module": sent$t + " export import",
      6: sent$t + " const class extends export import super"
    },
    strictBind$pe = /^in(stanceof)?$/,
    strictBind$de = new RegExp("[" + sent$e + "]"),
    fromCharCode$fe = new RegExp("[" + sent$e + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");

  function fromCharCode$me(sent$e, sent$t) {
    for (var sent$r = 65536, sent$i = 0; sent$i < sent$t.length; sent$i += 2) {
      if (sent$e < (sent$r += sent$t[sent$i])) return !1;
      if (sent$e <= (sent$r += sent$t[sent$i + 1])) return !0;
    }
    return !1;
  }

  function onlyBlock$a(sent$e, sent$t) {
    return sent$e < 65 ? 36 === sent$e : sent$e < 91 || (sent$e < 97 ? 95 === sent$e : sent$e < 123 || (sent$e <= 65535 ? 170 <= sent$e && strictBind$de.test(String.fromCharCode(sent$e)) : !1 !== sent$t && fromCharCode$me(sent$e, fromCharCode$he)));
  }

  function fullCharCodeAtPos$ye(sent$e, sent$t) {
    return sent$e < 48 ? 36 === sent$e : sent$e < 58 || !(sent$e < 65) && (sent$e < 91 || (sent$e < 97 ? 95 === sent$e : sent$e < 123 || (sent$e <= 65535 ? 170 <= sent$e && fromCharCode$fe.test(String.fromCharCode(sent$e)) : !1 !== sent$t && (fromCharCode$me(sent$e, fromCharCode$he) || fromCharCode$me(sent$e, fromCharCode$ce)))));
  }

  function sent$r(sent$e, sent$t) {
    (void 0 === sent$t && (sent$t = {}), this.label = sent$e, this.keyword = sent$t.keyword, this.beforeExpr = !!sent$t.beforeExpr, this.startsExpr = !!sent$t.startsExpr, this.isLoop = !!sent$t.isLoop, this.isAssign = !!sent$t.isAssign, this.prefix = !!sent$t.prefix, this.postfix = !!sent$t.postfix, this.binop = sent$t.binop || null, this.updateContext = null);
  }

  function sent$n(sent$e, sent$t) {
    return new sent$r(sent$e, {
      beforeExpr: !0,
      binop: sent$t
    });
  }
  var sent$t = {
      beforeExpr: !0
    },
    sent$e = {
      startsExpr: !0
    },
    keywordTypes$ge = {};

  function sent$s(sent$e, sent$t) {
    return ((sent$t = void 0 === sent$t ? {} : sent$t).keyword = sent$e, keywordTypes$ge[sent$e] = new sent$r(sent$e, sent$t));
  }
  var expect$g = {
      num: new sent$r("num", sent$e),
      regexp: new sent$r("regexp", sent$e),
      string: new sent$r("string", sent$e),
      name: new sent$r("name", sent$e),
      privateId: new sent$r("privateId", sent$e),
      eof: new sent$r("eof"),
      bracketL: new sent$r("[", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      bracketR: new sent$r("]"),
      braceL: new sent$r("{", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      braceR: new sent$r("}"),
      parenL: new sent$r("(", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      parenR: new sent$r(")"),
      comma: new sent$r(",", sent$t),
      semi: new sent$r(";", sent$t),
      colon: new sent$r(":", sent$t),
      dot: new sent$r("."),
      question: new sent$r("?", sent$t),
      questionDot: new sent$r("?."),
      arrow: new sent$r("=>", sent$t),
      template: new sent$r("template"),
      invalidTemplate: new sent$r("invalidTemplate"),
      ellipsis: new sent$r("...", sent$t),
      backQuote: new sent$r("`", sent$e),
      dollarBraceL: new sent$r("${", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      eq: new sent$r("=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      assign: new sent$r("_=", {
        beforeExpr: !0,
        isAssign: !0
      }),
      incDec: new sent$r("++/--", {
        prefix: !0,
        postfix: !0,
        startsExpr: !0
      }),
      prefix: new sent$r("!/~", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      logicalOR: sent$n("||", 1),
      logicalAND: sent$n("&&", 2),
      bitwiseOR: sent$n("|", 3),
      bitwiseXOR: sent$n("^", 4),
      bitwiseAND: sent$n("&", 5),
      equality: sent$n("==/!=/===/!==", 6),
      relational: sent$n("</>/<=/>=", 7),
      bitShift: sent$n("<</>>/>>>", 8),
      plusMin: new sent$r("+/-", {
        beforeExpr: !0,
        binop: 9,
        prefix: !0,
        startsExpr: !0
      }),
      modulo: sent$n("%", 10),
      star: sent$n("*", 10),
      slash: sent$n("/", 10),
      starstar: new sent$r("**", {
        beforeExpr: !0
      }),
      coalesce: sent$n("??", 1),
      _break: sent$s("break"),
      _case: sent$s("case", sent$t),
      _catch: sent$s("catch"),
      _continue: sent$s("continue"),
      _debugger: sent$s("debugger"),
      _default: sent$s("default", sent$t),
      _do: sent$s("do", {
        isLoop: !0,
        beforeExpr: !0
      }),
      _else: sent$s("else", sent$t),
      _finally: sent$s("finally"),
      _for: sent$s("for", {
        isLoop: !0
      }),
      _function: sent$s("function", sent$e),
      _if: sent$s("if"),
      _return: sent$s("return", sent$t),
      _switch: sent$s("switch"),
      _throw: sent$s("throw", sent$t),
      _try: sent$s("try"),
      _var: sent$s("var"),
      _const: sent$s("const"),
      _while: sent$s("while", {
        isLoop: !0
      }),
      _with: sent$s("with"),
      _new: sent$s("new", {
        beforeExpr: !0,
        startsExpr: !0
      }),
      _this: sent$s("this", sent$e),
      _super: sent$s("super", sent$e),
      _class: sent$s("class", sent$e),
      _extends: sent$s("extends", sent$t),
      _export: sent$s("export"),
      _import: sent$s("import", sent$e),
      _null: sent$s("null", sent$e),
      _true: sent$s("true", sent$e),
      _false: sent$s("false", sent$e),
      _in: sent$s("in", {
        beforeExpr: !0,
        binop: 7
      }),
      _instanceof: sent$s("instanceof", {
        beforeExpr: !0,
        binop: 7
      }),
      _typeof: sent$s("typeof", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _void: sent$s("void", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      }),
      _delete: sent$s("delete", {
        beforeExpr: !0,
        prefix: !0,
        startsExpr: !0
      })
    },
    sent$o = /\r\n?|\n|\u2028|\u2029/,
    sent$t = new RegExp(sent$o.source, "g");

  function readEscapedChar$ve(sent$e) {
    return 10 === sent$e || 13 === sent$e || 8232 === sent$e || 8233 === sent$e;
  }

  function sourceFile$be(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = sent$e.length);
    for (var sent$i = sent$t; sent$i < sent$r; sent$i++) {
      var sent$n = sent$e.charCodeAt(sent$i);
      if (readEscapedChar$ve(sent$n)) return sent$i < sent$r - 1 && 13 === sent$n && 10 === sent$e.charCodeAt(sent$i + 1) ? sent$i + 2 : sent$i + 1;
    }
    return -1;
  }
  var nonASCIIwhitespace$xe = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    sent$c = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    sent$e = Object.prototype,
    Object$hasOwn$we = sent$e.hasOwnProperty,
    isArray$Se = sent$e.toString,
    ObjectHasOwn$ke = Object.hasOwn || (function(sent$e, sent$t) {
      return Object$hasOwn$we.call(sent$e, sent$t);
    }),
    ArrayIsArray$_e = Array.isArray || (function(sent$e) {
      return "[object Array]" === isArray$Se.call(sent$e);
    }),
    ObjectCreate$Ee = Object.create(null);

  function reservedWordsStrictBind$Ce(sent$e) {
    return ObjectCreate$Ee[sent$e] || (ObjectCreate$Ee[sent$e] = new RegExp("^(?:" + sent$e.replace(/ /g, "|") + ")$"));
  }

  function sent$h(sent$e) {
    return sent$e <= 65535 ? String.fromCharCode(sent$e) : (sent$e -= 65536, String.fromCharCode(55296 + (sent$e >> 10), 56320 + (1023 & sent$e)));
  }

  function allowReturnOutsideFunction$Ie(sent$e, sent$t) {
    (this.line = sent$e, this.column = sent$t);
  }

  function locations$Ae(sent$e, sent$t, sent$r) {
    (this.start = sent$t, this.end = sent$r, null !== sent$e.sourceFile && (this.source = sent$e.sourceFile));
  }
  var parseLiteral$Pe = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;

  function getLineInfo$Le(sent$e, sent$t) {
    for (var sent$r = 1, sent$i = 0;;) {
      var sent$n = sourceFile$be(sent$e, sent$i, sent$t);
      if (sent$n < 0) return new allowReturnOutsideFunction$Ie(sent$r, sent$t - sent$i);
      (++sent$r, sent$i = sent$n);
    }
  }
  var preserveParens$Te = {
      ecmaVersion: null,
      sourceType: "script",
      onInsertedSemicolon: null,
      onTrailingComma: null,
      allowReserved: null,
      allowReturnOutsideFunction: !(allowReturnOutsideFunction$Ie.prototype.offset = function $offset(sent$e) {
        return new allowReturnOutsideFunction$Ie(this.line, this.column + sent$e);
      }),
      allowImportExportEverywhere: !1,
      allowAwaitOutsideFunction: null,
      allowSuperOutsideMethod: null,
      allowHashBang: !1,
      checkPrivateFields: !0,
      locations: !1,
      onToken: null,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
      preserveParens: !1
    },
    preserveParens$Ve = !1;

  function preserveParens$Ne(sent$e) {
    var sent$t, sent$r, onlyBlock$a, sent$o, sent$i = {};
    for (sent$t in preserveParens$Te) sent$i[sent$t] = (sent$e && ObjectHasOwn$ke(sent$e, sent$t) ? sent$e : preserveParens$Te)[sent$t];
    return ("latest" === sent$i.ecmaVersion ? sent$i.ecmaVersion = 1e8 : null == sent$i.ecmaVersion ? (!preserveParens$Ve && "object" == typeof console && console.warn && (preserveParens$Ve = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), sent$i.ecmaVersion = 11) : 2015 <= sent$i.ecmaVersion && (sent$i.ecmaVersion -= 2009), null == sent$i.allowReserved && (sent$i.allowReserved = sent$i.ecmaVersion < 5), sent$e && null != sent$e.allowHashBang || (sent$i.allowHashBang = 14 <= sent$i.ecmaVersion), ArrayIsArray$_e(sent$i.onToken) && (sent$r = sent$i.onToken, sent$i.onToken = function $onToken(sent$e) {
      return sent$r.push(sent$e);
    }), ArrayIsArray$_e(sent$i.onComment) && (sent$i.onComment = (sent$o = (onlyBlock$a = sent$i).onComment, function(sent$e, sent$t, sent$r, sent$i, sent$n, sent$s) {
      sent$e = {
        type: sent$e ? "Block" : "Line",
        value: sent$t,
        start: sent$r,
        end: sent$i
      };
      (onlyBlock$a.locations && (sent$e.loc = new locations$Ae(this, sent$n, sent$s)), onlyBlock$a.ranges && (sent$e.range = [sent$r, sent$i]), sent$o.push(sent$e));
    })), sent$i);
  }

  function enterScope$Be(sent$e, sent$t) {
    return 2 | (sent$e ? 4 : 0) | (sent$t ? 8 : 0);
  }

  function sent$l(sent$e, sent$t, sent$r) {
    (this.options = sent$e = preserveParens$Ne(sent$e), this.sourceFile = sent$e.sourceFile, this.keywords = reservedWordsStrictBind$Ce(strictBind$ue[6 <= sent$e.ecmaVersion ? 6 : "module" === sent$e.sourceType ? "5module" : 5]));
    var sent$i = "",
      sent$i = (!0 !== sent$e.allowReserved && (sent$i = reservedWordsStrictBind$le[6 <= sent$e.ecmaVersion ? 6 : 5 === sent$e.ecmaVersion ? 5 : 3], "module" === sent$e.sourceType) && (sent$i += " await"), this.reservedWords = reservedWordsStrictBind$Ce(sent$i), (sent$i ? sent$i + " " : "") + reservedWordsStrictBind$le.strict);
    (this.reservedWordsStrict = reservedWordsStrictBind$Ce(sent$i), this.reservedWordsStrictBind = reservedWordsStrictBind$Ce(sent$i + " " + reservedWordsStrictBind$le.strictBind), this.input = String(sent$t), this.containsEsc = !1, sent$r ? (this.pos = sent$r, this.lineStart = this.input.lastIndexOf("\n", sent$r - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(sent$o).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = expect$g.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === sent$e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && sent$e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = []);
  }

  function privateNameStack$Re() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
  }
  var sent$e = {
      inFunction: {
        configurable: !0
      },
      inGenerator: {
        configurable: !0
      },
      inAsync: {
        configurable: !0
      },
      canAwait: {
        configurable: !0
      },
      allowSuper: {
        configurable: !0
      },
      allowDirectSuper: {
        configurable: !0
      },
      treatFunctionsAsVar: {
        configurable: !0
      },
      allowNewDotTarget: {
        configurable: !0
      },
      inClassStaticBlock: {
        configurable: !0
      }
    },
    sent$e = (sent$l.prototype.parse = function $parse() {
      var sent$e = this.options.program || this.startNode();
      return (this.nextToken(), this.parseTopLevel(sent$e));
    }, sent$e.inFunction.get = function $get() {
      return 0 < (2 & this.currentVarScope().flags);
    }, sent$e.inGenerator.get = function $get() {
      return 0 < (8 & this.currentVarScope().flags) && !this.currentVarScope().inClassFieldInit;
    }, sent$e.inAsync.get = function $get() {
      return 0 < (4 & this.currentVarScope().flags) && !this.currentVarScope().inClassFieldInit;
    }, sent$e.canAwait.get = function $get() {
      for (var sent$e = this.scopeStack.length - 1; 0 <= sent$e; sent$e--) {
        var sent$t = this.scopeStack[sent$e];
        if (sent$t.inClassFieldInit || 256 & sent$t.flags) return !1;
        if (2 & sent$t.flags) return 0 < (4 & sent$t.flags);
      }
      return this.inModule && 13 <= this.options.ecmaVersion || this.options.allowAwaitOutsideFunction;
    }, sent$e.allowSuper.get = function $get() {
      var sent$e = this.currentThisScope(),
        sent$t = sent$e.flags,
        sent$e = sent$e.inClassFieldInit;
      return 0 < (64 & sent$t) || sent$e || this.options.allowSuperOutsideMethod;
    }, sent$e.allowDirectSuper.get = function $get() {
      return 0 < (128 & this.currentThisScope().flags);
    }, sent$e.treatFunctionsAsVar.get = function $get() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }, sent$e.allowNewDotTarget.get = function $get() {
      var sent$e = this.currentThisScope(),
        sent$t = sent$e.flags,
        sent$e = sent$e.inClassFieldInit;
      return 0 < (258 & sent$t) || sent$e;
    }, sent$e.inClassStaticBlock.get = function $get() {
      return 0 < (256 & this.currentVarScope().flags);
    }, sent$l.extend = function $extend() {
      for (var sent$e = [], sent$t = arguments.length; sent$t--;) sent$e[sent$t] = arguments[sent$t];
      for (var sent$r = this, sent$i = 0; sent$i < sent$e.length; sent$i++) sent$r = sent$e[sent$i](sent$r);
      return sent$r;
    }, sent$l.parse = function $parse(sent$e, sent$t) {
      return new this(sent$t, sent$e).parse();
    }, sent$l.parseExpressionAt = function $parseExpressionAt(sent$e, sent$t, sent$r) {
      sent$r = new this(sent$r, sent$e, sent$t);
      return (sent$r.nextToken(), sent$r.parseExpression());
    }, sent$l.tokenizer = function $tokenizer(sent$e, sent$t) {
      return new this(sent$t, sent$e);
    }, Object.defineProperties(sent$l.prototype, sent$e), sent$l.prototype),
    defineProperties$De = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/,
    sent$e = (sent$e.strictDirective = function $strictDirective(sent$e) {
      if (this.options.ecmaVersion < 5) return !1;
      for (;;) {
        (sent$c.lastIndex = sent$e, sent$e += sent$c.exec(this.input)[0].length);
        var sent$t, sent$r, sent$i, sent$n = defineProperties$De.exec(this.input.slice(sent$e));
        if (!sent$n) return !1;
        if ("use strict" === (sent$n[1] || sent$n[2])) return (sent$c.lastIndex = sent$e + sent$n[0].length, sent$r = (sent$t = sent$c.exec(this.input)).index + sent$t[0].length, ";" === (sent$i = this.input.charAt(sent$r)) || "}" === sent$i || sent$o.test(sent$t[0]) && !((/[(`.[+\-/*%<>=,?^&]/).test(sent$i) || "!" === sent$i && "=" === this.input.charAt(sent$r + 1)));
        (sent$e += sent$n[0].length, sent$c.lastIndex = sent$e, sent$e += sent$c.exec(this.input)[0].length, ";" === this.input[sent$e] && sent$e++);
      }
    }, sent$e.eat = function $eat(sent$e) {
      return this.type === sent$e && (this.next(), !0);
    }, sent$e.isContextual = function $isContextual(sent$e) {
      return this.type === expect$g.name && this.value === sent$e && !this.containsEsc;
    }, sent$e.eatContextual = function $eatContextual(sent$e) {
      return !!this.isContextual(sent$e) && (this.next(), !0);
    }, sent$e.expectContextual = function $expectContextual(sent$e) {
      this.eatContextual(sent$e) || this.unexpected();
    }, sent$e.canInsertSemicolon = function $canInsertSemicolon() {
      return this.type === expect$g.eof || this.type === expect$g.braceR || sent$o.test(this.input.slice(this.lastTokEnd, this.start));
    }, sent$e.insertSemicolon = function $insertSemicolon() {
      if (this.canInsertSemicolon()) return (this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0);
    }, sent$e.semicolon = function $semicolon() {
      this.eat(expect$g.semi) || this.insertSemicolon() || this.unexpected();
    }, sent$e.afterTrailingComma = function $afterTrailingComma(sent$e, sent$t) {
      if (this.type === sent$e) return (this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), sent$t || this.next(), !0);
    }, sent$e.expect = function $expect(sent$e) {
      this.eat(sent$e) || this.unexpected();
    }, sent$e.unexpected = function $unexpected(sent$e) {
      this.raise(null != sent$e ? sent$e : this.start, "Unexpected token");
    }, sent$e.checkPatternErrors = function $checkPatternErrors(sent$e, sent$t) {
      sent$e && (-1 < sent$e.trailingComma && this.raiseRecoverable(sent$e.trailingComma, "Comma is not permitted after the rest element"), -1 < (sent$e = sent$t ? sent$e.parenthesizedAssign : sent$e.parenthesizedBind)) && this.raiseRecoverable(sent$e, sent$t ? "Assigning to rvalue" : "Parenthesized pattern");
    }, sent$e.checkExpressionErrors = function $checkExpressionErrors(sent$e, sent$t) {
      var sent$r;
      return !!sent$e && (sent$r = sent$e.shorthandAssign, sent$e = sent$e.doubleProto, sent$t ? (0 <= sent$r && this.raise(sent$r, "Shorthand property assignments are valid only in destructuring patterns"), void(0 <= sent$e && this.raiseRecoverable(sent$e, "Redefinition of __proto__ property"))) : 0 <= sent$r || 0 <= sent$e);
    }, sent$e.checkYieldAwaitInDefaultParams = function $checkYieldAwaitInDefaultParams() {
      (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value"));
    }, sent$e.isSimpleAssignTarget = function $isSimpleAssignTarget(sent$e) {
      return "ParenthesizedExpression" === sent$e.type ? this.isSimpleAssignTarget(sent$e.expression) : "Identifier" === sent$e.type || "MemberExpression" === sent$e.type;
    }, sent$l.prototype),
    push$Oe = (sent$e.parseTopLevel = function $parseTopLevel(sent$e) {
      var sent$t = Object.create(null);
      for (sent$e.body || (sent$e.body = []); this.type !== expect$g.eof;) {
        var sent$r = this.parseStatement(null, !0, sent$t);
        sent$e.body.push(sent$r);
      }
      if (this.inModule)
        for (var sent$i = 0, sent$n = Object.keys(this.undefinedExports); sent$i < sent$n.length; sent$i += 1) {
          var sent$s = sent$n[sent$i];
          this.raiseRecoverable(this.undefinedExports[sent$s].start, "Export '" + sent$s + "' is not defined");
        }
      return (this.adaptDirectivePrologue(sent$e.body), this.next(), sent$e.sourceType = this.options.sourceType, this.finishNode(sent$e, "Program"));
    }, {
      kind: "loop"
    }),
    kind$push$Me = {
      kind: "switch"
    },
    specifiers$Fe = (sent$e.isLet = function $isLet(sent$e) {
      if (!(this.options.ecmaVersion < 6) && this.isContextual("let")) {
        sent$c.lastIndex = this.pos;
        var sent$t = sent$c.exec(this.input),
          sent$t = this.pos + sent$t[0].length,
          sent$r = this.input.charCodeAt(sent$t);
        if (91 === sent$r || 92 === sent$r) return !0;
        if (!sent$e) {
          if (123 === sent$r || 55295 < sent$r && sent$r < 56320) return !0;
          if (onlyBlock$a(sent$r, !0)) {
            for (var sent$i = sent$t + 1; fullCharCodeAtPos$ye(sent$r = this.input.charCodeAt(sent$i), !0);) ++sent$i;
            if (92 === sent$r || 55295 < sent$r && sent$r < 56320) return !0;
            sent$e = this.input.slice(sent$t, sent$i);
            if (!strictBind$pe.test(sent$e)) return !0;
          }
        }
      }
      return !1;
    }, sent$e.isAsyncFunction = function $isAsyncFunction() {
      if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
      sent$c.lastIndex = this.pos;
      var sent$e = sent$c.exec(this.input),
        sent$e = this.pos + sent$e[0].length;
      return !(sent$o.test(this.input.slice(this.pos, sent$e)) || "function" !== this.input.slice(sent$e, sent$e + 8) || sent$e + 8 !== this.input.length && (fullCharCodeAtPos$ye(sent$e = this.input.charCodeAt(sent$e + 8)) || 55295 < sent$e && sent$e < 56320));
    }, sent$e.parseStatement = function $parseStatement(sent$e, sent$t, sent$r) {
      var sent$i, sent$n, sent$s = this.type,
        onlyBlock$a = this.startNode();
      switch ((this.isLet(sent$e) && (sent$s = expect$g._var, sent$i = "let"), sent$s)) {
        case expect$g._break:
        case expect$g._continue:
          return this.parseBreakContinueStatement(onlyBlock$a, sent$s.keyword);
        case expect$g._debugger:
          return this.parseDebuggerStatement(onlyBlock$a);
        case expect$g._do:
          return this.parseDoStatement(onlyBlock$a);
        case expect$g._for:
          return this.parseForStatement(onlyBlock$a);
        case expect$g._function:
          return (sent$e && (this.strict || "if" !== sent$e && "label" !== sent$e) && 6 <= this.options.ecmaVersion && this.unexpected(), this.parseFunctionStatement(onlyBlock$a, !1, !sent$e));
        case expect$g._class:
          return (sent$e && this.unexpected(), this.parseClass(onlyBlock$a, !0));
        case expect$g._if:
          return this.parseIfStatement(onlyBlock$a);
        case expect$g._return:
          return this.parseReturnStatement(onlyBlock$a);
        case expect$g._switch:
          return this.parseSwitchStatement(onlyBlock$a);
        case expect$g._throw:
          return this.parseThrowStatement(onlyBlock$a);
        case expect$g._try:
          return this.parseTryStatement(onlyBlock$a);
        case expect$g._const:
        case expect$g._var:
          return (sent$i = sent$i || this.value, sent$e && "var" !== sent$i && this.unexpected(), this.parseVarStatement(onlyBlock$a, sent$i));
        case expect$g._while:
          return this.parseWhileStatement(onlyBlock$a);
        case expect$g._with:
          return this.parseWithStatement(onlyBlock$a);
        case expect$g.braceL:
          return this.parseBlock(!0, onlyBlock$a);
        case expect$g.semi:
          return this.parseEmptyStatement(onlyBlock$a);
        case expect$g._export:
        case expect$g._import:
          if (10 < this.options.ecmaVersion && sent$s === expect$g._import) {
            sent$c.lastIndex = this.pos;
            var sent$o = sent$c.exec(this.input),
              sent$o = this.pos + sent$o[0].length,
              sent$o = this.input.charCodeAt(sent$o);
            if (40 === sent$o || 46 === sent$o) return this.parseExpressionStatement(onlyBlock$a, this.parseExpression());
          }
          return (this.options.allowImportExportEverywhere || (sent$t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule) || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"), sent$s === expect$g._import ? this.parseImport(onlyBlock$a) : this.parseExport(onlyBlock$a, sent$r));
        default:
          return this.isAsyncFunction() ? (sent$e && this.unexpected(), this.next(), this.parseFunctionStatement(onlyBlock$a, !0, !sent$e)) : (sent$o = this.value, sent$n = this.parseExpression(), sent$s === expect$g.name && "Identifier" === sent$n.type && this.eat(expect$g.colon) ? this.parseLabeledStatement(onlyBlock$a, sent$o, sent$n, sent$e) : this.parseExpressionStatement(onlyBlock$a, sent$n));
      }
    }, sent$e.parseBreakContinueStatement = function $parseBreakContinueStatement(sent$e, sent$t) {
      for (var sent$r = "break" === sent$t, sent$i = (this.next(), this.eat(expect$g.semi) || this.insertSemicolon() ? sent$e.label = null : this.type !== expect$g.name ? this.unexpected() : (sent$e.label = this.parseIdent(), this.semicolon()), 0); sent$i < this.labels.length; ++sent$i) {
        var sent$n = this.labels[sent$i];
        if (null == sent$e.label || sent$n.name === sent$e.label.name) {
          if (null != sent$n.kind && (sent$r || "loop" === sent$n.kind)) break;
          if (sent$e.label && sent$r) break;
        }
      }
      return (sent$i === this.labels.length && this.raise(sent$e.start, "Unsyntactic " + sent$t), this.finishNode(sent$e, sent$r ? "BreakStatement" : "ContinueStatement"));
    }, sent$e.parseDebuggerStatement = function $parseDebuggerStatement(sent$e) {
      return (this.next(), this.semicolon(), this.finishNode(sent$e, "DebuggerStatement"));
    }, sent$e.parseDoStatement = function $parseDoStatement(sent$e) {
      return (this.next(), this.labels.push(push$Oe), sent$e.body = this.parseStatement("do"), this.labels.pop(), this.expect(expect$g._while), sent$e.test = this.parseParenExpression(), 6 <= this.options.ecmaVersion ? this.eat(expect$g.semi) : this.semicolon(), this.finishNode(sent$e, "DoWhileStatement"));
    }, sent$e.parseForStatement = function $parseForStatement(sent$e) {
      this.next();
      var sent$t, sent$r, sent$i, sent$n, sent$s, onlyBlock$a, sent$o = 9 <= this.options.ecmaVersion && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
      return (this.labels.push(push$Oe), this.enterScope(0), this.expect(expect$g.parenL), this.type === expect$g.semi ? (-1 < sent$o && this.unexpected(sent$o), this.parseFor(sent$e, null)) : (sent$t = this.isLet(), this.type === expect$g._var || this.type === expect$g._const || sent$t ? (sent$r = this.startNode(), sent$t = sent$t ? "let" : this.value, this.next(), this.parseVar(sent$r, !0, sent$t), this.finishNode(sent$r, "VariableDeclaration"), (this.type === expect$g._in || 6 <= this.options.ecmaVersion && this.isContextual("of")) && 1 === sent$r.declarations.length ? (9 <= this.options.ecmaVersion && (this.type === expect$g._in ? -1 < sent$o && this.unexpected(sent$o) : sent$e.await = -1 < sent$o), this.parseForIn(sent$e, sent$r)) : (-1 < sent$o && this.unexpected(sent$o), this.parseFor(sent$e, sent$r))) : (sent$t = this.isContextual("let"), sent$r = !1, sent$i = this.containsEsc, sent$n = new privateNameStack$Re(), sent$s = this.start, onlyBlock$a = -1 < sent$o ? this.parseExprSubscripts(sent$n, "await") : this.parseExpression(!0, sent$n), this.type === expect$g._in || (sent$r = 6 <= this.options.ecmaVersion && this.isContextual("of")) ? (-1 < sent$o ? (this.type === expect$g._in && this.unexpected(sent$o), sent$e.await = !0) : sent$r && 8 <= this.options.ecmaVersion && (onlyBlock$a.start !== sent$s || sent$i || "Identifier" !== onlyBlock$a.type || "async" !== onlyBlock$a.name ? 9 <= this.options.ecmaVersion && (sent$e.await = !1) : this.unexpected()), sent$t && sent$r && this.raise(onlyBlock$a.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(onlyBlock$a, !1, sent$n), this.checkLValPattern(onlyBlock$a), this.parseForIn(sent$e, onlyBlock$a)) : (this.checkExpressionErrors(sent$n, !0), -1 < sent$o && this.unexpected(sent$o), this.parseFor(sent$e, onlyBlock$a)))));
    }, sent$e.parseFunctionStatement = function $parseFunctionStatement(sent$e, sent$t, sent$r) {
      return (this.next(), this.parseFunction(sent$e, parseFunction$je | (sent$r ? 0 : checkLValPattern$Ue), !1, sent$t));
    }, sent$e.parseIfStatement = function $parseIfStatement(sent$e) {
      return (this.next(), sent$e.test = this.parseParenExpression(), sent$e.consequent = this.parseStatement("if"), sent$e.alternate = this.eat(expect$g._else) ? this.parseStatement("if") : null, this.finishNode(sent$e, "IfStatement"));
    }, sent$e.parseReturnStatement = function $parseReturnStatement(sent$e) {
      return (this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(expect$g.semi) || this.insertSemicolon() ? sent$e.argument = null : (sent$e.argument = this.parseExpression(), this.semicolon()), this.finishNode(sent$e, "ReturnStatement"));
    }, sent$e.parseSwitchStatement = function $parseSwitchStatement(sent$e) {
      var sent$t;
      (this.next(), sent$e.discriminant = this.parseParenExpression(), sent$e.cases = [], this.expect(expect$g.braceL), this.labels.push(kind$push$Me), this.enterScope(0));
      for (var sent$r, sent$i = !1; this.type !== expect$g.braceR;) this.type === expect$g._case || this.type === expect$g._default ? (sent$r = this.type === expect$g._case, sent$t && this.finishNode(sent$t, "SwitchCase"), sent$e.cases.push(sent$t = this.startNode()), sent$t.consequent = [], this.next(), sent$r ? sent$t.test = this.parseExpression() : (sent$i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), sent$i = !0, sent$t.test = null), this.expect(expect$g.colon)) : (sent$t || this.unexpected(), sent$t.consequent.push(this.parseStatement(null)));
      return (this.exitScope(), sent$t && this.finishNode(sent$t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(sent$e, "SwitchStatement"));
    }, sent$e.parseThrowStatement = function $parseThrowStatement(sent$e) {
      return (this.next(), sent$o.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), sent$e.argument = this.parseExpression(), this.semicolon(), this.finishNode(sent$e, "ThrowStatement"));
    }, []),
    parseFunction$je = (sent$e.parseCatchClauseParam = function $parseCatchClauseParam() {
      var sent$e = this.parseBindingAtom(),
        sent$t = "Identifier" === sent$e.type;
      return (this.enterScope(sent$t ? 32 : 0), this.checkLValPattern(sent$e, sent$t ? 4 : 2), this.expect(expect$g.parenR), sent$e);
    }, sent$e.parseTryStatement = function $parseTryStatement(sent$e) {
      var sent$t;
      return (this.next(), sent$e.block = this.parseBlock(), sent$e.handler = null, this.type === expect$g._catch && (sent$t = this.startNode(), this.next(), this.eat(expect$g.parenL) ? sent$t.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), sent$t.param = null, this.enterScope(0)), sent$t.body = this.parseBlock(!1), this.exitScope(), sent$e.handler = this.finishNode(sent$t, "CatchClause")), sent$e.finalizer = this.eat(expect$g._finally) ? this.parseBlock() : null, sent$e.handler || sent$e.finalizer || this.raise(sent$e.start, "Missing catch or finally clause"), this.finishNode(sent$e, "TryStatement"));
    }, sent$e.parseVarStatement = function $parseVarStatement(sent$e, sent$t, sent$r) {
      return (this.next(), this.parseVar(sent$e, !1, sent$t, sent$r), this.semicolon(), this.finishNode(sent$e, "VariableDeclaration"));
    }, sent$e.parseWhileStatement = function $parseWhileStatement(sent$e) {
      return (this.next(), sent$e.test = this.parseParenExpression(), this.labels.push(push$Oe), sent$e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(sent$e, "WhileStatement"));
    }, sent$e.parseWithStatement = function $parseWithStatement(sent$e) {
      return (this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), sent$e.object = this.parseParenExpression(), sent$e.body = this.parseStatement("with"), this.finishNode(sent$e, "WithStatement"));
    }, sent$e.parseEmptyStatement = function $parseEmptyStatement(sent$e) {
      return (this.next(), this.finishNode(sent$e, "EmptyStatement"));
    }, sent$e.parseLabeledStatement = function $parseLabeledStatement(sent$e, sent$t, sent$r, sent$i) {
      for (var sent$n = 0, sent$s = this.labels; sent$n < sent$s.length; sent$n += 1) sent$s[sent$n].name === sent$t && this.raise(sent$r.start, "Label '" + sent$t + "' is already declared");
      for (var onlyBlock$a = this.type.isLoop ? "loop" : this.type === expect$g._switch ? "switch" : null, sent$o = this.labels.length - 1; 0 <= sent$o; sent$o--) {
        var sent$c = this.labels[sent$o];
        if (sent$c.statementStart !== sent$e.start) break;
        (sent$c.statementStart = this.start, sent$c.kind = onlyBlock$a);
      }
      return (this.labels.push({
        name: sent$t,
        kind: onlyBlock$a,
        statementStart: this.start
      }), sent$e.body = this.parseStatement(sent$i ? -1 === sent$i.indexOf("label") ? sent$i + "label" : sent$i : "label"), this.labels.pop(), sent$e.label = sent$r, this.finishNode(sent$e, "LabeledStatement"));
    }, sent$e.parseExpressionStatement = function $parseExpressionStatement(sent$e, sent$t) {
      return (sent$e.expression = sent$t, this.semicolon(), this.finishNode(sent$e, "ExpressionStatement"));
    }, sent$e.parseBlock = function $parseBlock(sent$e, sent$t, sent$r) {
      for ((void 0 === sent$e && (sent$e = !0), (sent$t = void 0 === sent$t ? this.startNode() : sent$t).body = [], this.expect(expect$g.braceL), sent$e && this.enterScope(0)); this.type !== expect$g.braceR;) {
        var sent$i = this.parseStatement(null);
        sent$t.body.push(sent$i);
      }
      return (sent$r && (this.strict = !1), this.next(), sent$e && this.exitScope(), this.finishNode(sent$t, "BlockStatement"));
    }, sent$e.parseFor = function $parseFor(sent$e, sent$t) {
      return (sent$e.init = sent$t, this.expect(expect$g.semi), sent$e.test = this.type === expect$g.semi ? null : this.parseExpression(), this.expect(expect$g.semi), sent$e.update = this.type === expect$g.parenR ? null : this.parseExpression(), this.expect(expect$g.parenR), sent$e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(sent$e, "ForStatement"));
    }, sent$e.parseForIn = function $parseForIn(sent$e, sent$t) {
      var sent$r = this.type === expect$g._in;
      return (this.next(), "VariableDeclaration" === sent$t.type && null != sent$t.declarations[0].init && (!sent$r || this.options.ecmaVersion < 8 || this.strict || "var" !== sent$t.kind || "Identifier" !== sent$t.declarations[0].id.type) && this.raise(sent$t.start, (sent$r ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), sent$e.left = sent$t, sent$e.right = sent$r ? this.parseExpression() : this.parseMaybeAssign(), this.expect(expect$g.parenR), sent$e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(sent$e, sent$r ? "ForInStatement" : "ForOfStatement"));
    }, sent$e.parseVar = function $parseVar(sent$e, sent$t, sent$r, sent$i) {
      for ((sent$e.declarations = [], sent$e.kind = sent$r);;) {
        var sent$n = this.startNode();
        if ((this.parseVarId(sent$n, sent$r), this.eat(expect$g.eq) ? sent$n.init = this.parseMaybeAssign(sent$t) : sent$i || "const" !== sent$r || this.type === expect$g._in || 6 <= this.options.ecmaVersion && this.isContextual("of") ? sent$i || "Identifier" === sent$n.id.type || sent$t && (this.type === expect$g._in || this.isContextual("of")) ? sent$n.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), sent$e.declarations.push(this.finishNode(sent$n, "VariableDeclarator")), !this.eat(expect$g.comma))) break;
      }
      return sent$e;
    }, sent$e.parseVarId = function $parseVarId(sent$e, sent$t) {
      (sent$e.id = this.parseBindingAtom(), this.checkLValPattern(sent$e.id, "var" === sent$t ? 1 : 2, !1));
    }, 1),
    checkLValPattern$Ue = 2;

  function static$qe(sent$e, sent$t) {
    var sent$r = sent$e.computed,
      sent$e = sent$e.key;
    return !sent$r && ("Identifier" === sent$e.type && sent$e.name === sent$t || "Literal" === sent$e.type && sent$e.value === sent$t);
  }
  (sent$e.parseFunction = function $parseFunction(sent$e, sent$t, sent$r, sent$i, sent$n) {
    (this.initFunction(sent$e), (9 <= this.options.ecmaVersion || 6 <= this.options.ecmaVersion && !sent$i) && (this.type === expect$g.star && sent$t & checkLValPattern$Ue && this.unexpected(), sent$e.generator = this.eat(expect$g.star)), 8 <= this.options.ecmaVersion && (sent$e.async = !!sent$i), sent$t & parseFunction$je && (sent$e.id = 4 & sent$t && this.type !== expect$g.name ? null : this.parseIdent(), !sent$e.id || sent$t & checkLValPattern$Ue || this.checkLValSimple(sent$e.id, this.strict || sent$e.generator || sent$e.async ? this.treatFunctionsAsVar ? 1 : 2 : 3)));
    var sent$i = this.yieldPos,
      sent$s = this.awaitPos,
      onlyBlock$a = this.awaitIdentPos;
    return (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(enterScope$Be(sent$e.async, sent$e.generator)), sent$t & parseFunction$je || (sent$e.id = this.type === expect$g.name ? this.parseIdent() : null), this.parseFunctionParams(sent$e), this.parseFunctionBody(sent$e, sent$r, !1, sent$n), this.yieldPos = sent$i, this.awaitPos = sent$s, this.awaitIdentPos = onlyBlock$a, this.finishNode(sent$e, sent$t & parseFunction$je ? "FunctionDeclaration" : "FunctionExpression"));
  }, sent$e.parseFunctionParams = function $parseFunctionParams(sent$e) {
    (this.expect(expect$g.parenL), sent$e.params = this.parseBindingList(expect$g.parenR, !1, 8 <= this.options.ecmaVersion), this.checkYieldAwaitInDefaultParams());
  }, sent$e.parseClass = function $parseClass(sent$e, sent$t) {
    this.next();
    var sent$r = this.strict,
      sent$i = (this.strict = !0, this.parseClassId(sent$e, sent$t), this.parseClassSuper(sent$e), this.enterClassBody()),
      sent$n = this.startNode(),
      sent$s = !1;
    for ((sent$n.body = [], this.expect(expect$g.braceL)); this.type !== expect$g.braceR;) {
      var onlyBlock$a = this.parseClassElement(null !== sent$e.superClass);
      onlyBlock$a && (sent$n.body.push(onlyBlock$a), "MethodDefinition" === onlyBlock$a.type && "constructor" === onlyBlock$a.kind ? (sent$s && this.raiseRecoverable(onlyBlock$a.start, "Duplicate constructor in the same class"), sent$s = !0) : onlyBlock$a.key && "PrivateIdentifier" === onlyBlock$a.key.type && (function(sent$e, sent$t) {
        var sent$r = sent$t.key.name,
          sent$i = sent$e[sent$r],
          sent$n = "true";
        "MethodDefinition" !== sent$t.type || "get" !== sent$t.kind && "set" !== sent$t.kind || (sent$n = (sent$t.static ? "s" : "i") + sent$t.kind);
        if ("iget" === sent$i && "iset" === sent$n || "iset" === sent$i && "iget" === sent$n || "sget" === sent$i && "sset" === sent$n || "sset" === sent$i && "sget" === sent$n) sent$e[sent$r] = "true";
        else {
          if (sent$i) return 1;
          sent$e[sent$r] = sent$n;
        }
      })(sent$i, onlyBlock$a) && this.raiseRecoverable(onlyBlock$a.key.start, "Identifier '#" + onlyBlock$a.key.name + "' has already been declared"));
    }
    return (this.strict = sent$r, this.next(), sent$e.body = this.finishNode(sent$n, "ClassBody"), this.exitClassBody(), this.finishNode(sent$e, sent$t ? "ClassDeclaration" : "ClassExpression"));
  }, sent$e.parseClassElement = function $parseClassElement(sent$e) {
    if (this.eat(expect$g.semi)) return null;
    var sent$t = this.options.ecmaVersion,
      sent$r = this.startNode(),
      sent$i = "",
      sent$n = !1,
      sent$s = !1,
      onlyBlock$a = "method",
      sent$o = !1;
    if (this.eatContextual("static")) {
      if (13 <= sent$t && this.eat(expect$g.braceL)) return (this.parseClassStaticBlock(sent$r), sent$r);
      this.isClassElementNameStart() || this.type === expect$g.star ? sent$o = !0 : sent$i = "static";
    }
    return (sent$r.static = sent$o, !sent$i && 8 <= sent$t && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== expect$g.star || this.canInsertSemicolon() ? sent$i = "async" : sent$s = !0), !sent$i && (9 <= sent$t || !sent$s) && this.eat(expect$g.star) && (sent$n = !0), sent$i || sent$s || sent$n || (sent$o = this.value, (this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? onlyBlock$a = sent$o : sent$i = sent$o)), sent$i ? (sent$r.computed = !1, sent$r.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), sent$r.key.name = sent$i, this.finishNode(sent$r.key, "Identifier")) : this.parseClassElementName(sent$r), sent$t < 13 || this.type === expect$g.parenL || "method" !== onlyBlock$a || sent$n || sent$s ? (sent$i = (sent$o = !sent$r.static && static$qe(sent$r, "constructor")) && sent$e, sent$o && "method" !== onlyBlock$a && this.raise(sent$r.key.start, "Constructor can't have get/set modifier"), sent$r.kind = sent$o ? "constructor" : onlyBlock$a, this.parseClassMethod(sent$r, sent$n, sent$s, sent$i)) : this.parseClassField(sent$r), sent$r);
  }, sent$e.isClassElementNameStart = function $isClassElementNameStart() {
    return this.type === expect$g.name || this.type === expect$g.privateId || this.type === expect$g.num || this.type === expect$g.string || this.type === expect$g.bracketL || this.type.keyword;
  }, sent$e.parseClassElementName = function $parseClassElementName(sent$e) {
    this.type === expect$g.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), sent$e.computed = !1, sent$e.key = this.parsePrivateIdent()) : this.parsePropertyName(sent$e);
  }, sent$e.parseClassMethod = function $parseClassMethod(sent$e, sent$t, sent$r, sent$i) {
    var sent$n = sent$e.key,
      sent$n = ("constructor" === sent$e.kind ? (sent$t && this.raise(sent$n.start, "Constructor can't be a generator"), sent$r && this.raise(sent$n.start, "Constructor can't be an async method")) : sent$e.static && static$qe(sent$e, "prototype") && this.raise(sent$n.start, "Classes may not have a static property named prototype"), sent$e.value = this.parseMethod(sent$t, sent$r, sent$i));
    return ("get" === sent$e.kind && 0 !== sent$n.params.length && this.raiseRecoverable(sent$n.start, "getter should have no params"), "set" === sent$e.kind && 1 !== sent$n.params.length && this.raiseRecoverable(sent$n.start, "setter should have exactly one param"), "set" === sent$e.kind && "RestElement" === sent$n.params[0].type && this.raiseRecoverable(sent$n.params[0].start, "Setter cannot use rest params"), this.finishNode(sent$e, "MethodDefinition"));
  }, sent$e.parseClassField = function $parseClassField(sent$e) {
    var sent$t, sent$r;
    return (static$qe(sent$e, "constructor") ? this.raise(sent$e.key.start, "Classes can't have a field named 'constructor'") : sent$e.static && static$qe(sent$e, "prototype") && this.raise(sent$e.key.start, "Classes can't have a static field named 'prototype'"), this.eat(expect$g.eq) ? (sent$r = (sent$t = this.currentThisScope()).inClassFieldInit, sent$t.inClassFieldInit = !0, sent$e.value = this.parseMaybeAssign(), sent$t.inClassFieldInit = sent$r) : sent$e.value = null, this.semicolon(), this.finishNode(sent$e, "PropertyDefinition"));
  }, sent$e.parseClassStaticBlock = function $parseClassStaticBlock(sent$e) {
    sent$e.body = [];
    var sent$t = this.labels;
    for ((this.labels = [], this.enterScope(320)); this.type !== expect$g.braceR;) {
      var sent$r = this.parseStatement(null);
      sent$e.body.push(sent$r);
    }
    return (this.next(), this.exitScope(), this.labels = sent$t, this.finishNode(sent$e, "StaticBlock"));
  }, sent$e.parseClassId = function $parseClassId(sent$e, sent$t) {
    this.type === expect$g.name ? (sent$e.id = this.parseIdent(), sent$t && this.checkLValSimple(sent$e.id, 2, !1)) : (!0 === sent$t && this.unexpected(), sent$e.id = null);
  }, sent$e.parseClassSuper = function $parseClassSuper(sent$e) {
    sent$e.superClass = this.eat(expect$g._extends) ? this.parseExprSubscripts(null, !1) : null;
  }, sent$e.enterClassBody = function $enterClassBody() {
    var sent$e = {
      declared: Object.create(null),
      used: []
    };
    return (this.privateNameStack.push(sent$e), sent$e.declared);
  }, sent$e.exitClassBody = function $exitClassBody() {
    var sent$e = this.privateNameStack.pop(),
      sent$t = sent$e.declared,
      sent$r = sent$e.used;
    if (this.options.checkPrivateFields)
      for (var sent$e = this.privateNameStack.length, sent$i = 0 === sent$e ? null : this.privateNameStack[sent$e - 1], sent$n = 0; sent$n < sent$r.length; ++sent$n) {
        var sent$s = sent$r[sent$n];
        ObjectHasOwn$ke(sent$t, sent$s.name) || (sent$i ? sent$i.used.push(sent$s) : this.raiseRecoverable(sent$s.start, "Private field '#" + sent$s.name + "' must be declared in an enclosing class"));
      }
  }, sent$e.parseExportAllDeclaration = function $parseExportAllDeclaration(sent$e, sent$t) {
    return (11 <= this.options.ecmaVersion && (this.eatContextual("as") ? (sent$e.exported = this.parseModuleExportName(), this.checkExport(sent$t, sent$e.exported, this.lastTokStart)) : sent$e.exported = null), this.expectContextual("from"), this.type !== expect$g.string && this.unexpected(), sent$e.source = this.parseExprAtom(), 16 <= this.options.ecmaVersion && (sent$e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(sent$e, "ExportAllDeclaration"));
  }, sent$e.parseExport = function $parseExport(sent$e, sent$t) {
    if ((this.next(), this.eat(expect$g.star))) return this.parseExportAllDeclaration(sent$e, sent$t);
    if (this.eat(expect$g._default)) return (this.checkExport(sent$t, "default", this.lastTokStart), sent$e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(sent$e, "ExportDefaultDeclaration"));
    if (this.shouldParseExportStatement())(sent$e.declaration = this.parseExportDeclaration(sent$e), "VariableDeclaration" === sent$e.declaration.type ? this.checkVariableExport(sent$t, sent$e.declaration.declarations) : this.checkExport(sent$t, sent$e.declaration.id, sent$e.declaration.id.start), sent$e.specifiers = [], sent$e.source = null);
    else {
      if ((sent$e.declaration = null, sent$e.specifiers = this.parseExportSpecifiers(sent$t), this.eatContextual("from")))(this.type !== expect$g.string && this.unexpected(), sent$e.source = this.parseExprAtom(), 16 <= this.options.ecmaVersion && (sent$e.attributes = this.parseWithClause()));
      else {
        for (var sent$r = 0, sent$i = sent$e.specifiers; sent$r < sent$i.length; sent$r += 1) {
          var sent$n = sent$i[sent$r];
          (this.checkUnreserved(sent$n.local), this.checkLocalExport(sent$n.local), "Literal" === sent$n.local.type && this.raise(sent$n.local.start, "A string literal cannot be used as an exported binding without `from`."));
        }
        sent$e.source = null;
      }
      this.semicolon();
    }
    return this.finishNode(sent$e, "ExportNamedDeclaration");
  }, sent$e.parseExportDeclaration = function $parseExportDeclaration(sent$e) {
    return this.parseStatement(null);
  }, sent$e.parseExportDefaultDeclaration = function $parseExportDefaultDeclaration() {
    var sent$e, sent$t;
    return this.type === expect$g._function || (sent$t = this.isAsyncFunction()) ? (sent$e = this.startNode(), this.next(), sent$t && this.next(), this.parseFunction(sent$e, 4 | parseFunction$je, !1, sent$t)) : this.type === expect$g._class ? (sent$e = this.startNode(), this.parseClass(sent$e, "nullableID")) : (sent$t = this.parseMaybeAssign(), this.semicolon(), sent$t);
  }, sent$e.checkExport = function $checkExport(sent$e, sent$t, sent$r) {
    sent$e && ("string" != typeof sent$t && (sent$t = "Identifier" === sent$t.type ? sent$t.name : sent$t.value), ObjectHasOwn$ke(sent$e, sent$t) && this.raiseRecoverable(sent$r, "Duplicate export '" + sent$t + "'"), sent$e[sent$t] = !0);
  }, sent$e.checkPatternExport = function $checkPatternExport(sent$e, sent$t) {
    var sent$r = sent$t.type;
    if ("Identifier" === sent$r) this.checkExport(sent$e, sent$t, sent$t.start);
    else if ("ObjectPattern" === sent$r)
      for (var sent$i = 0, sent$n = sent$t.properties; sent$i < sent$n.length; sent$i += 1) {
        var sent$s = sent$n[sent$i];
        this.checkPatternExport(sent$e, sent$s);
      } else if ("ArrayPattern" === sent$r)
        for (var onlyBlock$a = 0, sent$o = sent$t.elements; onlyBlock$a < sent$o.length; onlyBlock$a += 1) {
          var sent$c = sent$o[onlyBlock$a];
          sent$c && this.checkPatternExport(sent$e, sent$c);
        } else "Property" === sent$r ? this.checkPatternExport(sent$e, sent$t.value) : "AssignmentPattern" === sent$r ? this.checkPatternExport(sent$e, sent$t.left) : "RestElement" === sent$r && this.checkPatternExport(sent$e, sent$t.argument);
  }, sent$e.checkVariableExport = function $checkVariableExport(sent$e, sent$t) {
    if (sent$e)
      for (var sent$r = 0, sent$i = sent$t; sent$r < sent$i.length; sent$r += 1) {
        var sent$n = sent$i[sent$r];
        this.checkPatternExport(sent$e, sent$n.id);
      }
  }, sent$e.shouldParseExportStatement = function $shouldParseExportStatement() {
    return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
  }, sent$e.parseExportSpecifier = function $parseExportSpecifier(sent$e) {
    var sent$t = this.startNode();
    return (sent$t.local = this.parseModuleExportName(), sent$t.exported = this.eatContextual("as") ? this.parseModuleExportName() : sent$t.local, this.checkExport(sent$e, sent$t.exported, sent$t.exported.start), this.finishNode(sent$t, "ExportSpecifier"));
  }, sent$e.parseExportSpecifiers = function $parseExportSpecifiers(sent$e) {
    var sent$t = [],
      sent$r = !0;
    for (this.expect(expect$g.braceL); !this.eat(expect$g.braceR);) {
      if (sent$r) sent$r = !1;
      else if ((this.expect(expect$g.comma), this.afterTrailingComma(expect$g.braceR))) break;
      sent$t.push(this.parseExportSpecifier(sent$e));
    }
    return sent$t;
  }, sent$e.parseImport = function $parseImport(sent$e) {
    return (this.next(), this.type === expect$g.string ? (sent$e.specifiers = specifiers$Fe, sent$e.source = this.parseExprAtom()) : (sent$e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), sent$e.source = this.type === expect$g.string ? this.parseExprAtom() : this.unexpected()), 16 <= this.options.ecmaVersion && (sent$e.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(sent$e, "ImportDeclaration"));
  }, sent$e.parseImportSpecifier = function $parseImportSpecifier() {
    var sent$e = this.startNode();
    return (sent$e.imported = this.parseModuleExportName(), this.eatContextual("as") ? sent$e.local = this.parseIdent() : (this.checkUnreserved(sent$e.imported), sent$e.local = sent$e.imported), this.checkLValSimple(sent$e.local, 2), this.finishNode(sent$e, "ImportSpecifier"));
  }, sent$e.parseImportDefaultSpecifier = function $parseImportDefaultSpecifier() {
    var sent$e = this.startNode();
    return (sent$e.local = this.parseIdent(), this.checkLValSimple(sent$e.local, 2), this.finishNode(sent$e, "ImportDefaultSpecifier"));
  }, sent$e.parseImportNamespaceSpecifier = function $parseImportNamespaceSpecifier() {
    var sent$e = this.startNode();
    return (this.next(), this.expectContextual("as"), sent$e.local = this.parseIdent(), this.checkLValSimple(sent$e.local, 2), this.finishNode(sent$e, "ImportNamespaceSpecifier"));
  }, sent$e.parseImportSpecifiers = function $parseImportSpecifiers() {
    var sent$e = [],
      sent$t = !0;
    if (this.type !== expect$g.name || (sent$e.push(this.parseImportDefaultSpecifier()), this.eat(expect$g.comma)))
      if (this.type === expect$g.star) sent$e.push(this.parseImportNamespaceSpecifier());
      else
        for (this.expect(expect$g.braceL); !this.eat(expect$g.braceR);) {
          if (sent$t) sent$t = !1;
          else if ((this.expect(expect$g.comma), this.afterTrailingComma(expect$g.braceR))) break;
          sent$e.push(this.parseImportSpecifier());
        }
    return sent$e;
  }, sent$e.parseWithClause = function $parseWithClause() {
    var sent$e = [];
    if (this.eat(expect$g._with)) {
      this.expect(expect$g.braceL);
      for (var sent$t = {}, sent$r = !0; !this.eat(expect$g.braceR);) {
        if (sent$r) sent$r = !1;
        else if ((this.expect(expect$g.comma), this.afterTrailingComma(expect$g.braceR))) break;
        var sent$i = this.parseImportAttribute(),
          sent$n = "Identifier" === sent$i.key.type ? sent$i.key.name : sent$i.key.value;
        (ObjectHasOwn$ke(sent$t, sent$n) && this.raiseRecoverable(sent$i.key.start, "Duplicate attribute key '" + sent$n + "'"), sent$t[sent$n] = !0, sent$e.push(sent$i));
      }
    }
    return sent$e;
  }, sent$e.parseImportAttribute = function $parseImportAttribute() {
    var sent$e = this.startNode();
    return (sent$e.key = this.type === expect$g.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved), this.expect(expect$g.colon), this.type !== expect$g.string && this.unexpected(), sent$e.value = this.parseExprAtom(), this.finishNode(sent$e, "ImportAttribute"));
  }, sent$e.parseModuleExportName = function $parseModuleExportName() {
    var sent$e;
    return 13 <= this.options.ecmaVersion && this.type === expect$g.string ? (sent$e = this.parseLiteral(this.value), parseLiteral$Pe.test(sent$e.value) && this.raise(sent$e.start, "An export name cannot include a lone surrogate."), sent$e) : this.parseIdent(!0);
  }, sent$e.adaptDirectivePrologue = function $adaptDirectivePrologue(sent$e) {
    for (var sent$t = 0; sent$t < sent$e.length && this.isDirectiveCandidate(sent$e[sent$t]); ++sent$t) sent$e[sent$t].directive = sent$e[sent$t].expression.raw.slice(1, -1);
  }, sent$e.isDirectiveCandidate = function $isDirectiveCandidate(sent$e) {
    return 5 <= this.options.ecmaVersion && "ExpressionStatement" === sent$e.type && "Literal" === sent$e.expression.type && "string" == typeof sent$e.expression.value && ('"' === this.input[sent$e.start] || "'" === this.input[sent$e.start]);
  });

  function push$u(sent$e, sent$t, sent$r, sent$i, sent$n) {
    (this.token = sent$e, this.isExpr = !!sent$t, this.preserveSpace = !!sent$r, this.override = sent$i, this.generator = !!sent$n);
  }
  var sent$e = sent$l.prototype,
    thisYieldPos$d = (sent$e.toAssignable = function $toAssignable(sent$e, sent$t, sent$r) {
      if (6 <= this.options.ecmaVersion && sent$e) switch (sent$e.type) {
        case "Identifier":
          this.inAsync && "await" === sent$e.name && this.raise(sent$e.start, "Cannot use 'await' as identifier inside an async function");
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          (sent$e.type = "ObjectPattern", sent$r && this.checkPatternErrors(sent$r, !0));
          for (var sent$i = 0, sent$n = sent$e.properties; sent$i < sent$n.length; sent$i += 1) {
            var sent$s = sent$n[sent$i];
            (this.toAssignable(sent$s, sent$t), "RestElement" !== sent$s.type || "ArrayPattern" !== sent$s.argument.type && "ObjectPattern" !== sent$s.argument.type || this.raise(sent$s.argument.start, "Unexpected token"));
          }
          break;
        case "Property":
          ("init" !== sent$e.kind && this.raise(sent$e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(sent$e.value, sent$t));
          break;
        case "ArrayExpression":
          (sent$e.type = "ArrayPattern", sent$r && this.checkPatternErrors(sent$r, !0), this.toAssignableList(sent$e.elements, sent$t));
          break;
        case "SpreadElement":
          (sent$e.type = "RestElement", this.toAssignable(sent$e.argument, sent$t), "AssignmentPattern" === sent$e.argument.type && this.raise(sent$e.argument.start, "Rest elements cannot have a default value"));
          break;
        case "AssignmentExpression":
          ("=" !== sent$e.operator && this.raise(sent$e.left.end, "Only '=' operator can be used for specifying default value."), sent$e.type = "AssignmentPattern", delete sent$e.operator, this.toAssignable(sent$e.left, sent$t));
          break;
        case "ParenthesizedExpression":
          this.toAssignable(sent$e.expression, sent$t, sent$r);
          break;
        case "ChainExpression":
          this.raiseRecoverable(sent$e.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!sent$t) break;
        default:
          this.raise(sent$e.start, "Assigning to rvalue");
      } else sent$r && this.checkPatternErrors(sent$r, !0);
      return sent$e;
    }, sent$e.toAssignableList = function $toAssignableList(sent$e, sent$t) {
      for (var sent$r, sent$i = sent$e.length, sent$n = 0; sent$n < sent$i; sent$n++) {
        var sent$s = sent$e[sent$n];
        sent$s && this.toAssignable(sent$s, sent$t);
      }
      return (sent$i && (sent$r = sent$e[sent$i - 1], 6 === this.options.ecmaVersion) && sent$t && sent$r && "RestElement" === sent$r.type && "Identifier" !== sent$r.argument.type && this.unexpected(sent$r.argument.start), sent$e);
    }, sent$e.parseSpread = function $parseSpread(sent$e) {
      var sent$t = this.startNode();
      return (this.next(), sent$t.argument = this.parseMaybeAssign(!1, sent$e), this.finishNode(sent$t, "SpreadElement"));
    }, sent$e.parseRestBinding = function $parseRestBinding() {
      var sent$e = this.startNode();
      return (this.next(), 6 === this.options.ecmaVersion && this.type !== expect$g.name && this.unexpected(), sent$e.argument = this.parseBindingAtom(), this.finishNode(sent$e, "RestElement"));
    }, sent$e.parseBindingAtom = function $parseBindingAtom() {
      if (6 <= this.options.ecmaVersion) switch (this.type) {
        case expect$g.bracketL:
          var sent$e = this.startNode();
          return (this.next(), sent$e.elements = this.parseBindingList(expect$g.bracketR, !0, !0), this.finishNode(sent$e, "ArrayPattern"));
        case expect$g.braceL:
          return this.parseObj(!0);
      }
      return this.parseIdent();
    }, sent$e.parseBindingList = function $parseBindingList(sent$e, sent$t, sent$r, sent$i) {
      for (var sent$n = [], sent$s = !0; !this.eat(sent$e);)
        if ((sent$s ? sent$s = !1 : this.expect(expect$g.comma), sent$t && this.type === expect$g.comma)) sent$n.push(null);
        else {
          if (sent$r && this.afterTrailingComma(sent$e)) break;
          if (this.type === expect$g.ellipsis) {
            var onlyBlock$a = this.parseRestBinding();
            (this.parseBindingListItem(onlyBlock$a), sent$n.push(onlyBlock$a), this.type === expect$g.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(sent$e));
            break;
          }
          sent$n.push(this.parseAssignableListItem(sent$i));
        }
      return sent$n;
    }, sent$e.parseAssignableListItem = function $parseAssignableListItem(sent$e) {
      var sent$t = this.parseMaybeDefault(this.start, this.startLoc);
      return (this.parseBindingListItem(sent$t), sent$t);
    }, sent$e.parseBindingListItem = function $parseBindingListItem(sent$e) {
      return sent$e;
    }, sent$e.parseMaybeDefault = function $parseMaybeDefault(sent$e, sent$t, sent$r) {
      return (sent$r = sent$r || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(expect$g.eq) ? sent$r : ((sent$e = this.startNodeAt(sent$e, sent$t)).left = sent$r, sent$e.right = this.parseMaybeAssign(), this.finishNode(sent$e, "AssignmentPattern")));
    }, sent$e.checkLValSimple = function $checkLValSimple(sent$e, sent$t, sent$r) {
      var sent$i = 0 !== (sent$t = void 0 === sent$t ? 0 : sent$t);
      switch (sent$e.type) {
        case "Identifier":
          (this.strict && this.reservedWordsStrictBind.test(sent$e.name) && this.raiseRecoverable(sent$e.start, (sent$i ? "Binding " : "Assigning to ") + sent$e.name + " in strict mode"), sent$i && (2 === sent$t && "let" === sent$e.name && this.raiseRecoverable(sent$e.start, "let is disallowed as a lexically bound name"), sent$r && (ObjectHasOwn$ke(sent$r, sent$e.name) && this.raiseRecoverable(sent$e.start, "Argument name clash"), sent$r[sent$e.name] = !0), 5 !== sent$t) && this.declareName(sent$e.name, sent$t, sent$e.start));
          break;
        case "ChainExpression":
          this.raiseRecoverable(sent$e.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          sent$i && this.raiseRecoverable(sent$e.start, "Binding member expression");
          break;
        case "ParenthesizedExpression":
          return (sent$i && this.raiseRecoverable(sent$e.start, "Binding parenthesized expression"), this.checkLValSimple(sent$e.expression, sent$t, sent$r));
        default:
          this.raise(sent$e.start, (sent$i ? "Binding" : "Assigning to") + " rvalue");
      }
    }, sent$e.checkLValPattern = function $checkLValPattern(sent$e, sent$t, sent$r) {
      switch ((void 0 === sent$t && (sent$t = 0), sent$e.type)) {
        case "ObjectPattern":
          for (var sent$i = 0, sent$n = sent$e.properties; sent$i < sent$n.length; sent$i += 1) {
            var sent$s = sent$n[sent$i];
            this.checkLValInnerPattern(sent$s, sent$t, sent$r);
          }
          break;
        case "ArrayPattern":
          for (var onlyBlock$a = 0, sent$o = sent$e.elements; onlyBlock$a < sent$o.length; onlyBlock$a += 1) {
            var sent$c = sent$o[onlyBlock$a];
            sent$c && this.checkLValInnerPattern(sent$c, sent$t, sent$r);
          }
          break;
        default:
          this.checkLValSimple(sent$e, sent$t, sent$r);
      }
    }, {
      b_stat: new push$u("{", !(sent$e.checkLValInnerPattern = function $checkLValInnerPattern(sent$e, sent$t, sent$r) {
        switch ((void 0 === sent$t && (sent$t = 0), sent$e.type)) {
          case "Property":
            this.checkLValInnerPattern(sent$e.value, sent$t, sent$r);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(sent$e.left, sent$t, sent$r);
            break;
          case "RestElement":
            this.checkLValPattern(sent$e.argument, sent$t, sent$r);
            break;
          default:
            this.checkLValPattern(sent$e, sent$t, sent$r);
        }
      })),
      b_expr: new push$u("{", !0),
      b_tmpl: new push$u("${", !1),
      p_stat: new push$u("(", !1),
      p_expr: new push$u("(", !0),
      q_tmpl: new push$u("`", !0, !0, function(sent$e) {
        return sent$e.tryReadTemplateToken();
      }),
      f_stat: new push$u("function", !1),
      f_expr: new push$u("function", !0),
      f_expr_gen: new push$u("function", !0, !1, null, !0),
      f_gen: new push$u("function", !1, !1, null, !0)
    }),
    sent$e = sent$l.prototype,
    sent$e = (sent$e.initialContext = function $initialContext() {
      return [thisYieldPos$d.b_stat];
    }, sent$e.curContext = function $curContext() {
      return this.context[this.context.length - 1];
    }, sent$e.braceIsBlock = function $braceIsBlock(sent$e) {
      var sent$t = this.curContext();
      return sent$t === thisYieldPos$d.f_expr || sent$t === thisYieldPos$d.f_stat || (sent$e !== expect$g.colon || sent$t !== thisYieldPos$d.b_stat && sent$t !== thisYieldPos$d.b_expr ? sent$e === expect$g._return || sent$e === expect$g.name && this.exprAllowed ? sent$o.test(this.input.slice(this.lastTokEnd, this.start)) : sent$e === expect$g._else || sent$e === expect$g.semi || sent$e === expect$g.eof || sent$e === expect$g.parenR || sent$e === expect$g.arrow || (sent$e === expect$g.braceL ? sent$t === thisYieldPos$d.b_stat : sent$e !== expect$g._var && sent$e !== expect$g._const && sent$e !== expect$g.name && !this.exprAllowed) : !sent$t.isExpr);
    }, sent$e.inGeneratorContext = function $inGeneratorContext() {
      for (var sent$e = this.context.length - 1; 1 <= sent$e; sent$e--) {
        var sent$t = this.context[sent$e];
        if ("function" === sent$t.token) return sent$t.generator;
      }
      return !1;
    }, sent$e.updateContext = function $updateContext(sent$e) {
      var sent$t, sent$r = this.type;
      sent$r.keyword && sent$e === expect$g.dot ? this.exprAllowed = !1 : (sent$t = sent$r.updateContext) ? sent$t.call(this, sent$e) : this.exprAllowed = sent$r.beforeExpr;
    }, sent$e.overrideContext = function $overrideContext(sent$e) {
      this.curContext() !== sent$e && (this.context[this.context.length - 1] = sent$e);
    }, expect$g.parenR.updateContext = expect$g.braceR.updateContext = function $updateContext() {
      var sent$e;
      1 === this.context.length ? this.exprAllowed = !0 : ((sent$e = this.context.pop()) === thisYieldPos$d.b_stat && "function" === this.curContext().token && (sent$e = this.context.pop()), this.exprAllowed = !sent$e.isExpr);
    }, expect$g.braceL.updateContext = function $updateContext(sent$e) {
      (this.context.push(this.braceIsBlock(sent$e) ? thisYieldPos$d.b_stat : thisYieldPos$d.b_expr), this.exprAllowed = !0);
    }, expect$g.dollarBraceL.updateContext = function $updateContext() {
      (this.context.push(thisYieldPos$d.b_tmpl), this.exprAllowed = !0);
    }, expect$g.parenL.updateContext = function $updateContext(sent$e) {
      sent$e = sent$e === expect$g._if || sent$e === expect$g._for || sent$e === expect$g._with || sent$e === expect$g._while;
      (this.context.push(sent$e ? thisYieldPos$d.p_stat : thisYieldPos$d.p_expr), this.exprAllowed = !0);
    }, expect$g.incDec.updateContext = function $updateContext() {}, expect$g._function.updateContext = expect$g._class.updateContext = function $updateContext(sent$e) {
      (!sent$e.beforeExpr || sent$e === expect$g._else || sent$e === expect$g.semi && this.curContext() !== thisYieldPos$d.p_stat || sent$e === expect$g._return && sent$o.test(this.input.slice(this.lastTokEnd, this.start)) || (sent$e === expect$g.colon || sent$e === expect$g.braceL) && this.curContext() === thisYieldPos$d.b_stat ? this.context.push(thisYieldPos$d.f_stat) : this.context.push(thisYieldPos$d.f_expr), this.exprAllowed = !1);
    }, expect$g.colon.updateContext = function $updateContext() {
      ("function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0);
    }, expect$g.backQuote.updateContext = function $updateContext() {
      (this.curContext() === thisYieldPos$d.q_tmpl ? this.context.pop() : this.context.push(thisYieldPos$d.q_tmpl), this.exprAllowed = !1);
    }, expect$g.star.updateContext = function $updateContext(sent$e) {
      (sent$e === expect$g._function && (sent$e = this.context.length - 1, this.context[sent$e] === thisYieldPos$d.f_expr ? this.context[sent$e] = thisYieldPos$d.f_expr_gen : this.context[sent$e] = thisYieldPos$d.f_gen), this.exprAllowed = !0);
    }, expect$g.name.updateContext = function $updateContext(sent$e) {
      var sent$t = !1;
      (6 <= this.options.ecmaVersion && sent$e !== expect$g.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (sent$t = !0), this.exprAllowed = sent$t);
    }, sent$l.prototype);
  (sent$e.checkPropClash = function $checkPropClash(sent$e, sent$t, sent$r) {
    if (!(9 <= this.options.ecmaVersion && "SpreadElement" === sent$e.type || 6 <= this.options.ecmaVersion && (sent$e.computed || sent$e.method || sent$e.shorthand))) {
      var sent$i = sent$e.key;
      switch (sent$i.type) {
        case "Identifier":
          sent$n = sent$i.name;
          break;
        case "Literal":
          sent$n = String(sent$i.value);
          break;
        default:
          return;
      }
      var sent$n, sent$e = sent$e.kind;
      6 <= this.options.ecmaVersion ? "__proto__" === sent$n && "init" === sent$e && (sent$t.proto && (sent$r ? sent$r.doubleProto < 0 && (sent$r.doubleProto = sent$i.start) : this.raiseRecoverable(sent$i.start, "Redefinition of __proto__ property")), sent$t.proto = !0) : ((sent$r = sent$t[sent$n = "$" + sent$n]) ? ("init" === sent$e ? this.strict && sent$r.init || sent$r.get || sent$r.set : sent$r.init || sent$r[sent$e]) && this.raiseRecoverable(sent$i.start, "Redefinition of property") : sent$r = sent$t[sent$n] = {
        init: !1,
        get: !1,
        set: !1
      }, sent$r[sent$e] = !0);
    }
  }, sent$e.parseExpression = function $parseExpression(sent$e, sent$t) {
    var sent$r = this.start,
      sent$i = this.startLoc,
      sent$n = this.parseMaybeAssign(sent$e, sent$t);
    if (this.type !== expect$g.comma) return sent$n;
    var sent$s = this.startNodeAt(sent$r, sent$i);
    for (sent$s.expressions = [sent$n]; this.eat(expect$g.comma);) sent$s.expressions.push(this.parseMaybeAssign(sent$e, sent$t));
    return this.finishNode(sent$s, "SequenceExpression");
  }, sent$e.parseMaybeAssign = function $parseMaybeAssign(sent$e, sent$t, sent$r) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) return this.parseYield(sent$e);
      this.exprAllowed = !1;
    }
    var sent$i = !1,
      sent$n = -1,
      sent$s = -1,
      onlyBlock$a = -1,
      sent$o = (sent$t ? (sent$n = sent$t.parenthesizedAssign, sent$s = sent$t.trailingComma, onlyBlock$a = sent$t.doubleProto, sent$t.parenthesizedAssign = sent$t.trailingComma = -1) : (sent$t = new privateNameStack$Re(), sent$i = !0), this.start),
      sent$c = this.startLoc,
      sent$h = (this.type !== expect$g.parenL && this.type !== expect$g.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === sent$e), this.parseMaybeConditional(sent$e, sent$t));
    return (sent$r && (sent$h = sent$r.call(this, sent$h, sent$o, sent$c)), this.type.isAssign ? ((sent$r = this.startNodeAt(sent$o, sent$c)).operator = this.value, this.type === expect$g.eq && (sent$h = this.toAssignable(sent$h, !1, sent$t)), sent$i || (sent$t.parenthesizedAssign = sent$t.trailingComma = sent$t.doubleProto = -1), sent$t.shorthandAssign >= sent$h.start && (sent$t.shorthandAssign = -1), this.type === expect$g.eq ? this.checkLValPattern(sent$h) : this.checkLValSimple(sent$h), sent$r.left = sent$h, this.next(), sent$r.right = this.parseMaybeAssign(sent$e), -1 < onlyBlock$a && (sent$t.doubleProto = onlyBlock$a), this.finishNode(sent$r, "AssignmentExpression")) : (sent$i && this.checkExpressionErrors(sent$t, !0), -1 < sent$n && (sent$t.parenthesizedAssign = sent$n), -1 < sent$s && (sent$t.trailingComma = sent$s), sent$h));
  }, sent$e.parseMaybeConditional = function $parseMaybeConditional(sent$e, sent$t) {
    var sent$r = this.start,
      sent$i = this.startLoc,
      sent$n = this.parseExprOps(sent$e, sent$t);
    return !this.checkExpressionErrors(sent$t) && this.eat(expect$g.question) ? ((sent$t = this.startNodeAt(sent$r, sent$i)).test = sent$n, sent$t.consequent = this.parseMaybeAssign(), this.expect(expect$g.colon), sent$t.alternate = this.parseMaybeAssign(sent$e), this.finishNode(sent$t, "ConditionalExpression")) : sent$n;
  }, sent$e.parseExprOps = function $parseExprOps(sent$e, sent$t) {
    var sent$r = this.start,
      sent$i = this.startLoc,
      sent$n = this.parseMaybeUnary(sent$t, !1, !1, sent$e);
    return this.checkExpressionErrors(sent$t) || sent$n.start === sent$r && "ArrowFunctionExpression" === sent$n.type ? sent$n : this.parseExprOp(sent$n, sent$r, sent$i, -1, sent$e);
  }, sent$e.parseExprOp = function $parseExprOp(sent$e, sent$t, sent$r, sent$i, sent$n) {
    var sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l = this.type.binop;
    if (null != sent$l && (!sent$n || this.type !== expect$g._in) && sent$i < sent$l) return (sent$s = this.type === expect$g.logicalOR || this.type === expect$g.logicalAND, (onlyBlock$a = this.type === expect$g.coalesce) && (sent$l = expect$g.logicalAND.binop), sent$o = this.value, this.next(), sent$c = this.start, sent$h = this.startLoc, sent$c = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, sent$n), sent$c, sent$h, sent$l, sent$n), sent$h = this.buildBinary(sent$t, sent$r, sent$e, sent$c, sent$o, sent$s || onlyBlock$a), (sent$s && this.type === expect$g.coalesce || onlyBlock$a && (this.type === expect$g.logicalOR || this.type === expect$g.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(sent$h, sent$t, sent$r, sent$i, sent$n));
    return sent$e;
  }, sent$e.buildBinary = function $buildBinary(sent$e, sent$t, sent$r, sent$i, sent$n, sent$s) {
    "PrivateIdentifier" === sent$i.type && this.raise(sent$i.start, "Private identifier can only be left side of binary expression");
    sent$e = this.startNodeAt(sent$e, sent$t);
    return (sent$e.left = sent$r, sent$e.operator = sent$n, sent$e.right = sent$i, this.finishNode(sent$e, sent$s ? "LogicalExpression" : "BinaryExpression"));
  }, sent$e.parseMaybeUnary = function $parseMaybeUnary(sent$e, sent$t, sent$r, sent$i) {
    var sent$n, sent$s = this.start,
      onlyBlock$a = this.startLoc;
    if (this.isContextual("await") && this.canAwait)(sent$n = this.parseAwait(sent$i), sent$t = !0);
    else if (this.type.prefix) {
      var sent$o = this.startNode(),
        sent$c = this.type === expect$g.incDec;
      (sent$o.operator = this.value, sent$o.prefix = !0, this.next(), sent$o.argument = this.parseMaybeUnary(null, !0, sent$c, sent$i), this.checkExpressionErrors(sent$e, !0), sent$c ? this.checkLValSimple(sent$o.argument) : this.strict && "delete" === sent$o.operator && (function sent$e(sent$t) {
        return "Identifier" === sent$t.type || "ParenthesizedExpression" === sent$t.type && sent$e(sent$t.expression);
      })(sent$o.argument) ? this.raiseRecoverable(sent$o.start, "Deleting local variable in strict mode") : "delete" === sent$o.operator && (function sent$e(sent$t) {
        return "MemberExpression" === sent$t.type && "PrivateIdentifier" === sent$t.property.type || "ChainExpression" === sent$t.type && sent$e(sent$t.expression) || "ParenthesizedExpression" === sent$t.type && sent$e(sent$t.expression);
      })(sent$o.argument) ? this.raiseRecoverable(sent$o.start, "Private fields can not be deleted") : sent$t = !0, sent$n = this.finishNode(sent$o, sent$c ? "UpdateExpression" : "UnaryExpression"));
    } else if (sent$t || this.type !== expect$g.privateId) {
      if ((sent$n = this.parseExprSubscripts(sent$e, sent$i), this.checkExpressionErrors(sent$e))) return sent$n;
      for (; this.type.postfix && !this.canInsertSemicolon();) {
        var sent$h = this.startNodeAt(sent$s, onlyBlock$a);
        (sent$h.operator = this.value, sent$h.prefix = !1, sent$h.argument = sent$n, this.checkLValSimple(sent$n), this.next(), sent$n = this.finishNode(sent$h, "UpdateExpression"));
      }
    } else((sent$i || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), sent$n = this.parsePrivateIdent(), this.type !== expect$g._in && this.unexpected());
    return sent$r || !this.eat(expect$g.starstar) ? sent$n : sent$t ? void this.unexpected(this.lastTokStart) : this.buildBinary(sent$s, onlyBlock$a, sent$n, this.parseMaybeUnary(null, !1, !1, sent$i), "**", !1);
  }, sent$e.parseExprSubscripts = function $parseExprSubscripts(sent$e, sent$t) {
    var sent$r = this.start,
      sent$i = this.startLoc,
      sent$n = this.parseExprAtom(sent$e, sent$t);
    return ("ArrowFunctionExpression" === sent$n.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd) || (sent$n = this.parseSubscripts(sent$n, sent$r, sent$i, !1, sent$t), sent$e && "MemberExpression" === sent$n.type && (sent$e.parenthesizedAssign >= sent$n.start && (sent$e.parenthesizedAssign = -1), sent$e.parenthesizedBind >= sent$n.start && (sent$e.parenthesizedBind = -1), sent$e.trailingComma >= sent$n.start) && (sent$e.trailingComma = -1)), sent$n);
  }, sent$e.parseSubscripts = function $parseSubscripts(sent$e, sent$t, sent$r, sent$i, sent$n) {
    for (var sent$s = 8 <= this.options.ecmaVersion && "Identifier" === sent$e.type && "async" === sent$e.name && this.lastTokEnd === sent$e.end && !this.canInsertSemicolon() && sent$e.end - sent$e.start == 5 && this.potentialArrowAt === sent$e.start, onlyBlock$a = !1;;) {
      var sent$o, sent$c = this.parseSubscript(sent$e, sent$t, sent$r, sent$i, sent$s, onlyBlock$a, sent$n);
      if ((sent$c.optional && (onlyBlock$a = !0), sent$c === sent$e || "ArrowFunctionExpression" === sent$c.type)) return (onlyBlock$a && ((sent$o = this.startNodeAt(sent$t, sent$r)).expression = sent$c, sent$c = this.finishNode(sent$o, "ChainExpression")), sent$c);
      sent$e = sent$c;
    }
  }, sent$e.shouldParseAsyncArrow = function $shouldParseAsyncArrow() {
    return !this.canInsertSemicolon() && this.eat(expect$g.arrow);
  }, sent$e.parseSubscriptAsyncArrow = function $parseSubscriptAsyncArrow(sent$e, sent$t, sent$r, sent$i) {
    return this.parseArrowExpression(this.startNodeAt(sent$e, sent$t), sent$r, !0, sent$i);
  }, sent$e.parseSubscript = function $parseSubscript(sent$e, sent$t, sent$r, sent$i, sent$n, sent$s, onlyBlock$a) {
    var sent$o = 11 <= this.options.ecmaVersion,
      sent$c = sent$o && this.eat(expect$g.questionDot),
      sent$h = (sent$i && sent$c && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions"), this.eat(expect$g.bracketL));
    if (sent$h || sent$c && this.type !== expect$g.parenL && this.type !== expect$g.backQuote || this.eat(expect$g.dot)) {
      var sent$l = this.startNodeAt(sent$t, sent$r);
      (sent$l.object = sent$e, sent$h ? (sent$l.property = this.parseExpression(), this.expect(expect$g.bracketR)) : this.type === expect$g.privateId && "Super" !== sent$e.type ? sent$l.property = this.parsePrivateIdent() : sent$l.property = this.parseIdent("never" !== this.options.allowReserved), sent$l.computed = !!sent$h, sent$o && (sent$l.optional = sent$c), sent$e = this.finishNode(sent$l, "MemberExpression"));
    } else if (!sent$i && this.eat(expect$g.parenL)) {
      var sent$h = new privateNameStack$Re(),
        sent$l = this.yieldPos,
        sent$i = this.awaitPos,
        push$u = this.awaitIdentPos,
        LABEL$p = (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.parseExprList(expect$g.parenR, 8 <= this.options.ecmaVersion, !1, sent$h));
      if (sent$n && !sent$c && this.shouldParseAsyncArrow()) return (this.checkPatternErrors(sent$h, !1), this.checkYieldAwaitInDefaultParams(), 0 < this.awaitIdentPos && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = sent$l, this.awaitPos = sent$i, this.awaitIdentPos = push$u, this.parseSubscriptAsyncArrow(sent$t, sent$r, LABEL$p, onlyBlock$a));
      (this.checkExpressionErrors(sent$h, !0), this.yieldPos = sent$l || this.yieldPos, this.awaitPos = sent$i || this.awaitPos, this.awaitIdentPos = push$u || this.awaitIdentPos);
      sent$n = this.startNodeAt(sent$t, sent$r);
      (sent$n.callee = sent$e, sent$n.arguments = LABEL$p, sent$o && (sent$n.optional = sent$c), sent$e = this.finishNode(sent$n, "CallExpression"));
    } else this.type === expect$g.backQuote && ((sent$c || sent$s) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions"), (onlyBlock$a = this.startNodeAt(sent$t, sent$r)).tag = sent$e, onlyBlock$a.quasi = this.parseTemplate({
      isTagged: !0
    }), sent$e = this.finishNode(onlyBlock$a, "TaggedTemplateExpression"));
    return sent$e;
  }, sent$e.parseExprAtom = function $parseExprAtom(sent$e, sent$t, sent$r) {
    this.type === expect$g.slash && this.readRegexp();
    var sent$i = this.potentialArrowAt === this.start;
    switch (this.type) {
      case expect$g._super:
        return (this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), sent$c = this.startNode(), this.next(), this.type !== expect$g.parenL || this.allowDirectSuper || this.raise(sent$c.start, "super() call outside constructor of a subclass"), this.type !== expect$g.dot && this.type !== expect$g.bracketL && this.type !== expect$g.parenL && this.unexpected(), this.finishNode(sent$c, "Super"));
      case expect$g._this:
        return (sent$c = this.startNode(), this.next(), this.finishNode(sent$c, "ThisExpression"));
      case expect$g.name:
        var sent$n = this.start,
          sent$s = this.startLoc,
          onlyBlock$a = this.containsEsc,
          sent$o = this.parseIdent(!1);
        if (8 <= this.options.ecmaVersion && !onlyBlock$a && "async" === sent$o.name && !this.canInsertSemicolon() && this.eat(expect$g._function)) return (this.overrideContext(thisYieldPos$d.f_expr), this.parseFunction(this.startNodeAt(sent$n, sent$s), 0, !1, !0, sent$t));
        if (sent$i && !this.canInsertSemicolon()) {
          if (this.eat(expect$g.arrow)) return this.parseArrowExpression(this.startNodeAt(sent$n, sent$s), [sent$o], !1, sent$t);
          if (8 <= this.options.ecmaVersion && "async" === sent$o.name && this.type === expect$g.name && !onlyBlock$a && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return (sent$o = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(expect$g.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(sent$n, sent$s), [sent$o], !0, sent$t));
        }
        return sent$o;
      case expect$g.regexp:
        var sent$c, onlyBlock$a = this.value;
        return ((sent$c = this.parseLiteral(onlyBlock$a.value)).regex = {
          pattern: onlyBlock$a.pattern,
          flags: onlyBlock$a.flags
        }, sent$c);
      case expect$g.num:
      case expect$g.string:
        return this.parseLiteral(this.value);
      case expect$g._null:
      case expect$g._true:
      case expect$g._false:
        return ((sent$c = this.startNode()).value = this.type === expect$g._null ? null : this.type === expect$g._true, sent$c.raw = this.type.keyword, this.next(), this.finishNode(sent$c, "Literal"));
      case expect$g.parenL:
        (sent$n = this.start, sent$s = this.parseParenAndDistinguishExpression(sent$i, sent$t));
        return (sent$e && (sent$e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(sent$s) && (sent$e.parenthesizedAssign = sent$n), sent$e.parenthesizedBind < 0) && (sent$e.parenthesizedBind = sent$n), sent$s);
      case expect$g.bracketL:
        return (sent$c = this.startNode(), this.next(), sent$c.elements = this.parseExprList(expect$g.bracketR, !0, !0, sent$e), this.finishNode(sent$c, "ArrayExpression"));
      case expect$g.braceL:
        return (this.overrideContext(thisYieldPos$d.b_expr), this.parseObj(!1, sent$e));
      case expect$g._function:
        return (sent$c = this.startNode(), this.next(), this.parseFunction(sent$c, 0));
      case expect$g._class:
        return this.parseClass(this.startNode(), !1);
      case expect$g._new:
        return this.parseNew();
      case expect$g.backQuote:
        return this.parseTemplate();
      case expect$g._import:
        return 11 <= this.options.ecmaVersion ? this.parseExprImport(sent$r) : this.unexpected();
      default:
        return this.parseExprAtomDefault();
    }
  }, sent$e.parseExprAtomDefault = function $parseExprAtomDefault() {
    this.unexpected();
  }, sent$e.parseExprImport = function $parseExprImport(sent$e) {
    var sent$t = this.startNode();
    return (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type !== expect$g.parenL || sent$e ? this.type === expect$g.dot ? ((sent$e = this.startNodeAt(sent$t.start, sent$t.loc && sent$t.loc.start)).name = "import", sent$t.meta = this.finishNode(sent$e, "Identifier"), this.parseImportMeta(sent$t)) : void this.unexpected() : this.parseDynamicImport(sent$t));
  }, sent$e.parseDynamicImport = function $parseDynamicImport(sent$e) {
    var sent$t;
    return (this.next(), sent$e.source = this.parseMaybeAssign(), 16 <= this.options.ecmaVersion ? this.eat(expect$g.parenR) || (this.expect(expect$g.comma), this.afterTrailingComma(expect$g.parenR)) ? sent$e.options = null : (sent$e.options = this.parseMaybeAssign(), this.eat(expect$g.parenR) || (this.expect(expect$g.comma), this.afterTrailingComma(expect$g.parenR)) || this.unexpected()) : this.eat(expect$g.parenR) || (sent$t = this.start, this.eat(expect$g.comma) && this.eat(expect$g.parenR) ? this.raiseRecoverable(sent$t, "Trailing comma is not allowed in import()") : this.unexpected(sent$t)), this.finishNode(sent$e, "ImportExpression"));
  }, sent$e.parseImportMeta = function $parseImportMeta(sent$e) {
    this.next();
    var sent$t = this.containsEsc;
    return (sent$e.property = this.parseIdent(!0), "meta" !== sent$e.property.name && this.raiseRecoverable(sent$e.property.start, "The only valid meta property for import is 'import.meta'"), sent$t && this.raiseRecoverable(sent$e.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(sent$e.start, "Cannot use 'import.meta' outside a module"), this.finishNode(sent$e, "MetaProperty"));
  }, sent$e.parseLiteral = function $parseLiteral(sent$e) {
    var sent$t = this.startNode();
    return (sent$t.value = sent$e, sent$t.raw = this.input.slice(this.start, this.end), 110 === sent$t.raw.charCodeAt(sent$t.raw.length - 1) && (sent$t.bigint = sent$t.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(sent$t, "Literal"));
  }, sent$e.parseParenExpression = function $parseParenExpression() {
    this.expect(expect$g.parenL);
    var sent$e = this.parseExpression();
    return (this.expect(expect$g.parenR), sent$e);
  }, sent$e.shouldParseArrow = function $shouldParseArrow(sent$e) {
    return !this.canInsertSemicolon();
  }, sent$e.parseParenAndDistinguishExpression = function $parseParenAndDistinguishExpression(sent$e, sent$t) {
    var sent$r, sent$i = this.start,
      sent$n = this.startLoc,
      sent$s = 8 <= this.options.ecmaVersion;
    if (6 <= this.options.ecmaVersion) {
      this.next();
      var onlyBlock$a, sent$o = this.start,
        sent$c = this.startLoc,
        sent$h = [],
        sent$l = !0,
        push$u = !1,
        LABEL$p = new privateNameStack$Re(),
        thisYieldPos$d = this.yieldPos,
        ObjectGetOwnPropertyDescriptor$q$f = this.awaitPos;
      for ((this.yieldPos = 0, this.awaitPos = 0); this.type !== expect$g.parenR;) {
        if ((sent$l ? sent$l = !1 : this.expect(expect$g.comma), sent$s && this.afterTrailingComma(expect$g.parenR, !0))) {
          push$u = !0;
          break;
        }
        if (this.type === expect$g.ellipsis) {
          (onlyBlock$a = this.start, sent$h.push(this.parseParenItem(this.parseRestBinding())), this.type === expect$g.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"));
          break;
        }
        sent$h.push(this.parseMaybeAssign(!1, LABEL$p, this.parseParenItem));
      }
      var find$m = this.lastTokEnd,
        thisLastTokEndLoc$y = this.lastTokEndLoc;
      if ((this.expect(expect$g.parenR), sent$e && this.shouldParseArrow(sent$h) && this.eat(expect$g.arrow))) return (this.checkPatternErrors(LABEL$p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = thisYieldPos$d, this.awaitPos = ObjectGetOwnPropertyDescriptor$q$f, this.parseParenArrowList(sent$i, sent$n, sent$h, sent$t));
      (sent$h.length && !push$u || this.unexpected(this.lastTokStart), onlyBlock$a && this.unexpected(onlyBlock$a), this.checkExpressionErrors(LABEL$p, !0), this.yieldPos = thisYieldPos$d || this.yieldPos, this.awaitPos = ObjectGetOwnPropertyDescriptor$q$f || this.awaitPos, 1 < sent$h.length ? ((sent$r = this.startNodeAt(sent$o, sent$c)).expressions = sent$h, this.finishNodeAt(sent$r, "SequenceExpression", find$m, thisLastTokEndLoc$y)) : sent$r = sent$h[0]);
    } else sent$r = this.parseParenExpression();
    return this.options.preserveParens ? ((sent$e = this.startNodeAt(sent$i, sent$n)).expression = sent$r, this.finishNode(sent$e, "ParenthesizedExpression")) : sent$r;
  }, sent$e.parseParenItem = function $parseParenItem(sent$e) {
    return sent$e;
  }, sent$e.parseParenArrowList = function $parseParenArrowList(sent$e, sent$t, sent$r, sent$i) {
    return this.parseArrowExpression(this.startNodeAt(sent$e, sent$t), sent$r, !1, sent$i);
  });

  function startNodeAt$We(sent$e) {
    (this.flags = sent$e, this.var = [], this.lexical = [], this.functions = [], this.inClassFieldInit = !1);
  }

  function inClassFieldInit$Ge(sent$e, sent$t, sent$r) {
    (this.type = "", this.start = sent$t, this.end = 0, sent$e.options.locations && (this.loc = new locations$Ae(sent$e, sent$r)), sent$e.options.directSourceFile && (this.sourceFile = sent$e.options.directSourceFile), sent$e.options.ranges && (this.range = [sent$t, 0]));
  }
  var arguments$He = [],
    sent$e = (sent$e.parseNew = function $parseNew() {
      this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      var sent$e, sent$t, sent$r = this.startNode();
      return (this.next(), 6 <= this.options.ecmaVersion && this.type === expect$g.dot ? ((sent$e = this.startNodeAt(sent$r.start, sent$r.loc && sent$r.loc.start)).name = "new", sent$r.meta = this.finishNode(sent$e, "Identifier"), this.next(), sent$e = this.containsEsc, sent$r.property = this.parseIdent(!0), "target" !== sent$r.property.name && this.raiseRecoverable(sent$r.property.start, "The only valid meta property for new is 'new.target'"), sent$e && this.raiseRecoverable(sent$r.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(sent$r.start, "'new.target' can only be used in functions and class static block"), this.finishNode(sent$r, "MetaProperty")) : (sent$e = this.start, sent$t = this.startLoc, sent$r.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), sent$e, sent$t, !0, !1), this.eat(expect$g.parenL) ? sent$r.arguments = this.parseExprList(expect$g.parenR, 8 <= this.options.ecmaVersion, !1) : sent$r.arguments = arguments$He, this.finishNode(sent$r, "NewExpression")));
    }, sent$e.parseTemplateElement = function $parseTemplateElement(sent$e) {
      var sent$e = sent$e.isTagged,
        sent$t = this.startNode();
      return (this.type === expect$g.invalidTemplate ? (sent$e || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), sent$t.value = {
        raw: this.value.replace(/\r\n?/g, "\n"),
        cooked: null
      }) : sent$t.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      }, this.next(), sent$t.tail = this.type === expect$g.backQuote, this.finishNode(sent$t, "TemplateElement"));
    }, sent$e.parseTemplate = function $parseTemplate(sent$e) {
      var sent$t = (sent$e = void 0 === sent$e ? {} : sent$e).isTagged,
        sent$r = (void 0 === sent$t && (sent$t = !1), this.startNode()),
        sent$i = (this.next(), sent$r.expressions = [], this.parseTemplateElement({
          isTagged: sent$t
        }));
      for (sent$r.quasis = [sent$i]; !sent$i.tail;)(this.type === expect$g.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(expect$g.dollarBraceL), sent$r.expressions.push(this.parseExpression()), this.expect(expect$g.braceR), sent$r.quasis.push(sent$i = this.parseTemplateElement({
        isTagged: sent$t
      })));
      return (this.next(), this.finishNode(sent$r, "TemplateLiteral"));
    }, sent$e.isAsyncProp = function $isAsyncProp(sent$e) {
      return !sent$e.computed && "Identifier" === sent$e.key.type && "async" === sent$e.key.name && (this.type === expect$g.name || this.type === expect$g.num || this.type === expect$g.string || this.type === expect$g.bracketL || this.type.keyword || 9 <= this.options.ecmaVersion && this.type === expect$g.star) && !sent$o.test(this.input.slice(this.lastTokEnd, this.start));
    }, sent$e.parseObj = function $parseObj(sent$e, sent$t) {
      var sent$r = this.startNode(),
        sent$i = !0,
        sent$n = {};
      for ((sent$r.properties = [], this.next()); !this.eat(expect$g.braceR);) {
        if (sent$i) sent$i = !1;
        else if ((this.expect(expect$g.comma), 5 <= this.options.ecmaVersion && this.afterTrailingComma(expect$g.braceR))) break;
        var sent$s = this.parseProperty(sent$e, sent$t);
        (sent$e || this.checkPropClash(sent$s, sent$n, sent$t), sent$r.properties.push(sent$s));
      }
      return this.finishNode(sent$r, sent$e ? "ObjectPattern" : "ObjectExpression");
    }, sent$e.parseProperty = function $parseProperty(sent$e, sent$t) {
      var sent$r, sent$i, sent$n, sent$s, onlyBlock$a = this.startNode();
      if (9 <= this.options.ecmaVersion && this.eat(expect$g.ellipsis)) return sent$e ? (onlyBlock$a.argument = this.parseIdent(!1), this.type === expect$g.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(onlyBlock$a, "RestElement")) : (onlyBlock$a.argument = this.parseMaybeAssign(!1, sent$t), this.type === expect$g.comma && sent$t && sent$t.trailingComma < 0 && (sent$t.trailingComma = this.start), this.finishNode(onlyBlock$a, "SpreadElement"));
      6 <= this.options.ecmaVersion && (onlyBlock$a.method = !1, onlyBlock$a.shorthand = !1, (sent$e || sent$t) && (sent$n = this.start, sent$s = this.startLoc), sent$e || (sent$r = this.eat(expect$g.star)));
      var sent$o = this.containsEsc;
      return (this.parsePropertyName(onlyBlock$a), !sent$e && !sent$o && 8 <= this.options.ecmaVersion && !sent$r && this.isAsyncProp(onlyBlock$a) ? (sent$i = !0, sent$r = 9 <= this.options.ecmaVersion && this.eat(expect$g.star), this.parsePropertyName(onlyBlock$a)) : sent$i = !1, this.parsePropertyValue(onlyBlock$a, sent$e, sent$r, sent$i, sent$n, sent$s, sent$t, sent$o), this.finishNode(onlyBlock$a, "Property"));
    }, sent$e.parseGetterSetter = function $parseGetterSetter(sent$e) {
      (sent$e.kind = sent$e.key.name, this.parsePropertyName(sent$e), sent$e.value = this.parseMethod(!1));
      var sent$t = "get" === sent$e.kind ? 0 : 1;
      sent$e.value.params.length !== sent$t ? (sent$t = sent$e.value.start, "get" === sent$e.kind ? this.raiseRecoverable(sent$t, "getter should have no params") : this.raiseRecoverable(sent$t, "setter should have exactly one param")) : "set" === sent$e.kind && "RestElement" === sent$e.value.params[0].type && this.raiseRecoverable(sent$e.value.params[0].start, "Setter cannot use rest params");
    }, sent$e.parsePropertyValue = function $parsePropertyValue(sent$e, sent$t, sent$r, sent$i, sent$n, sent$s, onlyBlock$a, sent$o) {
      ((sent$r || sent$i) && this.type === expect$g.colon && this.unexpected(), this.eat(expect$g.colon) ? (sent$e.value = sent$t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, onlyBlock$a), sent$e.kind = "init") : 6 <= this.options.ecmaVersion && this.type === expect$g.parenL ? (sent$t && this.unexpected(), sent$e.kind = "init", sent$e.method = !0, sent$e.value = this.parseMethod(sent$r, sent$i)) : sent$t || sent$o || !(5 <= this.options.ecmaVersion) || sent$e.computed || "Identifier" !== sent$e.key.type || "get" !== sent$e.key.name && "set" !== sent$e.key.name || this.type === expect$g.comma || this.type === expect$g.braceR || this.type === expect$g.eq ? 6 <= this.options.ecmaVersion && !sent$e.computed && "Identifier" === sent$e.key.type ? ((sent$r || sent$i) && this.unexpected(), this.checkUnreserved(sent$e.key), "await" !== sent$e.key.name || this.awaitIdentPos || (this.awaitIdentPos = sent$n), sent$e.kind = "init", sent$t ? sent$e.value = this.parseMaybeDefault(sent$n, sent$s, this.copyNode(sent$e.key)) : this.type === expect$g.eq && onlyBlock$a ? (onlyBlock$a.shorthandAssign < 0 && (onlyBlock$a.shorthandAssign = this.start), sent$e.value = this.parseMaybeDefault(sent$n, sent$s, this.copyNode(sent$e.key))) : sent$e.value = this.copyNode(sent$e.key), sent$e.shorthand = !0) : this.unexpected() : ((sent$r || sent$i) && this.unexpected(), this.parseGetterSetter(sent$e)));
    }, sent$e.parsePropertyName = function $parsePropertyName(sent$e) {
      if (6 <= this.options.ecmaVersion) {
        if (this.eat(expect$g.bracketL)) return (sent$e.computed = !0, sent$e.key = this.parseMaybeAssign(), this.expect(expect$g.bracketR), sent$e.key);
        sent$e.computed = !1;
      }
      return sent$e.key = this.type === expect$g.num || this.type === expect$g.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved);
    }, sent$e.initFunction = function $initFunction(sent$e) {
      (sent$e.id = null, 6 <= this.options.ecmaVersion && (sent$e.generator = sent$e.expression = !1), 8 <= this.options.ecmaVersion && (sent$e.async = !1));
    }, sent$e.parseMethod = function $parseMethod(sent$e, sent$t, sent$r) {
      var sent$i = this.startNode(),
        sent$n = this.yieldPos,
        sent$s = this.awaitPos,
        onlyBlock$a = this.awaitIdentPos;
      return (this.initFunction(sent$i), 6 <= this.options.ecmaVersion && (sent$i.generator = sent$e), 8 <= this.options.ecmaVersion && (sent$i.async = !!sent$t), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | enterScope$Be(sent$t, sent$i.generator) | (sent$r ? 128 : 0)), this.expect(expect$g.parenL), sent$i.params = this.parseBindingList(expect$g.parenR, !1, 8 <= this.options.ecmaVersion), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(sent$i, !1, !0, !1), this.yieldPos = sent$n, this.awaitPos = sent$s, this.awaitIdentPos = onlyBlock$a, this.finishNode(sent$i, "FunctionExpression"));
    }, sent$e.parseArrowExpression = function $parseArrowExpression(sent$e, sent$t, sent$r, sent$i) {
      var sent$n = this.yieldPos,
        sent$s = this.awaitPos,
        onlyBlock$a = this.awaitIdentPos;
      return (this.enterScope(16 | enterScope$Be(sent$r, !1)), this.initFunction(sent$e), 8 <= this.options.ecmaVersion && (sent$e.async = !!sent$r), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, sent$e.params = this.toAssignableList(sent$t, !0), this.parseFunctionBody(sent$e, !0, !1, sent$i), this.yieldPos = sent$n, this.awaitPos = sent$s, this.awaitIdentPos = onlyBlock$a, this.finishNode(sent$e, "ArrowFunctionExpression"));
    }, sent$e.parseFunctionBody = function $parseFunctionBody(sent$e, sent$t, sent$r, sent$i) {
      var sent$n = sent$t && this.type !== expect$g.braceL,
        sent$s = this.strict,
        onlyBlock$a = !1;
      (sent$n ? (sent$e.body = this.parseMaybeAssign(sent$i), sent$e.expression = !0, this.checkParams(sent$e, !1)) : (sent$n = 7 <= this.options.ecmaVersion && !this.isSimpleParamList(sent$e.params), sent$s && !sent$n || (onlyBlock$a = this.strictDirective(this.end)) && sent$n && this.raiseRecoverable(sent$e.start, "Illegal 'use strict' directive in function with non-simple parameter list"), sent$i = this.labels, this.labels = [], onlyBlock$a && (this.strict = !0), this.checkParams(sent$e, !sent$s && !onlyBlock$a && !sent$t && !sent$r && this.isSimpleParamList(sent$e.params)), this.strict && sent$e.id && this.checkLValSimple(sent$e.id, 5), sent$e.body = this.parseBlock(!1, void 0, onlyBlock$a && !sent$s), sent$e.expression = !1, this.adaptDirectivePrologue(sent$e.body.body), this.labels = sent$i), this.exitScope());
    }, sent$e.isSimpleParamList = function $isSimpleParamList(sent$e) {
      for (var sent$t = 0, sent$r = sent$e; sent$t < sent$r.length; sent$t += 1)
        if ("Identifier" !== sent$r[sent$t].type) return !1;
      return !0;
    }, sent$e.checkParams = function $checkParams(sent$e, sent$t) {
      for (var sent$r = Object.create(null), sent$i = 0, sent$n = sent$e.params; sent$i < sent$n.length; sent$i += 1) {
        var sent$s = sent$n[sent$i];
        this.checkLValInnerPattern(sent$s, 1, sent$t ? null : sent$r);
      }
    }, sent$e.parseExprList = function $parseExprList(sent$e, sent$t, sent$r, sent$i) {
      for (var sent$n = [], sent$s = !0; !this.eat(sent$e);) {
        if (sent$s) sent$s = !1;
        else if ((this.expect(expect$g.comma), sent$t && this.afterTrailingComma(sent$e))) break;
        var onlyBlock$a = void 0;
        (sent$r && this.type === expect$g.comma ? onlyBlock$a = null : this.type === expect$g.ellipsis ? (onlyBlock$a = this.parseSpread(sent$i), sent$i && this.type === expect$g.comma && sent$i.trailingComma < 0 && (sent$i.trailingComma = this.start)) : onlyBlock$a = this.parseMaybeAssign(!1, sent$i), sent$n.push(onlyBlock$a));
      }
      return sent$n;
    }, sent$e.checkUnreserved = function $checkUnreserved(sent$e) {
      var sent$t = sent$e.start,
        sent$r = sent$e.end,
        sent$e = sent$e.name;
      (this.inGenerator && "yield" === sent$e && this.raiseRecoverable(sent$t, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === sent$e && this.raiseRecoverable(sent$t, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().inClassFieldInit && "arguments" === sent$e && this.raiseRecoverable(sent$t, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== sent$e && "await" !== sent$e || this.raise(sent$t, "Cannot use " + sent$e + " in class static initialization block"), this.keywords.test(sent$e) && this.raise(sent$t, "Unexpected keyword '" + sent$e + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(sent$t, sent$r).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(sent$e) && (this.inAsync || "await" !== sent$e || this.raiseRecoverable(sent$t, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(sent$t, "The keyword '" + sent$e + "' is reserved")));
    }, sent$e.parseIdent = function $parseIdent(sent$e) {
      var sent$t = this.parseIdentNode();
      return (this.next(!!sent$e), this.finishNode(sent$t, "Identifier"), sent$e || (this.checkUnreserved(sent$t), "await" !== sent$t.name) || this.awaitIdentPos || (this.awaitIdentPos = sent$t.start), sent$t);
    }, sent$e.parseIdentNode = function $parseIdentNode() {
      var sent$e = this.startNode();
      return (this.type === expect$g.name ? sent$e.name = this.value : this.type.keyword ? (sent$e.name = this.type.keyword, "class" !== sent$e.name && "function" !== sent$e.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = expect$g.name) : this.unexpected(), sent$e);
    }, sent$e.parsePrivateIdent = function $parsePrivateIdent() {
      var sent$e = this.startNode();
      return (this.type === expect$g.privateId ? sent$e.name = this.value : this.unexpected(), this.next(), this.finishNode(sent$e, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(sent$e.start, "Private field '#" + sent$e.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(sent$e)), sent$e);
    }, sent$e.parseYield = function $parseYield(sent$e) {
      this.yieldPos || (this.yieldPos = this.start);
      var sent$t = this.startNode();
      return (this.next(), this.type === expect$g.semi || this.canInsertSemicolon() || this.type !== expect$g.star && !this.type.startsExpr ? (sent$t.delegate = !1, sent$t.argument = null) : (sent$t.delegate = this.eat(expect$g.star), sent$t.argument = this.parseMaybeAssign(sent$e)), this.finishNode(sent$t, "YieldExpression"));
    }, sent$e.parseAwait = function $parseAwait(sent$e) {
      this.awaitPos || (this.awaitPos = this.start);
      var sent$t = this.startNode();
      return (this.next(), sent$t.argument = this.parseMaybeUnary(null, !0, !1, sent$e), this.finishNode(sent$t, "AwaitExpression"));
    }, sent$l.prototype),
    sent$e = (sent$e.raise = function $raise(sent$e, sent$t) {
      var sent$r = getLineInfo$Le(this.input, sent$e),
        sent$t = (sent$t += " (" + sent$r.line + ":" + sent$r.column + ")", new SyntaxError(sent$t));
      throw (sent$t.pos = sent$e, sent$t.loc = sent$r, sent$t.raisedAt = this.pos, sent$t);
    }, sent$e.raiseRecoverable = sent$e.raise, sent$e.curPosition = function $curPosition() {
      if (this.options.locations) return new allowReturnOutsideFunction$Ie(this.curLine, this.pos - this.lineStart);
    }, sent$l.prototype),
    sent$e = (sent$e.enterScope = function $enterScope(sent$e) {
      this.scopeStack.push(new startNodeAt$We(sent$e));
    }, sent$e.exitScope = function $exitScope() {
      this.scopeStack.pop();
    }, sent$e.treatFunctionsAsVarInScope = function $treatFunctionsAsVarInScope(sent$e) {
      return 2 & sent$e.flags || !this.inModule && 1 & sent$e.flags;
    }, sent$e.declareName = function $declareName(sent$e, sent$t, sent$r) {
      var sent$i = !1;
      if (2 === sent$t) {
        var sent$n = this.currentScope(),
          sent$i = -1 < sent$n.lexical.indexOf(sent$e) || -1 < sent$n.functions.indexOf(sent$e) || -1 < sent$n.var.indexOf(sent$e);
        (sent$n.lexical.push(sent$e), this.inModule && 1 & sent$n.flags && delete this.undefinedExports[sent$e]);
      } else if (4 === sent$t) this.currentScope().lexical.push(sent$e);
      else if (3 === sent$t) {
        sent$n = this.currentScope();
        (sent$i = this.treatFunctionsAsVar ? -1 < sent$n.lexical.indexOf(sent$e) : -1 < sent$n.lexical.indexOf(sent$e) || -1 < sent$n.var.indexOf(sent$e), sent$n.functions.push(sent$e));
      } else
        for (var sent$s = this.scopeStack.length - 1; 0 <= sent$s; --sent$s) {
          var onlyBlock$a = this.scopeStack[sent$s];
          if (-1 < onlyBlock$a.lexical.indexOf(sent$e) && !(32 & onlyBlock$a.flags && onlyBlock$a.lexical[0] === sent$e) || !this.treatFunctionsAsVarInScope(onlyBlock$a) && -1 < onlyBlock$a.functions.indexOf(sent$e)) {
            sent$i = !0;
            break;
          }
          if ((onlyBlock$a.var.push(sent$e), this.inModule && 1 & onlyBlock$a.flags && delete this.undefinedExports[sent$e], 259 & onlyBlock$a.flags)) break;
        }
      sent$i && this.raiseRecoverable(sent$r, "Identifier '" + sent$e + "' has already been declared");
    }, sent$e.checkLocalExport = function $checkLocalExport(sent$e) {
      -1 === this.scopeStack[0].lexical.indexOf(sent$e.name) && -1 === this.scopeStack[0].var.indexOf(sent$e.name) && (this.undefinedExports[sent$e.name] = sent$e);
    }, sent$e.currentScope = function $currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }, sent$e.currentVarScope = function $currentVarScope() {
      for (var sent$e = this.scopeStack.length - 1;; sent$e--) {
        var sent$t = this.scopeStack[sent$e];
        if (259 & sent$t.flags) return sent$t;
      }
    }, sent$e.currentThisScope = function $currentThisScope() {
      for (var sent$e = this.scopeStack.length - 1;; sent$e--) {
        var sent$t = this.scopeStack[sent$e];
        if (259 & sent$t.flags && !(16 & sent$t.flags)) return sent$t;
      }
    }, sent$l.prototype);

  function finishNodeAt$ze(sent$e, sent$t, sent$r, sent$i) {
    return (sent$e.type = sent$t, sent$e.end = sent$r, this.options.locations && (sent$e.loc.end = sent$i), this.options.ranges && (sent$e.range[1] = sent$r), sent$e);
  }
  (sent$e.startNode = function $startNode() {
    return new inClassFieldInit$Ge(this, this.start, this.startLoc);
  }, sent$e.startNodeAt = function $startNodeAt(sent$e, sent$t) {
    return new inClassFieldInit$Ge(this, sent$e, sent$t);
  }, sent$e.finishNode = function $finishNode(sent$e, sent$t) {
    return finishNodeAt$ze.call(this, sent$e, sent$t, this.lastTokEnd, this.lastTokEndLoc);
  }, sent$e.finishNodeAt = function $finishNodeAt(sent$e, sent$t, sent$r, sent$i) {
    return finishNodeAt$ze.call(this, sent$e, sent$t, sent$r, sent$i);
  }, sent$e.copyNode = function $copyNode(sent$e) {
    var sent$t, sent$r = new inClassFieldInit$Ge(this, sent$e.start, this.startLoc);
    for (sent$t in sent$e) sent$r[sent$t] = sent$e[sent$t];
    return sent$r;
  });
  var sent$e = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
    thisLastTokEndLoc$y = sent$e + " Extended_Pictographic",
    startLoc$Ke = thisLastTokEndLoc$y + " EBase EComp EMod EPres ExtPict",
    binary$Qe = {
      9: sent$e,
      10: thisLastTokEndLoc$y,
      11: thisLastTokEndLoc$y,
      12: startLoc$Ke,
      13: startLoc$Ke,
      14: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"
    },
    binaryOfStrings$Xe = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
    },
    Cased_Letter$Ye = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
    sent$e = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
    thisLastTokEndLoc$y = sent$e + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
    startLoc$Ke = thisLastTokEndLoc$y + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
    startLoc$Ze = startLoc$Ke + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
    startLoc$Je = startLoc$Ze + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
    Script$$e = {
      9: sent$e,
      10: thisLastTokEndLoc$y,
      11: startLoc$Ke,
      12: startLoc$Ze,
      13: startLoc$Je,
      14: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz"
    },
    startLoc$et = {};
  for (var nonBinary$x, startLoc$tt = 0, startLoc$rt = [9, 10, 11, 12, 13, 14]; startLoc$tt < startLoc$rt.length; startLoc$tt += 1)((nonBinary$x = startLoc$et[nonBinary$x = startLoc$rt[startLoc$tt]] = {
    binary: reservedWordsStrictBind$Ce(binary$Qe[nonBinary$x] + " " + Cased_Letter$Ye),
    binaryOfStrings: reservedWordsStrictBind$Ce(binaryOfStrings$Xe[nonBinary$x]),
    nonBinary: {
      General_Category: reservedWordsStrictBind$Ce(Cased_Letter$Ye),
      Script: reservedWordsStrictBind$Ce(Script$$e[nonBinary$x])
    }
  }).nonBinary.Script_Extensions = nonBinary$x.nonBinary.Script, nonBinary$x.nonBinary.gc = nonBinary$x.nonBinary.General_Category, nonBinary$x.nonBinary.sc = nonBinary$x.nonBinary.Script, nonBinary$x.nonBinary.scx = nonBinary$x.nonBinary.Script_Extensions);

  function branchID$it(sent$e, sent$t) {
    (this.parent = sent$e, this.base = sent$t || this);
  }

  function charCodeAt$w(sent$e) {
    (this.parser = sent$e, this.validFlags = "gim" + (6 <= sent$e.options.ecmaVersion ? "uy" : "") + (9 <= sent$e.options.ecmaVersion ? "s" : "") + (13 <= sent$e.options.ecmaVersion ? "d" : "") + (15 <= sent$e.options.ecmaVersion ? "v" : ""), this.unicodeProperties = startLoc$et[14 <= sent$e.options.ecmaVersion ? 14 : sent$e.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null);
  }
  sent$e = sent$l.prototype;
  (branchID$it.prototype.separatedFrom = function $separatedFrom(sent$e) {
    for (var sent$t = this; sent$t; sent$t = sent$t.parent)
      for (var sent$r = sent$e; sent$r; sent$r = sent$r.parent)
        if (sent$t.base === sent$r.base && sent$t !== sent$r) return !0;
    return !1;
  }, branchID$it.prototype.sibling = function $sibling() {
    return new branchID$it(this.parent, this.base);
  });

  function current$nt(sent$e) {
    return 36 === sent$e || 40 <= sent$e && sent$e <= 43 || 46 === sent$e || 63 === sent$e || 91 <= sent$e && sent$e <= 94 || 123 <= sent$e && sent$e <= 125;
  }

  function current$st(sent$e) {
    return 65 <= sent$e && sent$e <= 90 || 97 <= sent$e && sent$e <= 122;
  }
  (charCodeAt$w.prototype.reset = function $reset(sent$e, sent$t, sent$r) {
    var sent$i = -1 !== sent$r.indexOf("v"),
      sent$n = -1 !== sent$r.indexOf("u");
    (this.start = 0 | sent$e, this.source = sent$t + "", this.flags = sent$r, sent$i && 15 <= this.parser.options.ecmaVersion ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = sent$n && 6 <= this.parser.options.ecmaVersion, this.switchV = !1, this.switchN = sent$n && 9 <= this.parser.options.ecmaVersion));
  }, charCodeAt$w.prototype.raise = function $raise(sent$e) {
    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + sent$e);
  }, charCodeAt$w.prototype.at = function $at(sent$e, sent$t) {
    void 0 === sent$t && (sent$t = !1);
    var sent$r, sent$i = this.source,
      sent$n = sent$i.length;
    return sent$n <= sent$e ? -1 : (sent$r = sent$i.charCodeAt(sent$e), !(!sent$t && !this.switchU || sent$r <= 55295 || 57344 <= sent$r || sent$n <= sent$e + 1) && 56320 <= (sent$t = sent$i.charCodeAt(sent$e + 1)) && sent$t <= 57343 ? (sent$r << 10) + sent$t - 56613888 : sent$r);
  }, charCodeAt$w.prototype.nextIndex = function $nextIndex(sent$e, sent$t) {
    void 0 === sent$t && (sent$t = !1);
    var sent$r, sent$i = this.source,
      sent$n = sent$i.length;
    return sent$n <= sent$e ? sent$n : (sent$r = sent$i.charCodeAt(sent$e), !sent$t && !this.switchU || sent$r <= 55295 || 57344 <= sent$r || sent$n <= sent$e + 1 || (sent$t = sent$i.charCodeAt(sent$e + 1)) < 56320 || 57343 < sent$t ? sent$e + 1 : sent$e + 2);
  }, charCodeAt$w.prototype.current = function $current(sent$e) {
    return this.at(this.pos, sent$e = void 0 === sent$e ? !1 : sent$e);
  }, charCodeAt$w.prototype.lookahead = function $lookahead(sent$e) {
    return this.at(this.nextIndex(this.pos, sent$e = void 0 === sent$e ? !1 : sent$e), sent$e);
  }, charCodeAt$w.prototype.advance = function $advance(sent$e) {
    this.pos = this.nextIndex(this.pos, sent$e = void 0 === sent$e ? !1 : sent$e);
  }, charCodeAt$w.prototype.eat = function $eat(sent$e, sent$t) {
    return this.current(sent$t = void 0 === sent$t ? !1 : sent$t) === sent$e && (this.advance(sent$t), !0);
  }, charCodeAt$w.prototype.eatChars = function $eatChars(sent$e, sent$t) {
    void 0 === sent$t && (sent$t = !1);
    for (var sent$r = this.pos, sent$i = 0, sent$n = sent$e; sent$i < sent$n.length; sent$i += 1) {
      var sent$s = sent$n[sent$i],
        onlyBlock$a = this.at(sent$r, sent$t);
      if (-1 === onlyBlock$a || onlyBlock$a !== sent$s) return !1;
      sent$r = this.nextIndex(sent$r, sent$t);
    }
    return (this.pos = sent$r, !0);
  }, sent$e.validateRegExpFlags = function $validateRegExpFlags(sent$e) {
    for (var sent$t = sent$e.validFlags, sent$r = sent$e.flags, sent$i = !1, sent$n = !1, sent$s = 0; sent$s < sent$r.length; sent$s++) {
      var onlyBlock$a = sent$r.charAt(sent$s);
      (-1 === sent$t.indexOf(onlyBlock$a) && this.raise(sent$e.start, "Invalid regular expression flag"), -1 < sent$r.indexOf(onlyBlock$a, sent$s + 1) && this.raise(sent$e.start, "Duplicate regular expression flag"), "u" === onlyBlock$a && (sent$i = !0), "v" === onlyBlock$a && (sent$n = !0));
    }
    15 <= this.options.ecmaVersion && sent$i && sent$n && this.raise(sent$e.start, "Invalid regular expression flag");
  }, sent$e.validateRegExpPattern = function $validateRegExpPattern(sent$e) {
    (this.regexp_pattern(sent$e), !sent$e.switchN && 9 <= this.options.ecmaVersion && (function(sent$e) {
      for (var sent$t in sent$e) return 1;
    })(sent$e.groupNames) && (sent$e.switchN = !0, this.regexp_pattern(sent$e)));
  }, sent$e.regexp_pattern = function $regexp_pattern(sent$e) {
    (sent$e.pos = 0, sent$e.lastIntValue = 0, sent$e.lastStringValue = "", sent$e.lastAssertionIsQuantifiable = !1, sent$e.numCapturingParens = 0, sent$e.maxBackReference = 0, sent$e.groupNames = Object.create(null), sent$e.backReferenceNames.length = 0, sent$e.branchID = null, this.regexp_disjunction(sent$e), sent$e.pos !== sent$e.source.length && (sent$e.eat(41) && sent$e.raise("Unmatched ')'"), sent$e.eat(93) || sent$e.eat(125)) && sent$e.raise("Lone quantifier brackets"), sent$e.maxBackReference > sent$e.numCapturingParens && sent$e.raise("Invalid escape"));
    for (var sent$t = 0, sent$r = sent$e.backReferenceNames; sent$t < sent$r.length; sent$t += 1) {
      var sent$i = sent$r[sent$t];
      sent$e.groupNames[sent$i] || sent$e.raise("Invalid named capture referenced");
    }
  }, sent$e.regexp_disjunction = function $regexp_disjunction(sent$e) {
    var sent$t = 16 <= this.options.ecmaVersion;
    for ((sent$t && (sent$e.branchID = new branchID$it(sent$e.branchID, null)), this.regexp_alternative(sent$e)); sent$e.eat(124);)(sent$t && (sent$e.branchID = sent$e.branchID.sibling()), this.regexp_alternative(sent$e));
    (sent$t && (sent$e.branchID = sent$e.branchID.parent), this.regexp_eatQuantifier(sent$e, !0) && sent$e.raise("Nothing to repeat"), sent$e.eat(123) && sent$e.raise("Lone quantifier brackets"));
  }, sent$e.regexp_alternative = function $regexp_alternative(sent$e) {
    for (; sent$e.pos < sent$e.source.length && this.regexp_eatTerm(sent$e););
  }, sent$e.regexp_eatTerm = function $regexp_eatTerm(sent$e) {
    return this.regexp_eatAssertion(sent$e) ? (sent$e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(sent$e) && sent$e.switchU && sent$e.raise("Invalid quantifier"), !0) : !(sent$e.switchU ? !this.regexp_eatAtom(sent$e) : !this.regexp_eatExtendedAtom(sent$e)) && (this.regexp_eatQuantifier(sent$e), !0);
  }, sent$e.regexp_eatAssertion = function $regexp_eatAssertion(sent$e) {
    var sent$t = sent$e.pos;
    if ((sent$e.lastAssertionIsQuantifiable = !1, sent$e.eat(94) || sent$e.eat(36))) return !0;
    if (sent$e.eat(92)) {
      if (sent$e.eat(66) || sent$e.eat(98)) return !0;
      sent$e.pos = sent$t;
    }
    if (sent$e.eat(40) && sent$e.eat(63)) {
      var sent$r = !1;
      if ((9 <= this.options.ecmaVersion && (sent$r = sent$e.eat(60)), sent$e.eat(61) || sent$e.eat(33))) return (this.regexp_disjunction(sent$e), sent$e.eat(41) || sent$e.raise("Unterminated group"), sent$e.lastAssertionIsQuantifiable = !sent$r, !0);
    }
    return (sent$e.pos = sent$t, !1);
  }, sent$e.regexp_eatQuantifier = function $regexp_eatQuantifier(sent$e, sent$t) {
    return !!this.regexp_eatQuantifierPrefix(sent$e, sent$t = void 0 === sent$t ? !1 : sent$t) && (sent$e.eat(63), !0);
  }, sent$e.regexp_eatQuantifierPrefix = function $regexp_eatQuantifierPrefix(sent$e, sent$t) {
    return sent$e.eat(42) || sent$e.eat(43) || sent$e.eat(63) || this.regexp_eatBracedQuantifier(sent$e, sent$t);
  }, sent$e.regexp_eatBracedQuantifier = function $regexp_eatBracedQuantifier(sent$e, sent$t) {
    var sent$r = sent$e.pos;
    if (sent$e.eat(123)) {
      var sent$i, sent$n = -1;
      if (this.regexp_eatDecimalDigits(sent$e) && (sent$i = sent$e.lastIntValue, sent$e.eat(44) && this.regexp_eatDecimalDigits(sent$e) && (sent$n = sent$e.lastIntValue), sent$e.eat(125))) return (-1 !== sent$n && sent$n < sent$i && !sent$t && sent$e.raise("numbers out of order in {} quantifier"), !0);
      (sent$e.switchU && !sent$t && sent$e.raise("Incomplete quantifier"), sent$e.pos = sent$r);
    }
    return !1;
  }, sent$e.regexp_eatAtom = function $regexp_eatAtom(sent$e) {
    return this.regexp_eatPatternCharacters(sent$e) || sent$e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(sent$e) || this.regexp_eatCharacterClass(sent$e) || this.regexp_eatUncapturingGroup(sent$e) || this.regexp_eatCapturingGroup(sent$e);
  }, sent$e.regexp_eatReverseSolidusAtomEscape = function $regexp_eatReverseSolidusAtomEscape(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(92)) {
      if (this.regexp_eatAtomEscape(sent$e)) return !0;
      sent$e.pos = sent$t;
    }
    return !1;
  }, sent$e.regexp_eatUncapturingGroup = function $regexp_eatUncapturingGroup(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(40)) {
      if (sent$e.eat(63)) {
        if (16 <= this.options.ecmaVersion) {
          var sent$r = this.regexp_eatModifiers(sent$e),
            sent$i = sent$e.eat(45);
          if (sent$r || sent$i) {
            for (var sent$n = 0; sent$n < sent$r.length; sent$n++) {
              var sent$s = sent$r.charAt(sent$n); -
              1 < sent$r.indexOf(sent$s, sent$n + 1) && sent$e.raise("Duplicate regular expression modifiers");
            }
            if (sent$i) {
              var onlyBlock$a = this.regexp_eatModifiers(sent$e);
              sent$r || onlyBlock$a || 58 !== sent$e.current() || sent$e.raise("Invalid regular expression modifiers");
              for (var sent$o = 0; sent$o < onlyBlock$a.length; sent$o++) {
                var sent$c = onlyBlock$a.charAt(sent$o);
                (-1 < onlyBlock$a.indexOf(sent$c, sent$o + 1) || -1 < sent$r.indexOf(sent$c)) && sent$e.raise("Duplicate regular expression modifiers");
              }
            }
          }
        }
        if (sent$e.eat(58)) {
          if ((this.regexp_disjunction(sent$e), sent$e.eat(41))) return !0;
          sent$e.raise("Unterminated group");
        }
      }
      sent$e.pos = sent$t;
    }
    return !1;
  }, sent$e.regexp_eatCapturingGroup = function $regexp_eatCapturingGroup(sent$e) {
    if (sent$e.eat(40)) {
      if ((9 <= this.options.ecmaVersion ? this.regexp_groupSpecifier(sent$e) : 63 === sent$e.current() && sent$e.raise("Invalid group"), this.regexp_disjunction(sent$e), sent$e.eat(41))) return (sent$e.numCapturingParens += 1, !0);
      sent$e.raise("Unterminated group");
    }
    return !1;
  }, sent$e.regexp_eatModifiers = function $regexp_eatModifiers(sent$e) {
    for (var sent$t, sent$r, sent$i = ""; - 1 !== (sent$t = sent$e.current()) && (105 === (sent$r = sent$t) || 109 === sent$r || 115 === sent$r);)(sent$i += sent$h(sent$t), sent$e.advance());
    return sent$i;
  }, sent$e.regexp_eatExtendedAtom = function $regexp_eatExtendedAtom(sent$e) {
    return sent$e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(sent$e) || this.regexp_eatCharacterClass(sent$e) || this.regexp_eatUncapturingGroup(sent$e) || this.regexp_eatCapturingGroup(sent$e) || this.regexp_eatInvalidBracedQuantifier(sent$e) || this.regexp_eatExtendedPatternCharacter(sent$e);
  }, sent$e.regexp_eatInvalidBracedQuantifier = function $regexp_eatInvalidBracedQuantifier(sent$e) {
    return (this.regexp_eatBracedQuantifier(sent$e, !0) && sent$e.raise("Nothing to repeat"), !1);
  }, sent$e.regexp_eatSyntaxCharacter = function $regexp_eatSyntaxCharacter(sent$e) {
    var sent$t = sent$e.current();
    return !!current$nt(sent$t) && (sent$e.lastIntValue = sent$t, sent$e.advance(), !0);
  }, sent$e.regexp_eatPatternCharacters = function $regexp_eatPatternCharacters(sent$e) {
    for (var sent$t, sent$r = sent$e.pos; - 1 !== (sent$t = sent$e.current()) && !current$nt(sent$t);) sent$e.advance();
    return sent$e.pos !== sent$r;
  }, sent$e.regexp_eatExtendedPatternCharacter = function $regexp_eatExtendedPatternCharacter(sent$e) {
    var sent$t = sent$e.current();
    return !(-1 === sent$t || 36 === sent$t || 40 <= sent$t && sent$t <= 43 || 46 === sent$t || 63 === sent$t || 91 === sent$t || 94 === sent$t || 124 === sent$t || (sent$e.advance(), 0));
  }, sent$e.regexp_groupSpecifier = function $regexp_groupSpecifier(sent$e) {
    if (sent$e.eat(63)) {
      this.regexp_eatGroupName(sent$e) || sent$e.raise("Invalid group");
      var sent$t = 16 <= this.options.ecmaVersion,
        sent$r = sent$e.groupNames[sent$e.lastStringValue];
      if (sent$r)
        if (sent$t)
          for (var sent$i = 0, sent$n = sent$r; sent$i < sent$n.length; sent$i += 1) sent$n[sent$i].separatedFrom(sent$e.branchID) || sent$e.raise("Duplicate capture group name");
        else sent$e.raise("Duplicate capture group name");
      sent$t ? (sent$r || (sent$e.groupNames[sent$e.lastStringValue] = [])).push(sent$e.branchID) : sent$e.groupNames[sent$e.lastStringValue] = !0;
    }
  }, sent$e.regexp_eatGroupName = function $regexp_eatGroupName(sent$e) {
    if ((sent$e.lastStringValue = "", sent$e.eat(60))) {
      if (this.regexp_eatRegExpIdentifierName(sent$e) && sent$e.eat(62)) return !0;
      sent$e.raise("Invalid capture group name");
    }
    return !1;
  }, sent$e.regexp_eatRegExpIdentifierName = function $regexp_eatRegExpIdentifierName(sent$e) {
    if ((sent$e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(sent$e))) {
      for (sent$e.lastStringValue += sent$h(sent$e.lastIntValue); this.regexp_eatRegExpIdentifierPart(sent$e);) sent$e.lastStringValue += sent$h(sent$e.lastIntValue);
      return !0;
    }
    return !1;
  }, sent$e.regexp_eatRegExpIdentifierStart = function $regexp_eatRegExpIdentifierStart(sent$e) {
    var sent$t = sent$e.pos,
      sent$r = 11 <= this.options.ecmaVersion,
      sent$i = sent$e.current(sent$r);
    return (sent$e.advance(sent$r), 92 === sent$i && this.regexp_eatRegExpUnicodeEscapeSequence(sent$e, sent$r) && (sent$i = sent$e.lastIntValue), onlyBlock$a(sent$r = sent$i, !0) || 36 === sent$r || 95 === sent$r ? (sent$e.lastIntValue = sent$i, !0) : (sent$e.pos = sent$t, !1));
  }, sent$e.regexp_eatRegExpIdentifierPart = function $regexp_eatRegExpIdentifierPart(sent$e) {
    var sent$t = sent$e.pos,
      sent$r = 11 <= this.options.ecmaVersion,
      sent$i = sent$e.current(sent$r);
    return (sent$e.advance(sent$r), 92 === sent$i && this.regexp_eatRegExpUnicodeEscapeSequence(sent$e, sent$r) && (sent$i = sent$e.lastIntValue), fullCharCodeAtPos$ye(sent$r = sent$i, !0) || 36 === sent$r || 95 === sent$r || 8204 === sent$r || 8205 === sent$r ? (sent$e.lastIntValue = sent$i, !0) : (sent$e.pos = sent$t, !1));
  }, sent$e.regexp_eatAtomEscape = function $regexp_eatAtomEscape(sent$e) {
    return !!(this.regexp_eatBackReference(sent$e) || this.regexp_eatCharacterClassEscape(sent$e) || this.regexp_eatCharacterEscape(sent$e) || sent$e.switchN && this.regexp_eatKGroupName(sent$e)) || (sent$e.switchU && (99 === sent$e.current() && sent$e.raise("Invalid unicode escape"), sent$e.raise("Invalid escape")), !1);
  }, sent$e.regexp_eatBackReference = function $regexp_eatBackReference(sent$e) {
    var sent$t = sent$e.pos;
    if (this.regexp_eatDecimalEscape(sent$e)) {
      var sent$r = sent$e.lastIntValue;
      if (sent$e.switchU) return (sent$r > sent$e.maxBackReference && (sent$e.maxBackReference = sent$r), !0);
      if (sent$r <= sent$e.numCapturingParens) return !0;
      sent$e.pos = sent$t;
    }
    return !1;
  }, sent$e.regexp_eatKGroupName = function $regexp_eatKGroupName(sent$e) {
    if (sent$e.eat(107)) {
      if (this.regexp_eatGroupName(sent$e)) return (sent$e.backReferenceNames.push(sent$e.lastStringValue), !0);
      sent$e.raise("Invalid named reference");
    }
    return !1;
  }, sent$e.regexp_eatCharacterEscape = function $regexp_eatCharacterEscape(sent$e) {
    return this.regexp_eatControlEscape(sent$e) || this.regexp_eatCControlLetter(sent$e) || this.regexp_eatZero(sent$e) || this.regexp_eatHexEscapeSequence(sent$e) || this.regexp_eatRegExpUnicodeEscapeSequence(sent$e, !1) || !sent$e.switchU && this.regexp_eatLegacyOctalEscapeSequence(sent$e) || this.regexp_eatIdentityEscape(sent$e);
  }, sent$e.regexp_eatCControlLetter = function $regexp_eatCControlLetter(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(99)) {
      if (this.regexp_eatControlLetter(sent$e)) return !0;
      sent$e.pos = sent$t;
    }
    return !1;
  }, sent$e.regexp_eatZero = function $regexp_eatZero(sent$e) {
    return 48 === sent$e.current() && !current$ot(sent$e.lookahead()) && (sent$e.lastIntValue = 0, sent$e.advance(), !0);
  }, sent$e.regexp_eatControlEscape = function $regexp_eatControlEscape(sent$e) {
    var sent$t = sent$e.current();
    return 116 === sent$t ? (sent$e.lastIntValue = 9, sent$e.advance(), !0) : 110 === sent$t ? (sent$e.lastIntValue = 10, sent$e.advance(), !0) : 118 === sent$t ? (sent$e.lastIntValue = 11, sent$e.advance(), !0) : 102 === sent$t ? (sent$e.lastIntValue = 12, sent$e.advance(), !0) : 114 === sent$t && (sent$e.lastIntValue = 13, sent$e.advance(), !0);
  }, sent$e.regexp_eatControlLetter = function $regexp_eatControlLetter(sent$e) {
    var sent$t = sent$e.current();
    return !!current$st(sent$t) && (sent$e.lastIntValue = sent$t % 32, sent$e.advance(), !0);
  }, sent$e.regexp_eatRegExpUnicodeEscapeSequence = function $regexp_eatRegExpUnicodeEscapeSequence(sent$e, sent$t) {
    var sent$r = sent$e.pos,
      sent$t = (sent$t = void 0 === sent$t ? !1 : sent$t) || sent$e.switchU;
    if (sent$e.eat(117)) {
      if (this.regexp_eatFixedHexDigits(sent$e, 4)) {
        var sent$i = sent$e.lastIntValue;
        if (sent$t && 55296 <= sent$i && sent$i <= 56319) {
          var sent$n = sent$e.pos;
          if (sent$e.eat(92) && sent$e.eat(117) && this.regexp_eatFixedHexDigits(sent$e, 4)) {
            var sent$s = sent$e.lastIntValue;
            if (56320 <= sent$s && sent$s <= 57343) return (sent$e.lastIntValue = 1024 * (sent$i - 55296) + (sent$s - 56320) + 65536, !0);
          }
          (sent$e.pos = sent$n, sent$e.lastIntValue = sent$i);
        }
        return !0;
      }
      if (sent$t && sent$e.eat(123) && this.regexp_eatHexDigits(sent$e) && sent$e.eat(125) && 0 <= (sent$s = sent$e.lastIntValue) && sent$s <= 1114111) return !0;
      (sent$t && sent$e.raise("Invalid unicode escape"), sent$e.pos = sent$r);
    }
    return !1;
  }, sent$e.regexp_eatIdentityEscape = function $regexp_eatIdentityEscape(sent$e) {
    var sent$t;
    return sent$e.switchU ? !!this.regexp_eatSyntaxCharacter(sent$e) || !!sent$e.eat(47) && (sent$e.lastIntValue = 47, !0) : !(99 === (sent$t = sent$e.current()) || sent$e.switchN && 107 === sent$t || (sent$e.lastIntValue = sent$t, sent$e.advance(), 0));
  }, sent$e.regexp_eatDecimalEscape = function $regexp_eatDecimalEscape(sent$e) {
    sent$e.lastIntValue = 0;
    var sent$t = sent$e.current();
    if (49 <= sent$t && sent$t <= 57) {
      for (;
        (sent$e.lastIntValue = 10 * sent$e.lastIntValue + (sent$t - 48), sent$e.advance(), 48 <= (sent$t = sent$e.current()) && sent$t <= 57););
      return !0;
    }
    return !1;
  });

  function lastStringValue$at(sent$e) {
    return current$st(sent$e) || 95 === sent$e;
  }

  function current$ot(sent$e) {
    return 48 <= sent$e && sent$e <= 57;
  }

  function current$ct(sent$e) {
    return 48 <= sent$e && sent$e <= 57 || 65 <= sent$e && sent$e <= 70 || 97 <= sent$e && sent$e <= 102;
  }

  function lastIntValue$ht(sent$e) {
    return 65 <= sent$e && sent$e <= 70 ? sent$e - 65 + 10 : 97 <= sent$e && sent$e <= 102 ? sent$e - 97 + 10 : sent$e - 48;
  }

  function current$lt(sent$e) {
    return 48 <= sent$e && sent$e <= 55;
  }
  (sent$e.regexp_eatCharacterClassEscape = function $regexp_eatCharacterClassEscape(sent$e) {
    var sent$t = sent$e.current();
    if (100 === (sent$i = sent$t) || 68 === sent$i || 115 === sent$i || 83 === sent$i || 119 === sent$i || 87 === sent$i) return (sent$e.lastIntValue = -1, sent$e.advance(), 1);
    var sent$r, sent$i = !1;
    if (sent$e.switchU && 9 <= this.options.ecmaVersion && ((sent$i = 80 === sent$t) || 112 === sent$t)) {
      if ((sent$e.lastIntValue = -1, sent$e.advance(), sent$e.eat(123) && (sent$r = this.regexp_eatUnicodePropertyValueExpression(sent$e)) && sent$e.eat(125))) return (sent$i && 2 === sent$r && sent$e.raise("Invalid property name"), sent$r);
      sent$e.raise("Invalid property name");
    }
    return 0;
  }, sent$e.regexp_eatUnicodePropertyValueExpression = function $regexp_eatUnicodePropertyValueExpression(sent$e) {
    var sent$t = sent$e.pos;
    if (this.regexp_eatUnicodePropertyName(sent$e) && sent$e.eat(61)) {
      var sent$r, sent$i = sent$e.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(sent$e)) return (sent$r = sent$e.lastStringValue, this.regexp_validateUnicodePropertyNameAndValue(sent$e, sent$i, sent$r), 1);
    }
    return (sent$e.pos = sent$t, this.regexp_eatLoneUnicodePropertyNameOrValue(sent$e) ? (sent$i = sent$e.lastStringValue, this.regexp_validateUnicodePropertyNameOrValue(sent$e, sent$i)) : 0);
  }, sent$e.regexp_validateUnicodePropertyNameAndValue = function $regexp_validateUnicodePropertyNameAndValue(sent$e, sent$t, sent$r) {
    (ObjectHasOwn$ke(sent$e.unicodeProperties.nonBinary, sent$t) || sent$e.raise("Invalid property name"), sent$e.unicodeProperties.nonBinary[sent$t].test(sent$r) || sent$e.raise("Invalid property value"));
  }, sent$e.regexp_validateUnicodePropertyNameOrValue = function $regexp_validateUnicodePropertyNameOrValue(sent$e, sent$t) {
    return sent$e.unicodeProperties.binary.test(sent$t) ? 1 : sent$e.switchV && sent$e.unicodeProperties.binaryOfStrings.test(sent$t) ? 2 : void sent$e.raise("Invalid property name");
  }, sent$e.regexp_eatUnicodePropertyName = function $regexp_eatUnicodePropertyName(sent$e) {
    var sent$t;
    for (sent$e.lastStringValue = ""; lastStringValue$at(sent$t = sent$e.current());)(sent$e.lastStringValue += sent$h(sent$t), sent$e.advance());
    return "" !== sent$e.lastStringValue;
  }, sent$e.regexp_eatUnicodePropertyValue = function $regexp_eatUnicodePropertyValue(sent$e) {
    var sent$t, sent$r;
    for (sent$e.lastStringValue = ""; lastStringValue$at(sent$r = sent$t = sent$e.current()) || current$ot(sent$r);)(sent$e.lastStringValue += sent$h(sent$t), sent$e.advance());
    return "" !== sent$e.lastStringValue;
  }, sent$e.regexp_eatLoneUnicodePropertyNameOrValue = function $regexp_eatLoneUnicodePropertyNameOrValue(sent$e) {
    return this.regexp_eatUnicodePropertyValue(sent$e);
  }, sent$e.regexp_eatCharacterClass = function $regexp_eatCharacterClass(sent$e) {
    var sent$t, sent$r;
    return !!sent$e.eat(91) && (sent$t = sent$e.eat(94), sent$r = this.regexp_classContents(sent$e), sent$e.eat(93) || sent$e.raise("Unterminated character class"), sent$t && 2 === sent$r && sent$e.raise("Negated character class may contain strings"), !0);
  }, sent$e.regexp_classContents = function $regexp_classContents(sent$e) {
    if (93 !== sent$e.current()) {
      if (sent$e.switchV) return this.regexp_classSetExpression(sent$e);
      this.regexp_nonEmptyClassRanges(sent$e);
    }
    return 1;
  }, sent$e.regexp_nonEmptyClassRanges = function $regexp_nonEmptyClassRanges(sent$e) {
    for (; this.regexp_eatClassAtom(sent$e);) {
      var sent$t, sent$r = sent$e.lastIntValue;
      sent$e.eat(45) && this.regexp_eatClassAtom(sent$e) && (sent$t = sent$e.lastIntValue, !sent$e.switchU || -1 !== sent$r && -1 !== sent$t || sent$e.raise("Invalid character class"), -1 !== sent$r) && -1 !== sent$t && sent$t < sent$r && sent$e.raise("Range out of order in character class");
    }
  }, sent$e.regexp_eatClassAtom = function $regexp_eatClassAtom(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(92)) {
      if (this.regexp_eatClassEscape(sent$e)) return !0;
      (sent$e.switchU && (99 !== (sent$r = sent$e.current()) && !current$lt(sent$r) || sent$e.raise("Invalid class escape"), sent$e.raise("Invalid escape")), sent$e.pos = sent$t);
    }
    var sent$r = sent$e.current();
    return 93 !== sent$r && (sent$e.lastIntValue = sent$r, sent$e.advance(), !0);
  }, sent$e.regexp_eatClassEscape = function $regexp_eatClassEscape(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(98)) return (sent$e.lastIntValue = 8, !0);
    if (sent$e.switchU && sent$e.eat(45)) return (sent$e.lastIntValue = 45, !0);
    if (!sent$e.switchU && sent$e.eat(99)) {
      if (this.regexp_eatClassControlLetter(sent$e)) return !0;
      sent$e.pos = sent$t;
    }
    return this.regexp_eatCharacterClassEscape(sent$e) || this.regexp_eatCharacterEscape(sent$e);
  }, sent$e.regexp_classSetExpression = function $regexp_classSetExpression(sent$e) {
    var sent$t, sent$r = 1;
    if (!this.regexp_eatClassSetRange(sent$e))
      if (sent$t = this.regexp_eatClassSetOperand(sent$e)) {
        2 === sent$t && (sent$r = 2);
        for (var sent$i = sent$e.pos; sent$e.eatChars([38, 38]);) 38 !== sent$e.current() && (sent$t = this.regexp_eatClassSetOperand(sent$e)) ? 2 !== sent$t && (sent$r = 1) : sent$e.raise("Invalid character in character class");
        if (sent$i !== sent$e.pos) return sent$r;
        for (; sent$e.eatChars([45, 45]);) this.regexp_eatClassSetOperand(sent$e) || sent$e.raise("Invalid character in character class");
        if (sent$i !== sent$e.pos) return sent$r;
      } else sent$e.raise("Invalid character in character class");
    for (;;)
      if (!this.regexp_eatClassSetRange(sent$e)) {
        if (!(sent$t = this.regexp_eatClassSetOperand(sent$e))) return sent$r;
        2 === sent$t && (sent$r = 2);
      }
  }, sent$e.regexp_eatClassSetRange = function $regexp_eatClassSetRange(sent$e) {
    var sent$t = sent$e.pos;
    if (this.regexp_eatClassSetCharacter(sent$e)) {
      var sent$r, sent$i = sent$e.lastIntValue;
      if (sent$e.eat(45) && this.regexp_eatClassSetCharacter(sent$e)) return (sent$r = sent$e.lastIntValue, -1 !== sent$i && -1 !== sent$r && sent$r < sent$i && sent$e.raise("Range out of order in character class"), !0);
      sent$e.pos = sent$t;
    }
    return !1;
  }, sent$e.regexp_eatClassSetOperand = function $regexp_eatClassSetOperand(sent$e) {
    return this.regexp_eatClassSetCharacter(sent$e) ? 1 : this.regexp_eatClassStringDisjunction(sent$e) || this.regexp_eatNestedClass(sent$e);
  }, sent$e.regexp_eatNestedClass = function $regexp_eatNestedClass(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(91)) {
      var sent$r = sent$e.eat(94),
        sent$i = this.regexp_classContents(sent$e);
      if (sent$e.eat(93)) return (sent$r && 2 === sent$i && sent$e.raise("Negated character class may contain strings"), sent$i);
      sent$e.pos = sent$t;
    }
    if (sent$e.eat(92)) {
      sent$r = this.regexp_eatCharacterClassEscape(sent$e);
      if (sent$r) return sent$r;
      sent$e.pos = sent$t;
    }
    return null;
  }, sent$e.regexp_eatClassStringDisjunction = function $regexp_eatClassStringDisjunction(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eatChars([92, 113])) {
      if (sent$e.eat(123)) {
        var sent$r = this.regexp_classStringDisjunctionContents(sent$e);
        if (sent$e.eat(125)) return sent$r;
      } else sent$e.raise("Invalid escape");
      sent$e.pos = sent$t;
    }
    return null;
  }, sent$e.regexp_classStringDisjunctionContents = function $regexp_classStringDisjunctionContents(sent$e) {
    for (var sent$t = this.regexp_classString(sent$e); sent$e.eat(124);) 2 === this.regexp_classString(sent$e) && (sent$t = 2);
    return sent$t;
  }, sent$e.regexp_classString = function $regexp_classString(sent$e) {
    for (var sent$t = 0; this.regexp_eatClassSetCharacter(sent$e);) sent$t++;
    return 1 === sent$t ? 1 : 2;
  }, sent$e.regexp_eatClassSetCharacter = function $regexp_eatClassSetCharacter(sent$e) {
    var sent$t, sent$r = sent$e.pos;
    return sent$e.eat(92) ? !(!this.regexp_eatCharacterEscape(sent$e) && !this.regexp_eatClassSetReservedPunctuator(sent$e) && (sent$e.eat(98) ? (sent$e.lastIntValue = 8, 0) : (sent$e.pos = sent$r, 1))) : !((sent$r = sent$e.current()) < 0 || sent$r === sent$e.lookahead() && (33 === (sent$t = sent$r) || 35 <= sent$t && sent$t <= 38 || 42 <= sent$t && sent$t <= 44 || 46 === sent$t || 58 <= sent$t && sent$t <= 64 || 94 === sent$t || 96 === sent$t || 126 === sent$t) || 40 === (sent$t = sent$r) || 41 === sent$t || 45 === sent$t || 47 === sent$t || 91 <= sent$t && sent$t <= 93 || 123 <= sent$t && sent$t <= 125 || (sent$e.advance(), sent$e.lastIntValue = sent$r, 0));
  }, sent$e.regexp_eatClassSetReservedPunctuator = function $regexp_eatClassSetReservedPunctuator(sent$e) {
    var sent$t, sent$r = sent$e.current();
    return (33 === (sent$t = sent$r) || 35 === sent$t || 37 === sent$t || 38 === sent$t || 44 === sent$t || 45 === sent$t || 58 <= sent$t && sent$t <= 62 || 64 === sent$t || 96 === sent$t || 126 === sent$t) && (sent$e.lastIntValue = sent$r, sent$e.advance(), !0);
  }, sent$e.regexp_eatClassControlLetter = function $regexp_eatClassControlLetter(sent$e) {
    var sent$t = sent$e.current();
    return !(!current$ot(sent$t) && 95 !== sent$t || (sent$e.lastIntValue = sent$t % 32, sent$e.advance(), 0));
  }, sent$e.regexp_eatHexEscapeSequence = function $regexp_eatHexEscapeSequence(sent$e) {
    var sent$t = sent$e.pos;
    if (sent$e.eat(120)) {
      if (this.regexp_eatFixedHexDigits(sent$e, 2)) return !0;
      (sent$e.switchU && sent$e.raise("Invalid escape"), sent$e.pos = sent$t);
    }
    return !1;
  }, sent$e.regexp_eatDecimalDigits = function $regexp_eatDecimalDigits(sent$e) {
    var sent$t, sent$r = sent$e.pos;
    for (sent$e.lastIntValue = 0; current$ot(sent$t = sent$e.current());)(sent$e.lastIntValue = 10 * sent$e.lastIntValue + (sent$t - 48), sent$e.advance());
    return sent$e.pos !== sent$r;
  }, sent$e.regexp_eatHexDigits = function $regexp_eatHexDigits(sent$e) {
    var sent$t, sent$r = sent$e.pos;
    for (sent$e.lastIntValue = 0; current$ct(sent$t = sent$e.current());)(sent$e.lastIntValue = 16 * sent$e.lastIntValue + lastIntValue$ht(sent$t), sent$e.advance());
    return sent$e.pos !== sent$r;
  }, sent$e.regexp_eatLegacyOctalEscapeSequence = function $regexp_eatLegacyOctalEscapeSequence(sent$e) {
    var sent$t, sent$r;
    return !!this.regexp_eatOctalDigit(sent$e) && (sent$t = sent$e.lastIntValue, this.regexp_eatOctalDigit(sent$e) ? (sent$r = sent$e.lastIntValue, sent$t <= 3 && this.regexp_eatOctalDigit(sent$e) ? sent$e.lastIntValue = 64 * sent$t + 8 * sent$r + sent$e.lastIntValue : sent$e.lastIntValue = 8 * sent$t + sent$r) : sent$e.lastIntValue = sent$t, !0);
  }, sent$e.regexp_eatOctalDigit = function $regexp_eatOctalDigit(sent$e) {
    var sent$t = sent$e.current();
    return current$lt(sent$t) ? (sent$e.lastIntValue = sent$t - 48, sent$e.advance(), !0) : (sent$e.lastIntValue = 0, !1);
  }, sent$e.regexp_eatFixedHexDigits = function $regexp_eatFixedHexDigits(sent$e, sent$t) {
    for (var sent$r = sent$e.pos, sent$i = sent$e.lastIntValue = 0; sent$i < sent$t; ++sent$i) {
      var sent$n = sent$e.current();
      if (!current$ct(sent$n)) return (sent$e.pos = sent$r, !1);
      (sent$e.lastIntValue = 16 * sent$e.lastIntValue + lastIntValue$ht(sent$n), sent$e.advance());
    }
    return !0;
  });

  function onToken$ut(sent$e) {
    (this.type = sent$e.type, this.value = sent$e.value, this.start = sent$e.start, this.end = sent$e.end, sent$e.options.locations && (this.loc = new locations$Ae(sent$e, sent$e.startLoc, sent$e.endLoc)), sent$e.options.ranges && (this.range = [sent$e.start, sent$e.end]));
  }
  thisLastTokEndLoc$y = sent$l.prototype;

  function ecmaVersion$pt(sent$e) {
    return "function" != typeof BigInt ? null : BigInt(sent$e.replace(/_/g, ""));
  }
  (thisLastTokEndLoc$y.next = function $next(sent$e) {
    (!sent$e && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new onToken$ut(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken());
  }, thisLastTokEndLoc$y.getToken = function $getToken() {
    return (this.next(), new onToken$ut(this));
  }, "undefined" != typeof Symbol && (thisLastTokEndLoc$y[Symbol.iterator] = function() {
    var sent$t = this;
    return {
      next: function $next() {
        var sent$e = sent$t.getToken();
        return {
          done: sent$e.type === expect$g.eof,
          value: sent$e
        };
      }
    };
  }), thisLastTokEndLoc$y.nextToken = function $nextToken() {
    var sent$e = this.curContext();
    return (sent$e && sent$e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(expect$g.eof) : sent$e.override ? sent$e.override(this) : void this.readToken(this.fullCharCodeAtPos()));
  }, thisLastTokEndLoc$y.readToken = function $readToken(sent$e) {
    return onlyBlock$a(sent$e, 6 <= this.options.ecmaVersion) || 92 === sent$e ? this.readWord() : this.getTokenFromCode(sent$e);
  }, thisLastTokEndLoc$y.fullCharCodeAtPos = function $fullCharCodeAtPos() {
    var sent$e, sent$t = this.input.charCodeAt(this.pos);
    return sent$t <= 55295 || 56320 <= sent$t || (sent$e = this.input.charCodeAt(this.pos + 1)) <= 56319 || 57344 <= sent$e ? sent$t : (sent$t << 10) + sent$e - 56613888;
  }, thisLastTokEndLoc$y.skipBlockComment = function $skipBlockComment() {
    var sent$e = this.options.onComment && this.curPosition(),
      sent$t = this.pos,
      sent$r = this.input.indexOf("*/", this.pos += 2);
    if ((-1 === sent$r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = sent$r + 2, this.options.locations))
      for (var sent$i, sent$n = sent$t; - 1 < (sent$i = sourceFile$be(this.input, sent$n, this.pos));)(++this.curLine, sent$n = this.lineStart = sent$i);
    this.options.onComment && this.options.onComment(!0, this.input.slice(sent$t + 2, sent$r), sent$t, this.pos, sent$e, this.curPosition());
  }, thisLastTokEndLoc$y.skipLineComment = function $skipLineComment(sent$e) {
    for (var sent$t = this.pos, sent$r = this.options.onComment && this.curPosition(), sent$i = this.input.charCodeAt(this.pos += sent$e); this.pos < this.input.length && !readEscapedChar$ve(sent$i);) sent$i = this.input.charCodeAt(++this.pos);
    this.options.onComment && this.options.onComment(!1, this.input.slice(sent$t + sent$e, this.pos), sent$t, this.pos, sent$r, this.curPosition());
  }, thisLastTokEndLoc$y.skipSpace = function $skipSpace() {
    sent$e: for (; this.pos < this.input.length;) {
      var sent$e = this.input.charCodeAt(this.pos);
      switch (sent$e) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
        case 10:
        case 8232:
        case 8233:
          (++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos));
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break sent$e;
          }
          break;
        default:
          if (!(8 < sent$e && sent$e < 14 || 5760 <= sent$e && nonASCIIwhitespace$xe.test(String.fromCharCode(sent$e)))) break sent$e;
          ++this.pos;
      }
    }
  }, thisLastTokEndLoc$y.finishToken = function $finishToken(sent$e, sent$t) {
    (this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition()));
    var sent$r = this.type;
    (this.type = sent$e, this.value = sent$t, this.updateContext(sent$r));
  }, thisLastTokEndLoc$y.readToken_dot = function $readToken_dot() {
    var sent$e, sent$t = this.input.charCodeAt(this.pos + 1);
    return 48 <= sent$t && sent$t <= 57 ? this.readNumber(!0) : (sent$e = this.input.charCodeAt(this.pos + 2), 6 <= this.options.ecmaVersion && 46 === sent$t && 46 === sent$e ? (this.pos += 3, this.finishToken(expect$g.ellipsis)) : (++this.pos, this.finishToken(expect$g.dot)));
  }, thisLastTokEndLoc$y.readToken_slash = function $readToken_slash() {
    var sent$e = this.input.charCodeAt(this.pos + 1);
    return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === sent$e ? this.finishOp(expect$g.assign, 2) : this.finishOp(expect$g.slash, 1);
  }, thisLastTokEndLoc$y.readToken_mult_modulo_exp = function $readToken_mult_modulo_exp(sent$e) {
    var sent$t = this.input.charCodeAt(this.pos + 1),
      sent$r = 1,
      sent$i = 42 === sent$e ? expect$g.star : expect$g.modulo;
    return (7 <= this.options.ecmaVersion && 42 === sent$e && 42 === sent$t && (++sent$r, sent$i = expect$g.starstar, sent$t = this.input.charCodeAt(this.pos + 2)), 61 === sent$t ? this.finishOp(expect$g.assign, sent$r + 1) : this.finishOp(sent$i, sent$r));
  }, thisLastTokEndLoc$y.readToken_pipe_amp = function $readToken_pipe_amp(sent$e) {
    var sent$t = this.input.charCodeAt(this.pos + 1);
    if (sent$t !== sent$e) return 61 === sent$t ? this.finishOp(expect$g.assign, 2) : this.finishOp(124 === sent$e ? expect$g.bitwiseOR : expect$g.bitwiseAND, 1);
    if (12 <= this.options.ecmaVersion && 61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(expect$g.assign, 3);
    return this.finishOp(124 === sent$e ? expect$g.logicalOR : expect$g.logicalAND, 2);
  }, thisLastTokEndLoc$y.readToken_caret = function $readToken_caret() {
    return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(expect$g.assign, 2) : this.finishOp(expect$g.bitwiseXOR, 1);
  }, thisLastTokEndLoc$y.readToken_plus_min = function $readToken_plus_min(sent$e) {
    var sent$t = this.input.charCodeAt(this.pos + 1);
    return sent$t === sent$e ? 45 !== sent$t || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !sent$o.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(expect$g.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === sent$t ? this.finishOp(expect$g.assign, 2) : this.finishOp(expect$g.plusMin, 1);
  }, thisLastTokEndLoc$y.readToken_lt_gt = function $readToken_lt_gt(sent$e) {
    var sent$t = this.input.charCodeAt(this.pos + 1),
      sent$r = 1;
    return sent$t === sent$e ? (sent$r = 62 === sent$e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + sent$r) ? this.finishOp(expect$g.assign, sent$r + 1) : this.finishOp(expect$g.bitShift, sent$r)) : 33 !== sent$t || 60 !== sent$e || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? this.finishOp(expect$g.relational, sent$r = 61 === sent$t ? 2 : sent$r) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
  }, thisLastTokEndLoc$y.readToken_eq_excl = function $readToken_eq_excl(sent$e) {
    var sent$t = this.input.charCodeAt(this.pos + 1);
    return 61 === sent$t ? this.finishOp(expect$g.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === sent$e && 62 === sent$t && 6 <= this.options.ecmaVersion ? (this.pos += 2, this.finishToken(expect$g.arrow)) : this.finishOp(61 === sent$e ? expect$g.eq : expect$g.prefix, 1);
  }, thisLastTokEndLoc$y.readToken_question = function $readToken_question() {
    var sent$e = this.options.ecmaVersion;
    if (11 <= sent$e) {
      var sent$t = this.input.charCodeAt(this.pos + 1);
      if (46 === sent$t) {
        var sent$r = this.input.charCodeAt(this.pos + 2);
        if (sent$r < 48 || 57 < sent$r) return this.finishOp(expect$g.questionDot, 2);
      }
      if (63 === sent$t) {
        if (12 <= sent$e)
          if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(expect$g.assign, 3);
        return this.finishOp(expect$g.coalesce, 2);
      }
    }
    return this.finishOp(expect$g.question, 1);
  }, thisLastTokEndLoc$y.readToken_numberSign = function $readToken_numberSign() {
    var sent$e = this.options.ecmaVersion,
      sent$t = 35;
    if (13 <= sent$e && (++this.pos, onlyBlock$a(sent$t = this.fullCharCodeAtPos(), !0) || 92 === sent$t)) return this.finishToken(expect$g.privateId, this.readWord1());
    this.raise(this.pos, "Unexpected character '" + sent$h(sent$t) + "'");
  }, thisLastTokEndLoc$y.getTokenFromCode = function $getTokenFromCode(sent$e) {
    switch (sent$e) {
      case 46:
        return this.readToken_dot();
      case 40:
        return (++this.pos, this.finishToken(expect$g.parenL));
      case 41:
        return (++this.pos, this.finishToken(expect$g.parenR));
      case 59:
        return (++this.pos, this.finishToken(expect$g.semi));
      case 44:
        return (++this.pos, this.finishToken(expect$g.comma));
      case 91:
        return (++this.pos, this.finishToken(expect$g.bracketL));
      case 93:
        return (++this.pos, this.finishToken(expect$g.bracketR));
      case 123:
        return (++this.pos, this.finishToken(expect$g.braceL));
      case 125:
        return (++this.pos, this.finishToken(expect$g.braceR));
      case 58:
        return (++this.pos, this.finishToken(expect$g.colon));
      case 96:
        if (this.options.ecmaVersion < 6) break;
        return (++this.pos, this.finishToken(expect$g.backQuote));
      case 48:
        var sent$t = this.input.charCodeAt(this.pos + 1);
        if (120 === sent$t || 88 === sent$t) return this.readRadixNumber(16);
        if (6 <= this.options.ecmaVersion) {
          if (111 === sent$t || 79 === sent$t) return this.readRadixNumber(8);
          if (98 === sent$t || 66 === sent$t) return this.readRadixNumber(2);
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(!1);
      case 34:
      case 39:
        return this.readString(sent$e);
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(sent$e);
      case 124:
      case 38:
        return this.readToken_pipe_amp(sent$e);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(sent$e);
      case 60:
      case 62:
        return this.readToken_lt_gt(sent$e);
      case 61:
      case 33:
        return this.readToken_eq_excl(sent$e);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(expect$g.prefix, 1);
      case 35:
        return this.readToken_numberSign();
    }
    this.raise(this.pos, "Unexpected character '" + sent$h(sent$e) + "'");
  }, thisLastTokEndLoc$y.finishOp = function $finishOp(sent$e, sent$t) {
    var sent$r = this.input.slice(this.pos, this.pos + sent$t);
    return (this.pos += sent$t, this.finishToken(sent$e, sent$r));
  }, thisLastTokEndLoc$y.readRegexp = function $readRegexp() {
    for (var sent$e, sent$t, sent$r = this.pos;;) {
      this.pos >= this.input.length && this.raise(sent$r, "Unterminated regular expression");
      var sent$i = this.input.charAt(this.pos);
      if ((sent$o.test(sent$i) && this.raise(sent$r, "Unterminated regular expression"), sent$e)) sent$e = !1;
      else {
        if ("[" === sent$i) sent$t = !0;
        else if ("]" === sent$i && sent$t) sent$t = !1;
        else if ("/" === sent$i && !sent$t) break;
        sent$e = "\\" === sent$i;
      }
      ++this.pos;
    }
    var sent$n = this.input.slice(sent$r, this.pos),
      sent$s = (++this.pos, this.pos),
      onlyBlock$a = this.readWord1(),
      sent$s = (this.containsEsc && this.unexpected(sent$s), this.regexpState || (this.regexpState = new charCodeAt$w(this))),
      sent$s = (sent$s.reset(sent$r, sent$n, onlyBlock$a), this.validateRegExpFlags(sent$s), this.validateRegExpPattern(sent$s), null);
    try {
      sent$s = new RegExp(sent$n, onlyBlock$a);
    } catch (sent$e) {}
    return this.finishToken(expect$g.regexp, {
      pattern: sent$n,
      flags: onlyBlock$a,
      value: sent$s
    });
  }, thisLastTokEndLoc$y.readInt = function $readInt(sent$e, sent$t, sent$r) {
    for (var sent$i = 12 <= this.options.ecmaVersion && void 0 === sent$t, sent$n = sent$r && 48 === this.input.charCodeAt(this.pos), sent$r = this.pos, sent$s = 0, onlyBlock$a = 0, sent$o = 0, sent$c = null == sent$t ? 1 / 0 : sent$t; sent$o < sent$c;
      (++sent$o, ++this.pos)) {
      var sent$h = this.input.charCodeAt(this.pos),
        sent$l = void 0;
      if (sent$i && 95 === sent$h)(sent$n && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === onlyBlock$a && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === sent$o && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), onlyBlock$a = sent$h);
      else {
        if (sent$e <= (sent$l = 97 <= sent$h ? sent$h - 97 + 10 : 65 <= sent$h ? sent$h - 65 + 10 : 48 <= sent$h && sent$h <= 57 ? sent$h - 48 : 1 / 0)) break;
        (onlyBlock$a = sent$h, sent$s = sent$s * sent$e + sent$l);
      }
    }
    return (sent$i && 95 === onlyBlock$a && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === sent$r || null != sent$t && this.pos - sent$r !== sent$t ? null : sent$s);
  }, thisLastTokEndLoc$y.readRadixNumber = function $readRadixNumber(sent$e) {
    var sent$t = this.pos,
      sent$r = (this.pos += 2, this.readInt(sent$e));
    return (null == sent$r && this.raise(this.start + 2, "Expected number in radix " + sent$e), 11 <= this.options.ecmaVersion && 110 === this.input.charCodeAt(this.pos) ? (sent$r = ecmaVersion$pt(this.input.slice(sent$t, this.pos)), ++this.pos) : onlyBlock$a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(expect$g.num, sent$r));
  }, thisLastTokEndLoc$y.readNumber = function $readNumber(sent$e) {
    var sent$t = this.pos,
      sent$r = (sent$e || null !== this.readInt(10, void 0, !0) || this.raise(sent$t, "Invalid number"), 2 <= this.pos - sent$t && 48 === this.input.charCodeAt(sent$t)),
      sent$i = (sent$r && this.strict && this.raise(sent$t, "Invalid number"), this.input.charCodeAt(this.pos));
    if (!sent$r && !sent$e && 11 <= this.options.ecmaVersion && 110 === sent$i) return (sent$e = ecmaVersion$pt(this.input.slice(sent$t, this.pos)), ++this.pos, onlyBlock$a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(expect$g.num, sent$e));
    (sent$r && (/[89]/).test(this.input.slice(sent$t, this.pos)) && (sent$r = !1), 46 !== sent$i || sent$r || (++this.pos, this.readInt(10), sent$i = this.input.charCodeAt(this.pos)), 69 !== sent$i && 101 !== sent$i || sent$r || (43 !== (sent$i = this.input.charCodeAt(++this.pos)) && 45 !== sent$i || ++this.pos, null === this.readInt(10) && this.raise(sent$t, "Invalid number")), onlyBlock$a(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"));
    sent$e = this.input.slice(sent$t, this.pos);
    sent$i = sent$r ? parseInt(sent$e, 8) : parseFloat(sent$e.replace(/_/g, ""));
    return this.finishToken(expect$g.num, sent$i);
  }, thisLastTokEndLoc$y.readCodePoint = function $readCodePoint() {
    var sent$e, sent$t;
    return (123 === this.input.charCodeAt(this.pos) ? (this.options.ecmaVersion < 6 && this.unexpected(), sent$e = ++this.pos, sent$t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, 1114111 < sent$t && this.invalidStringToken(sent$e, "Code point out of bounds")) : sent$t = this.readHexChar(4), sent$t);
  }, thisLastTokEndLoc$y.readString = function $readString(sent$e) {
    for (var sent$t = "", sent$r = ++this.pos;;) {
      this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
      var sent$i = this.input.charCodeAt(this.pos);
      if (sent$i === sent$e) break;
      92 === sent$i ? (sent$t = (sent$t += this.input.slice(sent$r, this.pos)) + this.readEscapedChar(!1), sent$r = this.pos) : 8232 === sent$i || 8233 === sent$i ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (readEscapedChar$ve(sent$i) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
    }
    return (sent$t += this.input.slice(sent$r, this.pos++), this.finishToken(expect$g.string, sent$t));
  });
  var readTmplToken$dt = {};
  (thisLastTokEndLoc$y.tryReadTemplateToken = function $tryReadTemplateToken() {
    this.inTemplateElement = !0;
    try {
      this.readTmplToken();
    } catch (sent$e) {
      if (sent$e !== readTmplToken$dt) throw sent$e;
      this.readInvalidTemplateToken();
    }
    this.inTemplateElement = !1;
  }, thisLastTokEndLoc$y.invalidStringToken = function $invalidStringToken(sent$e, sent$t) {
    if (this.inTemplateElement && 9 <= this.options.ecmaVersion) throw readTmplToken$dt;
    this.raise(sent$e, sent$t);
  }, thisLastTokEndLoc$y.readTmplToken = function $readTmplToken() {
    for (var sent$e = "", sent$t = this.pos;;) {
      this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
      var sent$r = this.input.charCodeAt(this.pos);
      if (96 === sent$r || 36 === sent$r && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== expect$g.template && this.type !== expect$g.invalidTemplate ? (sent$e += this.input.slice(sent$t, this.pos), this.finishToken(expect$g.template, sent$e)) : 36 === sent$r ? (this.pos += 2, this.finishToken(expect$g.dollarBraceL)) : (++this.pos, this.finishToken(expect$g.backQuote));
      if (92 === sent$r)(sent$e = (sent$e += this.input.slice(sent$t, this.pos)) + this.readEscapedChar(!0), sent$t = this.pos);
      else if (readEscapedChar$ve(sent$r)) {
        switch ((sent$e += this.input.slice(sent$t, this.pos), ++this.pos, sent$r)) {
          case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos;
          case 10:
            sent$e += "\n";
            break;
          default:
            sent$e += String.fromCharCode(sent$r);
        }
        (this.options.locations && (++this.curLine, this.lineStart = this.pos), sent$t = this.pos);
      } else ++this.pos;
    }
  }, thisLastTokEndLoc$y.readInvalidTemplateToken = function $readInvalidTemplateToken() {
    for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
      case "\\":
        ++this.pos;
        break;
      case "$":
        if ("{" !== this.input[this.pos + 1]) break;
      case "`":
        return this.finishToken(expect$g.invalidTemplate, this.input.slice(this.start, this.pos));
      case "\r":
        "\n" === this.input[this.pos + 1] && ++this.pos;
      case "\n":
      case "\u2028":
      case "\u2029":
        (++this.curLine, this.lineStart = this.pos + 1);
    }
    this.raise(this.start, "Unterminated template");
  }, thisLastTokEndLoc$y.readEscapedChar = function $readEscapedChar(sent$e) {
    var sent$t, sent$r, sent$i = this.input.charCodeAt(++this.pos);
    switch ((++this.pos, sent$i)) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(this.readHexChar(2));
      case 117:
        return sent$h(this.readCodePoint());
      case 116:
        return "\t";
      case 98:
        return "\b";
      case 118:
        return "\v";
      case 102:
        return "\f";
      case 13:
        10 === this.input.charCodeAt(this.pos) && ++this.pos;
      case 10:
        return (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "");
      case 56:
      case 57:
        (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), sent$e && (sent$t = this.pos - 1, this.invalidStringToken(sent$t, "Invalid escape sequence in template string")));
      default:
        return 48 <= sent$i && sent$i <= 55 ? (sent$t = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], 255 < (sent$r = parseInt(sent$t, 8)) && (sent$t = sent$t.slice(0, -1), sent$r = parseInt(sent$t, 8)), this.pos += sent$t.length - 1, sent$i = this.input.charCodeAt(this.pos), "0" === sent$t && 56 !== sent$i && 57 !== sent$i || !this.strict && !sent$e || this.invalidStringToken(this.pos - 1 - sent$t.length, sent$e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(sent$r)) : readEscapedChar$ve(sent$i) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(sent$i);
    }
  }, thisLastTokEndLoc$y.readHexChar = function $readHexChar(sent$e) {
    var sent$t = this.pos,
      sent$e = this.readInt(16, sent$e);
    return (null === sent$e && this.invalidStringToken(sent$t, "Bad character escape sequence"), sent$e);
  }, thisLastTokEndLoc$y.readWord1 = function $readWord1() {
    for (var sent$e = "", sent$t = !(this.containsEsc = !1), sent$r = this.pos, sent$i = 6 <= this.options.ecmaVersion; this.pos < this.input.length;) {
      var sent$n = this.fullCharCodeAtPos();
      if (fullCharCodeAtPos$ye(sent$n, sent$i)) this.pos += sent$n <= 65535 ? 1 : 2;
      else {
        if (92 !== sent$n) break;
        (this.containsEsc = !0, sent$e += this.input.slice(sent$r, this.pos));
        var sent$n = this.pos,
          sent$s = (117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos, this.readCodePoint());
        ((sent$t ? onlyBlock$a : fullCharCodeAtPos$ye)(sent$s, sent$i) || this.invalidStringToken(sent$n, "Invalid Unicode escape"), sent$e += sent$h(sent$s), sent$r = this.pos);
      }
      sent$t = !1;
    }
    return sent$e + this.input.slice(sent$r, this.pos);
  }, thisLastTokEndLoc$y.readWord = function $readWord() {
    var sent$e = this.readWord1(),
      sent$t = expect$g.name;
    return (this.keywords.test(sent$e) && (sent$t = keywordTypes$ge[sent$e]), this.finishToken(sent$t, sent$e));
  });
  sent$l.acorn = {
    Parser: sent$l,
    version: "8.14.0",
    defaultOptions: preserveParens$Te,
    Position: allowReturnOutsideFunction$Ie,
    SourceLocation: locations$Ae,
    getLineInfo: getLineInfo$Le,
    Node: inClassFieldInit$Ge,
    TokenType: sent$r,
    tokTypes: expect$g,
    keywordTypes: keywordTypes$ge,
    TokContext: push$u,
    tokContexts: thisYieldPos$d,
    isIdentifierChar: fullCharCodeAtPos$ye,
    isIdentifierStart: onlyBlock$a,
    Token: onToken$ut,
    isNewLine: readEscapedChar$ve,
    lineBreak: sent$o,
    lineBreakG: sent$t,
    nonASCIIwhitespace: nonASCIIwhitespace$xe
  };
  var done$next$ft = {
      RES: void 0
    },
    LABEL$S = {
      RES: void 0
    },
    LABEL$k = {
      LABEL: void 0
    },
    sent$_ = {
      LABEL: void 0
    },
    arguments$mt = LABEL$p("super"),
    find$yt = LABEL$p("supercall"),
    TypeError$gt = LABEL$p("noctor"),
    TypeError$vt = LABEL$p("clsctor"),
    arguments$bt = LABEL$p("newtarget"),
    SyntaxError$E = LABEL$p("private"),
    properties$C = LABEL$p("noinit"),
    properties$I = LABEL$p("deadzone"),
    find$xt = LABEL$p("import"),
    find$A = LABEL$p("exports"),
    context$wt = (TypeError$St.prototype.get = function $get() {
      return this.value;
    }, TypeError$St.prototype.set = function $set(sent$e) {
      if ("const" === this.kind) throw new TypeError("Assignment to constant variable");
      return this.value = sent$e;
    }, TypeError$St);

  function TypeError$St(sent$e, sent$t) {
    (this.kind = sent$e, this.value = sent$t);
  }
  (property$_t.prototype.get = function $get() {
    return this.object[this.property];
  }, property$_t.prototype.set = function $set(sent$e) {
    return (this.object[this.property] = sent$e, !0);
  }, property$_t.prototype.del = function $del() {
    return delete this.object[this.property];
  });
  var find$kt = property$_t;

  function property$_t(sent$e, sent$t) {
    (this.object = sent$e, this.property = sent$t);
  }
  (context$Et.prototype.global = function $global() {
    for (var sent$e = this; sent$e.parent;) sent$e = sent$e.parent;
    return sent$e;
  }, context$Et.prototype.find = function $find(sent$e) {
    var sent$t;
    return this.context[sent$e] || ((sent$e in this.withContext) ? new find$kt(this.withContext, sent$e) : this.parent ? this.parent.find(sent$e) : (sent$e in (sent$t = this.global().find("window").get())) ? new find$kt(sent$t, sent$e) : null);
  }, context$Et.prototype.var = function $var(sent$e, sent$t) {
    for (var sent$r = this; sent$r.parent && !sent$r.isolated;) sent$r = sent$r.parent;
    var sent$i = sent$r.context[sent$e];
    if (sent$i) {
      if ("var" !== sent$i.kind) throw new SyntaxError("Identifier '" + sent$e + "' has already been declared");
      sent$t !== properties$C && sent$i.set(sent$t);
    } else sent$r.context[sent$e] = new context$wt("var", sent$t === properties$C ? void 0 : sent$t);
    sent$r.parent || (sent$i = sent$r.find("window").get(), sent$t !== properties$C && ObjectGetOwnPropertyDescriptor$q$f(sent$i, sent$e, {
      value: sent$t,
      writable: !0,
      enumerable: !0
    }));
  }, context$Et.prototype.let = function $let(sent$e, sent$t) {
    var sent$r = this.context[sent$e];
    if (sent$r && sent$r.get() !== properties$I) throw new SyntaxError("Identifier '" + sent$e + "' has already been declared");
    this.context[sent$e] = new context$wt("let", sent$t);
  }, context$Et.prototype.const = function $const(sent$e, sent$t) {
    var sent$r = this.context[sent$e];
    if (sent$r && sent$r.get() !== properties$I) throw new SyntaxError("Identifier '" + sent$e + "' has already been declared");
    this.context[sent$e] = new context$wt("const", sent$t);
  }, context$Et.prototype.func = function $func(sent$e, sent$t) {
    var sent$r = this.context[sent$e];
    if (sent$r && "var" !== sent$r.kind) throw new SyntaxError("Identifier '" + sent$e + "' has already been declared");
    this.context[sent$e] = new context$wt("var", sent$t);
  }, context$Et.prototype.with = function $with(sent$e) {
    Object.keys(sent$e) && (this.withContext = sent$e);
  });
  var FunctionExpression$P = context$Et;

  function context$Et(sent$e, sent$t) {
    (void 0 === sent$e && (sent$e = null), void 0 === sent$t && (sent$t = !1), this.context = ObjectCreate$$(null), this.withContext = ObjectCreate$$(null), this.parent = sent$e, this.isolated = sent$t);
  }

  function ecmaVersion$Ct(onlyBlock$a, sent$e) {
    var sent$o = (sent$e = void 0 === sent$e ? {} : sent$e).res,
      sent$c = sent$e.err,
      sent$h = sent$e.ret,
      sent$l = sent$e.fullRet;
    return new Promise(function(sent$t, sent$r) {
      if (("ret" in sent$e)) return sent$t(onlyBlock$a.return(sent$h));

      function sent$i(sent$e) {
        var sent$t;
        try {
          sent$t = onlyBlock$a.next(sent$e);
        } catch (sent$e) {
          return sent$r(sent$e);
        }
        return (sent$s(sent$t), null);
      }

      function sent$n(sent$e) {
        var sent$t;
        try {
          sent$t = onlyBlock$a.throw(sent$e);
        } catch (sent$e) {
          return sent$r(sent$e);
        }
        sent$s(sent$t);
      }

      function sent$s(sent$e) {
        return sent$e.done ? sent$t(sent$l ? sent$e : sent$e.value) : sent$e.value !== done$next$ft ? sent$t(sent$e) : void((sent$e = sent$e.value.RES) && "function" === sent$e.then ? sent$e : Promise.resolve(sent$e)).then(sent$i, sent$n);
      }
      ("err" in sent$e) ? sent$n(sent$c): sent$i(sent$o);
    });
  }

  function sent$It(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      if ((onlyBlock$a = sent$i.getVar, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$n = sent$i.throwErr, sent$n = void 0 === sent$n || sent$n, "undefined" !== sent$t.name)) {
        if (sent$s = sent$r.find(sent$t.name)) {
          if (onlyBlock$a) return [2, sent$s];
          if ((onlyBlock$a = sent$s.get()) === properties$I) throw new ReferenceError(sent$t.name + " is not defined");
          return [2, onlyBlock$a];
        }
        if (sent$n) throw new ReferenceError(sent$t.name + " is not defined");
      }
      return [2, void 0];
    }));
  }
  var ObjectFreeze$At = Object.freeze({
    __proto__: null,
    Identifier: sent$It
  });

  function Identifier$Pt(sent$t, sent$e) {
    return sent$v(this, function(sent$e) {
      return [2, sent$t.value];
    });
  }
  var ObjectFreeze$Lt = Object.freeze({
    __proto__: null,
    Literal: Identifier$Pt
  });

  function sent$Tt(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.getObj, sent$n = void 0 !== sent$n && sent$n, sent$s = sent$i.getVar, sent$s = void 0 !== sent$s && sent$s, "Super" !== sent$t.object.type ? [3, 2] : [5, sent$b(Super$Nt(sent$t.object, sent$r, {
            getProto: !0
          }))]);
        case 1:
          return (onlyBlock$a = sent$e.sent(), [3, 4]);
        case 2:
          return [5, sent$b(sent$L(sent$t.object, sent$r))];
        case 3:
          (onlyBlock$a = sent$e.sent(), sent$e.label = 4);
        case 4:
          return sent$n ? [2, onlyBlock$a] : (sent$c = !1, sent$t.computed ? [5, sent$b(sent$L(sent$t.property, sent$r))] : [3, 6]);
        case 5:
          return (sent$o = sent$e.sent(), [3, 7]);
        case 6:
          ("PrivateIdentifier" === sent$t.property.type ? (sent$o = sent$t.property.name, sent$c = !0) : sent$o = sent$t.property.name, sent$e.label = 7);
        case 7:
          return (sent$c && (onlyBlock$a = onlyBlock$a[SyntaxError$E]), sent$s ? (sent$l = property$J(onlyBlock$a, sent$o), "Super" === sent$t.object.type && sent$l ? (push$u = sent$r.find("this").get(), sent$h = LABEL$p(sent$o), ObjectGetOwnPropertyDescriptor$q$f(push$u, sent$h, {
            set: sent$l
          }), [2, new find$kt(push$u, sent$h)]) : [2, new find$kt(onlyBlock$a, sent$o)]) : (sent$l = find$Z(onlyBlock$a, sent$o), "Super" === sent$t.object.type && sent$l ? (push$u = sent$r.find("this").get(), sent$t.optional && null == push$u ? [2, void 0] : [2, sent$l.call(push$u)]) : sent$t.optional && null == onlyBlock$a ? [2, void 0] : [2, onlyBlock$a[sent$o]]));
      }
    }));
  }

  function TemplateElement$Vt(sent$t, sent$e) {
    return sent$v(this, function(sent$e) {
      return [2, sent$t.value.raw];
    });
  }

  function Super$Nt(sent$e, sent$t, sent$r) {
    var sent$i, sent$n;
    return (void 0 === sent$r && (sent$r = {}), sent$v(this, function(sent$e) {
      return (sent$i = sent$r.getProto, sent$i = void 0 !== sent$i && sent$i, sent$n = sent$t.find(arguments$mt).get(), [2, sent$i ? sent$n.prototype : sent$n]);
    }));
  }

  function concat$Bt(sent$t, sent$r, sent$i) {
    var sent$n;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.argument, sent$r))];
        case 1:
          if ((sent$n = sent$e.sent(), sent$i.spreadProps)) return [2, sent$n];
          if ("function" == typeof Symbol && "function" != typeof sent$n[Symbol.iterator]) throw new TypeError("Spread syntax requires ...iterable[Symbol.iterator] to be a function");
          return [2, apply$j(sent$n)];
      }
    }));
  }
  var ObjectFreeze$Rt = Object.freeze({
    __proto__: null,
    ThisExpression: function $ThisExpression(sent$e, sent$t) {
      var sent$r;
      return sent$v(this, function(sent$e) {
        if ((sent$r = sent$t.find(find$yt)) && !0 !== sent$r.get()) throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
        return [2, sent$t.find("this").get()];
      });
    },
    ArrayExpression: function $ArrayExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            (sent$i = [], sent$n = 0, sent$e.label = 1);
          case 1:
            return sent$n < sent$t.elements.length ? "SpreadElement" !== (sent$s = sent$t.elements[sent$n]).type ? [3, 3] : (sent$o = (onlyBlock$a = sent$i).concat, [5, sent$b(concat$Bt(sent$s, sent$r))]) : [3, 6];
          case 2:
            return (sent$i = sent$o.apply(onlyBlock$a, [sent$e.sent()]), [3, 5]);
          case 3:
            return (sent$h = (sent$c = sent$i).push, [5, sent$b(sent$L(sent$s, sent$r))]);
          case 4:
            (sent$h.apply(sent$c, [sent$e.sent()]), sent$e.label = 5);
          case 5:
            return (sent$n++, [3, 1]);
          case 6:
            return [2, sent$i];
        }
      });
    },
    ObjectExpression: function $ObjectExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u, LABEL$p, thisYieldPos$d;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            (sent$i = {}, sent$n = 0, sent$e.label = 1);
          case 1:
            return sent$n < sent$t.properties.length ? "SpreadElement" !== (sent$s = sent$t.properties[sent$n]).type ? [3, 3] : (onlyBlock$a = find$m, sent$o = [sent$i], [5, sent$b(concat$Bt(sent$s, sent$r, {
              spreadProps: !0
            }))]) : [3, 11];
          case 2:
            return (onlyBlock$a.apply(void 0, sent$o.concat([sent$e.sent()])), [3, 10]);
          case 3:
            return (sent$c = void 0, sent$h = sent$s.key, sent$s.computed) ? [5, sent$b(sent$L(sent$h, sent$r))] : [3, 5];
          case 4:
            return (sent$c = sent$e.sent(), [3, 8]);
          case 5:
            return "Identifier" !== sent$h.type ? [3, 6] : (sent$c = sent$h.name, [3, 8]);
          case 6:
            return (sent$l = "", [5, sent$b(Identifier$Pt(sent$h))]);
          case 7:
            (sent$c = sent$l + sent$e.sent(), sent$e.label = 8);
          case 8:
            return [5, sent$b(sent$L(sent$s.value, sent$r))];
          case 9:
            (push$u = sent$e.sent(), "init" === (LABEL$p = sent$s.kind) ? sent$i[sent$c] = push$u : "get" === LABEL$p ? (thisYieldPos$d = ObjectGetOwnPropertyDescriptor$q(sent$i, sent$c), ObjectGetOwnPropertyDescriptor$q$f(sent$i, sent$c, {
              get: push$u,
              set: thisYieldPos$d && thisYieldPos$d.set,
              enumerable: !0,
              configurable: !0
            })) : (thisYieldPos$d = ObjectGetOwnPropertyDescriptor$q(sent$i, sent$c), ObjectGetOwnPropertyDescriptor$q$f(sent$i, sent$c, {
              get: thisYieldPos$d && thisYieldPos$d.get,
              set: push$u,
              enumerable: !0,
              configurable: !0
            })), sent$e.label = 10);
          case 10:
            return (sent$n++, [3, 1]);
          case 11:
            return [2, sent$i];
        }
      });
    },
    FunctionExpression: function $FunctionExpression(sent$t, sent$r) {
      var sent$i, sent$n;
      return sent$v(this, function(sent$e) {
        return sent$t.id && sent$t.id.name ? (sent$i = new FunctionExpression$P(sent$r), sent$n = FunctionExpression$R(sent$t, sent$i), sent$i.const(sent$t.id.name, sent$n), [2, sent$n]) : [2, FunctionExpression$R(sent$t, sent$r)];
      });
    },
    UnaryExpression: function $UnaryExpression(sent$t, sent$r) {
      var sent$i;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            switch ((sent$i = sent$t.argument, sent$t.operator)) {
              case "+":
                return [3, 1];
              case "-":
                return [3, 3];
              case "!":
                return [3, 5];
              case "~":
                return [3, 7];
              case "void":
                return [3, 9];
              case "typeof":
                return [3, 11];
              case "delete":
                return [3, 15];
            }
            return [3, 20];
          case 1:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 2:
            return [2, +sent$e.sent()];
          case 3:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 4:
            return [2, -sent$e.sent()];
          case 5:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 6:
            return [2, !sent$e.sent()];
          case 7:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 8:
            return [2, ~sent$e.sent()];
          case 9:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 10:
            return [2, void sent$e.sent()];
          case 11:
            return "Identifier" !== sent$i.type ? [3, 13] : [5, sent$b(sent$It(sent$i, sent$r, {
              throwErr: !1
            }))];
          case 12:
            return [2, typeof sent$e.sent()];
          case 13:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 14:
            return [2, typeof sent$e.sent()];
          case 15:
            return "MemberExpression" !== sent$i.type ? [3, 17] : [5, sent$b(sent$Tt(sent$i, sent$r, {
              getVar: !0
            }))];
          case 16:
            return [2, sent$e.sent().del()];
          case 17:
            if ("Identifier" !== sent$i.type) return [3, 18];
            throw new SyntaxError("Delete of an unqualified identifier in strict mode");
          case 18:
            return [5, sent$b(sent$L(sent$i, sent$r))];
          case 19:
            return (sent$e.sent(), [2, !0]);
          case 20:
            throw new SyntaxError("Unexpected token " + sent$t.operator);
        }
      });
    },
    UpdateExpression: function $UpdateExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return "Identifier" !== (sent$i = sent$t.argument).type ? [3, 2] : [5, sent$b(sent$It(sent$i, sent$r, {
              getVar: !0
            }))];
          case 1:
            return (sent$n = sent$e.sent(), [3, 5]);
          case 2:
            return "MemberExpression" !== sent$i.type ? [3, 4] : [5, sent$b(sent$Tt(sent$i, sent$r, {
              getVar: !0
            }))];
          case 3:
            return (sent$n = sent$e.sent(), [3, 5]);
          case 4:
            throw new SyntaxError("Unexpected token");
          case 5:
            if ((sent$s = sent$n.get(), "++" === sent$t.operator)) return (sent$n.set(sent$s + 1), [2, sent$t.prefix ? sent$n.get() : sent$s]);
            if ("--" === sent$t.operator) return (sent$n.set(sent$s - 1), [2, sent$t.prefix ? sent$n.get() : sent$s]);
            throw new SyntaxError("Unexpected token " + sent$t.operator);
        }
      });
    },
    BinaryExpression: function $BinaryExpression(sent$t, sent$r) {
      var sent$i, sent$n;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return "PrivateIdentifier" !== sent$t.left.type ? [3, 2] : (sent$i = sent$t.left.name, [5, sent$b(sent$L(sent$t.right, sent$r))]);
          case 1:
            return (sent$n = (sent$n = sent$e.sent())[SyntaxError$E] || ({}), [3, 5]);
          case 2:
            return [5, sent$b(sent$L(sent$t.left, sent$r))];
          case 3:
            return (sent$i = sent$e.sent(), [5, sent$b(sent$L(sent$t.right, sent$r))]);
          case 4:
            (sent$n = sent$e.sent(), sent$e.label = 5);
          case 5:
            switch (sent$t.operator) {
              case "==":
                return [2, sent$i == sent$n];
              case "!=":
                return [2, sent$i != sent$n];
              case "===":
                return [2, sent$i === sent$n];
              case "!==":
                return [2, sent$i !== sent$n];
              case "<":
                return [2, sent$i < sent$n];
              case "<=":
                return [2, sent$i <= sent$n];
              case ">":
                return [2, sent$n < sent$i];
              case ">=":
                return [2, sent$n <= sent$i];
              case "<<":
                return [2, sent$i << sent$n];
              case ">>":
                return [2, sent$i >> sent$n];
              case ">>>":
                return [2, sent$i >>> sent$n];
              case "+":
                return [2, sent$i + sent$n];
              case "-":
                return [2, sent$i - sent$n];
              case "*":
                return [2, sent$i * sent$n];
              case "**":
                return [2, Math.pow(sent$i, sent$n)];
              case "/":
                return [2, sent$i / sent$n];
              case "%":
                return [2, sent$i % sent$n];
              case "|":
                return [2, sent$i | sent$n];
              case "^":
                return [2, sent$i ^ sent$n];
              case "&":
                return [2, sent$i & sent$n];
              case "in":
                return [2, (sent$i in sent$n)];
              case "instanceof":
                return [2, sent$i instanceof sent$n];
              default:
                throw new SyntaxError("Unexpected token " + sent$t.operator);
            }
        }
      });
    },
    AssignmentExpression: function $AssignmentExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return "Identifier" !== (sent$i = sent$t.left).type ? [3, 2] : [5, sent$b(sent$It(sent$i, sent$r, {
              getVar: !0,
              throwErr: !1
            }))];
          case 1:
            return ((sent$n = sent$e.sent()) || (sent$s = sent$r.global().find("window").get(), sent$n = new find$kt(sent$s, sent$i.name)), [3, 7]);
          case 2:
            return "MemberExpression" !== sent$i.type ? [3, 4] : [5, sent$b(sent$Tt(sent$i, sent$r, {
              getVar: !0
            }))];
          case 3:
            return (sent$n = sent$e.sent(), [3, 7]);
          case 4:
            return [5, sent$b(sent$L(sent$t.right, sent$r))];
          case 5:
            return (sent$s = sent$e.sent(), [5, sent$b(sent$B(sent$i, sent$r, {
              feed: sent$s
            }))]);
          case 6:
            return [2, sent$e.sent()];
          case 7:
            return [5, sent$b(sent$L(sent$t.right, sent$r))];
          case 8:
            switch ((onlyBlock$a = sent$e.sent(), sent$t.operator)) {
              case "=":
                return (sent$n.set(onlyBlock$a), [2, sent$n.get()]);
              case "+=":
                return (sent$n.set(sent$n.get() + onlyBlock$a), [2, sent$n.get()]);
              case "-=":
                return (sent$n.set(sent$n.get() - onlyBlock$a), [2, sent$n.get()]);
              case "*=":
                return (sent$n.set(sent$n.get() * onlyBlock$a), [2, sent$n.get()]);
              case "/=":
                return (sent$n.set(sent$n.get() / onlyBlock$a), [2, sent$n.get()]);
              case "%=":
                return (sent$n.set(sent$n.get() % onlyBlock$a), [2, sent$n.get()]);
              case "**=":
                return (sent$n.set(Math.pow(sent$n.get(), onlyBlock$a)), [2, sent$n.get()]);
              case "<<=":
                return (sent$n.set(sent$n.get() << onlyBlock$a), [2, sent$n.get()]);
              case ">>=":
                return (sent$n.set(sent$n.get() >> onlyBlock$a), [2, sent$n.get()]);
              case ">>>=":
                return (sent$n.set(sent$n.get() >>> onlyBlock$a), [2, sent$n.get()]);
              case "|=":
                return (sent$n.set(sent$n.get() | onlyBlock$a), [2, sent$n.get()]);
              case "^=":
                return (sent$n.set(sent$n.get() ^ onlyBlock$a), [2, sent$n.get()]);
              case "&=":
                return (sent$n.set(sent$n.get() & onlyBlock$a), [2, sent$n.get()]);
              case "??=":
                return (sent$n.set(null != (sent$o = sent$n.get()) ? sent$o : onlyBlock$a), [2, sent$n.get()]);
              case "&&=":
                return (sent$n.set(sent$n.get() && onlyBlock$a), [2, sent$n.get()]);
              case "||=":
                return (sent$n.set(sent$n.get() || onlyBlock$a), [2, sent$n.get()]);
              default:
                throw new SyntaxError("Unexpected token " + sent$t.operator);
            }
        }
      });
    },
    LogicalExpression: function $LogicalExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            switch (sent$t.operator) {
              case "||":
                return [3, 1];
              case "&&":
                return [3, 5];
              case "??":
                return [3, 9];
            }
            return [3, 14];
          case 1:
            return [5, sent$b(sent$L(sent$t.left, sent$r))];
          case 2:
            return (sent$i = sent$e.sent()) ? [3, 4] : [5, sent$b(sent$L(sent$t.right, sent$r))];
          case 3:
            (sent$i = sent$e.sent(), sent$e.label = 4);
          case 4:
            return [2, sent$i];
          case 5:
            return [5, sent$b(sent$L(sent$t.left, sent$r))];
          case 6:
            return (sent$n = sent$e.sent()) ? [5, sent$b(sent$L(sent$t.right, sent$r))] : [3, 8];
          case 7:
            (sent$n = sent$e.sent(), sent$e.label = 8);
          case 8:
            return [2, sent$n];
          case 9:
            return [5, sent$b(sent$L(sent$t.left, sent$r))];
          case 10:
            return null == (onlyBlock$a = sent$e.sent()) ? [3, 11] : (sent$s = onlyBlock$a, [3, 13]);
          case 11:
            return [5, sent$b(sent$L(sent$t.right, sent$r))];
          case 12:
            (sent$s = sent$e.sent(), sent$e.label = 13);
          case 13:
            return [2, sent$s];
          case 14:
            throw new SyntaxError("Unexpected token " + sent$t.operator);
        }
      });
    },
    MemberExpression: sent$Tt,
    ConditionalExpression: function $ConditionalExpression(sent$t, sent$r) {
      var sent$i;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(sent$L(sent$t.test, sent$r))];
          case 1:
            return sent$e.sent() ? [5, sent$b(sent$L(sent$t.consequent, sent$r))] : [3, 3];
          case 2:
            return (sent$i = sent$e.sent(), [3, 5]);
          case 3:
            return [5, sent$b(sent$L(sent$t.alternate, sent$r))];
          case 4:
            (sent$i = sent$e.sent(), sent$e.label = 5);
          case 5:
            return [2, sent$i];
        }
      });
    },
    CallExpression: function $CallExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u, LABEL$p, thisYieldPos$d, ObjectGetOwnPropertyDescriptor$q$f, find$m, thisLastTokEndLoc$y, expect$g;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return "MemberExpression" !== sent$t.callee.type ? [3, 5] : [5, sent$b(sent$Tt(sent$t.callee, sent$r, {
              getObj: !0
            }))];
          case 1:
            return (sent$i = sent$e.sent(), sent$t.callee.optional && null == sent$i) ? [2, void 0] : (sent$n = void 0, sent$s = !1, sent$t.callee.computed ? [5, sent$b(sent$L(sent$t.callee.property, sent$r))] : [3, 3]);
          case 2:
            return (sent$n = sent$e.sent(), [3, 4]);
          case 3:
            ("PrivateIdentifier" === sent$t.callee.property.type ? (sent$n = sent$t.callee.property.name, sent$s = !0) : sent$n = sent$t.callee.property.name, sent$e.label = 4);
          case 4:
            if ((find$m = sent$i, sent$s && (find$m = find$m[SyntaxError$E]), onlyBlock$a = "Super" === sent$t.callee.object.type ? (onlyBlock$a = sent$r.find("this").get(), find$m[sent$n].bind(onlyBlock$a)) : find$m[sent$n], sent$t.optional && null == onlyBlock$a)) return [2, void 0];
            if ("function" != typeof onlyBlock$a) throw new TypeError(sent$n + " is not a function");
            if (onlyBlock$a[TypeError$vt]) throw new TypeError("Class constructor " + sent$n + " cannot be invoked without 'new'");
            return [3, 7];
          case 5:
            return (sent$i = sent$r.find("this").get(), [5, sent$b(sent$L(sent$t.callee, sent$r))]);
          case 6:
            if ((onlyBlock$a = sent$e.sent(), sent$t.optional && null == onlyBlock$a)) return [2, void 0];
            if ("function" != typeof onlyBlock$a || "Super" !== sent$t.callee.type && onlyBlock$a[TypeError$vt]) {
              if ("Identifier" === sent$t.callee.type) sent$o = sent$t.callee.name;
              else try {
                sent$o = JSON.stringify(onlyBlock$a);
              } catch (sent$e) {
                sent$o = "" + onlyBlock$a;
              }
              throw "function" != typeof onlyBlock$a ? new TypeError(sent$o + " is not a function") : new TypeError("Class constructor " + sent$o + " cannot be invoked without 'new'");
            }
            sent$e.label = 7;
          case 7:
            (sent$c = [], sent$h = 0, sent$e.label = 8);
          case 8:
            return sent$h < sent$t.arguments.length ? "SpreadElement" !== (sent$l = sent$t.arguments[sent$h]).type ? [3, 10] : (LABEL$p = (push$u = sent$c).concat, [5, sent$b(concat$Bt(sent$l, sent$r))]) : [3, 13];
          case 9:
            return (sent$c = LABEL$p.apply(push$u, [sent$e.sent()]), [3, 12]);
          case 10:
            return (ObjectGetOwnPropertyDescriptor$q$f = (thisYieldPos$d = sent$c).push, [5, sent$b(sent$L(sent$l, sent$r))]);
          case 11:
            (ObjectGetOwnPropertyDescriptor$q$f.apply(thisYieldPos$d, [sent$e.sent()]), sent$e.label = 12);
          case 12:
            return (sent$h++, [3, 8]);
          case 13:
            if ("Super" !== sent$t.callee.type) return [3, 15];
            if ((find$m = sent$r.find(find$yt), !0 === (expect$g = find$m.get()))) throw new ReferenceError("Super constructor may only be called once");
            return (thisLastTokEndLoc$y = ReferenceError$te(sent$i, onlyBlock$a, sent$c), [5, sent$b(expect$g(thisLastTokEndLoc$y))]);
          case 14:
            return (sent$e.sent(), sent$r.find("this").set(thisLastTokEndLoc$y), sent$r.find(find$yt).set(!0), [2, thisLastTokEndLoc$y]);
          case 15:
            try {
              return [2, onlyBlock$a.apply(sent$i, sent$c)];
            } catch (sent$e) {
              if (sent$e instanceof TypeError && "Illegal invocation" === sent$e.message && -1 !== onlyBlock$a.toString().indexOf("[native code]") && (expect$g = sent$r.global().find("window").get()) && expect$g[apply$oe]) return [2, onlyBlock$a.apply(expect$g[apply$oe], sent$c)];
              throw sent$e;
            }
            return [2];
        }
      });
    },
    NewExpression: function $NewExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(sent$L(sent$t.callee, sent$r))];
          case 1:
            if ("function" != typeof(sent$i = sent$e.sent())) {
              if ("Identifier" === sent$t.callee.type) sent$n = sent$t.callee.name;
              else try {
                sent$n = JSON.stringify(sent$i);
              } catch (sent$e) {
                sent$n = "" + sent$i;
              }
              throw new TypeError(sent$n + " is not a constructor");
            }
            if (sent$i[TypeError$gt]) throw new TypeError((sent$i.name || "(intermediate value)") + " is not a constructor");
            (sent$s = [], onlyBlock$a = 0, sent$e.label = 2);
          case 2:
            return onlyBlock$a < sent$t.arguments.length ? "SpreadElement" !== (sent$o = sent$t.arguments[onlyBlock$a]).type ? [3, 4] : (sent$h = (sent$c = sent$s).concat, [5, sent$b(concat$Bt(sent$o, sent$r))]) : [3, 7];
          case 3:
            return (sent$s = sent$h.apply(sent$c, [sent$e.sent()]), [3, 6]);
          case 4:
            return (push$u = (sent$l = sent$s).push, [5, sent$b(sent$L(sent$o, sent$r))]);
          case 5:
            (push$u.apply(sent$l, [sent$e.sent()]), sent$e.label = 6);
          case 6:
            return (onlyBlock$a++, [3, 2]);
          case 7:
            return [2, new(sent$i.bind.apply(sent$i, apply$j([void 0], sent$s)))()];
        }
      });
    },
    MetaProperty: function $MetaProperty(sent$t, sent$r) {
      return sent$v(this, function(sent$e) {
        return "new" === sent$t.meta.name && "target" === sent$t.property.name ? [2, sent$r.find(arguments$bt).get()] : "import" === sent$t.meta.name && "meta" === sent$t.property.name ? [2, {
          url: ""
        }] : [2];
      });
    },
    SequenceExpression: function $SequenceExpression(sent$t, sent$r) {
      var sent$i, sent$n;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            (sent$n = 0, sent$e.label = 1);
          case 1:
            return sent$n < sent$t.expressions.length ? [5, sent$b(sent$L(sent$t.expressions[sent$n], sent$r))] : [3, 4];
          case 2:
            (sent$i = sent$e.sent(), sent$e.label = 3);
          case 3:
            return (sent$n++, [3, 1]);
          case 4:
            return [2, sent$i];
        }
      });
    },
    ArrowFunctionExpression: function $ArrowFunctionExpression(sent$t, sent$r) {
      return sent$v(this, function(sent$e) {
        return [2, FunctionExpression$R(sent$t, sent$r)];
      });
    },
    TemplateLiteral: function $TemplateLiteral(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            (sent$i = sent$t.quasis.slice(), sent$n = sent$t.expressions.slice(), sent$s = "", sent$e.label = 1);
          case 1:
            return (onlyBlock$a = sent$i.shift()) ? (sent$o = sent$s, [5, sent$b(TemplateElement$Vt(onlyBlock$a))]) : [3, 5];
          case 2:
            return (sent$s = sent$o + sent$e.sent(), onlyBlock$a = sent$n.shift()) ? (sent$c = sent$s, [5, sent$b(sent$L(onlyBlock$a, sent$r))]) : [3, 4];
          case 3:
            (sent$s = sent$c + sent$e.sent(), sent$e.label = 4);
          case 4:
            return [3, 1];
          case 5:
            return [2, sent$s];
        }
      });
    },
    TaggedTemplateExpression: function $TaggedTemplateExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(sent$L(sent$t.tag, sent$r))];
          case 1:
            if ((sent$i = sent$e.sent(), sent$s = sent$t.quasi.quasis, sent$n = sent$s.map(function(sent$e) {
                return sent$e.value.cooked;
              }), sent$s = sent$s.map(function(sent$e) {
                return sent$e.value.raw;
              }), ObjectGetOwnPropertyDescriptor$q$f(sent$n, "raw", {
                value: ObjectFreeze$U(sent$s)
              }), sent$s = sent$t.quasi.expressions, onlyBlock$a = [], !sent$s)) return [3, 5];
            (sent$o = 0, sent$e.label = 2);
          case 2:
            return sent$o < sent$s.length ? (sent$h = (sent$c = onlyBlock$a).push, [5, sent$b(sent$L(sent$s[sent$o], sent$r))]) : [3, 5];
          case 3:
            (sent$h.apply(sent$c, [sent$e.sent()]), sent$e.label = 4);
          case 4:
            return (sent$o++, [3, 2]);
          case 5:
            return [2, sent$i.apply(void 0, apply$j([ObjectFreeze$U(sent$n)], onlyBlock$a))];
        }
      });
    },
    TemplateElement: TemplateElement$Vt,
    ClassExpression: function $ClassExpression(sent$t, sent$r) {
      var sent$i, sent$n;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return sent$t.id && sent$t.id.name ? (sent$i = new FunctionExpression$P(sent$r), [5, sent$b(declaration$bi(sent$t, sent$i))]) : [3, 2];
          case 1:
            return (sent$n = sent$e.sent(), sent$i.const(sent$t.id.name, sent$n), [2, sent$n]);
          case 2:
            return [5, sent$b(declaration$bi(sent$t, sent$r))];
          case 3:
            return [2, sent$e.sent()];
        }
      });
    },
    Super: Super$Nt,
    SpreadElement: concat$Bt,
    ChainExpression: function $ChainExpression(sent$t, sent$r) {
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(sent$L(sent$t.expression, sent$r))];
          case 1:
            return [2, sent$e.sent()];
        }
      });
    },
    ImportExpression: function $ImportExpression(sent$t, sent$r) {
      var sent$i, sent$n, sent$s, onlyBlock$a;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return (sent$i = sent$r.global(), [5, sent$b(sent$L(sent$t.source, sent$r))]);
          case 1:
            return (sent$n = sent$e.sent(), (onlyBlock$a = sent$i.find(find$xt + sent$n)) && (onlyBlock$a = onlyBlock$a.get()) && ("function" == typeof onlyBlock$a ? sent$s = onlyBlock$a() : "object" == typeof onlyBlock$a && (sent$s = onlyBlock$a)), sent$s && "object" == typeof sent$s) ? [2, Promise.resolve(sent$s)] : [2, Promise.reject(new TypeError('Failed to resolve module specifier "' + sent$n + '"'))];
        }
      });
    },
    YieldExpression: function $YieldExpression(sent$t, sent$r) {
      var sent$i, sent$n;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(sent$L(sent$t.argument, sent$r))];
          case 1:
            return (sent$i = sent$e.sent(), sent$t.delegate) ? [5, sent$b(sent$i)] : [3, 3];
          case 2:
            return (sent$n = sent$e.sent(), [3, 5]);
          case 3:
            return [4, sent$i];
          case 4:
            (sent$n = sent$e.sent(), sent$e.label = 5);
          case 5:
            return [2, sent$n];
        }
      });
    },
    AwaitExpression: function $AwaitExpression(sent$t, sent$r) {
      var sent$i;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return (sent$i = done$next$ft, [5, sent$b(sent$L(sent$t.argument, sent$r))]);
          case 1:
            return (sent$i.RES = sent$e.sent(), [4, done$next$ft]);
          case 2:
            return [2, sent$e.sent()];
        }
      });
    }
  });

  function ObjectPattern$Dt(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u, LABEL$p, thisYieldPos$d, ObjectGetOwnPropertyDescriptor$q$f;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$n = sent$i.kind, sent$n = void 0 === sent$n ? "var" : sent$n, sent$s = sent$i.hoist, sent$s = void 0 !== sent$s && sent$s, onlyBlock$a = sent$i.onlyBlock, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$o = sent$i.feed, sent$o = void 0 === sent$o ? {} : sent$o, sent$c = [], sent$h = 0, sent$e.label = 1);
        case 1:
          return sent$h < sent$t.properties.length ? (sent$l = sent$t.properties[sent$h], sent$s ? onlyBlock$a || "var" === sent$n ? "Property" !== sent$l.type ? [3, 5] : "Identifier" !== (LABEL$p = sent$l.value).type ? [3, 2] : (sent$r[sent$n](LABEL$p.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0), [3, 4]) : [3, 7] : [3, 8]) : [3, 18];
        case 2:
          return [5, sent$b(sent$B(LABEL$p, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 3:
          (sent$e.sent(), sent$e.label = 4);
        case 4:
          return [3, 7];
        case 5:
          return [5, sent$b(sent$Mt(sent$l, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 6:
          (sent$e.sent(), sent$e.label = 7);
        case 7:
          return [3, 17];
        case 8:
          return "Property" !== sent$l.type ? [3, 15] : (push$u = void 0, sent$l.computed ? [5, sent$b(sent$L(sent$l.key, sent$r))] : [3, 10]);
        case 9:
          return (push$u = sent$e.sent(), [3, 11]);
        case 10:
          (push$u = sent$l.key.name, sent$e.label = 11);
        case 11:
          return (sent$c.push(push$u), "Identifier" !== (LABEL$p = sent$l.value).type) ? [3, 12] : (sent$r[sent$n](LABEL$p.name, sent$o[push$u]), [3, 14]);
        case 12:
          return [5, sent$b(sent$B(LABEL$p, sent$r, {
            kind: sent$n,
            feed: sent$o[push$u]
          }))];
        case 13:
          (sent$e.sent(), sent$e.label = 14);
        case 14:
          return [3, 17];
        case 15:
          for ((thisYieldPos$d = find$m({}, sent$o), ObjectGetOwnPropertyDescriptor$q$f = 0); ObjectGetOwnPropertyDescriptor$q$f < sent$c.length; ObjectGetOwnPropertyDescriptor$q$f++) delete thisYieldPos$d[sent$c[ObjectGetOwnPropertyDescriptor$q$f]];
          return [5, sent$b(sent$Mt(sent$l, sent$r, {
            kind: sent$n,
            feed: thisYieldPos$d
          }))];
        case 16:
          (sent$e.sent(), sent$e.label = 17);
        case 17:
          return (sent$h++, [3, 1]);
        case 18:
          return [2];
      }
    }));
  }

  function sent$Ot(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$n = sent$i.kind, sent$s = sent$i.hoist, sent$s = void 0 !== sent$s && sent$s, onlyBlock$a = sent$i.onlyBlock, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$o = sent$i.feed, sent$o = void 0 === sent$o ? [] : sent$o, sent$c = [], sent$h = 0, sent$e.label = 1);
        case 1:
          if (!(sent$h < sent$t.elements.length)) return [3, 14];
          if (!(sent$l = sent$t.elements[sent$h])) return [3, 13];
          if (!sent$s) return [3, 5];
          if (onlyBlock$a || "var" === sent$n) {
            if ("Identifier" !== sent$l.type) return [3, 2];
            sent$r[sent$n](sent$l.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0);
          }
          return [3, 4];
        case 2:
          return [5, sent$b(sent$B(sent$l, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 3:
          (sent$e.sent(), sent$e.label = 4);
        case 4:
          return [3, 13];
        case 5:
          return "Identifier" !== sent$l.type ? [3, 9] : sent$n ? (sent$r[sent$n](sent$l.name, sent$o[sent$h]), [3, 8]) : [3, 6];
        case 6:
          return [5, sent$b(sent$It(sent$l, sent$r, {
            getVar: !0
          }))];
        case 7:
          ((push$u = sent$e.sent()).set(sent$o[sent$h]), sent$c.push(push$u.get()), sent$e.label = 8);
        case 8:
          return [3, 13];
        case 9:
          return "RestElement" !== sent$l.type ? [3, 11] : [5, sent$b(sent$Mt(sent$l, sent$r, {
            kind: sent$n,
            feed: sent$o.slice(sent$h)
          }))];
        case 10:
          return (sent$e.sent(), [3, 13]);
        case 11:
          return [5, sent$b(sent$B(sent$l, sent$r, {
            kind: sent$n,
            feed: sent$o[sent$h]
          }))];
        case 12:
          (sent$e.sent(), sent$e.label = 13);
        case 13:
          return (sent$h++, [3, 1]);
        case 14:
          return sent$c.length ? [2, sent$c] : [2];
      }
    }));
  }

  function sent$Mt(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          if ((sent$n = sent$i.kind, sent$s = sent$i.hoist, sent$s = void 0 !== sent$s && sent$s, onlyBlock$a = sent$i.onlyBlock, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$o = sent$i.feed, sent$o = void 0 === sent$o ? [] : sent$o, sent$c = sent$t.argument, !sent$s)) return [3, 4];
          if (onlyBlock$a || "var" === sent$n) {
            if ("Identifier" !== sent$c.type) return [3, 1];
            sent$r[sent$n](sent$c.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0);
          }
          return [3, 3];
        case 1:
          return [5, sent$b(sent$B(sent$c, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 2:
          (sent$e.sent(), sent$e.label = 3);
        case 3:
          return [3, 10];
        case 4:
          return "Identifier" !== sent$c.type ? [3, 8] : sent$n ? (sent$r[sent$n](sent$c.name, sent$o), [3, 7]) : [3, 5];
        case 5:
          return [5, sent$b(sent$It(sent$c, sent$r, {
            getVar: !0
          }))];
        case 6:
          (sent$e.sent().set(sent$o), sent$e.label = 7);
        case 7:
          return [3, 10];
        case 8:
          return [5, sent$b(sent$B(sent$c, sent$r, {
            kind: sent$n,
            feed: sent$o
          }))];
        case 9:
          (sent$e.sent(), sent$e.label = 10);
        case 10:
          return [2];
      }
    }));
  }

  function sent$Ft(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.kind, sent$n = void 0 === sent$n ? "var" : sent$n, sent$s = sent$i.hoist, sent$s = void 0 !== sent$s && sent$s, onlyBlock$a = sent$i.onlyBlock, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, void 0 !== (sent$o = sent$i.feed) ? [3, 2] : [5, sent$b(sent$L(sent$t.right, sent$r))]);
        case 1:
          return (sent$h = sent$e.sent(), [3, 3]);
        case 2:
          (sent$h = sent$o, sent$e.label = 3);
        case 3:
          if ((sent$c = sent$h, sent$l = sent$t.left, !sent$s)) return [3, 7];
          if (onlyBlock$a || "var" === sent$n) {
            if ("Identifier" !== sent$l.type) return [3, 4];
            sent$r[sent$n](sent$l.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0);
          }
          return [3, 6];
        case 4:
          return [5, sent$b(sent$B(sent$l, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 5:
          (sent$e.sent(), sent$e.label = 6);
        case 6:
          return [3, 10];
        case 7:
          return "Identifier" !== sent$l.type ? [3, 8] : (sent$r[sent$n](sent$l.name, sent$c), [3, 10]);
        case 8:
          return [5, sent$b(sent$B(sent$l, sent$r, {
            kind: sent$n,
            feed: sent$c
          }))];
        case 9:
          (sent$e.sent(), sent$e.label = 10);
        case 10:
          return [2];
      }
    }));
  }
  var ObjectFreeze$jt = Object.freeze({
    __proto__: null,
    ObjectPattern: ObjectPattern$Dt,
    ArrayPattern: sent$Ot,
    RestElement: sent$Mt,
    AssignmentPattern: sent$Ft
  });
  var sent$Ut, ObjectFreeze$qt = Object.freeze({
    __proto__: null,
    Program: function $Program(sent$t, sent$r) {
      var sent$i;
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            (sent$i = 0, sent$e.label = 1);
          case 1:
            return sent$i < sent$t.body.length ? [5, sent$b(sent$L(sent$t.body[sent$i], sent$r))] : [3, 4];
          case 2:
            (sent$e.sent(), sent$e.label = 3);
          case 3:
            return (sent$i++, [3, 1]);
          case 4:
            return [2];
        }
      });
    }
  });

  function sent$L(sent$t, sent$r) {
    var sent$i;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return sent$t ? (sent$Ut = sent$Ut || find$m({}, ObjectFreeze$O, ObjectFreeze$Rt, ObjectFreeze$At, ObjectFreeze$D, ObjectFreeze$Lt, ObjectFreeze$jt, ObjectFreeze$qt), (sent$i = sent$Ut[sent$t.type]) ? [5, sent$b(sent$i(sent$t, sent$r))] : [3, 2]) : [2];
        case 1:
          return [2, sent$e.sent()];
        case 2:
          throw new Error(sent$t.type + " isn't implemented");
      }
    });
  }

  function ExpressionStatement$Wt(sent$t, sent$r) {
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.expression, sent$r))];
        case 1:
          return (sent$e.sent(), [2]);
      }
    });
  }

  function body$Gt(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.invasived, sent$n = void 0 !== sent$n && sent$n, onlyBlock$a = sent$i.hoisted, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$n = sent$n ? sent$r : new FunctionExpression$P(sent$r), onlyBlock$a ? [3, 2] : [5, sent$b(body$vi(sent$t, sent$n, {
            onlyBlock: !0
          }))]);
        case 1:
          (sent$e.sent(), sent$e.label = 2);
        case 2:
          (sent$s = 0, sent$e.label = 3);
        case 3:
          return sent$s < sent$t.body.length ? [5, sent$b(sent$L(sent$t.body[sent$s], sent$n))] : [3, 6];
        case 4:
          if ((onlyBlock$a = sent$e.sent()) === sent$_) return onlyBlock$a.LABEL && onlyBlock$a.LABEL === sent$i.label ? [3, 6] : [2, onlyBlock$a];
          if (onlyBlock$a === LABEL$k || onlyBlock$a === LABEL$S) return [2, onlyBlock$a];
          sent$e.label = 5;
        case 5:
          return (sent$s++, [3, 3]);
        case 6:
          return [2];
      }
    }));
  }

  function EmptyStatement$Ht() {
    return sent$v(this, function(sent$e) {
      return [2];
    });
  }

  function DebuggerStatement$zt() {
    return sent$v(this, function(sent$e) {
      debugger;
      return [2];
    });
  }

  function ReturnStatement$Kt(sent$t, sent$r) {
    var sent$i, sent$n;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$i = LABEL$S, sent$t.argument) ? [5, sent$b(sent$L(sent$t.argument, sent$r))] : [3, 2];
        case 1:
          return (sent$n = sent$e.sent(), [3, 3]);
        case 2:
          (sent$n = void 0, sent$e.label = 3);
        case 3:
          return (sent$i.RES = sent$n, [2, LABEL$S]);
      }
    });
  }

  function BreakStatement$Qt(sent$t) {
    var sent$r;
    return sent$v(this, function(sent$e) {
      return (sent$_.LABEL = null == (sent$r = sent$t.label) ? void 0 : sent$r.name, [2, sent$_]);
    });
  }

  function ContinueStatement$Xt(sent$t) {
    var sent$r;
    return sent$v(this, function(sent$e) {
      return (LABEL$k.LABEL = null == (sent$r = sent$t.label) ? void 0 : sent$r.name, [2, LABEL$k]);
    });
  }

  function LabeledStatement$Yt(sent$t, sent$r) {
    var sent$i;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$i = sent$t.label.name, "WhileStatement" !== sent$t.body.type ? [3, 2] : [5, sent$b(WhileStatement$nr(sent$t.body, sent$r, {
            label: sent$i
          }))]);
        case 1:
          return [2, sent$e.sent()];
        case 2:
          return "DoWhileStatement" !== sent$t.body.type ? [3, 4] : [5, sent$b(DoWhileStatement$sr(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 3:
          return [2, sent$e.sent()];
        case 4:
          return "ForStatement" !== sent$t.body.type ? [3, 6] : [5, sent$b(ForStatement$ar(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 5:
          return [2, sent$e.sent()];
        case 6:
          return "ForInStatement" !== sent$t.body.type ? [3, 8] : [5, sent$b(ForInStatement$or(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 7:
          return [2, sent$e.sent()];
        case 8:
          return "ForOfStatement" !== sent$t.body.type ? [3, 10] : [5, sent$b(ForOfStatement$cr(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 9:
          return [2, sent$e.sent()];
        case 10:
          return "BlockStatement" !== sent$t.body.type ? [3, 12] : [5, sent$b(body$Gt(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 11:
          return [2, sent$e.sent()];
        case 12:
          return "WithStatement" !== sent$t.body.type ? [3, 14] : [5, sent$b(body$Zt(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 13:
          return [2, sent$e.sent()];
        case 14:
          return "IfStatement" !== sent$t.body.type ? [3, 16] : [5, sent$b(IfStatement$Jt(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 15:
          return [2, sent$e.sent()];
        case 16:
          return "SwitchStatement" !== sent$t.body.type ? [3, 18] : [5, sent$b(SwitchStatement$$t(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 17:
          return [2, sent$e.sent()];
        case 18:
          return "TryStatement" !== sent$t.body.type ? [3, 20] : [5, sent$b(TryStatement$rr(sent$t.body, sent$r, {
            label: sent$i
          }))];
        case 19:
          return [2, sent$e.sent()];
        case 20:
          throw new SyntaxError(sent$t.body.type + " cannot be labeled");
      }
    });
  }

  function body$Zt(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = new FunctionExpression$P(sent$r), onlyBlock$a = (sent$s = sent$n).with, [5, sent$b(sent$L(sent$t.object, sent$r))]);
        case 1:
          return (onlyBlock$a.apply(sent$s, [sent$e.sent()]), [5, sent$b(sent$L(sent$t.body, sent$n))]);
        case 2:
          return (sent$o = sent$e.sent()) === sent$_ ? sent$o.LABEL && sent$o.LABEL === sent$i.label ? [2] : [2, sent$o] : sent$o === LABEL$k || sent$o === LABEL$S ? [2, sent$o] : [2];
      }
    }));
  }

  function IfStatement$Jt(sent$t, sent$r, sent$i) {
    var sent$n;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.test, sent$r))];
        case 1:
          return sent$e.sent() ? [5, sent$b(sent$L(sent$t.consequent, sent$r))] : [3, 3];
        case 2:
          return (sent$n = sent$e.sent(), [3, 5]);
        case 3:
          return [5, sent$b(sent$L(sent$t.alternate, sent$r))];
        case 4:
          (sent$n = sent$e.sent(), sent$e.label = 5);
        case 5:
          return sent$n === sent$_ ? sent$n.LABEL && sent$n.LABEL === sent$i.label ? [2] : [2, sent$n] : sent$n === LABEL$k || sent$n === LABEL$S ? [2, sent$n] : [2];
      }
    }));
  }

  function SwitchStatement$$t(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.discriminant, sent$r))];
        case 1:
          (sent$n = sent$e.sent(), sent$s = !1, onlyBlock$a = 0, sent$e.label = 2);
        case 2:
          return onlyBlock$a < sent$t.cases.length ? (sent$o = sent$t.cases[onlyBlock$a], (sent$c = !sent$s) ? (sent$h = !sent$o.test) ? [3, 4] : [5, sent$b(sent$L(sent$o.test, sent$r))] : [3, 5]) : [3, 8];
        case 3:
          (sent$h = sent$e.sent() === sent$n, sent$e.label = 4);
        case 4:
          (sent$c = sent$h, sent$e.label = 5);
        case 5:
          return (sent$s = !!sent$c || sent$s) ? [5, sent$b(SwitchCase$er(sent$o, sent$r))] : [3, 7];
        case 6:
          if ((sent$l = sent$e.sent()) === sent$_) return sent$l.LABEL === sent$i.label ? [3, 8] : [2, sent$l];
          if (sent$l === LABEL$k || sent$l === LABEL$S) return [2, sent$l];
          sent$e.label = 7;
        case 7:
          return (onlyBlock$a++, [3, 2]);
        case 8:
          return [2];
      }
    }));
  }

  function SwitchCase$er(sent$t, sent$r) {
    var sent$i, sent$n;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$i = 0, sent$e.label = 1);
        case 1:
          return sent$i < sent$t.consequent.length ? [5, sent$b(sent$L(sent$t.consequent[sent$i], sent$r))] : [3, 4];
        case 2:
          if ((sent$n = sent$e.sent()) === sent$_ || sent$n === LABEL$k || sent$n === LABEL$S) return [2, sent$n];
          sent$e.label = 3;
        case 3:
          return (sent$i++, [3, 1]);
        case 4:
          return [2];
      }
    });
  }

  function ThrowStatement$tr(sent$t, sent$r) {
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.argument, sent$r))];
        case 1:
          throw sent$e.sent();
      }
    });
  }

  function TryStatement$rr(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$e.trys.push([0, 2, 9, 12]), [5, sent$b(body$Gt(sent$t.block, sent$r))]);
        case 1:
          return (sent$n = sent$e.sent(), [3, 12]);
        case 2:
          if ((sent$s = sent$e.sent(), !sent$t.handler)) return [3, 7];
          if ((onlyBlock$a = new FunctionExpression$P(sent$r), sent$o = sent$t.handler.param)) {
            if ("Identifier" !== sent$o.type) return [3, 3];
            (sent$c = sent$o.name, onlyBlock$a.var(sent$c, sent$s));
          }
          return [3, 5];
        case 3:
          return [5, sent$b(sent$B(sent$o, sent$r, {
            feed: sent$s
          }))];
        case 4:
          (sent$e.sent(), sent$e.label = 5);
        case 5:
          return [5, sent$b(CatchClause$ir(sent$t.handler, onlyBlock$a))];
        case 6:
          return (sent$n = sent$e.sent(), [3, 8]);
        case 7:
          throw sent$s;
        case 8:
          return [3, 12];
        case 9:
          return sent$t.finalizer ? [5, sent$b(body$Gt(sent$t.finalizer, sent$r))] : [3, 11];
        case 10:
          (sent$n = sent$e.sent(), sent$e.label = 11);
        case 11:
          return [7];
        case 12:
          return sent$n === sent$_ ? sent$n.LABEL && sent$n.LABEL === sent$i.label ? [2] : [2, sent$n] : sent$n === LABEL$k || sent$n === LABEL$S ? [2, sent$n] : [2];
      }
    }));
  }

  function CatchClause$ir(sent$t, sent$r) {
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(body$Gt(sent$t.body, sent$r, {
            invasived: !0
          }))];
        case 1:
          return [2, sent$e.sent()];
      }
    });
  }

  function WhileStatement$nr(sent$t, sent$r, sent$i) {
    var sent$n;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.test, sent$r))];
        case 1:
          return sent$e.sent() ? [5, sent$b(sent$L(sent$t.body, sent$r))] : [3, 3];
        case 2:
          return (sent$n = sent$e.sent()) === sent$_ ? sent$n.LABEL === sent$i.label ? [3, 3] : [2, sent$n] : sent$n === LABEL$k ? sent$n.LABEL === sent$i.label ? [3, 0] : [2, sent$n] : sent$n === LABEL$S ? [2, sent$n] : [3, 0];
        case 3:
          return [2];
      }
    }));
  }

  function DoWhileStatement$sr(sent$t, sent$r, sent$i) {
    var sent$n;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.body, sent$r))];
        case 1:
          if ((sent$n = sent$e.sent()) === sent$_) return sent$n.LABEL === sent$i.label ? [3, 4] : [2, sent$n];
          if (sent$n === LABEL$k) return sent$n.LABEL === sent$i.label ? [3, 2] : [2, sent$n];
          if (sent$n === LABEL$S) return [2, sent$n];
          sent$e.label = 2;
        case 2:
          return [5, sent$b(sent$L(sent$t.test, sent$r))];
        case 3:
          if (sent$e.sent()) return [3, 0];
          sent$e.label = 4;
        case 4:
          return [2];
      }
    }));
  }

  function ForStatement$ar(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = new FunctionExpression$P(sent$r), [5, sent$b(sent$L(sent$t.init, sent$n))]);
        case 1:
          (sent$e.sent(), sent$e.label = 2);
        case 2:
          return sent$t.test ? [5, sent$b(sent$L(sent$t.test, sent$n))] : [3, 4];
        case 3:
          return (sent$s = sent$e.sent(), [3, 5]);
        case 4:
          (sent$s = !0, sent$e.label = 5);
        case 5:
          return sent$s ? (onlyBlock$a = new FunctionExpression$P(sent$n), sent$o = void 0, "BlockStatement" !== sent$t.body.type ? [3, 7] : [5, sent$b(body$Gt(sent$t.body, onlyBlock$a, {
            invasived: !0
          }))]) : [3, 12];
        case 6:
          return (sent$o = sent$e.sent(), [3, 9]);
        case 7:
          return [5, sent$b(sent$L(sent$t.body, onlyBlock$a))];
        case 8:
          (sent$o = sent$e.sent(), sent$e.label = 9);
        case 9:
          if (sent$o === sent$_) return sent$o.LABEL === sent$i.label ? [3, 12] : [2, sent$o];
          if (sent$o === LABEL$k) return sent$o.LABEL === sent$i.label ? [3, 10] : [2, sent$o];
          if (sent$o === LABEL$S) return [2, sent$o];
          sent$e.label = 10;
        case 10:
          return [5, sent$b(sent$L(sent$t.update, sent$n))];
        case 11:
          return (sent$e.sent(), [3, 2]);
        case 12:
          return [2];
      }
    }));
  }

  function ForInStatement$or(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = [], [5, sent$b(sent$L(sent$t.right, sent$r))]);
        case 1:
          for (sent$s in sent$e.sent()) sent$n.push(sent$s);
          (onlyBlock$a = 0, sent$e.label = 2);
        case 2:
          return onlyBlock$a < sent$n.length ? (sent$o = sent$n[onlyBlock$a], [5, sent$b(done$xi(sent$t, sent$r, {
            value: sent$o
          }))]) : [3, 5];
        case 3:
          if ((sent$o = sent$e.sent()) === sent$_) return sent$o.LABEL === sent$i.label ? [3, 5] : [2, sent$o];
          if (sent$o === LABEL$k) return sent$o.LABEL === sent$i.label ? [3, 4] : [2, sent$o];
          if (sent$o === LABEL$S) return [2, sent$o];
          sent$e.label = 4;
        case 4:
          return (onlyBlock$a++, [3, 2]);
        case 5:
          return [2];
      }
    }));
  }

  function ForOfStatement$cr(sent$n, sent$s, onlyBlock$a) {
    var sent$o, sent$c, sent$h, sent$l, push$u, LABEL$p, thisYieldPos$d, ObjectGetOwnPropertyDescriptor$q$f, find$m;
    return (void 0 === onlyBlock$a && (onlyBlock$a = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$n.right, sent$s))];
        case 1:
          return (sent$o = sent$e.sent(), sent$n.await) ? (sent$t = sent$o, sent$c = (sent$r = "function" == typeof Symbol ? (sent$r = sent$t[Symbol.asyncIterator]) || sent$t[Symbol.iterator] : sent$r) ? sent$r.call(sent$t) : "function" == typeof sent$t.next ? sent$t : (sent$i = 0, {
            next: function $next() {
              return {
                value: (sent$t = sent$t && sent$i >= sent$t.length ? void 0 : sent$t) && sent$t[sent$i++],
                done: !sent$t
              };
            }
          }), sent$h = void 0, done$next$ft.RES = sent$c.next(), [4, done$next$ft]) : [3, 8];
        case 2:
          (sent$h = sent$e.sent(), sent$e.label = 3);
        case 3:
          return sent$h.done ? [3, 7] : [5, sent$b(done$xi(sent$n, sent$s, {
            value: sent$h.value
          }))];
        case 4:
          if ((LABEL$p = sent$e.sent()) === sent$_) return LABEL$p.LABEL === onlyBlock$a.label ? [3, 7] : [2, LABEL$p];
          if (LABEL$p === LABEL$k) return LABEL$p.LABEL === onlyBlock$a.label ? [3, 5] : [2, LABEL$p];
          if (LABEL$p === LABEL$S) return [2, LABEL$p];
          sent$e.label = 5;
        case 5:
          return (done$next$ft.RES = sent$c.next(), [4, done$next$ft]);
        case 6:
          return (sent$h = sent$e.sent(), [3, 3]);
        case 7:
          return [3, 15];
        case 8:
          (sent$e.trys.push([8, 13, 14, 15]), sent$l = sent$b(sent$o), push$u = sent$l.next(), sent$e.label = 9);
        case 9:
          return push$u.done ? [3, 12] : (thisYieldPos$d = push$u.value, [5, sent$b(done$xi(sent$n, sent$s, {
            value: thisYieldPos$d
          }))]);
        case 10:
          if ((LABEL$p = sent$e.sent()) === sent$_) return LABEL$p.LABEL === onlyBlock$a.label ? [3, 12] : [2, LABEL$p];
          if (LABEL$p === LABEL$k) return LABEL$p.LABEL === onlyBlock$a.label ? [3, 11] : [2, LABEL$p];
          if (LABEL$p === LABEL$S) return [2, LABEL$p];
          sent$e.label = 11;
        case 11:
          return (push$u = sent$l.next(), [3, 9]);
        case 12:
          return [3, 15];
        case 13:
          return (thisYieldPos$d = sent$e.sent(), ObjectGetOwnPropertyDescriptor$q$f = {
            error: thisYieldPos$d
          }, [3, 15]);
        case 14:
          try {
            push$u && !push$u.done && (find$m = sent$l.return) && find$m.call(sent$l);
          } finally {
            if (ObjectGetOwnPropertyDescriptor$q$f) throw ObjectGetOwnPropertyDescriptor$q$f.error;
          }
          return [7];
        case 15:
          return [2];
      }
      var sent$t, sent$r, sent$i;
    }));
  }

  function FunctionDeclaration$hr(sent$t, sent$r) {
    return sent$v(this, function(sent$e) {
      return (sent$r.func(sent$t.id.name, FunctionExpression$R(sent$t, sent$r)), [2]);
    });
  }

  function left$lr(sent$t, sent$r, sent$i) {
    var sent$n;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$n = 0, sent$e.label = 1);
        case 1:
          return sent$n < sent$t.declarations.length ? [5, sent$b(VariableDeclarator$ur(sent$t.declarations[sent$n], sent$r, find$m({
            kind: sent$t.kind
          }, sent$i)))] : [3, 4];
        case 2:
          (sent$e.sent(), sent$e.label = 3);
        case 3:
          return (sent$n++, [3, 1]);
        case 4:
          return [2];
      }
    }));
  }

  function VariableDeclarator$ur(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          if ((sent$n = sent$i.kind, sent$n = void 0 === sent$n ? "var" : sent$n, sent$s = sent$i.hoist, sent$s = void 0 !== sent$s && sent$s, onlyBlock$a = sent$i.onlyBlock, onlyBlock$a = void 0 !== onlyBlock$a && onlyBlock$a, sent$o = sent$i.feed, !sent$s)) return [3, 4];
          if (onlyBlock$a || "var" === sent$n) {
            if ("Identifier" !== sent$t.id.type) return [3, 1];
            sent$r[sent$n](sent$t.id.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0);
          }
          return [3, 3];
        case 1:
          return [5, sent$b(sent$B(sent$t.id, sent$r, {
            kind: sent$n,
            hoist: sent$s,
            onlyBlock: onlyBlock$a
          }))];
        case 2:
          (sent$e.sent(), sent$e.label = 3);
        case 3:
          return [3, 10];
        case 4:
          return (sent$c = ("feed" in sent$i)) ? (sent$l = sent$o, [3, 7]) : [3, 5];
        case 5:
          return [5, sent$b(sent$L(sent$t.init, sent$r))];
        case 6:
          (sent$l = sent$e.sent(), sent$e.label = 7);
        case 7:
          return (sent$h = sent$l, "Identifier" !== sent$t.id.type) ? [3, 8] : (push$u = sent$t.id.name, "var" !== sent$n || sent$t.init || sent$c ? sent$r[sent$n](push$u, sent$h) : sent$r.var(push$u, properties$C), sent$t.init && -1 !== ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(sent$t.init.type) && !sent$h.name && ObjectGetOwnPropertyDescriptor$q$f(sent$h, "name", {
            value: push$u,
            configurable: !0
          }), [3, 10]);
        case 8:
          return [5, sent$b(sent$B(sent$t.id, sent$r, {
            kind: sent$n,
            feed: sent$h
          }))];
        case 9:
          (sent$e.sent(), sent$e.label = 10);
        case 10:
          return [2];
      }
    }));
  }

  function ClassDeclaration$pr(sent$t, sent$r) {
    var sent$i, sent$n, sent$s;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = (sent$i = sent$r).func, sent$s = [sent$t.id.name], [5, sent$b(declaration$bi(sent$t, sent$r))]);
        case 1:
          return (sent$n.apply(sent$i, sent$s.concat([sent$e.sent()])), [2]);
      }
    });
  }

  function ClassBody$dr(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$n = sent$i.klass, sent$s = sent$i.superClass, onlyBlock$a = 0, sent$e.label = 1);
        case 1:
          return onlyBlock$a < sent$t.body.length ? "MethodDefinition" !== (sent$o = sent$t.body[onlyBlock$a]).type ? [3, 3] : [5, sent$b(MethodDefinition$fr(sent$o, sent$r, {
            klass: sent$n,
            superClass: sent$s
          }))] : [3, 8];
        case 2:
          return (sent$e.sent(), [3, 7]);
        case 3:
          return "PropertyDefinition" === sent$o.type && sent$o.static ? [5, sent$b(static$mr(sent$o, sent$r, {
            klass: sent$n,
            superClass: sent$s
          }))] : [3, 5];
        case 4:
          return (sent$e.sent(), [3, 7]);
        case 5:
          return "StaticBlock" !== sent$o.type ? [3, 7] : [5, sent$b(sent$yr(sent$o, sent$r, {
            klass: sent$n,
            superClass: sent$s
          }))];
        case 6:
          (sent$e.sent(), sent$e.label = 7);
        case 7:
          return (onlyBlock$a++, [3, 1]);
        case 8:
          return [2];
      }
    }));
  }

  function MethodDefinition$fr(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.klass, sent$s = sent$i.superClass, sent$o = !1, sent$t.computed) ? [5, sent$b(sent$L(sent$t.key, sent$r))] : [3, 2];
        case 1:
          return (onlyBlock$a = sent$e.sent(), [3, 3]);
        case 2:
          if ("Identifier" === sent$t.key.type) onlyBlock$a = sent$t.key.name;
          else {
            if ("PrivateIdentifier" !== sent$t.key.type) throw new SyntaxError("Unexpected token");
            (onlyBlock$a = sent$t.key.name, sent$o = !0);
          }
          sent$e.label = 3;
        case 3:
          switch ((sent$c = sent$t.static ? sent$n : sent$n.prototype, sent$o && (sent$c[SyntaxError$E] || ObjectGetOwnPropertyDescriptor$q$f(sent$c, SyntaxError$E, {
              value: {}
            }), sent$c = sent$c[SyntaxError$E]), sent$h = FunctionExpression$R(sent$t.value, sent$r, {
              superClass: sent$s
            }), sent$t.kind)) {
            case "constructor":
              break;
            case "method":
              ObjectGetOwnPropertyDescriptor$q$f(sent$c, onlyBlock$a, {
                value: sent$h,
                writable: !0,
                configurable: !0
              });
              break;
            case "get":
              (sent$l = ObjectGetOwnPropertyDescriptor$q(sent$c, onlyBlock$a), ObjectGetOwnPropertyDescriptor$q$f(sent$c, onlyBlock$a, {
                get: sent$h,
                set: sent$l && sent$l.set,
                configurable: !0
              }));
              break;
            case "set":
              (sent$l = ObjectGetOwnPropertyDescriptor$q(sent$c, onlyBlock$a), ObjectGetOwnPropertyDescriptor$q$f(sent$c, onlyBlock$a, {
                get: sent$l && sent$l.get,
                set: sent$h,
                configurable: !0
              }));
              break;
            default:
              throw new SyntaxError("Unexpected token");
          }
          return [2];
      }
    }));
  }

  function static$mr(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.klass, sent$s = sent$i.superClass, sent$o = !1, sent$t.computed) ? [5, sent$b(sent$L(sent$t.key, sent$r))] : [3, 2];
        case 1:
          return (onlyBlock$a = sent$e.sent(), [3, 3]);
        case 2:
          if ("Identifier" === sent$t.key.type) onlyBlock$a = sent$t.key.name;
          else {
            if ("PrivateIdentifier" !== sent$t.key.type) throw new SyntaxError("Unexpected token");
            (onlyBlock$a = sent$t.key.name, sent$o = !0);
          }
          sent$e.label = 3;
        case 3:
          return ((sent$c = new FunctionExpression$P(sent$r, !0)).const("this", sent$n), sent$h = sent$n, sent$o && (sent$h[SyntaxError$E] || ObjectGetOwnPropertyDescriptor$q$f(sent$h, SyntaxError$E, {
            value: {}
          }), sent$h = sent$h[SyntaxError$E]), sent$t.value) ? [3, 4] : (sent$h[onlyBlock$a] = void 0, [3, 7]);
        case 4:
          return "FunctionExpression" !== sent$t.value.type && "ArrowFunctionExpression" !== sent$t.value.type ? [3, 5] : (sent$h[onlyBlock$a] = FunctionExpression$R(sent$t.value, sent$c, {
            superClass: sent$s
          }), [3, 7]);
        case 5:
          return (sent$l = sent$h, push$u = onlyBlock$a, [5, sent$b(sent$L(sent$t.value, sent$c))]);
        case 6:
          (sent$l[push$u] = sent$e.sent(), sent$e.label = 7);
        case 7:
          return [2];
      }
    }));
  }

  function sent$yr(sent$t, sent$r, sent$i) {
    var sent$n, sent$s;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.klass, (sent$s = new FunctionExpression$P(sent$r, !0)).const("this", sent$n), [5, sent$b(body$Gt(sent$t, sent$s, {
            invasived: !0
          }))]);
        case 1:
          return [2, sent$e.sent()];
      }
    }));
  }

  function ImportDeclaration$gr(sent$t, sent$r) {
    var sent$i, sent$n, sent$s, onlyBlock$a, sent$o;
    return sent$v(this, function(sent$e) {
      if ((sent$n = sent$r.global(), (sent$n = sent$n.find(find$xt + sent$t.source.value)) && (sent$n = sent$n.get()) && ("function" == typeof sent$n ? sent$i = sent$n() : "object" == typeof sent$n && (sent$i = sent$n)), !sent$i || "object" != typeof sent$i)) throw new TypeError('Failed to resolve module specifier "' + sent$t.source.value + '"');
      for (sent$s = 0; sent$s < sent$t.specifiers.length; sent$s++) {
        if ((onlyBlock$a = sent$t.specifiers[sent$s], sent$o = void 0, "ImportSpecifier" === onlyBlock$a.type ? sent$o = "Identifier" === onlyBlock$a.imported.type ? onlyBlock$a.imported.name : onlyBlock$a.imported.value : "ImportDefaultSpecifier" === onlyBlock$a.type ? sent$o = "default" : "ImportNamespaceSpecifier" === onlyBlock$a.type && (sent$o = "*"), "*" !== sent$o && !imported$G(sent$i, sent$o))) throw new SyntaxError('The requested module "' + sent$t.source.value + '" does not provide an export named "' + sent$o + '"');
        sent$r.var(onlyBlock$a.local.name, "*" === sent$o ? find$m({}, sent$i) : sent$i[sent$o]);
      }
      return [2];
    });
  }

  function ExportDefaultDeclaration$vr(sent$t, sent$r) {
    var sent$i, sent$n, sent$s;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$i = sent$r.global(), "FunctionDeclaration" !== sent$t.declaration.type) ? [3, 1] : (sent$n = FunctionExpression$R(sent$t.declaration, sent$r), sent$r.func(sent$t.declaration.id.name, sent$n), [3, 5]);
        case 1:
          return "ClassDeclaration" !== sent$t.declaration.type ? [3, 3] : [5, sent$b(declaration$bi(sent$t.declaration, sent$r))];
        case 2:
          return (sent$n = sent$e.sent(), sent$r.func(sent$t.declaration.id.name, sent$n), [3, 5]);
        case 3:
          return [5, sent$b(sent$L(sent$t.declaration, sent$r))];
        case 4:
          (sent$n = sent$e.sent(), sent$e.label = 5);
        case 5:
          return ((sent$s = sent$i.find(find$A)) && (sent$s = sent$s.get()) && "object" == typeof sent$s && (sent$s.default = sent$n), [2]);
      }
    });
  }

  function ExportNamedDeclaration$br(sent$t, sent$r) {
    var sent$i, sent$n, sent$s, onlyBlock$a, sent$o, sent$c, sent$h, sent$l, push$u, LABEL$p, thisYieldPos$d;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$i = sent$r.global(), sent$t.declaration) ? "FunctionDeclaration" !== sent$t.declaration.type ? [3, 1] : (sent$n = FunctionExpression$R(sent$t.declaration, sent$r), sent$r.func(sent$t.declaration.id.name, sent$n), (sent$c = sent$i.find(find$A)) && (sent$s = sent$c.get()) && "object" == typeof sent$s && (sent$s[sent$t.declaration.id.name] = sent$n), [3, 5]) : [3, 6];
        case 1:
          return "ClassDeclaration" !== sent$t.declaration.type ? [3, 3] : [5, sent$b(declaration$bi(sent$t.declaration, sent$r))];
        case 2:
          return (sent$n = sent$e.sent(), sent$r.func(sent$t.declaration.id.name, sent$n), (sent$c = sent$i.find(find$A)) && (sent$s = sent$c.get()) && "object" == typeof sent$s && (sent$s[sent$t.declaration.id.name] = sent$n), [3, 5]);
        case 3:
          return "VariableDeclaration" !== sent$t.declaration.type ? [3, 5] : [5, sent$b(left$lr(sent$t.declaration, sent$r))];
        case 4:
          if ((sent$e.sent(), (sent$c = sent$i.find(find$A)) && (onlyBlock$a = sent$c.get()) && "object" == typeof onlyBlock$a))
            for (sent$l = 0; sent$l < sent$t.declaration.declarations.length; sent$l++)(sent$o = sent$t.declaration.declarations[sent$l].id.name, (thisYieldPos$d = sent$r.find(sent$o)) && (onlyBlock$a[sent$o] = thisYieldPos$d.get()));
          sent$e.label = 5;
        case 5:
          return [3, 7];
        case 6:
          if (sent$t.specifiers && (sent$c = sent$i.find(find$A)) && (sent$h = sent$c.get()) && "object" == typeof sent$h)
            for (sent$l = 0; sent$l < sent$t.specifiers.length; sent$l++)(push$u = sent$t.specifiers[sent$l], LABEL$p = "Identifier" === push$u.local.type ? push$u.local.name : push$u.local.value, (thisYieldPos$d = sent$r.find(LABEL$p)) && (sent$h["Identifier" === push$u.exported.type ? push$u.exported.name : push$u.exported.value] = thisYieldPos$d.get()));
          sent$e.label = 7;
        case 7:
          return [2];
      }
    });
  }

  function ExportAllDeclaration$xr(sent$t, sent$r) {
    var sent$i, sent$n, sent$s;
    return sent$v(this, function(sent$e) {
      if ((sent$s = sent$r.global(), (sent$n = sent$s.find(find$xt + sent$t.source.value)) && (sent$n = sent$n.get()) && ("function" == typeof sent$n ? sent$i = sent$n() : "object" == typeof sent$n && (sent$i = sent$n)), sent$i && "object" == typeof sent$i)) return ((sent$n = sent$s.find(find$A)) && (sent$s = sent$n.get()) && "object" == typeof sent$s && find$m(sent$s, sent$i), [2]);
      throw new TypeError('Failed to resolve module specifier "' + sent$t.source.value + '"');
    });
  }

  function onlyBlock$wr(sent$e, sent$t, sent$r) {
    var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).getVar,
      sent$i = void 0 !== sent$i && sent$i,
      sent$r = sent$r.throwErr,
      sent$r = void 0 === sent$r || sent$r;
    if ("undefined" !== sent$e.name) {
      sent$t = sent$t.find(sent$e.name);
      if (sent$t) {
        if (sent$i) return sent$t;
        sent$i = sent$t.get();
        if (sent$i === properties$I) throw new ReferenceError(sent$e.name + " is not defined");
        return sent$i;
      }
      if (sent$r) throw new ReferenceError(sent$e.name + " is not defined");
    }
  }
  var ObjectFreeze$Sr = Object.freeze({
    __proto__: null,
    Identifier: onlyBlock$wr
  });

  function Identifier$kr(sent$e, sent$t) {
    return sent$e.value;
  }
  var ObjectFreeze$_r = Object.freeze({
    __proto__: null,
    Literal: Identifier$kr
  });

  function MemberExpression$Er(sent$e, sent$t, sent$r) {
    var sent$i, sent$n = (sent$r = void 0 === sent$r ? {} : sent$r).getObj,
      sent$n = void 0 !== sent$n && sent$n,
      sent$r = sent$r.getVar,
      sent$r = void 0 !== sent$r && sent$r,
      sent$s = "Super" === sent$e.object.type ? Super$Ir(sent$e.object, sent$t, {
        getProto: !0
      }) : computed$T(sent$e.object, sent$t);
    if (sent$n) return sent$s;
    sent$n = !1;
    if ((sent$e.computed ? sent$i = computed$T(sent$e.property, sent$t) : "PrivateIdentifier" === sent$e.property.type ? (sent$i = sent$e.property.name, sent$n = !0) : sent$i = sent$e.property.name, sent$n && (sent$s = sent$s[SyntaxError$E]), sent$r)) return (sent$n = property$J(sent$s, sent$i), "Super" === sent$e.object.type && sent$n ? (onlyBlock$a = sent$t.find("this").get(), sent$r = LABEL$p(sent$i), ObjectGetOwnPropertyDescriptor$q$f(onlyBlock$a, sent$r, {
      set: sent$n
    }), new find$kt(onlyBlock$a, sent$r)) : new find$kt(sent$s, sent$i));
    sent$n = find$Z(sent$s, sent$i);
    if ("Super" === sent$e.object.type && sent$n) {
      var onlyBlock$a = sent$t.find("this").get();
      if (!sent$e.optional || null != onlyBlock$a) return sent$n.call(onlyBlock$a);
    } else if (!sent$e.optional || null != sent$s) return sent$s[sent$i];
  }

  function TemplateElement$Cr(sent$e, sent$t) {
    return sent$e.value.raw;
  }

  function Super$Ir(sent$e, sent$t, sent$r) {
    (sent$r = (sent$r = void 0 === sent$r ? {} : sent$r).getProto, sent$r = void 0 !== sent$r && sent$r, sent$t = sent$t.find(arguments$mt).get());
    return sent$r ? sent$t.prototype : sent$t;
  }

  function concat$Ar(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    sent$e = computed$T(sent$e.argument, sent$t);
    if (sent$r.spreadProps) return sent$e;
    if ("function" == typeof Symbol && "function" != typeof sent$e[Symbol.iterator]) throw new TypeError("Spread syntax requires ...iterable[Symbol.iterator] to be a function");
    return apply$j(sent$e);
  }
  var ObjectFreeze$Pr = Object.freeze({
    __proto__: null,
    ThisExpression: function $ThisExpression(sent$e, sent$t) {
      var sent$r = sent$t.find(find$yt);
      if (sent$r && !0 !== sent$r.get()) throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
      return sent$t.find("this").get();
    },
    ArrayExpression: function $ArrayExpression(sent$e, sent$t) {
      for (var sent$r = [], sent$i = 0; sent$i < sent$e.elements.length; sent$i++) {
        var sent$n = sent$e.elements[sent$i];
        "SpreadElement" === sent$n.type ? sent$r = sent$r.concat(concat$Ar(sent$n, sent$t)) : sent$r.push(computed$T(sent$n, sent$t));
      }
      return sent$r;
    },
    ObjectExpression: function $ObjectExpression(sent$e, sent$t) {
      for (var sent$r = {}, sent$i = 0; sent$i < sent$e.properties.length; sent$i++) {
        var sent$n, sent$s, onlyBlock$a, sent$o = sent$e.properties[sent$i];
        "SpreadElement" === sent$o.type ? find$m(sent$r, concat$Ar(sent$o, sent$t, {
          spreadProps: !0
        })) : (sent$n = void 0, sent$s = sent$o.key, sent$n = sent$o.computed ? computed$T(sent$s, sent$t) : "Identifier" === sent$s.type ? sent$s.name : "" + Identifier$kr(sent$s), sent$s = computed$T(sent$o.value, sent$t), "init" === (sent$o = sent$o.kind) ? sent$r[sent$n] = sent$s : "get" === sent$o ? (onlyBlock$a = ObjectGetOwnPropertyDescriptor$q(sent$r, sent$n), ObjectGetOwnPropertyDescriptor$q$f(sent$r, sent$n, {
          get: sent$s,
          set: onlyBlock$a && onlyBlock$a.set,
          enumerable: !0,
          configurable: !0
        })) : (onlyBlock$a = ObjectGetOwnPropertyDescriptor$q(sent$r, sent$n), ObjectGetOwnPropertyDescriptor$q$f(sent$r, sent$n, {
          get: onlyBlock$a && onlyBlock$a.get,
          set: sent$s,
          enumerable: !0,
          configurable: !0
        })));
      }
      return sent$r;
    },
    FunctionExpression: function $FunctionExpression(sent$e, sent$t) {
      var sent$r, sent$i;
      return sent$e.id && sent$e.id.name ? (sent$i = FunctionExpression$N(sent$e, sent$r = new FunctionExpression$P(sent$t)), sent$r.const(sent$e.id.name, sent$i), sent$i) : FunctionExpression$N(sent$e, sent$t);
    },
    UnaryExpression: function $UnaryExpression(sent$e, sent$t) {
      var sent$r = sent$e.argument;
      switch (sent$e.operator) {
        case "+":
          return +computed$T(sent$r, sent$t);
        case "-":
          return -computed$T(sent$r, sent$t);
        case "!":
          return !computed$T(sent$r, sent$t);
        case "~":
          return ~computed$T(sent$r, sent$t);
        case "void":
          return void computed$T(sent$r, sent$t);
        case "typeof":
          return "Identifier" === sent$r.type ? typeof onlyBlock$wr(sent$r, sent$t, {
            throwErr: !1
          }) : typeof computed$T(sent$r, sent$t);
        case "delete":
          if ("MemberExpression" === sent$r.type) return MemberExpression$Er(sent$r, sent$t, {
            getVar: !0
          }).del();
          if ("Identifier" === sent$r.type) throw new SyntaxError("Delete of an unqualified identifier in strict mode");
          return (computed$T(sent$r, sent$t), !0);
        default:
          throw new SyntaxError("Unexpected token " + sent$e.operator);
      }
    },
    UpdateExpression: function $UpdateExpression(sent$e, sent$t) {
      var sent$r, sent$i = sent$e.argument;
      if ("Identifier" === sent$i.type) sent$r = onlyBlock$wr(sent$i, sent$t, {
        getVar: !0
      });
      else {
        if ("MemberExpression" !== sent$i.type) throw new SyntaxError("Unexpected token");
        sent$r = MemberExpression$Er(sent$i, sent$t, {
          getVar: !0
        });
      }
      if ((sent$i = sent$r.get(), "++" === sent$e.operator)) return (sent$r.set(sent$i + 1), sent$e.prefix ? sent$r.get() : sent$i);
      if ("--" === sent$e.operator) return (sent$r.set(sent$i - 1), sent$e.prefix ? sent$r.get() : sent$i);
      throw new SyntaxError("Unexpected token " + sent$e.operator);
    },
    BinaryExpression: function $BinaryExpression(sent$e, sent$t) {
      var sent$r, sent$i = "PrivateIdentifier" === sent$e.left.type ? (sent$r = sent$e.left.name, (sent$i = computed$T(sent$e.right, sent$t))[SyntaxError$E] || ({})) : (sent$r = computed$T(sent$e.left, sent$t), computed$T(sent$e.right, sent$t));
      switch (sent$e.operator) {
        case "==":
          return sent$r == sent$i;
        case "!=":
          return sent$r != sent$i;
        case "===":
          return sent$r === sent$i;
        case "!==":
          return sent$r !== sent$i;
        case "<":
          return sent$r < sent$i;
        case "<=":
          return sent$r <= sent$i;
        case ">":
          return sent$i < sent$r;
        case ">=":
          return sent$i <= sent$r;
        case "<<":
          return sent$r << sent$i;
        case ">>":
          return sent$r >> sent$i;
        case ">>>":
          return sent$r >>> sent$i;
        case "+":
          return sent$r + sent$i;
        case "-":
          return sent$r - sent$i;
        case "*":
          return sent$r * sent$i;
        case "**":
          return Math.pow(sent$r, sent$i);
        case "/":
          return sent$r / sent$i;
        case "%":
          return sent$r % sent$i;
        case "|":
          return sent$r | sent$i;
        case "^":
          return sent$r ^ sent$i;
        case "&":
          return sent$r & sent$i;
        case "in":
          return (sent$r in sent$i);
        case "instanceof":
          return sent$r instanceof sent$i;
        default:
          throw new SyntaxError("Unexpected token " + sent$e.operator);
      }
    },
    AssignmentExpression: function $AssignmentExpression(sent$e, sent$t) {
      var sent$r, sent$i, sent$n, sent$s = sent$e.left;
      if ("Identifier" === sent$s.type)(sent$n = onlyBlock$wr(sent$s, sent$t, {
        getVar: !0,
        throwErr: !1
      })) || (sent$i = sent$t.global().find("window").get(), sent$n = new find$kt(sent$i, sent$s.name));
      else {
        if ("MemberExpression" !== sent$s.type) return getVar$V(sent$s, sent$t, {
          feed: computed$T(sent$e.right, sent$t)
        });
        sent$n = MemberExpression$Er(sent$s, sent$t, {
          getVar: !0
        });
      }
      var onlyBlock$a = computed$T(sent$e.right, sent$t);
      switch (sent$e.operator) {
        case "=":
          return (sent$n.set(onlyBlock$a), sent$n.get());
        case "+=":
          return (sent$n.set(sent$n.get() + onlyBlock$a), sent$n.get());
        case "-=":
          return (sent$n.set(sent$n.get() - onlyBlock$a), sent$n.get());
        case "*=":
          return (sent$n.set(sent$n.get() * onlyBlock$a), sent$n.get());
        case "/=":
          return (sent$n.set(sent$n.get() / onlyBlock$a), sent$n.get());
        case "%=":
          return (sent$n.set(sent$n.get() % onlyBlock$a), sent$n.get());
        case "**=":
          return (sent$n.set(Math.pow(sent$n.get(), onlyBlock$a)), sent$n.get());
        case "<<=":
          return (sent$n.set(sent$n.get() << onlyBlock$a), sent$n.get());
        case ">>=":
          return (sent$n.set(sent$n.get() >> onlyBlock$a), sent$n.get());
        case ">>>=":
          return (sent$n.set(sent$n.get() >>> onlyBlock$a), sent$n.get());
        case "|=":
          return (sent$n.set(sent$n.get() | onlyBlock$a), sent$n.get());
        case "^=":
          return (sent$n.set(sent$n.get() ^ onlyBlock$a), sent$n.get());
        case "&=":
          return (sent$n.set(sent$n.get() & onlyBlock$a), sent$n.get());
        case "??=":
          return (sent$n.set(null != (sent$r = sent$n.get()) ? sent$r : onlyBlock$a), sent$n.get());
        case "&&=":
          return (sent$n.set(sent$n.get() && onlyBlock$a), sent$n.get());
        case "||=":
          return (sent$n.set(sent$n.get() || onlyBlock$a), sent$n.get());
        default:
          throw new SyntaxError("Unexpected token " + sent$e.operator);
      }
    },
    LogicalExpression: function $LogicalExpression(sent$e, sent$t) {
      var sent$r;
      switch (sent$e.operator) {
        case "||":
          return computed$T(sent$e.left, sent$t) || computed$T(sent$e.right, sent$t);
        case "&&":
          return computed$T(sent$e.left, sent$t) && computed$T(sent$e.right, sent$t);
        case "??":
          return null != (sent$r = computed$T(sent$e.left, sent$t)) ? sent$r : computed$T(sent$e.right, sent$t);
        default:
          throw new SyntaxError("Unexpected token " + sent$e.operator);
      }
    },
    MemberExpression: MemberExpression$Er,
    ConditionalExpression: function $ConditionalExpression(sent$e, sent$t) {
      return computed$T(sent$e.test, sent$t) ? computed$T(sent$e.consequent, sent$t) : computed$T(sent$e.alternate, sent$t);
    },
    CallExpression: function $CallExpression(sent$e, sent$t) {
      var sent$r;
      if ("MemberExpression" === sent$e.callee.type) {
        if ((sent$r = MemberExpression$Er(sent$e.callee, sent$t, {
            getObj: !0
          }), sent$e.callee.optional && null == sent$r)) return;
        var sent$i = void 0,
          sent$n = !1,
          sent$s = (sent$e.callee.computed ? sent$i = computed$T(sent$e.callee.property, sent$t) : "PrivateIdentifier" === sent$e.callee.property.type ? (sent$i = sent$e.callee.property.name, sent$n = !0) : sent$i = sent$e.callee.property.name, sent$r);
        if ((sent$n && (sent$s = sent$s[SyntaxError$E]), sent$n = "Super" === sent$e.callee.object.type ? (sent$n = sent$t.find("this").get(), sent$s[sent$i].bind(sent$n)) : sent$s[sent$i], sent$e.optional && null == sent$n)) return;
        if ("function" != typeof sent$n) throw new TypeError(sent$i + " is not a function");
        if (sent$n[TypeError$vt]) throw new TypeError("Class constructor " + sent$i + " cannot be invoked without 'new'");
      } else {
        if ((sent$r = sent$t.find("this").get(), sent$n = computed$T(sent$e.callee, sent$t), sent$e.optional && null == sent$n)) return;
        if ("function" != typeof sent$n || "Super" !== sent$e.callee.type && sent$n[TypeError$vt]) {
          if ("Identifier" === sent$e.callee.type) sent$h = sent$e.callee.name;
          else try {
            sent$h = JSON.stringify(sent$n);
          } catch (sent$e) {
            sent$h = "" + sent$n;
          }
          throw "function" != typeof sent$n ? new TypeError(sent$h + " is not a function") : new TypeError("Class constructor " + sent$h + " cannot be invoked without 'new'");
        }
      }
      for (var onlyBlock$a = [], sent$o = 0; sent$o < sent$e.arguments.length; sent$o++) {
        var sent$c = sent$e.arguments[sent$o];
        "SpreadElement" === sent$c.type ? onlyBlock$a = onlyBlock$a.concat(concat$Ar(sent$c, sent$t)) : onlyBlock$a.push(computed$T(sent$c, sent$t));
      }
      if ("Super" === sent$e.callee.type) {
        sent$s = sent$t.find(find$yt).get();
        if (!0 === sent$s) throw new ReferenceError("Super constructor may only be called once");
        sent$i = ReferenceError$te(sent$r, sent$n, onlyBlock$a);
        return (sent$s(sent$i), sent$t.find("this").set(sent$i), sent$t.find(find$yt).set(!0), sent$i);
      }
      try {
        return sent$n.apply(sent$r, onlyBlock$a);
      } catch (sent$e) {
        if (sent$e instanceof TypeError && "Illegal invocation" === sent$e.message && -1 !== sent$n.toString().indexOf("[native code]")) {
          var sent$h = sent$t.global().find("window").get();
          if (sent$h && sent$h[apply$oe]) return sent$n.apply(sent$h[apply$oe], onlyBlock$a);
        }
        throw sent$e;
      }
    },
    NewExpression: function $NewExpression(sent$e, sent$t) {
      var sent$r, sent$i = computed$T(sent$e.callee, sent$t);
      if ("function" != typeof sent$i) {
        if ("Identifier" === sent$e.callee.type) sent$r = sent$e.callee.name;
        else try {
          sent$r = JSON.stringify(sent$i);
        } catch (sent$e) {
          sent$r = "" + sent$i;
        }
        throw new TypeError(sent$r + " is not a constructor");
      }
      if (sent$i[TypeError$gt]) throw new TypeError((sent$i.name || "(intermediate value)") + " is not a constructor");
      for (var sent$n = [], sent$s = 0; sent$s < sent$e.arguments.length; sent$s++) {
        var onlyBlock$a = sent$e.arguments[sent$s];
        "SpreadElement" === onlyBlock$a.type ? sent$n = sent$n.concat(concat$Ar(onlyBlock$a, sent$t)) : sent$n.push(computed$T(onlyBlock$a, sent$t));
      }
      return new(sent$i.bind.apply(sent$i, apply$j([void 0], sent$n)))();
    },
    MetaProperty: function $MetaProperty(sent$e, sent$t) {
      return "new" === sent$e.meta.name && "target" === sent$e.property.name ? sent$t.find(arguments$bt).get() : "import" === sent$e.meta.name && "meta" === sent$e.property.name ? {
        url: ""
      } : void 0;
    },
    SequenceExpression: function $SequenceExpression(sent$e, sent$t) {
      for (var sent$r, sent$i = 0; sent$i < sent$e.expressions.length; sent$i++) sent$r = computed$T(sent$e.expressions[sent$i], sent$t);
      return sent$r;
    },
    ArrowFunctionExpression: function $ArrowFunctionExpression(sent$e, sent$t) {
      return FunctionExpression$N(sent$e, sent$t);
    },
    TemplateLiteral: function $TemplateLiteral(sent$e, sent$t) {
      for (var sent$r, sent$i = sent$e.quasis.slice(), sent$n = sent$e.expressions.slice(), sent$s = ""; sent$r = sent$i.shift();)(sent$s += TemplateElement$Cr(sent$r), (sent$r = sent$n.shift()) && (sent$s += computed$T(sent$r, sent$t)));
      return sent$s;
    },
    TaggedTemplateExpression: function $TaggedTemplateExpression(sent$e, sent$t) {
      var sent$r = computed$T(sent$e.tag, sent$t),
        sent$i = (sent$n = sent$e.quasi.quasis).map(function(sent$e) {
          return sent$e.value.cooked;
        }),
        sent$n = sent$n.map(function(sent$e) {
          return sent$e.value.raw;
        }),
        sent$s = (ObjectGetOwnPropertyDescriptor$q$f(sent$i, "raw", {
          value: ObjectFreeze$U(sent$n)
        }), sent$e.quasi.expressions),
        onlyBlock$a = [];
      if (sent$s)
        for (var sent$o = 0; sent$o < sent$s.length; sent$o++) onlyBlock$a.push(computed$T(sent$s[sent$o], sent$t));
      return sent$r.apply(void 0, apply$j([ObjectFreeze$U(sent$i)], onlyBlock$a));
    },
    TemplateElement: TemplateElement$Cr,
    ClassExpression: function $ClassExpression(sent$e, sent$t) {
      var sent$r, sent$i;
      return sent$e.id && sent$e.id.name ? (sent$i = ClassExpression$yi(sent$e, sent$r = new FunctionExpression$P(sent$t)), sent$r.const(sent$e.id.name, sent$i), sent$i) : ClassExpression$yi(sent$e, sent$t);
    },
    Super: Super$Ir,
    SpreadElement: concat$Ar,
    ChainExpression: function $ChainExpression(sent$e, sent$t) {
      return computed$T(sent$e.expression, sent$t);
    },
    ImportExpression: function $ImportExpression(sent$e, sent$t) {
      var sent$r, sent$i = sent$t.global(),
        sent$e = computed$T(sent$e.source, sent$t);
      return ((sent$t = sent$i.find(find$xt + sent$e)) && (sent$i = sent$t.get()) && ("function" == typeof sent$i ? sent$r = sent$i() : "object" == typeof sent$i && (sent$r = sent$i)), sent$r && "object" == typeof sent$r ? Promise.resolve(sent$r) : Promise.reject(new TypeError('Failed to resolve module specifier "' + sent$e + '"')));
    }
  });

  function ObjectPattern$Lr(sent$e, sent$t, sent$r) {
    for (var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).kind, sent$n = void 0 === sent$i ? "var" : sent$i, sent$i = sent$r.hoist, sent$s = void 0 !== sent$i && sent$i, sent$i = sent$r.onlyBlock, onlyBlock$a = void 0 !== sent$i && sent$i, sent$i = sent$r.feed, sent$o = void 0 === sent$i ? {} : sent$i, sent$c = [], sent$h = 0; sent$h < sent$e.properties.length; sent$h++) {
      var sent$l = sent$e.properties[sent$h];
      if (sent$s) !onlyBlock$a && "var" !== sent$n || ("Property" === sent$l.type ? "Identifier" === (push$u = sent$l.value).type ? sent$t[sent$n](push$u.name, onlyBlock$a ? properties$I : "var" === sent$n ? properties$C : void 0) : getVar$V(push$u, sent$t, {
        kind: sent$n,
        hoist: sent$s,
        onlyBlock: onlyBlock$a
      }) : feed$Vr(sent$l, sent$t, {
        kind: sent$n,
        hoist: sent$s,
        onlyBlock: onlyBlock$a
      }));
      else if ("Property" === sent$l.type) {
        var push$u, LABEL$p = void 0,
          LABEL$p = sent$l.computed ? computed$T(sent$l.key, sent$t) : sent$l.key.name;
        (sent$c.push(LABEL$p), "Identifier" === (push$u = sent$l.value).type ? sent$t[sent$n](push$u.name, sent$o[LABEL$p]) : getVar$V(push$u, sent$t, {
          kind: sent$n,
          feed: sent$o[LABEL$p]
        }));
      } else {
        for (var thisYieldPos$d = find$m({}, sent$o), ObjectGetOwnPropertyDescriptor$q$f = 0; ObjectGetOwnPropertyDescriptor$q$f < sent$c.length; ObjectGetOwnPropertyDescriptor$q$f++) delete thisYieldPos$d[sent$c[ObjectGetOwnPropertyDescriptor$q$f]];
        feed$Vr(sent$l, sent$t, {
          kind: sent$n,
          feed: thisYieldPos$d
        });
      }
    }
  }

  function ArrayPattern$Tr(sent$e, sent$t, sent$r) {
    for (var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).kind, sent$n = sent$r.hoist, sent$s = void 0 !== sent$n && sent$n, sent$n = sent$r.onlyBlock, onlyBlock$a = void 0 !== sent$n && sent$n, sent$n = sent$r.feed, sent$o = void 0 === sent$n ? [] : sent$n, sent$c = [], sent$h = 0; sent$h < sent$e.elements.length; sent$h++) {
      var sent$l, push$u = sent$e.elements[sent$h];
      push$u && (sent$s ? !onlyBlock$a && "var" !== sent$i || ("Identifier" === push$u.type ? sent$t[sent$i](push$u.name, onlyBlock$a ? properties$I : "var" === sent$i ? properties$C : void 0) : getVar$V(push$u, sent$t, {
        kind: sent$i,
        hoist: sent$s,
        onlyBlock: onlyBlock$a
      })) : "Identifier" === push$u.type ? sent$i ? sent$t[sent$i](push$u.name, sent$o[sent$h]) : ((sent$l = onlyBlock$wr(push$u, sent$t, {
        getVar: !0
      })).set(sent$o[sent$h]), sent$c.push(sent$l.get())) : "RestElement" === push$u.type ? feed$Vr(push$u, sent$t, {
        kind: sent$i,
        feed: sent$o.slice(sent$h)
      }) : getVar$V(push$u, sent$t, {
        kind: sent$i,
        feed: sent$o[sent$h]
      }));
    }
    if (sent$c.length) return sent$c;
  }

  function feed$Vr(sent$e, sent$t, sent$r) {
    var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).kind,
      sent$n = sent$r.hoist,
      sent$n = void 0 !== sent$n && sent$n,
      sent$s = sent$r.onlyBlock,
      sent$s = void 0 !== sent$s && sent$s,
      sent$r = sent$r.feed,
      sent$r = void 0 === sent$r ? [] : sent$r,
      sent$e = sent$e.argument;
    sent$n ? !sent$s && "var" !== sent$i || ("Identifier" === sent$e.type ? sent$t[sent$i](sent$e.name, sent$s ? properties$I : "var" === sent$i ? properties$C : void 0) : getVar$V(sent$e, sent$t, {
      kind: sent$i,
      hoist: sent$n,
      onlyBlock: sent$s
    })) : "Identifier" === sent$e.type ? sent$i ? sent$t[sent$i](sent$e.name, sent$r) : onlyBlock$wr(sent$e, sent$t, {
      getVar: !0
    }).set(sent$r) : getVar$V(sent$e, sent$t, {
      kind: sent$i,
      feed: sent$r
    });
  }

  function AssignmentPattern$Nr(sent$e, sent$t, sent$r) {
    var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).kind,
      sent$i = void 0 === sent$i ? "var" : sent$i,
      sent$n = sent$r.hoist,
      sent$n = void 0 !== sent$n && sent$n,
      sent$s = sent$r.onlyBlock,
      sent$s = void 0 !== sent$s && sent$s,
      sent$r = sent$r.feed,
      sent$r = void 0 === sent$r ? computed$T(sent$e.right, sent$t) : sent$r,
      sent$e = sent$e.left;
    sent$n ? !sent$s && "var" !== sent$i || ("Identifier" === sent$e.type ? sent$t[sent$i](sent$e.name, sent$s ? properties$I : "var" === sent$i ? properties$C : void 0) : getVar$V(sent$e, sent$t, {
      kind: sent$i,
      hoist: sent$n,
      onlyBlock: sent$s
    })) : "Identifier" === sent$e.type ? sent$t[sent$i](sent$e.name, sent$r) : getVar$V(sent$e, sent$t, {
      kind: sent$i,
      feed: sent$r
    });
  }
  var ObjectFreeze$Br = Object.freeze({
    __proto__: null,
    ObjectPattern: ObjectPattern$Lr,
    ArrayPattern: ArrayPattern$Tr,
    RestElement: feed$Vr,
    AssignmentPattern: AssignmentPattern$Nr
  });
  var body$Rr, ObjectFreeze$Dr = Object.freeze({
    __proto__: null,
    Program: function $Program(sent$e, sent$t) {
      for (var sent$r = 0; sent$r < sent$e.body.length; sent$r++) computed$T(sent$e.body[sent$r], sent$t);
    }
  });

  function computed$T(sent$e, sent$t) {
    if (sent$e) {
      var sent$r = (body$Rr = body$Rr || find$m({}, ObjectFreeze$F, ObjectFreeze$Pr, ObjectFreeze$Sr, ObjectFreeze$M, ObjectFreeze$_r, ObjectFreeze$Br, ObjectFreeze$Dr))[sent$e.type];
      if (sent$r) return sent$r(sent$e, sent$t);
      throw new Error(sent$e.type + " isn't implemented");
    }
  }

  function ExpressionStatement$Or(sent$e, sent$t) {
    computed$T(sent$e.expression, sent$t);
  }

  function body$Mr(sent$e, sent$t, sent$r) {
    var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).invasived,
      sent$n = sent$r.hoisted,
      sent$n = void 0 !== sent$n && sent$n,
      sent$s = void 0 !== sent$i && sent$i ? sent$t : new FunctionExpression$P(sent$t);
    sent$n || hoisted$mi(sent$e, sent$s, {
      onlyBlock: !0
    });
    for (var onlyBlock$a = 0; onlyBlock$a < sent$e.body.length; onlyBlock$a++) {
      var sent$o = computed$T(sent$e.body[onlyBlock$a], sent$s);
      if (sent$o === sent$_) {
        if (sent$o.LABEL && sent$o.LABEL === sent$r.label) break;
        return sent$o;
      }
      if (sent$o === LABEL$k || sent$o === LABEL$S) return sent$o;
    }
  }

  function EmptyStatement$Fr() {}

  function DebuggerStatement$jr() {
    debugger;
  }

  function ReturnStatement$Ur(sent$e, sent$t) {
    return (LABEL$S.RES = sent$e.argument ? computed$T(sent$e.argument, sent$t) : void 0, LABEL$S);
  }

  function BreakStatement$qr(sent$e) {
    return (sent$_.LABEL = null == (sent$e = sent$e.label) ? void 0 : sent$e.name, sent$_);
  }

  function ContinueStatement$Wr(sent$e) {
    return (LABEL$k.LABEL = null == (sent$e = sent$e.label) ? void 0 : sent$e.name, LABEL$k);
  }

  function LabeledStatement$Gr(sent$e, sent$t) {
    var sent$r = sent$e.label.name;
    if ("WhileStatement" === sent$e.body.type) return WhileStatement$Jr(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("DoWhileStatement" === sent$e.body.type) return DoWhileStatement$$r(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("ForStatement" === sent$e.body.type) return ForStatement$ei(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("ForInStatement" === sent$e.body.type) return ForInStatement$ti(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("ForOfStatement" === sent$e.body.type) return ForOfStatement$ri(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("BlockStatement" === sent$e.body.type) return body$Mr(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("WithStatement" === sent$e.body.type) return body$Hr(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("IfStatement" === sent$e.body.type) return IfStatement$zr(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("SwitchStatement" === sent$e.body.type) return SwitchStatement$Kr(sent$e.body, sent$t, {
      label: sent$r
    });
    if ("TryStatement" === sent$e.body.type) return TryStatement$Yr(sent$e.body, sent$t, {
      label: sent$r
    });
    throw new SyntaxError(sent$e.body.type + " cannot be labeled");
  }

  function body$Hr(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    var sent$i = new FunctionExpression$P(sent$t),
      sent$t = (sent$i.with(computed$T(sent$e.object, sent$t)), computed$T(sent$e.body, sent$i));
    return sent$t === sent$_ ? sent$t.LABEL && sent$t.LABEL === sent$r.label ? void 0 : sent$t : sent$t === LABEL$k || sent$t === LABEL$S ? sent$t : void 0;
  }

  function IfStatement$zr(sent$e, sent$t, sent$r) {
    return (void 0 === sent$r && (sent$r = {}), (sent$e = computed$T(sent$e.test, sent$t) ? computed$T(sent$e.consequent, sent$t) : computed$T(sent$e.alternate, sent$t)) === sent$_ ? sent$e.LABEL && sent$e.LABEL === sent$r.label ? void 0 : sent$e : sent$e === LABEL$k || sent$e === LABEL$S ? sent$e : void 0);
  }

  function SwitchStatement$Kr(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    for (var sent$i = computed$T(sent$e.discriminant, sent$t), sent$n = !1, sent$s = 0; sent$s < sent$e.cases.length; sent$s++) {
      var onlyBlock$a = sent$e.cases[sent$s];
      if (sent$n = sent$n || onlyBlock$a.test && computed$T(onlyBlock$a.test, sent$t) !== sent$i ? sent$n : !0) {
        onlyBlock$a = SwitchCase$Qr(onlyBlock$a, sent$t);
        if (onlyBlock$a === sent$_) {
          if (onlyBlock$a.LABEL === sent$r.label) break;
          return onlyBlock$a;
        }
        if (onlyBlock$a === LABEL$k || onlyBlock$a === LABEL$S) return onlyBlock$a;
      }
    }
  }

  function SwitchCase$Qr(sent$e, sent$t) {
    for (var sent$r = 0; sent$r < sent$e.consequent.length; sent$r++) {
      var sent$i = computed$T(sent$e.consequent[sent$r], sent$t);
      if (sent$i === sent$_ || sent$i === LABEL$k || sent$i === LABEL$S) return sent$i;
    }
  }

  function ThrowStatement$Xr(sent$e, sent$t) {
    throw computed$T(sent$e.argument, sent$t);
  }

  function TryStatement$Yr(sent$t, sent$r, sent$e) {
    var sent$i;
    void 0 === sent$e && (sent$e = {});
    try {
      sent$i = body$Mr(sent$t.block, sent$r);
    } catch (sent$e) {
      if (!sent$t.handler) throw sent$e;
      var sent$n, sent$s = new FunctionExpression$P(sent$r),
        onlyBlock$a = sent$t.handler.param;
      (onlyBlock$a && ("Identifier" === onlyBlock$a.type ? (sent$n = onlyBlock$a.name, sent$s.var(sent$n, sent$e)) : getVar$V(onlyBlock$a, sent$r, {
        feed: sent$e
      })), sent$i = CatchClause$Zr(sent$t.handler, sent$s));
    } finally {
      sent$t.finalizer && (sent$i = body$Mr(sent$t.finalizer, sent$r));
    }
    return sent$i === sent$_ ? sent$i.LABEL && sent$i.LABEL === sent$e.label ? void 0 : sent$i : sent$i === LABEL$k || sent$i === LABEL$S ? sent$i : void 0;
  }

  function CatchClause$Zr(sent$e, sent$t) {
    return body$Mr(sent$e.body, sent$t, {
      invasived: !0
    });
  }

  function WhileStatement$Jr(sent$e, sent$t, sent$r) {
    for (void 0 === sent$r && (sent$r = {}); computed$T(sent$e.test, sent$t);) {
      var sent$i = computed$T(sent$e.body, sent$t);
      if (sent$i === sent$_) {
        if (sent$i.LABEL === sent$r.label) break;
        return sent$i;
      }
      if (sent$i === LABEL$k) {
        if (sent$i.LABEL !== sent$r.label) return sent$i;
      } else if (sent$i === LABEL$S) return sent$i;
    }
  }

  function DoWhileStatement$$r(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    do {
      var sent$i = computed$T(sent$e.body, sent$t);
      if (sent$i === sent$_) {
        if (sent$i.LABEL === sent$r.label) break;
        return sent$i;
      }
      if (sent$i === LABEL$k) {
        if (sent$i.LABEL !== sent$r.label) return sent$i;
      } else if (sent$i === LABEL$S) return sent$i;
    } while (computed$T(sent$e.test, sent$t));
  }

  function ForStatement$ei(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    var sent$i = new FunctionExpression$P(sent$t);
    for (computed$T(sent$e.init, sent$i); !sent$e.test || computed$T(sent$e.test, sent$i); computed$T(sent$e.update, sent$i)) {
      var sent$n = new FunctionExpression$P(sent$i),
        sent$s = void 0;
      if ((sent$s = "BlockStatement" === sent$e.body.type ? body$Mr(sent$e.body, sent$n, {
          invasived: !0
        }) : computed$T(sent$e.body, sent$n)) === sent$_) {
        if (sent$s.LABEL === sent$r.label) break;
        return sent$s;
      }
      if (sent$s === LABEL$k) {
        if (sent$s.LABEL !== sent$r.label) return sent$s;
      } else if (sent$s === LABEL$S) return sent$s;
    }
  }

  function ForInStatement$ti(sent$e, sent$t, sent$r) {
    for (var sent$i in (void 0 === sent$r && (sent$r = {}), computed$T(sent$e.right, sent$t))) {
      sent$i = configurable$gi(sent$e, sent$t, {
        value: sent$i
      });
      if (sent$i === sent$_) {
        if (sent$i.LABEL === sent$r.label) break;
        return sent$i;
      }
      if (sent$i === LABEL$k) {
        if (sent$i.LABEL !== sent$r.label) return sent$i;
      } else if (sent$i === LABEL$S) return sent$i;
    }
  }

  function ForOfStatement$ri(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    var sent$i, sent$n, sent$s = computed$T(sent$e.right, sent$t);
    try {
      for (var onlyBlock$a = sent$b(sent$s), sent$o = onlyBlock$a.next(); !sent$o.done; sent$o = onlyBlock$a.next()) {
        var sent$c = configurable$gi(sent$e, sent$t, {
          value: sent$o.value
        });
        if (sent$c === sent$_) {
          if (sent$c.LABEL === sent$r.label) break;
          return sent$c;
        }
        if (sent$c === LABEL$k) {
          if (sent$c.LABEL !== sent$r.label) return sent$c;
        } else if (sent$c === LABEL$S) return sent$c;
      }
    } catch (sent$e) {
      sent$i = {
        error: sent$e
      };
    } finally {
      try {
        sent$o && !sent$o.done && (sent$n = onlyBlock$a.return) && sent$n.call(onlyBlock$a);
      } finally {
        if (sent$i) throw sent$i.error;
      }
    }
  }

  function FunctionDeclaration$ii(sent$e, sent$t) {
    sent$t.func(sent$e.id.name, FunctionExpression$N(sent$e, sent$t));
  }

  function left$ni(sent$e, sent$t, sent$r) {
    void 0 === sent$r && (sent$r = {});
    for (var sent$i = 0; sent$i < sent$e.declarations.length; sent$i++) VariableDeclarator$si(sent$e.declarations[sent$i], sent$t, find$m({
      kind: sent$e.kind
    }, sent$r));
  }

  function VariableDeclarator$si(sent$e, sent$t, sent$r) {
    var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).kind,
      sent$i = void 0 === sent$i ? "var" : sent$i,
      sent$n = sent$r.hoist,
      sent$n = void 0 !== sent$n && sent$n,
      sent$s = sent$r.onlyBlock,
      sent$s = void 0 !== sent$s && sent$s,
      onlyBlock$a = sent$r.feed;
    sent$n ? !sent$s && "var" !== sent$i || ("Identifier" === sent$e.id.type ? sent$t[sent$i](sent$e.id.name, sent$s ? properties$I : "var" === sent$i ? properties$C : void 0) : getVar$V(sent$e.id, sent$t, {
      kind: sent$i,
      hoist: sent$n,
      onlyBlock: sent$s
    })) : (sent$s = (sent$n = ("feed" in sent$r)) ? onlyBlock$a : computed$T(sent$e.init, sent$t), "Identifier" === sent$e.id.type ? (sent$r = sent$e.id.name, "var" !== sent$i || sent$e.init || sent$n ? sent$t[sent$i](sent$r, sent$s) : sent$t.var(sent$r, properties$C), sent$e.init && -1 !== ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(sent$e.init.type) && !sent$s.name && ObjectGetOwnPropertyDescriptor$q$f(sent$s, "name", {
      value: sent$r,
      configurable: !0
    })) : getVar$V(sent$e.id, sent$t, {
      kind: sent$i,
      feed: sent$s
    }));
  }

  function ClassDeclaration$ai(sent$e, sent$t) {
    sent$t.func(sent$e.id.name, ClassExpression$yi(sent$e, sent$t));
  }

  function ClassBody$oi(sent$e, sent$t, sent$r) {
    for (var sent$i = (sent$r = void 0 === sent$r ? {} : sent$r).klass, sent$n = sent$r.superClass, sent$s = 0; sent$s < sent$e.body.length; sent$s++) {
      var onlyBlock$a = sent$e.body[sent$s];
      "MethodDefinition" === onlyBlock$a.type ? MethodDefinition$ci(onlyBlock$a, sent$t, {
        klass: sent$i,
        superClass: sent$n
      }) : "PropertyDefinition" === onlyBlock$a.type && onlyBlock$a.static ? static$hi(onlyBlock$a, sent$t, {
        klass: sent$i,
        superClass: sent$n
      }) : "StaticBlock" === onlyBlock$a.type && superClass$li(onlyBlock$a, sent$t, {
        klass: sent$i,
        superClass: sent$n
      });
    }
  }

  function MethodDefinition$ci(sent$e, sent$t, sent$r) {
    var sent$i, sent$n = (sent$r = void 0 === sent$r ? {} : sent$r).klass,
      sent$r = sent$r.superClass,
      sent$s = !1;
    if (sent$e.computed) sent$i = computed$T(sent$e.key, sent$t);
    else if ("Identifier" === sent$e.key.type) sent$i = sent$e.key.name;
    else {
      if ("PrivateIdentifier" !== sent$e.key.type) throw new SyntaxError("Unexpected token");
      (sent$i = sent$e.key.name, sent$s = !0);
    }
    var onlyBlock$a = sent$e.static ? sent$n : sent$n.prototype,
      sent$o = (sent$s && (onlyBlock$a[SyntaxError$E] || ObjectGetOwnPropertyDescriptor$q$f(onlyBlock$a, SyntaxError$E, {
        value: {}
      }), onlyBlock$a = onlyBlock$a[SyntaxError$E]), FunctionExpression$N(sent$e.value, sent$t, {
        superClass: sent$r
      }));
    switch (sent$e.kind) {
      case "constructor":
        break;
      case "method":
        ObjectGetOwnPropertyDescriptor$q$f(onlyBlock$a, sent$i, {
          value: sent$o,
          writable: !0,
          configurable: !0
        });
        break;
      case "get":
        var sent$c = ObjectGetOwnPropertyDescriptor$q(onlyBlock$a, sent$i);
        ObjectGetOwnPropertyDescriptor$q$f(onlyBlock$a, sent$i, {
          get: sent$o,
          set: sent$c && sent$c.set,
          configurable: !0
        });
        break;
      case "set":
        sent$c = ObjectGetOwnPropertyDescriptor$q(onlyBlock$a, sent$i);
        ObjectGetOwnPropertyDescriptor$q$f(onlyBlock$a, sent$i, {
          get: sent$c && sent$c.get,
          set: sent$o,
          configurable: !0
        });
        break;
      default:
        throw new SyntaxError("Unexpected token");
    }
  }

  function static$hi(sent$e, sent$t, sent$r) {
    var sent$i, sent$n = (sent$r = void 0 === sent$r ? {} : sent$r).klass,
      sent$r = sent$r.superClass,
      sent$s = !1;
    if (sent$e.computed) sent$i = computed$T(sent$e.key, sent$t);
    else if ("Identifier" === sent$e.key.type) sent$i = sent$e.key.name;
    else {
      if ("PrivateIdentifier" !== sent$e.key.type) throw new SyntaxError("Unexpected token");
      (sent$i = sent$e.key.name, sent$s = !0);
    }
    (sent$t = new FunctionExpression$P(sent$t, !0), sent$t.const("this", sent$n));
    (sent$s && (sent$n[SyntaxError$E] || ObjectGetOwnPropertyDescriptor$q$f(sent$n, SyntaxError$E, {
      value: {}
    }), sent$n = sent$n[SyntaxError$E]), sent$e.value ? "FunctionExpression" === sent$e.value.type || "ArrowFunctionExpression" === sent$e.value.type ? sent$n[sent$i] = FunctionExpression$N(sent$e.value, sent$t, {
      superClass: sent$r
    }) : sent$n[sent$i] = computed$T(sent$e.value, sent$t) : sent$n[sent$i] = void 0);
  }

  function superClass$li(sent$e, sent$t, sent$r) {
    (sent$r = (sent$r = void 0 === sent$r ? {} : sent$r).klass, sent$t = new FunctionExpression$P(sent$t, !0));
    return (sent$t.const("this", sent$r), body$Mr(sent$e, sent$t, {
      invasived: !0
    }));
  }

  function ImportDeclaration$ui(sent$e, sent$t) {
    var sent$r, sent$i = sent$t.global().find(find$xt + sent$e.source.value);
    if ((sent$i && (sent$i = sent$i.get()) && ("function" == typeof sent$i ? sent$r = sent$i() : "object" == typeof sent$i && (sent$r = sent$i)), !sent$r || "object" != typeof sent$r)) throw new TypeError('Failed to resolve module specifier "' + sent$e.source.value + '"');
    for (var sent$n = 0; sent$n < sent$e.specifiers.length; sent$n++) {
      var sent$s = sent$e.specifiers[sent$n],
        onlyBlock$a = void 0;
      if (("ImportSpecifier" === sent$s.type ? onlyBlock$a = "Identifier" === sent$s.imported.type ? sent$s.imported.name : sent$s.imported.value : "ImportDefaultSpecifier" === sent$s.type ? onlyBlock$a = "default" : "ImportNamespaceSpecifier" === sent$s.type && (onlyBlock$a = "*"), "*" !== onlyBlock$a && !imported$G(sent$r, onlyBlock$a))) throw new SyntaxError('The requested module "' + sent$e.source.value + '" does not provide an export named "' + onlyBlock$a + '"');
      sent$t.var(sent$s.local.name, "*" === onlyBlock$a ? find$m({}, sent$r) : sent$r[onlyBlock$a]);
    }
  }

  function ExportDefaultDeclaration$pi(sent$e, sent$t) {
    var sent$r, sent$i = sent$t.global(),
      sent$e = ("FunctionDeclaration" === sent$e.declaration.type ? (sent$r = FunctionExpression$N(sent$e.declaration, sent$t), sent$t.func(sent$e.declaration.id.name, sent$r)) : "ClassDeclaration" === sent$e.declaration.type ? (sent$r = ClassExpression$yi(sent$e.declaration, sent$t), sent$t.func(sent$e.declaration.id.name, sent$r)) : sent$r = computed$T(sent$e.declaration, sent$t), sent$i.find(find$A));
    sent$e && (sent$t = sent$e.get()) && "object" == typeof sent$t && (sent$t.default = sent$r);
  }

  function ExportNamedDeclaration$di(sent$e, sent$t) {
    var sent$r = sent$t.global();
    if (sent$e.declaration) {
      if ("FunctionDeclaration" === sent$e.declaration.type) {
        var sent$i = FunctionExpression$N(sent$e.declaration, sent$t);
        (sent$t.func(sent$e.declaration.id.name, sent$i), (sent$n = sent$r.find(find$A)) && (sent$s = sent$n.get()) && "object" == typeof sent$s && (sent$s[sent$e.declaration.id.name] = sent$i));
      } else if ("ClassDeclaration" === sent$e.declaration.type) {
        var sent$n, sent$s, sent$i = ClassExpression$yi(sent$e.declaration, sent$t);
        (sent$t.func(sent$e.declaration.id.name, sent$i), (sent$n = sent$r.find(find$A)) && (sent$s = sent$n.get()) && "object" == typeof sent$s && (sent$s[sent$e.declaration.id.name] = sent$i));
      } else if ("VariableDeclaration" === sent$e.declaration.type)
        if ((left$ni(sent$e.declaration, sent$t), sent$n = sent$r.find(find$A))) {
          var onlyBlock$a = sent$n.get();
          if (onlyBlock$a && "object" == typeof onlyBlock$a)
            for (var sent$o = 0; sent$o < sent$e.declaration.declarations.length; sent$o++) {
              var sent$c = sent$e.declaration.declarations[sent$o].id.name;
              (sent$l = sent$t.find(sent$c)) && (onlyBlock$a[sent$c] = sent$l.get());
            }
        }
    } else if (sent$e.specifiers)
      if (sent$n = sent$r.find(find$A)) {
        var sent$h = sent$n.get();
        if (sent$h && "object" == typeof sent$h)
          for (sent$o = 0; sent$o < sent$e.specifiers.length; sent$o++) {
            var sent$l, push$u = sent$e.specifiers[sent$o],
              LABEL$p = "Identifier" === push$u.local.type ? push$u.local.name : push$u.local.value;
            (sent$l = sent$t.find(LABEL$p)) && (sent$h["Identifier" === push$u.exported.type ? push$u.exported.name : push$u.exported.value] = sent$l.get());
          }
      }
  }

  function ExportAllDeclaration$fi(sent$e, sent$t) {
    var sent$r, sent$t = sent$t.global(),
      sent$i = sent$t.find(find$xt + sent$e.source.value);
    if ((sent$i && (sent$i = sent$i.get()) && ("function" == typeof sent$i ? sent$r = sent$i() : "object" == typeof sent$i && (sent$r = sent$i)), !sent$r || "object" != typeof sent$r)) throw new TypeError('Failed to resolve module specifier "' + sent$e.source.value + '"');
    sent$i = sent$t.find(find$A);
    sent$i && (sent$e = sent$i.get()) && "object" == typeof sent$e && find$m(sent$e, sent$r);
  }

  function hoisted$mi(sent$e, sent$t, sent$r) {
    for (var sent$r = (sent$r = void 0 === sent$r ? {} : sent$r).onlyBlock, sent$i = void 0 !== sent$r && sent$r, sent$n = [], sent$s = [], onlyBlock$a = 0; onlyBlock$a < sent$e.body.length; onlyBlock$a++) {
      var sent$o = sent$e.body[onlyBlock$a];
      "FunctionDeclaration" === sent$o.type ? (sent$n.push(sent$o), sent$s.push(onlyBlock$a)) : "VariableDeclaration" === sent$o.type && -1 !== ["const", "let"].indexOf(sent$o.kind) ? left$ni(sent$o, sent$t, {
        hoist: !0,
        onlyBlock: !0
      }) : sent$i || (function sent$e(sent$t, sent$r) {
        switch (sent$t.type) {
          case "VariableDeclaration":
            left$ni(sent$t, sent$r, {
              hoist: !0
            });
            break;
          case "ForInStatement":
          case "ForOfStatement":
            "VariableDeclaration" === sent$t.left.type && left$ni(sent$t.left, sent$r, {
              hoist: !0
            });
          case "ForStatement":
            "ForStatement" === sent$t.type && "VariableDeclaration" === sent$t.init.type && left$ni(sent$t.init, sent$r, {
              hoist: !0
            });
          case "WhileStatement":
          case "DoWhileStatement":
            sent$e(sent$t.body, sent$r);
            break;
          case "IfStatement":
            (sent$e(sent$t.consequent, sent$r), sent$t.alternate && sent$e(sent$t.alternate, sent$r));
            break;
          case "BlockStatement":
            for (var sent$i = 0; sent$i < sent$t.body.length; sent$i++) sent$e(sent$t.body[sent$i], sent$r);
            break;
          case "SwitchStatement":
            for (sent$i = 0; sent$i < sent$t.cases.length; sent$i++)
              for (var sent$n = 0; sent$n < sent$t.cases[sent$i].consequent.length; sent$n++) sent$e(sent$t.cases[sent$i].consequent[sent$n], sent$r);
            break;
          case "TryStatement":
            for (var sent$s = sent$t.block.body, sent$i = 0; sent$i < sent$s.length; sent$i++) sent$e(sent$s[sent$i], sent$r);
            var onlyBlock$a = sent$t.handler && sent$t.handler.body.body;
            if (onlyBlock$a)
              for (sent$i = 0; sent$i < onlyBlock$a.length; sent$i++) sent$e(onlyBlock$a[sent$i], sent$r);
            var sent$o = sent$t.finalizer && sent$t.finalizer.body;
            if (sent$o)
              for (sent$i = 0; sent$i < sent$o.length; sent$i++) sent$e(sent$o[sent$i], sent$r);
        }
      })(sent$o, sent$t);
    }
    if (sent$s.length) {
      for (onlyBlock$a = sent$s.length - 1; - 1 < onlyBlock$a; onlyBlock$a--) sent$e.body.splice(sent$s[onlyBlock$a], 1);
      sent$e.body = sent$n.concat(sent$e.body);
    }
  }

  function getVar$V(sent$e, sent$t, sent$r) {
    switch ((void 0 === sent$r && (sent$r = {}), sent$e.type)) {
      case "ObjectPattern":
        return ObjectPattern$Lr(sent$e, sent$t, sent$r);
      case "ArrayPattern":
        return ArrayPattern$Tr(sent$e, sent$t, sent$r);
      case "RestElement":
        return feed$Vr(sent$e, sent$t, sent$r);
      case "AssignmentPattern":
        return AssignmentPattern$Nr(sent$e, sent$t, sent$r);
      default:
        throw new SyntaxError("Unexpected token");
    }
  }

  function FunctionExpression$N(sent$c, sent$h, sent$e) {
    var sent$t, sent$l, push$u, LABEL$p, sent$r;
    return (void 0 === sent$e && (sent$e = {}), sent$c.generator || sent$c.async ? FunctionExpression$R(sent$c, sent$h, sent$e) : (sent$l = sent$e.superClass, push$u = sent$e.construct, LABEL$p = sent$c.params, sent$e = function sent$e() {
      for (var sent$t = this && this instanceof sent$e ? this.constructor : void 0, sent$r = [], sent$i = 0; sent$i < arguments.length; sent$i++) sent$r[sent$i] = arguments[sent$i];
      var sent$n = new FunctionExpression$P(sent$h, !0);
      "ArrowFunctionExpression" !== sent$c.type && (sent$n.let("this", this), sent$n.let("arguments", arguments), sent$n.const(arguments$bt, sent$t), sent$l ? (sent$n.const(arguments$mt, sent$l), push$u && sent$n.let(find$yt, push$u)) : push$u && push$u(this));
      for (var sent$s, onlyBlock$a = 0; onlyBlock$a < LABEL$p.length; onlyBlock$a++) {
        var sent$o = LABEL$p[onlyBlock$a];
        "Identifier" === sent$o.type ? sent$n.var(sent$o.name, sent$r[onlyBlock$a]) : "RestElement" === sent$o.type ? feed$Vr(sent$o, sent$n, {
          kind: "var",
          feed: sent$r.slice(onlyBlock$a)
        }) : getVar$V(sent$o, sent$n, {
          kind: "var",
          feed: sent$r[onlyBlock$a]
        });
      }
      return ("BlockStatement" === sent$c.body.type ? (hoisted$mi(sent$c.body, sent$n), sent$s = body$Mr(sent$c.body, sent$n, {
        invasived: !0,
        hoisted: !0
      })) : (sent$s = computed$T(sent$c.body, sent$n), "ArrowFunctionExpression" === sent$c.type && (LABEL$S.RES = sent$s, sent$s = LABEL$S)), sent$s === LABEL$S ? sent$s.RES : sent$t ? sent$n.find("this").get() : void 0);
    }, "ArrowFunctionExpression" === sent$c.type && ObjectGetOwnPropertyDescriptor$q$f(sent$e, TypeError$gt, {
      value: !0
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$e, "name", {
      value: sent$c.id && sent$c.id.name || "",
      configurable: !0
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$e, "length", {
      value: LABEL$p.length,
      configurable: !0
    }), (sent$r = null == (sent$t = sent$c.loc) ? void 0 : sent$t.source) && ObjectGetOwnPropertyDescriptor$q$f(sent$e, "toString", {
      value: function $value() {
        return sent$r.substring(sent$c.start, sent$c.end);
      },
      configurable: !0
    }), sent$e));
  }

  function ClassExpression$yi(sent$e, sent$i) {
    for (var sent$n = computed$T(sent$e.superClass, sent$i), sent$s = sent$e.body.body, sent$t = function $sent$t(sent$e) {
        for (var sent$t = 0; sent$t < sent$s.length; sent$t++) {
          var sent$r = sent$s[sent$t];
          "PropertyDefinition" !== sent$r.type || sent$r.static || static$hi(sent$r, sent$i, {
            klass: sent$e,
            superClass: sent$n
          });
        }
      }, sent$r = function $sent$r() {
        var sent$e = sent$n ? ReferenceError$te(this, sent$n) : this;
        return (sent$t(sent$e), sent$e);
      }, onlyBlock$a = 0; onlyBlock$a < sent$s.length; onlyBlock$a++) {
      var sent$o = sent$s[onlyBlock$a];
      if ("MethodDefinition" === sent$o.type && "constructor" === sent$o.kind) {
        sent$r = FunctionExpression$N(sent$o.value, sent$i, {
          superClass: sent$n,
          construct: sent$t
        });
        break;
      }
    }
    return (sent$n && construct$ee(sent$r, sent$n), ClassBody$oi(sent$e.body, sent$i, {
      klass: sent$r,
      superClass: sent$n
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$r, TypeError$vt, {
      value: !0
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$r, "name", {
      value: sent$e.id && sent$e.id.name || "",
      configurable: !0
    }), sent$r);
  }

  function configurable$gi(sent$e, sent$t, sent$r) {
    var sent$r = sent$r.value,
      sent$i = sent$e.left,
      sent$n = new FunctionExpression$P(sent$t);
    return ("VariableDeclaration" === sent$i.type ? left$ni(sent$i, sent$n, {
      feed: sent$r
    }) : "Identifier" === sent$i.type ? onlyBlock$wr(sent$i, sent$t, {
      getVar: !0
    }).set(sent$r) : getVar$V(sent$i, sent$t, {
      feed: sent$r
    }), "BlockStatement" === sent$e.body.type ? body$Mr(sent$e.body, sent$n, {
      invasived: !0
    }) : computed$T(sent$e.body, sent$n));
  }

  function body$vi(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o, sent$c;
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          (sent$n = sent$i.onlyBlock, sent$n = void 0 !== sent$n && sent$n, sent$s = [], onlyBlock$a = [], sent$c = 0, sent$e.label = 1);
        case 1:
          return sent$c < sent$t.body.length ? "FunctionDeclaration" !== (sent$o = sent$t.body[sent$c]).type ? [3, 2] : (sent$s.push(sent$o), onlyBlock$a.push(sent$c), [3, 6]) : [3, 7];
        case 2:
          return "VariableDeclaration" !== sent$o.type || -1 === ["const", "let"].indexOf(sent$o.kind) ? [3, 4] : [5, sent$b(left$lr(sent$o, sent$r, {
            hoist: !0,
            onlyBlock: !0
          }))];
        case 3:
          return (sent$e.sent(), [3, 6]);
        case 4:
          return sent$n ? [3, 6] : [5, sent$b((function sent$t(sent$r, sent$i) {
            var sent$n, sent$s, onlyBlock$a, sent$o, sent$c;
            return sent$v(this, function(sent$e) {
              switch (sent$e.label) {
                case 0:
                  switch (sent$r.type) {
                    case "VariableDeclaration":
                      return [3, 1];
                    case "ForInStatement":
                    case "ForOfStatement":
                      return [3, 3];
                    case "ForStatement":
                      return [3, 5];
                    case "WhileStatement":
                    case "DoWhileStatement":
                      return [3, 7];
                    case "IfStatement":
                      return [3, 9];
                    case "BlockStatement":
                      return [3, 13];
                    case "SwitchStatement":
                      return [3, 18];
                    case "TryStatement":
                      return [3, 25];
                  }
                  return [3, 38];
                case 1:
                  return [5, sent$b(left$lr(sent$r, sent$i, {
                    hoist: !0
                  }))];
                case 2:
                  return (sent$e.sent(), [3, 38]);
                case 3:
                  return "VariableDeclaration" !== sent$r.left.type ? [3, 5] : [5, sent$b(left$lr(sent$r.left, sent$i, {
                    hoist: !0
                  }))];
                case 4:
                  (sent$e.sent(), sent$e.label = 5);
                case 5:
                  return "ForStatement" !== sent$r.type || "VariableDeclaration" !== sent$r.init.type ? [3, 7] : [5, sent$b(left$lr(sent$r.init, sent$i, {
                    hoist: !0
                  }))];
                case 6:
                  (sent$e.sent(), sent$e.label = 7);
                case 7:
                  return [5, sent$b(sent$t(sent$r.body, sent$i))];
                case 8:
                  return (sent$e.sent(), [3, 38]);
                case 9:
                  return [5, sent$b(sent$t(sent$r.consequent, sent$i))];
                case 10:
                  return (sent$e.sent(), sent$r.alternate) ? [5, sent$b(sent$t(sent$r.alternate, sent$i))] : [3, 12];
                case 11:
                  (sent$e.sent(), sent$e.label = 12);
                case 12:
                  return [3, 38];
                case 13:
                  (sent$c = 0, sent$e.label = 14);
                case 14:
                  return sent$c < sent$r.body.length ? [5, sent$b(sent$t(sent$r.body[sent$c], sent$i))] : [3, 17];
                case 15:
                  (sent$e.sent(), sent$e.label = 16);
                case 16:
                  return (sent$c++, [3, 14]);
                case 17:
                  return [3, 38];
                case 18:
                  (sent$c = 0, sent$e.label = 19);
                case 19:
                  if (!(sent$c < sent$r.cases.length)) return [3, 24];
                  (sent$n = 0, sent$e.label = 20);
                case 20:
                  return sent$n < sent$r.cases[sent$c].consequent.length ? [5, sent$b(sent$t(sent$r.cases[sent$c].consequent[sent$n], sent$i))] : [3, 23];
                case 21:
                  (sent$e.sent(), sent$e.label = 22);
                case 22:
                  return (sent$n++, [3, 20]);
                case 23:
                  return (sent$c++, [3, 19]);
                case 24:
                  return [3, 38];
                case 25:
                  (sent$s = sent$r.block.body, sent$c = 0, sent$e.label = 26);
                case 26:
                  return sent$c < sent$s.length ? [5, sent$b(sent$t(sent$s[sent$c], sent$i))] : [3, 29];
                case 27:
                  (sent$e.sent(), sent$e.label = 28);
                case 28:
                  return (sent$c++, [3, 26]);
                case 29:
                  if (!(onlyBlock$a = sent$r.handler && sent$r.handler.body.body)) return [3, 33];
                  (sent$c = 0, sent$e.label = 30);
                case 30:
                  return sent$c < onlyBlock$a.length ? [5, sent$b(sent$t(onlyBlock$a[sent$c], sent$i))] : [3, 33];
                case 31:
                  (sent$e.sent(), sent$e.label = 32);
                case 32:
                  return (sent$c++, [3, 30]);
                case 33:
                  if (!(sent$o = sent$r.finalizer && sent$r.finalizer.body)) return [3, 37];
                  (sent$c = 0, sent$e.label = 34);
                case 34:
                  return sent$c < sent$o.length ? [5, sent$b(sent$t(sent$o[sent$c], sent$i))] : [3, 37];
                case 35:
                  (sent$e.sent(), sent$e.label = 36);
                case 36:
                  return (sent$c++, [3, 34]);
                case 37:
                  return [3, 38];
                case 38:
                  return [2];
              }
            });
          })(sent$o, sent$r))];
        case 5:
          (sent$e.sent(), sent$e.label = 6);
        case 6:
          return (sent$c++, [3, 1]);
        case 7:
          if (onlyBlock$a.length) {
            for (sent$c = onlyBlock$a.length - 1; - 1 < sent$c; sent$c--) sent$t.body.splice(onlyBlock$a[sent$c], 1);
            sent$t.body = sent$s.concat(sent$t.body);
          }
          return [2];
      }
    }));
  }

  function sent$B(sent$t, sent$r, sent$i) {
    return (void 0 === sent$i && (sent$i = {}), sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          switch (sent$t.type) {
            case "ObjectPattern":
              return [3, 1];
            case "ArrayPattern":
              return [3, 3];
            case "RestElement":
              return [3, 5];
            case "AssignmentPattern":
              return [3, 7];
          }
          return [3, 9];
        case 1:
          return [5, sent$b(ObjectPattern$Dt(sent$t, sent$r, sent$i))];
        case 2:
          return [2, sent$e.sent()];
        case 3:
          return [5, sent$b(sent$Ot(sent$t, sent$r, sent$i))];
        case 4:
          return [2, sent$e.sent()];
        case 5:
          return [5, sent$b(sent$Mt(sent$t, sent$r, sent$i))];
        case 6:
          return [2, sent$e.sent()];
        case 7:
          return [5, sent$b(sent$Ft(sent$t, sent$r, sent$i))];
        case 8:
          return [2, sent$e.sent()];
        case 9:
          throw new SyntaxError("Unexpected token");
      }
    }));
  }

  function FunctionExpression$R(sent$c, sent$h, sent$e) {
    var sent$t, sent$l, push$u, LABEL$p, sent$s, sent$r, sent$i;
    return (void 0 === sent$e && (sent$e = {}), sent$c.generator || sent$c.async ? (sent$l = sent$e.superClass, push$u = sent$e.construct, LABEL$p = sent$c.params, sent$s = function sent$e() {
      for (var sent$t, sent$r, sent$i, sent$n, sent$s = this && this instanceof sent$e ? this.constructor : void 0, onlyBlock$a = [], sent$o = 0; sent$o < arguments.length; sent$o++) onlyBlock$a[sent$o] = arguments[sent$o];
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            if ((sent$t = new FunctionExpression$P(sent$h, !0), "ArrowFunctionExpression" !== sent$c.type)) {
              if ((sent$t.let("this", this), sent$t.let("arguments", arguments), sent$t.const(arguments$bt, sent$s), !sent$l)) return [3, 1];
              (sent$t.const(arguments$mt, sent$l), push$u && sent$t.let(find$yt, push$u));
            }
            return [3, 3];
          case 1:
            return push$u ? [5, sent$b(push$u(this))] : [3, 3];
          case 2:
            (sent$e.sent(), sent$e.label = 3);
          case 3:
            (sent$r = 0, sent$e.label = 4);
          case 4:
            return sent$r < LABEL$p.length ? "Identifier" !== (sent$i = LABEL$p[sent$r]).type ? [3, 5] : (sent$t.var(sent$i.name, onlyBlock$a[sent$r]), [3, 9]) : [3, 10];
          case 5:
            return "RestElement" !== sent$i.type ? [3, 7] : [5, sent$b(sent$Mt(sent$i, sent$t, {
              kind: "var",
              feed: onlyBlock$a.slice(sent$r)
            }))];
          case 6:
            return (sent$e.sent(), [3, 9]);
          case 7:
            return [5, sent$b(sent$B(sent$i, sent$t, {
              kind: "var",
              feed: onlyBlock$a[sent$r]
            }))];
          case 8:
            (sent$e.sent(), sent$e.label = 9);
          case 9:
            return (sent$r++, [3, 4]);
          case 10:
            return "BlockStatement" !== sent$c.body.type ? [3, 13] : [5, sent$b(body$vi(sent$c.body, sent$t))];
          case 11:
            return (sent$e.sent(), [5, sent$b(body$Gt(sent$c.body, sent$t, {
              invasived: !0,
              hoisted: !0
            }))]);
          case 12:
            return (sent$n = sent$e.sent(), [3, 15]);
          case 13:
            return [5, sent$b(sent$L(sent$c.body, sent$t))];
          case 14:
            (sent$n = sent$e.sent(), "ArrowFunctionExpression" === sent$c.type && (LABEL$S.RES = sent$n, sent$n = LABEL$S), sent$e.label = 15);
          case 15:
            return sent$n === LABEL$S ? [2, sent$n.RES] : sent$s ? [2, sent$t.find("this").get()] : [2];
        }
      });
    }, sent$r = sent$c.async && sent$c.generator ? function() {
      function sent$t(sent$e) {
        return sent$i = sent$i.then(function() {
          return ecmaVersion$Ct(sent$r, find$m({
            fullRet: !0
          }, sent$e));
        }).catch(function(sent$e) {
          if (!sent$n) return (sent$n = !0, Promise.reject(sent$e));
        });
      }
      var sent$r = sent$s.apply(this, arguments),
        sent$i = Promise.resolve(),
        sent$n = !1,
        sent$e = {
          next: function $next(sent$e) {
            return sent$t({
              res: sent$e
            });
          },
          throw: function $throw(sent$e) {
            return sent$t({
              err: sent$e
            });
          },
          return: function $return(sent$e) {
            return sent$t({
              ret: sent$e
            });
          }
        };
      return ("function" == typeof Symbol && (sent$e[Symbol.iterator] = function() {
        return this;
      }), sent$e);
    } : sent$c.async ? function() {
      return ecmaVersion$Ct(sent$s.apply(this, arguments));
    } : sent$s, ObjectGetOwnPropertyDescriptor$q$f(sent$r, TypeError$gt, {
      value: !0
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$r, "name", {
      value: sent$c.id && sent$c.id.name || "",
      configurable: !0
    }), ObjectGetOwnPropertyDescriptor$q$f(sent$r, "length", {
      value: LABEL$p.length,
      configurable: !0
    }), (sent$i = null == (sent$t = sent$c.loc) ? void 0 : sent$t.source) && ObjectGetOwnPropertyDescriptor$q$f(sent$r, "toString", {
      value: function $value() {
        return sent$i.substring(sent$c.start, sent$c.end);
      },
      configurable: !0
    }), sent$r) : FunctionExpression$N(sent$c, sent$h, sent$e));
  }

  function declaration$bi(sent$t, sent$n) {
    var sent$s, onlyBlock$a, sent$r, sent$i, sent$o, sent$c;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return [5, sent$b(sent$L(sent$t.superClass, sent$n))];
        case 1:
          for ((sent$s = sent$e.sent(), onlyBlock$a = sent$t.body.body, sent$r = function $sent$r(sent$t) {
              var sent$r, sent$i;
              return sent$v(this, function(sent$e) {
                switch (sent$e.label) {
                  case 0:
                    (sent$r = 0, sent$e.label = 1);
                  case 1:
                    return sent$r < onlyBlock$a.length ? "PropertyDefinition" !== (sent$i = onlyBlock$a[sent$r]).type || sent$i.static ? [3, 3] : [5, sent$b(static$mr(sent$i, sent$n, {
                      klass: sent$t,
                      superClass: sent$s
                    }))] : [3, 4];
                  case 2:
                    (sent$e.sent(), sent$e.label = 3);
                  case 3:
                    return (sent$r++, [3, 1]);
                  case 4:
                    return [2];
                }
              });
            }, sent$i = function $sent$i() {
              var sent$t;
              return sent$v(this, function(sent$e) {
                switch (sent$e.label) {
                  case 0:
                    return (sent$t = sent$s ? ReferenceError$te(this, sent$s) : this, [5, sent$b(sent$r(sent$t))]);
                  case 1:
                    return (sent$e.sent(), [2, sent$t]);
                }
              });
            }, sent$o = 0); sent$o < onlyBlock$a.length; sent$o++)
            if ("MethodDefinition" === (sent$c = onlyBlock$a[sent$o]).type && "constructor" === sent$c.kind) {
              sent$i = FunctionExpression$R(sent$c.value, sent$n, {
                superClass: sent$s,
                construct: sent$r
              });
              break;
            }
          return (sent$s && construct$ee(sent$i, sent$s), [5, sent$b(ClassBody$dr(sent$t.body, sent$n, {
            klass: sent$i,
            superClass: sent$s
          }))]);
        case 2:
          return (sent$e.sent(), ObjectGetOwnPropertyDescriptor$q$f(sent$i, TypeError$vt, {
            value: !0
          }), ObjectGetOwnPropertyDescriptor$q$f(sent$i, "name", {
            value: sent$t.id && sent$t.id.name || "",
            configurable: !0
          }), [2, sent$i]);
      }
    });
  }

  function done$xi(sent$t, sent$r, sent$i) {
    var sent$n, sent$s, onlyBlock$a, sent$o;
    return sent$v(this, function(sent$e) {
      switch (sent$e.label) {
        case 0:
          return (sent$n = sent$i.value, sent$s = sent$t.left, onlyBlock$a = new FunctionExpression$P(sent$r), "VariableDeclaration" !== sent$s.type ? [3, 2] : [5, sent$b(left$lr(sent$s, onlyBlock$a, {
            feed: sent$n
          }))]);
        case 1:
          return (sent$e.sent(), [3, 6]);
        case 2:
          return "Identifier" !== sent$s.type ? [3, 4] : [5, sent$b(onlyBlock$wr(sent$s, sent$r, {
            getVar: !0
          }))];
        case 3:
          return (sent$e.sent().set(sent$n), [3, 6]);
        case 4:
          return [5, sent$b(sent$B(sent$s, sent$r, {
            feed: sent$n
          }))];
        case 5:
          (sent$e.sent(), sent$e.label = 6);
        case 6:
          return "BlockStatement" !== sent$t.body.type ? [3, 8] : [5, sent$b(body$Gt(sent$t.body, onlyBlock$a, {
            invasived: !0
          }))];
        case 7:
          return (sent$o = sent$e.sent(), [3, 10]);
        case 8:
          return [5, sent$b(sent$L(sent$t.body, onlyBlock$a))];
        case 9:
          (sent$o = sent$e.sent(), sent$e.label = 10);
        case 10:
          return [2, sent$o];
      }
    });
  }

  function sent$wi(sent$e) {
    (void 0 === sent$e && (sent$e = {}), this.options = {
      ecmaVersion: "latest"
    }, this.scope = new FunctionExpression$P(null, !0), this.exports = {});
    var sent$t = sent$e.ecmaVer,
      sent$t = void 0 === sent$t ? "latest" : sent$t,
      sent$r = sent$e.sandBox,
      sent$r = void 0 === sent$r || sent$r,
      sent$e = sent$e.sourceType,
      sent$e = void 0 === sent$e ? "script" : sent$e;
    if (("number" == typeof sent$t && (sent$t -= sent$t < 2015 ? 0 : 2009), "latest" !== sent$t && 3 !== sent$t && (sent$t < 5 || 15 < sent$t))) throw new Error("unsupported ecmaVer");
    (this.options.ecmaVersion = sent$t, this.options.sourceType = sent$e, sent$r ? (sent$r = find$m(ObjectCreate$$(((sent$t = {})[apply$oe] = sent$i, sent$t)), ObjectCreate$$$ne), this.scope.let("globalThis", sent$r), this.scope.let("window", sent$r), this.scope.let("self", sent$r), this.scope.let("this", sent$r)) : (this.scope.let("globalThis", sent$i), this.scope.let("window", sent$i), this.scope.let("self", sent$i), this.scope.let("this", sent$i)), this.scope.const("module" === sent$e ? find$A : "exports", this.exports = {}));
  }
  return (sent$wi.prototype.import = function $import(sent$e, sent$t) {
    var sent$r;
    if (("string" == typeof sent$e && ((sent$r = {})[sent$e] = sent$t, sent$e = sent$r), "object" == typeof sent$e))
      for (var sent$i = ObjectGetOwnPropertyNames$H(sent$e), sent$n = 0; sent$n < sent$i.length; sent$n++) {
        var sent$s = sent$i[sent$n],
          onlyBlock$a = "module" === this.options.sourceType ? find$xt + sent$s : sent$s;
        this.scope.var(onlyBlock$a, sent$e[sent$s]);
      }
  }, sent$wi.prototype.parse = function $parse(sent$e, sent$t) {
    return "function" == typeof sent$t ? sent$t(sent$e, find$m({}, this.options)) : (sent$t = this.options, sent$l.parse(sent$e, sent$t));
  }, sent$wi.prototype.run = function $run(sent$e) {
    var sent$t = "string" == typeof sent$e ? this.parse(sent$e) : sent$e,
      sent$r = this.scope;
    "module" === this.options.sourceType && ("latest" === this.options.ecmaVersion || 13 <= this.options.ecmaVersion) ? ecmaVersion$Ct((function() {
      return sent$v(this, function(sent$e) {
        switch (sent$e.label) {
          case 0:
            return [5, sent$b(body$vi(sent$t, sent$r))];
          case 1:
            return (sent$e.sent(), [5, sent$b(sent$L(sent$t, sent$r))]);
          case 2:
            return (sent$e.sent(), [2]);
        }
      });
    })()) : (hoisted$mi(sent$t, sent$r), computed$T(sent$t, sent$r));
  }, sent$wi.version = "0.6.3", sent$wi);
});
//export default Sval;
