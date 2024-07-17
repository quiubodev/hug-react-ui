import P, { useState as yr } from "react";
function Er(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ne = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  if (Se) return M;
  Se = 1;
  var t = P, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, p, k) {
    var R, j = {}, C = null, Y = null;
    k !== void 0 && (C = "" + k), p.key !== void 0 && (C = "" + p.key), p.ref !== void 0 && (Y = p.ref);
    for (R in p) s.call(p, R) && !u.hasOwnProperty(R) && (j[R] = p[R]);
    if (b && b.defaultProps) for (R in p = b.defaultProps, p) j[R] === void 0 && (j[R] = p[R]);
    return { $$typeof: a, type: b, key: C, ref: Y, props: j, _owner: v.current };
  }
  return M.Fragment = i, M.jsx = h, M.jsxs = h, M;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Rr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var t = P, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ae = Symbol.iterator, We = "@@iterator";
    function $e(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ae && e[ae] || e[We];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        Me("error", e, n);
      }
    }
    function Me(e, r, n) {
      {
        var o = D.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var d = n.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Ne = !1, Ye = !1, Le = !1, ze = !1, Ve = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === u || Ve || e === v || e === k || e === R || ze || e === Y || Ne || Ye || Le || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === j || e.$$typeof === h || e.$$typeof === b || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Be(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case u:
          return "Profiler";
        case v:
          return "StrictMode";
        case k:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return oe(r) + ".Consumer";
          case h:
            var n = e;
            return oe(n._context) + ".Provider";
          case p:
            return Be(e, e.render, "ForwardRef");
          case j:
            var o = e.displayName || null;
            return o !== null ? o : w(e.type) || "Memo";
          case C: {
            var f = e, d = f._payload, c = f._init;
            try {
              return w(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, I = 0, se, ue, le, ce, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Je() {
      {
        if (I === 0) {
          se = console.log, ue = console.info, le = console.warn, ce = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ke() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: se
            }),
            info: S({}, e, {
              value: ue
            }),
            warn: S({}, e, {
              value: le
            }),
            error: S({}, e, {
              value: ce
            }),
            group: S({}, e, {
              value: fe
            }),
            groupCollapsed: S({}, e, {
              value: de
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        I < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = D.ReactCurrentDispatcher, G;
    function L(e, r, n) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            G = o && o[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, z;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      z = new qe();
    }
    function ge(e, r) {
      if (!e || H)
        return "";
      {
        var n = z.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      H = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = q.current, q.current = null, Je();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (_) {
              o = _;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (_) {
              o = _;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            o = _;
          }
          e();
        }
      } catch (_) {
        if (_ && o && typeof _.stack == "string") {
          for (var l = _.stack.split(`
`), E = o.stack.split(`
`), g = l.length - 1, m = E.length - 1; g >= 1 && m >= 0 && l[g] !== E[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (l[g] !== E[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || l[g] !== E[m]) {
                    var O = `
` + l[g].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, O), O;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        H = !1, q.current = d, Ke(), Error.prepareStackTrace = f;
      }
      var A = e ? e.displayName || e.name : "", T = A ? L(A) : "";
      return typeof e == "function" && z.set(e, T), T;
    }
    function Ge(e, r, n) {
      return ge(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, He(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case k:
          return L("Suspense");
        case R:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ge(e.render);
          case j:
            return V(e.type, r, n);
          case C: {
            var o = e, f = o._payload, d = o._init;
            try {
              return V(d(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, me = {}, he = D.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, n = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(n);
      } else
        he.setExtraStackFrame(null);
    }
    function Xe(e, r, n, o, f) {
      {
        var d = Function.call.bind(W);
        for (var c in e)
          if (d(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var E = Error((o || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              l = e[c](r, c, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              l = g;
            }
            l && !(l instanceof Error) && (U(f), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, c, typeof l), U(null)), l instanceof Error && !(l.message in me) && (me[l.message] = !0, U(f), y("Failed %s type: %s", n, l.message), U(null));
          }
      }
    }
    var Ze = Array.isArray;
    function X(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function er(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (er(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), be(e);
    }
    var $ = D.ReactCurrentOwner, rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, _e, Z;
    Z = {};
    function tr(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var n = w($.current.type);
        Z[n] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w($.current.type), e.ref), Z[n] = !0);
      }
    }
    function ir(e, r) {
      {
        var n = function() {
          Ee || (Ee = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var n = function() {
          _e || (_e = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, n, o, f, d, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ur(e, r, n, o, f) {
      {
        var d, c = {}, l = null, E = null;
        n !== void 0 && (ye(n), l = "" + n), nr(r) && (ye(r.key), l = "" + r.key), tr(r) && (E = r.ref, ar(r, f));
        for (d in r)
          W.call(r, d) && !rr.hasOwnProperty(d) && (c[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            c[d] === void 0 && (c[d] = g[d]);
        }
        if (l || E) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && ir(c, m), E && or(c, m);
        }
        return sr(e, l, E, f, o, $.current, c);
      }
    }
    var Q = D.ReactCurrentOwner, Re = D.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, n = V(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(n);
      } else
        Re.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Oe() {
      {
        if (Q.current) {
          var e = w(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var we = {};
    function cr(e) {
      {
        var r = Oe();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = cr(r);
        if (we[n])
          return;
        we[n] = !0;
        var o = "";
        e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + w(e._owner.type) + "."), F(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), F(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            re(o) && je(o, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = $e(e);
          if (typeof f == "function" && f !== e.entries)
            for (var d = f.call(e), c; !(c = d.next()).done; )
              re(c.value) && je(c.value, r);
        }
      }
    }
    function fr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === j))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = w(r);
          Xe(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = w(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            F(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var xe = {};
    function Ce(e, r, n, o, f, d) {
      {
        var c = Ue(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = lr();
          E ? l += E : l += Oe();
          var g;
          e === null ? g = "null" : X(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (w(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, l);
        }
        var m = ur(e, r, n, f, d);
        if (m == null)
          return m;
        if (c) {
          var O = r.children;
          if (O !== void 0)
            if (o)
              if (X(O)) {
                for (var A = 0; A < O.length; A++)
                  Pe(O[A], e);
                Object.freeze && Object.freeze(O);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        if (W.call(r, "key")) {
          var T = w(e), _ = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), te = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xe[T + te]) {
            var hr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, T, hr, T), xe[T + te] = !0;
          }
        }
        return e === s ? dr(m) : fr(m), m;
      }
    }
    function vr(e, r, n) {
      return Ce(e, r, n, !0);
    }
    function pr(e, r, n) {
      return Ce(e, r, n, !1);
    }
    var gr = pr, mr = vr;
    N.Fragment = s, N.jsx = gr, N.jsxs = mr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ne.exports = _r() : ne.exports = Rr();
var x = ne.exports, Fe = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var a = {}.hasOwnProperty;
    function i() {
      for (var u = "", h = 0; h < arguments.length; h++) {
        var b = arguments[h];
        b && (u = v(u, s(b)));
      }
      return u;
    }
    function s(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return i.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var h = "";
      for (var b in u)
        a.call(u, b) && u[b] && (h = v(h, b));
      return h;
    }
    function v(u, h) {
      return h ? u ? u + " " + h : u + h : u;
    }
    t.exports ? (i.default = i, t.exports = i) : window.classNames = i;
  })();
})(Fe);
var Or = Fe.exports;
const wr = /* @__PURE__ */ Er(Or);
var Ae = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, ke = P.createContext && /* @__PURE__ */ P.createContext(Ae), jr = ["attr", "size", "title"];
function Pr(t, a) {
  if (t == null) return {};
  var i = xr(t, a), s, v;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (v = 0; v < u.length; v++)
      s = u[v], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
function xr(t, a) {
  if (t == null) return {};
  var i = {};
  for (var s in t)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      if (a.indexOf(s) >= 0) continue;
      i[s] = t[s];
    }
  return i;
}
function B() {
  return B = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var i = arguments[a];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, B.apply(this, arguments);
}
function De(t, a) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    a && (s = s.filter(function(v) {
      return Object.getOwnPropertyDescriptor(t, v).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function J(t) {
  for (var a = 1; a < arguments.length; a++) {
    var i = arguments[a] != null ? arguments[a] : {};
    a % 2 ? De(Object(i), !0).forEach(function(s) {
      Cr(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : De(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function Cr(t, a, i) {
  return a = Sr(a), a in t ? Object.defineProperty(t, a, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[a] = i, t;
}
function Sr(t) {
  var a = Tr(t, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Tr(t, a) {
  if (typeof t != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var s = i.call(t, a || "default");
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(t);
}
function Ie(t) {
  return t && t.map((a, i) => /* @__PURE__ */ P.createElement(a.tag, J({
    key: i
  }, a.attr), Ie(a.child)));
}
function K(t) {
  return (a) => /* @__PURE__ */ P.createElement(kr, B({
    attr: J({}, t.attr)
  }, a), Ie(t.child));
}
function kr(t) {
  var a = (i) => {
    var {
      attr: s,
      size: v,
      title: u
    } = t, h = Pr(t, jr), b = v || i.size || "1em", p;
    return i.className && (p = i.className), t.className && (p = (p ? p + " " : "") + t.className), /* @__PURE__ */ P.createElement("svg", B({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, s, h, {
      className: p,
      style: J(J({
        color: t.color || i.color
      }, i.style), t.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && /* @__PURE__ */ P.createElement("title", null, u), t.children);
  };
  return ke !== void 0 ? /* @__PURE__ */ P.createElement(ke.Consumer, null, (i) => a(i)) : a(Ae);
}
function Dr(t) {
  return K({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" }, child: [] }] })(t);
}
function Fr(t) {
  return K({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }, child: [] }] })(t);
}
function Ar(t) {
  return K({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" }, child: [] }] })(t);
}
function Ir(t) {
  return K({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" }, child: [] }] })(t);
}
var Wr = /* @__PURE__ */ ((t) => (t.success = "success", t.danger = "danger", t.warning = "warning", t.info = "info", t))(Wr || {});
const $r = ({ type: t = "success", children: a }) => {
  const i = {
    success: "bg-green-300 text-green-900",
    danger: "bg-red-100 text-red-900",
    warning: "bg-yellow-100 text-yellow-900",
    info: "bg-blue-100 text-blue-900"
  };
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      role: "alert",
      "aria-live": "assertive",
      className: wr(
        "p-4 shadow max-w-lg rounded-md m-2 flex gap-2 items-center",
        i[t]
      ),
      children: [
        /* @__PURE__ */ x.jsxs("span", { className: "text-2xl", children: [
          t === "success" ? /* @__PURE__ */ x.jsx(Dr, {}) : null,
          t === "danger" ? /* @__PURE__ */ x.jsx(Ar, {}) : null,
          t === "warning" ? /* @__PURE__ */ x.jsx(Ir, {}) : null,
          t === "info" ? /* @__PURE__ */ x.jsx(Fr, {}) : null
        ] }),
        a
      ]
    }
  );
}, Mr = () => {
  const [t, a] = yr([]), i = (v) => {
    a((u) => [v, ...u]), setTimeout(() => {
      a((u) => u.slice(0, u.length - 1));
    }, 5e3);
  }, s = /* @__PURE__ */ x.jsx("div", { className: "absolute bottom-0 right-0", children: t.map((v, u) => /* @__PURE__ */ x.jsx($r, { type: v.type, children: v.message }, u)) });
  return { toast: i, toastList: s };
}, Yr = Mr;
export {
  Wr as TOAST_VARIANTS,
  $r as Toast,
  Yr as useToast
};
//# sourceMappingURL=index.es.js.map
