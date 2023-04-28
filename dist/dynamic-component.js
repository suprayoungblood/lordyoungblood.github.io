var vc = Object.defineProperty;
var yc = (e, n, t) => n in e ? vc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Fu = (e, n, t) => (yc(e, typeof n != "symbol" ? n + "" : n, t), t);
function Gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zi = { exports: {} }, rl = {}, Ji = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt = Symbol.for("react.element"), gc = Symbol.for("react.portal"), wc = Symbol.for("react.fragment"), Sc = Symbol.for("react.strict_mode"), kc = Symbol.for("react.profiler"), Ec = Symbol.for("react.provider"), Cc = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), Pc = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Uu = Symbol.iterator;
function zc(e) {
  return e === null || typeof e != "object" ? null : (e = Uu && e[Uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bi = Object.assign, es = {};
function ot(e, n, t) {
  this.props = e, this.context = n, this.refs = es, this.updater = t || qi;
}
ot.prototype.isReactComponent = {};
ot.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ot.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {
}
ns.prototype = ot.prototype;
function Bo(e, n, t) {
  this.props = e, this.context = n, this.refs = es, this.updater = t || qi;
}
var Ho = Bo.prototype = new ns();
Ho.constructor = Bo;
bi(Ho, ot.prototype);
Ho.isPureReactComponent = !0;
var $u = Array.isArray, ts = Object.prototype.hasOwnProperty, Wo = { current: null }, rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, n, t) {
  var r, l = {}, o = null, u = null;
  if (n != null)
    for (r in n.ref !== void 0 && (u = n.ref), n.key !== void 0 && (o = "" + n.key), n)
      ts.call(n, r) && !rs.hasOwnProperty(r) && (l[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1)
    l.children = t;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in i = e.defaultProps, i)
      l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Gt, type: e, key: o, ref: u, props: l, _owner: Wo.current };
}
function Tc(e, n) {
  return { $$typeof: Gt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gt;
}
function Lc(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Au = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null)
    u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case gc:
            u = !0;
        }
    }
  if (u)
    return u = e, l = l(u), e = r === "" ? "." + El(u, 0) : r, $u(l) ? (t = "", e != null && (t = e.replace(Au, "$&/") + "/"), Sr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Qo(l) && (l = Tc(l, t + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(Au, "$&/") + "/") + e)), n.push(l)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", $u(e))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + El(o, i);
      u += Sr(o, n, t, s, l);
    }
  else if (s = zc(e), typeof s == "function")
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      o = o.value, s = r + El(o, i++), u += Sr(o, n, t, s, l);
  else if (o === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function tr(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Rc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ue = { current: null }, kr = { transition: null }, Oc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Wo };
T.Children = { map: tr, forEach: function(e, n, t) {
  tr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return tr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return tr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Qo(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = ot;
T.Fragment = wc;
T.Profiler = kc;
T.PureComponent = Bo;
T.StrictMode = Sc;
T.Suspense = xc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
T.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bi({}, e.props), l = e.key, o = e.ref, u = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, u = Wo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var i = e.type.defaultProps;
    for (s in n)
      ts.call(n, s) && !rs.hasOwnProperty(s) && (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++)
      i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: u };
};
T.createContext = function(e) {
  return e = { $$typeof: Cc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ec, _context: e }, e.Consumer = e;
};
T.createElement = ls;
T.createFactory = function(e) {
  var n = ls.bind(null, e);
  return n.type = e, n;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: _c, render: e };
};
T.isValidElement = Qo;
T.lazy = function(e) {
  return { $$typeof: Nc, _payload: { _status: -1, _result: e }, _init: Rc };
};
T.memo = function(e, n) {
  return { $$typeof: Pc, type: e, compare: n === void 0 ? null : n };
};
T.startTransition = function(e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
T.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
T.useCallback = function(e, n) {
  return ue.current.useCallback(e, n);
};
T.useContext = function(e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function(e, n) {
  return ue.current.useEffect(e, n);
};
T.useId = function() {
  return ue.current.useId();
};
T.useImperativeHandle = function(e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
T.useInsertionEffect = function(e, n) {
  return ue.current.useInsertionEffect(e, n);
};
T.useLayoutEffect = function(e, n) {
  return ue.current.useLayoutEffect(e, n);
};
T.useMemo = function(e, n) {
  return ue.current.useMemo(e, n);
};
T.useReducer = function(e, n, t) {
  return ue.current.useReducer(e, n, t);
};
T.useRef = function(e) {
  return ue.current.useRef(e);
};
T.useState = function(e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function(e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
T.useTransition = function() {
  return ue.current.useTransition();
};
T.version = "18.2.0";
Ji.exports = T;
var Rt = Ji.exports;
const os = /* @__PURE__ */ Gi(Rt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc = Rt, Dc = Symbol.for("react.element"), jc = Symbol.for("react.fragment"), Ic = Object.prototype.hasOwnProperty, Fc = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function us(e, n, t) {
  var r, l = {}, o = null, u = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (u = n.ref);
  for (r in n)
    Ic.call(n, r) && !Uc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Dc, type: e, key: o, ref: u, props: l, _owner: Fc.current };
}
rl.Fragment = jc;
rl.jsx = us;
rl.jsxs = us;
Zi.exports = rl;
var se = Zi.exports, Xl = {}, is = { exports: {} }, ge = {}, ss = { exports: {} }, as = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(C, N) {
    var z = C.length;
    C.push(N);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, X = C[H];
        if (0 < l(X, N))
          C[H] = N, C[z] = X, z = H;
        else
          break e;
      }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var N = C[0], z = C.pop();
    if (z !== N) {
      C[0] = z;
      e:
        for (var H = 0, X = C.length, er = X >>> 1; H < er; ) {
          var vn = 2 * (H + 1) - 1, kl = C[vn], yn = vn + 1, nr = C[yn];
          if (0 > l(kl, z))
            yn < X && 0 > l(nr, kl) ? (C[H] = nr, C[yn] = z, H = yn) : (C[H] = kl, C[vn] = z, H = vn);
          else if (yn < X && 0 > l(nr, z))
            C[H] = nr, C[yn] = z, H = yn;
          else
            break e;
        }
    }
    return N;
  }
  function l(C, N) {
    var z = C.sortIndex - N.sortIndex;
    return z !== 0 ? z : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var u = Date, i = u.now();
    e.unstable_now = function() {
      return u.now() - i;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, g = !1, w = !1, S = !1, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= C)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(C) {
    if (S = !1, d(C), !w)
      if (t(s) !== null)
        w = !0, wl(E);
      else {
        var N = t(c);
        N !== null && Sl(v, N.startTime - C);
      }
  }
  function E(C, N) {
    w = !1, S && (S = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), h = t(s); h !== null && (!(h.expirationTime > N) || C && !Pe()); ) {
        var H = h.callback;
        if (typeof H == "function") {
          h.callback = null, p = h.priorityLevel;
          var X = H(h.expirationTime <= N);
          N = e.unstable_now(), typeof X == "function" ? h.callback = X : h === t(s) && r(s), d(N);
        } else
          r(s);
        h = t(s);
      }
      if (h !== null)
        var er = !0;
      else {
        var vn = t(c);
        vn !== null && Sl(v, vn.startTime - N), er = !1;
      }
      return er;
    } finally {
      h = null, p = z, g = !1;
    }
  }
  var _ = !1, x = null, P = -1, B = 5, L = -1;
  function Pe() {
    return !(e.unstable_now() - L < B);
  }
  function st() {
    if (x !== null) {
      var C = e.unstable_now();
      L = C;
      var N = !0;
      try {
        N = x(!0, C);
      } finally {
        N ? at() : (_ = !1, x = null);
      }
    } else
      _ = !1;
  }
  var at;
  if (typeof a == "function")
    at = function() {
      a(st);
    };
  else if (typeof MessageChannel < "u") {
    var Iu = new MessageChannel(), hc = Iu.port2;
    Iu.port1.onmessage = st, at = function() {
      hc.postMessage(null);
    };
  } else
    at = function() {
      I(st, 0);
    };
  function wl(C) {
    x = C, _ || (_ = !0, at());
  }
  function Sl(C, N) {
    P = I(function() {
      C(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, wl(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return C();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, N) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var z = p;
    p = C;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(C, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, C) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = z + X, C = { id: m++, callback: N, priorityLevel: C, startTime: z, expirationTime: X, sortIndex: -1 }, z > H ? (C.sortIndex = z, n(c, C), t(s) === null && C === t(c) && (S ? (f(P), P = -1) : S = !0, Sl(v, z - H))) : (C.sortIndex = X, n(s, C), w || g || (w = !0, wl(E))), C;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(C) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return C.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(as);
ss.exports = as;
var $c = ss.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs = Rt, ye = $c;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fs = /* @__PURE__ */ new Set(), Ot = {};
function Ln(e, n) {
  qn(e, n), qn(e + "Capture", n);
}
function qn(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++)
    fs.add(n[e]);
}
var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vu = {}, Bu = {};
function Vc(e) {
  return Gl.call(Bu, e) ? !0 : Gl.call(Vu, e) ? !1 : Ac.test(e) ? Bu[e] = !0 : (Vu[e] = !0, !1);
}
function Bc(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hc(e, n, t, r) {
  if (n === null || typeof n > "u" || Bc(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ie(e, n, t, r, l, o, u) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
}
var b = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  b[e] = new ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  b[n] = new ie(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  b[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  b[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  b[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  b[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  b[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  b[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  b[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function Yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Ko,
    Yo
  );
  b[n] = new ie(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Ko, Yo);
  b[n] = new ie(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Ko, Yo);
  b[n] = new ie(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
b.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  b[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xo(e, n, t, r) {
  var l = b.hasOwnProperty(n) ? b[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Hc(n, t, l, r) && (t = null), r || l === null ? Vc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rr = Symbol.for("react.element"), Mn = Symbol.for("react.portal"), Dn = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), ds = Symbol.for("react.provider"), ps = Symbol.for("react.context"), Zo = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), Jo = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), ms = Symbol.for("react.offscreen"), Hu = Symbol.iterator;
function ct(e) {
  return e === null || typeof e != "object" ? null : (e = Hu && e[Hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, Cl;
function gt(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Cl = n && n[1] || "";
    }
  return `
` + Cl + e;
}
var _l = !1;
function xl(e, n) {
  if (!e || _l)
    return "";
  _l = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    _l = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? gt(e) : "";
}
function Wc(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt("Lazy");
    case 13:
      return gt("Suspense");
    case 19:
      return gt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Mn:
      return "Portal";
    case Zl:
      return "Profiler";
    case Go:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ps:
        return (e.displayName || "Context") + ".Consumer";
      case ds:
        return (e._context.displayName || "Context") + ".Provider";
      case Zo:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Jo:
        return n = e.displayName || null, n !== null ? n : bl(e.type) || "Memo";
      case Ze:
        n = e._payload, e = e._init;
        try {
          return bl(e(n));
        } catch {
        }
    }
  return null;
}
function Qc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Go ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hs(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Kc(e) {
  var n = hs(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(u) {
      r = "" + u, o.call(this, u);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = Kc(e));
}
function vs(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = hs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Or(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, n) {
  var t = n.checked;
  return A({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Wu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = fn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function ys(e, n) {
  n = n.checked, n != null && Xo(e, "checked", n, !1);
}
function no(e, n) {
  ys(e, n);
  var t = fn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? to(e, n.type, t) : n.hasOwnProperty("defaultValue") && to(e, n.type, fn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Qu(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function to(e, n, t) {
  (n !== "number" || Or(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var wt = Array.isArray;
function Kn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ro(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return A({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ku(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (wt(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: fn(t) };
}
function gs(e, n) {
  var t = fn(n.value), r = fn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Yu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ws(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ws(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var or, Ss = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = or.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Mt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Et = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Et).forEach(function(e) {
  Yc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Et[n] = Et[e];
  });
});
function ks(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Et.hasOwnProperty(e) && Et[e] ? ("" + n).trim() : n + "px";
}
function Es(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = ks(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var Xc = A({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function oo(e, n) {
  if (n) {
    if (Xc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function uo(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var io = null;
function qo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var so = null, Yn = null, Xn = null;
function Xu(e) {
  if (e = qt(e)) {
    if (typeof so != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = sl(n), so(e.stateNode, e.type, n));
  }
}
function Cs(e) {
  Yn ? Xn ? Xn.push(e) : Xn = [e] : Yn = e;
}
function _s() {
  if (Yn) {
    var e = Yn, n = Xn;
    if (Xn = Yn = null, Xu(e), n)
      for (e = 0; e < n.length; e++)
        Xu(n[e]);
  }
}
function xs(e, n) {
  return e(n);
}
function Ps() {
}
var Pl = !1;
function Ns(e, n, t) {
  if (Pl)
    return e(n, t);
  Pl = !0;
  try {
    return xs(e, n, t);
  } finally {
    Pl = !1, (Yn !== null || Xn !== null) && (Ps(), _s());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = sl(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var ao = !1;
if (We)
  try {
    var ft = {};
    Object.defineProperty(ft, "passive", { get: function() {
      ao = !0;
    } }), window.addEventListener("test", ft, ft), window.removeEventListener("test", ft, ft);
  } catch {
    ao = !1;
  }
function Gc(e, n, t, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ct = !1, Mr = null, Dr = !1, co = null, Zc = { onError: function(e) {
  Ct = !0, Mr = e;
} };
function Jc(e, n, t, r, l, o, u, i, s) {
  Ct = !1, Mr = null, Gc.apply(Zc, arguments);
}
function qc(e, n, t, r, l, o, u, i, s) {
  if (Jc.apply(this, arguments), Ct) {
    if (Ct) {
      var c = Mr;
      Ct = !1, Mr = null;
    } else
      throw Error(y(198));
    Dr || (Dr = !0, co = c);
  }
}
function Rn(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function zs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function Gu(e) {
  if (Rn(e) !== e)
    throw Error(y(188));
}
function bc(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Rn(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t)
          return Gu(l), e;
        if (o === r)
          return Gu(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = o;
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === t) {
          u = !0, t = l, r = o;
          break;
        }
        if (i === r) {
          u = !0, r = l, t = o;
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === t) {
            u = !0, t = o, r = l;
            break;
          }
          if (i === r) {
            u = !0, r = o, t = l;
            break;
          }
          i = i.sibling;
        }
        if (!u)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Ts(e) {
  return e = bc(e), e !== null ? Ls(e) : null;
}
function Ls(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = Ls(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var Rs = ye.unstable_scheduleCallback, Zu = ye.unstable_cancelCallback, ef = ye.unstable_shouldYield, nf = ye.unstable_requestPaint, W = ye.unstable_now, tf = ye.unstable_getCurrentPriorityLevel, bo = ye.unstable_ImmediatePriority, Os = ye.unstable_UserBlockingPriority, jr = ye.unstable_NormalPriority, rf = ye.unstable_LowPriority, Ms = ye.unstable_IdlePriority, ll = null, Fe = null;
function lf(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Re = Math.clz32 ? Math.clz32 : sf, of = Math.log, uf = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (of(e) / uf | 0) | 0;
}
var ur = 64, ir = 4194304;
function St(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? r = St(i) : (o &= u, o !== 0 && (r = St(o)));
  } else
    u = t & ~l, u !== 0 ? r = St(u) : o !== 0 && (r = St(o));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
    return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Re(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function af(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Re(o), i = 1 << u, s = l[u];
    s === -1 ? (!(i & t) || i & r) && (l[u] = af(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
  }
}
function fo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ds() {
  var e = ur;
  return ur <<= 1, !(ur & 4194240) && (ur = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function Zt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Re(n), e[n] = t;
}
function ff(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Re(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function eu(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function js(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Is, nu, Fs, Us, $s, po = !1, sr = [], tn = null, rn = null, ln = null, jt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), qe = [], df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ju(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      jt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = qt(n), n !== null && nu(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function pf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return tn = dt(tn, e, n, t, r, l), !0;
    case "dragenter":
      return rn = dt(rn, e, n, t, r, l), !0;
    case "mouseover":
      return ln = dt(ln, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return jt.set(o, dt(jt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, It.set(o, dt(It.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function As(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = Rn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = zs(t), n !== null) {
          e.blockedOn = n, $s(e.priority, function() {
            Fs(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = mo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      io = r, t.target.dispatchEvent(r), io = null;
    } else
      return n = qt(t), n !== null && nu(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function qu(e, n, t) {
  Er(e) && t.delete(n);
}
function mf() {
  po = !1, tn !== null && Er(tn) && (tn = null), rn !== null && Er(rn) && (rn = null), ln !== null && Er(ln) && (ln = null), jt.forEach(qu), It.forEach(qu);
}
function pt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, po || (po = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, mf)));
}
function Ft(e) {
  function n(l) {
    return pt(l, e);
  }
  if (0 < sr.length) {
    pt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tn !== null && pt(tn, e), rn !== null && pt(rn, e), ln !== null && pt(ln, e), jt.forEach(n), It.forEach(n), t = 0; t < qe.length; t++)
    r = qe[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && (t = qe[0], t.blockedOn === null); )
    As(t), t.blockedOn === null && qe.shift();
}
var Gn = Xe.ReactCurrentBatchConfig, Fr = !0;
function hf(e, n, t, r) {
  var l = O, o = Gn.transition;
  Gn.transition = null;
  try {
    O = 1, tu(e, n, t, r);
  } finally {
    O = l, Gn.transition = o;
  }
}
function vf(e, n, t, r) {
  var l = O, o = Gn.transition;
  Gn.transition = null;
  try {
    O = 4, tu(e, n, t, r);
  } finally {
    O = l, Gn.transition = o;
  }
}
function tu(e, n, t, r) {
  if (Fr) {
    var l = mo(e, n, t, r);
    if (l === null)
      Fl(e, n, r, Ur, t), Ju(e, r);
    else if (pf(l, e, n, t, r))
      r.stopPropagation();
    else if (Ju(e, r), n & 4 && -1 < df.indexOf(e)) {
      for (; l !== null; ) {
        var o = qt(l);
        if (o !== null && Is(o), o = mo(e, n, t, r), o === null && Fl(e, n, r, Ur, t), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Fl(e, n, r, null, t);
  }
}
var Ur = null;
function mo(e, n, t, r) {
  if (Ur = null, e = qo(r), e = Sn(e), e !== null)
    if (n = Rn(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = zs(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return Ur = e, null;
}
function Vs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tf()) {
        case bo:
          return 1;
        case Os:
          return 4;
        case jr:
        case rf:
          return 16;
        case Ms:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null, ru = null, Cr = null;
function Bs() {
  if (Cr)
    return Cr;
  var e, n = ru, t = n.length, r, l = "value" in en ? en.value : en.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[o - r]; r++)
    ;
  return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function bu() {
  return !1;
}
function we(e) {
  function n(t, r, l, o, u) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
    for (var i in e)
      e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : bu, this.isPropagationStopped = bu, this;
  }
  return A(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ar);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ar);
  }, persist: function() {
  }, isPersistent: ar }), n;
}
var ut = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, lu = we(ut), Jt = A({}, ut, { view: 0, detail: 0 }), yf = we(Jt), zl, Tl, mt, ol = A({}, Jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ou, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mt && (mt && e.type === "mousemove" ? (zl = e.screenX - mt.screenX, Tl = e.screenY - mt.screenY) : Tl = zl = 0, mt = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), ei = we(ol), gf = A({}, ol, { dataTransfer: 0 }), wf = we(gf), Sf = A({}, Jt, { relatedTarget: 0 }), Ll = we(Sf), kf = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = we(kf), Cf = A({}, ut, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), _f = we(Cf), xf = A({}, ut, { data: 0 }), ni = we(xf), Pf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = zf[e]) ? !!n[e] : !1;
}
function ou() {
  return Tf;
}
var Lf = A({}, Jt, { key: function(e) {
  if (e.key) {
    var n = Pf[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ou, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = we(Lf), Of = A({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ti = we(Of), Mf = A({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ou }), Df = we(Mf), jf = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), If = we(jf), Ff = A({}, ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = we(Ff), $f = [9, 13, 27, 32], uu = We && "CompositionEvent" in window, _t = null;
We && "documentMode" in document && (_t = document.documentMode);
var Af = We && "TextEvent" in window && !_t, Hs = We && (!uu || _t && 8 < _t && 11 >= _t), ri = String.fromCharCode(32), li = !1;
function Ws(e, n) {
  switch (e) {
    case "keyup":
      return $f.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function Vf(e, n) {
  switch (e) {
    case "compositionend":
      return Qs(n);
    case "keypress":
      return n.which !== 32 ? null : (li = !0, ri);
    case "textInput":
      return e = n.data, e === ri && li ? null : e;
    default:
      return null;
  }
}
function Bf(e, n) {
  if (jn)
    return e === "compositionend" || !uu && Ws(e, n) ? (e = Bs(), Cr = ru = en = null, jn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Hs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Hf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function oi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Hf[e.type] : n === "textarea";
}
function Ks(e, n, t, r) {
  Cs(r), n = $r(n, "onChange"), 0 < n.length && (t = new lu("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var xt = null, Ut = null;
function Wf(e) {
  ra(e, 0);
}
function ul(e) {
  var n = Un(e);
  if (vs(n))
    return e;
}
function Qf(e, n) {
  if (e === "change")
    return n;
}
var Ys = !1;
if (We) {
  var Rl;
  if (We) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var ui = document.createElement("div");
      ui.setAttribute("oninput", "return;"), Ol = typeof ui.oninput == "function";
    }
    Rl = Ol;
  } else
    Rl = !1;
  Ys = Rl && (!document.documentMode || 9 < document.documentMode);
}
function ii() {
  xt && (xt.detachEvent("onpropertychange", Xs), Ut = xt = null);
}
function Xs(e) {
  if (e.propertyName === "value" && ul(Ut)) {
    var n = [];
    Ks(n, Ut, e, qo(e)), Ns(Wf, n);
  }
}
function Kf(e, n, t) {
  e === "focusin" ? (ii(), xt = n, Ut = t, xt.attachEvent("onpropertychange", Xs)) : e === "focusout" && ii();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ul(Ut);
}
function Xf(e, n) {
  if (e === "click")
    return ul(n);
}
function Gf(e, n) {
  if (e === "input" || e === "change")
    return ul(n);
}
function Zf(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Me = typeof Object.is == "function" ? Object.is : Zf;
function $t(e, n) {
  if (Me(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Gl.call(n, l) || !Me(e[l], n[l]))
      return !1;
  }
  return !0;
}
function si(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function ai(e, n) {
  var t = si(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = si(t);
  }
}
function Gs(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Gs(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function Zs() {
  for (var e = window, n = Or(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = Or(e.document);
  }
  return n;
}
function iu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Jf(e) {
  var n = Zs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Gs(t.ownerDocument.documentElement, t)) {
    if (r !== null && iu(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ai(t, o);
        var u = ai(
          t,
          r
        );
        l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var qf = We && "documentMode" in document && 11 >= document.documentMode, In = null, ho = null, Pt = null, vo = !1;
function ci(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  vo || In == null || In !== Or(r) || (r = In, "selectionStart" in r && iu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pt && $t(Pt, r) || (Pt = r, r = $r(ho, "onSelect"), 0 < r.length && (n = new lu("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = In)));
}
function cr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Fn = { animationend: cr("Animation", "AnimationEnd"), animationiteration: cr("Animation", "AnimationIteration"), animationstart: cr("Animation", "AnimationStart"), transitionend: cr("Transition", "TransitionEnd") }, Ml = {}, Js = {};
We && (Js = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function il(e) {
  if (Ml[e])
    return Ml[e];
  if (!Fn[e])
    return e;
  var n = Fn[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in Js)
      return Ml[e] = n[t];
  return e;
}
var qs = il("animationend"), bs = il("animationiteration"), ea = il("animationstart"), na = il("transitionend"), ta = /* @__PURE__ */ new Map(), fi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, n) {
  ta.set(e, n), Ln(n, [e]);
}
for (var Dl = 0; Dl < fi.length; Dl++) {
  var jl = fi[Dl], bf = jl.toLowerCase(), ed = jl[0].toUpperCase() + jl.slice(1);
  pn(bf, "on" + ed);
}
pn(qs, "onAnimationEnd");
pn(bs, "onAnimationIteration");
pn(ea, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(na, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));
function di(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, qc(r, n, void 0, e), e.currentTarget = null;
}
function ra(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, c = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped())
            break e;
          di(l, i, c), o = s;
        }
      else
        for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, c = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped())
            break e;
          di(l, i, c), o = s;
        }
    }
  }
  if (Dr)
    throw e = co, Dr = !1, co = null, e;
}
function D(e, n) {
  var t = n[ko];
  t === void 0 && (t = n[ko] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (la(n, e, 2, !1), t.add(r));
}
function Il(e, n, t) {
  var r = 0;
  n && (r |= 4), la(t, e, r, n);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[fr]) {
    e[fr] = !0, fs.forEach(function(t) {
      t !== "selectionchange" && (nd.has(t) || Il(t, !1, e), Il(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[fr] || (n[fr] = !0, Il("selectionchange", !1, n));
  }
}
function la(e, n, t, r) {
  switch (Vs(n)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = tu;
  }
  t = l.bind(null, n, t, e), l = void 0, !ao || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Fl(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || i.nodeType === 8 && i.parentNode === l)
            break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              u = u.return;
            }
          for (; i !== null; ) {
            if (u = Sn(i), u === null)
              return;
            if (s = u.tag, s === 5 || s === 6) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
  Ns(function() {
    var c = o, m = qo(t), h = [];
    e: {
      var p = ta.get(e);
      if (p !== void 0) {
        var g = lu, w = e;
        switch (e) {
          case "keypress":
            if (_r(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = Rf;
            break;
          case "focusin":
            w = "focus", g = Ll;
            break;
          case "focusout":
            w = "blur", g = Ll;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ei;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Df;
            break;
          case qs:
          case bs:
          case ea:
            g = Ef;
            break;
          case na:
            g = If;
            break;
          case "scroll":
            g = yf;
            break;
          case "wheel":
            g = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = _f;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ti;
        }
        var S = (n & 4) !== 0, I = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Dt(a, f), v != null && S.push(Vt(a, v, d)))), I)
            break;
          a = a.return;
        }
        0 < S.length && (p = new g(p, w, null, t, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== io && (w = t.relatedTarget || t.fromElement) && (Sn(w) || w[Qe]))
          break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? Sn(w) : null, w !== null && (I = Rn(w), w !== I || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (S = ei, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = ti, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = g == null ? p : Un(g), d = w == null ? p : Un(w), p = new S(v, a + "leave", g, t, m), p.target = I, p.relatedTarget = d, v = null, Sn(m) === c && (S = new S(f, a + "enter", w, t, m), S.target = d, S.relatedTarget = I, v = S), I = v, g && w)
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = On(d))
                a++;
              for (d = 0, v = f; v; v = On(v))
                d++;
              for (; 0 < a - d; )
                S = On(S), a--;
              for (; 0 < d - a; )
                f = On(f), d--;
              for (; a--; ) {
                if (S === f || f !== null && S === f.alternate)
                  break n;
                S = On(S), f = On(f);
              }
              S = null;
            }
          else
            S = null;
          g !== null && pi(h, p, g, S, !1), w !== null && I !== null && pi(h, I, w, S, !0);
        }
      }
      e: {
        if (p = c ? Un(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = Qf;
        else if (oi(p))
          if (Ys)
            E = Gf;
          else {
            E = Yf;
            var _ = Kf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Xf);
        if (E && (E = E(e, c))) {
          Ks(h, E, t, m);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && to(p, "number", p.value);
      }
      switch (_ = c ? Un(c) : window, e) {
        case "focusin":
          (oi(_) || _.contentEditable === "true") && (In = _, ho = c, Pt = null);
          break;
        case "focusout":
          Pt = ho = In = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vo = !1, ci(h, t, m);
          break;
        case "selectionchange":
          if (qf)
            break;
        case "keydown":
        case "keyup":
          ci(h, t, m);
      }
      var x;
      if (uu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        jn ? Ws(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Hs && t.locale !== "ko" && (jn || P !== "onCompositionStart" ? P === "onCompositionEnd" && jn && (x = Bs()) : (en = m, ru = "value" in en ? en.value : en.textContent, jn = !0)), _ = $r(c, P), 0 < _.length && (P = new ni(P, e, null, t, m), h.push({ event: P, listeners: _ }), x ? P.data = x : (x = Qs(t), x !== null && (P.data = x)))), (x = Af ? Vf(e, t) : Bf(e, t)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (m = new ni("onBeforeInput", "beforeinput", null, t, m), h.push({ event: m, listeners: c }), m.data = x));
    }
    ra(h, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = Dt(e, t), o != null && r.unshift(Vt(e, o, l)), o = Dt(e, n), o != null && r.push(Vt(e, o, l))), e = e.return;
  }
  return r;
}
function On(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pi(e, n, t, r, l) {
  for (var o = n._reactName, u = []; t !== null && t !== r; ) {
    var i = t, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r)
      break;
    i.tag === 5 && c !== null && (i = c, l ? (s = Dt(t, o), s != null && u.unshift(Vt(t, s, i))) : l || (s = Dt(t, o), s != null && u.push(Vt(t, s, i)))), t = t.return;
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var td = /\r\n?/g, rd = /\u0000|\uFFFD/g;
function mi(e) {
  return (typeof e == "string" ? e : "" + e).replace(td, `
`).replace(rd, "");
}
function dr(e, n, t) {
  if (n = mi(n), mi(e) !== n && t)
    throw Error(y(425));
}
function Ar() {
}
var yo = null, go = null;
function wo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var So = typeof setTimeout == "function" ? setTimeout : void 0, ld = typeof clearTimeout == "function" ? clearTimeout : void 0, hi = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof hi < "u" ? function(e) {
  return hi.resolve(null).then(e).catch(ud);
} : So;
function ud(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Ft(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Ft(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function vi(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var it = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + it, Bt = "__reactProps$" + it, Qe = "__reactContainer$" + it, ko = "__reactEvents$" + it, id = "__reactListeners$" + it, sd = "__reactHandles$" + it;
function Sn(e) {
  var n = e[Ie];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Qe] || t[Ie]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = vi(e); e !== null; ) {
          if (t = e[Ie])
            return t;
          e = vi(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function qt(e) {
  return e = e[Ie] || e[Qe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[Bt] || null;
}
var Eo = [], $n = -1;
function mn(e) {
  return { current: e };
}
function j(e) {
  0 > $n || (e.current = Eo[$n], Eo[$n] = null, $n--);
}
function M(e, n) {
  $n++, Eo[$n] = e.current, e.current = n;
}
var dn = {}, re = mn(dn), fe = mn(!1), xn = dn;
function bn(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t)
    l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Vr() {
  j(fe), j(re);
}
function yi(e, n, t) {
  if (re.current !== dn)
    throw Error(y(168));
  M(re, n), M(fe, t);
}
function oa(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, Qc(e) || "Unknown", l));
  return A({}, t, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, xn = re.current, M(re, e), M(fe, fe.current), !0;
}
function gi(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = oa(e, n, xn), r.__reactInternalMemoizedMergedChildContext = e, j(fe), j(re), M(re, e)) : j(fe), M(fe, t);
}
var Ae = null, al = !1, $l = !1;
function ua(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
function ad(e) {
  al = !0, ua(e);
}
function hn() {
  if (!$l && Ae !== null) {
    $l = !0;
    var e = 0, n = O;
    try {
      var t = Ae;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ae = null, al = !1;
    } catch (l) {
      throw Ae !== null && (Ae = Ae.slice(e + 1)), Rs(bo, hn), l;
    } finally {
      O = n, $l = !1;
    }
  }
  return null;
}
var An = [], Vn = 0, Hr = null, Wr = 0, Se = [], ke = 0, Pn = null, Ve = 1, Be = "";
function gn(e, n) {
  An[Vn++] = Wr, An[Vn++] = Hr, Hr = e, Wr = n;
}
function ia(e, n, t) {
  Se[ke++] = Ve, Se[ke++] = Be, Se[ke++] = Pn, Pn = e;
  var r = Ve;
  e = Be;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Re(n) + l;
  if (30 < o) {
    var u = l - l % 5;
    o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, Ve = 1 << 32 - Re(n) + l | t << l | r, Be = o + e;
  } else
    Ve = 1 << o | t << l | r, Be = e;
}
function su(e) {
  e.return !== null && (gn(e, 1), ia(e, 1, 0));
}
function au(e) {
  for (; e === Hr; )
    Hr = An[--Vn], An[Vn] = null, Wr = An[--Vn], An[Vn] = null;
  for (; e === Pn; )
    Pn = Se[--ke], Se[ke] = null, Be = Se[--ke], Se[ke] = null, Ve = Se[--ke], Se[ke] = null;
}
var ve = null, he = null, F = !1, Le = null;
function sa(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function wi(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, he = on(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, he = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Pn !== null ? { id: Ve, overflow: Be } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, he = null, !0) : !1;
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _o(e) {
  if (F) {
    var n = he;
    if (n) {
      var t = n;
      if (!wi(e, n)) {
        if (Co(e))
          throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && wi(e, n) ? sa(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, ve = e);
      }
    } else {
      if (Co(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, F = !1, ve = e;
    }
  }
}
function Si(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve)
    return !1;
  if (!F)
    return Si(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps)), n && (n = he)) {
    if (Co(e))
      throw aa(), Error(y(418));
    for (; n; )
      sa(e, n), n = on(n.nextSibling);
  }
  if (Si(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else
    he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function aa() {
  for (var e = he; e; )
    e = on(e.nextSibling);
}
function et() {
  he = ve = null, F = !1;
}
function cu(e) {
  Le === null ? Le = [e] : Le.push(e);
}
var cd = Xe.ReactCurrentBatchConfig;
function ze(e, n) {
  if (e && e.defaultProps) {
    n = A({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Qr = mn(null), Kr = null, Bn = null, fu = null;
function du() {
  fu = Bn = Kr = null;
}
function pu(e) {
  var n = Qr.current;
  j(Qr), e._currentValue = n;
}
function xo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Zn(e, n) {
  Kr = e, fu = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function _e(e) {
  var n = e._currentValue;
  if (fu !== e)
    if (e = { context: e, memoizedValue: n, next: null }, Bn === null) {
      if (Kr === null)
        throw Error(y(308));
      Bn = e, Kr.dependencies = { lanes: 0, firstContext: e };
    } else
      Bn = Bn.next = e;
  return n;
}
var kn = null;
function mu(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function ca(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, mu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ke(e, r);
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function hu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fa(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function He(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ke(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, mu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ke(e, t);
}
function xr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, eu(e, t);
  }
}
function ki(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = u : o = o.next = u, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else
      l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Yr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, u === null ? o = c : u.next = c, u = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== u && (i === null ? m.firstBaseUpdate = c : i.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    u = 0, m = c = s = null, i = o;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, S = i;
          switch (p = n, g = t, S.tag) {
            case 1:
              if (w = S.payload, typeof w == "function") {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = S.payload, p = typeof w == "function" ? w.call(g, h, p) : w, p == null)
                break e;
              h = A({}, h, p);
              break e;
            case 2:
              Je = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else
        g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (c = m = g, s = h) : m = m.next = g, u |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null)
          break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        u |= l.lane, l = l.next;
      while (l !== n);
    } else
      o === null && (l.shared.lanes = 0);
    zn |= u, e.lanes = u, e.memoizedState = h;
  }
}
function Ei(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var da = new cs.Component().refs;
function Po(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : A({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Rn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = an(e), o = He(r, l);
  o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Oe(n, e, l, r), xr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = oe(), l = an(e), o = He(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Oe(n, e, l, r), xr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = oe(), r = an(e), l = He(t, r);
  l.tag = 2, n != null && (l.callback = n), n = un(e, l, r), n !== null && (Oe(n, e, r, t), xr(n, e, r));
} };
function Ci(e, n, t, r, l, o, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !$t(t, r) || !$t(l, o) : !0;
}
function pa(e, n, t) {
  var r = !1, l = dn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = _e(o) : (l = de(n) ? xn : re.current, r = n.contextTypes, o = (r = r != null) ? bn(e, l) : dn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function _i(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = da, hu(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = _e(o) : (o = de(n) ? xn : re.current, l.context = bn(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Po(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && cl.enqueueReplaceState(l, l.state, null), Yr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ht(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
        var i = l.refs;
        i === da && (i = l.refs = {}), u === null ? delete i[o] : i[o] = u;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function xi(e) {
  var n = e._init;
  return n(e._payload);
}
function ma(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = cn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Dn ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && xi(E) === a.type) ? (v = l(a, d.props), v.ref = ht(f, a, d), v.return = f, v) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = ht(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = _n(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return d = Rr(a.type, a.key, a.props, null, f.mode, d), d.ref = ht(f, null, a), d.return = f, d;
        case Mn:
          return a = Yl(a, f.mode, d), a.return = f, a;
        case Ze:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (wt(a) || ct(a))
        return a = _n(a, f.mode, d, null), a.return = f, a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case Mn:
          return d.key === E ? c(f, a, d, v) : null;
        case Ze:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (wt(d) || ct(d))
        return E !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Mn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Ze:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (wt(v) || ct(v))
        return f = f.get(d) || null, m(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, _ = null, x = a, P = a = 0, B = null; x !== null && P < d.length; P++) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var L = p(f, x, d[P], v);
      if (L === null) {
        x === null && (x = B);
        break;
      }
      e && x && L.alternate === null && n(f, x), a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L, x = B;
    }
    if (P === d.length)
      return t(f, x), F && gn(f, P), E;
    if (x === null) {
      for (; P < d.length; P++)
        x = h(f, d[P], v), x !== null && (a = o(x, a, P), _ === null ? E = x : _.sibling = x, _ = x);
      return F && gn(f, P), E;
    }
    for (x = r(f, x); P < d.length; P++)
      B = g(x, f, P, d[P], v), B !== null && (e && B.alternate !== null && x.delete(B.key === null ? P : B.key), a = o(B, a, P), _ === null ? E = B : _.sibling = B, _ = B);
    return e && x.forEach(function(Pe) {
      return n(f, Pe);
    }), F && gn(f, P), E;
  }
  function S(f, a, d, v) {
    var E = ct(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var _ = E = null, x = a, P = a = 0, B = null, L = d.next(); x !== null && !L.done; P++, L = d.next()) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var Pe = p(f, x, L.value, v);
      if (Pe === null) {
        x === null && (x = B);
        break;
      }
      e && x && Pe.alternate === null && n(f, x), a = o(Pe, a, P), _ === null ? E = Pe : _.sibling = Pe, _ = Pe, x = B;
    }
    if (L.done)
      return t(
        f,
        x
      ), F && gn(f, P), E;
    if (x === null) {
      for (; !L.done; P++, L = d.next())
        L = h(f, L.value, v), L !== null && (a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
      return F && gn(f, P), E;
    }
    for (x = r(f, x); !L.done; P++, L = d.next())
      L = g(x, f, P, L.value, v), L !== null && (e && L.alternate !== null && x.delete(L.key === null ? P : L.key), a = o(L, a, P), _ === null ? E = L : _.sibling = L, _ = L);
    return e && x.forEach(function(st) {
      return n(f, st);
    }), F && gn(f, P), E;
  }
  function I(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Dn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === Dn) {
                  if (_.tag === 7) {
                    t(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && xi(E) === _.type) {
                  t(f, _.sibling), a = l(_, d.props), a.ref = ht(f, _, d), a.return = f, f = a;
                  break e;
                }
                t(f, _);
                break;
              } else
                n(f, _);
              _ = _.sibling;
            }
            d.type === Dn ? (a = _n(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = ht(f, a, d), v.return = f, f = v);
          }
          return u(f);
        case Mn:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = Yl(d, f.mode, v), a.return = f, f = a;
          }
          return u(f);
        case Ze:
          return _ = d._init, I(f, a, _(d._payload), v);
      }
      if (wt(d))
        return w(f, a, d, v);
      if (ct(d))
        return S(f, a, d, v);
      mr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Kl(d, f.mode, v), a.return = f, f = a), u(f)) : t(f, a);
  }
  return I;
}
var nt = ma(!0), ha = ma(!1), bt = {}, Ue = mn(bt), Ht = mn(bt), Wt = mn(bt);
function En(e) {
  if (e === bt)
    throw Error(y(174));
  return e;
}
function vu(e, n) {
  switch (M(Wt, n), M(Ht, e), M(Ue, bt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = lo(n, e);
  }
  j(Ue), M(Ue, n);
}
function tt() {
  j(Ue), j(Ht), j(Wt);
}
function va(e) {
  En(Wt.current);
  var n = En(Ue.current), t = lo(n, e.type);
  n !== t && (M(Ht, e), M(Ue, t));
}
function yu(e) {
  Ht.current === e && (j(Ue), j(Ht));
}
var U = mn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var Al = [];
function gu() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Pr = Xe.ReactCurrentDispatcher, Vl = Xe.ReactCurrentBatchConfig, Nn = 0, $ = null, K = null, G = null, Gr = !1, Nt = !1, Qt = 0, fd = 0;
function ee() {
  throw Error(y(321));
}
function wu(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Me(e[t], n[t]))
      return !1;
  return !0;
}
function Su(e, n, t, r, l, o) {
  if (Nn = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Pr.current = e === null || e.memoizedState === null ? hd : vd, e = t(r, l), Nt) {
    o = 0;
    do {
      if (Nt = !1, Qt = 0, 25 <= o)
        throw Error(y(301));
      o += 1, G = K = null, n.updateQueue = null, Pr.current = yd, e = t(r, l);
    } while (Nt);
  }
  if (Pr.current = Zr, n = K !== null && K.next !== null, Nn = 0, G = K = $ = null, Gr = !1, n)
    throw Error(y(300));
  return e;
}
function ku() {
  var e = Qt !== 0;
  return Qt = 0, e;
}
function je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return G === null ? $.memoizedState = G = e : G = G.next = e, G;
}
function xe() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var n = G === null ? $.memoizedState : G.next;
  if (n !== null)
    G = n, K = e;
  else {
    if (e === null)
      throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, G === null ? $.memoizedState = G = e : G = G.next = e;
  }
  return G;
}
function Kt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Bl(e) {
  var n = xe(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = K, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      l.next = o.next, o.next = u;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = u = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Nn & m) === m)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = h, u = r) : s = s.next = h, $.lanes |= m, zn |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? u = r : s.next = i, Me(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, $.lanes |= o, zn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = xe(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = l = l.next;
    do
      o = e(o, u.action), u = u.next;
    while (u !== l);
    Me(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ya() {
}
function ga(e, n) {
  var t = $, r = xe(), l = n(), o = !Me(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, Eu(ka.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || G !== null && G.memoizedState.tag & 1) {
    if (t.flags |= 2048, Yt(9, Sa.bind(null, t, r, l, n), void 0, null), Z === null)
      throw Error(y(349));
    Nn & 30 || wa(t, n, l);
  }
  return l;
}
function wa(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Sa(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ea(n) && Ca(e);
}
function ka(e, n, t) {
  return t(function() {
    Ea(n) && Ca(e);
  });
}
function Ea(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Me(e, t);
  } catch {
    return !0;
  }
}
function Ca(e) {
  var n = Ke(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function Pi(e) {
  var n = je();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kt, lastRenderedState: e }, n.queue = e, e = e.dispatch = md.bind(null, $, e), [n.memoizedState, e];
}
function Yt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function _a() {
  return xe().memoizedState;
}
function Nr(e, n, t, r) {
  var l = je();
  $.flags |= e, l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r);
}
function fl(e, n, t, r) {
  var l = xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var u = K.memoizedState;
    if (o = u.destroy, r !== null && wu(r, u.deps)) {
      l.memoizedState = Yt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Yt(1 | n, t, o, r);
}
function Ni(e, n) {
  return Nr(8390656, 8, e, n);
}
function Eu(e, n) {
  return fl(2048, 8, e, n);
}
function xa(e, n) {
  return fl(4, 2, e, n);
}
function Pa(e, n) {
  return fl(4, 4, e, n);
}
function Na(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function za(e, n, t) {
  return t = t != null ? t.concat([e]) : null, fl(4, 4, Na.bind(null, n, e), t);
}
function Cu() {
}
function Ta(e, n) {
  var t = xe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function La(e, n) {
  var t = xe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ra(e, n, t) {
  return Nn & 21 ? (Me(t, n) || (t = Ds(), $.lanes |= t, zn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function dd(e, n) {
  var t = O;
  O = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), n();
  } finally {
    O = t, Vl.transition = r;
  }
}
function Oa() {
  return xe().memoizedState;
}
function pd(e, n, t) {
  var r = an(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ma(e))
    Da(n, t);
  else if (t = ca(e, n, t, r), t !== null) {
    var l = oe();
    Oe(t, e, r, l), ja(t, n, r);
  }
}
function md(e, n, t) {
  var r = an(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ma(e))
    Da(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
      try {
        var u = n.lastRenderedState, i = o(u, t);
        if (l.hasEagerState = !0, l.eagerState = i, Me(i, u)) {
          var s = n.interleaved;
          s === null ? (l.next = l, mu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ca(e, n, l, r), t !== null && (l = oe(), Oe(t, e, r, l), ja(t, n, r));
  }
}
function Ma(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function Da(e, n) {
  Nt = Gr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function ja(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, eu(e, t);
  }
}
var Zr = { readContext: _e, useCallback: ee, useContext: ee, useEffect: ee, useImperativeHandle: ee, useInsertionEffect: ee, useLayoutEffect: ee, useMemo: ee, useReducer: ee, useRef: ee, useState: ee, useDebugValue: ee, useDeferredValue: ee, useTransition: ee, useMutableSource: ee, useSyncExternalStore: ee, useId: ee, unstable_isNewReconciler: !1 }, hd = { readContext: _e, useCallback: function(e, n) {
  return je().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: _e, useEffect: Ni, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Nr(
    4194308,
    4,
    Na.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Nr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Nr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = je();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = je();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = pd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = je();
  return e = { current: e }, n.memoizedState = e;
}, useState: Pi, useDebugValue: Cu, useDeferredValue: function(e) {
  return je().memoizedState = e;
}, useTransition: function() {
  var e = Pi(!1), n = e[0];
  return e = dd.bind(null, e[1]), je().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = je();
  if (F) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), Z === null)
      throw Error(y(349));
    Nn & 30 || wa(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Ni(ka.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Yt(9, Sa.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = je(), n = Z.identifierPrefix;
  if (F) {
    var t = Be, r = Ve;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Qt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = fd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, vd = {
  readContext: _e,
  useCallback: Ta,
  useContext: _e,
  useEffect: Eu,
  useImperativeHandle: za,
  useInsertionEffect: xa,
  useLayoutEffect: Pa,
  useMemo: La,
  useReducer: Bl,
  useRef: _a,
  useState: function() {
    return Bl(Kt);
  },
  useDebugValue: Cu,
  useDeferredValue: function(e) {
    var n = xe();
    return Ra(n, K.memoizedState, e);
  },
  useTransition: function() {
    var e = Bl(Kt)[0], n = xe().memoizedState;
    return [e, n];
  },
  useMutableSource: ya,
  useSyncExternalStore: ga,
  useId: Oa,
  unstable_isNewReconciler: !1
}, yd = { readContext: _e, useCallback: Ta, useContext: _e, useEffect: Eu, useImperativeHandle: za, useInsertionEffect: xa, useLayoutEffect: Pa, useMemo: La, useReducer: Hl, useRef: _a, useState: function() {
  return Hl(Kt);
}, useDebugValue: Cu, useDeferredValue: function(e) {
  var n = xe();
  return K === null ? n.memoizedState = e : Ra(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Kt)[0], n = xe().memoizedState;
  return [e, n];
}, useMutableSource: ya, useSyncExternalStore: ga, useId: Oa, unstable_isNewReconciler: !1 };
function rt(e, n) {
  try {
    var t = "", r = n;
    do
      t += Wc(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function zo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Ia(e, n, t) {
  t = He(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    qr || (qr = !0, Uo = r), zo(e, n);
  }, t;
}
function Fa(e, n, t) {
  t = He(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      zo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    zo(e, n), typeof r != "function" && (sn === null ? sn = /* @__PURE__ */ new Set([this]) : sn.add(this));
    var u = n.stack;
    this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
  }), t;
}
function zi(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Od.bind(null, e, n, t), n.then(e, e));
}
function Ti(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Li(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = He(-1, 1), n.tag = 2, un(t, n, 1))), t.lanes |= 1), e);
}
var wd = Xe.ReactCurrentOwner, ce = !1;
function le(e, n, t, r) {
  n.child = e === null ? ha(n, null, t, r) : nt(n, e.child, t, r);
}
function Ri(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Zn(n, l), r = Su(e, n, t, r, o, l), t = ku(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && t && su(n), n.flags |= 1, le(e, n, r, l), n.child);
}
function Oi(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ru(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ua(e, n, o, r, l)) : (e = Rr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var u = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : $t, t(u, r) && e.ref === n.ref)
      return Ye(e, n, l);
  }
  return n.flags |= 1, e = cn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ua(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($t(o, r) && e.ref === n.ref)
      if (ce = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (ce = !0);
      else
        return n.lanes = e.lanes, Ye(e, n, l);
  }
  return To(e, n, t, r, l);
}
function $a(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Wn, me), me |= t;
    else {
      if (!(t & 1073741824))
        return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, M(Wn, me), me |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, M(Wn, me), me |= r;
    }
  else
    o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, M(Wn, me), me |= r;
  return le(e, n, l, t), n.child;
}
function Aa(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function To(e, n, t, r, l) {
  var o = de(t) ? xn : re.current;
  return o = bn(n, o), Zn(n, l), t = Su(e, n, t, r, o, l), r = ku(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && r && su(n), n.flags |= 1, le(e, n, t, l), n.child);
}
function Mi(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    Br(n);
  } else
    o = !1;
  if (Zn(n, l), n.stateNode === null)
    zr(e, n), pa(n, t, r), No(n, t, r, l), r = !0;
  else if (e === null) {
    var u = n.stateNode, i = n.memoizedProps;
    u.props = i;
    var s = u.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = _e(c) : (c = de(t) ? xn : re.current, c = bn(n, c));
    var m = t.getDerivedStateFromProps, h = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== c) && _i(n, u, r, c), Je = !1;
    var p = n.memoizedState;
    u.state = p, Yr(n, r, u, l), s = n.memoizedState, i !== r || p !== s || fe.current || Je ? (typeof m == "function" && (Po(n, t, m, r), s = n.memoizedState), (i = Je || Ci(n, t, i, r, p, s, c)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = c, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    u = n.stateNode, fa(e, n), i = n.memoizedProps, c = n.type === n.elementType ? i : ze(n.type, i), u.props = c, h = n.pendingProps, p = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = de(t) ? xn : re.current, s = bn(n, s));
    var g = t.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== h || p !== s) && _i(n, u, r, s), Je = !1, p = n.memoizedState, u.state = p, Yr(n, r, u, l);
    var w = n.memoizedState;
    i !== h || p !== w || fe.current || Je ? (typeof g == "function" && (Po(n, t, g, r), w = n.memoizedState), (c = Je || Ci(n, t, c, r, p, w, s) || !1) ? (m || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, w, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, w, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), u.props = r, u.state = w, u.context = s, r = c) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Lo(e, n, t, r, o, l);
}
function Lo(e, n, t, r, l, o) {
  Aa(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u)
    return l && gi(n, t, !1), Ye(e, n, o);
  r = n.stateNode, wd.current = n;
  var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && u ? (n.child = nt(n, e.child, null, o), n.child = nt(n, null, i, o)) : le(e, n, i, o), n.memoizedState = r.state, l && gi(n, t, !0), n.child;
}
function Va(e) {
  var n = e.stateNode;
  n.pendingContext ? yi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && yi(e, n.context, !1), vu(e, n.containerInfo);
}
function Di(e, n, t, r, l) {
  return et(), cu(l), n.flags |= 256, le(e, n, t, r), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, u = (n.flags & 128) !== 0, i;
  if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, l & 1), e === null)
    return _o(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = ml(u, r, 0, null), e = _n(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Oo(t), n.memoizedState = Ro, e) : _u(n, u));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
    return Sd(e, n, u, r, i, l, t);
  if (o) {
    o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = cn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = cn(i, o) : (o = _n(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? Oo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = Ro, r;
  }
  return o = e.child, e = o.sibling, r = cn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function _u(e, n) {
  return n = ml({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function hr(e, n, t, r) {
  return r !== null && cu(r), nt(n, e.child, null, t), e = _u(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Sd(e, n, t, r, l, o, u) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Wl(Error(y(422))), hr(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), o = _n(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && nt(n, e.child, null, u), n.child.memoizedState = Oo(u), n.memoizedState = Ro, o);
  if (!(n.mode & 1))
    return hr(e, n, u, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var i = r.dgst;
    return r = i, o = Error(y(419)), r = Wl(o, r, void 0), hr(e, n, u, r);
  }
  if (i = (u & e.childLanes) !== 0, ce || i) {
    if (r = Z, r !== null) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Oe(r, e, l, -1));
    }
    return Lu(), r = Wl(Error(y(421))), hr(e, n, u, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Md.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, he = on(l.nextSibling), ve = n, F = !0, Le = null, e !== null && (Se[ke++] = Ve, Se[ke++] = Be, Se[ke++] = Pn, Ve = e.id, Be = e.overflow, Pn = n), n = _u(n, r.children), n.flags |= 4096, n);
}
function ji(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xo(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ha(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (le(e, n, r.children, t), r = U.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && ji(e, t, n);
          else if (e.tag === 19)
            ji(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(U, r), !(n.mode & 1))
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && Xr(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Ql(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Xr(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Ql(n, !0, t, null, o);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Ye(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), zn |= n.lanes, !(t & n.childLanes))
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = cn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function kd(e, n, t) {
  switch (n.tag) {
    case 3:
      Va(n), et();
      break;
    case 5:
      va(n);
      break;
    case 1:
      de(n.type) && Br(n);
      break;
    case 4:
      vu(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      M(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Ba(e, n, t) : (M(U, U.current & 1), e = Ye(e, n, t), e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ha(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, $a(e, n, t);
  }
  return Ye(e, n, t);
}
var Wa, Mo, Qa, Ka;
Wa = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Mo = function() {
};
Qa = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, En(Ue.current);
    var o = null;
    switch (t) {
      case "input":
        l = eo(e, l), r = eo(e, r), o = [];
        break;
      case "select":
        l = A({}, l, { value: void 0 }), r = A({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
    }
    oo(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (u in i)
            i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ot.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null))
        if (c === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
            for (u in s)
              s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
          } else
            t || (o || (o = []), o.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ot.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || i === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ka = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function vt(e, n) {
  if (!F)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function ne(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Ed(e, n, t) {
  var r = n.pendingProps;
  switch (au(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(n), null;
    case 1:
      return de(n.type) && Vr(), ne(n), null;
    case 3:
      return r = n.stateNode, tt(), j(fe), j(re), gu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Le !== null && (Vo(Le), Le = null))), Mo(e, n), ne(n), null;
    case 5:
      yu(n);
      var l = En(Wt.current);
      if (t = n.type, e !== null && n.stateNode != null)
        Qa(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return ne(n), null;
        }
        if (e = En(Ue.current), pr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ie] = n, r[Bt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kt.length; l++)
                D(kt[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Wu(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              Ku(r, o), D("invalid", r);
          }
          oo(t, o), l = null;
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && dr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && dr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : Ot.hasOwnProperty(u) && i != null && u === "onScroll" && D("scroll", r);
            }
          switch (t) {
            case "input":
              lr(r), Qu(r, o, !0);
              break;
            case "textarea":
              lr(r), Yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ar);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ws(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[Ie] = n, e[Bt] = r, Wa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (u = uo(t, r), t) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < kt.length; l++)
                  D(kt[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Wu(e, r), l = eo(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Ku(e, r), l = ro(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            oo(t, l), i = l;
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Es(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ss(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ot.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Xo(e, o, s, u));
              }
            switch (t) {
              case "input":
                lr(e), Qu(e, r, !1);
                break;
              case "textarea":
                lr(e), Yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Kn(e, !!r.multiple, o, !1) : r.defaultValue != null && Kn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return ne(n), null;
    case 6:
      if (e && n.stateNode != null)
        Ka(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = En(Wt.current), En(Ue.current), pr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ie] = n, (o = r.nodeValue !== t) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && dr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ie] = n, n.stateNode = r;
      }
      return ne(n), null;
    case 13:
      if (j(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && he !== null && n.mode & 1 && !(n.flags & 128))
          aa(), et(), n.flags |= 98560, o = !1;
        else if (o = pr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Ie] = n;
          } else
            et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          ne(n), o = !1;
        } else
          Le !== null && (Vo(Le), Le = null), o = !0;
        if (!o)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Lu())), n.updateQueue !== null && (n.flags |= 4), ne(n), null);
    case 4:
      return tt(), Mo(e, n), e === null && At(n.stateNode.containerInfo), ne(n), null;
    case 10:
      return pu(n.type._context), ne(n), null;
    case 17:
      return de(n.type) && Vr(), ne(n), null;
    case 19:
      if (j(U), o = n.memoizedState, o === null)
        return ne(n), null;
      if (r = (n.flags & 128) !== 0, u = o.rendering, u === null)
        if (r)
          vt(o, !1);
        else {
          if (Y !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (u = Xr(e), u !== null) {
                for (n.flags |= 128, vt(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return M(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null && W() > lt && (n.flags |= 128, r = !0, vt(o, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Xr(u), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), vt(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !F)
              return ne(n), null;
          } else
            2 * W() - o.renderingStartTime > lt && t !== 1073741824 && (n.flags |= 128, r = !0, vt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = W(), n.sibling = null, t = U.current, M(U, r ? t & 1 | 2 : t & 1), n) : (ne(n), null);
    case 22:
    case 23:
      return Tu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? me & 1073741824 && (ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ne(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function Cd(e, n) {
  switch (au(n), n.tag) {
    case 1:
      return de(n.type) && Vr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return tt(), j(fe), j(re), gu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return yu(n), null;
    case 13:
      if (j(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        et();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return j(U), null;
    case 4:
      return tt(), null;
    case 10:
      return pu(n.type._context), null;
    case 22:
    case 23:
      return Tu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1, te = !1, _d = typeof WeakSet == "function" ? WeakSet : Set, k = null;
function Hn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else
      t.current = null;
}
function Do(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Ii = !1;
function xd(e, n) {
  if (yo = Fr, e = Zs(), iu(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0, i = -1, s = -1, c = 0, m = 0, h = e, p = null;
          n:
            for (; ; ) {
              for (var g; h !== t || l !== 0 && h.nodeType !== 3 || (i = u + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = u + r), h.nodeType === 3 && (u += h.nodeValue.length), (g = h.firstChild) !== null; )
                p = h, h = g;
              for (; ; ) {
                if (h === e)
                  break n;
                if (p === t && ++c === l && (i = u), p === o && ++m === r && (s = u), (g = h.nextSibling) !== null)
                  break;
                h = p, p = h.parentNode;
              }
              h = g;
            }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (go = { focusedElem: e, selectionRange: t }, Fr = !1, k = n; k !== null; )
    if (n = k, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, k = e;
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps, I = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? S : ze(n.type, S), I);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, k = e;
          break;
        }
        k = n.return;
      }
  return w = Ii, Ii = !1, w;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Do(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function jo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function Ya(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, Ya(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ie], delete n[Bt], delete n[ko], delete n[id], delete n[sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fi(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xa(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function Io(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Ar));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Io(e, n, t), e = e.sibling; e !== null; )
      Io(e, n, t), e = e.sibling;
}
function Fo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Fo(e, n, t), e = e.sibling; e !== null; )
      Fo(e, n, t), e = e.sibling;
}
var J = null, Te = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; )
    Ga(e, n, t), t = t.sibling;
}
function Ga(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(ll, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      te || Hn(t, n);
    case 6:
      var r = J, l = Te;
      J = null, Ge(e, n, t), J = r, Te = l, J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : J.removeChild(t.stateNode));
      break;
    case 18:
      J !== null && (Te ? (e = J, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), Ft(e)) : Ul(J, t.stateNode));
      break;
    case 4:
      r = J, l = Te, J = t.stateNode.containerInfo, Te = !0, Ge(e, n, t), J = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!te && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, u = o.destroy;
          o = o.tag, u !== void 0 && (o & 2 || o & 4) && Do(t, n, u), l = l.next;
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!te && (Hn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          V(t, n, i);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (te = (r = te) || t.memoizedState !== null, Ge(e, n, t), te = r) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Ui(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new _d()), n.forEach(function(r) {
      var l = Dd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, u = n, i = u;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                J = i.stateNode, Te = !1;
                break e;
              case 3:
                J = i.stateNode.containerInfo, Te = !0;
                break e;
              case 4:
                J = i.stateNode.containerInfo, Te = !0;
                break e;
            }
            i = i.return;
          }
        if (J === null)
          throw Error(y(160));
        Ga(o, u, l), J = null, Te = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        V(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      Za(n, e), n = n.sibling;
}
function Za(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), De(e), r & 4) {
        try {
          zt(3, e, e.return), dl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Ne(n, e), De(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), De(e), r & 512 && t !== null && Hn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mt(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            i === "input" && o.type === "radio" && o.name != null && ys(l, o), uo(i, u);
            var c = uo(i, o);
            for (u = 0; u < s.length; u += 2) {
              var m = s[u], h = s[u + 1];
              m === "style" ? Es(l, h) : m === "dangerouslySetInnerHTML" ? Ss(l, h) : m === "children" ? Mt(l, h) : Xo(l, m, h, c);
            }
            switch (i) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                gs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Kn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Kn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Kn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bt] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if (Ne(n, e), De(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ne(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Ft(n.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      Ne(n, e), De(e);
      break;
    case 13:
      Ne(n, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Nu = W())), r & 4 && Ui(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (te = (c = te) || m, Ne(n, e), te = c) : Ne(n, e), De(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (k = e, m = e.child; m !== null; ) {
            for (h = k = m; k !== null; ) {
              switch (p = k, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, p, p.return);
                  break;
                case 1:
                  Hn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (S) {
                      V(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Hn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ai(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, k = g) : Ai(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = h.stateNode, s = h.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = ks("display", u));
                } catch (S) {
                  V(e, e.return, S);
                }
              }
            } else if (h.tag === 6) {
              if (m === null)
                try {
                  h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                } catch (S) {
                  V(e, e.return, S);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              m === h && (m = null), h = h.return;
            }
            m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      Ne(n, e), De(e), r & 4 && Ui(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Xa(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mt(l, ""), r.flags &= -33);
          var o = Fi(e);
          Fo(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, i = Fi(e);
          Io(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Pd(e, n, t) {
  k = e, Ja(e);
}
function Ja(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k, o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || vr;
      if (!u) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || te;
        i = vr;
        var c = te;
        if (vr = u, (te = s) && !c)
          for (k = l; k !== null; )
            u = k, s = u.child, u.tag === 22 && u.memoizedState !== null ? Vi(l) : s !== null ? (s.return = u, k = s) : Vi(l);
        for (; o !== null; )
          k = o, Ja(o), o = o.sibling;
        k = l, vr = i, te = c;
      }
      $i(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, k = o) : $i(e);
  }
}
function $i(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              te || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !te)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = n.updateQueue;
              o !== null && Ei(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Ei(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Ft(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        te || n.flags & 512 && jo(n);
      } catch (p) {
        V(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Ai(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Vi(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            dl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var o = n.return;
          try {
            jo(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            jo(n);
          } catch (s) {
            V(n, u, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      i.return = n.return, k = i;
      break;
    }
    k = n.return;
  }
}
var Nd = Math.ceil, Jr = Xe.ReactCurrentDispatcher, xu = Xe.ReactCurrentOwner, Ce = Xe.ReactCurrentBatchConfig, R = 0, Z = null, Q = null, q = 0, me = 0, Wn = mn(0), Y = 0, Xt = null, zn = 0, pl = 0, Pu = 0, Tt = null, ae = null, Nu = 0, lt = 1 / 0, $e = null, qr = !1, Uo = null, sn = null, yr = !1, nn = null, br = 0, Lt = 0, $o = null, Tr = -1, Lr = 0;
function oe() {
  return R & 6 ? W() : Tr !== -1 ? Tr : Tr = W();
}
function an(e) {
  return e.mode & 1 ? R & 2 && q !== 0 ? q & -q : cd.transition !== null ? (Lr === 0 && (Lr = Ds()), Lr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1;
}
function Oe(e, n, t, r) {
  if (50 < Lt)
    throw Lt = 0, $o = null, Error(y(185));
  Zt(e, t, r), (!(R & 2) || e !== Z) && (e === Z && (!(R & 2) && (pl |= t), Y === 4 && be(e, q)), pe(e, r), t === 1 && R === 0 && !(n.mode & 1) && (lt = W() + 500, al && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  cf(e, n);
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    t !== null && Zu(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Zu(t), n === 1)
      e.tag === 0 ? ad(Bi.bind(null, e)) : ua(Bi.bind(null, e)), od(function() {
        !(R & 6) && hn();
      }), t = null;
    else {
      switch (js(r)) {
        case 1:
          t = bo;
          break;
        case 4:
          t = Os;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = Ms;
          break;
        default:
          t = jr;
      }
      t = oc(t, qa.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function qa(e, n) {
  if (Tr = -1, Lr = 0, R & 6)
    throw Error(y(327));
  var t = e.callbackNode;
  if (Jn() && e.callbackNode !== t)
    return null;
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = el(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = ec();
    (Z !== e || q !== n) && ($e = null, lt = W() + 500, Cn(e, n));
    do
      try {
        Ld();
        break;
      } catch (i) {
        ba(e, i);
      }
    while (1);
    du(), Jr.current = o, R = l, Q !== null ? n = 0 : (Z = null, q = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = fo(e), l !== 0 && (r = l, n = Ao(e, l))), n === 1)
      throw t = Xt, Cn(e, 0), be(e, r), pe(e, W()), t;
    if (n === 6)
      be(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !zd(l) && (n = el(e, r), n === 2 && (o = fo(e), o !== 0 && (r = o, n = Ao(e, o))), n === 1))
        throw t = Xt, Cn(e, 0), be(e, r), pe(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (be(e, r), (r & 130023424) === r && (n = Nu + 500 - W(), 10 < n)) {
            if (Ir(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              oe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = So(wn.bind(null, e, ae, $e), n);
            break;
          }
          wn(e, ae, $e);
          break;
        case 4:
          if (be(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Re(r);
            o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
          }
          if (r = l, r = W() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = So(wn.bind(null, e, ae, $e), r);
            break;
          }
          wn(e, ae, $e);
          break;
        case 5:
          wn(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === t ? qa.bind(null, e) : null;
}
function Ao(e, n) {
  var t = Tt;
  return e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256), e = el(e, n), e !== 2 && (n = ae, ae = t, n !== null && Vo(n)), e;
}
function Vo(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function zd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function be(e, n) {
  for (n &= ~Pu, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Re(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Bi(e) {
  if (R & 6)
    throw Error(y(327));
  Jn();
  var n = Ir(e, 0);
  if (!(n & 1))
    return pe(e, W()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fo(e);
    r !== 0 && (n = r, t = Ao(e, r));
  }
  if (t === 1)
    throw t = Xt, Cn(e, 0), be(e, n), pe(e, W()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, wn(e, ae, $e), pe(e, W()), null;
}
function zu(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (lt = W() + 500, al && hn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(R & 6) && Jn();
  var n = R;
  R |= 1;
  var t = Ce.transition, r = O;
  try {
    if (Ce.transition = null, O = 1, e)
      return e();
  } finally {
    O = r, Ce.transition = t, R = n, !(R & 6) && hn();
  }
}
function Tu() {
  me = Wn.current, j(Wn);
}
function Cn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, ld(t)), Q !== null)
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch (au(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vr();
          break;
        case 3:
          tt(), j(fe), j(re), gu();
          break;
        case 5:
          yu(r);
          break;
        case 4:
          tt();
          break;
        case 13:
          j(U);
          break;
        case 19:
          j(U);
          break;
        case 10:
          pu(r.type._context);
          break;
        case 22:
        case 23:
          Tu();
      }
      t = t.return;
    }
  if (Z = e, Q = e = cn(e.current, null), q = me = n, Y = 0, Xt = null, Pu = pl = zn = 0, ae = Tt = null, kn !== null) {
    for (n = 0; n < kn.length; n++)
      if (t = kn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        t.pending = r;
      }
    kn = null;
  }
  return e;
}
function ba(e, n) {
  do {
    var t = Q;
    try {
      if (du(), Pr.current = Zr, Gr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Nn = 0, G = K = $ = null, Nt = !1, Qt = 0, xu.current = null, t === null || t.return === null) {
        Y = 1, Xt = n, Q = null;
        break;
      }
      e: {
        var o = e, u = t.return, i = t, s = n;
        if (n = q, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = i, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Ti(u);
          if (g !== null) {
            g.flags &= -257, Li(g, u, i, o, n), g.mode & 1 && zi(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), n.updateQueue = S;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              zi(o, c, n), Lu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && i.mode & 1) {
          var I = Ti(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Li(I, u, i, o, n), cu(rt(s, i));
            break e;
          }
        }
        o = s = rt(s, i), Y !== 4 && (Y = 2), Tt === null ? Tt = [o] : Tt.push(o), o = u;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ia(o, s, n);
              ki(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (sn === null || !sn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Fa(o, i, n);
                ki(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      tc(t);
    } catch (E) {
      n = E, Q === t && t !== null && (Q = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function ec() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function Lu() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), Z === null || !(zn & 268435455) && !(pl & 268435455) || be(Z, q);
}
function el(e, n) {
  var t = R;
  R |= 2;
  var r = ec();
  (Z !== e || q !== n) && ($e = null, Cn(e, n));
  do
    try {
      Td();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (1);
  if (du(), R = t, Jr.current = r, Q !== null)
    throw Error(y(261));
  return Z = null, q = 0, Y;
}
function Td() {
  for (; Q !== null; )
    nc(Q);
}
function Ld() {
  for (; Q !== null && !ef(); )
    nc(Q);
}
function nc(e) {
  var n = lc(e.alternate, e, me);
  e.memoizedProps = e.pendingProps, n === null ? tc(e) : Q = n, xu.current = null;
}
function tc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Cd(t, n), t !== null) {
        t.flags &= 32767, Q = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Y = 6, Q = null;
        return;
      }
    } else if (t = Ed(t, n, me), t !== null) {
      Q = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      Q = n;
      return;
    }
    Q = n = e;
  } while (n !== null);
  Y === 0 && (Y = 5);
}
function wn(e, n, t) {
  var r = O, l = Ce.transition;
  try {
    Ce.transition = null, O = 1, Rd(e, n, t, r);
  } finally {
    Ce.transition = l, O = r;
  }
  return null;
}
function Rd(e, n, t, r) {
  do
    Jn();
  while (nn !== null);
  if (R & 6)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (ff(e, o), e === Z && (Q = Z = null, q = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || yr || (yr = !0, oc(jr, function() {
    return Jn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var u = O;
    O = 1;
    var i = R;
    R |= 4, xu.current = null, xd(e, t), Za(t, e), Jf(go), Fr = !!yo, go = yo = null, e.current = t, Pd(t), nf(), R = i, O = u, Ce.transition = o;
  } else
    e.current = t;
  if (yr && (yr = !1, nn = e, br = l), o = e.pendingLanes, o === 0 && (sn = null), lf(t.stateNode), pe(e, W()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr)
    throw qr = !1, e = Uo, Uo = null, e;
  return br & 1 && e.tag !== 0 && Jn(), o = e.pendingLanes, o & 1 ? e === $o ? Lt++ : (Lt = 0, $o = e) : Lt = 0, hn(), null;
}
function Jn() {
  if (nn !== null) {
    var e = js(br), n = Ce.transition, t = O;
    try {
      if (Ce.transition = null, O = 16 > e ? 16 : e, nn === null)
        var r = !1;
      else {
        if (e = nn, nn = null, br = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k, u = o.child;
          if (k.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (k = c; k !== null; ) {
                  var m = k;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null)
                    h.return = m, k = h;
                  else
                    for (; k !== null; ) {
                      m = k;
                      var p = m.sibling, g = m.return;
                      if (Ya(m), m === c) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, k = p;
                        break;
                      }
                      k = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var I = S.sibling;
                    S.sibling = null, S = I;
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null)
            u.return = o, k = u;
          else
            e:
              for (; k !== null; ) {
                if (o = k, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, k = f;
                  break e;
                }
                k = o.return;
              }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          u = k;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null)
            d.return = u, k = d;
          else
            e:
              for (u = a; k !== null; ) {
                if (i = k, i.flags & 2048)
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, i);
                    }
                  } catch (E) {
                    V(i, i.return, E);
                  }
                if (i === u) {
                  k = null;
                  break e;
                }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, k = v;
                  break e;
                }
                k = i.return;
              }
        }
        if (R = l, hn(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
          try {
            Fe.onPostCommitFiberRoot(ll, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      O = t, Ce.transition = n;
    }
  }
  return !1;
}
function Hi(e, n, t) {
  n = rt(t, n), n = Ia(e, n, 1), e = un(e, n, 1), n = oe(), e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3)
    Hi(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Hi(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
          e = rt(t, e), e = Fa(n, e, 1), n = un(n, e, 1), e = oe(), n !== null && (Zt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Od(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = oe(), e.pingedLanes |= e.suspendedLanes & t, Z === e && (q & t) === t && (Y === 4 || Y === 3 && (q & 130023424) === q && 500 > W() - Nu ? Cn(e, 0) : Pu |= t), pe(e, n);
}
function rc(e, n) {
  n === 0 && (e.mode & 1 ? (n = ir, ir <<= 1, !(ir & 130023424) && (ir = 4194304)) : n = 1);
  var t = oe();
  e = Ke(e, n), e !== null && (Zt(e, n, t), pe(e, t));
}
function Md(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), rc(e, t);
}
function Dd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), rc(e, t);
}
var lc;
lc = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current)
      ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128))
        return ce = !1, kd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else
    ce = !1, F && n.flags & 1048576 && ia(n, Wr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      zr(e, n), e = n.pendingProps;
      var l = bn(n, re.current);
      Zn(n, t), l = Su(null, n, r, e, l, t);
      var o = ku();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (o = !0, Br(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, hu(n), l.updater = cl, n.stateNode = l, l._reactInternals = n, No(n, r, e, t), n = Lo(null, n, r, !0, o, t)) : (n.tag = 0, F && o && su(n), le(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (zr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Id(r), e = ze(r, e), l) {
          case 0:
            n = To(null, n, r, e, t);
            break e;
          case 1:
            n = Mi(null, n, r, e, t);
            break e;
          case 11:
            n = Ri(null, n, r, e, t);
            break e;
          case 14:
            n = Oi(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), To(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Mi(e, n, r, l, t);
    case 3:
      e: {
        if (Va(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, fa(e, n), Yr(n, r, null, t);
        var u = n.memoizedState;
        if (r = u.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = rt(Error(y(423)), n), n = Di(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = rt(Error(y(424)), n), n = Di(e, n, r, t, l);
            break e;
          } else
            for (he = on(n.stateNode.containerInfo.firstChild), ve = n, F = !0, Le = null, t = ha(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (et(), r === l) {
            n = Ye(e, n, t);
            break e;
          }
          le(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return va(n), e === null && _o(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, wo(r, l) ? u = null : o !== null && wo(r, o) && (n.flags |= 32), Aa(e, n), le(e, n, u, t), n.child;
    case 6:
      return e === null && _o(n), null;
    case 13:
      return Ba(e, n, t);
    case 4:
      return vu(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = nt(n, null, r, t) : le(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Ri(e, n, r, l, t);
    case 7:
      return le(e, n, n.pendingProps, t), n.child;
    case 8:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return le(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, M(Qr, r._currentValue), r._currentValue = u, o !== null)
          if (Me(o.value, u)) {
            if (o.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = He(-1, t & -t), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), xo(
                      o.return,
                      t,
                      n
                    ), i.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                u = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (u = o.return, u === null)
                  throw Error(y(341));
                u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), xo(u, t, n), u = o.sibling;
              } else
                u = o.child;
              if (u !== null)
                u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (o = u.sibling, o !== null) {
                    o.return = u.return, u = o;
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        le(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Zn(n, t), l = _e(l), r = r(l), n.flags |= 1, le(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Oi(e, n, r, l, t);
    case 15:
      return Ua(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zr(e, n), n.tag = 1, de(r) ? (e = !0, Br(n)) : e = !1, Zn(n, t), pa(n, r, l), No(n, r, l, t), Lo(null, n, r, !0, e, t);
    case 19:
      return Ha(e, n, t);
    case 22:
      return $a(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function oc(e, n) {
  return Rs(e, n);
}
function jd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new jd(e, n, t, r);
}
function Ru(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function")
    return Ru(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Zo)
      return 11;
    if (e === Jo)
      return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Rr(e, n, t, r, l, o) {
  var u = 2;
  if (r = e, typeof e == "function")
    Ru(e) && (u = 1);
  else if (typeof e == "string")
    u = 5;
  else
    e:
      switch (e) {
        case Dn:
          return _n(t.children, l, o, n);
        case Go:
          u = 8, l |= 8;
          break;
        case Zl:
          return e = Ee(12, t, n, l | 2), e.elementType = Zl, e.lanes = o, e;
        case Jl:
          return e = Ee(13, t, n, l), e.elementType = Jl, e.lanes = o, e;
        case ql:
          return e = Ee(19, t, n, l), e.elementType = ql, e.lanes = o, e;
        case ms:
          return ml(t, l, o, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ds:
                u = 10;
                break e;
              case ps:
                u = 9;
                break e;
              case Zo:
                u = 11;
                break e;
              case Jo:
                u = 14;
                break e;
              case Ze:
                u = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Ee(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function _n(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function ml(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = ms, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function Yl(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Fd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Nl(0), this.expirationTimes = Nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ou(e, n, t, r, l, o, u, i, s) {
  return e = new Fd(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hu(o), e;
}
function Ud(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function uc(e) {
  if (!e)
    return dn;
  e = e._reactInternals;
  e: {
    if (Rn(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t))
      return oa(e, t, n);
  }
  return n;
}
function ic(e, n, t, r, l, o, u, i, s) {
  return e = Ou(t, r, !0, e, l, o, u, i, s), e.context = uc(null), t = e.current, r = oe(), l = an(t), o = He(r, l), o.callback = n ?? null, un(t, o, l), e.current.lanes = l, Zt(e, l, r), pe(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, o = oe(), u = an(l);
  return t = uc(t), n.context === null ? n.context = t : n.pendingContext = t, n = He(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = un(l, n, u), e !== null && (Oe(e, l, u, o), xr(e, l, u)), u;
}
function nl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Wi(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mu(e, n) {
  Wi(e, n), (e = e.alternate) && Wi(e, n);
}
function $d() {
  return null;
}
var sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Du(e) {
  this._internalRoot = e;
}
vl.prototype.render = Du.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = Du.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Tn(function() {
      hl(null, e, null, null);
    }), n[Qe] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Us();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++)
      ;
    qe.splice(t, 0, e), t === 0 && As(e);
  }
};
function ju(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qi() {
}
function Ad(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = nl(u);
        o.call(c);
      };
    }
    var u = ic(n, r, e, 0, null, !1, !1, "", Qi);
    return e._reactRootContainer = u, e[Qe] = u.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(), u;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = nl(s);
      i.call(c);
    };
  }
  var s = Ou(e, 0, !1, null, null, !1, !1, "", Qi);
  return e._reactRootContainer = s, e[Qe] = s.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    hl(n, s, t, r);
  }), s;
}
function gl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = nl(u);
        i.call(s);
      };
    }
    hl(n, u, e, l);
  } else
    u = Ad(t, n, e, l, r);
  return nl(u);
}
Is = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = St(n.pendingLanes);
        t !== 0 && (eu(n, t | 1), pe(n, W()), !(R & 6) && (lt = W() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Oe(r, e, 1, l);
        }
      }), Mu(e, 1);
  }
};
nu = function(e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Oe(n, e, 134217728, t);
    }
    Mu(e, 134217728);
  }
};
Fs = function(e) {
  if (e.tag === 13) {
    var n = an(e), t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Oe(t, e, n, r);
    }
    Mu(e, n);
  }
};
Us = function() {
  return O;
};
$s = function(e, n) {
  var t = O;
  try {
    return O = e, n();
  } finally {
    O = t;
  }
};
so = function(e, n, t) {
  switch (n) {
    case "input":
      if (no(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l)
              throw Error(y(90));
            vs(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      gs(e, t);
      break;
    case "select":
      n = t.value, n != null && Kn(e, !!t.multiple, n, !1);
  }
};
xs = zu;
Ps = Tn;
var Vd = { usingClientEntryPoint: !1, Events: [qt, Un, sl, Cs, _s, zu] }, yt = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Bd = { bundleType: yt.bundleType, version: yt.version, rendererPackageName: yt.rendererPackageName, rendererConfig: yt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ts(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: yt.findFiberByHostInstance || $d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      ll = gr.inject(Bd), Fe = gr;
    } catch {
    }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
ge.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ju(n))
    throw Error(y(200));
  return Ud(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!ju(e))
    throw Error(y(299));
  var t = !1, r = "", l = sc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Ou(e, 1, !1, null, null, t, !1, r, l), e[Qe] = n.current, At(e.nodeType === 8 ? e.parentNode : e), new Du(n);
};
ge.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Ts(n), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e) {
  return Tn(e);
};
ge.hydrate = function(e, n, t) {
  if (!yl(n))
    throw Error(y(200));
  return gl(null, e, n, !0, t);
};
ge.hydrateRoot = function(e, n, t) {
  if (!ju(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", u = sc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = ic(n, null, e, 1, t ?? null, l, !1, o, u), e[Qe] = n.current, At(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new vl(n);
};
ge.render = function(e, n, t) {
  if (!yl(n))
    throw Error(y(200));
  return gl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function(e) {
  if (!yl(e))
    throw Error(y(40));
  return e._reactRootContainer ? (Tn(function() {
    gl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Qe] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = zu;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!yl(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return gl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
function ac() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac);
    } catch (e) {
      console.error(e);
    }
}
ac(), is.exports = ge;
var Hd = is.exports, Ki = Hd;
Xl.createRoot = Ki.createRoot, Xl.hydrateRoot = Ki.hydrateRoot;
var cc = { exports: {} }, Wd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Qd = Wd, Kd = Qd;
function fc() {
}
function dc() {
}
dc.resetWarningCache = fc;
var Yd = function() {
  function e(r, l, o, u, i, s) {
    if (s !== Kd) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
    }
  }
  e.isRequired = e;
  function n() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    elementType: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
    checkPropTypes: dc,
    resetWarningCache: fc
  };
  return t.PropTypes = t, t;
};
cc.exports = Yd();
var Xd = cc.exports;
const Qn = /* @__PURE__ */ Gi(Xd), tl = Symbol.for("r2wc.reactRender"), Yi = Symbol.for("r2wc.shouldRender"), wr = Symbol.for("r2wc.root");
function Gd(e = "") {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Zd(e = "") {
  return e.replace(/-([a-z0-9])/g, function(n) {
    return n[1].toUpperCase();
  });
}
var Xi = {
  expando: function(e, n, t) {
    Object.defineProperty(e, n, {
      enumerable: !0,
      get: function() {
        return t;
      },
      set: function(r) {
        t = r, this[tl]();
      }
    }), e[tl]();
  }
};
function Jd(e, n, t, r = {}) {
  var l = {
    isConnected: "isConnected" in HTMLElement.prototype
  }, o = !1, u = function() {
    var c = Reflect.construct(HTMLElement, arguments, this.constructor);
    return typeof r.shadow == "string" ? c.attachShadow({ mode: r.shadow }) : r.shadow && (console.warn(
      'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
    ), c.attachShadow({ mode: "open" })), c;
  }, i = Object.create(HTMLElement.prototype);
  i.constructor = u;
  var s = new Proxy(i, {
    has: function(c, m) {
      return m in e.propTypes || m in i;
    },
    set: function(c, m, h, p) {
      return o && (l[m] = !0), typeof m == "symbol" || l[m] || m in c ? (e.propTypes && m in e.propTypes && Xi.expando(p, m, h), Reflect.set(c, m, h, p)) : (Xi.expando(p, m, h), !0);
    },
    getOwnPropertyDescriptor: function(c, m) {
      var h = Reflect.getOwnPropertyDescriptor(c, m);
      if (h)
        return h;
      if (m in e.propTypes)
        return {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: void 0
        };
    }
  });
  return u.prototype = s, i.connectedCallback = function() {
    this[Yi] = !0, this[tl]();
  }, i.disconnectedCallback = function() {
    typeof t.createRoot == "function" ? this[wr].unmount() : t.unmountComponentAtNode(this);
  }, i[tl] = function() {
    if (this[Yi] === !0) {
      var c = {};
      Object.keys(this).forEach(function(p) {
        l[p] !== !1 && (c[p] = this[p]);
      }, this), o = !0;
      const m = r.shadow ? this.shadowRoot : this, h = n.createElement(e, c);
      typeof t.createRoot == "function" ? (this[wr] || (this[wr] = t.createRoot(m)), this[wr].render(h)) : t.render(h, m), o = !1;
    }
  }, e.propTypes && (u.observedAttributes = r.dashStyleAttributes ? Object.keys(e.propTypes).map(function(c) {
    return Gd(c);
  }) : Object.keys(e.propTypes), i.attributeChangedCallback = function(c, m, h) {
    var p = r.dashStyleAttributes ? Zd(c) : c;
    this[p] = h;
  }), u;
}
class pc extends os.Component {
  render() {
    return /* @__PURE__ */ se.jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ se.jsx("h2", { children: "Scheduled Events:" }),
      /* @__PURE__ */ se.jsx(mc, { proxy: this.props.proxy })
    ] });
  }
}
Fu(pc, "propTypes", {
  events: Qn.string,
  proxy: Qn.string
});
function mc(e) {
  const [n, t] = Rt.useState([]);
  Rt.useEffect(() => {
    r().then((o) => t(o));
  }, []);
  async function r() {
    return await (await fetch(`${e.proxy}/road/status`)).json();
  }
  function l(o) {
    const u = n.map((i, s) => s === o ? { ...i, inUse: !i.inUse } : i);
    console.log(`Updated Road Blocks (${u.length})`);
    for (const i of u)
      fetch(`${e.proxy}/road/status`, {
        method: "POST",
        body: u[0]
      });
    t(u);
  }
  return /* @__PURE__ */ se.jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ se.jsxs("table", { children: [
    /* @__PURE__ */ se.jsx("thead", { children: /* @__PURE__ */ se.jsxs("tr", { children: [
      /* @__PURE__ */ se.jsx("th", { children: "Road" }),
      /* @__PURE__ */ se.jsx("th", { children: "Status" })
    ] }) }),
    /* @__PURE__ */ se.jsx("tbody", { children: n.map((o, u) => /* @__PURE__ */ se.jsxs(
      "tr",
      {
        className: o.inUse ? "checked-row" : "unchecked-row",
        children: [
          /* @__PURE__ */ se.jsx("td", { children: o.road }),
          /* @__PURE__ */ se.jsx("td", { children: /* @__PURE__ */ se.jsx(
            "input",
            {
              className: "road-block-checkbox",
              type: "checkbox",
              checked: o.inUse,
              onChange: () => l(u),
              id: `roadBlock-${u}`
            }
          ) })
        ]
      },
      u
    )) })
  ] }) });
}
mc.propTypes = {
  roadBlocks: Qn.arrayOf(
    Qn.shape({
      road: Qn.string.isRequired,
      inUse: Qn.bool.isRequired
    })
  ).isRequired
};
const bd = Jd(pc, os, Xl, {
  dashStyleAttributes: !0
});
export {
  bd as default
};
