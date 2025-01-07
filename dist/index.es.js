import * as V from "react";
import be, { useState as Z, createContext as Mt, useContext as q, useLayoutEffect as el, useEffect as Y, useRef as nt, useCallback as Un, useMemo as Pt, forwardRef as nl, createElement as Bi, useId as hr, useInsertionEffect as rl, cloneElement as ol, Children as il, isValidElement as sl } from "react";
import A, { keyframes as al, ThemeProvider as ll } from "styled-components";
import Ii from "react-dom";
function Cm(t) {
  const [e, n] = Z(t), [r, o] = Z("default");
  return {
    state: e,
    setState: n,
    setStatus: o,
    reset() {
      n(t), o("default");
    },
    bindings: {
      value: e,
      status: r,
      onChange(s) {
        n(s.target.value);
      }
    }
  };
}
function Sm(t = !1) {
  const [e, n] = Z(t);
  return {
    state: e,
    setState: n,
    reset: () => n(t),
    bindings: {
      checked: e,
      onChange: (r) => n(r)
    }
  };
}
function Am(t = !1) {
  const [e, n] = Z(t);
  return {
    isOpen: e,
    setOpen: n,
    bindings: {
      open: e,
      setOpen: n
    }
  };
}
var fe = {}, cl = {
  get exports() {
    return fe;
  },
  set exports(t) {
    fe = t;
  }
}, Zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function ul() {
  if (bo)
    return Zt;
  bo = 1;
  var t = be, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, u) {
    var c, d = {}, h = null, p = null;
    u !== void 0 && (h = "" + u), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (c in l)
      r.call(l, c) && !s.hasOwnProperty(c) && (d[c] = l[c]);
    if (a && a.defaultProps)
      for (c in l = a.defaultProps, l)
        d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: e, type: a, key: h, ref: p, props: d, _owner: o.current };
  }
  return Zt.Fragment = n, Zt.jsx = i, Zt.jsxs = i, Zt;
}
var Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function dl() {
  return xo || (xo = 1, process.env.NODE_ENV !== "production" && function() {
    var t = be, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function w(f) {
      if (f === null || typeof f != "object")
        return null;
      var v = m && f[m] || f[g];
      return typeof v == "function" ? v : null;
    }
    var x = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var v = arguments.length, E = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          E[R - 1] = arguments[R];
        b("error", f, E);
      }
    }
    function b(f, v, E) {
      {
        var R = x.ReactDebugCurrentFrame, M = R.getStackAddendum();
        M !== "" && (v += "%s", E = E.concat([M]));
        var _ = E.map(function(D) {
          return String(D);
        });
        _.unshift("Warning: " + v), Function.prototype.apply.call(console[f], console, _);
      }
    }
    var C = !1, O = !1, L = !1, U = !1, Q = !1, tt;
    tt = Symbol.for("react.module.reference");
    function G(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === s || Q || f === o || f === u || f === c || U || f === p || C || O || L || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === i || f.$$typeof === a || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === tt || f.getModuleId !== void 0));
    }
    function ct(f, v, E) {
      var R = f.displayName;
      if (R)
        return R;
      var M = v.displayName || v.name || "";
      return M !== "" ? E + "(" + M + ")" : E;
    }
    function Vt(f) {
      return f.displayName || "Context";
    }
    function ot(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            var v = f;
            return Vt(v) + ".Consumer";
          case i:
            var E = f;
            return Vt(E._context) + ".Provider";
          case l:
            return ct(f, f.render, "ForwardRef");
          case d:
            var R = f.displayName || null;
            return R !== null ? R : ot(f.type) || "Memo";
          case h: {
            var M = f, _ = M._payload, D = M._init;
            try {
              return ot(D(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var it = Object.assign, I = 0, et, yt, Zr, Qr, to, eo, no;
    function ro() {
    }
    ro.__reactDisabledLog = !0;
    function Va() {
      {
        if (I === 0) {
          et = console.log, yt = console.info, Zr = console.warn, Qr = console.error, to = console.group, eo = console.groupCollapsed, no = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: ro,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        I++;
      }
    }
    function Oa() {
      {
        if (I--, I === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, f, {
              value: et
            }),
            info: it({}, f, {
              value: yt
            }),
            warn: it({}, f, {
              value: Zr
            }),
            error: it({}, f, {
              value: Qr
            }),
            group: it({}, f, {
              value: to
            }),
            groupCollapsed: it({}, f, {
              value: eo
            }),
            groupEnd: it({}, f, {
              value: no
            })
          });
        }
        I < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var yn = x.ReactCurrentDispatcher, vn;
    function Ae(f, v, E) {
      {
        if (vn === void 0)
          try {
            throw Error();
          } catch (M) {
            var R = M.stack.trim().match(/\n( *(at )?)/);
            vn = R && R[1] || "";
          }
        return `
` + vn + f;
      }
    }
    var bn = !1, Pe;
    {
      var Da = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Da();
    }
    function oo(f, v) {
      if (!f || bn)
        return "";
      {
        var E = Pe.get(f);
        if (E !== void 0)
          return E;
      }
      var R;
      bn = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = yn.current, yn.current = null, Va();
      try {
        if (v) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (vt) {
              R = vt;
            }
            Reflect.construct(f, [], D);
          } else {
            try {
              D.call();
            } catch (vt) {
              R = vt;
            }
            f.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vt) {
            R = vt;
          }
          f();
        }
      } catch (vt) {
        if (vt && R && typeof vt.stack == "string") {
          for (var k = vt.stack.split(`
`), J = R.stack.split(`
`), N = k.length - 1, W = J.length - 1; N >= 1 && W >= 0 && k[N] !== J[W]; )
            W--;
          for (; N >= 1 && W >= 0; N--, W--)
            if (k[N] !== J[W]) {
              if (N !== 1 || W !== 1)
                do
                  if (N--, W--, W < 0 || k[N] !== J[W]) {
                    var at = `
` + k[N].replace(" at new ", " at ");
                    return f.displayName && at.includes("<anonymous>") && (at = at.replace("<anonymous>", f.displayName)), typeof f == "function" && Pe.set(f, at), at;
                  }
                while (N >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        bn = !1, yn.current = _, Oa(), Error.prepareStackTrace = M;
      }
      var $t = f ? f.displayName || f.name : "", vo = $t ? Ae($t) : "";
      return typeof f == "function" && Pe.set(f, vo), vo;
    }
    function Fa(f, v, E) {
      return oo(f, !1);
    }
    function La(f) {
      var v = f.prototype;
      return !!(v && v.isReactComponent);
    }
    function Re(f, v, E) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return oo(f, La(f));
      if (typeof f == "string")
        return Ae(f);
      switch (f) {
        case u:
          return Ae("Suspense");
        case c:
          return Ae("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return Fa(f.render);
          case d:
            return Re(f.type, v, E);
          case h: {
            var R = f, M = R._payload, _ = R._init;
            try {
              return Re(_(M), v, E);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, io = {}, so = x.ReactDebugCurrentFrame;
    function Ve(f) {
      if (f) {
        var v = f._owner, E = Re(f.type, f._source, v ? v.type : null);
        so.setExtraStackFrame(E);
      } else
        so.setExtraStackFrame(null);
    }
    function Ma(f, v, E, R, M) {
      {
        var _ = Function.call.bind(ke);
        for (var D in f)
          if (_(f, D)) {
            var k = void 0;
            try {
              if (typeof f[D] != "function") {
                var J = Error((R || "React class") + ": " + E + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              k = f[D](v, D, R, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (Ve(M), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", E, D, typeof k), Ve(null)), k instanceof Error && !(k.message in io) && (io[k.message] = !0, Ve(M), T("Failed %s type: %s", E, k.message), Ve(null));
          }
      }
    }
    var _a = Array.isArray;
    function xn(f) {
      return _a(f);
    }
    function Ba(f) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, E = v && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return E;
      }
    }
    function Ia(f) {
      try {
        return ao(f), !1;
      } catch {
        return !0;
      }
    }
    function ao(f) {
      return "" + f;
    }
    function lo(f) {
      if (Ia(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ba(f)), ao(f);
    }
    var Xt = x.ReactCurrentOwner, ja = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, co, uo, wn;
    wn = {};
    function $a(f) {
      if (ke.call(f, "ref")) {
        var v = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Na(f) {
      if (ke.call(f, "key")) {
        var v = Object.getOwnPropertyDescriptor(f, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ua(f, v) {
      if (typeof f.ref == "string" && Xt.current && v && Xt.current.stateNode !== v) {
        var E = ot(Xt.current.type);
        wn[E] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ot(Xt.current.type), f.ref), wn[E] = !0);
      }
    }
    function Wa(f, v) {
      {
        var E = function() {
          co || (co = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function za(f, v) {
      {
        var E = function() {
          uo || (uo = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        E.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Ha = function(f, v, E, R, M, _, D) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: v,
        ref: E,
        props: D,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function qa(f, v, E, R, M) {
      {
        var _, D = {}, k = null, J = null;
        E !== void 0 && (lo(E), k = "" + E), Na(v) && (lo(v.key), k = "" + v.key), $a(v) && (J = v.ref, Ua(v, M));
        for (_ in v)
          ke.call(v, _) && !ja.hasOwnProperty(_) && (D[_] = v[_]);
        if (f && f.defaultProps) {
          var N = f.defaultProps;
          for (_ in N)
            D[_] === void 0 && (D[_] = N[_]);
        }
        if (k || J) {
          var W = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          k && Wa(D, W), J && za(D, W);
        }
        return Ha(f, k, J, M, R, Xt.current, D);
      }
    }
    var Tn = x.ReactCurrentOwner, fo = x.ReactDebugCurrentFrame;
    function jt(f) {
      if (f) {
        var v = f._owner, E = Re(f.type, f._source, v ? v.type : null);
        fo.setExtraStackFrame(E);
      } else
        fo.setExtraStackFrame(null);
    }
    var En;
    En = !1;
    function Cn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function ho() {
      {
        if (Tn.current) {
          var f = ot(Tn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Ga(f) {
      {
        if (f !== void 0) {
          var v = f.fileName.replace(/^.*[\\\/]/, ""), E = f.lineNumber;
          return `

Check your code at ` + v + ":" + E + ".";
        }
        return "";
      }
    }
    var po = {};
    function Ka(f) {
      {
        var v = ho();
        if (!v) {
          var E = typeof f == "string" ? f : f.displayName || f.name;
          E && (v = `

Check the top-level render call using <` + E + ">.");
        }
        return v;
      }
    }
    function mo(f, v) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var E = Ka(v);
        if (po[E])
          return;
        po[E] = !0;
        var R = "";
        f && f._owner && f._owner !== Tn.current && (R = " It was passed a child from " + ot(f._owner.type) + "."), jt(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, R), jt(null);
      }
    }
    function go(f, v) {
      {
        if (typeof f != "object")
          return;
        if (xn(f))
          for (var E = 0; E < f.length; E++) {
            var R = f[E];
            Cn(R) && mo(R, v);
          }
        else if (Cn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var M = w(f);
          if (typeof M == "function" && M !== f.entries)
            for (var _ = M.call(f), D; !(D = _.next()).done; )
              Cn(D.value) && mo(D.value, v);
        }
      }
    }
    function Ya(f) {
      {
        var v = f.type;
        if (v == null || typeof v == "string")
          return;
        var E;
        if (typeof v == "function")
          E = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === d))
          E = v.propTypes;
        else
          return;
        if (E) {
          var R = ot(v);
          Ma(E, f.props, "prop", R, f);
        } else if (v.PropTypes !== void 0 && !En) {
          En = !0;
          var M = ot(v);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ja(f) {
      {
        for (var v = Object.keys(f.props), E = 0; E < v.length; E++) {
          var R = v[E];
          if (R !== "children" && R !== "key") {
            jt(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), jt(null);
            break;
          }
        }
        f.ref !== null && (jt(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function yo(f, v, E, R, M, _) {
      {
        var D = G(f);
        if (!D) {
          var k = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Ga(M);
          J ? k += J : k += ho();
          var N;
          f === null ? N = "null" : xn(f) ? N = "array" : f !== void 0 && f.$$typeof === e ? (N = "<" + (ot(f.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var W = qa(f, v, E, M, _);
        if (W == null)
          return W;
        if (D) {
          var at = v.children;
          if (at !== void 0)
            if (R)
              if (xn(at)) {
                for (var $t = 0; $t < at.length; $t++)
                  go(at[$t], f);
                Object.freeze && Object.freeze(at);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              go(at, f);
        }
        return f === r ? Ja(W) : Ya(W), W;
      }
    }
    function Xa(f, v, E) {
      return yo(f, v, E, !0);
    }
    function Za(f, v, E) {
      return yo(f, v, E, !1);
    }
    var Qa = Za, tl = Xa;
    Qt.Fragment = r, Qt.jsx = Qa, Qt.jsxs = tl;
  }()), Qt;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = ul() : t.exports = dl();
})(cl);
const ji = fe.Fragment, S = fe.jsx, $ = fe.jsxs, fl = (t) => /* @__PURE__ */ $(
  pl,
  {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    ...t,
    children: [
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          r: "20",
          strokeDasharray: "80",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          opacity: "0.3",
          r: "20",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      )
    ]
  }
), hl = al`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, pl = A.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${hl} 0.9s linear infinite;
`, ml = A.button.attrs((t) => ({
  children: t.loading ? /* @__PURE__ */ S(fl, { style: { margin: ".18rem 0" } }) : t.children
}))`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(t) => t.fullWidth ? "100%" : "250px"};
  min-width: 100px;
  height: 46px;
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(t) => t.icon ? "4px" : "0"};
  background: ${(t) => t.theme.button.background[t.variant || "primary"].default};
  color: ${(t) => t.theme.button.text[t.variant || "primary"]};

  &:hover {
    background: ${(t) => t.theme.button.background[t.variant || "primary"].hover};
    border: ${(t) => t.theme.button.hoverBorder[t.variant || "primary"]};
  }

  &:active {
    background: ${(t) => t.theme.button.background[t.variant || "primary"].active};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(t) => t.theme.button.background[t.variant || "primary"].disabled};
    color: ${(t) => t.theme.button.text.disabled};
  }
`, pr = A.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(t) => t.theme.cardBorder});
  background-color: ${(t) => t.theme.cardBackground};
`, mr = Mt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), nn = Mt({});
function gl() {
  return q(nn).visualElement;
}
const xe = Mt(null), _t = typeof document < "u", ie = _t ? el : Y, $i = Mt({ strict: !1 });
function yl(t, e, n, r) {
  const o = gl(), s = q($i), i = q(xe), a = q(mr).reducedMotion, l = nt();
  r = r || s.renderer, !l.current && r && (l.current = r(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const u = l.current;
  return ie(() => {
    u && u.render();
  }), ie(() => {
    u && u.animationState && u.animationState.animateChanges();
  }), ie(() => () => u && u.notify("Unmount"), []), u;
}
function Ut(t) {
  return typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function vl(t, e, n) {
  return Un(
    (r) => {
      r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && (typeof n == "function" ? n(r) : Ut(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function he(t) {
  return typeof t == "string" || Array.isArray(t);
}
function rn(t) {
  return typeof t == "object" && typeof t.start == "function";
}
const bl = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function on(t) {
  return rn(t.animate) || bl.some((e) => he(t[e]));
}
function Ni(t) {
  return !!(on(t) || t.variants);
}
function xl(t, e) {
  if (on(t)) {
    const { initial: n, animate: r } = t;
    return {
      initial: n === !1 || he(n) ? n : void 0,
      animate: he(r) ? r : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function wl(t) {
  const { initial: e, animate: n } = xl(t, q(nn));
  return Pt(() => ({ initial: e, animate: n }), [wo(e), wo(n)]);
}
function wo(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const bt = (t) => ({
  isEnabled: (e) => t.some((n) => !!e[n])
}), pe = {
  measureLayout: bt(["layout", "layoutId", "drag"]),
  animation: bt([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: bt(["exit"]),
  drag: bt(["drag", "dragControls"]),
  focus: bt(["whileFocus"]),
  hover: bt(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: bt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: bt([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: bt([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function Tl(t) {
  for (const e in t)
    e === "projectionNodeConstructor" ? pe.projectionNodeConstructor = t[e] : pe[e].Component = t[e];
}
function sn(t) {
  const e = nt(null);
  return e.current === null && (e.current = t()), e.current;
}
const se = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
let El = 1;
function Cl() {
  return sn(() => {
    if (se.hasEverUpdated)
      return El++;
  });
}
const gr = Mt({});
class Sl extends be.Component {
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */
  getSnapshotBeforeUpdate() {
    const { visualElement: e, props: n } = this.props;
    return e && e.setProps(n), null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
const Ui = Mt({}), Al = Symbol.for("motionComponentSymbol");
function Pl({ preloadedFeatures: t, createVisualElement: e, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  t && Tl(t);
  function i(l, u) {
    const c = {
      ...q(mr),
      ...l,
      layoutId: Rl(l)
    }, { isStatic: d } = c;
    let h = null;
    const p = wl(l), m = d ? void 0 : Cl(), g = o(l, d);
    if (!d && _t) {
      p.visualElement = yl(s, g, c, e);
      const w = q($i).strict, x = q(Ui);
      p.visualElement && (h = p.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        c,
        w,
        t,
        m,
        n || pe.projectionNodeConstructor,
        x
      ));
    }
    return V.createElement(
      Sl,
      { visualElement: p.visualElement, props: c },
      h,
      V.createElement(nn.Provider, { value: p }, r(s, l, m, vl(g, p.visualElement, u), g, d, p.visualElement))
    );
  }
  const a = nl(i);
  return a[Al] = s, a;
}
function Rl({ layoutId: t }) {
  const e = q(gr).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function kl(t) {
  function e(r, o = {}) {
    return Pl(t(r, o));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
  });
}
const Vl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function yr(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Vl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const We = {};
function Ol(t) {
  Object.assign(We, t);
}
const ze = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Bt = new Set(ze);
function Wi(t, { layout: e, layoutId: n }) {
  return Bt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!We[t] || t === "opacity");
}
const mt = (t) => !!(t != null && t.getVelocity), Dl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Fl = (t, e) => ze.indexOf(t) - ze.indexOf(e);
function Ll({ transform: t, transformKeys: e }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  e.sort(Fl);
  for (const a of e)
    i += `${Dl[a] || a}(${t[a]}) `;
  return n && !t.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(t, o ? "" : i) : r && o && (i = "none"), i;
}
function zi(t) {
  return t.startsWith("--");
}
const Ml = (t, e) => e && typeof t == "number" ? e.transform(t) : t, qt = (t, e, n) => Math.min(Math.max(n, t), e), It = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, ae = {
  ...It,
  transform: (t) => qt(0, 1, t)
}, Oe = {
  ...It,
  default: 1
}, le = (t) => Math.round(t * 1e5) / 1e5, me = /(-)?([\d]*\.?[\d])+/g, Wn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, _l = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function we(t) {
  return typeof t == "string";
}
const Te = (t) => ({
  test: (e) => we(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Ct = Te("deg"), pt = Te("%"), P = Te("px"), Bl = Te("vh"), Il = Te("vw"), To = {
  ...pt,
  parse: (t) => pt.parse(t) / 100,
  transform: (t) => pt.transform(t * 100)
}, Eo = {
  ...It,
  transform: Math.round
}, Hi = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  size: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Transform props
  rotate: Ct,
  rotateX: Ct,
  rotateY: Ct,
  rotateZ: Ct,
  scale: Oe,
  scaleX: Oe,
  scaleY: Oe,
  scaleZ: Oe,
  skew: Ct,
  skewX: Ct,
  skewY: Ct,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: ae,
  originX: To,
  originY: To,
  originZ: P,
  // Misc
  zIndex: Eo,
  // SVG
  fillOpacity: ae,
  strokeOpacity: ae,
  numOctaves: Eo
};
function vr(t, e, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: l } = t;
  a.length = 0;
  let u = !1, c = !1, d = !0;
  for (const h in e) {
    const p = e[h];
    if (zi(h)) {
      s[h] = p;
      continue;
    }
    const m = Hi[h], g = Ml(p, m);
    if (Bt.has(h)) {
      if (u = !0, i[h] = g, a.push(h), !d)
        continue;
      p !== (m.default || 0) && (d = !1);
    } else
      h.startsWith("origin") ? (c = !0, l[h] = g) : o[h] = g;
  }
  if (e.transform || (u || r ? o.transform = Ll(t, n, d, r) : o.transform && (o.transform = "none")), c) {
    const { originX: h = "50%", originY: p = "50%", originZ: m = 0 } = l;
    o.transformOrigin = `${h} ${p} ${m}`;
  }
}
const br = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function qi(t, e, n) {
  for (const r in e)
    !mt(e[r]) && !Wi(r, n) && (t[r] = e[r]);
}
function jl({ transformTemplate: t }, e, n) {
  return Pt(() => {
    const r = br();
    return vr(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
  }, [e]);
}
function $l(t, e, n) {
  const r = t.style || {}, o = {};
  return qi(o, r, t), Object.assign(o, jl(t, e, n)), t.transformValues ? t.transformValues(o) : o;
}
function Nl(t, e, n) {
  const r = {}, o = $l(t, e, n);
  return t.drag && t.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Ul = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Wl = ["whileTap", "onTap", "onTapStart", "onTapCancel"], zl = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Hl = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], ql = /* @__PURE__ */ new Set([
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "onHoverStart",
  "onHoverEnd",
  "layoutScroll",
  ...Hl,
  ...Wl,
  ...Ul,
  ...zl
]);
function He(t) {
  return ql.has(t);
}
let Gi = (t) => !He(t);
function Gl(t) {
  t && (Gi = (e) => e.startsWith("on") ? !He(e) : t(e));
}
try {
  Gl(require("@emotion/is-prop-valid").default);
} catch {
}
function Kl(t, e, n) {
  const r = {};
  for (const o in t)
    (Gi(o) || n === !0 && He(o) || !e && !He(o) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
  return r;
}
function Co(t, e, n) {
  return typeof t == "string" ? t : P.transform(e + n * t);
}
function Yl(t, e, n) {
  const r = Co(e, t.x, t.width), o = Co(n, t.y, t.height);
  return `${r} ${o}`;
}
const Jl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Xl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Zl(t, e, n = 1, r = 0, o = !0) {
  t.pathLength = 1;
  const s = o ? Jl : Xl;
  t[s.offset] = P.transform(-r);
  const i = P.transform(e), a = P.transform(n);
  t[s.array] = `${i} ${a}`;
}
function xr(t, {
  attrX: e,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, u, c, d) {
  if (vr(t, l, u, d), c) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: p, dimensions: m } = t;
  h.transform && (m && (p.transform = h.transform), delete h.transform), m && (r !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = Yl(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && Zl(h, s, i, a, !1);
}
const Ki = () => ({
  ...br(),
  attrs: {}
}), wr = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Ql(t, e, n, r) {
  const o = Pt(() => {
    const s = Ki();
    return xr(s, e, { enableHardwareAcceleration: !1 }, wr(r), t.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [e]);
  if (t.style) {
    const s = {};
    qi(s, t.style, t), o.style = { ...s, ...o.style };
  }
  return o;
}
function tc(t = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const u = (yr(n) ? Ql : Nl)(r, i, a, n), d = {
      ...Kl(r, typeof n == "string", t),
      ...u,
      ref: s
    };
    return o && (d["data-projection-id"] = o), Bi(n, d);
  };
}
const Tr = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Yi(t, { style: e, vars: n }, r, o) {
  Object.assign(t.style, e, o && o.getProjectionStyles(r));
  for (const s in n)
    t.style.setProperty(s, n[s]);
}
const Ji = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Xi(t, e, n, r) {
  Yi(t, e, void 0, r);
  for (const o in e.attrs)
    t.setAttribute(Ji.has(o) ? o : Tr(o), e.attrs[o]);
}
function Er(t) {
  const { style: e } = t, n = {};
  for (const r in e)
    (mt(e[r]) || Wi(r, t)) && (n[r] = e[r]);
  return n;
}
function Zi(t) {
  const e = Er(t);
  for (const n in t)
    if (mt(t[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      e[r] = t[n];
    }
  return e;
}
function Cr(t, e, n, r = {}, o = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, r, o)), e;
}
const qe = (t) => Array.isArray(t), ec = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), nc = (t) => qe(t) ? t[t.length - 1] || 0 : t;
function Ie(t) {
  const e = mt(t) ? t.get() : t;
  return ec(e) ? e.toValue() : e;
}
function rc({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, o, s) {
  const i = {
    latestValues: oc(r, o, s, t),
    renderState: e()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const Qi = (t) => (e, n) => {
  const r = q(nn), o = q(xe), s = () => rc(t, e, r, o);
  return n ? s() : sn(s);
};
function oc(t, e, n, r) {
  const o = {}, s = r(t);
  for (const h in s)
    o[h] = Ie(s[h]);
  let { initial: i, animate: a } = t;
  const l = on(t), u = Ni(t);
  e && u && !l && t.inherit !== !1 && (i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  return d && typeof d != "boolean" && !rn(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const m = Cr(t, p);
    if (!m)
      return;
    const { transitionEnd: g, transition: w, ...x } = m;
    for (const T in x) {
      let b = x[T];
      if (Array.isArray(b)) {
        const C = c ? b.length - 1 : 0;
        b = b[C];
      }
      b !== null && (o[T] = b);
    }
    for (const T in g)
      o[T] = g[T];
  }), o;
}
const ic = {
  useVisualState: Qi({
    scrapeMotionValuesFromProps: Zi,
    createRenderState: Ki,
    onMount: (t, e, { renderState: n, latestValues: r }) => {
      try {
        n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      xr(n, r, { enableHardwareAcceleration: !1 }, wr(e.tagName), t.transformTemplate), Xi(e, n);
    }
  })
}, sc = {
  useVisualState: Qi({
    scrapeMotionValuesFromProps: Er,
    createRenderState: br
  })
};
function ac(t, { forwardMotionProps: e = !1 }, n, r, o) {
  return {
    ...yr(t) ? ic : sc,
    preloadedFeatures: n,
    useRender: tc(e),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: t
  };
}
var B;
(function(t) {
  t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit";
})(B || (B = {}));
function an(t, e, n, r = { passive: !0 }) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
function zn(t, e, n, r) {
  Y(() => {
    const o = t.current;
    if (n && o)
      return an(o, e, n, r);
  }, [t, e, n, r]);
}
function lc({ whileFocus: t, visualElement: e }) {
  const { animationState: n } = e, r = () => {
    n && n.setActive(B.Focus, !0);
  }, o = () => {
    n && n.setActive(B.Focus, !1);
  };
  zn(e, "focus", t ? r : void 0), zn(e, "blur", t ? o : void 0);
}
function ts(t) {
  return typeof PointerEvent < "u" && t instanceof PointerEvent ? t.pointerType === "mouse" : t instanceof MouseEvent;
}
function es(t) {
  return !!t.touches;
}
function cc(t) {
  return (e) => {
    const n = e instanceof MouseEvent;
    (!n || n && e.button === 0) && t(e);
  };
}
const uc = { pageX: 0, pageY: 0 };
function dc(t, e = "page") {
  const r = t.touches[0] || t.changedTouches[0] || uc;
  return {
    x: r[e + "X"],
    y: r[e + "Y"]
  };
}
function fc(t, e = "page") {
  return {
    x: t[e + "X"],
    y: t[e + "Y"]
  };
}
function Sr(t, e = "page") {
  return {
    point: es(t) ? dc(t, e) : fc(t, e)
  };
}
const ns = (t, e = !1) => {
  const n = (r) => t(r, Sr(r));
  return e ? cc(n) : n;
}, hc = () => _t && window.onpointerdown === null, pc = () => _t && window.ontouchstart === null, mc = () => _t && window.onmousedown === null, gc = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, yc = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function rs(t) {
  return hc() ? t : pc() ? yc[t] : mc() ? gc[t] : t;
}
function Ht(t, e, n, r) {
  return an(t, rs(e), ns(n, e === "pointerdown"), r);
}
function Ge(t, e, n, r) {
  return zn(t, rs(e), n && ns(n, e === "pointerdown"), r);
}
function os(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const So = os("dragHorizontal"), Ao = os("dragVertical");
function is(t) {
  let e = !1;
  if (t === "y")
    e = Ao();
  else if (t === "x")
    e = So();
  else {
    const n = So(), r = Ao();
    n && r ? e = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return e;
}
function ss() {
  const t = is(!0);
  return t ? (t(), !1) : !0;
}
function Po(t, e, n) {
  return (r, o) => {
    !ts(r) || ss() || (t.animationState && t.animationState.setActive(B.Hover, e), n && n(r, o));
  };
}
function vc({ onHoverStart: t, onHoverEnd: e, whileHover: n, visualElement: r }) {
  Ge(r, "pointerenter", t || n ? Po(r, !0, t) : void 0, { passive: !t }), Ge(r, "pointerleave", e || n ? Po(r, !1, e) : void 0, { passive: !e });
}
const as = (t, e) => e ? t === e ? !0 : as(t, e.parentElement) : !1;
function Ar(t) {
  return Y(() => () => t(), []);
}
const bc = (t, e) => (n) => e(t(n)), ln = (...t) => t.reduce(bc);
function xc({ onTap: t, onTapStart: e, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = t || e || n || r, i = nt(!1), a = nt(null), l = {
    passive: !(e || t || n || p)
  };
  function u() {
    a.current && a.current(), a.current = null;
  }
  function c() {
    return u(), i.current = !1, o.animationState && o.animationState.setActive(B.Tap, !1), !ss();
  }
  function d(m, g) {
    c() && (as(o.current, m.target) ? t && t(m, g) : n && n(m, g));
  }
  function h(m, g) {
    c() && n && n(m, g);
  }
  function p(m, g) {
    u(), !i.current && (i.current = !0, a.current = ln(Ht(window, "pointerup", d, l), Ht(window, "pointercancel", h, l)), o.animationState && o.animationState.setActive(B.Tap, !0), e && e(m, g));
  }
  Ge(o, "pointerdown", s ? p : void 0, l), Ar(u);
}
const Ro = "production", Pr = typeof process > "u" || process.env === void 0 ? Ro : process.env.NODE_ENV || Ro, ko = /* @__PURE__ */ new Set();
function Rr(t, e, n) {
  t || ko.has(e) || (console.warn(e), n && console.warn(n), ko.add(e));
}
const Hn = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), wc = (t) => {
  const e = Hn.get(t.target);
  e && e(t);
}, Tc = (t) => {
  t.forEach(wc);
};
function Ec({ root: t, ...e }) {
  const n = t || document;
  Sn.has(n) || Sn.set(n, {});
  const r = Sn.get(n), o = JSON.stringify(e);
  return r[o] || (r[o] = new IntersectionObserver(Tc, { root: t, ...e })), r[o];
}
function Cc(t, e, n) {
  const r = Ec(e);
  return Hn.set(t, n), r.observe(t), () => {
    Hn.delete(t), r.unobserve(t);
  };
}
function Sc({ visualElement: t, whileInView: e, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = nt({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(e || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? Rc : Pc)(i, s.current, t, o);
}
const Ac = {
  some: 0,
  all: 1
};
function Pc(t, e, n, { root: r, margin: o, amount: s = "some", once: i }) {
  Y(() => {
    if (!t || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : Ac[s]
    }, l = (u) => {
      const { isIntersecting: c } = u;
      if (e.isInView === c || (e.isInView = c, i && !c && e.hasEnteredView))
        return;
      c && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(B.InView, c);
      const d = n.getProps(), h = c ? d.onViewportEnter : d.onViewportLeave;
      h && h(u);
    };
    return Cc(n.current, a, l);
  }, [t, r, o, s]);
}
function Rc(t, e, n, { fallback: r = !0 }) {
  Y(() => {
    !t || !r || (Pr !== "production" && Rr(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      e.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(B.InView, !0);
    }));
  }, [t]);
}
const At = (t) => (e) => (t(e), null), kc = {
  inView: At(Sc),
  tap: At(xc),
  focus: At(lc),
  hover: At(vc)
};
function ls() {
  const t = q(xe);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: r } = t, o = hr();
  return Y(() => r(o), []), !e && n ? [!1, () => n && n(o)] : [!0];
}
function cs(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
const Vc = (t) => /^\-?\d*\.?\d+$/.test(t), Oc = (t) => /^0[^.\s]+$/.test(t), xt = {
  delta: 0,
  timestamp: 0
}, us = 1 / 60 * 1e3, Dc = typeof performance < "u" ? () => performance.now() : () => Date.now(), ds = typeof window < "u" ? (t) => window.requestAnimationFrame(t) : (t) => setTimeout(() => t(Dc()), us);
function Fc(t) {
  let e = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, c = !1) => {
      const d = c && o, h = d ? e : n;
      return u && i.add(l), h.indexOf(l) === -1 && (h.push(l), d && o && (r = e.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const u = n.indexOf(l);
      u !== -1 && n.splice(u, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        s = !0;
        return;
      }
      if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
        for (let u = 0; u < r; u++) {
          const c = e[u];
          c(l), i.has(c) && (a.schedule(c), t());
        }
      o = !1, s && (s = !1, a.process(l));
    }
  };
  return a;
}
const Lc = 40;
let qn = !0, ge = !1, Gn = !1;
const Ee = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], cn = Ee.reduce((t, e) => (t[e] = Fc(() => ge = !0), t), {}), rt = Ee.reduce((t, e) => {
  const n = cn[e];
  return t[e] = (r, o = !1, s = !1) => (ge || _c(), n.schedule(r, o, s)), t;
}, {}), Rt = Ee.reduce((t, e) => (t[e] = cn[e].cancel, t), {}), An = Ee.reduce((t, e) => (t[e] = () => cn[e].process(xt), t), {}), Mc = (t) => cn[t].process(xt), fs = (t) => {
  ge = !1, xt.delta = qn ? us : Math.max(Math.min(t - xt.timestamp, Lc), 1), xt.timestamp = t, Gn = !0, Ee.forEach(Mc), Gn = !1, ge && (qn = !1, ds(fs));
}, _c = () => {
  ge = !0, qn = !0, Gn || ds(fs);
};
function kr(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Vr(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Or {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return kr(this.subscriptions, e), () => Vr(this.subscriptions, e);
  }
  notify(e, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](e, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(e, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Dr(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Bc = (t) => !isNaN(parseFloat(t));
class Ic {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: i } = xt;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, rt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => rt.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = Bc(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @privateRemarks
   *
   * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
   *
   * ```jsx
   * useOnChange(x, () => {})
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Or()), this.events[e].add(n);
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e) {
    this.passiveEffect = e;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, r) {
    this.set(n), this.prev = e, this.timeDelta = r;
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      Dr(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.stopAnimation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop();
  }
}
function Gt(t, e) {
  return new Ic(t, e);
}
const Fr = (t, e) => (n) => !!(we(n) && _l.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), hs = (t, e, n) => (r) => {
  if (!we(r))
    return r;
  const [o, s, i, a] = r.match(me);
  return {
    [t]: parseFloat(o),
    [e]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, jc = (t) => qt(0, 255, t), Pn = {
  ...It,
  transform: (t) => Math.round(jc(t))
}, Lt = {
  test: Fr("rgb", "red"),
  parse: hs("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) => "rgba(" + Pn.transform(t) + ", " + Pn.transform(e) + ", " + Pn.transform(n) + ", " + le(ae.transform(r)) + ")"
};
function $c(t) {
  let e = "", n = "", r = "", o = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, r += r, o += o), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Kn = {
  test: Fr("#"),
  parse: $c,
  transform: Lt.transform
}, Wt = {
  test: Fr("hsl", "hue"),
  parse: hs("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(t) + ", " + pt.transform(le(e)) + ", " + pt.transform(le(n)) + ", " + le(ae.transform(r)) + ")"
}, X = {
  test: (t) => Lt.test(t) || Kn.test(t) || Wt.test(t),
  parse: (t) => Lt.test(t) ? Lt.parse(t) : Wt.test(t) ? Wt.parse(t) : Kn.parse(t),
  transform: (t) => we(t) ? t : t.hasOwnProperty("red") ? Lt.transform(t) : Wt.transform(t)
}, ps = "${c}", ms = "${n}";
function Nc(t) {
  var e, n;
  return isNaN(t) && we(t) && (((e = t.match(me)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Wn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Ke(t) {
  typeof t == "number" && (t = `${t}`);
  const e = [];
  let n = 0, r = 0;
  const o = t.match(Wn);
  o && (n = o.length, t = t.replace(Wn, ps), e.push(...o.map(X.parse)));
  const s = t.match(me);
  return s && (r = s.length, t = t.replace(me, ms), e.push(...s.map(It.parse))), { values: e, numColors: n, numNumbers: r, tokenised: t };
}
function gs(t) {
  return Ke(t).values;
}
function ys(t) {
  const { values: e, numColors: n, tokenised: r } = Ke(t), o = e.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? ps : ms, a < n ? X.transform(s[a]) : le(s[a]));
    return i;
  };
}
const Uc = (t) => typeof t == "number" ? 0 : t;
function Wc(t) {
  const e = gs(t);
  return ys(t)(e.map(Uc));
}
const kt = { test: Nc, parse: gs, createTransformer: ys, getAnimatableNone: Wc }, zc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hc(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [r] = n.match(me) || [];
  if (!r)
    return t;
  const o = n.replace(r, "");
  let s = zc.has(e) ? 1 : 0;
  return r !== n && (s *= 100), e + "(" + s + o + ")";
}
const qc = /([a-z-]*)\(.*?\)/g, Yn = {
  ...kt,
  getAnimatableNone: (t) => {
    const e = t.match(qc);
    return e ? e.map(Hc).join(" ") : t;
  }
}, Gc = {
  ...Hi,
  // Color props
  color: X,
  backgroundColor: X,
  outlineColor: X,
  fill: X,
  stroke: X,
  // Border props
  borderColor: X,
  borderTopColor: X,
  borderRightColor: X,
  borderBottomColor: X,
  borderLeftColor: X,
  filter: Yn,
  WebkitFilter: Yn
}, Lr = (t) => Gc[t];
function Mr(t, e) {
  var n;
  let r = Lr(t);
  return r !== Yn && (r = kt), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, e);
}
const vs = (t) => (e) => e.test(t), Kc = {
  test: (t) => t === "auto",
  parse: (t) => t
}, bs = [It, P, pt, Ct, Il, Bl, Kc], te = (t) => bs.find(vs(t)), Yc = [...bs, X, kt], Jc = (t) => Yc.find(vs(t));
function Xc(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.get()), e;
}
function Zc(t) {
  const e = {};
  return t.values.forEach((n, r) => e[r] = n.getVelocity()), e;
}
function un(t, e, n) {
  const r = t.getProps();
  return Cr(r, e, n !== void 0 ? n : r.custom, Xc(t), Zc(t));
}
function Qc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Gt(n));
}
function tu(t, e) {
  const n = un(t, e);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? t.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = nc(s[i]);
    Qc(t, i, a);
  }
}
function eu(t, e, n) {
  var r, o;
  const s = Object.keys(e).filter((a) => !t.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const l = s[a], u = e[l];
      let c = null;
      Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && o !== void 0 ? o : e[l]), c != null && (typeof c == "string" && (Vc(c) || Oc(c)) ? c = parseFloat(c) : !Jc(c) && kt.test(u) && (c = Mr(l, u)), t.addValue(l, Gt(c, { owner: t })), n[l] === void 0 && (n[l] = c), c !== null && t.setBaseTarget(l, c));
    }
}
function nu(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function ru(t, e, n) {
  var r;
  const o = {};
  for (const s in t) {
    const i = nu(s, e);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function Ye(t) {
  return !!(mt(t) && t.add);
}
const ou = (t, e) => `${t}: ${e}`;
function iu(t, e) {
  const { MotionAppearAnimations: n } = window, r = ou(t, Bt.has(e) ? "transform" : e), o = n && n.get(r);
  return o ? (rt.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const su = "framerAppearId", au = "data-" + Tr(su);
var dn = function() {
}, dt = function() {
};
process.env.NODE_ENV !== "production" && (dn = function(t, e) {
  !t && typeof console < "u" && console.warn(e);
}, dt = function(t, e) {
  if (!t)
    throw new Error(e);
});
const je = (t) => t * 1e3, lu = {
  current: !1
}, _r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Br = (t) => (e) => 1 - t(1 - e), Ir = (t) => t * t, cu = Br(Ir), jr = _r(Ir), j = (t, e, n) => -n * t + n * e + t;
function Rn(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function uu({ hue: t, saturation: e, lightness: n, alpha: r }) {
  t /= 360, e /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!e)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    o = Rn(l, a, t + 1 / 3), s = Rn(l, a, t), i = Rn(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const kn = (t, e, n) => {
  const r = t * t;
  return Math.sqrt(Math.max(0, n * (e * e - r) + r));
}, du = [Kn, Lt, Wt], fu = (t) => du.find((e) => e.test(t));
function Vo(t) {
  const e = fu(t);
  dt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === Wt && (n = uu(n)), n;
}
const xs = (t, e) => {
  const n = Vo(t), r = Vo(e), o = { ...n };
  return (s) => (o.red = kn(n.red, r.red, s), o.green = kn(n.green, r.green, s), o.blue = kn(n.blue, r.blue, s), o.alpha = j(n.alpha, r.alpha, s), Lt.transform(o));
};
function ws(t, e) {
  return typeof t == "number" ? (n) => j(t, e, n) : X.test(t) ? xs(t, e) : Es(t, e);
}
const Ts = (t, e) => {
  const n = [...t], r = n.length, o = t.map((s, i) => ws(s, e[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, hu = (t, e) => {
  const n = { ...t, ...e }, r = {};
  for (const o in n)
    t[o] !== void 0 && e[o] !== void 0 && (r[o] = ws(t[o], e[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, Es = (t, e) => {
  const n = kt.createTransformer(e), r = Ke(t), o = Ke(e);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? ln(Ts(r.values, o.values), n) : (dn(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? e : t}`);
}, Je = (t, e, n) => {
  const r = e - t;
  return r === 0 ? 1 : (n - t) / r;
}, Oo = (t, e) => (n) => j(t, e, n);
function pu(t) {
  return typeof t == "number" ? Oo : typeof t == "string" ? X.test(t) ? xs : Es : Array.isArray(t) ? Ts : typeof t == "object" ? hu : Oo;
}
function mu(t, e, n) {
  const r = [], o = n || pu(t[0]), s = t.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(t[i], t[i + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[i] : e;
      a = ln(l, a);
    }
    r.push(a);
  }
  return r;
}
function Cs(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = t.length;
  dt(s === e.length, "Both input and output ranges must be the same length"), dt(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const i = mu(e, r, o), a = i.length, l = (u) => {
    let c = 0;
    if (a > 1)
      for (; c < t.length - 2 && !(u < t[c + 1]); c++)
        ;
    const d = Je(t[c], t[c + 1], u);
    return i[c](d);
  };
  return n ? (u) => l(qt(t[0], t[s - 1], u)) : l;
}
const $r = (t) => t, Ss = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, gu = 1e-7, yu = 12;
function vu(t, e, n, r, o) {
  let s, i, a = 0;
  do
    i = e + (n - e) / 2, s = Ss(i, r, o) - t, s > 0 ? n = i : e = i;
  while (Math.abs(s) > gu && ++a < yu);
  return i;
}
function As(t, e, n, r) {
  if (t === e && n === r)
    return $r;
  const o = (s) => vu(s, 0, 1, t, n);
  return (s) => s === 0 || s === 1 ? s : Ss(o(s), e, r);
}
const Ps = (t) => 1 - Math.sin(Math.acos(t)), Nr = Br(Ps), bu = _r(Nr), Rs = As(0.33, 1.53, 0.69, 0.99), Ur = Br(Rs), xu = _r(Ur), wu = (t) => (t *= 2) < 1 ? 0.5 * Ur(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Do = {
  linear: $r,
  easeIn: Ir,
  easeInOut: jr,
  easeOut: cu,
  circIn: Ps,
  circInOut: bu,
  circOut: Nr,
  backIn: Ur,
  backInOut: xu,
  backOut: Rs,
  anticipate: wu
}, Fo = (t) => {
  if (Array.isArray(t)) {
    dt(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, r, o] = t;
    return As(e, n, r, o);
  } else if (typeof t == "string")
    return dt(Do[t] !== void 0, `Invalid easing type '${t}'`), Do[t];
  return t;
}, Tu = (t) => Array.isArray(t) && typeof t[0] != "number";
function Eu(t, e) {
  return t.map(() => e || jr).splice(0, t.length - 1);
}
function Cu(t) {
  const e = t.length;
  return t.map((n, r) => r !== 0 ? r / (e - 1) : 0);
}
function Su(t, e) {
  return t.map((n) => n * e);
}
function Xe({ keyframes: t, ease: e = jr, times: n, duration: r = 300 }) {
  t = [...t];
  const o = Xe[0], s = Tu(e) ? e.map(Fo) : Fo(e), i = { done: !1, value: o }, a = Su(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === Xe.length ? n : Cu(t),
    r
  );
  function l() {
    return Cs(a, t, {
      ease: Array.isArray(s) ? s : Eu(t, s)
    });
  }
  let u = l();
  return {
    next: (c) => (i.value = u(c), i.done = c >= r, i),
    flipTarget: () => {
      t.reverse(), u = l();
    }
  };
}
const Vn = 1e-3, Au = 0.01, Lo = 10, Pu = 0.05, Ru = 1;
function ku({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  dn(t <= Lo * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - e;
  i = qt(Pu, Ru, i), t = qt(Au, Lo, t / 1e3), i < 1 ? (o = (u) => {
    const c = u * i, d = c * t, h = c - n, p = Jn(u, i), m = Math.exp(-d);
    return Vn - h / p * m;
  }, s = (u) => {
    const d = u * i * t, h = d * n + n, p = Math.pow(i, 2) * Math.pow(u, 2) * t, m = Math.exp(-d), g = Jn(Math.pow(u, 2), i);
    return (-o(u) + Vn > 0 ? -1 : 1) * ((h - p) * m) / g;
  }) : (o = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -Vn + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const a = 5 / t, l = Ou(o, s, a);
  if (t = t * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: t
    };
  }
}
const Vu = 12;
function Ou(t, e, n) {
  let r = n;
  for (let o = 1; o < Vu; o++)
    r = r - t(r) / e(r);
  return r;
}
function Jn(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Du = ["duration", "bounce"], Fu = ["stiffness", "damping", "mass"];
function Mo(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Lu(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Mo(t, Fu) && Mo(t, Du)) {
    const n = ku(t);
    e = {
      ...e,
      ...n,
      velocity: 0,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
const Mu = 5;
function ks({ keyframes: t, restSpeed: e = 2, restDelta: n = 0.01, ...r }) {
  let o = t[0], s = t[t.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: h } = Lu(r);
  let p = _u, m = c ? -(c / 1e3) : 0;
  const g = l / (2 * Math.sqrt(a * u));
  function w() {
    const x = s - o, T = Math.sqrt(a / u) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const b = Jn(T, g);
      p = (C) => {
        const O = Math.exp(-g * T * C);
        return s - O * ((m + g * T * x) / b * Math.sin(b * C) + x * Math.cos(b * C));
      };
    } else if (g === 1)
      p = (b) => s - Math.exp(-T * b) * (x + (m + T * x) * b);
    else {
      const b = T * Math.sqrt(g * g - 1);
      p = (C) => {
        const O = Math.exp(-g * T * C), L = Math.min(b * C, 300);
        return s - O * ((m + g * T * x) * Math.sinh(L) + b * x * Math.cosh(L)) / b;
      };
    }
  }
  return w(), {
    next: (x) => {
      const T = p(x);
      if (h)
        i.done = x >= d;
      else {
        let b = m;
        if (x !== 0)
          if (g < 1) {
            const L = Math.max(0, x - Mu);
            b = Dr(T - p(L), x - L);
          } else
            b = 0;
        const C = Math.abs(b) <= e, O = Math.abs(s - T) <= n;
        i.done = C && O;
      }
      return i.value = i.done ? s : T, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], w();
    }
  };
}
ks.needsInterpolation = (t, e) => typeof t == "string" || typeof e == "string";
const _u = (t) => 0;
function Bu({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: t = [0],
  velocity: e = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: s
}) {
  const i = t[0], a = { done: !1, value: i };
  let l = n * e;
  const u = i + l, c = s === void 0 ? u : s(u);
  return c !== u && (l = c - i), {
    next: (d) => {
      const h = -l * Math.exp(-d / r);
      return a.done = !(h > o || h < -o), a.value = a.done ? c : c + h, a;
    },
    flipTarget: () => {
    }
  };
}
const Iu = {
  decay: Bu,
  keyframes: Xe,
  tween: Xe,
  spring: ks
};
function Vs(t, e, n = 0) {
  return t - e - n;
}
function ju(t, e = 0, n = 0, r = !0) {
  return r ? Vs(e + -t, e, n) : e - (t - e) + n;
}
function $u(t, e, n, r) {
  return r ? t >= e + n : t <= -n;
}
const Nu = (t) => {
  const e = ({ delta: n }) => t(n);
  return {
    start: () => rt.update(e, !0),
    stop: () => Rt.update(e)
  };
};
function Ze({ duration: t, driver: e = Nu, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: l, onStop: u, onComplete: c, onRepeat: d, onUpdate: h, type: p = "keyframes", ...m }) {
  var g, w;
  let x, T = 0, b = t, C, O = !1, L = !0, U;
  const Q = Iu[i.length > 2 ? "keyframes" : p], tt = i[0], G = i[i.length - 1];
  !((w = (g = Q).needsInterpolation) === null || w === void 0) && w.call(g, tt, G) && (U = Cs([0, 100], [tt, G], {
    clamp: !1
  }), i = [0, 100]);
  const ct = Q({
    ...m,
    duration: t,
    keyframes: i
  });
  function Vt() {
    T++, o === "reverse" ? (L = T % 2 === 0, n = ju(n, b, s, L)) : (n = Vs(n, b, s), o === "mirror" && ct.flipTarget()), O = !1, d && d();
  }
  function ot() {
    x.stop(), c && c();
  }
  function it(et) {
    if (L || (et = -et), n += et, !O) {
      const yt = ct.next(Math.max(0, n));
      C = yt.value, U && (C = U(C)), O = L ? yt.done : n <= 0;
    }
    h && h(C), O && (T === 0 && (b = b !== void 0 ? b : n), T < r ? $u(n, b, s, L) && Vt() : ot());
  }
  function I() {
    l && l(), x = e(it), x.start();
  }
  return a && I(), {
    stop: () => {
      u && u(), x.stop();
    },
    sample: (et) => ct.next(Math.max(0, et))
  };
}
function Uu(t) {
  return !t || // Default easing
  Array.isArray(t) || // Bezier curve
  typeof t == "string" && Os[t];
}
const re = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`, Os = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: re([0, 0.65, 0.55, 1]),
  circOut: re([0.55, 0, 1, 0.45]),
  backIn: re([0.31, 0.01, 0.66, -0.59]),
  backOut: re([0.33, 1.53, 0.69, 0.99])
};
function Wu(t) {
  if (t)
    return Array.isArray(t) ? re(t) : Os[t];
}
function zu(t, e, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: l } = {}) {
  return t.animate({ [e]: n, offset: l }, {
    delay: r,
    duration: o,
    easing: Wu(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const De = 10;
function Hu(t, e, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: l } = o;
  if (o.type === "spring" || !Uu(o.ease)) {
    const c = Ze(o);
    let d = { done: !1, value: s[0] };
    const h = [];
    let p = 0;
    for (; !d.done; )
      d = c.sample(p), h.push(d.value), p += De;
    s = h, i = p - De, l = "linear";
  }
  const u = zu(t.owner.current, e, s, {
    ...o,
    delay: -a,
    duration: i,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: l
  });
  return u.onfinish = () => {
    t.set(s[s.length - 1]), r && r();
  }, () => {
    const { currentTime: c } = u;
    if (c) {
      const d = Ze(o);
      t.setWithVelocity(d.sample(c - De).value, d.sample(c).value, De);
    }
    rt.update(() => u.cancel());
  };
}
function Ds(t, e) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= e && (Rt.read(r), t(s - e));
  };
  return rt.read(r, !0), () => Rt.read(r);
}
function qu({ keyframes: t, elapsed: e, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(t[t.length - 1]), r && r(), () => {
  });
  return e ? Ds(o, -e) : o();
}
function Gu({ keyframes: t, velocity: e = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: l = 1, modifyTarget: u, driver: c, onUpdate: d, onComplete: h, onStop: p }) {
  const m = t[0];
  let g;
  function w(C) {
    return n !== void 0 && C < n || r !== void 0 && C > r;
  }
  function x(C) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - C) < Math.abs(r - C) ? n : r;
  }
  function T(C) {
    g == null || g.stop(), g = Ze({
      keyframes: [0, 1],
      velocity: 0,
      ...C,
      driver: c,
      onUpdate: (O) => {
        var L;
        d == null || d(O), (L = C.onUpdate) === null || L === void 0 || L.call(C, O);
      },
      onComplete: h,
      onStop: p
    });
  }
  function b(C) {
    T({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: l,
      ...C
    });
  }
  if (w(m))
    b({
      velocity: e,
      keyframes: [m, x(m)]
    });
  else {
    let C = o * e + m;
    typeof u < "u" && (C = u(C));
    const O = x(C), L = O === n ? -1 : 1;
    let U, Q;
    const tt = (G) => {
      U = Q, Q = G, e = Dr(G - U, xt.delta), (L === 1 && G > O || L === -1 && G < O) && b({ keyframes: [G, O], velocity: e });
    };
    T({
      type: "decay",
      keyframes: [m, 0],
      velocity: e,
      timeConstant: s,
      power: o,
      restDelta: l,
      modifyTarget: u,
      onUpdate: w(C) ? tt : void 0
    });
  }
  return {
    stop: () => g == null ? void 0 : g.stop()
  };
}
const Ot = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}), Fe = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), On = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), Ku = {
  type: "keyframes",
  duration: 0.8
}, _o = {
  x: Ot,
  y: Ot,
  z: Ot,
  rotate: Ot,
  rotateX: Ot,
  rotateY: Ot,
  rotateZ: Ot,
  scaleX: Fe,
  scaleY: Fe,
  scale: Fe,
  opacity: On,
  backgroundColor: On,
  color: On,
  default: Fe
}, Yu = (t, { keyframes: e }) => e.length > 2 ? Ku : (_o[t] || _o.default)(e[1]), Xn = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
kt.test(e) && // And it contains numbers and/or colors
!e.startsWith("url("));
function Ju({ when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, ...u }) {
  return !!Object.keys(u).length;
}
function Bo(t) {
  return t === 0 || typeof t == "string" && parseFloat(t) === 0 && t.indexOf(" ") === -1;
}
function Io(t) {
  return typeof t == "number" ? 0 : Mr("", t);
}
function Fs(t, e) {
  return t[e] || t.default || t;
}
function Xu(t, e, n, r) {
  const o = Xn(e, n);
  let s = r.from !== void 0 ? r.from : t.get();
  return s === "none" && o && typeof n == "string" ? s = Mr(e, n) : Bo(s) && typeof n == "string" ? s = Io(n) : !Array.isArray(n) && Bo(n) && typeof s == "string" && (n = Io(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const jo = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, Dn = {}, Ls = {};
for (const t in jo)
  Ls[t] = () => (Dn[t] === void 0 && (Dn[t] = jo[t]()), Dn[t]);
const Zu = /* @__PURE__ */ new Set(["opacity"]), Wr = (t, e, n, r = {}) => (o) => {
  const s = Fs(r, t) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - je(i);
  const l = Xu(e, t, n, s), u = l[0], c = l[l.length - 1], d = Xn(t, u), h = Xn(t, c);
  dn(d === h, `You are trying to animate ${t} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);
  let p = {
    keyframes: l,
    velocity: e.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (x) => {
      e.set(x), s.onUpdate && s.onUpdate(x);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!d || !h || lu.current || s.type === !1)
    return qu(p);
  if (s.type === "inertia") {
    const x = Gu(p);
    return () => x.stop();
  }
  Ju(s) || (p = {
    ...p,
    ...Yu(t, p)
  }), p.duration && (p.duration = je(p.duration)), p.repeatDelay && (p.repeatDelay = je(p.repeatDelay));
  const m = e.owner, g = m && m.current;
  if (Ls.waapi() && Zu.has(t) && !p.repeatDelay && p.repeatType !== "mirror" && p.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return Hu(e, t, p);
  {
    const x = Ze(p);
    return () => x.stop();
  }
};
function Qu(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let r;
  if (Array.isArray(e)) {
    const o = e.map((s) => Zn(t, s, n));
    r = Promise.all(o);
  } else if (typeof e == "string")
    r = Zn(t, e, n);
  else {
    const o = typeof e == "function" ? un(t, e, n.custom) : e;
    r = Ms(t, o, n);
  }
  return r.then(() => t.notify("AnimationComplete", e));
}
function Zn(t, e, n = {}) {
  var r;
  const o = un(t, e, n.custom);
  let { transition: s = t.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Ms(t, o, n) : () => Promise.resolve(), a = !((r = t.variantChildren) === null || r === void 0) && r.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: h } = s;
    return td(t, e, c + u, d, h, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(c);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function Ms(t, e, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = t.getDefaultTransition(), transitionEnd: a, ...l } = t.makeTargetAnimatable(e);
  const u = t.getValue("willChange");
  r && (i = r);
  const c = [], d = o && ((s = t.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const h in l) {
    const p = t.getValue(h), m = l[h];
    if (!p || m === void 0 || d && nd(d, h))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (t.shouldReduceMotion && Bt.has(h) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !p.hasAnimated) {
      const x = t.getProps()[au];
      x && (g.elapsed = iu(x, h));
    }
    let w = p.start(Wr(h, p, m, g));
    Ye(u) && (u.add(h), w = w.then(() => u.remove(h))), c.push(w);
  }
  return Promise.all(c).then(() => {
    a && tu(t, a);
  });
}
function td(t, e, n = 0, r = 0, o = 1, s) {
  const i = [], a = (t.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(t.variantChildren).sort(ed).forEach((u, c) => {
    i.push(Zn(u, e, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(i);
}
function ed(t, e) {
  return t.sortNodePosition(e);
}
function nd({ protectedKeys: t, needsAnimating: e }, n) {
  const r = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, r;
}
const zr = [
  B.Animate,
  B.InView,
  B.Focus,
  B.Hover,
  B.Tap,
  B.Drag,
  B.Exit
], rd = [...zr].reverse(), od = zr.length;
function id(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: r }) => Qu(t, n, r)));
}
function sd(t) {
  let e = id(t);
  const n = ld();
  let r = !0;
  const o = (l, u) => {
    const c = un(t, u);
    if (c) {
      const { transition: d, transitionEnd: h, ...p } = c;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function s(l) {
    e = l(t);
  }
  function i(l, u) {
    const c = t.getProps(), d = t.getVariantContext(!0) || {}, h = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let x = 0; x < od; x++) {
      const T = rd[x], b = n[T], C = c[T] !== void 0 ? c[T] : d[T], O = he(C), L = T === u ? b.isActive : null;
      L === !1 && (g = x);
      let U = C === d[T] && C !== c[T] && O;
      if (U && r && t.manuallyAnimateOnMount && (U = !1), b.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !b.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !C && !b.prevProp || // Or if the prop doesn't define an animation
      rn(C) || typeof C == "boolean")
        continue;
      const Q = ad(b.prevProp, C);
      let tt = Q || // If we're making this variant active, we want to always make it active
      T === u && b.isActive && !U && O || // If we removed a higher-priority variant (i is in reverse order)
      x > g && O;
      const G = Array.isArray(C) ? C : [C];
      let ct = G.reduce(o, {});
      L === !1 && (ct = {});
      const { prevResolvedValues: Vt = {} } = b, ot = {
        ...Vt,
        ...ct
      }, it = (I) => {
        tt = !0, p.delete(I), b.needsAnimating[I] = !0;
      };
      for (const I in ot) {
        const et = ct[I], yt = Vt[I];
        m.hasOwnProperty(I) || (et !== yt ? qe(et) && qe(yt) ? !cs(et, yt) || Q ? it(I) : b.protectedKeys[I] = !0 : et !== void 0 ? it(I) : p.add(I) : et !== void 0 && p.has(I) ? it(I) : b.protectedKeys[I] = !0);
      }
      b.prevProp = C, b.prevResolvedValues = ct, b.isActive && (m = { ...m, ...ct }), r && t.blockInitialAnimation && (tt = !1), tt && !U && h.push(...G.map((I) => ({
        animation: I,
        options: { type: T, ...l }
      })));
    }
    if (p.size) {
      const x = {};
      p.forEach((T) => {
        const b = t.getBaseTarget(T);
        b !== void 0 && (x[T] = b);
      }), h.push({ animation: x });
    }
    let w = !!h.length;
    return r && c.initial === !1 && !t.manuallyAnimateOnMount && (w = !1), r = !1, w ? e(h) : Promise.resolve();
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = t.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const h = i(c, l);
    for (const p in n)
      n[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function ad(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !cs(e, t) : !1;
}
function Dt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function ld() {
  return {
    [B.Animate]: Dt(!0),
    [B.InView]: Dt(),
    [B.Hover]: Dt(),
    [B.Tap]: Dt(),
    [B.Drag]: Dt(),
    [B.Focus]: Dt(),
    [B.Exit]: Dt()
  };
}
const cd = {
  animation: At(({ visualElement: t, animate: e }) => {
    t.animationState || (t.animationState = sd(t)), rn(e) && Y(() => e.subscribe(t), [e]);
  }),
  exit: At((t) => {
    const { custom: e, visualElement: n } = t, [r, o] = ls(), s = q(xe);
    Y(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(B.Exit, !r, {
        custom: s && s.custom || e
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, $o = (t, e) => Math.abs(t - e);
function ud(t, e) {
  const n = $o(t.x, e.x), r = $o(t.y, e.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class _s {
  constructor(e, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = Ln(this.lastMoveEventInfo, this.history), c = this.startEvent !== null, d = ud(u.offset, { x: 0, y: 0 }) >= 3;
      if (!c && !d)
        return;
      const { point: h } = u, { timestamp: p } = xt;
      this.history.push({ ...h, timestamp: p });
      const { onStart: m, onMove: g } = this.handlers;
      c || (m && m(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, c) => {
      if (this.lastMoveEvent = u, this.lastMoveEventInfo = Fn(c, this.transformPagePoint), ts(u) && u.buttons === 0) {
        this.handlePointerUp(u, c);
        return;
      }
      rt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, c) => {
      this.end();
      const { onEnd: d, onSessionEnd: h } = this.handlers, p = Ln(Fn(c, this.transformPagePoint), this.history);
      this.startEvent && d && d(u, p), h && h(u, p);
    }, es(e) && e.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Sr(e), s = Fn(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = xt;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(e, Ln(s, this.history)), this.removeListeners = ln(Ht(window, "pointermove", this.handlePointerMove), Ht(window, "pointerup", this.handlePointerUp), Ht(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Rt.update(this.updatePoint);
  }
}
function Fn(t, e) {
  return e ? { point: e(t.point) } : t;
}
function No(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Ln({ point: t }, e) {
  return {
    point: t,
    delta: No(t, Bs(e)),
    offset: No(t, dd(e)),
    velocity: fd(e, 0.1)
  };
}
function dd(t) {
  return t[0];
}
function Bs(t) {
  return t[t.length - 1];
}
function fd(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, r = null;
  const o = Bs(t);
  for (; n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > je(e))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = (o.timestamp - r.timestamp) / 1e3;
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function st(t) {
  return t.max - t.min;
}
function Qn(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Uo(t, e, n, r = 0.5) {
  t.origin = r, t.originPoint = j(e.min, e.max, t.origin), t.scale = st(n) / st(e), (Qn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = j(n.min, n.max, t.origin) - t.originPoint, (Qn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function ce(t, e, n, r) {
  Uo(t.x, e.x, n.x, r == null ? void 0 : r.originX), Uo(t.y, e.y, n.y, r == null ? void 0 : r.originY);
}
function Wo(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + st(e);
}
function hd(t, e, n) {
  Wo(t.x, e.x, n.x), Wo(t.y, e.y, n.y);
}
function zo(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + st(e);
}
function ue(t, e, n) {
  zo(t.x, e.x, n.x), zo(t.y, e.y, n.y);
}
function pd(t, { min: e, max: n }, r) {
  return e !== void 0 && t < e ? t = r ? j(e, t, r.min) : Math.max(t, e) : n !== void 0 && t > n && (t = r ? j(n, t, r.max) : Math.min(t, n)), t;
}
function Ho(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function md(t, { top: e, left: n, bottom: r, right: o }) {
  return {
    x: Ho(t.x, n, o),
    y: Ho(t.y, e, r)
  };
}
function qo(t, e) {
  let n = e.min - t.min, r = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function gd(t, e) {
  return {
    x: qo(t.x, e.x),
    y: qo(t.y, e.y)
  };
}
function yd(t, e) {
  let n = 0.5;
  const r = st(t), o = st(e);
  return o > r ? n = Je(e.min, e.max - r, t.min) : r > o && (n = Je(t.min, t.max - o, e.min)), qt(0, 1, n);
}
function vd(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const tr = 0.35;
function bd(t = tr) {
  return t === !1 ? t = 0 : t === !0 && (t = tr), {
    x: Go(t, "left", "right"),
    y: Go(t, "top", "bottom")
  };
}
function Go(t, e, n) {
  return {
    min: Ko(t, e),
    max: Ko(t, n)
  };
}
function Ko(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Yo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), de = () => ({
  x: Yo(),
  y: Yo()
}), Jo = () => ({ min: 0, max: 0 }), H = () => ({
  x: Jo(),
  y: Jo()
});
function ft(t) {
  return [t("x"), t("y")];
}
function Is({ top: t, left: e, right: n, bottom: r }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: r }
  };
}
function xd({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function wd(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), r = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Mn(t) {
  return t === void 0 || t === 1;
}
function er({ scale: t, scaleX: e, scaleY: n }) {
  return !Mn(t) || !Mn(e) || !Mn(n);
}
function Ft(t) {
  return er(t) || js(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function js(t) {
  return Xo(t.x) || Xo(t.y);
}
function Xo(t) {
  return t && t !== "0%";
}
function Qe(t, e, n) {
  const r = t - n, o = e * r;
  return n + o;
}
function Zo(t, e, n, r, o) {
  return o !== void 0 && (t = Qe(t, o, r)), Qe(t, n, r) + e;
}
function nr(t, e = 0, n = 1, r, o) {
  t.min = Zo(t.min, e, n, r, o), t.max = Zo(t.max, e, n, r, o);
}
function $s(t, { x: e, y: n }) {
  nr(t.x, e.translate, e.scale, e.originPoint), nr(t.y, n.translate, n.scale, n.originPoint);
}
function Td(t, e, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let a, l;
  for (let u = 0; u < i; u++)
    a = n[u], l = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && zt(t, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), l && (e.x *= l.x.scale, e.y *= l.y.scale, $s(t, l)), r && Ft(a.latestValues) && zt(t, a.latestValues));
  e.x = Qo(e.x), e.y = Qo(e.y);
}
function Qo(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function St(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function ti(t, e, [n, r, o]) {
  const s = e[o] !== void 0 ? e[o] : 0.5, i = j(t.min, t.max, s);
  nr(t, e[n], e[r], i, e.scale);
}
const Ed = ["x", "scaleX", "originX"], Cd = ["y", "scaleY", "originY"];
function zt(t, e) {
  ti(t.x, e, Ed), ti(t.y, e, Cd);
}
function Ns(t, e) {
  return Is(wd(t.getBoundingClientRect(), e));
}
function Sd(t, e, n) {
  const r = Ns(t, n), { scroll: o } = e;
  return o && (St(r.x, o.offset.x), St(r.y, o.offset.y)), r;
}
const Ad = /* @__PURE__ */ new WeakMap();
class Pd {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = H(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(Sr(a, "page").point);
    }, o = (a, l) => {
      var u;
      const { drag: c, dragPropagation: d, onDragStart: h } = this.getProps();
      c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = is(c), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ft((p) => {
        var m, g;
        let w = this.getAxisMotionValue(p).get() || 0;
        if (pt.test(w)) {
          const x = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[p];
          x && (w = st(x) * (parseFloat(w) / 100));
        }
        this.originPoint[p] = w;
      }), h == null || h(a, l), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(B.Drag, !0));
    }, s = (a, l) => {
      const { dragPropagation: u, dragDirectionLock: c, onDirectionLock: d, onDrag: h } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: p } = l;
      if (c && this.currentDirection === null) {
        this.currentDirection = Rd(p), this.currentDirection !== null && (d == null || d(this.currentDirection));
        return;
      }
      this.updateAxis("x", l.point, p), this.updateAxis("y", l.point, p), this.visualElement.render(), h == null || h(a, l);
    }, i = (a, l) => this.stop(a, l);
    this.panSession = new _s(e, {
      onSessionStart: r,
      onStart: o,
      onMove: s,
      onSessionEnd: i
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(e, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s == null || s(e, n);
  }
  cancel() {
    var e, n;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (e = this.panSession) === null || e === void 0 || e.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(B.Drag, !1);
  }
  updateAxis(e, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Le(e, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + r[e];
    this.constraints && this.constraints[e] && (i = pd(i, this.constraints[e], this.elastic[e])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    e && Ut(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && r ? this.constraints = md(r.layoutBox, e) : this.constraints = !1, this.elastic = bd(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ft((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = vd(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Ut(e))
      return !1;
    const r = e.current;
    dt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = Sd(r, o.root, this.visualElement.getTransformPagePoint());
    let i = gd(o.layout.layoutBox, s);
    if (n) {
      const a = n(xd(i));
      this.hasMutatedConstraints = !!a, a && (i = Is(a));
    }
    return i;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = ft((c) => {
      if (!Le(c, n, this.currentDirection))
        return;
      let d = (l == null ? void 0 : l[c]) || {};
      i && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, p = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? e[c] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(c, m);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const r = this.getAxisMotionValue(e);
    return r.start(Wr(e, r, 0, n));
  }
  stopAnimation() {
    ft((e) => this.getAxisMotionValue(e).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    var n;
    const r = "_drag" + e.toUpperCase(), o = this.visualElement.getProps()[r];
    return o || this.visualElement.getValue(e, ((n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[e]) || 0);
  }
  snapToCursor(e) {
    ft((n) => {
      const { drag: r } = this.getProps();
      if (!Le(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(e[n] - j(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    var e;
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!Ut(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    ft((a) => {
      const l = this.getAxisMotionValue(a);
      if (l) {
        const u = l.get();
        s[a] = yd({ min: u, max: u }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (e = o.root) === null || e === void 0 || e.updateScroll(), o.updateLayout(), this.resolveConstraints(), ft((a) => {
      if (!Le(a, n, null))
        return;
      const l = this.getAxisMotionValue(a), { min: u, max: c } = this.constraints[a];
      l.set(j(u, c, s[a]));
    });
  }
  addListeners() {
    var e;
    if (!this.visualElement.current)
      return;
    Ad.set(this.visualElement, this);
    const n = this.visualElement.current, r = Ht(n, "pointerdown", (u) => {
      const { drag: c, dragListener: d = !0 } = this.getProps();
      c && d && this.start(u);
    }), o = () => {
      const { dragConstraints: u } = this.getProps();
      Ut(u) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((e = s.root) === null || e === void 0 || e.updateScroll(), s.updateLayout()), o();
    const a = an(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
      this.isDragging && c && (ft((d) => {
        const h = this.getAxisMotionValue(d);
        h && (this.originPoint[d] += u[d].translate, h.set(h.get() + u[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), l == null || l();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = tr, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function Le(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Rd(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
function kd(t) {
  const { dragControls: e, visualElement: n } = t, r = sn(() => new Pd(n));
  Y(() => e && e.subscribe(r), [r, e]), Y(() => r.addListeners(), [r]);
}
function Vd({ onPan: t, onPanStart: e, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = t || e || n || r, i = nt(null), { transformPagePoint: a } = q(mr), l = {
    onSessionStart: r,
    onStart: e,
    onMove: t,
    onEnd: (c, d) => {
      i.current = null, n && n(c, d);
    }
  };
  Y(() => {
    i.current !== null && i.current.updateHandlers(l);
  });
  function u(c) {
    i.current = new _s(c, l, {
      transformPagePoint: a
    });
  }
  Ge(o, "pointerdown", s && u), Ar(() => i.current && i.current.end());
}
const Od = {
  pan: At(Vd),
  drag: At(kd)
};
function rr(t) {
  return typeof t == "string" && t.startsWith("var(--");
}
const Us = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Dd(t) {
  const e = Us.exec(t);
  if (!e)
    return [,];
  const [, n, r] = e;
  return [n, r];
}
const Fd = 4;
function or(t, e, n = 1) {
  dt(n <= Fd, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [r, o] = Dd(t);
  if (!r)
    return;
  const s = window.getComputedStyle(e).getPropertyValue(r);
  return s ? s.trim() : rr(o) ? or(o, e, n + 1) : o;
}
function Ld(t, { ...e }, n) {
  const r = t.current;
  if (!(r instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((o) => {
    const s = o.get();
    if (!rr(s))
      return;
    const i = or(s, r);
    i && o.set(i);
  });
  for (const o in e) {
    const s = e[o];
    if (!rr(s))
      continue;
    const i = or(s, r);
    i && (e[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: e, transitionEnd: n };
}
const Md = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Ws = (t) => Md.has(t), _d = (t) => Object.keys(t).some(Ws), zs = (t, e) => {
  t.set(e, !1), t.set(e);
}, Me = (t) => t === It || t === P;
var ei;
(function(t) {
  t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom";
})(ei || (ei = {}));
const ni = (t, e) => parseFloat(t.split(", ")[e]), ri = (t, e) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return ni(o[1], e);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? ni(s[1], t) : 0;
  }
}, Bd = /* @__PURE__ */ new Set(["x", "y", "z"]), Id = ze.filter((t) => !Bd.has(t));
function jd(t) {
  const e = [];
  return Id.forEach((n) => {
    const r = t.getValue(n);
    r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const oi = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: ri(4, 13),
  y: ri(5, 14)
}, $d = (t, e, n) => {
  const r = e.measureViewportBox(), o = e.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((u) => {
    a[u] = oi[u](r, s);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((u) => {
    const c = e.getValue(u);
    zs(c, a[u]), t[u] = oi[u](l, s);
  }), t;
}, Nd = (t, e, n = {}, r = {}) => {
  e = { ...e }, r = { ...r };
  const o = Object.keys(e).filter(Ws);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((l) => {
    const u = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let c = n[l], d = te(c);
    const h = e[l];
    let p;
    if (qe(h)) {
      const m = h.length, g = h[0] === null ? 1 : 0;
      c = h[g], d = te(c);
      for (let w = g; w < m; w++)
        p ? dt(te(h[w]) === p, "All keyframes must be of the same type") : (p = te(h[w]), dt(p === d || Me(d) && Me(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = te(h);
    if (d !== p)
      if (Me(d) && Me(p)) {
        const m = u.get();
        typeof m == "string" && u.set(parseFloat(m)), typeof h == "string" ? e[l] = parseFloat(h) : Array.isArray(h) && p === P && (e[l] = h.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (c === 0 || h === 0) ? c === 0 ? u.set(p.transform(c)) : e[l] = d.transform(h) : (i || (s = jd(t), i = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : e[l], zs(u, h));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, u = $d(e, t, a);
    return s.length && s.forEach(([c, d]) => {
      t.getValue(c).set(d);
    }), t.render(), _t && l !== null && window.scrollTo({ top: l }), { target: u, transitionEnd: r };
  } else
    return { target: e, transitionEnd: r };
};
function Ud(t, e, n, r) {
  return _d(e) ? Nd(t, e, n, r) : { target: e, transitionEnd: r };
}
const Wd = (t, e, n, r) => {
  const o = Ld(t, e, r);
  return e = o.target, r = o.transitionEnd, Ud(t, e, n, r);
}, ir = { current: null }, Hs = { current: !1 };
function zd() {
  if (Hs.current = !0, !!_t)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ir.current = t.matches;
      t.addListener(e), e();
    } else
      ir.current = !1;
}
function Hd(t, e, n) {
  const { willChange: r } = e;
  for (const o in e) {
    const s = e[o], i = n[o];
    if (mt(s))
      t.addValue(o, s), Ye(r) && r.add(o), process.env.NODE_ENV === "development" && Rr(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (mt(i))
      t.addValue(o, Gt(s, { owner: t })), Ye(r) && r.remove(o);
    else if (i !== s)
      if (t.hasValue(o)) {
        const a = t.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = t.getStaticValue(o);
        t.addValue(o, Gt(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    e[o] === void 0 && t.removeValue(o);
  return e;
}
const qs = Object.keys(pe), qd = qs.length, ii = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Gd {
  constructor({ parent: e, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => rt.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = e, this.props = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = on(n), this.isVariantNode = Ni(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n);
    for (const c in u) {
      const d = u[c];
      i[c] !== void 0 && mt(d) && (d.set(i[c], !1), Ye(l) && l.add(c));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e) {
    return {};
  }
  mount(e) {
    var n;
    this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Hs.current || zd(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ir.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var e, n, r;
    (e = this.projection) === null || e === void 0 || e.unmount(), Rt.update(this.notifyUpdate), Rt.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const r = Bt.has(e), o = n.on("change", (i) => {
      this.latestValues[e] = i, this.props.onUpdate && rt.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      o(), s();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures(e, n, r, o, s, i) {
    const a = [];
    Pr !== "production" && r && n && dt(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let l = 0; l < qd; l++) {
      const u = qs[l], { isEnabled: c, Component: d } = pe[u];
      c(e) && d && a.push(Bi(d, {
        key: u,
        ...e,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: h } = e;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || d && Ut(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h
      });
    }
    return a;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : H();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  setProps(e) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = e;
    for (let n = 0; n < ii.length; n++) {
      const r = ii[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = e["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = Hd(this, this.scrapeMotionValuesFromProps(e), this.prevMotionValues);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    var n;
    return (n = this.props.variants) === null || n === void 0 ? void 0 : n[e];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var e;
    return this.isVariantNode ? this : (e = this.parent) === null || e === void 0 ? void 0 : e.getClosestVariantNode();
  }
  getVariantContext(e = !1) {
    var n, r;
    if (e)
      return (n = this.parent) === null || n === void 0 ? void 0 : n.getVariantContext();
    if (!this.isControllingVariants) {
      const s = ((r = this.parent) === null || r === void 0 ? void 0 : r.getVariantContext()) || {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const o = {};
    for (let s = 0; s < Kd; s++) {
      const i = Gs[s], a = this.props[i];
      (he(a) || a === !1) && (o[i] = a);
    }
    return o;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    var n;
    const r = this.getClosestVariantNode();
    if (r)
      return (n = r.variantChildren) === null || n === void 0 || n.add(e), () => r.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    this.hasValue(e) && this.removeValue(e), this.values.set(e, n), this.latestValues[e] = n.get(), this.bindToMotionValue(e, n);
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    var n;
    this.values.delete(e), (n = this.valueSubscriptions.get(e)) === null || n === void 0 || n(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  /**
   * Get a motion value for this key. If called with a default
   * value, we'll create one if none exists.
   */
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let r = this.values.get(e);
    return r === void 0 && n !== void 0 && (r = Gt(n, { owner: this }), this.addValue(e, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e) {
    return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.readValueFromInstance(this.current, e, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Cr(this.props, r)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !mt(s) ? s : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Or()), this.events[e].add(n);
  }
  notify(e, ...n) {
    var r;
    (r = this.events[e]) === null || r === void 0 || r.notify(...n);
  }
}
const Gs = ["initial", ...zr], Kd = Gs.length;
class Ks extends Gd {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    var r;
    return (r = e.style) === null || r === void 0 ? void 0 : r[n];
  }
  removeValueFromRenderState(e, { vars: n, style: r }) {
    delete n[e], delete r[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: n, ...r }, { transformValues: o }, s) {
    let i = ru(r, e || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      eu(this, r, i);
      const a = Wd(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...r
    };
  }
}
function Yd(t) {
  return window.getComputedStyle(t);
}
class Jd extends Ks {
  readValueFromInstance(e, n) {
    if (Bt.has(n)) {
      const r = Lr(n);
      return r && r.default || 0;
    } else {
      const r = Yd(e), o = (zi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ns(e, n);
  }
  build(e, n, r, o) {
    vr(e, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(e) {
    return Er(e);
  }
  renderInstance(e, n, r, o) {
    Yi(e, n, r, o);
  }
}
class Xd extends Ks {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    var r;
    return Bt.has(n) ? ((r = Lr(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = Ji.has(n) ? n : Tr(n), e.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return H();
  }
  scrapeMotionValuesFromProps(e) {
    return Zi(e);
  }
  build(e, n, r, o) {
    xr(e, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(e, n, r, o) {
    Xi(e, n, r, o);
  }
  mount(e) {
    this.isSVGTag = wr(e.tagName), super.mount(e);
  }
}
const Zd = (t, e) => yr(t) ? new Xd(e, { enableHardwareAcceleration: !1 }) : new Jd(e, { enableHardwareAcceleration: !0 });
function si(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const ee = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = si(t, e.target.x), r = si(t, e.target.y);
    return `${n}% ${r}%`;
  }
}, ai = "_$css", Qd = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const r = t, o = t.includes("var("), s = [];
    o && (t = t.replace(Us, (p) => (s.push(p), ai)));
    const i = kt.parse(t);
    if (i.length > 5)
      return r;
    const a = kt.createTransformer(t), l = typeof i[0] != "number" ? 1 : 0, u = n.x.scale * e.x, c = n.y.scale * e.y;
    i[0 + l] /= u, i[1 + l] /= c;
    const d = j(u, c, 0.5);
    typeof i[2 + l] == "number" && (i[2 + l] /= d), typeof i[3 + l] == "number" && (i[3 + l] /= d);
    let h = a(i);
    if (o) {
      let p = 0;
      h = h.replace(ai, () => {
        const m = s[p];
        return p++, m;
      });
    }
    return h;
  }
};
class tf extends be.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = e;
    Ol(nf), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), se.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || e.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), e.isPresent !== s && (s ? i.promote() : i.relegate() || rt.postRender(() => {
      var a;
      !((a = i.getStack()) === null || a === void 0) && a.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = e;
    o && (o.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(o), r != null && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e == null || e();
  }
  render() {
    return null;
  }
}
function ef(t) {
  const [e, n] = ls(), r = q(gr);
  return be.createElement(tf, { ...t, layoutGroup: r, switchLayoutGroup: q(Ui), isPresent: e, safeToRemove: n });
}
const nf = {
  borderRadius: {
    ...ee,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ee,
  borderTopRightRadius: ee,
  borderBottomLeftRadius: ee,
  borderBottomRightRadius: ee,
  boxShadow: Qd
}, rf = {
  measureLayout: ef
};
function of(t, e, n = {}) {
  const r = mt(t) ? t : Gt(t);
  return r.start(Wr("", r, e, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const Ys = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], sf = Ys.length, li = (t) => typeof t == "string" ? parseFloat(t) : t, ci = (t) => typeof t == "number" || P.test(t);
function af(t, e, n, r, o, s) {
  o ? (t.opacity = j(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    lf(r)
  ), t.opacityExit = j(e.opacity !== void 0 ? e.opacity : 1, 0, cf(r))) : s && (t.opacity = j(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < sf; i++) {
    const a = `border${Ys[i]}Radius`;
    let l = ui(e, a), u = ui(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || ci(l) === ci(u) ? (t[a] = Math.max(j(li(l), li(u), r), 0), (pt.test(u) || pt.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = j(e.rotate || 0, n.rotate || 0, r));
}
function ui(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const lf = Js(0, 0.5, Nr), cf = Js(0.5, 0.95, $r);
function Js(t, e, n) {
  return (r) => r < t ? 0 : r > e ? 1 : n(Je(t, e, r));
}
function di(t, e) {
  t.min = e.min, t.max = e.max;
}
function ut(t, e) {
  di(t.x, e.x), di(t.y, e.y);
}
function fi(t, e, n, r, o) {
  return t -= e, t = Qe(t, 1 / n, r), o !== void 0 && (t = Qe(t, 1 / o, r)), t;
}
function uf(t, e = 0, n = 1, r = 0.5, o, s = t, i = t) {
  if (pt.test(e) && (e = parseFloat(e), e = j(i.min, i.max, e / 100) - i.min), typeof e != "number")
    return;
  let a = j(s.min, s.max, r);
  t === s && (a -= e), t.min = fi(t.min, e, n, a, o), t.max = fi(t.max, e, n, a, o);
}
function hi(t, e, [n, r, o], s, i) {
  uf(t, e[n], e[r], e[o], e.scale, s, i);
}
const df = ["x", "scaleX", "originX"], ff = ["y", "scaleY", "originY"];
function pi(t, e, n, r) {
  hi(t.x, e, df, n == null ? void 0 : n.x, r == null ? void 0 : r.x), hi(t.y, e, ff, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function mi(t) {
  return t.translate === 0 && t.scale === 1;
}
function Xs(t) {
  return mi(t.x) && mi(t.y);
}
function Zs(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function gi(t) {
  return st(t.x) / st(t.y);
}
class hf {
  constructor() {
    this.members = [];
  }
  add(e) {
    kr(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (Vr(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((o) => e === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(e, n) {
    var r;
    const o = this.lead;
    if (e !== o && (this.prevLead = o, this.lead = e, e.show(), o)) {
      o.instance && o.scheduleRender(), e.scheduleRender(), e.resumeFrom = o, n && (e.resumeFrom.preserveOpacity = !0), o.snapshot && (e.snapshot = o.snapshot, e.snapshot.latestValues = o.animationValues || o.latestValues), !((r = e.root) === null || r === void 0) && r.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      var n, r, o, s, i;
      (r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n), (i = (o = e.resumingFrom) === null || o === void 0 ? void 0 : (s = o.options).onExitComplete) === null || i === void 0 || i.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function yi(t, e, n) {
  let r = "";
  const o = t.x.translate / e.x, s = t.y.translate / e.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `);
  }
  const i = t.x.scale * e.x, a = t.y.scale * e.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const pf = (t, e) => t.depth - e.depth;
class mf {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    kr(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    Vr(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(pf), this.isDirty = !1, this.children.forEach(e);
  }
}
const vi = ["", "X", "Y", "Z"], bi = 1e3;
let gf = 0;
function Qs({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, l = e == null ? void 0 : e()) {
      this.id = gf++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(bf), this.nodes.forEach(Tf), this.nodes.forEach(Ef);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mf());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Or()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l == null || l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    registerPotentialNode(i, a) {
      this.potentialNodes.set(i, a);
    }
    /**
     * Lifecycles
     */
    mount(i, a = !1) {
      var l;
      if (this.instance)
        return;
      this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), (l = this.parent) === null || l === void 0 || l.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (c || u) && (this.isLayoutDirty = !0), t) {
        let h;
        const p = () => this.root.updateBlockedByResize = !1;
        t(i, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Ds(p, 250), se.hasAnimatedSinceResize && (se.hasAnimatedSinceResize = !1, this.nodes.forEach(wi));
        });
      }
      u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        var w, x, T, b, C;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const O = (x = (w = this.options.transition) !== null && w !== void 0 ? w : d.getDefaultTransition()) !== null && x !== void 0 ? x : Rf, { onLayoutAnimationStart: L, onLayoutAnimationComplete: U } = d.getProps(), Q = !this.targetLayout || !Zs(this.targetLayout, g) || m, tt = !p && m;
        if (!((T = this.resumeFrom) === null || T === void 0) && T.instance || tt || p && (Q || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, tt);
          const G = {
            ...Fs(O, "layout"),
            onPlay: L,
            onComplete: U
          };
          d.shouldReduceMotion && (G.delay = 0, G.type = !1), this.startAnimation(G);
        } else
          !p && this.animationProgress === 0 && wi(this), this.isLead() && ((C = (b = this.options).onExitComplete) === null || C === void 0 || C.call(b));
        this.targetLayout = g;
      });
    }
    unmount() {
      var i, a;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (a = this.parent) === null || a === void 0 || a.children.delete(this), this.instance = void 0, Rt.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var i;
      return this.isAnimationBlocked || ((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimationBlocked()) || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      var i;
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(Cf), this.animationId++);
    }
    willUpdate(i = !0) {
      var a, l, u;
      if (this.root.isUpdateBlocked()) {
        (l = (a = this.options).onExitComplete) === null || l === void 0 || l.call(a);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        m.shouldResetTransform = !0, m.updateScroll("snapshot");
      }
      const { layoutId: c, layout: d } = this.options;
      if (c === void 0 && !d)
        return;
      const h = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
      this.prevTransformTemplateValue = h == null ? void 0 : h(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xi);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(kf), this.potentialNodes.clear()), this.nodes.forEach(wf), this.nodes.forEach(yf), this.nodes.forEach(vf), this.clearAllSnapshots(), An.update(), An.preRender(), An.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(xf), this.sharedNodes.forEach(Sf);
    }
    scheduleUpdateProjection() {
      rt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      rt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      var i;
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = H(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      var i;
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Xs(this.projectionDelta), u = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, c = u == null ? void 0 : u(this.latestValues, ""), d = c !== this.prevTransformTemplateValue;
      a && (l || Ft(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), Vf(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return H();
      const a = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (St(a.x, l.offset.x), St(a.y, l.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = H();
      ut(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            ut(a, i);
            const { scroll: h } = this.root;
            h && (St(a.x, -h.offset.x), St(a.y, -h.offset.y));
          }
          St(a.x, c.offset.x), St(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const l = H();
      ut(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && zt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Ft(c.latestValues) && zt(l, c.latestValues);
      }
      return Ft(this.latestValues) && zt(l, this.latestValues), l;
    }
    removeTransform(i) {
      var a;
      const l = H();
      ut(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !Ft(c.latestValues))
          continue;
        er(c.latestValues) && c.updateSnapshot();
        const d = H(), h = c.measurePageBox();
        ut(d, h), pi(l, c.latestValues, (a = c.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, d);
      }
      return Ft(this.latestValues) && pi(l, this.latestValues), l;
    }
    /**
     *
     */
    setTargetDelta(i) {
      this.targetDelta = i, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection();
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    /**
     * Frame calculations
     */
    resolveTargetDelta() {
      var i;
      const a = this.getLead();
      if (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
        return;
      const { layout: l, layoutId: u } = this.options;
      if (!(!this.layout || !(l || u))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const c = this.getClosestProjectingParent();
          c && c.layout ? (this.relativeParent = c, this.relativeTarget = H(), this.relativeTargetOrigin = H(), ue(this.relativeTargetOrigin, this.layout.layoutBox, c.layout.layoutBox), ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = H(), this.targetWithTransforms = H()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? hd(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ut(this.target, this.layout.layoutBox), $s(this.target, this.targetDelta)) : ut(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const c = this.getClosestProjectingParent();
          c && !!c.resumingFrom == !!this.resumingFrom && !c.options.layoutScroll && c.target ? (this.relativeParent = c, this.relativeTarget = H(), this.relativeTargetOrigin = H(), ue(this.relativeTargetOrigin, this.target, c.target), ut(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || er(this.parent.latestValues) || js(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: l } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const u = this.getLead(), c = !!this.resumingFrom || this !== u;
      let d = !0;
      if (a && (d = !1), c && l && (d = !1), d)
        return;
      const { layout: h, layoutId: p } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || p))
        return;
      ut(this.layoutCorrected, this.layout.layoutBox), Td(this.layoutCorrected, this.treeScale, this.path, c);
      const { target: m } = u;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = de(), this.projectionDeltaWithTransform = de());
      const g = this.treeScale.x, w = this.treeScale.y, x = this.projectionTransform;
      ce(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = yi(this.projectionDelta, this.treeScale), (this.projectionTransform !== x || this.treeScale.x !== g || this.treeScale.y !== w) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a, l, u;
      (l = (a = this.options).scheduleRender) === null || l === void 0 || l.call(a), i && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      var l, u;
      const c = this.snapshot, d = (c == null ? void 0 : c.latestValues) || {}, h = { ...this.latestValues }, p = de();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = H(), g = (c == null ? void 0 : c.source) !== ((l = this.layout) === null || l === void 0 ? void 0 : l.source), w = (((u = this.getStack()) === null || u === void 0 ? void 0 : u.members.length) || 0) <= 1, x = !!(g && !w && this.options.crossfade === !0 && !this.path.some(Pf));
      this.animationProgress = 0, this.mixTargetDelta = (T) => {
        var b;
        const C = T / 1e3;
        Ti(p.x, i.x, C), Ti(p.y, i.y, C), this.setTargetDelta(p), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((b = this.relativeParent) === null || b === void 0) && b.layout) && (ue(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Af(this.relativeTarget, this.relativeTargetOrigin, m, C)), g && (this.animationValues = h, af(h, d, this.latestValues, C, x, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, l;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()), this.pendingAnimation && (Rt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = rt.update(() => {
        se.hasAnimatedSinceResize = !0, this.currentAnimation = of(0, bi, {
          ...i,
          onUpdate: (u) => {
            var c;
            this.mixTargetDelta(u), (c = i.onUpdate) === null || c === void 0 || c.call(i, u);
          },
          onComplete: () => {
            var u;
            (u = i.onComplete) === null || u === void 0 || u.call(i), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var i;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (i = this.getStack()) === null || i === void 0 || i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var i;
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, bi), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && ta(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || H();
          const d = st(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const h = st(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + h;
        }
        ut(a, l), zt(a, c), ce(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      var l, u, c;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new hf()), this.sharedNodes.get(i).add(a), a.promote({
        transition: (l = a.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
        preserveFollowOpacity: (c = (u = a.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || c === void 0 ? void 0 : c.call(u, a)
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const u = {};
      for (let c = 0; c < vi.length; c++) {
        const d = "rotate" + vi[c];
        l[d] && (u[d] = l[d], i.setStaticValue(d, 0));
      }
      i == null || i.render();
      for (const c in u)
        i.setStaticValue(c, u[c]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, l, u;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const d = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Ie(i.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const w = {};
        return this.options.layoutId && (w.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, w.pointerEvents = Ie(i.pointerEvents) || ""), this.hasProjected && !Ft(this.latestValues) && (w.transform = d ? d({}, "") : "none", this.hasProjected = !1), w;
      }
      const p = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = yi(this.projectionDeltaWithTransform, this.treeScale, p), d && (c.transform = d(p, c.transform));
      const { x: m, y: g } = this.projectionDelta;
      c.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (u = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : c.opacity = h === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const w in We) {
        if (p[w] === void 0)
          continue;
        const { correct: x, applyTo: T } = We[w], b = x(p[w], h);
        if (T) {
          const C = T.length;
          for (let O = 0; O < C; O++)
            c[T[O]] = b;
        } else
          c[w] = b;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? Ie(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(xi), this.root.sharedNodes.clear();
    }
  };
}
function yf(t) {
  t.updateLayout();
}
function vf(t) {
  var e, n, r;
  const o = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: a } = t.options, l = o.source !== t.layout.source;
    a === "size" ? ft((p) => {
      const m = l ? o.measuredBox[p] : o.layoutBox[p], g = st(m);
      m.min = s[p].min, m.max = m.min + g;
    }) : ta(a, o.layoutBox, s) && ft((p) => {
      const m = l ? o.measuredBox[p] : o.layoutBox[p], g = st(s[p]);
      m.max = m.min + g;
    });
    const u = de();
    ce(u, s, o.layoutBox);
    const c = de();
    l ? ce(c, t.applyTransform(i, !0), o.measuredBox) : ce(c, s, o.layoutBox);
    const d = !Xs(u);
    let h = !1;
    if (!t.resumeFrom) {
      const p = t.getClosestProjectingParent();
      if (p && !p.resumeFrom) {
        const { snapshot: m, layout: g } = p;
        if (m && g) {
          const w = H();
          ue(w, o.layoutBox, m.layoutBox);
          const x = H();
          ue(x, s, g.layoutBox), Zs(w, x) || (h = !0);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: c,
      layoutDelta: u,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: h
    });
  } else
    t.isLead() && ((r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n));
  t.options.transition = void 0;
}
function bf(t) {
  t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty));
}
function xf(t) {
  t.clearSnapshot();
}
function xi(t) {
  t.clearMeasurements();
}
function wf(t) {
  const { visualElement: e } = t.options;
  e != null && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function wi(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0;
}
function Tf(t) {
  t.resolveTargetDelta();
}
function Ef(t) {
  t.calcProjection();
}
function Cf(t) {
  t.resetRotation();
}
function Sf(t) {
  t.removeLeadSnapshot();
}
function Ti(t, e, n) {
  t.translate = j(e.translate, 0, n), t.scale = j(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Ei(t, e, n, r) {
  t.min = j(e.min, n.min, r), t.max = j(e.max, n.max, r);
}
function Af(t, e, n, r) {
  Ei(t.x, e.x, n.x, r), Ei(t.y, e.y, n.y, r);
}
function Pf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Rf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function kf(t, e) {
  let n = t.root;
  for (let s = t.path.length - 1; s >= 0; s--)
    if (t.path[s].instance) {
      n = t.path[s];
      break;
    }
  const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
  o && t.mount(o, !0);
}
function Ci(t) {
  t.min = Math.round(t.min), t.max = Math.round(t.max);
}
function Vf(t) {
  Ci(t.x), Ci(t.y);
}
function ta(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Qn(gi(e), gi(n), 0.2);
}
const Of = Qs({
  attachResizeListener: (t, e) => an(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), _n = {
  current: void 0
}, Df = Qs({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!_n.current) {
      const t = new Of(0, {});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), _n.current = t;
    }
    return _n.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Ff = {
  ...cd,
  ...kc,
  ...Od,
  ...rf
}, Tt = /* @__PURE__ */ kl((t, e) => ac(t, e, Ff, Zd, Df));
function ea() {
  const t = nt(!1);
  return ie(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
function Lf() {
  const t = ea(), [e, n] = Z(0), r = Un(() => {
    t.current && n(e + 1);
  }, [e]);
  return [Un(() => rt.postRender(r), [r]), e];
}
class Mf extends V.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function _f({ children: t, isPresent: e }) {
  const n = hr(), r = nt(null), o = nt({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return rl(() => {
    const { width: s, height: i, top: a, left: l } = o.current;
    if (e || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [e]), V.createElement(Mf, { isPresent: e, childRef: r, sizeRef: o }, V.cloneElement(t, { ref: r }));
}
const Bn = ({ children: t, initial: e, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = sn(Bf), l = hr(), u = Pt(
    () => ({
      id: l,
      initial: e,
      isPresent: n,
      custom: o,
      onExitComplete: (c) => {
        a.set(c, !0);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (c) => (a.set(c, !1), () => a.delete(c))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return Pt(() => {
    a.forEach((c, d) => a.set(d, !1));
  }, [n]), V.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (t = V.createElement(_f, { isPresent: n }, t)), V.createElement(xe.Provider, { value: u }, t);
};
function Bf() {
  return /* @__PURE__ */ new Map();
}
const Nt = (t) => t.key || "";
function If(t, e) {
  t.forEach((n) => {
    const r = Nt(n);
    e.set(r, n);
  });
}
function jf(t) {
  const e = [];
  return il.forEach(t, (n) => {
    sl(n) && e.push(n);
  }), e;
}
const Yt = ({ children: t, custom: e, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", Rr(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = Lf();
  const l = q(gr).forceRender;
  l && (a = l);
  const u = ea(), c = jf(t);
  let d = c;
  const h = /* @__PURE__ */ new Set(), p = nt(d), m = nt(/* @__PURE__ */ new Map()).current, g = nt(!0);
  if (ie(() => {
    g.current = !1, If(c, m), p.current = d;
  }), Ar(() => {
    g.current = !0, m.clear(), h.clear();
  }), g.current)
    return V.createElement(V.Fragment, null, d.map((b) => V.createElement(Bn, { key: Nt(b), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, b)));
  d = [...d];
  const w = p.current.map(Nt), x = c.map(Nt), T = w.length;
  for (let b = 0; b < T; b++) {
    const C = w[b];
    x.indexOf(C) === -1 && h.add(C);
  }
  return i === "wait" && h.size && (d = []), h.forEach((b) => {
    if (x.indexOf(b) !== -1)
      return;
    const C = m.get(b);
    if (!C)
      return;
    const O = w.indexOf(b), L = () => {
      m.delete(b), h.delete(b);
      const U = p.current.findIndex((Q) => Q.key === b);
      if (p.current.splice(U, 1), !h.size) {
        if (p.current = c, u.current === !1)
          return;
        a(), r && r();
      }
    };
    d.splice(O, 0, V.createElement(Bn, { key: Nt(C), isPresent: !1, onExitComplete: L, custom: e, presenceAffectsLayout: s, mode: i }, C));
  }), d = d.map((b) => {
    const C = b.key;
    return h.has(C) ? b : V.createElement(Bn, { key: Nt(b), isPresent: !0, presenceAffectsLayout: s, mode: i }, b);
  }), Pr !== "production" && i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), V.createElement(V.Fragment, null, h.size ? d : d.map((b) => ol(b)));
};
function Rm({
  children: t,
  checked: e = !1,
  onChange: n,
  ...r
}) {
  const [o, s] = Z(e), i = "M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75";
  Y(() => s(e), [e]);
  async function a() {
    let l = o;
    s((u) => (l = !u, l)), n && await n(l);
  }
  return /* @__PURE__ */ $($f, { ...r, onClick: a, children: [
    /* @__PURE__ */ S(Uf, { children: /* @__PURE__ */ S(Wf, { state: o, children: /* @__PURE__ */ S(Tt.svg, { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ S(
      Tt.path,
      {
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        initial: { d: i },
        animate: { d: o ? i : "" },
        transition: {
          ease: "easeInOut",
          duration: 0.15
        }
      }
    ) }) }) }),
    t && /* @__PURE__ */ S(Nf, { children: t })
  ] });
}
const $f = A.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`, Nf = A.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgb(${(t) => t.theme.secondaryText});
  margin: 0;
`, Uf = A.div`
  position: relative;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: rgba(${(t) => t.theme.theme}, .15);
`, Wf = A(Tt.div)`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(${(t) => t.theme.theme});
  transition: color .17s ease;

  svg {
    font-size: 1rem;
    width: 1.1rem;
    height: 1.1rem;
  }
`;
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, ye.apply(this, arguments);
}
var zf = function(e) {
  return /* @__PURE__ */ S("svg", ye({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8v4m0 4h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, Hf = function(e) {
  return /* @__PURE__ */ S("svg", ye({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6 9 6 6 6-6"
    })
  }));
}, qf = function(e) {
  return /* @__PURE__ */ S("svg", ye({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 21-5.9999-6M17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    })
  }));
};
const Gf = {
  small: "42px",
  normal: "52px"
};
function km({
  label: t,
  fullWidth: e,
  size: n = "normal",
  status: r = "default",
  disabled: o,
  variant: s = "default",
  iconLeft: i,
  iconRight: a,
  errorMessage: l,
  special: u,
  ...c
}) {
  const [d, h] = Z(!1), [p, m] = Z(null), g = Pt(
    () => ({
      fullWidth: e,
      size: n,
      variant: s,
      status: r,
      disabled: o,
      iconLeft: i,
      iconRight: a,
      special: u,
      ...c
    }),
    [
      e,
      n,
      s,
      r,
      o,
      i,
      a,
      u,
      c
    ]
  ), w = () => {
    const L = setTimeout(() => {
      h(!1), clearTimeout(L);
    }, 200);
    m(L);
  }, x = (L) => {
    var U;
    L.preventDefault(), p && clearTimeout(p), h(!0), (U = c == null ? void 0 : c.onChange) == null || U.call(c, {
      target: { value: "" }
    });
  }, T = () => a || (s === "dropdown" ? /* @__PURE__ */ S(Hf, { height: 20, width: 20 }) : c.value && d ? /* @__PURE__ */ S(Zf, { onClick: x, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ S(zf, { height: 20, width: 20, color: "#D22B1F" }) : null), C = (() => i || (s === "search" ? /* @__PURE__ */ S(Xf, { disabled: o }) : null))(), O = T();
  return /* @__PURE__ */ $(ji, { children: [
    t && /* @__PURE__ */ S(ra, { children: t }),
    /* @__PURE__ */ S(Kf, { fullWidth: e, size: n, children: /* @__PURE__ */ $(
      na,
      {
        fullWidth: e,
        size: n,
        status: r ?? "default",
        disabled: o,
        variant: s,
        special: u,
        children: [
          C && /* @__PURE__ */ S(sr, { position: "left", children: C }),
          /* @__PURE__ */ S(
            Jf,
            {
              ...g,
              disabled: o,
              onFocus: () => h(!0),
              onBlur: w
            }
          ),
          O && /* @__PURE__ */ S(sr, { position: "right", children: O })
        ]
      }
    ) }),
    r === "error" && /* @__PURE__ */ S(Yf, { children: l })
  ] });
}
const Kf = A.div`
  height: ${(t) => Gf[t.size ?? "normal"]};
  width: ${(t) => t.fullWidth ? "100%" : "345px"};
  box-sizing: border-box;
`, na = A.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  padding: ${(t) => t.size === "small" ? "12px" : "12px 14px"};
  background: ${(t) => t.theme.input.background[t.variant ?? "default"].default};
  border-radius: 10px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  overflow: hidden;
  color: rgb(${(t) => t.theme.cardBorder});
  transition: border-color 0.13s ease-in-out, background 0.13s ease-in-out;

  ${(t) => t.variant === "dropdown" ? `
      border: 1.5px solid  ${t.theme.input.border[t.variant || "default"].default};
      background: ${t.theme.input.background[t.variant || "default"].default};
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    ` : t.variant === "search" && t.special ? `border: 1.5px solid ${t.theme.input.border[t.variant || "default"].special}; background:  ${t.theme.input.background[t.variant || "default"].special};` : ""}

  ${(t) => t.status === "error" && `border: 1.5px solid ${t.theme.fail}`};

  &:hover {
    ${(t) => "border: 1.5px solid " + (t.status === "error" ? t.theme.fail : "")};
  }

  &:focus-within,
  &:active {
    border: 1.5px solid
      ${(t) => t.status === "error" ? t.theme.fail : t.theme.input.border[t.variant ?? "default"].focused};
  }

  ${(t) => t.disabled && `
    background: ${t.theme.input.background[t.variant ?? "default"].disabled};
    border: 1.5px solid ${t.theme.input.border[t.variant ?? "default"].disabled};
    color: #838383;
  `}
`, ra = A.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, Yf = A.p`
  color: ${(t) => t.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, Jf = A.input`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(t) => t.theme.primaryTextv2};

  font-size: ${(t) => t.size === "small" ? "16px" : "18px"};
  font-weight: 500;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }

  :-ms-input-placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }

  ::placeholder {
    color: ${(t) => t.theme.input.placeholder[t.variant || "default"]};
  }
`, sr = A.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, Xf = A(qf)`
  color: ${(t) => t.theme.input.icons[t.disabled ? "searchInactive" : "searchActive"]};
`, Zf = ({
  onClick: t,
  width: e = 20,
  height: n = 20,
  color: r = "#838383"
}) => /* @__PURE__ */ S(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    onClick: t,
    children: /* @__PURE__ */ S(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z",
        fill: r
      }
    )
  }
);
function Qf(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function th(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.25 10.75L12 14.25L8.75 10.75"
  }));
}
function eh(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.25 6.75L6.75 17.25"
  }), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6.75 6.75L17.25 17.25"
  }));
}
function nh(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function oa(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ V.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ V.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function rh(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ V.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ V.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function oh(t) {
  return /* @__PURE__ */ V.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t), /* @__PURE__ */ V.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17 14.75V19.25M11.25 19.25H5.78165C5.21714 19.25 4.77296 18.7817 4.88545 18.2285C5.19601 16.7012 6.21027 14 9.49996 14C10.1744 14 10.7532 14.0563 11.25 14.25M19.25 17H14.75M14.75 10.25C16.2687 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2687 4.75 14.75 4.75M12.25 7.5C12.25 9.01878 11.0187 10.25 9.49996 10.25C7.98118 10.25 6.74996 9.01878 6.74996 7.5C6.74996 5.98122 7.98118 4.75 9.49996 4.75C11.0187 4.75 12.25 5.98122 12.25 7.5Z"
  }));
}
function ih({ dragControls: t }) {
  function e(n) {
    n.stopPropagation(), t.start(n);
  }
  return /* @__PURE__ */ S(
    sh,
    {
      onPointerDown: e,
      title: "Click & drag",
      children: /* @__PURE__ */ $(
        ah,
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 8.75H19.25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 15.25H19.25",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      )
    }
  );
}
const sh = A.div`
  display: flex;
  color: rgb(${(t) => t.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, ah = A.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let _e;
const lh = new Uint8Array(16);
function ch() {
  if (!_e && (_e = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !_e))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return _e(lh);
}
const K = [];
for (let t = 0; t < 256; ++t)
  K.push((t + 256).toString(16).slice(1));
function uh(t, e = 0) {
  return K[t[e + 0]] + K[t[e + 1]] + K[t[e + 2]] + K[t[e + 3]] + "-" + K[t[e + 4]] + K[t[e + 5]] + "-" + K[t[e + 6]] + K[t[e + 7]] + "-" + K[t[e + 8]] + K[t[e + 9]] + "-" + K[t[e + 10]] + K[t[e + 11]] + K[t[e + 12]] + K[t[e + 13]] + K[t[e + 14]] + K[t[e + 15]];
}
const dh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Si = {
  randomUUID: dh
};
function fh(t, e, n) {
  if (Si.randomUUID && !e && !t)
    return Si.randomUUID();
  t = t || {};
  const r = t.random || (t.rng || ch)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      e[n + o] = r[o];
    return e;
  }
  return uh(r);
}
function ia(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: hh } = Object.prototype, { getPrototypeOf: Hr } = Object, fn = ((t) => (e) => {
  const n = hh.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gt = (t) => (t = t.toLowerCase(), (e) => fn(e) === t), hn = (t) => (e) => typeof e === t, { isArray: Jt } = Array, ve = hn("undefined");
function ph(t) {
  return t !== null && !ve(t) && t.constructor !== null && !ve(t.constructor) && lt(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const sa = gt("ArrayBuffer");
function mh(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && sa(t.buffer), e;
}
const gh = hn("string"), lt = hn("function"), aa = hn("number"), pn = (t) => t !== null && typeof t == "object", yh = (t) => t === !0 || t === !1, $e = (t) => {
  if (fn(t) !== "object")
    return !1;
  const e = Hr(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, vh = gt("Date"), bh = gt("File"), xh = gt("Blob"), wh = gt("FileList"), Th = (t) => pn(t) && lt(t.pipe), Eh = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || lt(t.append) && ((e = fn(t)) === "formdata" || // detect form-data instance
  e === "object" && lt(t.toString) && t.toString() === "[object FormData]"));
}, Ch = gt("URLSearchParams"), Sh = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ce(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, o;
  if (typeof t != "object" && (t = [t]), Jt(t))
    for (r = 0, o = t.length; r < o; r++)
      e.call(null, t[r], r, t);
  else {
    const s = n ? Object.getOwnPropertyNames(t) : Object.keys(t), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], e.call(null, t[a], a, t);
  }
}
function la(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], e === o.toLowerCase())
      return o;
  return null;
}
const ca = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), ua = (t) => !ve(t) && t !== ca;
function ar() {
  const { caseless: t } = ua(this) && this || {}, e = {}, n = (r, o) => {
    const s = t && la(e, o) || o;
    $e(e[s]) && $e(r) ? e[s] = ar(e[s], r) : $e(r) ? e[s] = ar({}, r) : Jt(r) ? e[s] = r.slice() : e[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ce(arguments[r], n);
  return e;
}
const Ah = (t, e, n, { allOwnKeys: r } = {}) => (Ce(e, (o, s) => {
  n && lt(o) ? t[s] = ia(o, n) : t[s] = o;
}, { allOwnKeys: r }), t), Ph = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Rh = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, kh = (t, e, n, r) => {
  let o, s, i;
  const a = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, t, e)) && !a[i] && (e[i] = t[i], a[i] = !0);
    t = n !== !1 && Hr(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Vh = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, Oh = (t) => {
  if (!t)
    return null;
  if (Jt(t))
    return t;
  let e = t.length;
  if (!aa(e))
    return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Dh = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Hr(Uint8Array)), Fh = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    e.call(t, s[0], s[1]);
  }
}, Lh = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Mh = gt("HTMLFormElement"), _h = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Ai = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Bh = gt("RegExp"), da = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  Ce(n, (o, s) => {
    let i;
    (i = e(o, s, t)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(t, r);
}, Ih = (t) => {
  da(t, (e, n) => {
    if (lt(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (lt(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, jh = (t, e) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return Jt(t) ? r(t) : r(String(t).split(e)), n;
}, $h = () => {
}, Nh = (t, e) => (t = +t, Number.isFinite(t) ? t : e), In = "abcdefghijklmnopqrstuvwxyz", Pi = "0123456789", fa = {
  DIGIT: Pi,
  ALPHA: In,
  ALPHA_DIGIT: In + In.toUpperCase() + Pi
}, Uh = (t = 16, e = fa.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Wh(t) {
  return !!(t && lt(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const zh = (t) => {
  const e = new Array(10), n = (r, o) => {
    if (pn(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[o] = r;
        const s = Jt(r) ? [] : {};
        return Ce(r, (i, a) => {
          const l = n(i, o + 1);
          !ve(l) && (s[a] = l);
        }), e[o] = void 0, s;
      }
    }
    return r;
  };
  return n(t, 0);
}, Hh = gt("AsyncFunction"), qh = (t) => t && (pn(t) || lt(t)) && lt(t.then) && lt(t.catch), y = {
  isArray: Jt,
  isArrayBuffer: sa,
  isBuffer: ph,
  isFormData: Eh,
  isArrayBufferView: mh,
  isString: gh,
  isNumber: aa,
  isBoolean: yh,
  isObject: pn,
  isPlainObject: $e,
  isUndefined: ve,
  isDate: vh,
  isFile: bh,
  isBlob: xh,
  isRegExp: Bh,
  isFunction: lt,
  isStream: Th,
  isURLSearchParams: Ch,
  isTypedArray: Dh,
  isFileList: wh,
  forEach: Ce,
  merge: ar,
  extend: Ah,
  trim: Sh,
  stripBOM: Ph,
  inherits: Rh,
  toFlatObject: kh,
  kindOf: fn,
  kindOfTest: gt,
  endsWith: Vh,
  toArray: Oh,
  forEachEntry: Fh,
  matchAll: Lh,
  isHTMLForm: Mh,
  hasOwnProperty: Ai,
  hasOwnProp: Ai,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: da,
  freezeMethods: Ih,
  toObjectSet: jh,
  toCamelCase: _h,
  noop: $h,
  toFiniteNumber: Nh,
  findKey: la,
  global: ca,
  isContextDefined: ua,
  ALPHABET: fa,
  generateString: Uh,
  isSpecCompliantForm: Wh,
  toJSONObject: zh,
  isAsyncFn: Hh,
  isThenable: qh
};
function F(t, e, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
y.inherits(F, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ha = F.prototype, pa = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  pa[t] = { value: t };
});
Object.defineProperties(F, pa);
Object.defineProperty(ha, "isAxiosError", { value: !0 });
F.from = (t, e, n, r, o, s) => {
  const i = Object.create(ha);
  return y.toFlatObject(t, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), F.call(i, t.message, e, n, r, o), i.cause = t, i.name = t.name, s && Object.assign(i, s), i;
};
const Gh = null;
function lr(t) {
  return y.isPlainObject(t) || y.isArray(t);
}
function ma(t) {
  return y.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Ri(t, e, n) {
  return t ? t.concat(e).map(function(o, s) {
    return o = ma(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : e;
}
function Kh(t) {
  return y.isArray(t) && !t.some(lr);
}
const Yh = y.toFlatObject(y, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function mn(t, e, n) {
  if (!y.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = y.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, w) {
    return !y.isUndefined(w[g]);
  });
  const r = n.metaTokens, o = n.visitor || c, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(e);
  if (!y.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null)
      return "";
    if (y.isDate(m))
      return m.toISOString();
    if (!l && y.isBlob(m))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(m) || y.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, g, w) {
    let x = m;
    if (m && !w && typeof m == "object") {
      if (y.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (y.isArray(m) && Kh(m) || (y.isFileList(m) || y.endsWith(g, "[]")) && (x = y.toArray(m)))
        return g = ma(g), x.forEach(function(b, C) {
          !(y.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ri([g], C, s) : i === null ? g : g + "[]",
            u(b)
          );
        }), !1;
    }
    return lr(m) ? !0 : (e.append(Ri(w, g, s), u(m)), !1);
  }
  const d = [], h = Object.assign(Yh, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: lr
  });
  function p(m, g) {
    if (!y.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), y.forEach(m, function(x, T) {
        (!(y.isUndefined(x) || x === null) && o.call(
          e,
          x,
          y.isString(T) ? T.trim() : T,
          g,
          h
        )) === !0 && p(x, g ? g.concat(T) : [T]);
      }), d.pop();
    }
  }
  if (!y.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), e;
}
function ki(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function qr(t, e) {
  this._pairs = [], t && mn(t, this, e);
}
const ga = qr.prototype;
ga.append = function(e, n) {
  this._pairs.push([e, n]);
};
ga.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, ki);
  } : ki;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Jh(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ya(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Jh, o = n && n.serialize;
  let s;
  if (o ? s = o(e, n) : s = y.isURLSearchParams(e) ? e.toString() : new qr(e, n).toString(r), s) {
    const i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Xh {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    y.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Vi = Xh, va = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Zh = typeof URLSearchParams < "u" ? URLSearchParams : qr, Qh = typeof FormData < "u" ? FormData : null, tp = typeof Blob < "u" ? Blob : null, ep = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Zh,
    FormData: Qh,
    Blob: tp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ba = typeof window < "u" && typeof document < "u", np = ((t) => ba && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), rp = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ba,
  hasStandardBrowserEnv: np,
  hasStandardBrowserWebWorkerEnv: rp
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...op,
  ...ep
};
function ip(t, e) {
  return mn(t, new ht.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ht.isNode && y.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function sp(t) {
  return y.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function ap(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], e[s] = t[s];
  return e;
}
function xa(t) {
  function e(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && y.isArray(o) ? o.length : i, l ? (y.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !y.isObject(o[i])) && (o[i] = []), e(n, r, o[i], s) && y.isArray(o[i]) && (o[i] = ap(o[i])), !a);
  }
  if (y.isFormData(t) && y.isFunction(t.entries)) {
    const n = {};
    return y.forEachEntry(t, (r, o) => {
      e(sp(r), o, n, 0);
    }), n;
  }
  return null;
}
function lp(t, e, n) {
  if (y.isString(t))
    try {
      return (e || JSON.parse)(t), y.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Gr = {
  transitional: va,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = y.isObject(e);
    if (s && y.isHTMLForm(e) && (e = new FormData(e)), y.isFormData(e))
      return o ? JSON.stringify(xa(e)) : e;
    if (y.isArrayBuffer(e) || y.isBuffer(e) || y.isStream(e) || y.isFile(e) || y.isBlob(e))
      return e;
    if (y.isArrayBufferView(e))
      return e.buffer;
    if (y.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ip(e, this.formSerializer).toString();
      if ((a = y.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return mn(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), lp(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Gr.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (e && y.isString(e) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ht.classes.FormData,
    Blob: ht.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Gr.headers[t] = {};
});
const Kr = Gr, cp = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), up = (t) => {
  const e = {};
  let n, r, o;
  return t && t.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || e[n] && cp[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, Oi = Symbol("internals");
function ne(t) {
  return t && String(t).trim().toLowerCase();
}
function Ne(t) {
  return t === !1 || t == null ? t : y.isArray(t) ? t.map(Ne) : String(t);
}
function dp(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const fp = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function jn(t, e, n, r, o) {
  if (y.isFunction(r))
    return r.call(this, e, n);
  if (o && (e = n), !!y.isString(e)) {
    if (y.isString(r))
      return e.indexOf(r) !== -1;
    if (y.isRegExp(r))
      return r.test(e);
  }
}
function hp(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function pp(t, e) {
  const n = y.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, e, o, s, i);
      },
      configurable: !0
    });
  });
}
class gn {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const o = this;
    function s(a, l, u) {
      const c = ne(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = y.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = Ne(a));
    }
    const i = (a, l) => y.forEach(a, (u, c) => s(u, c, l));
    return y.isPlainObject(e) || e instanceof this.constructor ? i(e, n) : y.isString(e) && (e = e.trim()) && !fp(e) ? i(up(e), n) : e != null && s(n, e, r), this;
  }
  get(e, n) {
    if (e = ne(e), e) {
      const r = y.findKey(this, e);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return dp(o);
        if (y.isFunction(n))
          return n.call(this, o, r);
        if (y.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = ne(e), e) {
      const r = y.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || jn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = ne(i), i) {
        const a = y.findKey(r, i);
        a && (!n || jn(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return y.isArray(e) ? e.forEach(s) : s(e), o;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!e || jn(this, this[s], s, e, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(e) {
    const n = this, r = {};
    return y.forEach(this, (o, s) => {
      const i = y.findKey(r, s);
      if (i) {
        n[i] = Ne(o), delete n[s];
        return;
      }
      const a = e ? hp(s) : String(s).trim();
      a !== s && delete n[s], n[a] = Ne(o), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = e && y.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(e) {
    const r = (this[Oi] = this[Oi] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = ne(i);
      r[a] || (pp(o, i), r[a] = !0);
    }
    return y.isArray(e) ? e.forEach(s) : s(e), this;
  }
}
gn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(gn.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
y.freezeMethods(gn);
const wt = gn;
function $n(t, e) {
  const n = this || Kr, r = e || n, o = wt.from(r.headers);
  let s = r.data;
  return y.forEach(t, function(a) {
    s = a.call(n, s, o.normalize(), e ? e.status : void 0);
  }), o.normalize(), s;
}
function wa(t) {
  return !!(t && t.__CANCEL__);
}
function Se(t, e, n) {
  F.call(this, t ?? "canceled", F.ERR_CANCELED, e, n), this.name = "CanceledError";
}
y.inherits(Se, F, {
  __CANCEL__: !0
});
function mp(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const gp = ht.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, o, s) {
      const i = [t + "=" + encodeURIComponent(e)];
      y.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), y.isString(r) && i.push("path=" + r), y.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function yp(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function vp(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function Ta(t, e) {
  return t && !yp(e) ? vp(t, e) : e;
}
const bp = ht.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return e && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(i) {
      const a = y.isString(i) ? o(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function xp(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function wp(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let o = 0, s = 0, i;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const u = Date.now(), c = r[s];
    i || (i = u), n[o] = l, r[o] = u;
    let d = s, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), u - i < e)
      return;
    const p = c && u - c;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Di(t, e) {
  let n = 0;
  const r = wp(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, l = r(a), u = s <= i;
    n = s;
    const c = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && u ? (i - s) / l : void 0,
      event: o
    };
    c[e ? "download" : "upload"] = !0, t(c);
  };
}
const Tp = typeof XMLHttpRequest < "u", Ep = Tp && function(t) {
  return new Promise(function(n, r) {
    let o = t.data;
    const s = wt.from(t.headers).normalize();
    let { responseType: i, withXSRFToken: a } = t, l;
    function u() {
      t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l);
    }
    let c;
    if (y.isFormData(o)) {
      if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((c = s.getContentType()) !== !1) {
        const [g, ...w] = c ? c.split(";").map((x) => x.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...w].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const g = t.auth.username || "", w = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + w));
    }
    const h = Ta(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), ya(h, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function p() {
      if (!d)
        return;
      const g = wt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), x = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: g,
        config: t,
        request: d
      };
      mp(function(b) {
        n(b), u();
      }, function(b) {
        r(b), u();
      }, x), d = null;
    }
    if ("onloadend" in d ? d.onloadend = p : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, d.onabort = function() {
      d && (r(new F("Request aborted", F.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let w = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const x = t.transitional || va;
      t.timeoutErrorMessage && (w = t.timeoutErrorMessage), r(new F(
        w,
        x.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        t,
        d
      )), d = null;
    }, ht.hasStandardBrowserEnv && (a && y.isFunction(a) && (a = a(t)), a || a !== !1 && bp(h))) {
      const g = t.xsrfHeaderName && t.xsrfCookieName && gp.read(t.xsrfCookieName);
      g && s.set(t.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in d && y.forEach(s.toJSON(), function(w, x) {
      d.setRequestHeader(x, w);
    }), y.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), i && i !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Di(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Di(t.onUploadProgress)), (t.cancelToken || t.signal) && (l = (g) => {
      d && (r(!g || g.type ? new Se(null, t, d) : g), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l)));
    const m = xp(h);
    if (m && ht.protocols.indexOf(m) === -1) {
      r(new F("Unsupported protocol " + m + ":", F.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(o || null);
  });
}, cr = {
  http: Gh,
  xhr: Ep
};
y.forEach(cr, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Fi = (t) => `- ${t}`, Cp = (t) => y.isFunction(t) || t === null || t === !1, Ea = {
  getAdapter: (t) => {
    t = y.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const o = {};
    for (let s = 0; s < e; s++) {
      n = t[s];
      let i;
      if (r = n, !Cp(n) && (r = cr[(i = String(n)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = e ? s.length > 1 ? `since :
` + s.map(Fi).join(`
`) : " " + Fi(s[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: cr
};
function Nn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Se(null, t);
}
function Li(t) {
  return Nn(t), t.headers = wt.from(t.headers), t.data = $n.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Ea.getAdapter(t.adapter || Kr.adapter)(t).then(function(r) {
    return Nn(t), r.data = $n.call(
      t,
      t.transformResponse,
      r
    ), r.headers = wt.from(r.headers), r;
  }, function(r) {
    return wa(r) || (Nn(t), r && r.response && (r.response.data = $n.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = wt.from(r.response.headers))), Promise.reject(r);
  });
}
const Mi = (t) => t instanceof wt ? t.toJSON() : t;
function Kt(t, e) {
  e = e || {};
  const n = {};
  function r(u, c, d) {
    return y.isPlainObject(u) && y.isPlainObject(c) ? y.merge.call({ caseless: d }, u, c) : y.isPlainObject(c) ? y.merge({}, c) : y.isArray(c) ? c.slice() : c;
  }
  function o(u, c, d) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u))
        return r(void 0, u, d);
    } else
      return r(u, c, d);
  }
  function s(u, c) {
    if (!y.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
    if (y.isUndefined(c)) {
      if (!y.isUndefined(u))
        return r(void 0, u);
    } else
      return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in e)
      return r(u, c);
    if (d in t)
      return r(void 0, u);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (u, c) => o(Mi(u), Mi(c), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, t, e)), function(c) {
    const d = l[c] || o, h = d(t[c], e[c], c);
    y.isUndefined(h) && d !== a || (n[c] = h);
  }), n;
}
const Ca = "1.6.7", Yr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Yr[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const _i = {};
Yr.transitional = function(e, n, r) {
  function o(s, i) {
    return "[Axios v" + Ca + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (e === !1)
      throw new F(
        o(i, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !_i[i] && (_i[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(s, i, a) : !0;
  };
};
function Sp(t, e, n) {
  if (typeof t != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = e[s];
    if (i) {
      const a = t[s], l = a === void 0 || i(a, s, t);
      if (l !== !0)
        throw new F("option " + s + " must be " + l, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + s, F.ERR_BAD_OPTION);
  }
}
const ur = {
  assertOptions: Sp,
  validators: Yr
}, Et = ur.validators;
class tn {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Vi(),
      response: new Vi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Kt(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && ur.assertOptions(r, {
      silentJSONParsing: Et.transitional(Et.boolean),
      forcedJSONParsing: Et.transitional(Et.boolean),
      clarifyTimeoutError: Et.transitional(Et.boolean)
    }, !1), o != null && (y.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : ur.assertOptions(o, {
      encode: Et.function,
      serialize: Et.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && y.merge(
      s.common,
      s[n.method]
    );
    s && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = wt.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c, d = 0, h;
    if (!l) {
      const m = [Li.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, u), h = m.length, c = Promise.resolve(n); d < h; )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    h = a.length;
    let p = n;
    for (d = 0; d < h; ) {
      const m = a[d++], g = a[d++];
      try {
        p = m(p);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      c = Li.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = u.length; d < h; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(e) {
    e = Kt(this.defaults, e);
    const n = Ta(e.baseURL, e.url);
    return ya(n, e.params, e.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(e) {
  tn.prototype[e] = function(n, r) {
    return this.request(Kt(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(s, i, a) {
      return this.request(Kt(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  tn.prototype[e] = n(), tn.prototype[e + "Form"] = n(!0);
});
const Ue = tn;
class Jr {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, e(function(s, i, a) {
      r.reason || (r.reason = new Se(s, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Jr(function(o) {
        e = o;
      }),
      cancel: e
    };
  }
}
const Ap = Jr;
function Pp(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Rp(t) {
  return y.isObject(t) && t.isAxiosError === !0;
}
const dr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(dr).forEach(([t, e]) => {
  dr[e] = t;
});
const kp = dr;
function Sa(t) {
  const e = new Ue(t), n = ia(Ue.prototype.request, e);
  return y.extend(n, Ue.prototype, e, { allOwnKeys: !0 }), y.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Sa(Kt(t, o));
  }, n;
}
const z = Sa(Kr);
z.Axios = Ue;
z.CanceledError = Se;
z.CancelToken = Ap;
z.isCancel = wa;
z.VERSION = Ca;
z.toFormData = mn;
z.AxiosError = F;
z.Cancel = z.CanceledError;
z.all = function(e) {
  return Promise.all(e);
};
z.spread = Pp;
z.isAxiosError = Rp;
z.mergeConfig = Kt;
z.AxiosHeaders = wt;
z.formToJSON = (t) => xa(y.isHTMLForm(t) ? new FormData(t) : t);
z.getAdapter = Ea.getAdapter;
z.HttpStatusCode = kp;
z.default = z;
const Vp = z;
function Op({
  children: t,
  img: e,
  outline: n,
  ...r
}) {
  const [o, s] = Z(), i = Pt(() => fh(), [e]);
  return Y(() => {
    (async () => {
      if (!e)
        return s(e);
      try {
        const c = (await Vp.get(e, { responseType: "blob" })).data, d = new FileReader();
        d.onloadend = () => {
          const h = d.result;
          typeof h == "string" && s(h);
        }, d.readAsDataURL(c);
      } catch (u) {
        console.error("Error loading image:", u), s(void 0);
      }
    })();
  }, [e]), /* @__PURE__ */ $(Dp, { ...r, children: [
    /* @__PURE__ */ $(
      Fp,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          o && /* @__PURE__ */ S("defs", { children: /* @__PURE__ */ S(
            "pattern",
            {
              id: i,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ S(
                "image",
                {
                  xlinkHref: o,
                  x: "0",
                  y: "0",
                  width: "60",
                  height: "60",
                  preserveAspectRatio: "xMidYMid slice"
                }
              )
            }
          ) }),
          /* @__PURE__ */ S(
            "path",
            {
              d: n ? "M1 30C1 23.8466 1.33102 18.97 2.18954 15.107C3.04554 11.2554 4.41259 8.47287 6.44273 6.44273C8.47287 4.41259 11.2554 3.04554 15.107 2.18954C18.97 1.33102 23.8466 1 30 1C36.1534 1 41.03 1.33102 44.893 2.18954C48.7446 3.04554 51.5271 4.41259 53.5573 6.44273C55.5874 8.47287 56.9545 11.2554 57.8105 15.107C58.669 18.97 59 23.8466 59 30C59 36.1534 58.669 41.03 57.8105 44.893C56.9545 48.7446 55.5874 51.5271 53.5573 53.5573C51.5271 55.5874 48.7446 56.9545 44.893 57.8105C41.03 58.669 36.1534 59 30 59C23.8466 59 18.97 58.669 15.107 57.8105C11.2554 56.9545 8.47287 55.5874 6.44273 53.5573C4.41259 51.5271 3.04554 48.7446 2.18954 44.893C1.33102 41.03 1 36.1534 1 30Z" : "M0 30C0 5.295 5.295 0 30 0C54.705 0 60 5.295 60 30C60 54.705 54.705 60 30 60C5.295 60 0 54.705 0 30Z",
              fill: o ? `url(#${i})` : "currentColor",
              strokeWidth: n ? 2 : void 0,
              stroke: n
            }
          )
        ]
      }
    ),
    t
  ] });
}
const Dp = A.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(t) => t.theme.theme});
`, Fp = A.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`, Lp = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, Mp = {
  // Display text (Hero, Banner)
  "7xl": "3.5rem",
  // 56px
  "6xl": "3rem",
  // 48px
  "5xl": "2.75rem",
  // 44px
  "4xl": "2.5rem",
  // 40px
  // Headings
  "3xl": "2rem",
  // 32px
  "2xl": "1.75rem",
  // 28px
  xl: "1.5rem",
  // 24px
  // Body text
  lg: "1.25rem",
  // 20px
  base: "1.125rem",
  // 18px
  md: "1rem",
  // 16px
  sm: "0.875rem",
  // 14px
  xs: "0.75rem",
  // 12px
  // Micro text (Labels, badges, tags)
  "2xs": "0.625rem",
  // 10px
  "3xs": "0.5rem",
  // 8px
  "4xs": "0.375rem",
  // 6px
  "5xs": "0.25rem",
  // 4px
  "6xs": "0.125rem",
  // 2px
  "7xs": "0.0625rem"
  // 1px
};
function Xr({
  children: t,
  lineHeight: e,
  noMargin: n = !1,
  as: r = "p",
  size: o = "md",
  weight: s = "regular",
  variant: i = "primary",
  ...a
}) {
  return /* @__PURE__ */ S(
    _p,
    {
      as: r,
      $size: o,
      $weight: s,
      $variant: i,
      $lineHeight: e,
      $noMargin: n,
      ...a,
      children: t
    }
  );
}
const _p = A.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(t) => Mp[t.$size]};
  font-weight: ${(t) => Lp[t.$weight]};
  ${(t) => t.$lineHeight && `line-height: ${t.$lineHeight};`}
  color: ${(t) => t.$variant === "primary" ? t.theme.primaryText : t.theme.secondaryText};
  ${(t) => t.$noMargin && "margin: 0;"}
`;
function Vm({
  children: t,
  small: e = !1,
  active: n,
  title: r,
  description: o,
  img: s,
  dragControls: i,
  ...a
}) {
  return /* @__PURE__ */ $(Bp, { small: e, active: n, ...a, children: [
    /* @__PURE__ */ $(Ip, { small: e, children: [
      /* @__PURE__ */ S(jp, { small: e, img: s, children: t }),
      /* @__PURE__ */ $("div", { children: [
        /* @__PURE__ */ S($p, { small: e, children: r }),
        /* @__PURE__ */ S(Np, { small: e, children: o })
      ] })
    ] }),
    i && /* @__PURE__ */ S(ih, { dragControls: i })
  ] });
}
const Bp = A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(t) => t.small ? "10px" : "20px"};
  overflow: hidden;
  cursor: pointer;
  padding: ${(t) => t.small ? "10px" : "15px"};
  height: ${(t) => t.small ? "36px" : "48px"};
  background-color: ${(t) => t.active ? t.theme.secondaryBtnHover : "transparent"};
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: ${(t) => t.active ? "none" : t.theme.secondaryItemHover};
  };
`, Ip = A.div`
  display: flex;
  align-items: center;
  gap: ${(t) => t.small ? "12px" : "17px"};
`, jp = A(Op)`
  position: relative;
  flex-shrink: 0;
  width: ${(t) => t.small ? "32px" : "48px"};
  height: ${(t) => t.small ? "32px" : "48px"};
  color: rgb(${(t) => t.theme.theme});
`, $p = A(Xr).attrs({
  noMargin: !0,
  heading: !1
})`
  font-weight: 500;
  font-size: ${(t) => t.small ? "16px" : "20px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
  color: ${(t) => t.theme.primaryTextv2};
`, Np = A(Xr).attrs({
  noMargin: !0,
  heading: !1
})`
  font-size: ${(t) => t.small ? "10px" : "14px"};
  font-weight: 500;
`, Om = A(oh)`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, Dm = A.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`;
function oe(t) {
  return {
    top: {
      bottom: "125%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "125%",
      left: "0"
    },
    topEnd: {
      bottom: "125%",
      right: "0"
    },
    bottom: {
      top: "125%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "125%",
      left: "50%"
    },
    bottomEnd: {
      top: "112%",
      right: "0"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    leftStart: {
      top: "0",
      right: "125%"
    },
    leftEnd: {
      bottom: "0",
      right: "125%"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    },
    rightStart: {
      top: "0",
      left: "125%"
    },
    rightEnd: {
      bottom: "0",
      left: "125%"
    }
  }[t];
}
function Up(t) {
  let e = "";
  return t.startsWith("top") ? e += "bottom" : t.startsWith("bottom") ? e += "top" : t.startsWith("right") ? e += "left" : e += "right", e += `: -8px;
`, t.startsWith("top") || t.startsWith("bottom") ? t.includes("Start") ? e += "left: 8px;" : t.includes("End") ? e += "right: 8px;" : (e += `left: 50%;
`, e += "transform: translate(-50%, 0);") : t.includes("Start") ? e += "top: 8px;" : t.includes("End") ? e += "bottom: 8px;" : (e += `top: 50%;
`, e += "transform: translate(0, -50%);"), e;
}
function Fm({
  children: t,
  content: e,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = Z(!1);
  Y(() => (document.addEventListener("mousedown", c), () => {
    document.removeEventListener("mousedown", c);
  }));
  const l = nt(), u = nt();
  function c(d) {
    var h, p;
    o === "click" && (!i && ((h = u.current) != null && h.contains(d.target)) ? a(!0) : i && !((p = l.current) != null && p.contains(d.target)) && (d.preventDefault(), d.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ $(
    Wp,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: u,
      children: [
        /* @__PURE__ */ S(Yt, { children: i && /* @__PURE__ */ S(
          zp,
          {
            style: r || oe(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: l,
            children: /* @__PURE__ */ S(pr, { ...s, children: e })
          }
        ) }),
        t
      ]
    }
  );
}
const Wp = A.div`
  position: relative;
  display: inline-block;
`, zp = A(Tt.div)`
  position: absolute;
  z-index: 100;
`, Aa = Mt({
  toasts: [],
  setToast() {
  }
}), Hp = () => q(Aa);
let qp = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
function Gp({
  children: t,
  duration: e,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s
}) {
  const [i, a] = Z(100);
  return Y(() => {
    const l = setInterval(() => {
      if (i === 0) {
        clearInterval(l);
        return;
      }
      const u = (/* @__PURE__ */ new Date()).getTime();
      a(100 - (u - s) / e * 100);
    }, e / 100);
    return () => clearInterval(l);
  }, [i]), /* @__PURE__ */ $(Kp, { children: [
    /* @__PURE__ */ $(Yp, { children: [
      /* @__PURE__ */ S(
        Jp,
        {
          as: r === "info" ? oa : r === "error" ? rh : Qf,
          type: r
        }
      ),
      /* @__PURE__ */ S(Xp, { children: t })
    ] }),
    /* @__PURE__ */ $(Zp, { children: [
      n && /* @__PURE__ */ S(
        ka,
        {
          onClick: async () => {
            await n.task(), o();
          },
          children: n.name
        }
      ),
      /* @__PURE__ */ S(Qp, { onClick: o, children: /* @__PURE__ */ S(tm, {}) })
    ] })
  ] });
}
const Pa = ".2rem", Kp = A(Tt.div).attrs({
  initial: {
    opacity: 0,
    translateY: "-100%",
    scale: 0.85,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  animate: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  }
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color: rgb(
    ${(t) => t.theme.displayTheme === "light" ? "0, 0, 0" : t.theme.cardBackground}
  );
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${Pa});
  padding: 0.5rem 1.1rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(t) => t.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + t.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, Ra = {
  success: "20, 209, 16",
  error: "255, 0, 0"
};
A.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: ${Pa};
  width: ${(t) => t.progress || "100"}%;
  background-color: rgb(
    ${(t) => t.type === "info" ? t.theme.theme : Ra[t.type]}
  );
  transition: all 0.05s ease-in-out;
`;
const en = ".35rem", Yp = A.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, Jp = A(oa)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  color: rgb(
    ${(t) => t.type === "info" ? t.theme.theme : Ra[t.type]}
  );
`, Xp = A.div`
  padding: ${en} 0;
`, Zp = A.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, fr = "1rem", ka = A.button`
  font-size: ${fr};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${en} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, Qp = A(ka)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${en} * 2 + ${fr});
  height: calc(${en} * 2 + ${fr});
`, tm = A(eh)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, em = ({ setToasts: t }) => {
  const { toasts: e } = Hp();
  return /* @__PURE__ */ S(nm, { children: /* @__PURE__ */ S(Yt, { children: e.map((n, r) => /* @__PURE__ */ S(
    Gp,
    {
      action: n.action,
      duration: n.duration,
      type: n.type,
      close: (o) => {
        t((s) => s.filter((i) => i.id !== o));
      },
      addedAt: n.addedAt,
      children: n.content
    },
    r
  )) }) });
}, nm = A.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  bottom: 1rem;
  right: 1rem;
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`, Lm = {
  displayTheme: "light",
  theme: "171, 154, 255",
  primaryText: "#121212",
  secondaryText: "#666",
  cardBorder: "235, 235, 241",
  background: "255, 255, 255",
  cardBackground: "#FFF",
  // New styles:
  backgroundv2: "#FFFFFF",
  primary: "#7866D3",
  primaryBtnHover: "#5647A0",
  secondaryBtnHover: "#DDD9F4",
  secondaryItemHover: "#EBE8F8",
  buttonDisabled: "#BCB3E9",
  primaryTextv2: "#191919",
  secondaryTextv2: "#757575",
  buttonDisabledText: "#DDD9F4",
  inputField: "#757575",
  success: "#17A815",
  fail: "#D22B1F",
  backgroundSecondary: "#CCCCCC",
  delete: "#F58080",
  secondaryDelete: "#F58080",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842f8 5.41%, #6b57f9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#f5f4ff"
      },
      secondary: {
        default: "#F2F2F7",
        hover: "#EBEBF0",
        active: "#F2F2F7",
        disabled: "#F2F2F7"
      },
      secondaryAlt: {
        default: "#F5F4FF",
        hover: "#E3E1FA",
        active: "#F5F4FF",
        disabled: "#F5F4FF"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#291C8B",
      secondaryAlt: "#291C8B",
      disabled: "#847eaf"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #EBEBF0",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#f2f2f7", disabled: "#FFF", special: "#F2F2F7" },
      default: { default: "#f2f2f7", disabled: "#FFF" },
      dropdown: { default: "#FFF", disabled: "#FFF" }
    },
    border: {
      search: { disabled: "#E4E4EB", focused: "#D6D6DD", special: "#6B57F9" },
      default: { disabled: "#E4E4EB", focused: "#D6D6DD" },
      dropdown: { default: "#E4E4EB", disabled: "#E4E4EB", focused: "#D6D6DD" }
    },
    placeholder: {
      search: "#666666",
      default: "#666666",
      dropdown: "#121212"
    },
    icons: {
      searchActive: "#6B57F9",
      searchInactive: "#838383"
    }
  }
}, Mm = {
  displayTheme: "dark",
  theme: "171, 154, 255",
  primaryText: "#EEE",
  secondaryText: "#AAA",
  cardBorder: "44, 44, 47",
  background: "0, 0, 0",
  cardBackground: "#121212",
  // New styles:
  backgroundv2: "#191919",
  primary: "#8E7BEA",
  primaryBtnHover: "#6751D0",
  secondaryBtnHover: "#36324D",
  secondaryItemHover: "#2B2838",
  buttonDisabled: "#544A81",
  primaryTextv2: "#FFFFFF",
  secondaryTextv2: "#A3A3A3",
  buttonDisabledText: "#A9A4C0",
  inputField: "#847F90",
  success: "#14D110",
  fail: "#FF1A1A",
  backgroundSecondary: "#333333",
  delete: "#8C1A1A",
  secondaryDelete: "#C51A1A",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842F8 5.41%, #6B57F9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#2B2269"
      },
      secondary: {
        default: "#333336",
        hover: "#2C2C2E",
        active: "#333336",
        disabled: "#333336"
      },
      secondaryAlt: {
        default: "#403785",
        hover: "#2A2260",
        active: "#403785",
        disabled: "#403785"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#EEE",
      secondaryAlt: "#EEE",
      disabled: "#8E8D97"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #2C2C2E",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#2C2C2E", disabled: "#2C2C2E", special: "#2C2C2E" },
      default: { default: "#2C2C2E", disabled: "#2C2C2E" },
      dropdown: { default: "#242426", disabled: "#2C2C2E" }
    },
    border: {
      search: { disabled: "#2C2C2E", focused: "#333", special: "#6B57F9" },
      default: { disabled: "#2C2C2E", focused: "#333" },
      dropdown: { default: "#2C2C2E", disabled: "#2C2C2E", focused: "#333" }
    },
    placeholder: {
      search: "#AAAAAA",
      default: "#AAAAAA",
      dropdown: "#EEEEEE"
    },
    icons: {
      searchActive: "#9787FF",
      searchInactive: "#838383"
    }
  }
};
function _m({
  children: t,
  theme: e
}) {
  const [n, r] = Z([]);
  function o(s) {
    const i = qp();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((l) => l.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ S(ll, { theme: e, children: /* @__PURE__ */ $(Aa.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ S(em, { setToasts: r }),
    t
  ] }) });
}
const rm = {
  popup: {
    normal: "20px",
    slim: "12px"
  },
  page: {
    normal: "12vw",
    slim: "24px"
  }
}, Bm = A.div`
  position: relative;
  padding: 1rem
    ${(t) => rm[t.type || "popup"][t.size || "normal"]};
`;
function Im({
  children: t,
  label: e,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = Pt(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ $(ji, { children: [
    e && /* @__PURE__ */ S(ra, { children: e }),
    /* @__PURE__ */ $(
      na,
      {
        fullWidth: n,
        size: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ S(om, { ...i, children: t }),
          /* @__PURE__ */ S(sr, { position: "right", children: /* @__PURE__ */ S(th, {}) })
        ]
      }
    )
  ] });
}
const om = A.select`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(t) => t.theme.primaryTextv2};

  font-size: 16px;
  font-weight: 500;
  padding: ${(t) => t.small ? "8.5px 15px" : "13.5px 15px"};
  line-height: 22px;
  width: 100%;
  cursor: pointer;
  transition: all 0.23s ease-in-out;
  z-index: 15;

  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  option {
  }
`;
function jm({
  children: t,
  content: e,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, l, u;
  const [s, i] = Z(!1);
  return /* @__PURE__ */ $(
    im,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ S(Yt, { children: s && /* @__PURE__ */ S(
          sm,
          {
            ...o,
            position: r,
            style: oe(r),
            initial: {
              opacity: 0,
              transform: (((a = oe(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((l = oe(r)) == null ? void 0 : l.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((u = oe(r)) == null ? void 0 : u.transform) || "") + " scale(.95)"
            },
            transition: { duration: 0.23, ease: "easeInOut" },
            children: e
          }
        ) }),
        t
      ]
    }
  );
}
const im = A.div`
  position: relative;
  display: inline-flex;
  ${(t) => t.underline ? "border-bottom: 1px dotted rgb(" + t.theme.cardBorder + ");" : ""}
  ${(t) => t.underline ? "cursor: pointer;" : ""}
`, sm = A(Tt.div)`
  position: absolute;
  padding: 0.37rem 0.58rem;
  border-radius: 7px;
  font-size: 0.86rem;
  font-weight: 600;
  color: #eaeaea;
  background-color: #18191c;
  z-index: 100;
  width: max-content;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);

  &::after {
    position: absolute;
    content: "";
    border: 4px solid;
    border-color: ${(t) => t.position.startsWith("top") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("right") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("bottom") ? "#18191C" : "transparent"}
      ${(t) => t.position.startsWith("left") ? "#18191C" : "transparent"};
    ${(t) => Up(t.position)}
  }
`;
function Be(t) {
  return {
    top: {
      bottom: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "133%",
      left: "-37%"
    },
    topEnd: {
      bottom: "133%",
      right: "-37%"
    },
    bottom: {
      top: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "133%",
      left: "-37%"
    },
    bottomEnd: {
      top: "133%",
      right: "-37%"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    }
  }[t];
}
function am(t) {
  let e = "";
  return t.startsWith("top") ? e += "bottom" : t.startsWith("bottom") ? e += "top" : t.startsWith("right") ? e += "left" : e += "right", e += `: -15px;
`, t.startsWith("top") || t.startsWith("bottom") ? t.includes("Start") ? e += "left: 15px;" : t.includes("End") ? e += "right: 15px;" : (e += `left: 50%;
`, e += "transform: translate(-50%, 0);") : t.includes("Start") ? e += "top: 15px;" : t.includes("End") ? e += "bottom: 15px;" : (e += `top: 50%;
`, e += "transform: translate(0, -50%);"), e;
}
function $m({
  children: t,
  content: e,
  underline: n = !1,
  position: r = "top",
  ...o
}) {
  var a, l, u;
  const [s, i] = Z(!1);
  return /* @__PURE__ */ $(
    lm,
    {
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      underline: n,
      children: [
        /* @__PURE__ */ S(Yt, { children: s && /* @__PURE__ */ S(
          cm,
          {
            ...o,
            position: r,
            style: Be(r),
            initial: {
              opacity: 0,
              transform: (((a = Be(r)) == null ? void 0 : a.transform) || "") + " scale(.95)"
            },
            animate: {
              opacity: 1,
              transform: (((l = Be(r)) == null ? void 0 : l.transform) || "") + " scale(1)"
            },
            exit: {
              opacity: 0,
              transform: (((u = Be(r)) == null ? void 0 : u.transform) || "") + " scale(.95)"
            },
            transition: { duration: 0.23, ease: "easeInOut" },
            children: e
          }
        ) }),
        t
      ]
    }
  );
}
const lm = A.div`
  position: relative;
  display: inline-flex;
  ${(t) => t.underline ? "border-bottom: 1px dotted rgb(" + t.theme.cardBorder + ");" : ""}
  ${(t) => t.underline ? "cursor: pointer;" : ""}
`, cm = A(Tt.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  gap: 0px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  background-color: ${(t) => t.theme.backgroundSecondary};
  z-index: 100;
  width: max-content;
  min-width: 109px;
  line-height: 19px;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14);

  &::after {
    position: absolute;
    content: "";
    border: 7.5px solid;
    pointer-events: none;
    border-color: ${(t) => t.position.startsWith("top") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("right") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("bottom") ? t.theme.backgroundSecondary : "transparent"}
      ${(t) => t.position.startsWith("left") ? t.theme.backgroundSecondary : "transparent"};
    ${(t) => am(t.position)}
  }
`, Nm = A.span`
  display: block;
  height: ${({ y: t }) => t ? `${t}rem` : "0"};
  width: ${({ x: t }) => t ? `${t}rem` : "0"};
`;
function Um({
  children: t,
  accept: e,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = Z([]);
  return Y(() => {
    if (!(r != null && r.current))
      return;
    const a = () => {
      var u;
      const l = (u = r == null ? void 0 : r.current) == null ? void 0 : u.files;
      if (!l || l.length === 0)
        return i([]);
      i(Array.from(l).map((c) => c.name));
    };
    return r.current.addEventListener("change", a), () => {
      var l;
      return (l = r.current) == null ? void 0 : l.removeEventListener("change", a);
    };
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ $(um, { ...o, children: [
    /* @__PURE__ */ S(Xr, { children: s.length === 0 && t || s.join(", ") }),
    /* @__PURE__ */ S(fm, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ S(nh, {}) }),
    /* @__PURE__ */ S(dm, { accept: e, multiple: n, ref: r })
  ] });
}
const um = A(pr).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, dm = A.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`, fm = A(ml).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Wm({
  children: t,
  open: e,
  setOpen: n,
  actions: r,
  root: o
}) {
  return Ii.createPortal(
    /* @__PURE__ */ S(Yt, { children: e && /* @__PURE__ */ S(hm, { onClick: () => n(!1), children: /* @__PURE__ */ $(pm, { onClick: (s) => s.stopPropagation(), children: [
      /* @__PURE__ */ S(mm, { children: t }),
      r && /* @__PURE__ */ S(gm, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const hm = A(Tt.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`, pm = A(pr)`
  padding: 0;
  background-color: rgb(${(t) => t.theme.background});
  max-width: 47%;
  min-width: 30%;
  overflow: hidden;
  margin: auto;

  @media screen and (max-width: 720px) {
    max-width: 94vw;
  }
`, mm = A.div`
  padding: 1rem;
`, gm = A.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
`, zm = A.button`
  outline: none;
  border: none;
  border-top: 1px solid rgb(${(t) => t.theme.cardBorder});
  background-color: transparent;
  text-align: center;
  width: 100%;
  padding: 1rem 0;
  color: rgb(${(t) => t.theme.secondaryText});
  background-color: transparent;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(${(t) => t.theme.cardBorder}, 0.35);
  }
`;
function Hm({
  children: t,
  open: e,
  setOpen: n,
  actions: r,
  root: o
}) {
  return Ii.createPortal(
    /* @__PURE__ */ S(Yt, { children: e && /* @__PURE__ */ S(ym, { onClick: () => n(!1), children: /* @__PURE__ */ $(vm, { onClick: (s) => s.stopPropagation(), children: [
      /* @__PURE__ */ S(bm, { children: t }),
      r && /* @__PURE__ */ S(xm, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const ym = A(Tt.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(19, 19, 19, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`, vm = A.div`
  background-color: ${(t) => t.theme.displayTheme === "light" ? t.theme.backgroundv2 : t.theme.backgroundSecondary};
  outline: 1px solid #7866d3;
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 24px 30px;
  box-sizing: border-box;
  gap: 16px;
`, bm = A.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(t) => t.theme.primaryTextv2};
  line-height: 25px;
  align-self: stretch;
`, xm = A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`;
export {
  Mm as ARCONNECT_DARK_THEME,
  Lm as ARCONNECT_LIGHT_THEME,
  ml as Button,
  pr as Card,
  Rm as Checkbox,
  Yf as ErrorMsg,
  Um as FileInput,
  sr as IconWrapperV2,
  km as Input,
  Kf as InputContainer,
  Jf as InputV2Element,
  na as InputV2Wrapper,
  ra as LabelV2,
  Vm as ListItem,
  Om as ListItemIcon,
  Dm as ListItemImg,
  fl as Loading,
  Wm as Modal,
  zm as ModalButton,
  Hm as ModalV2,
  Fm as Popover,
  _m as Provider,
  Bm as Section,
  Im as SelectV2,
  Nm as Spacer,
  Xr as Text,
  jm as Tooltip,
  $m as TooltipV2,
  Sm as useCheckbox,
  Cm as useInput,
  Am as useModal,
  Hp as useToasts
};
