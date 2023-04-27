var vc = Object.defineProperty;
var yc = (e, n, t) => n in e ? vc(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Fi = (e, n, t) => (yc(e, typeof n != "symbol" ? n + "" : n, t), t);
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zu = { exports: {} }, rl = {}, Ju = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt = Symbol.for("react.element"), gc = Symbol.for("react.portal"), wc = Symbol.for("react.fragment"), Sc = Symbol.for("react.strict_mode"), kc = Symbol.for("react.profiler"), Ec = Symbol.for("react.provider"), _c = Symbol.for("react.context"), Cc = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), Pc = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Ui = Symbol.iterator;
function zc(e) {
  return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, bu = Object.assign, es = {};
function it(e, n, t) {
  this.props = e, this.context = n, this.refs = es, this.updater = t || qu;
}
it.prototype.isReactComponent = {};
it.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
it.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ns() {
}
ns.prototype = it.prototype;
function Bo(e, n, t) {
  this.props = e, this.context = n, this.refs = es, this.updater = t || qu;
}
var Ho = Bo.prototype = new ns();
Ho.constructor = Bo;
bu(Ho, it.prototype);
Ho.isPureReactComponent = !0;
var $i = Array.isArray, ts = Object.prototype.hasOwnProperty, Wo = { current: null }, rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, n, t) {
  var r, l = {}, o = null, i = null;
  if (n != null)
    for (r in n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n)
      ts.call(n, r) && !rs.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1)
    l.children = t;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Gt, type: e, key: o, ref: i, props: l, _owner: Wo.current };
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
var Ai = /\/+/g;
function El(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null)
    i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gt:
          case gc:
            i = !0;
        }
    }
  if (i)
    return i = e, l = l(i), e = r === "" ? "." + El(i, 0) : r, $i(l) ? (t = "", e != null && (t = e.replace(Ai, "$&/") + "/"), Sr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Qo(l) && (l = Tc(l, t + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Ai, "$&/") + "/") + e)), n.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", $i(e))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += Sr(o, n, t, s, l);
    }
  else if (s = zc(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      o = o.value, s = r + El(o, u++), i += Sr(o, n, t, s, l);
  else if (o === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return i;
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
T.Component = it;
T.Fragment = wc;
T.Profiler = kc;
T.PureComponent = Bo;
T.StrictMode = Sc;
T.Suspense = xc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oc;
T.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = bu({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, i = Wo.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in n)
      ts.call(n, s) && !rs.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++)
      u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Gt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function(e) {
  return e = { $$typeof: _c, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ec, _context: e }, e.Consumer = e;
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
  return { $$typeof: Cc, render: e };
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
Ju.exports = T;
var Kn = Ju.exports;
const os = /* @__PURE__ */ Gu(Kn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc = Kn, jc = Symbol.for("react.element"), Dc = Symbol.for("react.fragment"), Ic = Object.prototype.hasOwnProperty, Fc = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, n, t) {
  var r, l = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (i = n.ref);
  for (r in n)
    Ic.call(n, r) && !Uc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: jc, type: e, key: o, ref: i, props: l, _owner: Fc.current };
}
rl.Fragment = Dc;
rl.jsx = is;
rl.jsxs = is;
Zu.exports = rl;
var G = Zu.exports, Xl = {}, us = { exports: {} }, ge = {}, ss = { exports: {} }, as = {};
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
  function n(_, N) {
    var z = _.length;
    _.push(N);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, X = _[H];
        if (0 < l(X, N))
          _[H] = N, _[z] = X, z = H;
        else
          break e;
      }
  }
  function t(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0)
      return null;
    var N = _[0], z = _.pop();
    if (z !== N) {
      _[0] = z;
      e:
        for (var H = 0, X = _.length, er = X >>> 1; H < er; ) {
          var vn = 2 * (H + 1) - 1, kl = _[vn], yn = vn + 1, nr = _[yn];
          if (0 > l(kl, z))
            yn < X && 0 > l(nr, kl) ? (_[H] = nr, _[yn] = z, H = yn) : (_[H] = kl, _[vn] = z, H = vn);
          else if (yn < X && 0 > l(nr, z))
            _[H] = nr, _[yn] = z, H = yn;
          else
            break e;
        }
    }
    return N;
  }
  function l(_, N) {
    var z = _.sortIndex - N.sortIndex;
    return z !== 0 ? z : _.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, g = !1, w = !1, S = !1, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= _)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(_) {
    if (S = !1, d(_), !w)
      if (t(s) !== null)
        w = !0, wl(E);
      else {
        var N = t(c);
        N !== null && Sl(v, N.startTime - _);
      }
  }
  function E(_, N) {
    w = !1, S && (S = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), h = t(s); h !== null && (!(h.expirationTime > N) || _ && !Pe()); ) {
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
  var C = !1, x = null, P = -1, B = 5, L = -1;
  function Pe() {
    return !(e.unstable_now() - L < B);
  }
  function at() {
    if (x !== null) {
      var _ = e.unstable_now();
      L = _;
      var N = !0;
      try {
        N = x(!0, _);
      } finally {
        N ? ct() : (C = !1, x = null);
      }
    } else
      C = !1;
  }
  var ct;
  if (typeof a == "function")
    ct = function() {
      a(at);
    };
  else if (typeof MessageChannel < "u") {
    var Ii = new MessageChannel(), hc = Ii.port2;
    Ii.port1.onmessage = at, ct = function() {
      hc.postMessage(null);
    };
  } else
    ct = function() {
      I(at, 0);
    };
  function wl(_) {
    x = _, C || (C = !0, ct());
  }
  function Sl(_, N) {
    P = I(function() {
      _(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, wl(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(_) {
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
      return _();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, N) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var z = p;
    p = _;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(_, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, _) {
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
    return X = z + X, _ = { id: m++, callback: N, priorityLevel: _, startTime: z, expirationTime: X, sortIndex: -1 }, z > H ? (_.sortIndex = z, n(c, _), t(s) === null && _ === t(c) && (S ? (f(P), P = -1) : S = !0, Sl(v, z - H))) : (_.sortIndex = X, n(s, _), w || g || (w = !0, wl(E))), _;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(_) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return _.apply(this, arguments);
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
var cs = Kn, ye = $c;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fs = /* @__PURE__ */ new Set(), Ot = {};
function Ln(e, n) {
  bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
  for (Ot[e] = n, e = 0; e < n.length; e++)
    fs.add(n[e]);
}
var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = Object.prototype.hasOwnProperty, Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Vi = {}, Bi = {};
function Vc(e) {
  return Gl.call(Bi, e) ? !0 : Gl.call(Vi, e) ? !1 : Ac.test(e) ? Bi[e] = !0 : (Vi[e] = !0, !1);
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
function se(e, n, t, r, l, o, i) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = i;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ee[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Ko, Yo);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Ko, Yo);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xo(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Hc(n, t, l, r) && (t = null), r || l === null ? Vc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = cs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rr = Symbol.for("react.element"), Mn = Symbol.for("react.portal"), jn = Symbol.for("react.fragment"), Go = Symbol.for("react.strict_mode"), Zl = Symbol.for("react.profiler"), ds = Symbol.for("react.provider"), ps = Symbol.for("react.context"), Zo = Symbol.for("react.forward_ref"), Jl = Symbol.for("react.suspense"), ql = Symbol.for("react.suspense_list"), Jo = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), ms = Symbol.for("react.offscreen"), Hi = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object" ? null : (e = Hi && e[Hi] || e["@@iterator"], typeof e == "function" ? e : null);
}
var A = Object.assign, _l;
function wt(e) {
  if (_l === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      _l = n && n[1] || "";
    }
  return `
` + _l + e;
}
var Cl = !1;
function xl(e, n) {
  if (!e || Cl)
    return "";
  Cl = !0;
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
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    Cl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Wc(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
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
    case jn:
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
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
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
function Wi(e, n) {
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
function Qi(e, n, t) {
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
var St = Array.isArray;
function Yn(e, n, t, r) {
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
function Ki(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (St(t)) {
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
function Yi(e) {
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
var _t = {
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
Object.keys(_t).forEach(function(e) {
  Yc.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), _t[n] = _t[e];
  });
});
function ks(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || _t.hasOwnProperty(e) && _t[e] ? ("" + n).trim() : n + "px";
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
function io(e, n) {
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
var uo = null;
function qo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var so = null, Xn = null, Gn = null;
function Xi(e) {
  if (e = qt(e)) {
    if (typeof so != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = sl(n), so(e.stateNode, e.type, n));
  }
}
function _s(e) {
  Xn ? Gn ? Gn.push(e) : Gn = [e] : Xn = e;
}
function Cs() {
  if (Xn) {
    var e = Xn, n = Gn;
    if (Gn = Xn = null, Xi(e), n)
      for (e = 0; e < n.length; e++)
        Xi(n[e]);
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
    Pl = !1, (Xn !== null || Gn !== null) && (Ps(), Cs());
  }
}
function jt(e, n) {
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
    var dt = {};
    Object.defineProperty(dt, "passive", { get: function() {
      ao = !0;
    } }), window.addEventListener("test", dt, dt), window.removeEventListener("test", dt, dt);
  } catch {
    ao = !1;
  }
function Gc(e, n, t, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ct = !1, Mr = null, jr = !1, co = null, Zc = { onError: function(e) {
  Ct = !0, Mr = e;
} };
function Jc(e, n, t, r, l, o, i, u, s) {
  Ct = !1, Mr = null, Gc.apply(Zc, arguments);
}
function qc(e, n, t, r, l, o, i, u, s) {
  if (Jc.apply(this, arguments), Ct) {
    if (Ct) {
      var c = Mr;
      Ct = !1, Mr = null;
    } else
      throw Error(y(198));
    jr || (jr = !0, co = c);
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
function Gi(e) {
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
          return Gi(l), e;
        if (o === r)
          return Gi(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          i = !0, t = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, t = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            i = !0, t = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, t = l;
            break;
          }
          u = u.sibling;
        }
        if (!i)
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
var Rs = ye.unstable_scheduleCallback, Zi = ye.unstable_cancelCallback, ef = ye.unstable_shouldYield, nf = ye.unstable_requestPaint, W = ye.unstable_now, tf = ye.unstable_getCurrentPriorityLevel, bo = ye.unstable_ImmediatePriority, Os = ye.unstable_UserBlockingPriority, Dr = ye.unstable_NormalPriority, rf = ye.unstable_LowPriority, Ms = ye.unstable_IdlePriority, ll = null, Fe = null;
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
var ir = 64, ur = 4194304;
function kt(e) {
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
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = kt(u) : (o &= i, o !== 0 && (r = kt(o)));
  } else
    i = t & ~l, i !== 0 ? r = kt(i) : o !== 0 && (r = kt(o));
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
    var i = 31 - Re(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & t) || u & r) && (l[i] = af(u, n)) : s <= n && (e.expiredLanes |= u), o &= ~u;
  }
}
function fo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function js() {
  var e = ir;
  return ir <<= 1, !(ir & 4194240) && (ir = 64), e;
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
function ei(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Re(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var O = 0;
function Ds(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Is, ni, Fs, Us, $s, po = !1, sr = [], tn = null, rn = null, ln = null, Dt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), qe = [], df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ji(e, n) {
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
      Dt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      It.delete(n.pointerId);
  }
}
function pt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = qt(n), n !== null && ni(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function pf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return tn = pt(tn, e, n, t, r, l), !0;
    case "dragenter":
      return rn = pt(rn, e, n, t, r, l), !0;
    case "mouseover":
      return ln = pt(ln, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dt.set(o, pt(Dt.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, It.set(o, pt(It.get(o) || null, e, n, t, r, l)), !0;
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
      uo = r, t.target.dispatchEvent(r), uo = null;
    } else
      return n = qt(t), n !== null && ni(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function qi(e, n, t) {
  Er(e) && t.delete(n);
}
function mf() {
  po = !1, tn !== null && Er(tn) && (tn = null), rn !== null && Er(rn) && (rn = null), ln !== null && Er(ln) && (ln = null), Dt.forEach(qi), It.forEach(qi);
}
function mt(e, n) {
  e.blockedOn === n && (e.blockedOn = null, po || (po = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, mf)));
}
function Ft(e) {
  function n(l) {
    return mt(l, e);
  }
  if (0 < sr.length) {
    mt(sr[0], e);
    for (var t = 1; t < sr.length; t++) {
      var r = sr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tn !== null && mt(tn, e), rn !== null && mt(rn, e), ln !== null && mt(ln, e), Dt.forEach(n), It.forEach(n), t = 0; t < qe.length; t++)
    r = qe[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && (t = qe[0], t.blockedOn === null); )
    As(t), t.blockedOn === null && qe.shift();
}
var Zn = Xe.ReactCurrentBatchConfig, Fr = !0;
function hf(e, n, t, r) {
  var l = O, o = Zn.transition;
  Zn.transition = null;
  try {
    O = 1, ti(e, n, t, r);
  } finally {
    O = l, Zn.transition = o;
  }
}
function vf(e, n, t, r) {
  var l = O, o = Zn.transition;
  Zn.transition = null;
  try {
    O = 4, ti(e, n, t, r);
  } finally {
    O = l, Zn.transition = o;
  }
}
function ti(e, n, t, r) {
  if (Fr) {
    var l = mo(e, n, t, r);
    if (l === null)
      Fl(e, n, r, Ur, t), Ji(e, r);
    else if (pf(l, e, n, t, r))
      r.stopPropagation();
    else if (Ji(e, r), n & 4 && -1 < df.indexOf(e)) {
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
        case Dr:
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
var en = null, ri = null, _r = null;
function Bs() {
  if (_r)
    return _r;
  var e, n = ri, t = n.length, r, l = "value" in en ? en.value : en.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++)
    ;
  return _r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Cr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ar() {
  return !0;
}
function bi() {
  return !1;
}
function we(e) {
  function n(t, r, l, o, i) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e)
      e.hasOwnProperty(u) && (t = e[u], this[u] = t ? t(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : bi, this.isPropagationStopped = bi, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, li = we(ut), Jt = A({}, ut, { view: 0, detail: 0 }), yf = we(Jt), zl, Tl, ht, ol = A({}, Jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: oi, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ht && (ht && e.type === "mousemove" ? (zl = e.screenX - ht.screenX, Tl = e.screenY - ht.screenY) : Tl = zl = 0, ht = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), eu = we(ol), gf = A({}, ol, { dataTransfer: 0 }), wf = we(gf), Sf = A({}, Jt, { relatedTarget: 0 }), Ll = we(Sf), kf = A({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = we(kf), _f = A({}, ut, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cf = we(_f), xf = A({}, ut, { data: 0 }), nu = we(xf), Pf = {
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
function oi() {
  return Tf;
}
var Lf = A({}, Jt, { key: function(e) {
  if (e.key) {
    var n = Pf[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = Cr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: oi, charCode: function(e) {
  return e.type === "keypress" ? Cr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Cr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = we(Lf), Of = A({}, ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), tu = we(Of), Mf = A({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: oi }), jf = we(Mf), Df = A({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), If = we(Df), Ff = A({}, ol, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = we(Ff), $f = [9, 13, 27, 32], ii = We && "CompositionEvent" in window, xt = null;
We && "documentMode" in document && (xt = document.documentMode);
var Af = We && "TextEvent" in window && !xt, Hs = We && (!ii || xt && 8 < xt && 11 >= xt), ru = String.fromCharCode(32), lu = !1;
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
var Dn = !1;
function Vf(e, n) {
  switch (e) {
    case "compositionend":
      return Qs(n);
    case "keypress":
      return n.which !== 32 ? null : (lu = !0, ru);
    case "textInput":
      return e = n.data, e === ru && lu ? null : e;
    default:
      return null;
  }
}
function Bf(e, n) {
  if (Dn)
    return e === "compositionend" || !ii && Ws(e, n) ? (e = Bs(), _r = ri = en = null, Dn = !1, e) : null;
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
function ou(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Hf[e.type] : n === "textarea";
}
function Ks(e, n, t, r) {
  _s(r), n = $r(n, "onChange"), 0 < n.length && (t = new li("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Pt = null, Ut = null;
function Wf(e) {
  ra(e, 0);
}
function il(e) {
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
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"), Ol = typeof iu.oninput == "function";
    }
    Rl = Ol;
  } else
    Rl = !1;
  Ys = Rl && (!document.documentMode || 9 < document.documentMode);
}
function uu() {
  Pt && (Pt.detachEvent("onpropertychange", Xs), Ut = Pt = null);
}
function Xs(e) {
  if (e.propertyName === "value" && il(Ut)) {
    var n = [];
    Ks(n, Ut, e, qo(e)), Ns(Wf, n);
  }
}
function Kf(e, n, t) {
  e === "focusin" ? (uu(), Pt = n, Ut = t, Pt.attachEvent("onpropertychange", Xs)) : e === "focusout" && uu();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(Ut);
}
function Xf(e, n) {
  if (e === "click")
    return il(n);
}
function Gf(e, n) {
  if (e === "input" || e === "change")
    return il(n);
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
function su(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function au(e, n) {
  var t = su(e);
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
    t = su(t);
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
function ui(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function Jf(e) {
  var n = Zs(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && Gs(t.ownerDocument.documentElement, t)) {
    if (r !== null && ui(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = au(t, o);
        var i = au(
          t,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var qf = We && "documentMode" in document && 11 >= document.documentMode, In = null, ho = null, Nt = null, vo = !1;
function cu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  vo || In == null || In !== Or(r) || (r = In, "selectionStart" in r && ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nt && $t(Nt, r) || (Nt = r, r = $r(ho, "onSelect"), 0 < r.length && (n = new li("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = In)));
}
function cr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var Fn = { animationend: cr("Animation", "AnimationEnd"), animationiteration: cr("Animation", "AnimationIteration"), animationstart: cr("Animation", "AnimationStart"), transitionend: cr("Transition", "TransitionEnd") }, Ml = {}, Js = {};
We && (Js = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
function ul(e) {
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
var qs = ul("animationend"), bs = ul("animationiteration"), ea = ul("animationstart"), na = ul("transitionend"), ta = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pn(e, n) {
  ta.set(e, n), Ln(n, [e]);
}
for (var jl = 0; jl < fu.length; jl++) {
  var Dl = fu[jl], bf = Dl.toLowerCase(), ed = Dl[0].toUpperCase() + Dl.slice(1);
  pn(bf, "on" + ed);
}
pn(qs, "onAnimationEnd");
pn(bs, "onAnimationIteration");
pn(ea, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(na, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));
function du(e, n, t) {
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
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], s = u.instance, c = u.currentTarget;
          if (u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          du(l, u, c), o = s;
        }
      else
        for (i = 0; i < r.length; i++) {
          if (u = r[i], s = u.instance, c = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped())
            break e;
          du(l, u, c), o = s;
        }
    }
  }
  if (jr)
    throw e = co, jr = !1, co = null, e;
}
function j(e, n) {
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
      l = ti;
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
        var i = r.tag;
        if (i === 3 || i === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || u.nodeType === 8 && u.parentNode === l)
            break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (i = Sn(u), i === null)
              return;
            if (s = i.tag, s === 5 || s === 6) {
              r = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
  Ns(function() {
    var c = o, m = qo(t), h = [];
    e: {
      var p = ta.get(e);
      if (p !== void 0) {
        var g = li, w = e;
        switch (e) {
          case "keypress":
            if (Cr(t) === 0)
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
            g = eu;
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
            g = jf;
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
            g = Cf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = tu;
        }
        var S = (n & 4) !== 0, I = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = jt(a, f), v != null && S.push(Vt(a, v, d)))), I)
            break;
          a = a.return;
        }
        0 < S.length && (p = new g(p, w, null, t, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== uo && (w = t.relatedTarget || t.fromElement) && (Sn(w) || w[Qe]))
          break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? Sn(w) : null, w !== null && (I = Rn(w), w !== I || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (S = eu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = tu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = g == null ? p : Un(g), d = w == null ? p : Un(w), p = new S(v, a + "leave", g, t, m), p.target = I, p.relatedTarget = d, v = null, Sn(m) === c && (S = new S(f, a + "enter", w, t, m), S.target = d, S.relatedTarget = I, v = S), I = v, g && w)
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
          g !== null && pu(h, p, g, S, !1), w !== null && I !== null && pu(h, I, w, S, !0);
        }
      }
      e: {
        if (p = c ? Un(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = Qf;
        else if (ou(p))
          if (Ys)
            E = Gf;
          else {
            E = Yf;
            var C = Kf;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Xf);
        if (E && (E = E(e, c))) {
          Ks(h, E, t, m);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && to(p, "number", p.value);
      }
      switch (C = c ? Un(c) : window, e) {
        case "focusin":
          (ou(C) || C.contentEditable === "true") && (In = C, ho = c, Nt = null);
          break;
        case "focusout":
          Nt = ho = In = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vo = !1, cu(h, t, m);
          break;
        case "selectionchange":
          if (qf)
            break;
        case "keydown":
        case "keyup":
          cu(h, t, m);
      }
      var x;
      if (ii)
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
        Dn ? Ws(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Hs && t.locale !== "ko" && (Dn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Dn && (x = Bs()) : (en = m, ri = "value" in en ? en.value : en.textContent, Dn = !0)), C = $r(c, P), 0 < C.length && (P = new nu(P, e, null, t, m), h.push({ event: P, listeners: C }), x ? P.data = x : (x = Qs(t), x !== null && (P.data = x)))), (x = Af ? Vf(e, t) : Bf(e, t)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (m = new nu("onBeforeInput", "beforeinput", null, t, m), h.push({ event: m, listeners: c }), m.data = x));
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
    l.tag === 5 && o !== null && (l = o, o = jt(e, t), o != null && r.unshift(Vt(e, o, l)), o = jt(e, n), o != null && r.push(Vt(e, o, l))), e = e.return;
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
function pu(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r)
      break;
    u.tag === 5 && c !== null && (u = c, l ? (s = jt(t, o), s != null && i.unshift(Vt(t, s, u))) : l || (s = jt(t, o), s != null && i.push(Vt(t, s, u)))), t = t.return;
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var td = /\r\n?/g, rd = /\u0000|\uFFFD/g;
function mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(td, `
`).replace(rd, "");
}
function dr(e, n, t) {
  if (n = mu(n), mu(e) !== n && t)
    throw Error(y(425));
}
function Ar() {
}
var yo = null, go = null;
function wo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var So = typeof setTimeout == "function" ? setTimeout : void 0, ld = typeof clearTimeout == "function" ? clearTimeout : void 0, hu = typeof Promise == "function" ? Promise : void 0, od = typeof queueMicrotask == "function" ? queueMicrotask : typeof hu < "u" ? function(e) {
  return hu.resolve(null).then(e).catch(id);
} : So;
function id(e) {
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
function vu(e) {
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
var st = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + st, Bt = "__reactProps$" + st, Qe = "__reactContainer$" + st, ko = "__reactEvents$" + st, ud = "__reactListeners$" + st, sd = "__reactHandles$" + st;
function Sn(e) {
  var n = e[Ie];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Qe] || t[Ie]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = vu(e); e !== null; ) {
          if (t = e[Ie])
            return t;
          e = vu(e);
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
function D(e) {
  0 > $n || (e.current = Eo[$n], Eo[$n] = null, $n--);
}
function M(e, n) {
  $n++, Eo[$n] = e.current, e.current = n;
}
var dn = {}, le = mn(dn), fe = mn(!1), xn = dn;
function et(e, n) {
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
  D(fe), D(le);
}
function yu(e, n, t) {
  if (le.current !== dn)
    throw Error(y(168));
  M(le, n), M(fe, t);
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
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || dn, xn = le.current, M(le, e), M(fe, fe.current), !0;
}
function gu(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = oa(e, n, xn), r.__reactInternalMemoizedMergedChildContext = e, D(fe), D(le), M(le, e)) : D(fe), M(fe, t);
}
var Ae = null, al = !1, $l = !1;
function ia(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
function ad(e) {
  al = !0, ia(e);
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
function ua(e, n, t) {
  Se[ke++] = Ve, Se[ke++] = Be, Se[ke++] = Pn, Pn = e;
  var r = Ve;
  e = Be;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Re(n) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ve = 1 << 32 - Re(n) + l | t << l | r, Be = o + e;
  } else
    Ve = 1 << o | t << l | r, Be = e;
}
function si(e) {
  e.return !== null && (gn(e, 1), ua(e, 1, 0));
}
function ai(e) {
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
function wu(e, n) {
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
function _o(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
  if (F) {
    var n = he;
    if (n) {
      var t = n;
      if (!wu(e, n)) {
        if (_o(e))
          throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && wu(e, n) ? sa(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, ve = e);
      }
    } else {
      if (_o(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, F = !1, ve = e;
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function pr(e) {
  if (e !== ve)
    return !1;
  if (!F)
    return Su(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !wo(e.type, e.memoizedProps)), n && (n = he)) {
    if (_o(e))
      throw aa(), Error(y(418));
    for (; n; )
      sa(e, n), n = on(n.nextSibling);
  }
  if (Su(e), e.tag === 13) {
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
function nt() {
  he = ve = null, F = !1;
}
function ci(e) {
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
var Qr = mn(null), Kr = null, Bn = null, fi = null;
function di() {
  fi = Bn = Kr = null;
}
function pi(e) {
  var n = Qr.current;
  D(Qr), e._currentValue = n;
}
function xo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  Kr = e, fi = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function Ce(e) {
  var n = e._currentValue;
  if (fi !== e)
    if (e = { context: e, memoizedValue: n, next: null }, Bn === null) {
      if (Kr === null)
        throw Error(y(308));
      Bn = e, Kr.dependencies = { lanes: 0, firstContext: e };
    } else
      Bn = Bn.next = e;
  return n;
}
var kn = null;
function mi(e) {
  kn === null ? kn = [e] : kn.push(e);
}
function ca(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, mi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ke(e, r);
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function hi(e) {
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
  return l = r.interleaved, l === null ? (n.next = n, mi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ke(e, t);
}
function xr(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ei(e, t);
  }
}
function ku(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = i : o = o.next = i, t = t.next;
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
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, i === null ? o = c : i.next = c, i = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== i && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    i = 0, m = c = s = null, u = o;
    do {
      var p = u.lane, g = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var w = e, S = u;
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
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else
        g = { eventTime: g, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = g, s = h) : m = m.next = g, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null)
          break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        i |= l.lane, l = l.next;
      while (l !== n);
    } else
      o === null && (l.shared.lanes = 0);
    zn |= i, e.lanes = i, e.memoizedState = h;
  }
}
function Eu(e, n, t) {
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
  var r = ie(), l = an(e), o = He(r, l);
  o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Oe(n, e, l, r), xr(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ie(), l = an(e), o = He(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = un(e, o, l), n !== null && (Oe(n, e, l, r), xr(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ie(), r = an(e), l = He(t, r);
  l.tag = 2, n != null && (l.callback = n), n = un(e, l, r), n !== null && (Oe(n, e, r, t), xr(n, e, r));
} };
function _u(e, n, t, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : n.prototype && n.prototype.isPureReactComponent ? !$t(t, r) || !$t(l, o) : !0;
}
function pa(e, n, t) {
  var r = !1, l = dn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = Ce(o) : (l = de(n) ? xn : le.current, r = n.contextTypes, o = (r = r != null) ? et(e, l) : dn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Cu(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && cl.enqueueReplaceState(n, n.state, null);
}
function No(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = da, hi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = Ce(o) : (o = de(n) ? xn : le.current, l.context = et(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Po(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && cl.enqueueReplaceState(l, l.state, null), Yr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vt(e, n, t) {
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
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(i) {
        var u = l.refs;
        u === da && (u = l.refs = {}), i === null ? delete u[o] : u[o] = i;
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
function xu(e) {
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
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === jn ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && xu(E) === a.type) ? (v = l(a, d.props), v.ref = vt(f, a, d), v.return = f, v) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = Cn(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Kl("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return d = Rr(a.type, a.key, a.props, null, f.mode, d), d.ref = vt(f, null, a), d.return = f, d;
        case Mn:
          return a = Yl(a, f.mode, d), a.return = f, a;
        case Ze:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (St(a) || ft(a))
        return a = Cn(a, f.mode, d, null), a.return = f, a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
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
      if (St(d) || ft(d))
        return E !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case Mn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Ze:
          var C = v._init;
          return g(f, a, d, C(v._payload), E);
      }
      if (St(v) || ft(v))
        return f = f.get(d) || null, m(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, C = null, x = a, P = a = 0, B = null; x !== null && P < d.length; P++) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var L = p(f, x, d[P], v);
      if (L === null) {
        x === null && (x = B);
        break;
      }
      e && x && L.alternate === null && n(f, x), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L, x = B;
    }
    if (P === d.length)
      return t(f, x), F && gn(f, P), E;
    if (x === null) {
      for (; P < d.length; P++)
        x = h(f, d[P], v), x !== null && (a = o(x, a, P), C === null ? E = x : C.sibling = x, C = x);
      return F && gn(f, P), E;
    }
    for (x = r(f, x); P < d.length; P++)
      B = g(x, f, P, d[P], v), B !== null && (e && B.alternate !== null && x.delete(B.key === null ? P : B.key), a = o(B, a, P), C === null ? E = B : C.sibling = B, C = B);
    return e && x.forEach(function(Pe) {
      return n(f, Pe);
    }), F && gn(f, P), E;
  }
  function S(f, a, d, v) {
    var E = ft(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var C = E = null, x = a, P = a = 0, B = null, L = d.next(); x !== null && !L.done; P++, L = d.next()) {
      x.index > P ? (B = x, x = null) : B = x.sibling;
      var Pe = p(f, x, L.value, v);
      if (Pe === null) {
        x === null && (x = B);
        break;
      }
      e && x && Pe.alternate === null && n(f, x), a = o(Pe, a, P), C === null ? E = Pe : C.sibling = Pe, C = Pe, x = B;
    }
    if (L.done)
      return t(
        f,
        x
      ), F && gn(f, P), E;
    if (x === null) {
      for (; !L.done; P++, L = d.next())
        L = h(f, L.value, v), L !== null && (a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
      return F && gn(f, P), E;
    }
    for (x = r(f, x); !L.done; P++, L = d.next())
      L = g(x, f, P, L.value, v), L !== null && (e && L.alternate !== null && x.delete(L.key === null ? P : L.key), a = o(L, a, P), C === null ? E = L : C.sibling = L, C = L);
    return e && x.forEach(function(at) {
      return n(f, at);
    }), F && gn(f, P), E;
  }
  function I(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === jn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, C = a; C !== null; ) {
              if (C.key === E) {
                if (E = d.type, E === jn) {
                  if (C.tag === 7) {
                    t(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ze && xu(E) === C.type) {
                  t(f, C.sibling), a = l(C, d.props), a.ref = vt(f, C, d), a.return = f, f = a;
                  break e;
                }
                t(f, C);
                break;
              } else
                n(f, C);
              C = C.sibling;
            }
            d.type === jn ? (a = Cn(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Rr(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, f = v);
          }
          return i(f);
        case Mn:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C)
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
          return i(f);
        case Ze:
          return C = d._init, I(f, a, C(d._payload), v);
      }
      if (St(d))
        return w(f, a, d, v);
      if (ft(d))
        return S(f, a, d, v);
      mr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Kl(d, f.mode, v), a.return = f, f = a), i(f)) : t(f, a);
  }
  return I;
}
var tt = ma(!0), ha = ma(!1), bt = {}, Ue = mn(bt), Ht = mn(bt), Wt = mn(bt);
function En(e) {
  if (e === bt)
    throw Error(y(174));
  return e;
}
function vi(e, n) {
  switch (M(Wt, n), M(Ht, e), M(Ue, bt), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = lo(n, e);
  }
  D(Ue), M(Ue, n);
}
function rt() {
  D(Ue), D(Ht), D(Wt);
}
function va(e) {
  En(Wt.current);
  var n = En(Ue.current), t = lo(n, e.type);
  n !== t && (M(Ht, e), M(Ue, t));
}
function yi(e) {
  Ht.current === e && (D(Ue), D(Ht));
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
function gi() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Pr = Xe.ReactCurrentDispatcher, Vl = Xe.ReactCurrentBatchConfig, Nn = 0, $ = null, K = null, Z = null, Gr = !1, zt = !1, Qt = 0, fd = 0;
function ne() {
  throw Error(y(321));
}
function wi(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Me(e[t], n[t]))
      return !1;
  return !0;
}
function Si(e, n, t, r, l, o) {
  if (Nn = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Pr.current = e === null || e.memoizedState === null ? hd : vd, e = t(r, l), zt) {
    o = 0;
    do {
      if (zt = !1, Qt = 0, 25 <= o)
        throw Error(y(301));
      o += 1, Z = K = null, n.updateQueue = null, Pr.current = yd, e = t(r, l);
    } while (zt);
  }
  if (Pr.current = Zr, n = K !== null && K.next !== null, Nn = 0, Z = K = $ = null, Gr = !1, n)
    throw Error(y(300));
  return e;
}
function ki() {
  var e = Qt !== 0;
  return Qt = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z;
}
function xe() {
  if (K === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = K.next;
  var n = Z === null ? $.memoizedState : Z.next;
  if (n !== null)
    Z = n, K = e;
  else {
    if (e === null)
      throw Error(y(310));
    K = e, e = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
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
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, c = o;
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
        s === null ? (u = s = h, i = r) : s = s.next = h, $.lanes |= m, zn |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? i = r : s.next = u, Me(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
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
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    Me(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function ya() {
}
function ga(e, n) {
  var t = $, r = xe(), l = n(), o = !Me(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, Ei(ka.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || Z !== null && Z.memoizedState.tag & 1) {
    if (t.flags |= 2048, Yt(9, Sa.bind(null, t, r, l, n), void 0, null), J === null)
      throw Error(y(349));
    Nn & 30 || wa(t, n, l);
  }
  return l;
}
function wa(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function Sa(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ea(n) && _a(e);
}
function ka(e, n, t) {
  return t(function() {
    Ea(n) && _a(e);
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
function _a(e) {
  var n = Ke(e, 1);
  n !== null && Oe(n, e, 1, -1);
}
function Pu(e) {
  var n = De();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kt, lastRenderedState: e }, n.queue = e, e = e.dispatch = md.bind(null, $, e), [n.memoizedState, e];
}
function Yt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Ca() {
  return xe().memoizedState;
}
function Nr(e, n, t, r) {
  var l = De();
  $.flags |= e, l.memoizedState = Yt(1 | n, t, void 0, r === void 0 ? null : r);
}
function fl(e, n, t, r) {
  var l = xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (o = i.destroy, r !== null && wi(r, i.deps)) {
      l.memoizedState = Yt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Yt(1 | n, t, o, r);
}
function Nu(e, n) {
  return Nr(8390656, 8, e, n);
}
function Ei(e, n) {
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
function _i() {
}
function Ta(e, n) {
  var t = xe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function La(e, n) {
  var t = xe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && wi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function Ra(e, n, t) {
  return Nn & 21 ? (Me(t, n) || (t = js(), $.lanes |= t, zn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
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
    ja(n, t);
  else if (t = ca(e, n, t, r), t !== null) {
    var l = ie();
    Oe(t, e, r, l), Da(t, n, r);
  }
}
function md(e, n, t) {
  var r = an(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ma(e))
    ja(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
      try {
        var i = n.lastRenderedState, u = o(i, t);
        if (l.hasEagerState = !0, l.eagerState = u, Me(u, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, mi(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ca(e, n, l, r), t !== null && (l = ie(), Oe(t, e, r, l), Da(t, n, r));
  }
}
function Ma(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function ja(e, n) {
  zt = Gr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Da(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ei(e, t);
  }
}
var Zr = { readContext: Ce, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, hd = { readContext: Ce, useCallback: function(e, n) {
  return De().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: Ce, useEffect: Nu, useImperativeHandle: function(e, n, t) {
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
  var t = De();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = De();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = pd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = De();
  return e = { current: e }, n.memoizedState = e;
}, useState: Pu, useDebugValue: _i, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Pu(!1), n = e[0];
  return e = dd.bind(null, e[1]), De().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = De();
  if (F) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), J === null)
      throw Error(y(349));
    Nn & 30 || wa(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Nu(ka.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Yt(9, Sa.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = De(), n = J.identifierPrefix;
  if (F) {
    var t = Be, r = Ve;
    t = (r & ~(1 << 32 - Re(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Qt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = fd++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, vd = {
  readContext: Ce,
  useCallback: Ta,
  useContext: Ce,
  useEffect: Ei,
  useImperativeHandle: za,
  useInsertionEffect: xa,
  useLayoutEffect: Pa,
  useMemo: La,
  useReducer: Bl,
  useRef: Ca,
  useState: function() {
    return Bl(Kt);
  },
  useDebugValue: _i,
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
}, yd = { readContext: Ce, useCallback: Ta, useContext: Ce, useEffect: Ei, useImperativeHandle: za, useInsertionEffect: xa, useLayoutEffect: Pa, useMemo: La, useReducer: Hl, useRef: Ca, useState: function() {
  return Hl(Kt);
}, useDebugValue: _i, useDeferredValue: function(e) {
  var n = xe();
  return K === null ? n.memoizedState = e : Ra(n, K.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Kt)[0], n = xe().memoizedState;
  return [e, n];
}, useMutableSource: ya, useSyncExternalStore: ga, useId: Oa, unstable_isNewReconciler: !1 };
function lt(e, n) {
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
    var i = n.stack;
    this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function zu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Od.bind(null, e, n, t), n.then(e, e));
}
function Tu(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lu(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = He(-1, 1), n.tag = 2, un(t, n, 1))), t.lanes |= 1), e);
}
var wd = Xe.ReactCurrentOwner, ce = !1;
function oe(e, n, t, r) {
  n.child = e === null ? ha(n, null, t, r) : tt(n, e.child, t, r);
}
function Ru(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Jn(n, l), r = Si(e, n, t, r, o, l), t = ki(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && t && si(n), n.flags |= 1, oe(e, n, r, l), n.child);
}
function Ou(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Ri(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ua(e, n, o, r, l)) : (e = Rr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : $t, t(i, r) && e.ref === n.ref)
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
  return oe(e, n, l, t), n.child;
}
function Aa(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function To(e, n, t, r, l) {
  var o = de(t) ? xn : le.current;
  return o = et(n, o), Jn(n, l), t = Si(e, n, t, r, o, l), r = ki(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Ye(e, n, l)) : (F && r && si(n), n.flags |= 1, oe(e, n, t, l), n.child);
}
function Mu(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    Br(n);
  } else
    o = !1;
  if (Jn(n, l), n.stateNode === null)
    zr(e, n), pa(n, t, r), No(n, t, r, l), r = !0;
  else if (e === null) {
    var i = n.stateNode, u = n.memoizedProps;
    i.props = u;
    var s = i.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = Ce(c) : (c = de(t) ? xn : le.current, c = et(n, c));
    var m = t.getDerivedStateFromProps, h = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && Cu(n, i, r, c), Je = !1;
    var p = n.memoizedState;
    i.state = p, Yr(n, r, i, l), s = n.memoizedState, u !== r || p !== s || fe.current || Je ? (typeof m == "function" && (Po(n, t, m, r), s = n.memoizedState), (u = Je || _u(n, t, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = c, r = u) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    i = n.stateNode, fa(e, n), u = n.memoizedProps, c = n.type === n.elementType ? u : ze(n.type, u), i.props = c, h = n.pendingProps, p = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ce(s) : (s = de(t) ? xn : le.current, s = et(n, s));
    var g = t.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && Cu(n, i, r, s), Je = !1, p = n.memoizedState, i.state = p, Yr(n, r, i, l);
    var w = n.memoizedState;
    u !== h || p !== w || fe.current || Je ? (typeof g == "function" && (Po(n, t, g, r), w = n.memoizedState), (c = Je || _u(n, t, c, r, p, w, s) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), i.props = r, i.state = w, i.context = s, r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Lo(e, n, t, r, o, l);
}
function Lo(e, n, t, r, l, o) {
  Aa(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i)
    return l && gu(n, t, !1), Ye(e, n, o);
  r = n.stateNode, wd.current = n;
  var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && i ? (n.child = tt(n, e.child, null, o), n.child = tt(n, null, u, o)) : oe(e, n, u, o), n.memoizedState = r.state, l && gu(n, t, !0), n.child;
}
function Va(e) {
  var n = e.stateNode;
  n.pendingContext ? yu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && yu(e, n.context, !1), vi(e, n.containerInfo);
}
function ju(e, n, t, r, l) {
  return nt(), ci(l), n.flags |= 256, oe(e, n, t, r), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ba(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, i = (n.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, l & 1), e === null)
    return Co(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = ml(i, r, 0, null), e = Cn(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = Oo(t), n.memoizedState = Ro, e) : Ci(n, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null))
    return Sd(e, n, i, r, u, l, t);
  if (o) {
    o = r.fallback, i = n.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = cn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = cn(u, o) : (o = Cn(o, i, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, i = e.child.memoizedState, i = i === null ? Oo(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~t, n.memoizedState = Ro, r;
  }
  return o = e.child, e = o.sibling, r = cn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Ci(e, n) {
  return n = ml({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function hr(e, n, t, r) {
  return r !== null && ci(r), tt(n, e.child, null, t), e = Ci(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Sd(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Wl(Error(y(422))), hr(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = ml({ mode: "visible", children: r.children }, l, 0, null), o = Cn(o, l, i, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && tt(n, e.child, null, i), n.child.memoizedState = Oo(i), n.memoizedState = Ro, o);
  if (!(n.mode & 1))
    return hr(e, n, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var u = r.dgst;
    return r = u, o = Error(y(419)), r = Wl(o, r, void 0), hr(e, n, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ce || u) {
    if (r = J, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ke(e, l), Oe(r, e, l, -1));
    }
    return Li(), r = Wl(Error(y(421))), hr(e, n, i, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Md.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, he = on(l.nextSibling), ve = n, F = !0, Le = null, e !== null && (Se[ke++] = Ve, Se[ke++] = Be, Se[ke++] = Pn, Ve = e.id, Be = e.overflow, Pn = n), n = Ci(n, r.children), n.flags |= 4096, n);
}
function Du(e, n, t) {
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
  if (oe(e, n, r.children, t), r = U.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Du(e, t, n);
          else if (e.tag === 19)
            Du(e, t, n);
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
      Va(n), nt();
      break;
    case 5:
      va(n);
      break;
    case 1:
      de(n.type) && Br(n);
      break;
    case 4:
      vi(n, n.stateNode.containerInfo);
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
    var i;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u)
            u.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ot.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
            for (i in s)
              s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
          } else
            t || (o || (o = []), o.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ot.hasOwnProperty(c) ? (s != null && c === "onScroll" && j("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
Ka = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
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
function te(e) {
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
  switch (ai(n), n.tag) {
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
      return te(n), null;
    case 1:
      return de(n.type) && Vr(), te(n), null;
    case 3:
      return r = n.stateNode, rt(), D(fe), D(le), gi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Le !== null && (Vo(Le), Le = null))), Mo(e, n), te(n), null;
    case 5:
      yi(n);
      var l = En(Wt.current);
      if (t = n.type, e !== null && n.stateNode != null)
        Qa(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return te(n), null;
        }
        if (e = En(Ue.current), pr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ie] = n, r[Bt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              j("cancel", r), j("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              j("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Et.length; l++)
                j(Et[l], r);
              break;
            case "source":
              j("error", r);
              break;
            case "img":
            case "image":
            case "link":
              j(
                "error",
                r
              ), j("load", r);
              break;
            case "details":
              j("toggle", r);
              break;
            case "input":
              Wi(r, o), j("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, j("invalid", r);
              break;
            case "textarea":
              Ki(r, o), j("invalid", r);
          }
          oo(t, o), l = null;
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && dr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && dr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : Ot.hasOwnProperty(i) && u != null && i === "onScroll" && j("scroll", r);
            }
          switch (t) {
            case "input":
              lr(r), Qi(r, o, !0);
              break;
            case "textarea":
              lr(r), Yi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ar);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ws(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[Ie] = n, e[Bt] = r, Wa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (i = io(t, r), t) {
              case "dialog":
                j("cancel", e), j("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Et.length; l++)
                  j(Et[l], e);
                l = r;
                break;
              case "source":
                j("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                j(
                  "error",
                  e
                ), j("load", e), l = r;
                break;
              case "details":
                j("toggle", e), l = r;
                break;
              case "input":
                Wi(e, r), l = eo(e, r), j("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = A({}, r, { value: void 0 }), j("invalid", e);
                break;
              case "textarea":
                Ki(e, r), l = ro(e, r), j("invalid", e);
                break;
              default:
                l = r;
            }
            oo(t, l), u = l;
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style" ? Es(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ss(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ot.hasOwnProperty(o) ? s != null && o === "onScroll" && j("scroll", e) : s != null && Xo(e, o, s, i));
              }
            switch (t) {
              case "input":
                lr(e), Qi(e, r, !1);
                break;
              case "textarea":
                lr(e), Yi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yn(e, !!r.multiple, o, !1) : r.defaultValue != null && Yn(
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
      return te(n), null;
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
      return te(n), null;
    case 13:
      if (D(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && he !== null && n.mode & 1 && !(n.flags & 128))
          aa(), nt(), n.flags |= 98560, o = !1;
        else if (o = pr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Ie] = n;
          } else
            nt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          te(n), o = !1;
        } else
          Le !== null && (Vo(Le), Le = null), o = !0;
        if (!o)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? Y === 0 && (Y = 3) : Li())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
    case 4:
      return rt(), Mo(e, n), e === null && At(n.stateNode.containerInfo), te(n), null;
    case 10:
      return pi(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Vr(), te(n), null;
    case 19:
      if (D(U), o = n.memoizedState, o === null)
        return te(n), null;
      if (r = (n.flags & 128) !== 0, i = o.rendering, i === null)
        if (r)
          yt(o, !1);
        else {
          if (Y !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (i = Xr(e), i !== null) {
                for (n.flags |= 128, yt(o, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  o = t, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return M(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null && W() > ot && (n.flags |= 128, r = !0, yt(o, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Xr(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), yt(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !F)
              return te(n), null;
          } else
            2 * W() - o.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, yt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (i.sibling = n.child, n.child = i) : (t = o.last, t !== null ? t.sibling = i : n.child = i, o.last = i);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = W(), n.sibling = null, t = U.current, M(U, r ? t & 1 | 2 : t & 1), n) : (te(n), null);
    case 22:
    case 23:
      return Ti(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function _d(e, n) {
  switch (ai(n), n.tag) {
    case 1:
      return de(n.type) && Vr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return rt(), D(fe), D(le), gi(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return yi(n), null;
    case 13:
      if (D(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        nt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return D(U), null;
    case 4:
      return rt(), null;
    case 10:
      return pi(n.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1, re = !1, Cd = typeof WeakSet == "function" ? WeakSet : Set, k = null;
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
function jo(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Iu = !1;
function xd(e, n) {
  if (yo = Fr, e = Zs(), ui(e)) {
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
          var i = 0, u = -1, s = -1, c = 0, m = 0, h = e, p = null;
          n:
            for (; ; ) {
              for (var g; h !== t || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (g = h.firstChild) !== null; )
                p = h, h = g;
              for (; ; ) {
                if (h === e)
                  break n;
                if (p === t && ++c === l && (u = i), p === o && ++m === r && (s = i), (g = h.nextSibling) !== null)
                  break;
                h = p, p = h.parentNode;
              }
              h = g;
            }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
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
  return w = Iu, Iu = !1, w;
}
function Tt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && jo(n, t, o);
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
function Do(e) {
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
  n !== null && (e.alternate = null, Ya(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ie], delete n[Bt], delete n[ko], delete n[ud], delete n[sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
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
var q = null, Te = !1;
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
      re || Hn(t, n);
    case 6:
      var r = q, l = Te;
      q = null, Ge(e, n, t), q = r, Te = l, q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null && (Te ? (e = q, t = t.stateNode, e.nodeType === 8 ? Ul(e.parentNode, t) : e.nodeType === 1 && Ul(e, t), Ft(e)) : Ul(q, t.stateNode));
      break;
    case 4:
      r = q, l = Te, q = t.stateNode.containerInfo, Te = !0, Ge(e, n, t), q = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && jo(t, n, i), l = l.next;
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!re && (Hn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (re = (r = re) || t.memoizedState !== null, Ge(e, n, t), re = r) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Uu(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Cd()), n.forEach(function(r) {
      var l = jd.bind(null, e, r);
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
        var o = e, i = n, u = i;
        e:
          for (; u !== null; ) {
            switch (u.tag) {
              case 5:
                q = u.stateNode, Te = !1;
                break e;
              case 3:
                q = u.stateNode.containerInfo, Te = !0;
                break e;
              case 4:
                q = u.stateNode.containerInfo, Te = !0;
                break e;
            }
            u = u.return;
          }
        if (q === null)
          throw Error(y(160));
        Ga(o, i, l), q = null, Te = !1;
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
      if (Ne(n, e), je(e), r & 4) {
        try {
          Tt(3, e, e.return), dl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          Tt(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Ne(n, e), je(e), r & 512 && t !== null && Hn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), je(e), r & 512 && t !== null && Hn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Mt(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = t !== null ? t.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            u === "input" && o.type === "radio" && o.name != null && ys(l, o), io(u, i);
            var c = io(u, o);
            for (i = 0; i < s.length; i += 2) {
              var m = s[i], h = s[i + 1];
              m === "style" ? Es(l, h) : m === "dangerouslySetInnerHTML" ? Ss(l, h) : m === "children" ? Mt(l, h) : Xo(l, m, h, c);
            }
            switch (u) {
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
                g != null ? Yn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Yn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bt] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if (Ne(n, e), je(e), r & 4) {
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
      if (Ne(n, e), je(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Ft(n.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      Ne(n, e), je(e);
      break;
    case 13:
      Ne(n, e), je(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ni = W())), r & 4 && Uu(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (re = (c = re) || m, Ne(n, e), re = c) : Ne(n, e), je(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (k = e, m = e.child; m !== null; ) {
            for (h = k = m; k !== null; ) {
              switch (p = k, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tt(4, p, p.return);
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
                    Au(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, k = g) : Au(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = ks("display", i));
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
      Ne(n, e), je(e), r & 4 && Uu(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), je(e);
  }
}
function je(e) {
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
          var o = Fu(e);
          Fo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = Fu(e);
          Io(e, u, i);
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
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || re;
        u = vr;
        var c = re;
        if (vr = i, (re = s) && !c)
          for (k = l; k !== null; )
            i = k, s = i.child, i.tag === 22 && i.memoizedState !== null ? Vu(l) : s !== null ? (s.return = i, k = s) : Vu(l);
        for (; o !== null; )
          k = o, Ja(o), o = o.sibling;
        k = l, vr = u, re = c;
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, k = o) : $u(e);
  }
}
function $u(e) {
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
              re || dl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = n.updateQueue;
              o !== null && Eu(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                Eu(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
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
        re || n.flags & 512 && Do(n);
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
function Au(e) {
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
function Vu(e) {
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
            Do(n);
          } catch (s) {
            V(n, o, s);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Do(n);
          } catch (s) {
            V(n, i, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      u.return = n.return, k = u;
      break;
    }
    k = n.return;
  }
}
var Nd = Math.ceil, Jr = Xe.ReactCurrentDispatcher, xi = Xe.ReactCurrentOwner, _e = Xe.ReactCurrentBatchConfig, R = 0, J = null, Q = null, b = 0, me = 0, Wn = mn(0), Y = 0, Xt = null, zn = 0, pl = 0, Pi = 0, Lt = null, ae = null, Ni = 0, ot = 1 / 0, $e = null, qr = !1, Uo = null, sn = null, yr = !1, nn = null, br = 0, Rt = 0, $o = null, Tr = -1, Lr = 0;
function ie() {
  return R & 6 ? W() : Tr !== -1 ? Tr : Tr = W();
}
function an(e) {
  return e.mode & 1 ? R & 2 && b !== 0 ? b & -b : cd.transition !== null ? (Lr === 0 && (Lr = js()), Lr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vs(e.type)), e) : 1;
}
function Oe(e, n, t, r) {
  if (50 < Rt)
    throw Rt = 0, $o = null, Error(y(185));
  Zt(e, t, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (pl |= t), Y === 4 && be(e, b)), pe(e, r), t === 1 && R === 0 && !(n.mode & 1) && (ot = W() + 500, al && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  cf(e, n);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Zi(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && Zi(t), n === 1)
      e.tag === 0 ? ad(Bu.bind(null, e)) : ia(Bu.bind(null, e)), od(function() {
        !(R & 6) && hn();
      }), t = null;
    else {
      switch (Ds(r)) {
        case 1:
          t = bo;
          break;
        case 4:
          t = Os;
          break;
        case 16:
          t = Dr;
          break;
        case 536870912:
          t = Ms;
          break;
        default:
          t = Dr;
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
  if (qn() && e.callbackNode !== t)
    return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = el(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var o = ec();
    (J !== e || b !== n) && ($e = null, ot = W() + 500, _n(e, n));
    do
      try {
        Ld();
        break;
      } catch (u) {
        ba(e, u);
      }
    while (1);
    di(), Jr.current = o, R = l, Q !== null ? n = 0 : (J = null, b = 0, n = Y);
  }
  if (n !== 0) {
    if (n === 2 && (l = fo(e), l !== 0 && (r = l, n = Ao(e, l))), n === 1)
      throw t = Xt, _n(e, 0), be(e, r), pe(e, W()), t;
    if (n === 6)
      be(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !zd(l) && (n = el(e, r), n === 2 && (o = fo(e), o !== 0 && (r = o, n = Ao(e, o))), n === 1))
        throw t = Xt, _n(e, 0), be(e, r), pe(e, W()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (be(e, r), (r & 130023424) === r && (n = Ni + 500 - W(), 10 < n)) {
            if (Ir(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
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
            var i = 31 - Re(r);
            o = 1 << i, i = n[i], i > l && (l = i), r &= ~o;
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
  var t = Lt;
  return e.current.memoizedState.isDehydrated && (_n(e, n).flags |= 256), e = el(e, n), e !== 2 && (n = ae, ae = t, n !== null && Vo(n)), e;
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
  for (n &= ~Pi, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Re(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Bu(e) {
  if (R & 6)
    throw Error(y(327));
  qn();
  var n = Ir(e, 0);
  if (!(n & 1))
    return pe(e, W()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fo(e);
    r !== 0 && (n = r, t = Ao(e, r));
  }
  if (t === 1)
    throw t = Xt, _n(e, 0), be(e, n), pe(e, W()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, wn(e, ae, $e), pe(e, W()), null;
}
function zi(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    R = t, R === 0 && (ot = W() + 500, al && hn());
  }
}
function Tn(e) {
  nn !== null && nn.tag === 0 && !(R & 6) && qn();
  var n = R;
  R |= 1;
  var t = _e.transition, r = O;
  try {
    if (_e.transition = null, O = 1, e)
      return e();
  } finally {
    O = r, _e.transition = t, R = n, !(R & 6) && hn();
  }
}
function Ti() {
  me = Wn.current, D(Wn);
}
function _n(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, ld(t)), Q !== null)
    for (t = Q.return; t !== null; ) {
      var r = t;
      switch (ai(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Vr();
          break;
        case 3:
          rt(), D(fe), D(le), gi();
          break;
        case 5:
          yi(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          D(U);
          break;
        case 19:
          D(U);
          break;
        case 10:
          pi(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      t = t.return;
    }
  if (J = e, Q = e = cn(e.current, null), b = me = n, Y = 0, Xt = null, Pi = pl = zn = 0, ae = Lt = null, kn !== null) {
    for (n = 0; n < kn.length; n++)
      if (t = kn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
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
      if (di(), Pr.current = Zr, Gr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Nn = 0, Z = K = $ = null, zt = !1, Qt = 0, xi.current = null, t === null || t.return === null) {
        Y = 1, Xt = n, Q = null;
        break;
      }
      e: {
        var o = e, i = t.return, u = t, s = n;
        if (n = b, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = Tu(i);
          if (g !== null) {
            g.flags &= -257, Lu(g, i, u, o, n), g.mode & 1 && zu(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), n.updateQueue = S;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              zu(o, c, n), Li();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && u.mode & 1) {
          var I = Tu(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Lu(I, i, u, o, n), ci(lt(s, u));
            break e;
          }
        }
        o = s = lt(s, u), Y !== 4 && (Y = 2), Lt === null ? Lt = [o] : Lt.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ia(o, s, n);
              ku(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (sn === null || !sn.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Fa(o, u, n);
                ku(o, v);
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
function Li() {
  (Y === 0 || Y === 3 || Y === 2) && (Y = 4), J === null || !(zn & 268435455) && !(pl & 268435455) || be(J, b);
}
function el(e, n) {
  var t = R;
  R |= 2;
  var r = ec();
  (J !== e || b !== n) && ($e = null, _n(e, n));
  do
    try {
      Td();
      break;
    } catch (l) {
      ba(e, l);
    }
  while (1);
  if (di(), R = t, Jr.current = r, Q !== null)
    throw Error(y(261));
  return J = null, b = 0, Y;
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
  e.memoizedProps = e.pendingProps, n === null ? tc(e) : Q = n, xi.current = null;
}
function tc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = _d(t, n), t !== null) {
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
  var r = O, l = _e.transition;
  try {
    _e.transition = null, O = 1, Rd(e, n, t, r);
  } finally {
    _e.transition = l, O = r;
  }
  return null;
}
function Rd(e, n, t, r) {
  do
    qn();
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
  if (ff(e, o), e === J && (Q = J = null, b = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || yr || (yr = !0, oc(Dr, function() {
    return qn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = _e.transition, _e.transition = null;
    var i = O;
    O = 1;
    var u = R;
    R |= 4, xi.current = null, xd(e, t), Za(t, e), Jf(go), Fr = !!yo, go = yo = null, e.current = t, Pd(t), nf(), R = u, O = i, _e.transition = o;
  } else
    e.current = t;
  if (yr && (yr = !1, nn = e, br = l), o = e.pendingLanes, o === 0 && (sn = null), lf(t.stateNode), pe(e, W()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr)
    throw qr = !1, e = Uo, Uo = null, e;
  return br & 1 && e.tag !== 0 && qn(), o = e.pendingLanes, o & 1 ? e === $o ? Rt++ : (Rt = 0, $o = e) : Rt = 0, hn(), null;
}
function qn() {
  if (nn !== null) {
    var e = Ds(br), n = _e.transition, t = O;
    try {
      if (_e.transition = null, O = 16 > e ? 16 : e, nn === null)
        var r = !1;
      else {
        if (e = nn, nn = null, br = 0, R & 6)
          throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var o = k, i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (k = c; k !== null; ) {
                  var m = k;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(8, m, o);
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
          if (o.subtreeFlags & 2064 && i !== null)
            i.return = o, k = i;
          else
            e:
              for (; k !== null; ) {
                if (o = k, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tt(9, o, o.return);
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
          i = k;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null)
            d.return = i, k = d;
          else
            e:
              for (i = a; k !== null; ) {
                if (u = k, u.flags & 2048)
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, u);
                    }
                  } catch (E) {
                    V(u, u.return, E);
                  }
                if (u === i) {
                  k = null;
                  break e;
                }
                var v = u.sibling;
                if (v !== null) {
                  v.return = u.return, k = v;
                  break e;
                }
                k = u.return;
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
      O = t, _e.transition = n;
    }
  }
  return !1;
}
function Hu(e, n, t) {
  n = lt(t, n), n = Ia(e, n, 1), e = un(e, n, 1), n = ie(), e !== null && (Zt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3)
    Hu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Hu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
          e = lt(t, e), e = Fa(n, e, 1), n = un(n, e, 1), e = ie(), n !== null && (Zt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Od(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ie(), e.pingedLanes |= e.suspendedLanes & t, J === e && (b & t) === t && (Y === 4 || Y === 3 && (b & 130023424) === b && 500 > W() - Ni ? _n(e, 0) : Pi |= t), pe(e, n);
}
function rc(e, n) {
  n === 0 && (e.mode & 1 ? (n = ur, ur <<= 1, !(ur & 130023424) && (ur = 4194304)) : n = 1);
  var t = ie();
  e = Ke(e, n), e !== null && (Zt(e, n, t), pe(e, t));
}
function Md(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), rc(e, t);
}
function jd(e, n) {
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
    ce = !1, F && n.flags & 1048576 && ua(n, Wr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      zr(e, n), e = n.pendingProps;
      var l = et(n, le.current);
      Jn(n, t), l = Si(null, n, r, e, l, t);
      var o = ki();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (o = !0, Br(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, hi(n), l.updater = cl, n.stateNode = l, l._reactInternals = n, No(n, r, e, t), n = Lo(null, n, r, !0, o, t)) : (n.tag = 0, F && o && si(n), oe(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (zr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Id(r), e = ze(r, e), l) {
          case 0:
            n = To(null, n, r, e, t);
            break e;
          case 1:
            n = Mu(null, n, r, e, t);
            break e;
          case 11:
            n = Ru(null, n, r, e, t);
            break e;
          case 14:
            n = Ou(null, n, r, ze(r.type, e), t);
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
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Mu(e, n, r, l, t);
    case 3:
      e: {
        if (Va(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, fa(e, n), Yr(n, r, null, t);
        var i = n.memoizedState;
        if (r = i.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = lt(Error(y(423)), n), n = ju(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = lt(Error(y(424)), n), n = ju(e, n, r, t, l);
            break e;
          } else
            for (he = on(n.stateNode.containerInfo.firstChild), ve = n, F = !0, Le = null, t = ha(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (nt(), r === l) {
            n = Ye(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return va(n), e === null && Co(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, wo(r, l) ? i = null : o !== null && wo(r, o) && (n.flags |= 32), Aa(e, n), oe(e, n, i, t), n.child;
    case 6:
      return e === null && Co(n), null;
    case 13:
      return Ba(e, n, t);
    case 4:
      return vi(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = tt(n, null, r, t) : oe(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Ru(e, n, r, l, t);
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, i = l.value, M(Qr, r._currentValue), r._currentValue = i, o !== null)
          if (Me(o.value, i)) {
            if (o.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
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
                    ), u.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (i = o.return, i === null)
                  throw Error(y(341));
                i.lanes |= t, u = i.alternate, u !== null && (u.lanes |= t), xo(i, t, n), i = o.sibling;
              } else
                i = o.child;
              if (i !== null)
                i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (o = i.sibling, o !== null) {
                    o.return = i.return, i = o;
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Jn(n, t), l = Ce(l), r = r(l), n.flags |= 1, oe(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Ou(e, n, r, l, t);
    case 15:
      return Ua(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zr(e, n), n.tag = 1, de(r) ? (e = !0, Br(n)) : e = !1, Jn(n, t), pa(n, r, l), No(n, r, l, t), Lo(null, n, r, !0, e, t);
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
function Dd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new Dd(e, n, t, r);
}
function Ri(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function")
    return Ri(e) ? 1 : 0;
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
  var i = 2;
  if (r = e, typeof e == "function")
    Ri(e) && (i = 1);
  else if (typeof e == "string")
    i = 5;
  else
    e:
      switch (e) {
        case jn:
          return Cn(t.children, l, o, n);
        case Go:
          i = 8, l |= 8;
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
                i = 10;
                break e;
              case ps:
                i = 9;
                break e;
              case Zo:
                i = 11;
                break e;
              case Jo:
                i = 14;
                break e;
              case Ze:
                i = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Ee(i, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function Cn(e, n, t, r) {
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
function Oi(e, n, t, r, l, o, i, u, s) {
  return e = new Fd(e, n, t, u, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, hi(o), e;
}
function Ud(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Mn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function ic(e) {
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
function uc(e, n, t, r, l, o, i, u, s) {
  return e = Oi(t, r, !0, e, l, o, i, u, s), e.context = ic(null), t = e.current, r = ie(), l = an(t), o = He(r, l), o.callback = n ?? null, un(t, o, l), e.current.lanes = l, Zt(e, l, r), pe(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, o = ie(), i = an(l);
  return t = ic(t), n.context === null ? n.context = t : n.pendingContext = t, n = He(o, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = un(l, n, i), e !== null && (Oe(e, l, i, o), xr(e, l, i)), i;
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
function Wu(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Mi(e, n) {
  Wu(e, n), (e = e.alternate) && Wu(e, n);
}
function $d() {
  return null;
}
var sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ji(e) {
  this._internalRoot = e;
}
vl.prototype.render = ji.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  hl(e, n, null, null);
};
vl.prototype.unmount = ji.prototype.unmount = function() {
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
function Di(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qu() {
}
function Ad(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = nl(i);
        o.call(c);
      };
    }
    var i = uc(n, r, e, 0, null, !1, !1, "", Qu);
    return e._reactRootContainer = i, e[Qe] = i.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(), i;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = nl(s);
      u.call(c);
    };
  }
  var s = Oi(e, 0, !1, null, null, !1, !1, "", Qu);
  return e._reactRootContainer = s, e[Qe] = s.current, At(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
    hl(n, s, t, r);
  }), s;
}
function gl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = nl(i);
        u.call(s);
      };
    }
    hl(n, i, e, l);
  } else
    i = Ad(t, n, e, l, r);
  return nl(i);
}
Is = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 && (ei(n, t | 1), pe(n, W()), !(R & 6) && (ot = W() + 500, hn()));
      }
      break;
    case 13:
      Tn(function() {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }), Mi(e, 1);
  }
};
ni = function(e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = ie();
      Oe(n, e, 134217728, t);
    }
    Mi(e, 134217728);
  }
};
Fs = function(e) {
  if (e.tag === 13) {
    var n = an(e), t = Ke(e, n);
    if (t !== null) {
      var r = ie();
      Oe(t, e, n, r);
    }
    Mi(e, n);
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
      n = t.value, n != null && Yn(e, !!t.multiple, n, !1);
  }
};
xs = zi;
Ps = Tn;
var Vd = { usingClientEntryPoint: !1, Events: [qt, Un, sl, _s, Cs, zi] }, gt = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Bd = { bundleType: gt.bundleType, version: gt.version, rendererPackageName: gt.rendererPackageName, rendererConfig: gt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Xe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ts(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gt.findFiberByHostInstance || $d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
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
  if (!Di(n))
    throw Error(y(200));
  return Ud(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!Di(e))
    throw Error(y(299));
  var t = !1, r = "", l = sc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Oi(e, 1, !1, null, null, t, !1, r, l), e[Qe] = n.current, At(e.nodeType === 8 ? e.parentNode : e), new ji(n);
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
  if (!Di(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", i = sc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = uc(n, null, e, 1, t ?? null, l, !1, o, i), e[Qe] = n.current, At(e), r)
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
ge.unstable_batchedUpdates = zi;
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
ac(), us.exports = ge;
var Hd = us.exports, Ku = Hd;
Xl.createRoot = Ku.createRoot, Xl.hydrateRoot = Ku.hydrateRoot;
var cc = { exports: {} }, Wd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Qd = Wd, Kd = Qd;
function fc() {
}
function dc() {
}
dc.resetWarningCache = fc;
var Yd = function() {
  function e(r, l, o, i, u, s) {
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
const Qn = /* @__PURE__ */ Gu(Xd), tl = Symbol.for("r2wc.reactRender"), Yu = Symbol.for("r2wc.shouldRender"), wr = Symbol.for("r2wc.root");
function Gd(e = "") {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Zd(e = "") {
  return e.replace(/-([a-z0-9])/g, function(n) {
    return n[1].toUpperCase();
  });
}
var Xu = {
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
  }, o = !1, i = function() {
    var c = Reflect.construct(HTMLElement, arguments, this.constructor);
    return typeof r.shadow == "string" ? c.attachShadow({ mode: r.shadow }) : r.shadow && (console.warn(
      'Specifying the "shadow" option as a boolean is deprecated and will be removed in a future version.'
    ), c.attachShadow({ mode: "open" })), c;
  }, u = Object.create(HTMLElement.prototype);
  u.constructor = i;
  var s = new Proxy(u, {
    has: function(c, m) {
      return m in e.propTypes || m in u;
    },
    set: function(c, m, h, p) {
      return o && (l[m] = !0), typeof m == "symbol" || l[m] || m in c ? (e.propTypes && m in e.propTypes && Xu.expando(p, m, h), Reflect.set(c, m, h, p)) : (Xu.expando(p, m, h), !0);
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
  return i.prototype = s, u.connectedCallback = function() {
    this[Yu] = !0, this[tl]();
  }, u.disconnectedCallback = function() {
    typeof t.createRoot == "function" ? this[wr].unmount() : t.unmountComponentAtNode(this);
  }, u[tl] = function() {
    if (this[Yu] === !0) {
      var c = {};
      Object.keys(this).forEach(function(p) {
        l[p] !== !1 && (c[p] = this[p]);
      }, this), o = !0;
      const m = r.shadow ? this.shadowRoot : this, h = n.createElement(e, c);
      typeof t.createRoot == "function" ? (this[wr] || (this[wr] = t.createRoot(m)), this[wr].render(h)) : t.render(h, m), o = !1;
    }
  }, e.propTypes && (i.observedAttributes = r.dashStyleAttributes ? Object.keys(e.propTypes).map(function(c) {
    return Gd(c);
  }) : Object.keys(e.propTypes), u.attributeChangedCallback = function(c, m, h) {
    var p = r.dashStyleAttributes ? Zd(c) : c;
    this[p] = h;
  }), i;
}
class pc extends os.Component {
  render() {
    return /* @__PURE__ */ G.jsxs("div", { className: "wrapper", children: [
      /* @__PURE__ */ G.jsx("h2", { children: "Road Blocks" }),
      /* @__PURE__ */ G.jsx(mc, { proxy: this.props.proxy })
    ] });
  }
}
Fi(pc, "propTypes", {
  events: Qn.string,
  proxy: Qn.string
});
function mc(e) {
  const [n, t] = Kn.useState([]);
  Kn.useState(!1), Kn.useEffect(() => {
    r().then((o) => t(o));
  }, []);
  async function r() {
    return [
      {
        road: "Nasa_Pkwy_E_Plane.002",
        inUse: !1
      },
      {
        road: "Banana_River_Dr_NE_Plane.011",
        inUse: !1
      },
      {
        road: "Cape_Rd_Plane.009",
        inUse: !1
      },
      {
        road: "Samuel_C_Philips_Pkwy_Mesh",
        inUse: !1
      },
      {
        road: "Lighthouse_Rd_Plane.005",
        inUse: !1
      },
      {
        road: "Pier_Rd_Plane.001",
        inUse: !1
      },
      {
        road: "A1A_Plane.004",
        inUse: !1
      }
    ];
  }
  function l(o) {
    const i = n.map((u, s) => s === o ? { ...u, inUse: !u.inUse } : u);
    t(i);
  }
  return /* @__PURE__ */ G.jsx("div", { className: "container", children: /* @__PURE__ */ G.jsx("div", { className: "row", children: /* @__PURE__ */ G.jsx("div", { className: "col", children: /* @__PURE__ */ G.jsx("div", { className: "table-responsive", children: /* @__PURE__ */ G.jsxs("table", { className: "table table-bordered table-hover text-white", children: [
    /* @__PURE__ */ G.jsx("thead", { children: /* @__PURE__ */ G.jsxs("tr", { children: [
      /* @__PURE__ */ G.jsx("th", { children: "Road" }),
      /* @__PURE__ */ G.jsx("th", { children: "Status" })
    ] }) }),
    /* @__PURE__ */ G.jsx("tbody", { children: n.map((o, i) => /* @__PURE__ */ G.jsxs(
      "tr",
      {
        className: o.inUse ? "table-danger" : "table-success",
        children: [
          /* @__PURE__ */ G.jsx("td", { children: o.road }),
          /* @__PURE__ */ G.jsx("td", { children: /* @__PURE__ */ G.jsx("div", { className: "form-check form-switch", children: /* @__PURE__ */ G.jsx(
            "input",
            {
              className: "form-check-input",
              type: "checkbox",
              id: `roadBlock-${i}`,
              checked: o.inUse,
              onChange: () => l(i)
            }
          ) }) })
        ]
      },
      i
    )) })
  ] }) }) }) }) });
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
