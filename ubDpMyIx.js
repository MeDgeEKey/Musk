const __vite__fileDeps = ["assets/Main-CaEiHOJR.js", "assets/Main-DzTXrcMZ.css", "assets/Improve-BMs0B2XZ.js", "assets/time-CfRNpiP4.js", "assets/Improve-Ck3tk631.css", "assets/Friends-Cg4IUMIv.js", "assets/Friends-CBclgqCL.css", "assets/Communities-Bvr_VwWy.js", "assets/Communities-DWhfZO4h.css", "assets/RichList-C9XHS66Y.js", "assets/BillingTopup-B6ijXk-o.js", "assets/RichList-B82slBKa.css", "assets/Negotiations-CF0l_h1s.js", "assets/Negotiations-D2ZnUERM.css", "assets/NegotiationsLeaderboards-D7TAQhOn.js", "assets/NegotiationsLeaderboards-Bv7AraMc.css", "assets/Quests-YUyVBrmo.js", "assets/function-call-Bn9C1rp_.js", "assets/Quests-PwETMmpz.css", "assets/Rating-MT5yvYVA.js", "assets/Rating-DqazOrIw.css", "assets/Hero-BvjCj479.js", "assets/Hero-BLTVbCAe.css", "assets/Lottery-_2b2Uol8.js", "assets/Lottery-BYEFEAtN.css", "assets/Fund-CC1ewyY6.js", "assets/Fund-CGR_RKsV.css", "assets/City-CZh8MjsG.js", "assets/City-CV7aQkhu.css", "assets/Store-D_AEVTvK.js", "assets/Store-Bc2-DVgM.css"]
  , __vite__mapDeps = i=>i.map(i=>__vite__fileDeps[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r=>{
        for (const a of r)
            if (a.type === "childList")
                for (const i of a.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && o(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity),
        r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function o(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const a = n(r);
        fetch(r.href, a)
    }
}
)();
function rl() {}
const ve = Object.assign
  , It = typeof window < "u"
  , hn = e=>e !== null && typeof e == "object"
  , De = e=>e != null
  , er = e=>typeof e == "function"
  , Nl = e=>hn(e) && er(e.then) && er(e.catch)
  , Mr = e=>Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime());
function Ju(e) {
    return e = e.replace(/[^-|\d]/g, ""),
    /^((\+86)|(86))?(1)\d{10}$/.test(e) || /^0[0-9-]{10,13}$/.test(e)
}
const ed = e=>typeof e == "number" || /^\d+(\.\d+)?$/.test(e)
  , fg = ()=>It ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Vs(e, t) {
    const n = t.split(".");
    let o = e;
    return n.forEach(r=>{
        var a;
        o = hn(o) && (a = o[r]) != null ? a : ""
    }
    ),
    o
}
function Le(e, t, n) {
    return t.reduce((o,r)=>((!n || e[r] !== void 0) && (o[r] = e[r]),
    o), {})
}
const fn = (e,t)=>JSON.stringify(e) === JSON.stringify(t)
  , Ra = e=>Array.isArray(e) ? e : [e]
  , hg = e=>e.reduce((t,n)=>t.concat(n), [])
  , Xe = null
  , q = [Number, String]
  , z = {
    type: Boolean,
    default: !0
}
  , dt = e=>({
    type: e,
    required: !0
})
  , Ye = ()=>({
    type: Array,
    default: ()=>[]
})
  , ot = e=>({
    type: Number,
    default: e
})
  , ce = e=>({
    type: q,
    default: e
})
  , X = e=>({
    type: String,
    default: e
});
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Hl(e, t) {
    const n = new Set(e.split(","));
    return o=>n.has(o)
}
const We = {}
  , Yo = []
  , Vt = ()=>{}
  , gg = ()=>!1
  , Ka = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , zl = e=>e.startsWith("onUpdate:")
  , at = Object.assign
  , jl = (e,t)=>{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , mg = Object.prototype.hasOwnProperty
  , Re = (e,t)=>mg.call(e, t)
  , pe = Array.isArray
  , qo = e=>Ga(e) === "[object Map]"
  , td = e=>Ga(e) === "[object Set]"
  , _e = e=>typeof e == "function"
  , Qe = e=>typeof e == "string"
  , Po = e=>typeof e == "symbol"
  , qe = e=>e !== null && typeof e == "object"
  , nd = e=>(qe(e) || _e(e)) && _e(e.then) && _e(e.catch)
  , od = Object.prototype.toString
  , Ga = e=>od.call(e)
  , vg = e=>Ga(e).slice(8, -1)
  , rd = e=>Ga(e) === "[object Object]"
  , Ul = e=>Qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Tr = Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Xa = e=>{
    const t = Object.create(null);
    return n=>t[n] || (t[n] = e(n))
}
  , bg = /-(\w)/g
  , gn = Xa(e=>e.replace(bg, (t,n)=>n ? n.toUpperCase() : ""))
  , yg = /\B([A-Z])/g
  , ro = Xa(e=>e.replace(yg, "-$1").toLowerCase())
  , Qa = Xa(e=>e.charAt(0).toUpperCase() + e.slice(1))
  , _i = Xa(e=>e ? `on${Qa(e)}` : "")
  , no = (e,t)=>!Object.is(e, t)
  , ki = (e,t)=>{
    for (let n = 0; n < e.length; n++)
        e[n](t)
}
  , ad = (e,t,n,o=!1)=>{
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: o,
        value: n
    })
}
  , pg = e=>{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , wg = e=>{
    const t = Qe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let Ns;
const id = ()=>Ns || (Ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
    if (pe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , r = Qe(o) ? _g(o) : Pt(o);
            if (r)
                for (const a in r)
                    t[a] = r[a]
        }
        return t
    } else if (Qe(e) || qe(e))
        return e
}
const Sg = /;(?![^(]*\))/g
  , Cg = /:([^]+)/
  , xg = /\/\*[^]*?\*\//g;
function _g(e) {
    const t = {};
    return e.replace(xg, "").split(Sg).forEach(n=>{
        if (n) {
            const o = n.split(Cg);
            o.length > 1 && (t[o[0].trim()] = o[1].trim())
        }
    }
    ),
    t
}
function kg(e) {
    let t = "";
    if (!e || Qe(e))
        return t;
    for (const n in e) {
        const o = e[n];
        if (Qe(o) || typeof o == "number") {
            const r = n.startsWith("--") ? n : ro(n);
            t += `${r}:${o};`
        }
    }
    return t
}
function Kt(e) {
    let t = "";
    if (Qe(e))
        t = e;
    else if (pe(e))
        for (let n = 0; n < e.length; n++) {
            const o = Kt(e[n]);
            o && (t += o + " ")
        }
    else if (qe(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Tg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , Pg = Hl(Tg);
function ld(e) {
    return !!e || e === ""
}
const le = e=>Qe(e) ? e : e == null ? "" : pe(e) || qe(e) && (e.toString === od || !_e(e.toString)) ? JSON.stringify(e, sd, 2) : String(e)
  , sd = (e,t)=>t && t.__v_isRef ? sd(e, t.value) : qo(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n,[o,r],a)=>(n[Ti(o, a) + " =>"] = r,
    n), {})
} : td(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n=>Ti(n))
} : Po(t) ? Ti(t) : qe(t) && !pe(t) && !rd(t) ? String(t) : t
  , Ti = (e,t="")=>{
    var n;
    return Po(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ot;
class cd {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this.parent = Ot,
        !t && Ot && (this.index = (Ot.scopes || (Ot.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ot;
            try {
                return Ot = this,
                t()
            } finally {
                Ot = n
            }
        }
    }
    on() {
        Ot = this
    }
    off() {
        Ot = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, o;
            for (n = 0,
            o = this.effects.length; n < o; n++)
                this.effects[n].stop();
            for (n = 0,
            o = this.cleanups.length; n < o; n++)
                this.cleanups[n]();
            if (this.scopes)
                for (n = 0,
                o = this.scopes.length; n < o; n++)
                    this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r,
                r.index = this.index)
            }
            this.parent = void 0,
            this._active = !1
        }
    }
}
function ud(e) {
    return new cd(e)
}
function Eg(e, t=Ot) {
    t && t.active && t.effects.push(e)
}
function dd() {
    return Ot
}
function Ag(e) {
    Ot && Ot.cleanups.push(e)
}
let So;
class Wl {
    constructor(t, n, o, r) {
        this.fn = t,
        this.trigger = n,
        this.scheduler = o,
        this.active = !0,
        this.deps = [],
        this._dirtyLevel = 4,
        this._trackId = 0,
        this._runnings = 0,
        this._shouldSchedule = !1,
        this._depsLength = 0,
        Eg(this, r)
    }
    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1,
            ao();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (Og(n.computed),
                this._dirtyLevel >= 4))
                    break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0),
            io()
        }
        return this._dirtyLevel >= 4
    }
    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }
    run() {
        if (this._dirtyLevel = 0,
        !this.active)
            return this.fn();
        let t = eo
          , n = So;
        try {
            return eo = !0,
            So = this,
            this._runnings++,
            Hs(this),
            this.fn()
        } finally {
            zs(this),
            this._runnings--,
            So = n,
            eo = t
        }
    }
    stop() {
        this.active && (Hs(this),
        zs(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Og(e) {
    return e.value
}
function Hs(e) {
    e._trackId++,
    e._depsLength = 0
}
function zs(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++)
            fd(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}
function fd(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t),
    e.size === 0 && e.cleanup())
}
let eo = !0
  , al = 0;
const hd = [];
function ao() {
    hd.push(eo),
    eo = !1
}
function io() {
    const e = hd.pop();
    eo = e === void 0 ? !0 : e
}
function Yl() {
    al++
}
function ql() {
    for (al--; !al && il.length; )
        il.shift()()
}
function gd(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const o = e.deps[e._depsLength];
        o !== t ? (o && fd(o, e),
        e.deps[e._depsLength++] = t) : e._depsLength++
    }
}
const il = [];
function md(e, t, n) {
    Yl();
    for (const o of e.keys()) {
        let r;
        o._dirtyLevel < t && (r ?? (r = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
        o._dirtyLevel = t),
        o._shouldSchedule && (r ?? (r = e.get(o) === o._trackId)) && (o.trigger(),
        (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1,
        o.scheduler && il.push(o.scheduler)))
    }
    ql()
}
const vd = (e,t)=>{
    const n = new Map;
    return n.cleanup = e,
    n.computed = t,
    n
}
  , La = new WeakMap
  , Co = Symbol("")
  , ll = Symbol("");
function Et(e, t, n) {
    if (eo && So) {
        let o = La.get(e);
        o || La.set(e, o = new Map);
        let r = o.get(n);
        r || o.set(n, r = vd(()=>o.delete(n))),
        gd(So, r)
    }
}
function _n(e, t, n, o, r, a) {
    const i = La.get(e);
    if (!i)
        return;
    let l = [];
    if (t === "clear")
        l = [...i.values()];
    else if (n === "length" && pe(e)) {
        const s = Number(o);
        i.forEach((c,u)=>{
            (u === "length" || !Po(u) && u >= s) && l.push(c)
        }
        )
    } else
        switch (n !== void 0 && l.push(i.get(n)),
        t) {
        case "add":
            pe(e) ? Ul(n) && l.push(i.get("length")) : (l.push(i.get(Co)),
            qo(e) && l.push(i.get(ll)));
            break;
        case "delete":
            pe(e) || (l.push(i.get(Co)),
            qo(e) && l.push(i.get(ll)));
            break;
        case "set":
            qo(e) && l.push(i.get(Co));
            break
        }
    Yl();
    for (const s of l)
        s && md(s, 4);
    ql()
}
function Bg(e, t) {
    const n = La.get(e);
    return n && n.get(t)
}
const $g = Hl("__proto__,__v_isRef,__isVue")
  , bd = new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e !== "arguments" && e !== "caller").map(e=>Symbol[e]).filter(Po))
  , js = Dg();
function Dg() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t=>{
        e[t] = function(...n) {
            const o = Me(this);
            for (let a = 0, i = this.length; a < i; a++)
                Et(o, "get", a + "");
            const r = o[t](...n);
            return r === -1 || r === !1 ? o[t](...n.map(Me)) : r
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t=>{
        e[t] = function(...n) {
            ao(),
            Yl();
            const o = Me(this)[t].apply(this, n);
            return ql(),
            io(),
            o
        }
    }
    ),
    e
}
function Ig(e) {
    Po(e) || (e = String(e));
    const t = Me(this);
    return Et(t, "has", e),
    t.hasOwnProperty(e)
}
class yd {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, o) {
        const r = this._isReadonly
          , a = this._isShallow;
        if (n === "__v_isReactive")
            return !r;
        if (n === "__v_isReadonly")
            return r;
        if (n === "__v_isShallow")
            return a;
        if (n === "__v_raw")
            return o === (r ? a ? qg : Cd : a ? Sd : wd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
        const i = pe(t);
        if (!r) {
            if (i && Re(js, n))
                return Reflect.get(js, n, o);
            if (n === "hasOwnProperty")
                return Ig
        }
        const l = Reflect.get(t, n, o);
        return (Po(n) ? bd.has(n) : $g(n)) || (r || Et(t, "get", n),
        a) ? l : it(l) ? i && Ul(n) ? l : l.value : qe(l) ? r ? _d(l) : Ke(l) : l
    }
}
class pd extends yd {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, o, r) {
        let a = t[n];
        if (!this._isShallow) {
            const s = Fr(a);
            if (!Ma(o) && !Fr(o) && (a = Me(a),
            o = Me(o)),
            !pe(t) && it(a) && !it(o))
                return s ? !1 : (a.value = o,
                !0)
        }
        const i = pe(t) && Ul(n) ? Number(n) < t.length : Re(t, n)
          , l = Reflect.set(t, n, o, r);
        return t === Me(r) && (i ? no(o, a) && _n(t, "set", n, o) : _n(t, "add", n, o)),
        l
    }
    deleteProperty(t, n) {
        const o = Re(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && o && _n(t, "delete", n, void 0),
        r
    }
    has(t, n) {
        const o = Reflect.has(t, n);
        return (!Po(n) || !bd.has(n)) && Et(t, "has", n),
        o
    }
    ownKeys(t) {
        return Et(t, "iterate", pe(t) ? "length" : Co),
        Reflect.ownKeys(t)
    }
}
class Rg extends yd {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const Lg = new pd
  , Mg = new Rg
  , Fg = new pd(!0);
const Kl = e=>e
  , Za = e=>Reflect.getPrototypeOf(e);
function ta(e, t, n=!1, o=!1) {
    e = e.__v_raw;
    const r = Me(e)
      , a = Me(t);
    n || (no(t, a) && Et(r, "get", t),
    Et(r, "get", a));
    const {has: i} = Za(r)
      , l = o ? Kl : n ? Zl : Vr;
    if (i.call(r, t))
        return l(e.get(t));
    if (i.call(r, a))
        return l(e.get(a));
    e !== r && e.get(t)
}
function na(e, t=!1) {
    const n = this.__v_raw
      , o = Me(n)
      , r = Me(e);
    return t || (no(e, r) && Et(o, "has", e),
    Et(o, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
}
function oa(e, t=!1) {
    return e = e.__v_raw,
    !t && Et(Me(e), "iterate", Co),
    Reflect.get(e, "size", e)
}
function Us(e) {
    e = Me(e);
    const t = Me(this);
    return Za(t).has.call(t, e) || (t.add(e),
    _n(t, "add", e, e)),
    this
}
function Ws(e, t) {
    t = Me(t);
    const n = Me(this)
      , {has: o, get: r} = Za(n);
    let a = o.call(n, e);
    a || (e = Me(e),
    a = o.call(n, e));
    const i = r.call(n, e);
    return n.set(e, t),
    a ? no(t, i) && _n(n, "set", e, t) : _n(n, "add", e, t),
    this
}
function Ys(e) {
    const t = Me(this)
      , {has: n, get: o} = Za(t);
    let r = n.call(t, e);
    r || (e = Me(e),
    r = n.call(t, e)),
    o && o.call(t, e);
    const a = t.delete(e);
    return r && _n(t, "delete", e, void 0),
    a
}
function qs() {
    const e = Me(this)
      , t = e.size !== 0
      , n = e.clear();
    return t && _n(e, "clear", void 0, void 0),
    n
}
function ra(e, t) {
    return function(o, r) {
        const a = this
          , i = a.__v_raw
          , l = Me(i)
          , s = t ? Kl : e ? Zl : Vr;
        return !e && Et(l, "iterate", Co),
        i.forEach((c,u)=>o.call(r, s(c), s(u), a))
    }
}
function aa(e, t, n) {
    return function(...o) {
        const r = this.__v_raw
          , a = Me(r)
          , i = qo(a)
          , l = e === "entries" || e === Symbol.iterator && i
          , s = e === "keys" && i
          , c = r[e](...o)
          , u = n ? Kl : t ? Zl : Vr;
        return !t && Et(a, "iterate", s ? ll : Co),
        {
            next() {
                const {value: f, done: h} = c.next();
                return h ? {
                    value: f,
                    done: h
                } : {
                    value: l ? [u(f[0]), u(f[1])] : u(f),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Mn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function Vg() {
    const e = {
        get(a) {
            return ta(this, a)
        },
        get size() {
            return oa(this)
        },
        has: na,
        add: Us,
        set: Ws,
        delete: Ys,
        clear: qs,
        forEach: ra(!1, !1)
    }
      , t = {
        get(a) {
            return ta(this, a, !1, !0)
        },
        get size() {
            return oa(this)
        },
        has: na,
        add: Us,
        set: Ws,
        delete: Ys,
        clear: qs,
        forEach: ra(!1, !0)
    }
      , n = {
        get(a) {
            return ta(this, a, !0)
        },
        get size() {
            return oa(this, !0)
        },
        has(a) {
            return na.call(this, a, !0)
        },
        add: Mn("add"),
        set: Mn("set"),
        delete: Mn("delete"),
        clear: Mn("clear"),
        forEach: ra(!0, !1)
    }
      , o = {
        get(a) {
            return ta(this, a, !0, !0)
        },
        get size() {
            return oa(this, !0)
        },
        has(a) {
            return na.call(this, a, !0)
        },
        add: Mn("add"),
        set: Mn("set"),
        delete: Mn("delete"),
        clear: Mn("clear"),
        forEach: ra(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(a=>{
        e[a] = aa(a, !1, !1),
        n[a] = aa(a, !0, !1),
        t[a] = aa(a, !1, !0),
        o[a] = aa(a, !0, !0)
    }
    ),
    [e, n, t, o]
}
const [Ng,Hg,zg,jg] = Vg();
function Gl(e, t) {
    const n = t ? e ? jg : zg : e ? Hg : Ng;
    return (o,r,a)=>r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(Re(n, r) && r in o ? n : o, r, a)
}
const Ug = {
    get: Gl(!1, !1)
}
  , Wg = {
    get: Gl(!1, !0)
}
  , Yg = {
    get: Gl(!0, !1)
};
const wd = new WeakMap
  , Sd = new WeakMap
  , Cd = new WeakMap
  , qg = new WeakMap;
function Kg(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Gg(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Kg(vg(e))
}
function Ke(e) {
    return Fr(e) ? e : Xl(e, !1, Lg, Ug, wd)
}
function xd(e) {
    return Xl(e, !1, Fg, Wg, Sd)
}
function _d(e) {
    return Xl(e, !0, Mg, Yg, Cd)
}
function Xl(e, t, n, o, r) {
    if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const a = r.get(e);
    if (a)
        return a;
    const i = Gg(e);
    if (i === 0)
        return e;
    const l = new Proxy(e,i === 2 ? o : n);
    return r.set(e, l),
    l
}
function xo(e) {
    return Fr(e) ? xo(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Fr(e) {
    return !!(e && e.__v_isReadonly)
}
function Ma(e) {
    return !!(e && e.__v_isShallow)
}
function kd(e) {
    return e ? !!e.__v_raw : !1
}
function Me(e) {
    const t = e && e.__v_raw;
    return t ? Me(t) : e
}
function Ql(e) {
    return Object.isExtensible(e) && ad(e, "__v_skip", !0),
    e
}
const Vr = e=>qe(e) ? Ke(e) : e
  , Zl = e=>qe(e) ? _d(e) : e;
class Td {
    constructor(t, n, o, r) {
        this.getter = t,
        this._setter = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this.__v_isReadonly = !1,
        this.effect = new Wl(()=>t(this._value),()=>Aa(this, this.effect._dirtyLevel === 2 ? 2 : 3)),
        this.effect.computed = this,
        this.effect.active = this._cacheable = !r,
        this.__v_isReadonly = o
    }
    get value() {
        const t = Me(this);
        return (!t._cacheable || t.effect.dirty) && no(t._value, t._value = t.effect.run()) && Aa(t, 4),
        Pd(t),
        t.effect._dirtyLevel >= 2 && Aa(t, 2),
        t._value
    }
    set value(t) {
        this._setter(t)
    }
    get _dirty() {
        return this.effect.dirty
    }
    set _dirty(t) {
        this.effect.dirty = t
    }
}
function Xg(e, t, n=!1) {
    let o, r;
    const a = _e(e);
    return a ? (o = e,
    r = Vt) : (o = e.get,
    r = e.set),
    new Td(o,r,a || !r,n)
}
function Pd(e) {
    var t;
    eo && So && (e = Me(e),
    gd(So, (t = e.dep) != null ? t : e.dep = vd(()=>e.dep = void 0, e instanceof Td ? e : void 0)))
}
function Aa(e, t=4, n) {
    e = Me(e);
    const o = e.dep;
    o && md(o, t)
}
function it(e) {
    return !!(e && e.__v_isRef === !0)
}
function R(e) {
    return Ed(e, !1)
}
function Qg(e) {
    return Ed(e, !0)
}
function Ed(e, t) {
    return it(e) ? e : new Zg(e,t)
}
class Zg {
    constructor(t, n) {
        this.__v_isShallow = n,
        this.dep = void 0,
        this.__v_isRef = !0,
        this._rawValue = n ? t : Me(t),
        this._value = n ? t : Vr(t)
    }
    get value() {
        return Pd(this),
        this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Ma(t) || Fr(t);
        t = n ? t : Me(t),
        no(t, this._rawValue) && (this._rawValue = t,
        this._value = n ? t : Vr(t),
        Aa(this, 4))
    }
}
function Xt(e) {
    return it(e) ? e.value : e
}
const Jg = {
    get: (e,t,n)=>Xt(Reflect.get(e, t, n)),
    set: (e,t,n,o)=>{
        const r = e[t];
        return it(r) && !it(n) ? (r.value = n,
        !0) : Reflect.set(e, t, n, o)
    }
};
function Ad(e) {
    return xo(e) ? e : new Proxy(e,Jg)
}
function em(e) {
    const t = pe(e) ? new Array(e.length) : {};
    for (const n in e)
        t[n] = nm(e, n);
    return t
}
class tm {
    constructor(t, n, o) {
        this._object = t,
        this._key = n,
        this._defaultValue = o,
        this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Bg(Me(this._object), this._key)
    }
}
function nm(e, t, n) {
    const o = e[t];
    return it(o) ? o : new tm(e,t,n)
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function to(e, t, n, o) {
    try {
        return o ? e(...o) : e()
    } catch (r) {
        Ja(r, t, n)
    }
}
function Nt(e, t, n, o) {
    if (_e(e)) {
        const r = to(e, t, n, o);
        return r && nd(r) && r.catch(a=>{
            Ja(a, t, n)
        }
        ),
        r
    }
    if (pe(e)) {
        const r = [];
        for (let a = 0; a < e.length; a++)
            r.push(Nt(e[a], t, n, o));
        return r
    }
}
function Ja(e, t, n, o=!0) {
    const r = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const i = t.proxy
          , l = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, l) === !1)
                        return
            }
            a = a.parent
        }
        const s = t.appContext.config.errorHandler;
        if (s) {
            ao(),
            to(s, null, 10, [e, i, l]),
            io();
            return
        }
    }
    om(e, n, r, o)
}
function om(e, t, n, o=!0) {
    console.error(e)
}
let Nr = !1
  , sl = !1;
const vt = [];
let dn = 0;
const Ko = [];
let Kn = null
  , yo = 0;
const Od = Promise.resolve();
let Jl = null;
function Te(e) {
    const t = Jl || Od;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function rm(e) {
    let t = dn + 1
      , n = vt.length;
    for (; t < n; ) {
        const o = t + n >>> 1
          , r = vt[o]
          , a = Hr(r);
        a < e || a === e && r.pre ? t = o + 1 : n = o
    }
    return t
}
function es(e) {
    (!vt.length || !vt.includes(e, Nr && e.allowRecurse ? dn + 1 : dn)) && (e.id == null ? vt.push(e) : vt.splice(rm(e.id), 0, e),
    Bd())
}
function Bd() {
    !Nr && !sl && (sl = !0,
    Jl = Od.then(Dd))
}
function am(e) {
    const t = vt.indexOf(e);
    t > dn && vt.splice(t, 1)
}
function im(e) {
    pe(e) ? Ko.push(...e) : (!Kn || !Kn.includes(e, e.allowRecurse ? yo + 1 : yo)) && Ko.push(e),
    Bd()
}
function Ks(e, t, n=Nr ? dn + 1 : 0) {
    for (; n < vt.length; n++) {
        const o = vt[n];
        if (o && o.pre) {
            if (e && o.id !== e.uid)
                continue;
            vt.splice(n, 1),
            n--,
            o()
        }
    }
}
function $d(e) {
    if (Ko.length) {
        const t = [...new Set(Ko)].sort((n,o)=>Hr(n) - Hr(o));
        if (Ko.length = 0,
        Kn) {
            Kn.push(...t);
            return
        }
        for (Kn = t,
        yo = 0; yo < Kn.length; yo++)
            Kn[yo]();
        Kn = null,
        yo = 0
    }
}
const Hr = e=>e.id == null ? 1 / 0 : e.id
  , lm = (e,t)=>{
    const n = Hr(e) - Hr(t);
    if (n === 0) {
        if (e.pre && !t.pre)
            return -1;
        if (t.pre && !e.pre)
            return 1
    }
    return n
}
;
function Dd(e) {
    sl = !1,
    Nr = !0,
    vt.sort(lm);
    try {
        for (dn = 0; dn < vt.length; dn++) {
            const t = vt[dn];
            t && t.active !== !1 && to(t, null, 14)
        }
    } finally {
        dn = 0,
        vt.length = 0,
        $d(),
        Nr = !1,
        Jl = null,
        (vt.length || Ko.length) && Dd()
    }
}
function sm(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const o = e.vnode.props || We;
    let r = n;
    const a = t.startsWith("update:")
      , i = a && t.slice(7);
    if (i && i in o) {
        const u = `${i === "modelValue" ? "model" : i}Modifiers`
          , {number: f, trim: h} = o[u] || We;
        h && (r = n.map(m=>Qe(m) ? m.trim() : m)),
        f && (r = n.map(pg))
    }
    let l, s = o[l = _i(t)] || o[l = _i(gn(t))];
    !s && a && (s = o[l = _i(ro(t))]),
    s && Nt(s, e, 6, r);
    const c = o[l + "Once"];
    if (c) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        Nt(c, e, 6, r)
    }
}
function Id(e, t, n=!1) {
    const o = t.emitsCache
      , r = o.get(e);
    if (r !== void 0)
        return r;
    const a = e.emits;
    let i = {}
      , l = !1;
    if (!_e(e)) {
        const s = c=>{
            const u = Id(c, t, !0);
            u && (l = !0,
            at(i, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(s),
        e.extends && s(e.extends),
        e.mixins && e.mixins.forEach(s)
    }
    return !a && !l ? (qe(e) && o.set(e, null),
    null) : (pe(a) ? a.forEach(s=>i[s] = null) : at(i, a),
    qe(e) && o.set(e, i),
    i)
}
function ei(e, t) {
    return !e || !Ka(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Re(e, t[0].toLowerCase() + t.slice(1)) || Re(e, ro(t)) || Re(e, t))
}
let rt = null
  , ti = null;
function Fa(e) {
    const t = rt;
    return rt = e,
    ti = e && e.type.__scopeId || null,
    t
}
function Rd(e) {
    ti = e
}
function Ld() {
    ti = null
}
function Pe(e, t=rt, n) {
    if (!t || e._n)
        return e;
    const o = (...r)=>{
        o._d && sc(-1);
        const a = Fa(t);
        let i;
        try {
            i = e(...r)
        } finally {
            Fa(a),
            o._d && sc(1)
        }
        return i
    }
    ;
    return o._n = !0,
    o._c = !0,
    o._d = !0,
    o
}
function Pi(e) {
    const {type: t, vnode: n, proxy: o, withProxy: r, propsOptions: [a], slots: i, attrs: l, emit: s, render: c, renderCache: u, props: f, data: h, setupState: m, ctx: w, inheritAttrs: C} = e
      , b = Fa(e);
    let v, g;
    try {
        if (n.shapeFlag & 4) {
            const y = r || o
              , S = y;
            v = un(c.call(S, y, u, f, m, h, w)),
            g = l
        } else {
            const y = t;
            v = un(y.length > 1 ? y(f, {
                attrs: l,
                slots: i,
                emit: s
            }) : y(f, null)),
            g = t.props ? l : cm(l)
        }
    } catch (y) {
        Or.length = 0,
        Ja(y, e, 1),
        v = d(_t)
    }
    let p = v;
    if (g && C !== !1) {
        const y = Object.keys(g)
          , {shapeFlag: S} = p;
        y.length && S & 7 && (a && y.some(zl) && (g = um(g, a)),
        p = oo(p, g, !1, !0))
    }
    return n.dirs && (p = oo(p, null, !1, !0),
    p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs),
    n.transition && (p.transition = n.transition),
    v = p,
    Fa(b),
    v
}
const cm = e=>{
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Ka(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , um = (e,t)=>{
    const n = {};
    for (const o in e)
        (!zl(o) || !(o.slice(9)in t)) && (n[o] = e[o]);
    return n
}
;
function dm(e, t, n) {
    const {props: o, children: r, component: a} = e
      , {props: i, children: l, patchFlag: s} = t
      , c = a.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && s >= 0) {
        if (s & 1024)
            return !0;
        if (s & 16)
            return o ? Gs(o, i, c) : !!i;
        if (s & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const h = u[f];
                if (i[h] !== o[h] && !ei(c, h))
                    return !0
            }
        }
    } else
        return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Gs(o, i, c) : !0 : !!i;
    return !1
}
function Gs(e, t, n) {
    const o = Object.keys(t);
    if (o.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < o.length; r++) {
        const a = o[r];
        if (t[a] !== e[a] && !ei(n, a))
            return !0
    }
    return !1
}
function fm({vnode: e, parent: t}, n) {
    for (; t; ) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el),
        o === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Md = "components"
  , hm = "directives";
function je(e, t) {
    return Fd(Md, e, !0, t) || e
}
const gm = Symbol.for("v-ndc");
function mm(e) {
    return Fd(hm, e)
}
function Fd(e, t, n=!0, o=!1) {
    const r = rt || ut;
    if (r) {
        const a = r.type;
        if (e === Md) {
            const l = lv(a, !1);
            if (l && (l === t || l === gn(t) || l === Qa(gn(t))))
                return a
        }
        const i = Xs(r[e] || a[e], t) || Xs(r.appContext[e], t);
        return !i && o ? a : i
    }
}
function Xs(e, t) {
    return e && (e[t] || e[gn(t)] || e[Qa(gn(t))])
}
const vm = e=>e.__isSuspense;
function bm(e, t) {
    t && t.pendingBranch ? pe(e) ? t.effects.push(...e) : t.effects.push(e) : im(e)
}
const ym = Symbol.for("v-scx")
  , pm = ()=>kt(ym);
function ar(e, t) {
    return ts(e, null, t)
}
const ia = {};
function oe(e, t, n) {
    return ts(e, t, n)
}
function ts(e, t, {immediate: n, deep: o, flush: r, once: a, onTrack: i, onTrigger: l}=We) {
    if (t && a) {
        const _ = t;
        t = (...O)=>{
            _(...O),
            S()
        }
    }
    const s = ut
      , c = _=>o === !0 ? _ : wo(_, o === !1 ? 1 : void 0);
    let u, f = !1, h = !1;
    if (it(e) ? (u = ()=>e.value,
    f = Ma(e)) : xo(e) ? (u = ()=>c(e),
    f = !0) : pe(e) ? (h = !0,
    f = e.some(_=>xo(_) || Ma(_)),
    u = ()=>e.map(_=>{
        if (it(_))
            return _.value;
        if (xo(_))
            return c(_);
        if (_e(_))
            return to(_, s, 2)
    }
    )) : _e(e) ? t ? u = ()=>to(e, s, 2) : u = ()=>(m && m(),
    Nt(e, s, 3, [w])) : u = Vt,
    t && o) {
        const _ = u;
        u = ()=>wo(_())
    }
    let m, w = _=>{
        m = p.onStop = ()=>{
            to(_, s, 4),
            m = p.onStop = void 0
        }
    }
    , C;
    if (ri)
        if (w = Vt,
        t ? n && Nt(t, s, 3, [u(), h ? [] : void 0, w]) : u(),
        r === "sync") {
            const _ = pm();
            C = _.__watcherHandles || (_.__watcherHandles = [])
        } else
            return Vt;
    let b = h ? new Array(e.length).fill(ia) : ia;
    const v = ()=>{
        if (!(!p.active || !p.dirty))
            if (t) {
                const _ = p.run();
                (o || f || (h ? _.some((O,x)=>no(O, b[x])) : no(_, b))) && (m && m(),
                Nt(t, s, 3, [_, b === ia ? void 0 : h && b[0] === ia ? [] : b, w]),
                b = _)
            } else
                p.run()
    }
    ;
    v.allowRecurse = !!t;
    let g;
    r === "sync" ? g = v : r === "post" ? g = ()=>Tt(v, s && s.suspense) : (v.pre = !0,
    s && (v.id = s.uid),
    g = ()=>es(v));
    const p = new Wl(u,Vt,g)
      , y = dd()
      , S = ()=>{
        p.stop(),
        y && jl(y.effects, p)
    }
    ;
    return t ? n ? v() : b = p.run() : r === "post" ? Tt(p.run.bind(p), s && s.suspense) : p.run(),
    C && C.push(S),
    S
}
function wm(e, t, n) {
    const o = this.proxy
      , r = Qe(e) ? e.includes(".") ? Vd(o, e) : ()=>o[e] : e.bind(o, o);
    let a;
    _e(t) ? a = t : (a = t.handler,
    n = t);
    const i = Jr(this)
      , l = ts(r, a.bind(o), n);
    return i(),
    l
}
function Vd(e, t) {
    const n = t.split(".");
    return ()=>{
        let o = e;
        for (let r = 0; r < n.length && o; r++)
            o = o[n[r]];
        return o
    }
}
function wo(e, t=1 / 0, n) {
    if (t <= 0 || !qe(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    it(e))
        wo(e.value, t, n);
    else if (pe(e))
        for (let o = 0; o < e.length; o++)
            wo(e[o], t, n);
    else if (td(e) || qo(e))
        e.forEach(o=>{
            wo(o, t, n)
        }
        );
    else if (rd(e))
        for (const o in e)
            wo(e[o], t, n);
    return e
}
function st(e, t) {
    if (rt === null)
        return e;
    const n = ai(rt) || rt.proxy
      , o = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let[a,i,l,s=We] = t[r];
        a && (_e(a) && (a = {
            mounted: a,
            updated: a
        }),
        a.deep && wo(i),
        o.push({
            dir: a,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: s
        }))
    }
    return e
}
function fo(e, t, n, o) {
    const r = e.dirs
      , a = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        a && (l.oldValue = a[i].value);
        let s = l.dir[o];
        s && (ao(),
        Nt(s, n, 8, [e.el, l, e, t]),
        io())
    }
}
const Gn = Symbol("_leaveCb")
  , la = Symbol("_enterCb");
function Sm() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return tt(()=>{
        e.isMounted = !0
    }
    ),
    bn(()=>{
        e.isUnmounting = !0
    }
    ),
    e
}
const Lt = [Function, Array]
  , Nd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Lt,
    onEnter: Lt,
    onAfterEnter: Lt,
    onEnterCancelled: Lt,
    onBeforeLeave: Lt,
    onLeave: Lt,
    onAfterLeave: Lt,
    onLeaveCancelled: Lt,
    onBeforeAppear: Lt,
    onAppear: Lt,
    onAfterAppear: Lt,
    onAppearCancelled: Lt
}
  , Cm = {
    name: "BaseTransition",
    props: Nd,
    setup(e, {slots: t}) {
        const n = en()
          , o = Sm();
        return ()=>{
            const r = t.default && zd(t.default(), !0);
            if (!r || !r.length)
                return;
            let a = r[0];
            if (r.length > 1) {
                for (const h of r)
                    if (h.type !== _t) {
                        a = h;
                        break
                    }
            }
            const i = Me(e)
              , {mode: l} = i;
            if (o.isLeaving)
                return Ei(a);
            const s = Qs(a);
            if (!s)
                return Ei(a);
            const c = cl(s, i, o, n);
            ul(s, c);
            const u = n.subTree
              , f = u && Qs(u);
            if (f && f.type !== _t && !po(s, f)) {
                const h = cl(f, i, o, n);
                if (ul(f, h),
                l === "out-in" && s.type !== _t)
                    return o.isLeaving = !0,
                    h.afterLeave = ()=>{
                        o.isLeaving = !1,
                        n.update.active !== !1 && (n.effect.dirty = !0,
                        n.update())
                    }
                    ,
                    Ei(a);
                l === "in-out" && s.type !== _t && (h.delayLeave = (m,w,C)=>{
                    const b = Hd(o, f);
                    b[String(f.key)] = f,
                    m[Gn] = ()=>{
                        w(),
                        m[Gn] = void 0,
                        delete c.delayedLeave
                    }
                    ,
                    c.delayedLeave = C
                }
                )
            }
            return a
        }
    }
}
  , xm = Cm;
function Hd(e, t) {
    const {leavingVNodes: n} = e;
    let o = n.get(t.type);
    return o || (o = Object.create(null),
    n.set(t.type, o)),
    o
}
function cl(e, t, n, o) {
    const {appear: r, mode: a, persisted: i=!1, onBeforeEnter: l, onEnter: s, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: h, onAfterLeave: m, onLeaveCancelled: w, onBeforeAppear: C, onAppear: b, onAfterAppear: v, onAppearCancelled: g} = t
      , p = String(e.key)
      , y = Hd(n, e)
      , S = (x,B)=>{
        x && Nt(x, o, 9, B)
    }
      , _ = (x,B)=>{
        const $ = B[1];
        S(x, B),
        pe(x) ? x.every(k=>k.length <= 1) && $() : x.length <= 1 && $()
    }
      , O = {
        mode: a,
        persisted: i,
        beforeEnter(x) {
            let B = l;
            if (!n.isMounted)
                if (r)
                    B = C || l;
                else
                    return;
            x[Gn] && x[Gn](!0);
            const $ = y[p];
            $ && po(e, $) && $.el[Gn] && $.el[Gn](),
            S(B, [x])
        },
        enter(x) {
            let B = s
              , $ = c
              , k = u;
            if (!n.isMounted)
                if (r)
                    B = b || s,
                    $ = v || c,
                    k = g || u;
                else
                    return;
            let E = !1;
            const I = x[la] = Q=>{
                E || (E = !0,
                Q ? S(k, [x]) : S($, [x]),
                O.delayedLeave && O.delayedLeave(),
                x[la] = void 0)
            }
            ;
            B ? _(B, [x, I]) : I()
        },
        leave(x, B) {
            const $ = String(e.key);
            if (x[la] && x[la](!0),
            n.isUnmounting)
                return B();
            S(f, [x]);
            let k = !1;
            const E = x[Gn] = I=>{
                k || (k = !0,
                B(),
                I ? S(w, [x]) : S(m, [x]),
                x[Gn] = void 0,
                y[$] === e && delete y[$])
            }
            ;
            y[$] = e,
            h ? _(h, [x, E]) : E()
        },
        clone(x) {
            return cl(x, t, n, o)
        }
    };
    return O
}
function Ei(e) {
    if (ni(e))
        return e = oo(e),
        e.children = null,
        e
}
function Qs(e) {
    if (!ni(e))
        return e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && _e(n.default))
            return n.default()
    }
}
function ul(e, t) {
    e.shapeFlag & 6 && e.component ? ul(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function zd(e, t=!1, n) {
    let o = []
      , r = 0;
    for (let a = 0; a < e.length; a++) {
        let i = e[a];
        const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
        i.type === Fe ? (i.patchFlag & 128 && r++,
        o = o.concat(zd(i.children, t, l))) : (t || i.type !== _t) && o.push(l != null ? oo(i, {
            key: l
        }) : i)
    }
    if (r > 1)
        for (let a = 0; a < o.length; a++)
            o[a].patchFlag = -2;
    return o
}
/*! #__NO_SIDE_EFFECTS__ */
function j(e, t) {
    return _e(e) ? at({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
const Pr = e=>!!e.type.__asyncLoader
  , ni = e=>e.type.__isKeepAlive;
function mn(e, t) {
    jd(e, "a", t)
}
function vn(e, t) {
    jd(e, "da", t)
}
function jd(e, t, n=ut) {
    const o = e.__wdc || (e.__wdc = ()=>{
        let r = n;
        for (; r; ) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    }
    );
    if (oi(t, o, n),
    n) {
        let r = n.parent;
        for (; r && r.parent; )
            ni(r.parent.vnode) && _m(o, t, n, r),
            r = r.parent
    }
}
function _m(e, t, n, o) {
    const r = oi(t, e, o, !0);
    ir(()=>{
        jl(o[t], r)
    }
    , n)
}
function oi(e, t, n=ut, o=!1) {
    if (n) {
        const r = n[e] || (n[e] = [])
          , a = t.__weh || (t.__weh = (...i)=>{
            if (n.isUnmounted)
                return;
            ao();
            const l = Jr(n)
              , s = Nt(t, n, e, i);
            return l(),
            io(),
            s
        }
        );
        return o ? r.unshift(a) : r.push(a),
        a
    }
}
const Bn = e=>(t,n=ut)=>(!ri || e === "sp") && oi(e, (...o)=>t(...o), n)
  , km = Bn("bm")
  , tt = Bn("m")
  , Ud = Bn("bu")
  , Wd = Bn("u")
  , bn = Bn("bum")
  , ir = Bn("um")
  , Tm = Bn("sp")
  , Pm = Bn("rtg")
  , Em = Bn("rtc");
function Am(e, t=ut) {
    oi("ec", e, t)
}
function zr(e, t, n, o) {
    let r;
    const a = n;
    if (pe(e) || Qe(e)) {
        r = new Array(e.length);
        for (let i = 0, l = e.length; i < l; i++)
            r[i] = t(e[i], i, void 0, a)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let i = 0; i < e; i++)
            r[i] = t(i + 1, i, void 0, a)
    } else if (qe(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (i,l)=>t(i, l, void 0, a));
        else {
            const i = Object.keys(e);
            r = new Array(i.length);
            for (let l = 0, s = i.length; l < s; l++) {
                const c = i[l];
                r[l] = t(e[c], c, l, a)
            }
        }
    else
        r = [];
    return r
}
function HE(e, t) {
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        if (pe(o))
            for (let r = 0; r < o.length; r++)
                e[o[r].name] = o[r].fn;
        else
            o && (e[o.name] = o.key ? (...r)=>{
                const a = o.fn(...r);
                return a && (a.key = o.key),
                a
            }
            : o.fn)
    }
    return e
}
function zE(e, t, n={}, o, r) {
    if (rt.isCE || rt.parent && Pr(rt.parent) && rt.parent.isCE)
        return n.name = t,
        d("slot", n, o);
    let a = e[t];
    a && a._c && (a._d = !1),
    ke();
    const i = a && Yd(a(n))
      , l = $t(Fe, {
        key: n.key || i && i.key || `_${t}`
    }, i || [], i && e._ === 1 ? 64 : -2);
    return a && a._c && (a._d = !0),
    l
}
function Yd(e) {
    return e.some(t=>Ur(t) ? !(t.type === _t || t.type === Fe && !Yd(t.children)) : !0) ? e : null
}
const dl = e=>e ? sf(e) ? ai(e) || e.proxy : dl(e.parent) : null
  , Er = at(Object.create(null), {
    $: e=>e,
    $el: e=>e.vnode.el,
    $data: e=>e.data,
    $props: e=>e.props,
    $attrs: e=>e.attrs,
    $slots: e=>e.slots,
    $refs: e=>e.refs,
    $parent: e=>dl(e.parent),
    $root: e=>dl(e.root),
    $emit: e=>e.emit,
    $options: e=>ns(e),
    $forceUpdate: e=>e.f || (e.f = ()=>{
        e.effect.dirty = !0,
        es(e.update)
    }
    ),
    $nextTick: e=>e.n || (e.n = Te.bind(e.proxy)),
    $watch: e=>wm.bind(e)
})
  , Ai = (e,t)=>e !== We && !e.__isScriptSetup && Re(e, t)
  , Om = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: o, data: r, props: a, accessCache: i, type: l, appContext: s} = e;
        let c;
        if (t[0] !== "$") {
            const m = i[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return o[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return a[t]
                }
            else {
                if (Ai(o, t))
                    return i[t] = 1,
                    o[t];
                if (r !== We && Re(r, t))
                    return i[t] = 2,
                    r[t];
                if ((c = e.propsOptions[0]) && Re(c, t))
                    return i[t] = 3,
                    a[t];
                if (n !== We && Re(n, t))
                    return i[t] = 4,
                    n[t];
                fl && (i[t] = 0)
            }
        }
        const u = Er[t];
        let f, h;
        if (u)
            return t === "$attrs" && Et(e.attrs, "get", ""),
            u(e);
        if ((f = l.__cssModules) && (f = f[t]))
            return f;
        if (n !== We && Re(n, t))
            return i[t] = 4,
            n[t];
        if (h = s.config.globalProperties,
        Re(h, t))
            return h[t]
    },
    set({_: e}, t, n) {
        const {data: o, setupState: r, ctx: a} = e;
        return Ai(r, t) ? (r[t] = n,
        !0) : o !== We && Re(o, t) ? (o[t] = n,
        !0) : Re(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (a[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: a}}, i) {
        let l;
        return !!n[i] || e !== We && Re(e, i) || Ai(t, i) || (l = a[0]) && Re(l, i) || Re(o, i) || Re(Er, i) || Re(r.config.globalProperties, i)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Re(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Zs(e) {
    return pe(e) ? e.reduce((t,n)=>(t[n] = null,
    t), {}) : e
}
let fl = !0;
function Bm(e) {
    const t = ns(e)
      , n = e.proxy
      , o = e.ctx;
    fl = !1,
    t.beforeCreate && Js(t.beforeCreate, e, "bc");
    const {data: r, computed: a, methods: i, watch: l, provide: s, inject: c, created: u, beforeMount: f, mounted: h, beforeUpdate: m, updated: w, activated: C, deactivated: b, beforeDestroy: v, beforeUnmount: g, destroyed: p, unmounted: y, render: S, renderTracked: _, renderTriggered: O, errorCaptured: x, serverPrefetch: B, expose: $, inheritAttrs: k, components: E, directives: I, filters: Q} = t;
    if (c && $m(c, o, null),
    i)
        for (const Z in i) {
            const ie = i[Z];
            _e(ie) && (o[Z] = ie.bind(n))
        }
    if (r) {
        const Z = r.call(n, n);
        qe(Z) && (e.data = Ke(Z))
    }
    if (fl = !0,
    a)
        for (const Z in a) {
            const ie = a[Z]
              , Ee = _e(ie) ? ie.bind(n, n) : _e(ie.get) ? ie.get.bind(n, n) : Vt
              , $e = !_e(ie) && _e(ie.set) ? ie.set.bind(n) : Vt
              , M = D({
                get: Ee,
                set: $e
            });
            Object.defineProperty(o, Z, {
                enumerable: !0,
                configurable: !0,
                get: ()=>M.value,
                set: K=>M.value = K
            })
        }
    if (l)
        for (const Z in l)
            qd(l[Z], o, n, Z);
    if (s) {
        const Z = _e(s) ? s.call(n) : s;
        Reflect.ownKeys(Z).forEach(ie=>{
            kn(ie, Z[ie])
        }
        )
    }
    u && Js(u, e, "c");
    function N(Z, ie) {
        pe(ie) ? ie.forEach(Ee=>Z(Ee.bind(n))) : ie && Z(ie.bind(n))
    }
    if (N(km, f),
    N(tt, h),
    N(Ud, m),
    N(Wd, w),
    N(mn, C),
    N(vn, b),
    N(Am, x),
    N(Em, _),
    N(Pm, O),
    N(bn, g),
    N(ir, y),
    N(Tm, B),
    pe($))
        if ($.length) {
            const Z = e.exposed || (e.exposed = {});
            $.forEach(ie=>{
                Object.defineProperty(Z, ie, {
                    get: ()=>n[ie],
                    set: Ee=>n[ie] = Ee
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    S && e.render === Vt && (e.render = S),
    k != null && (e.inheritAttrs = k),
    E && (e.components = E),
    I && (e.directives = I)
}
function $m(e, t, n=Vt) {
    pe(e) && (e = hl(e));
    for (const o in e) {
        const r = e[o];
        let a;
        qe(r) ? "default"in r ? a = kt(r.from || o, r.default, !0) : a = kt(r.from || o) : a = kt(r),
        it(a) ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: ()=>a.value,
            set: i=>a.value = i
        }) : t[o] = a
    }
}
function Js(e, t, n) {
    Nt(pe(e) ? e.map(o=>o.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function qd(e, t, n, o) {
    const r = o.includes(".") ? Vd(n, o) : ()=>n[o];
    if (Qe(e)) {
        const a = t[e];
        _e(a) && oe(r, a)
    } else if (_e(e))
        oe(r, e.bind(n));
    else if (qe(e))
        if (pe(e))
            e.forEach(a=>qd(a, t, n, o));
        else {
            const a = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
            _e(a) && oe(r, a, e)
        }
}
function ns(e) {
    const t = e.type
      , {mixins: n, extends: o} = t
      , {mixins: r, optionsCache: a, config: {optionMergeStrategies: i}} = e.appContext
      , l = a.get(t);
    let s;
    return l ? s = l : !r.length && !n && !o ? s = t : (s = {},
    r.length && r.forEach(c=>Va(s, c, i, !0)),
    Va(s, t, i)),
    qe(t) && a.set(t, s),
    s
}
function Va(e, t, n, o=!1) {
    const {mixins: r, extends: a} = t;
    a && Va(e, a, n, !0),
    r && r.forEach(i=>Va(e, i, n, !0));
    for (const i in t)
        if (!(o && i === "expose")) {
            const l = Dm[i] || n && n[i];
            e[i] = l ? l(e[i], t[i]) : t[i]
        }
    return e
}
const Dm = {
    data: ec,
    props: tc,
    emits: tc,
    methods: kr,
    computed: kr,
    beforeCreate: xt,
    created: xt,
    beforeMount: xt,
    mounted: xt,
    beforeUpdate: xt,
    updated: xt,
    beforeDestroy: xt,
    beforeUnmount: xt,
    destroyed: xt,
    unmounted: xt,
    activated: xt,
    deactivated: xt,
    errorCaptured: xt,
    serverPrefetch: xt,
    components: kr,
    directives: kr,
    watch: Rm,
    provide: ec,
    inject: Im
};
function ec(e, t) {
    return t ? e ? function() {
        return at(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t)
    }
    : t : e
}
function Im(e, t) {
    return kr(hl(e), hl(t))
}
function hl(e) {
    if (pe(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function xt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function kr(e, t) {
    return e ? at(Object.create(null), e, t) : t
}
function tc(e, t) {
    return e ? pe(e) && pe(t) ? [...new Set([...e, ...t])] : at(Object.create(null), Zs(e), Zs(t ?? {})) : t
}
function Rm(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = at(Object.create(null), e);
    for (const o in t)
        n[o] = xt(e[o], t[o]);
    return n
}
function Kd() {
    return {
        app: null,
        config: {
            isNativeTag: gg,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Lm = 0;
function Mm(e, t) {
    return function(o, r=null) {
        _e(o) || (o = at({}, o)),
        r != null && !qe(r) && (r = null);
        const a = Kd()
          , i = new WeakSet;
        let l = !1;
        const s = a.app = {
            _uid: Lm++,
            _component: o,
            _props: r,
            _container: null,
            _context: a,
            _instance: null,
            version: cv,
            get config() {
                return a.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && _e(c.install) ? (i.add(c),
                c.install(s, ...u)) : _e(c) && (i.add(c),
                c(s, ...u))),
                s
            },
            mixin(c) {
                return a.mixins.includes(c) || a.mixins.push(c),
                s
            },
            component(c, u) {
                return u ? (a.components[c] = u,
                s) : a.components[c]
            },
            directive(c, u) {
                return u ? (a.directives[c] = u,
                s) : a.directives[c]
            },
            mount(c, u, f) {
                if (!l) {
                    const h = d(o, r);
                    return h.appContext = a,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    u && t ? t(h, c) : e(h, c, f),
                    l = !0,
                    s._container = c,
                    c.__vue_app__ = s,
                    ai(h.component) || h.component.proxy
                }
            },
            unmount() {
                l && (e(null, s._container),
                delete s._container.__vue_app__)
            },
            provide(c, u) {
                return a.provides[c] = u,
                s
            },
            runWithContext(c) {
                const u = Go;
                Go = s;
                try {
                    return c()
                } finally {
                    Go = u
                }
            }
        };
        return s
    }
}
let Go = null;
function kn(e, t) {
    if (ut) {
        let n = ut.provides;
        const o = ut.parent && ut.parent.provides;
        o === n && (n = ut.provides = Object.create(o)),
        n[e] = t
    }
}
function kt(e, t, n=!1) {
    const o = ut || rt;
    if (o || Go) {
        const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Go._context.provides;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return n && _e(t) ? t.call(o && o.proxy) : t
    }
}
function Fm() {
    return !!(ut || rt || Go)
}
const Gd = {}
  , Xd = ()=>Object.create(Gd)
  , Qd = e=>Object.getPrototypeOf(e) === Gd;
function Vm(e, t, n, o=!1) {
    const r = {}
      , a = Xd();
    e.propsDefaults = Object.create(null),
    Zd(e, t, r, a);
    for (const i in e.propsOptions[0])
        i in r || (r[i] = void 0);
    n ? e.props = o ? r : xd(r) : e.type.props ? e.props = r : e.props = a,
    e.attrs = a
}
function Nm(e, t, n, o) {
    const {props: r, attrs: a, vnode: {patchFlag: i}} = e
      , l = Me(r)
      , [s] = e.propsOptions;
    let c = !1;
    if ((o || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let h = u[f];
                if (ei(e.emitsOptions, h))
                    continue;
                const m = t[h];
                if (s)
                    if (Re(a, h))
                        m !== a[h] && (a[h] = m,
                        c = !0);
                    else {
                        const w = gn(h);
                        r[w] = gl(s, l, w, m, e, !1)
                    }
                else
                    m !== a[h] && (a[h] = m,
                    c = !0)
            }
        }
    } else {
        Zd(e, t, r, a) && (c = !0);
        let u;
        for (const f in l)
            (!t || !Re(t, f) && ((u = ro(f)) === f || !Re(t, u))) && (s ? n && (n[f] !== void 0 || n[u] !== void 0) && (r[f] = gl(s, l, f, void 0, e, !0)) : delete r[f]);
        if (a !== l)
            for (const f in a)
                (!t || !Re(t, f)) && (delete a[f],
                c = !0)
    }
    c && _n(e.attrs, "set", "")
}
function Zd(e, t, n, o) {
    const [r,a] = e.propsOptions;
    let i = !1, l;
    if (t)
        for (let s in t) {
            if (Tr(s))
                continue;
            const c = t[s];
            let u;
            r && Re(r, u = gn(s)) ? !a || !a.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : ei(e.emitsOptions, s) || (!(s in o) || c !== o[s]) && (o[s] = c,
            i = !0)
        }
    if (a) {
        const s = Me(n)
          , c = l || We;
        for (let u = 0; u < a.length; u++) {
            const f = a[u];
            n[f] = gl(r, s, f, c[f], e, !Re(c, f))
        }
    }
    return i
}
function gl(e, t, n, o, r, a) {
    const i = e[n];
    if (i != null) {
        const l = Re(i, "default");
        if (l && o === void 0) {
            const s = i.default;
            if (i.type !== Function && !i.skipFactory && _e(s)) {
                const {propsDefaults: c} = r;
                if (n in c)
                    o = c[n];
                else {
                    const u = Jr(r);
                    o = c[n] = s.call(null, t),
                    u()
                }
            } else
                o = s
        }
        i[0] && (a && !l ? o = !1 : i[1] && (o === "" || o === ro(n)) && (o = !0))
    }
    return o
}
function Jd(e, t, n=!1) {
    const o = t.propsCache
      , r = o.get(e);
    if (r)
        return r;
    const a = e.props
      , i = {}
      , l = [];
    let s = !1;
    if (!_e(e)) {
        const u = f=>{
            s = !0;
            const [h,m] = Jd(f, t, !0);
            at(i, h),
            m && l.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!a && !s)
        return qe(e) && o.set(e, Yo),
        Yo;
    if (pe(a))
        for (let u = 0; u < a.length; u++) {
            const f = gn(a[u]);
            nc(f) && (i[f] = We)
        }
    else if (a)
        for (const u in a) {
            const f = gn(u);
            if (nc(f)) {
                const h = a[u]
                  , m = i[f] = pe(h) || _e(h) ? {
                    type: h
                } : at({}, h);
                if (m) {
                    const w = ac(Boolean, m.type)
                      , C = ac(String, m.type);
                    m[0] = w > -1,
                    m[1] = C < 0 || w < C,
                    (w > -1 || Re(m, "default")) && l.push(f)
                }
            }
        }
    const c = [i, l];
    return qe(e) && o.set(e, c),
    c
}
function nc(e) {
    return e[0] !== "$" && !Tr(e)
}
function oc(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}
function rc(e, t) {
    return oc(e) === oc(t)
}
function ac(e, t) {
    return pe(t) ? t.findIndex(n=>rc(n, e)) : _e(t) && rc(t, e) ? 0 : -1
}
const ef = e=>e[0] === "_" || e === "$stable"
  , os = e=>pe(e) ? e.map(un) : [un(e)]
  , Hm = (e,t,n)=>{
    if (t._n)
        return t;
    const o = Pe((...r)=>os(t(...r)), n);
    return o._c = !1,
    o
}
  , tf = (e,t,n)=>{
    const o = e._ctx;
    for (const r in e) {
        if (ef(r))
            continue;
        const a = e[r];
        if (_e(a))
            t[r] = Hm(r, a, o);
        else if (a != null) {
            const i = os(a);
            t[r] = ()=>i
        }
    }
}
  , nf = (e,t)=>{
    const n = os(t);
    e.slots.default = ()=>n
}
  , zm = (e,t)=>{
    const n = e.slots = Xd();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (at(n, t),
        ad(n, "_", o, !0)) : tf(t, n)
    } else
        t && nf(e, t)
}
  , jm = (e,t,n)=>{
    const {vnode: o, slots: r} = e;
    let a = !0
      , i = We;
    if (o.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? a = !1 : (at(r, t),
        !n && l === 1 && delete r._) : (a = !t.$stable,
        tf(t, r)),
        i = t
    } else
        t && (nf(e, t),
        i = {
            default: 1
        });
    if (a)
        for (const l in r)
            !ef(l) && i[l] == null && delete r[l]
}
;
function ml(e, t, n, o, r=!1) {
    if (pe(e)) {
        e.forEach((h,m)=>ml(h, t && (pe(t) ? t[m] : t), n, o, r));
        return
    }
    if (Pr(o) && !r)
        return;
    const a = o.shapeFlag & 4 ? ai(o.component) || o.component.proxy : o.el
      , i = r ? null : a
      , {i: l, r: s} = e
      , c = t && t.r
      , u = l.refs === We ? l.refs = {} : l.refs
      , f = l.setupState;
    if (c != null && c !== s && (Qe(c) ? (u[c] = null,
    Re(f, c) && (f[c] = null)) : it(c) && (c.value = null)),
    _e(s))
        to(s, l, 12, [i, u]);
    else {
        const h = Qe(s)
          , m = it(s);
        if (h || m) {
            const w = ()=>{
                if (e.f) {
                    const C = h ? Re(f, s) ? f[s] : u[s] : s.value;
                    r ? pe(C) && jl(C, a) : pe(C) ? C.includes(a) || C.push(a) : h ? (u[s] = [a],
                    Re(f, s) && (f[s] = u[s])) : (s.value = [a],
                    e.k && (u[e.k] = s.value))
                } else
                    h ? (u[s] = i,
                    Re(f, s) && (f[s] = i)) : m && (s.value = i,
                    e.k && (u[e.k] = i))
            }
            ;
            i ? (w.id = -1,
            Tt(w, n)) : w()
        }
    }
}
const Tt = bm;
function Um(e) {
    return Wm(e)
}
function Wm(e, t) {
    const n = id();
    n.__VUE__ = !0;
    const {insert: o, remove: r, patchProp: a, createElement: i, createText: l, createComment: s, setText: c, setElementText: u, parentNode: f, nextSibling: h, setScopeId: m=Vt, insertStaticContent: w} = e
      , C = (T,A,L,Y=null,U=null,ae=null,de=void 0,re=null,se=!!A.dynamicChildren)=>{
        if (T === A)
            return;
        T && !po(T, A) && (Y = P(T),
        K(T, U, ae, !0),
        T = null),
        A.patchFlag === -2 && (se = !1,
        A.dynamicChildren = null);
        const {type: ee, ref: he, shapeFlag: ye} = A;
        switch (ee) {
        case Zr:
            b(T, A, L, Y);
            break;
        case _t:
            v(T, A, L, Y);
            break;
        case Bi:
            T == null && g(A, L, Y, de);
            break;
        case Fe:
            E(T, A, L, Y, U, ae, de, re, se);
            break;
        default:
            ye & 1 ? S(T, A, L, Y, U, ae, de, re, se) : ye & 6 ? I(T, A, L, Y, U, ae, de, re, se) : (ye & 64 || ye & 128) && ee.process(T, A, L, Y, U, ae, de, re, se, J)
        }
        he != null && U && ml(he, T && T.ref, ae, A || T, !A)
    }
      , b = (T,A,L,Y)=>{
        if (T == null)
            o(A.el = l(A.children), L, Y);
        else {
            const U = A.el = T.el;
            A.children !== T.children && c(U, A.children)
        }
    }
      , v = (T,A,L,Y)=>{
        T == null ? o(A.el = s(A.children || ""), L, Y) : A.el = T.el
    }
      , g = (T,A,L,Y)=>{
        [T.el,T.anchor] = w(T.children, A, L, Y, T.el, T.anchor)
    }
      , p = ({el: T, anchor: A},L,Y)=>{
        let U;
        for (; T && T !== A; )
            U = h(T),
            o(T, L, Y),
            T = U;
        o(A, L, Y)
    }
      , y = ({el: T, anchor: A})=>{
        let L;
        for (; T && T !== A; )
            L = h(T),
            r(T),
            T = L;
        r(A)
    }
      , S = (T,A,L,Y,U,ae,de,re,se)=>{
        A.type === "svg" ? de = "svg" : A.type === "math" && (de = "mathml"),
        T == null ? _(A, L, Y, U, ae, de, re, se) : B(T, A, U, ae, de, re, se)
    }
      , _ = (T,A,L,Y,U,ae,de,re)=>{
        let se, ee;
        const {props: he, shapeFlag: ye, transition: be, dirs: we} = T;
        if (se = T.el = i(T.type, ae, he && he.is, he),
        ye & 8 ? u(se, T.children) : ye & 16 && x(T.children, se, null, Y, U, Oi(T, ae), de, re),
        we && fo(T, null, Y, "created"),
        O(se, T, T.scopeId, de, Y),
        he) {
            for (const ze in he)
                ze !== "value" && !Tr(ze) && a(se, ze, null, he[ze], ae, T.children, Y, U, ue);
            "value"in he && a(se, "value", null, he.value, ae),
            (ee = he.onVnodeBeforeMount) && an(ee, Y, T)
        }
        we && fo(T, null, Y, "beforeMount");
        const Be = Ym(U, be);
        Be && be.beforeEnter(se),
        o(se, A, L),
        ((ee = he && he.onVnodeMounted) || Be || we) && Tt(()=>{
            ee && an(ee, Y, T),
            Be && be.enter(se),
            we && fo(T, null, Y, "mounted")
        }
        , U)
    }
      , O = (T,A,L,Y,U)=>{
        if (L && m(T, L),
        Y)
            for (let ae = 0; ae < Y.length; ae++)
                m(T, Y[ae]);
        if (U) {
            let ae = U.subTree;
            if (A === ae) {
                const de = U.vnode;
                O(T, de, de.scopeId, de.slotScopeIds, U.parent)
            }
        }
    }
      , x = (T,A,L,Y,U,ae,de,re,se=0)=>{
        for (let ee = se; ee < T.length; ee++) {
            const he = T[ee] = re ? Xn(T[ee]) : un(T[ee]);
            C(null, he, A, L, Y, U, ae, de, re)
        }
    }
      , B = (T,A,L,Y,U,ae,de)=>{
        const re = A.el = T.el;
        let {patchFlag: se, dynamicChildren: ee, dirs: he} = A;
        se |= T.patchFlag & 16;
        const ye = T.props || We
          , be = A.props || We;
        let we;
        if (L && ho(L, !1),
        (we = be.onVnodeBeforeUpdate) && an(we, L, A, T),
        he && fo(A, T, L, "beforeUpdate"),
        L && ho(L, !0),
        ee ? $(T.dynamicChildren, ee, re, L, Y, Oi(A, U), ae) : de || ie(T, A, re, null, L, Y, Oi(A, U), ae, !1),
        se > 0) {
            if (se & 16)
                k(re, A, ye, be, L, Y, U);
            else if (se & 2 && ye.class !== be.class && a(re, "class", null, be.class, U),
            se & 4 && a(re, "style", ye.style, be.style, U),
            se & 8) {
                const Be = A.dynamicProps;
                for (let ze = 0; ze < Be.length; ze++) {
                    const Ge = Be[ze]
                      , ct = ye[Ge]
                      , jt = be[Ge];
                    (jt !== ct || Ge === "value") && a(re, Ge, ct, jt, U, T.children, L, Y, ue)
                }
            }
            se & 1 && T.children !== A.children && u(re, A.children)
        } else
            !de && ee == null && k(re, A, ye, be, L, Y, U);
        ((we = be.onVnodeUpdated) || he) && Tt(()=>{
            we && an(we, L, A, T),
            he && fo(A, T, L, "updated")
        }
        , Y)
    }
      , $ = (T,A,L,Y,U,ae,de)=>{
        for (let re = 0; re < A.length; re++) {
            const se = T[re]
              , ee = A[re]
              , he = se.el && (se.type === Fe || !po(se, ee) || se.shapeFlag & 70) ? f(se.el) : L;
            C(se, ee, he, null, Y, U, ae, de, !0)
        }
    }
      , k = (T,A,L,Y,U,ae,de)=>{
        if (L !== Y) {
            if (L !== We)
                for (const re in L)
                    !Tr(re) && !(re in Y) && a(T, re, L[re], null, de, A.children, U, ae, ue);
            for (const re in Y) {
                if (Tr(re))
                    continue;
                const se = Y[re]
                  , ee = L[re];
                se !== ee && re !== "value" && a(T, re, ee, se, de, A.children, U, ae, ue)
            }
            "value"in Y && a(T, "value", L.value, Y.value, de)
        }
    }
      , E = (T,A,L,Y,U,ae,de,re,se)=>{
        const ee = A.el = T ? T.el : l("")
          , he = A.anchor = T ? T.anchor : l("");
        let {patchFlag: ye, dynamicChildren: be, slotScopeIds: we} = A;
        we && (re = re ? re.concat(we) : we),
        T == null ? (o(ee, L, Y),
        o(he, L, Y),
        x(A.children || [], L, he, U, ae, de, re, se)) : ye > 0 && ye & 64 && be && T.dynamicChildren ? ($(T.dynamicChildren, be, L, U, ae, de, re),
        (A.key != null || U && A === U.subTree) && rs(T, A, !0)) : ie(T, A, L, he, U, ae, de, re, se)
    }
      , I = (T,A,L,Y,U,ae,de,re,se)=>{
        A.slotScopeIds = re,
        T == null ? A.shapeFlag & 512 ? U.ctx.activate(A, L, Y, de, se) : Q(A, L, Y, U, ae, de, se) : ne(T, A, se)
    }
      , Q = (T,A,L,Y,U,ae,de)=>{
        const re = T.component = nv(T, Y, U);
        if (ni(T) && (re.ctx.renderer = J),
        ov(re),
        re.asyncDep) {
            if (U && U.registerDep(re, N),
            !T.el) {
                const se = re.subTree = d(_t);
                v(null, se, A, L)
            }
        } else
            N(re, T, A, L, U, ae, de)
    }
      , ne = (T,A,L)=>{
        const Y = A.component = T.component;
        if (dm(T, A, L))
            if (Y.asyncDep && !Y.asyncResolved) {
                Z(Y, A, L);
                return
            } else
                Y.next = A,
                am(Y.update),
                Y.effect.dirty = !0,
                Y.update();
        else
            A.el = T.el,
            Y.vnode = A
    }
      , N = (T,A,L,Y,U,ae,de)=>{
        const re = ()=>{
            if (T.isMounted) {
                let {next: he, bu: ye, u: be, parent: we, vnode: Be} = T;
                {
                    const Bo = of(T);
                    if (Bo) {
                        he && (he.el = Be.el,
                        Z(T, he, de)),
                        Bo.asyncDep.then(()=>{
                            T.isUnmounted || re()
                        }
                        );
                        return
                    }
                }
                let ze = he, Ge;
                ho(T, !1),
                he ? (he.el = Be.el,
                Z(T, he, de)) : he = Be,
                ye && ki(ye),
                (Ge = he.props && he.props.onVnodeBeforeUpdate) && an(Ge, we, he, Be),
                ho(T, !0);
                const ct = Pi(T)
                  , jt = T.subTree;
                T.subTree = ct,
                C(jt, ct, f(jt.el), P(jt), T, U, ae),
                he.el = ct.el,
                ze === null && fm(T, ct.el),
                be && Tt(be, U),
                (Ge = he.props && he.props.onVnodeUpdated) && Tt(()=>an(Ge, we, he, Be), U)
            } else {
                let he;
                const {el: ye, props: be} = A
                  , {bm: we, m: Be, parent: ze} = T
                  , Ge = Pr(A);
                if (ho(T, !1),
                we && ki(we),
                !Ge && (he = be && be.onVnodeBeforeMount) && an(he, ze, A),
                ho(T, !0),
                ye && xe) {
                    const ct = ()=>{
                        T.subTree = Pi(T),
                        xe(ye, T.subTree, T, U, null)
                    }
                    ;
                    Ge ? A.type.__asyncLoader().then(()=>!T.isUnmounted && ct()) : ct()
                } else {
                    const ct = T.subTree = Pi(T);
                    C(null, ct, L, Y, T, U, ae),
                    A.el = ct.el
                }
                if (Be && Tt(Be, U),
                !Ge && (he = be && be.onVnodeMounted)) {
                    const ct = A;
                    Tt(()=>an(he, ze, ct), U)
                }
                (A.shapeFlag & 256 || ze && Pr(ze.vnode) && ze.vnode.shapeFlag & 256) && T.a && Tt(T.a, U),
                T.isMounted = !0,
                A = L = Y = null
            }
        }
          , se = T.effect = new Wl(re,Vt,()=>es(ee),T.scope)
          , ee = T.update = ()=>{
            se.dirty && se.run()
        }
        ;
        ee.id = T.uid,
        ho(T, !0),
        ee()
    }
      , Z = (T,A,L)=>{
        A.component = T;
        const Y = T.vnode.props;
        T.vnode = A,
        T.next = null,
        Nm(T, A.props, Y, L),
        jm(T, A.children, L),
        ao(),
        Ks(T),
        io()
    }
      , ie = (T,A,L,Y,U,ae,de,re,se=!1)=>{
        const ee = T && T.children
          , he = T ? T.shapeFlag : 0
          , ye = A.children
          , {patchFlag: be, shapeFlag: we} = A;
        if (be > 0) {
            if (be & 128) {
                $e(ee, ye, L, Y, U, ae, de, re, se);
                return
            } else if (be & 256) {
                Ee(ee, ye, L, Y, U, ae, de, re, se);
                return
            }
        }
        we & 8 ? (he & 16 && ue(ee, U, ae),
        ye !== ee && u(L, ye)) : he & 16 ? we & 16 ? $e(ee, ye, L, Y, U, ae, de, re, se) : ue(ee, U, ae, !0) : (he & 8 && u(L, ""),
        we & 16 && x(ye, L, Y, U, ae, de, re, se))
    }
      , Ee = (T,A,L,Y,U,ae,de,re,se)=>{
        T = T || Yo,
        A = A || Yo;
        const ee = T.length
          , he = A.length
          , ye = Math.min(ee, he);
        let be;
        for (be = 0; be < ye; be++) {
            const we = A[be] = se ? Xn(A[be]) : un(A[be]);
            C(T[be], we, L, null, U, ae, de, re, se)
        }
        ee > he ? ue(T, U, ae, !0, !1, ye) : x(A, L, Y, U, ae, de, re, se, ye)
    }
      , $e = (T,A,L,Y,U,ae,de,re,se)=>{
        let ee = 0;
        const he = A.length;
        let ye = T.length - 1
          , be = he - 1;
        for (; ee <= ye && ee <= be; ) {
            const we = T[ee]
              , Be = A[ee] = se ? Xn(A[ee]) : un(A[ee]);
            if (po(we, Be))
                C(we, Be, L, null, U, ae, de, re, se);
            else
                break;
            ee++
        }
        for (; ee <= ye && ee <= be; ) {
            const we = T[ye]
              , Be = A[be] = se ? Xn(A[be]) : un(A[be]);
            if (po(we, Be))
                C(we, Be, L, null, U, ae, de, re, se);
            else
                break;
            ye--,
            be--
        }
        if (ee > ye) {
            if (ee <= be) {
                const we = be + 1
                  , Be = we < he ? A[we].el : Y;
                for (; ee <= be; )
                    C(null, A[ee] = se ? Xn(A[ee]) : un(A[ee]), L, Be, U, ae, de, re, se),
                    ee++
            }
        } else if (ee > be)
            for (; ee <= ye; )
                K(T[ee], U, ae, !0),
                ee++;
        else {
            const we = ee
              , Be = ee
              , ze = new Map;
            for (ee = Be; ee <= be; ee++) {
                const At = A[ee] = se ? Xn(A[ee]) : un(A[ee]);
                At.key != null && ze.set(At.key, ee)
            }
            let Ge, ct = 0;
            const jt = be - Be + 1;
            let Bo = !1
              , Ls = 0;
            const gr = new Array(jt);
            for (ee = 0; ee < jt; ee++)
                gr[ee] = 0;
            for (ee = we; ee <= ye; ee++) {
                const At = T[ee];
                if (ct >= jt) {
                    K(At, U, ae, !0);
                    continue
                }
                let rn;
                if (At.key != null)
                    rn = ze.get(At.key);
                else
                    for (Ge = Be; Ge <= be; Ge++)
                        if (gr[Ge - Be] === 0 && po(At, A[Ge])) {
                            rn = Ge;
                            break
                        }
                rn === void 0 ? K(At, U, ae, !0) : (gr[rn - Be] = ee + 1,
                rn >= Ls ? Ls = rn : Bo = !0,
                C(At, A[rn], L, null, U, ae, de, re, se),
                ct++)
            }
            const Ms = Bo ? qm(gr) : Yo;
            for (Ge = Ms.length - 1,
            ee = jt - 1; ee >= 0; ee--) {
                const At = Be + ee
                  , rn = A[At]
                  , Fs = At + 1 < he ? A[At + 1].el : Y;
                gr[ee] === 0 ? C(null, rn, L, Fs, U, ae, de, re, se) : Bo && (Ge < 0 || ee !== Ms[Ge] ? M(rn, L, Fs, 2) : Ge--)
            }
        }
    }
      , M = (T,A,L,Y,U=null)=>{
        const {el: ae, type: de, transition: re, children: se, shapeFlag: ee} = T;
        if (ee & 6) {
            M(T.component.subTree, A, L, Y);
            return
        }
        if (ee & 128) {
            T.suspense.move(A, L, Y);
            return
        }
        if (ee & 64) {
            de.move(T, A, L, J);
            return
        }
        if (de === Fe) {
            o(ae, A, L);
            for (let ye = 0; ye < se.length; ye++)
                M(se[ye], A, L, Y);
            o(T.anchor, A, L);
            return
        }
        if (de === Bi) {
            p(T, A, L);
            return
        }
        if (Y !== 2 && ee & 1 && re)
            if (Y === 0)
                re.beforeEnter(ae),
                o(ae, A, L),
                Tt(()=>re.enter(ae), U);
            else {
                const {leave: ye, delayLeave: be, afterLeave: we} = re
                  , Be = ()=>o(ae, A, L)
                  , ze = ()=>{
                    ye(ae, ()=>{
                        Be(),
                        we && we()
                    }
                    )
                }
                ;
                be ? be(ae, Be, ze) : ze()
            }
        else
            o(ae, A, L)
    }
      , K = (T,A,L,Y=!1,U=!1)=>{
        const {type: ae, props: de, ref: re, children: se, dynamicChildren: ee, shapeFlag: he, patchFlag: ye, dirs: be} = T;
        if (re != null && ml(re, null, L, T, !0),
        he & 256) {
            A.ctx.deactivate(T);
            return
        }
        const we = he & 1 && be
          , Be = !Pr(T);
        let ze;
        if (Be && (ze = de && de.onVnodeBeforeUnmount) && an(ze, A, T),
        he & 6)
            te(T.component, L, Y);
        else {
            if (he & 128) {
                T.suspense.unmount(L, Y);
                return
            }
            we && fo(T, null, A, "beforeUnmount"),
            he & 64 ? T.type.remove(T, A, L, U, J, Y) : ee && (ae !== Fe || ye > 0 && ye & 64) ? ue(ee, A, L, !1, !0) : (ae === Fe && ye & 384 || !U && he & 16) && ue(se, A, L),
            Y && fe(T)
        }
        (Be && (ze = de && de.onVnodeUnmounted) || we) && Tt(()=>{
            ze && an(ze, A, T),
            we && fo(T, null, A, "unmounted")
        }
        , L)
    }
      , fe = T=>{
        const {type: A, el: L, anchor: Y, transition: U} = T;
        if (A === Fe) {
            ge(L, Y);
            return
        }
        if (A === Bi) {
            y(T);
            return
        }
        const ae = ()=>{
            r(L),
            U && !U.persisted && U.afterLeave && U.afterLeave()
        }
        ;
        if (T.shapeFlag & 1 && U && !U.persisted) {
            const {leave: de, delayLeave: re} = U
              , se = ()=>de(L, ae);
            re ? re(T.el, ae, se) : se()
        } else
            ae()
    }
      , ge = (T,A)=>{
        let L;
        for (; T !== A; )
            L = h(T),
            r(T),
            T = L;
        r(A)
    }
      , te = (T,A,L)=>{
        const {bum: Y, scope: U, update: ae, subTree: de, um: re} = T;
        Y && ki(Y),
        U.stop(),
        ae && (ae.active = !1,
        K(de, T, A, L)),
        re && Tt(re, A),
        Tt(()=>{
            T.isUnmounted = !0
        }
        , A),
        A && A.pendingBranch && !A.isUnmounted && T.asyncDep && !T.asyncResolved && T.suspenseId === A.pendingId && (A.deps--,
        A.deps === 0 && A.resolve())
    }
      , ue = (T,A,L,Y=!1,U=!1,ae=0)=>{
        for (let de = ae; de < T.length; de++)
            K(T[de], A, L, Y, U)
    }
      , P = T=>T.shapeFlag & 6 ? P(T.component.subTree) : T.shapeFlag & 128 ? T.suspense.next() : h(T.anchor || T.el);
    let F = !1;
    const V = (T,A,L)=>{
        T == null ? A._vnode && K(A._vnode, null, null, !0) : C(A._vnode || null, T, A, null, null, null, L),
        F || (F = !0,
        Ks(),
        $d(),
        F = !1),
        A._vnode = T
    }
      , J = {
        p: C,
        um: K,
        m: M,
        r: fe,
        mt: Q,
        mc: x,
        pc: ie,
        pbc: $,
        n: P,
        o: e
    };
    let me, xe;
    return {
        render: V,
        hydrate: me,
        createApp: Mm(V, me)
    }
}
function Oi({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function ho({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}
function Ym(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function rs(e, t, n=!1) {
    const o = e.children
      , r = t.children;
    if (pe(o) && pe(r))
        for (let a = 0; a < o.length; a++) {
            const i = o[a];
            let l = r[a];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[a] = Xn(r[a]),
            l.el = i.el),
            n || rs(i, l)),
            l.type === Zr && (l.el = i.el)
        }
}
function qm(e) {
    const t = e.slice()
      , n = [0];
    let o, r, a, i, l;
    const s = e.length;
    for (o = 0; o < s; o++) {
        const c = e[o];
        if (c !== 0) {
            if (r = n[n.length - 1],
            e[r] < c) {
                t[o] = r,
                n.push(o);
                continue
            }
            for (a = 0,
            i = n.length - 1; a < i; )
                l = a + i >> 1,
                e[n[l]] < c ? a = l + 1 : i = l;
            c < e[n[a]] && (a > 0 && (t[o] = n[a - 1]),
            n[a] = o)
        }
    }
    for (a = n.length,
    i = n[a - 1]; a-- > 0; )
        n[a] = i,
        i = t[i];
    return n
}
function of(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : of(t)
}
const Km = e=>e.__isTeleport
  , Ar = e=>e && (e.disabled || e.disabled === "")
  , ic = e=>typeof SVGElement < "u" && e instanceof SVGElement
  , lc = e=>typeof MathMLElement == "function" && e instanceof MathMLElement
  , vl = (e,t)=>{
    const n = e && e.to;
    return Qe(n) ? t ? t(n) : null : n
}
  , Gm = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, r, a, i, l, s, c) {
        const {mc: u, pc: f, pbc: h, o: {insert: m, querySelector: w, createText: C, createComment: b}} = c
          , v = Ar(t.props);
        let {shapeFlag: g, children: p, dynamicChildren: y} = t;
        if (e == null) {
            const S = t.el = C("")
              , _ = t.anchor = C("");
            m(S, n, o),
            m(_, n, o);
            const O = t.target = vl(t.props, w)
              , x = t.targetAnchor = C("");
            O && (m(x, O),
            i === "svg" || ic(O) ? i = "svg" : (i === "mathml" || lc(O)) && (i = "mathml"));
            const B = ($,k)=>{
                g & 16 && u(p, $, k, r, a, i, l, s)
            }
            ;
            v ? B(n, _) : O && B(O, x)
        } else {
            t.el = e.el;
            const S = t.anchor = e.anchor
              , _ = t.target = e.target
              , O = t.targetAnchor = e.targetAnchor
              , x = Ar(e.props)
              , B = x ? n : _
              , $ = x ? S : O;
            if (i === "svg" || ic(_) ? i = "svg" : (i === "mathml" || lc(_)) && (i = "mathml"),
            y ? (h(e.dynamicChildren, y, B, r, a, i, l),
            rs(e, t, !0)) : s || f(e, t, B, $, r, a, i, l, !1),
            v)
                x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : sa(t, n, S, c, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const k = t.target = vl(t.props, w);
                k && sa(t, k, null, c, 0)
            } else
                x && sa(t, _, O, c, 1)
        }
        rf(t)
    },
    remove(e, t, n, o, {um: r, o: {remove: a}}, i) {
        const {shapeFlag: l, children: s, anchor: c, targetAnchor: u, target: f, props: h} = e;
        if (f && a(u),
        i && a(c),
        l & 16) {
            const m = i || !Ar(h);
            for (let w = 0; w < s.length; w++) {
                const C = s[w];
                r(C, t, n, m, !!C.dynamicChildren)
            }
        }
    },
    move: sa,
    hydrate: Xm
};
function sa(e, t, n, {o: {insert: o}, m: r}, a=2) {
    a === 0 && o(e.targetAnchor, t, n);
    const {el: i, anchor: l, shapeFlag: s, children: c, props: u} = e
      , f = a === 2;
    if (f && o(i, t, n),
    (!f || Ar(u)) && s & 16)
        for (let h = 0; h < c.length; h++)
            r(c[h], t, n, 2);
    f && o(l, t, n)
}
function Xm(e, t, n, o, r, a, {o: {nextSibling: i, parentNode: l, querySelector: s}}, c) {
    const u = t.target = vl(t.props, s);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Ar(t.props))
                t.anchor = c(i(e), t, l(e), n, o, r, a),
                t.targetAnchor = f;
            else {
                t.anchor = i(e);
                let h = f;
                for (; h; )
                    if (h = i(h),
                    h && h.nodeType === 8 && h.data === "teleport anchor") {
                        t.targetAnchor = h,
                        u._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                c(f, t, u, n, o, r, a)
            }
        rf(t)
    }
    return t.anchor && i(t.anchor)
}
const lr = Gm;
function rf(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n && n !== e.targetAnchor; )
            n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
            n = n.nextSibling;
        t.ut()
    }
}
const Fe = Symbol.for("v-fgt")
  , Zr = Symbol.for("v-txt")
  , _t = Symbol.for("v-cmt")
  , Bi = Symbol.for("v-stc")
  , Or = [];
let Gt = null;
function ke(e=!1) {
    Or.push(Gt = e ? null : [])
}
function Qm() {
    Or.pop(),
    Gt = Or[Or.length - 1] || null
}
let jr = 1;
function sc(e) {
    jr += e
}
function af(e) {
    return e.dynamicChildren = jr > 0 ? Gt || Yo : null,
    Qm(),
    jr > 0 && Gt && Gt.push(e),
    e
}
function He(e, t, n, o, r, a) {
    return af(H(e, t, n, o, r, a, !0))
}
function $t(e, t, n, o, r) {
    return af(d(e, t, n, o, r, !0))
}
function Ur(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function po(e, t) {
    return e.type === t.type && e.key === t.key
}
const lf = ({key: e})=>e ?? null
  , Oa = ({ref: e, ref_key: t, ref_for: n})=>(typeof e == "number" && (e = "" + e),
e != null ? Qe(e) || it(e) || _e(e) ? {
    i: rt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function H(e, t=null, n=null, o=0, r=null, a=e === Fe ? 0 : 1, i=!1, l=!1) {
    const s = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && lf(t),
        ref: t && Oa(t),
        scopeId: ti,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: o,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: rt
    };
    return l ? (as(s, n),
    a & 128 && e.normalize(s)) : n && (s.shapeFlag |= Qe(n) ? 8 : 16),
    jr > 0 && !i && Gt && (s.patchFlag > 0 || a & 6) && s.patchFlag !== 32 && Gt.push(s),
    s
}
const d = Zm;
function Zm(e, t=null, n=null, o=0, r=null, a=!1) {
    if ((!e || e === gm) && (e = _t),
    Ur(e)) {
        const l = oo(e, t, !0);
        return n && as(l, n),
        jr > 0 && !a && Gt && (l.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = l : Gt.push(l)),
        l.patchFlag |= -2,
        l
    }
    if (sv(e) && (e = e.__vccOpts),
    t) {
        t = Jm(t);
        let {class: l, style: s} = t;
        l && !Qe(l) && (t.class = Kt(l)),
        qe(s) && (kd(s) && !pe(s) && (s = at({}, s)),
        t.style = Pt(s))
    }
    const i = Qe(e) ? 1 : vm(e) ? 128 : Km(e) ? 64 : qe(e) ? 4 : _e(e) ? 2 : 0;
    return H(e, t, n, o, r, i, a, !0)
}
function Jm(e) {
    return e ? kd(e) || Qd(e) ? at({}, e) : e : null
}
function oo(e, t, n=!1, o=!1) {
    const {props: r, ref: a, patchFlag: i, children: l, transition: s} = e
      , c = t ? Ae(r || {}, t) : r
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && lf(c),
        ref: t && t.ref ? n && a ? pe(a) ? a.concat(Oa(t)) : [a, Oa(t)] : Oa(t) : a,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Fe ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: s,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && oo(e.ssContent),
        ssFallback: e.ssFallback && oo(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return s && o && (u.transition = s.clone(u)),
    u
}
function Ie(e=" ", t=0) {
    return d(Zr, null, e, t)
}
function mt(e="", t=!1) {
    return t ? (ke(),
    $t(_t, null, e)) : d(_t, null, e)
}
function un(e) {
    return e == null || typeof e == "boolean" ? d(_t) : pe(e) ? d(Fe, null, e.slice()) : typeof e == "object" ? Xn(e) : d(Zr, null, String(e))
}
function Xn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : oo(e)
}
function as(e, t) {
    let n = 0;
    const {shapeFlag: o} = e;
    if (t == null)
        t = null;
    else if (pe(t))
        n = 16;
    else if (typeof t == "object")
        if (o & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1),
            as(e, r()),
            r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !Qd(t) ? t._ctx = rt : r === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        _e(t) ? (t = {
            default: t,
            _ctx: rt
        },
        n = 32) : (t = String(t),
        o & 64 ? (n = 16,
        t = [Ie(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Ae(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        for (const r in o)
            if (r === "class")
                t.class !== o.class && (t.class = Kt([t.class, o.class]));
            else if (r === "style")
                t.style = Pt([t.style, o.style]);
            else if (Ka(r)) {
                const a = t[r]
                  , i = o[r];
                i && a !== i && !(pe(a) && a.includes(i)) && (t[r] = a ? [].concat(a, i) : i)
            } else
                r !== "" && (t[r] = o[r])
    }
    return t
}
function an(e, t, n, o=null) {
    Nt(e, t, 7, [n, o])
}
const ev = Kd();
let tv = 0;
function nv(e, t, n) {
    const o = e.type
      , r = (t ? t.appContext : e.appContext) || ev
      , a = {
        uid: tv++,
        vnode: e,
        type: o,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new cd(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Jd(o, r),
        emitsOptions: Id(o, r),
        emit: null,
        emitted: null,
        propsDefaults: We,
        inheritAttrs: o.inheritAttrs,
        ctx: We,
        data: We,
        props: We,
        attrs: We,
        slots: We,
        refs: We,
        setupState: We,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return a.ctx = {
        _: a
    },
    a.root = t ? t.root : a,
    a.emit = sm.bind(null, a),
    e.ce && e.ce(a),
    a
}
let ut = null;
const en = ()=>ut || rt;
let Na, bl;
{
    const e = id()
      , t = (n,o)=>{
        let r;
        return (r = e[n]) || (r = e[n] = []),
        r.push(o),
        a=>{
            r.length > 1 ? r.forEach(i=>i(a)) : r[0](a)
        }
    }
    ;
    Na = t("__VUE_INSTANCE_SETTERS__", n=>ut = n),
    bl = t("__VUE_SSR_SETTERS__", n=>ri = n)
}
const Jr = e=>{
    const t = ut;
    return Na(e),
    e.scope.on(),
    ()=>{
        e.scope.off(),
        Na(t)
    }
}
  , cc = ()=>{
    ut && ut.scope.off(),
    Na(null)
}
;
function sf(e) {
    return e.vnode.shapeFlag & 4
}
let ri = !1;
function ov(e, t=!1) {
    t && bl(t);
    const {props: n, children: o} = e.vnode
      , r = sf(e);
    Vm(e, n, r, t),
    zm(e, o);
    const a = r ? rv(e, t) : void 0;
    return t && bl(!1),
    a
}
function rv(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Om);
    const {setup: o} = n;
    if (o) {
        const r = e.setupContext = o.length > 1 ? iv(e) : null
          , a = Jr(e);
        ao();
        const i = to(o, e, 0, [e.props, r]);
        if (io(),
        a(),
        nd(i)) {
            if (i.then(cc, cc),
            t)
                return i.then(l=>{
                    uc(e, l, t)
                }
                ).catch(l=>{
                    Ja(l, e, 0)
                }
                );
            e.asyncDep = i
        } else
            uc(e, i, t)
    } else
        cf(e, t)
}
function uc(e, t, n) {
    _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = Ad(t)),
    cf(e, n)
}
let dc;
function cf(e, t, n) {
    const o = e.type;
    if (!e.render) {
        if (!t && dc && !o.render) {
            const r = o.template || ns(e).template;
            if (r) {
                const {isCustomElement: a, compilerOptions: i} = e.appContext.config
                  , {delimiters: l, compilerOptions: s} = o
                  , c = at(at({
                    isCustomElement: a,
                    delimiters: l
                }, i), s);
                o.render = dc(r, c)
            }
        }
        e.render = o.render || Vt
    }
    {
        const r = Jr(e);
        ao();
        try {
            Bm(e)
        } finally {
            io(),
            r()
        }
    }
}
const av = {
    get(e, t) {
        return Et(e, "get", ""),
        e[t]
    }
};
function iv(e) {
    const t = n=>{
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,av),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ai(e) {
    if (e.exposed)
        return e.exposeProxy || (e.exposeProxy = new Proxy(Ad(Ql(e.exposed)),{
            get(t, n) {
                if (n in t)
                    return t[n];
                if (n in Er)
                    return Er[n](e)
            },
            has(t, n) {
                return n in t || n in Er
            }
        }))
}
function lv(e, t=!0) {
    return _e(e) ? e.displayName || e.name : e.name || t && e.__name
}
function sv(e) {
    return _e(e) && "__vccOpts"in e
}
const D = (e,t)=>Xg(e, t, ri);
function is(e, t, n) {
    const o = arguments.length;
    return o === 2 ? qe(t) && !pe(t) ? Ur(t) ? d(e, null, [t]) : d(e, t) : d(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ur(n) && (n = [n]),
    d(e, t, n))
}
const cv = "3.4.27";
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const uv = "http://www.w3.org/2000/svg"
  , dv = "http://www.w3.org/1998/Math/MathML"
  , Qn = typeof document < "u" ? document : null
  , fc = Qn && Qn.createElement("template")
  , fv = {
    insert: (e,t,n)=>{
        t.insertBefore(e, n || null)
    }
    ,
    remove: e=>{
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e,t,n,o)=>{
        const r = t === "svg" ? Qn.createElementNS(uv, e) : t === "mathml" ? Qn.createElementNS(dv, e) : Qn.createElement(e, n ? {
            is: n
        } : void 0);
        return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple),
        r
    }
    ,
    createText: e=>Qn.createTextNode(e),
    createComment: e=>Qn.createComment(e),
    setText: (e,t)=>{
        e.nodeValue = t
    }
    ,
    setElementText: (e,t)=>{
        e.textContent = t
    }
    ,
    parentNode: e=>e.parentNode,
    nextSibling: e=>e.nextSibling,
    querySelector: e=>Qn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, o, r, a) {
        const i = n ? n.previousSibling : t.lastChild;
        if (r && (r === a || r.nextSibling))
            for (; t.insertBefore(r.cloneNode(!0), n),
            !(r === a || !(r = r.nextSibling)); )
                ;
        else {
            fc.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
            const l = fc.content;
            if (o === "svg" || o === "mathml") {
                const s = l.firstChild;
                for (; s.firstChild; )
                    l.appendChild(s.firstChild);
                l.removeChild(s)
            }
            t.insertBefore(l, n)
        }
        return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , Fn = "transition"
  , mr = "animation"
  , Wr = Symbol("_vtc")
  , sr = (e,{slots: t})=>is(xm, hv(e), t);
sr.displayName = "Transition";
const uf = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
sr.props = at({}, Nd, uf);
const go = (e,t=[])=>{
    pe(e) ? e.forEach(n=>n(...t)) : e && e(...t)
}
  , hc = e=>e ? pe(e) ? e.some(t=>t.length > 1) : e.length > 1 : !1;
function hv(e) {
    const t = {};
    for (const E in e)
        E in uf || (t[E] = e[E]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: o, duration: r, enterFromClass: a=`${n}-enter-from`, enterActiveClass: i=`${n}-enter-active`, enterToClass: l=`${n}-enter-to`, appearFromClass: s=a, appearActiveClass: c=i, appearToClass: u=l, leaveFromClass: f=`${n}-leave-from`, leaveActiveClass: h=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , w = gv(r)
      , C = w && w[0]
      , b = w && w[1]
      , {onBeforeEnter: v, onEnter: g, onEnterCancelled: p, onLeave: y, onLeaveCancelled: S, onBeforeAppear: _=v, onAppear: O=g, onAppearCancelled: x=p} = t
      , B = (E,I,Q)=>{
        mo(E, I ? u : l),
        mo(E, I ? c : i),
        Q && Q()
    }
      , $ = (E,I)=>{
        E._isLeaving = !1,
        mo(E, f),
        mo(E, m),
        mo(E, h),
        I && I()
    }
      , k = E=>(I,Q)=>{
        const ne = E ? O : g
          , N = ()=>B(I, E, Q);
        go(ne, [I, N]),
        gc(()=>{
            mo(I, E ? s : a),
            Vn(I, E ? u : l),
            hc(ne) || mc(I, o, C, N)
        }
        )
    }
    ;
    return at(t, {
        onBeforeEnter(E) {
            go(v, [E]),
            Vn(E, a),
            Vn(E, i)
        },
        onBeforeAppear(E) {
            go(_, [E]),
            Vn(E, s),
            Vn(E, c)
        },
        onEnter: k(!1),
        onAppear: k(!0),
        onLeave(E, I) {
            E._isLeaving = !0;
            const Q = ()=>$(E, I);
            Vn(E, f),
            Vn(E, h),
            bv(),
            gc(()=>{
                E._isLeaving && (mo(E, f),
                Vn(E, m),
                hc(y) || mc(E, o, b, Q))
            }
            ),
            go(y, [E, Q])
        },
        onEnterCancelled(E) {
            B(E, !1),
            go(p, [E])
        },
        onAppearCancelled(E) {
            B(E, !0),
            go(x, [E])
        },
        onLeaveCancelled(E) {
            $(E),
            go(S, [E])
        }
    })
}
function gv(e) {
    if (e == null)
        return null;
    if (qe(e))
        return [$i(e.enter), $i(e.leave)];
    {
        const t = $i(e);
        return [t, t]
    }
}
function $i(e) {
    return wg(e)
}
function Vn(e, t) {
    t.split(/\s+/).forEach(n=>n && e.classList.add(n)),
    (e[Wr] || (e[Wr] = new Set)).add(t)
}
function mo(e, t) {
    t.split(/\s+/).forEach(o=>o && e.classList.remove(o));
    const n = e[Wr];
    n && (n.delete(t),
    n.size || (e[Wr] = void 0))
}
function gc(e) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(e)
    }
    )
}
let mv = 0;
function mc(e, t, n, o) {
    const r = e._endId = ++mv
      , a = ()=>{
        r === e._endId && o()
    }
    ;
    if (n)
        return setTimeout(a, n);
    const {type: i, timeout: l, propCount: s} = vv(e, t);
    if (!i)
        return o();
    const c = i + "end";
    let u = 0;
    const f = ()=>{
        e.removeEventListener(c, h),
        a()
    }
      , h = m=>{
        m.target === e && ++u >= s && f()
    }
    ;
    setTimeout(()=>{
        u < s && f()
    }
    , l + 1),
    e.addEventListener(c, h)
}
function vv(e, t) {
    const n = window.getComputedStyle(e)
      , o = w=>(n[w] || "").split(", ")
      , r = o(`${Fn}Delay`)
      , a = o(`${Fn}Duration`)
      , i = vc(r, a)
      , l = o(`${mr}Delay`)
      , s = o(`${mr}Duration`)
      , c = vc(l, s);
    let u = null
      , f = 0
      , h = 0;
    t === Fn ? i > 0 && (u = Fn,
    f = i,
    h = a.length) : t === mr ? c > 0 && (u = mr,
    f = c,
    h = s.length) : (f = Math.max(i, c),
    u = f > 0 ? i > c ? Fn : mr : null,
    h = u ? u === Fn ? a.length : s.length : 0);
    const m = u === Fn && /\b(transform|all)(,|$)/.test(o(`${Fn}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: h,
        hasTransform: m
    }
}
function vc(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map((n,o)=>bc(n) + bc(e[o])))
}
function bc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function bv() {
    return document.body.offsetHeight
}
function yv(e, t, n) {
    const o = e[Wr];
    o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ha = Symbol("_vod")
  , df = Symbol("_vsh")
  , ft = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ha] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : vr(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: o}) {
        !t != !n && (o ? t ? (o.beforeEnter(e),
        vr(e, !0),
        o.enter(e)) : o.leave(e, ()=>{
            vr(e, !1)
        }
        ) : vr(e, t))
    },
    beforeUnmount(e, {value: t}) {
        vr(e, t)
    }
};
function vr(e, t) {
    e.style.display = t ? e[Ha] : "none",
    e[df] = !t
}
const pv = Symbol("")
  , wv = /(^|;)\s*display\s*:/;
function Sv(e, t, n) {
    const o = e.style
      , r = Qe(n);
    let a = !1;
    if (n && !r) {
        if (t)
            if (Qe(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && Ba(o, l, "")
                }
            else
                for (const i in t)
                    n[i] == null && Ba(o, i, "");
        for (const i in n)
            i === "display" && (a = !0),
            Ba(o, i, n[i])
    } else if (r) {
        if (t !== n) {
            const i = o[pv];
            i && (n += ";" + i),
            o.cssText = n,
            a = wv.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ha in e && (e[Ha] = a ? o.display : "",
    e[df] && (o.display = "none"))
}
const yc = /\s*!important$/;
function Ba(e, t, n) {
    if (pe(n))
        n.forEach(o=>Ba(e, t, o));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const o = Cv(e, t);
        yc.test(n) ? e.setProperty(ro(o), n.replace(yc, ""), "important") : e[o] = n
    }
}
const pc = ["Webkit", "Moz", "ms"]
  , Di = {};
function Cv(e, t) {
    const n = Di[t];
    if (n)
        return n;
    let o = gn(t);
    if (o !== "filter" && o in e)
        return Di[t] = o;
    o = Qa(o);
    for (let r = 0; r < pc.length; r++) {
        const a = pc[r] + o;
        if (a in e)
            return Di[t] = a
    }
    return t
}
const wc = "http://www.w3.org/1999/xlink";
function xv(e, t, n, o, r) {
    if (o && t.startsWith("xlink:"))
        n == null ? e.removeAttributeNS(wc, t.slice(6, t.length)) : e.setAttributeNS(wc, t, n);
    else {
        const a = Pg(t);
        n == null || a && !ld(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n)
    }
}
function _v(e, t, n, o, r, a, i) {
    if (t === "innerHTML" || t === "textContent") {
        o && i(o, r, a),
        e[t] = n ?? "";
        return
    }
    const l = e.tagName;
    if (t === "value" && l !== "PROGRESS" && !l.includes("-")) {
        const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value
          , u = n ?? "";
        (c !== u || !("_value"in e)) && (e.value = u),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let s = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = ld(n) : n == null && c === "string" ? (n = "",
        s = !0) : c === "number" && (n = 0,
        s = !0)
    }
    try {
        e[t] = n
    } catch {}
    s && e.removeAttribute(t)
}
function kv(e, t, n, o) {
    e.addEventListener(t, n, o)
}
function Tv(e, t, n, o) {
    e.removeEventListener(t, n, o)
}
const Sc = Symbol("_vei");
function Pv(e, t, n, o, r=null) {
    const a = e[Sc] || (e[Sc] = {})
      , i = a[t];
    if (o && i)
        i.value = o;
    else {
        const [l,s] = Ev(t);
        if (o) {
            const c = a[t] = Bv(o, r);
            kv(e, l, c, s)
        } else
            i && (Tv(e, l, i, s),
            a[t] = void 0)
    }
}
const Cc = /(?:Once|Passive|Capture)$/;
function Ev(e) {
    let t;
    if (Cc.test(e)) {
        t = {};
        let o;
        for (; o = e.match(Cc); )
            e = e.slice(0, e.length - o[0].length),
            t[o[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : ro(e.slice(2)), t]
}
let Ii = 0;
const Av = Promise.resolve()
  , Ov = ()=>Ii || (Av.then(()=>Ii = 0),
Ii = Date.now());
function Bv(e, t) {
    const n = o=>{
        if (!o._vts)
            o._vts = Date.now();
        else if (o._vts <= n.attached)
            return;
        Nt($v(o, n.value), t, 5, [o])
    }
    ;
    return n.value = e,
    n.attached = Ov(),
    n
}
function $v(e, t) {
    if (pe(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = ()=>{
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(o=>r=>!r._stopped && o && o(r))
    } else
        return t
}
const xc = e=>e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Dv = (e,t,n,o,r,a,i,l,s)=>{
    const c = r === "svg";
    t === "class" ? yv(e, o, c) : t === "style" ? Sv(e, n, o) : Ka(t) ? zl(t) || Pv(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : Iv(e, t, o, c)) ? _v(e, t, o, a, i, l, s) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o),
    xv(e, t, o, c))
}
;
function Iv(e, t, n, o) {
    if (o)
        return !!(t === "innerHTML" || t === "textContent" || t in e && xc(t) && _e(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return xc(t) && Qe(n) ? !1 : t in e
}
const Rv = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , Lv = (e,t)=>{
    const n = e._withKeys || (e._withKeys = {})
      , o = t.join(".");
    return n[o] || (n[o] = r=>{
        if (!("key"in r))
            return;
        const a = ro(r.key);
        if (t.some(i=>i === a || Rv[i] === a))
            return e(r)
    }
    )
}
  , Mv = at({
    patchProp: Dv
}, fv);
let _c;
function Fv() {
    return _c || (_c = Um(Mv))
}
const ff = (...e)=>{
    const t = Fv().createApp(...e)
      , {mount: n} = t;
    return t.mount = o=>{
        const r = Nv(o);
        if (!r)
            return;
        const a = t._component;
        !_e(a) && !a.render && !a.template && (a.template = r.innerHTML),
        r.innerHTML = "";
        const i = n(r, !1, Vv(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        i
    }
    ,
    t
}
;
function Vv(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function Nv(e) {
    return Qe(e) ? document.querySelector(e) : e
}
var lo = typeof window < "u";
function bt(e) {
    return lo ? requestAnimationFrame(e) : -1
}
function ii(e) {
    lo && cancelAnimationFrame(e)
}
function Jn(e) {
    bt(()=>bt(e))
}
var Hv = e=>e === window
  , kc = (e,t)=>({
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
})
  , Ve = e=>{
    const t = Xt(e);
    if (Hv(t)) {
        const n = t.innerWidth
          , o = t.innerHeight;
        return kc(n, o)
    }
    return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : kc(0, 0)
}
;
function zv(e=!1) {
    const t = R(e);
    return [t, (o=!t.value)=>{
        t.value = o
    }
    ]
}
function gt(e) {
    const t = kt(e, null);
    if (t) {
        const n = en()
          , {link: o, unlink: r, internalChildren: a} = t;
        o(n),
        ir(()=>r(n));
        const i = D(()=>a.indexOf(n));
        return {
            parent: t,
            index: i
        }
    }
    return {
        parent: null,
        index: R(-1)
    }
}
function jv(e) {
    const t = []
      , n = o=>{
        Array.isArray(o) && o.forEach(r=>{
            var a;
            Ur(r) && (t.push(r),
            (a = r.component) != null && a.subTree && (t.push(r.component.subTree),
            n(r.component.subTree.children)),
            r.children && n(r.children))
        }
        )
    }
    ;
    return n(e),
    t
}
var Tc = (e,t)=>{
    const n = e.indexOf(t);
    return n === -1 ? e.findIndex(o=>t.key !== void 0 && t.key !== null && o.type === t.type && o.key === t.key) : n
}
;
function Uv(e, t, n) {
    const o = jv(e.subTree.children);
    n.sort((a,i)=>Tc(o, a.vnode) - Tc(o, i.vnode));
    const r = n.map(a=>a.proxy);
    t.sort((a,i)=>{
        const l = r.indexOf(a)
          , s = r.indexOf(i);
        return l - s
    }
    )
}
function wt(e) {
    const t = Ke([])
      , n = Ke([])
      , o = en();
    return {
        children: t,
        linkChildren: a=>{
            kn(e, Object.assign({
                link: s=>{
                    s.proxy && (n.push(s),
                    t.push(s.proxy),
                    Uv(o, t, n))
                }
                ,
                unlink: s=>{
                    const c = n.indexOf(s);
                    t.splice(c, 1),
                    n.splice(c, 1)
                }
                ,
                children: t,
                internalChildren: n
            }, a))
        }
    }
}
var yl = 1e3
  , pl = 60 * yl
  , wl = 60 * pl
  , Pc = 24 * wl;
function Wv(e) {
    const t = Math.floor(e / Pc)
      , n = Math.floor(e % Pc / wl)
      , o = Math.floor(e % wl / pl)
      , r = Math.floor(e % pl / yl)
      , a = Math.floor(e % yl);
    return {
        total: e,
        days: t,
        hours: n,
        minutes: o,
        seconds: r,
        milliseconds: a
    }
}
function Yv(e, t) {
    return Math.floor(e / 1e3) === Math.floor(t / 1e3)
}
function qv(e) {
    let t, n, o, r;
    const a = R(e.time)
      , i = D(()=>Wv(a.value))
      , l = ()=>{
        o = !1,
        ii(t)
    }
      , s = ()=>Math.max(n - Date.now(), 0)
      , c = C=>{
        var b, v;
        a.value = C,
        (b = e.onChange) == null || b.call(e, i.value),
        C === 0 && (l(),
        (v = e.onFinish) == null || v.call(e))
    }
      , u = ()=>{
        t = bt(()=>{
            o && (c(s()),
            a.value > 0 && u())
        }
        )
    }
      , f = ()=>{
        t = bt(()=>{
            if (o) {
                const C = s();
                (!Yv(C, a.value) || C === 0) && c(C),
                a.value > 0 && f()
            }
        }
        )
    }
      , h = ()=>{
        lo && (e.millisecond ? u() : f())
    }
      , m = ()=>{
        o || (n = Date.now() + a.value,
        o = !0,
        h())
    }
      , w = (C=e.time)=>{
        l(),
        a.value = C
    }
    ;
    return bn(l),
    mn(()=>{
        r && (o = !0,
        r = !1,
        h())
    }
    ),
    vn(()=>{
        o && (l(),
        r = !0)
    }
    ),
    {
        start: m,
        pause: l,
        reset: w,
        current: i
    }
}
function cr(e) {
    let t;
    tt(()=>{
        e(),
        Te(()=>{
            t = !0
        }
        )
    }
    ),
    mn(()=>{
        t && e()
    }
    )
}
function et(e, t, n={}) {
    if (!lo)
        return;
    const {target: o=window, passive: r=!1, capture: a=!1} = n;
    let i = !1, l;
    const s = f=>{
        if (i)
            return;
        const h = Xt(f);
        h && !l && (h.addEventListener(e, t, {
            capture: a,
            passive: r
        }),
        l = !0)
    }
      , c = f=>{
        if (i)
            return;
        const h = Xt(f);
        h && l && (h.removeEventListener(e, t, a),
        l = !1)
    }
    ;
    ir(()=>c(o)),
    vn(()=>c(o)),
    cr(()=>s(o));
    let u;
    return it(o) && (u = oe(o, (f,h)=>{
        c(h),
        s(f)
    }
    )),
    ()=>{
        u == null || u(),
        c(o),
        i = !0
    }
}
function li(e, t, n={}) {
    if (!lo)
        return;
    const {eventName: o="click"} = n;
    et(o, a=>{
        (Array.isArray(e) ? e : [e]).every(s=>{
            const c = Xt(s);
            return c && !c.contains(a.target)
        }
        ) && t(a)
    }
    , {
        target: document
    })
}
var ca, Ri;
function Kv() {
    if (!ca && (ca = R(0),
    Ri = R(0),
    lo)) {
        const e = ()=>{
            ca.value = window.innerWidth,
            Ri.value = window.innerHeight
        }
        ;
        e(),
        window.addEventListener("resize", e, {
            passive: !0
        }),
        window.addEventListener("orientationchange", e, {
            passive: !0
        })
    }
    return {
        width: ca,
        height: Ri
    }
}
var Gv = /scroll|auto|overlay/i
  , hf = lo ? window : void 0;
function Xv(e) {
    return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1
}
function ls(e, t=hf) {
    let n = e;
    for (; n && n !== t && Xv(n); ) {
        const {overflowY: o} = window.getComputedStyle(n);
        if (Gv.test(o))
            return n;
        n = n.parentNode
    }
    return t
}
function ur(e, t=hf) {
    const n = R();
    return tt(()=>{
        e.value && (n.value = ls(e.value, t))
    }
    ),
    n
}
var ua;
function Qv() {
    if (!ua && (ua = R("visible"),
    lo)) {
        const e = ()=>{
            ua.value = document.hidden ? "hidden" : "visible"
        }
        ;
        e(),
        window.addEventListener("visibilitychange", e)
    }
    return ua
}
var gf = Symbol("van-field");
function so(e) {
    const t = kt(gf, null);
    t && !t.customValue.value && (t.customValue.value = e,
    oe(e, ()=>{
        t.resetValidation(),
        t.validateWithTrigger("onChange")
    }
    ))
}
function En(e) {
    const t = "scrollTop"in e ? e.scrollTop : e.pageYOffset;
    return Math.max(t, 0)
}
function za(e, t) {
    "scrollTop"in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t)
}
function _o() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
function Yr(e) {
    za(window, e),
    za(document.body, e)
}
function Ec(e, t) {
    if (e === window)
        return 0;
    const n = t ? En(t) : _o();
    return Ve(e).top + n
}
const Zv = fg();
function mf() {
    Zv && Yr(_o())
}
const ss = e=>e.stopPropagation();
function Ue(e, t) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    t && ss(e)
}
function To(e) {
    const t = Xt(e);
    if (!t)
        return !1;
    const n = window.getComputedStyle(t)
      , o = n.display === "none"
      , r = t.offsetParent === null && n.position !== "fixed";
    return o || r
}
const {width: Qt, height: Ht} = Kv();
function Jv(e) {
    const t = window.getComputedStyle(e);
    return t.transform !== "none" || t.perspective !== "none" || ["transform", "perspective", "filter"].some(n=>(t.willChange || "").includes(n))
}
function eb(e) {
    let t = e.parentElement;
    for (; t; ) {
        if (t && t.tagName !== "HTML" && t.tagName !== "BODY" && Jv(t))
            return t;
        t = t.parentElement
    }
    return null
}
function Se(e) {
    if (De(e))
        return ed(e) ? `${e}px` : String(e)
}
function $n(e) {
    if (De(e)) {
        if (Array.isArray(e))
            return {
                width: Se(e[0]),
                height: Se(e[1])
            };
        const t = Se(e);
        return {
            width: t,
            height: t
        }
    }
}
function Dn(e) {
    const t = {};
    return e !== void 0 && (t.zIndex = +e),
    t
}
let Li;
function tb() {
    if (!Li) {
        const e = document.documentElement
          , t = e.style.fontSize || window.getComputedStyle(e).fontSize;
        Li = parseFloat(t)
    }
    return Li
}
function nb(e) {
    return e = e.replace(/rem/g, ""),
    +e * tb()
}
function ob(e) {
    return e = e.replace(/vw/g, ""),
    +e * Qt.value / 100
}
function rb(e) {
    return e = e.replace(/vh/g, ""),
    +e * Ht.value / 100
}
function cs(e) {
    if (typeof e == "number")
        return e;
    if (It) {
        if (e.includes("rem"))
            return nb(e);
        if (e.includes("vw"))
            return ob(e);
        if (e.includes("vh"))
            return rb(e)
    }
    return parseFloat(e)
}
const ab = /-(\w)/g
  , vf = e=>e.replace(ab, (t,n)=>n.toUpperCase())
  , ib = e=>e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function qt(e, t=2) {
    let n = e + "";
    for (; n.length < t; )
        n = "0" + n;
    return n
}
const ht = (e,t,n)=>Math.min(Math.max(e, t), n);
function Ac(e, t, n) {
    const o = e.indexOf(t);
    return o === -1 ? e : t === "-" && o !== 0 ? e.slice(0, o) : e.slice(0, o + 1) + e.slice(o).replace(n, "")
}
function Sl(e, t=!0, n=!0) {
    t ? e = Ac(e, ".", /\./g) : e = e.split(".")[0],
    n ? e = Ac(e, "-", /-/g) : e = e.replace(/-/, "");
    const o = t ? /[^-0-9.]/g : /[^-0-9]/g;
    return e.replace(o, "")
}
function bf(e, t) {
    return Math.round((e + t) * 1e10) / 1e10
}
const {hasOwnProperty: lb} = Object.prototype;
function sb(e, t, n) {
    const o = t[n];
    De(o) && (!lb.call(e, n) || !hn(o) ? e[n] = o : e[n] = yf(Object(e[n]), o))
}
function yf(e, t) {
    return Object.keys(t).forEach(n=>{
        sb(e, t, n)
    }
    ),
    e
}
var cb = {
    name: "姓名",
    tel: "电话",
    save: "保存",
    clear: "清空",
    cancel: "取消",
    confirm: "确认",
    delete: "删除",
    loading: "加载中...",
    noCoupon: "暂无优惠券",
    nameEmpty: "请填写姓名",
    addContact: "添加联系人",
    telInvalid: "请填写正确的电话",
    vanCalendar: {
        end: "结束",
        start: "开始",
        title: "日期选择",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        monthTitle: (e,t)=>`${e}年${t}月`,
        rangePrompt: e=>`最多选择 ${e} 天`
    },
    vanCascader: {
        select: "请选择"
    },
    vanPagination: {
        prev: "上一页",
        next: "下一页"
    },
    vanPullRefresh: {
        pulling: "下拉即可刷新...",
        loosing: "释放即可刷新..."
    },
    vanSubmitBar: {
        label: "合计:"
    },
    vanCoupon: {
        unlimited: "无门槛",
        discount: e=>`${e}折`,
        condition: e=>`满${e}元可用`
    },
    vanCouponCell: {
        title: "优惠券",
        count: e=>`${e}张可用`
    },
    vanCouponList: {
        exchange: "兑换",
        close: "不使用",
        enable: "可用",
        disabled: "不可用",
        placeholder: "输入优惠码"
    },
    vanAddressEdit: {
        area: "地区",
        areaEmpty: "请选择地区",
        addressEmpty: "请填写详细地址",
        addressDetail: "详细地址",
        defaultAddress: "设为默认收货地址"
    },
    vanAddressList: {
        add: "新增地址"
    }
};
const Oc = R("zh-CN")
  , Bc = Ke({
    "zh-CN": cb
})
  , pf = {
    messages() {
        return Bc[Oc.value]
    },
    use(e, t) {
        Oc.value = e,
        this.add({
            [e]: t
        })
    },
    add(e={}) {
        yf(Bc, e)
    }
};
var ub = pf;
function db(e) {
    const t = vf(e) + ".";
    return (n,...o)=>{
        const r = ub.messages()
          , a = Vs(r, t + n) || Vs(r, n);
        return er(a) ? a(...o) : a
    }
}
function Cl(e, t) {
    return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce((n,o)=>n + Cl(e, o), "") : Object.keys(t).reduce((n,o)=>n + (t[o] ? Cl(e, o) : ""), "") : ""
}
function fb(e) {
    return (t,n)=>(t && typeof t != "string" && (n = t,
    t = ""),
    t = t ? `${e}__${t}` : e,
    `${t}${Cl(t, n)}`)
}
function W(e) {
    const t = `van-${e}`;
    return [t, fb(t), db(t)]
}
const In = "van-hairline"
  , wf = `${In}--top`
  , Sf = `${In}--left`
  , hb = `${In}--right`
  , us = `${In}--bottom`
  , Br = `${In}--surround`
  , si = `${In}--top-bottom`
  , gb = `${In}-unset--top-bottom`
  , yt = "van-haptics-feedback"
  , Cf = Symbol("van-form")
  , xf = 500
  , $c = 5;
function co(e, {args: t=[], done: n, canceled: o, error: r}) {
    if (e) {
        const a = e.apply(null, t);
        Nl(a) ? a.then(i=>{
            i ? n() : o && o()
        }
        ).catch(r || rl) : a ? n() : o && o()
    } else
        n()
}
function G(e) {
    return e.install = t=>{
        const {name: n} = e;
        n && (t.component(n, e),
        t.component(vf(`-${n}`), e))
    }
    ,
    e
}
function ja(e, t) {
    return e.reduce((n,o)=>Math.abs(n - t) < Math.abs(o - t) ? n : o)
}
const _f = Symbol();
function ci(e) {
    const t = kt(_f, null);
    t && oe(t, n=>{
        n && e()
    }
    )
}
const kf = (e,t)=>{
    const n = R()
      , o = ()=>{
        n.value = Ve(e).height
    }
    ;
    return tt(()=>{
        if (Te(o),
        t)
            for (let r = 1; r <= 3; r++)
                setTimeout(o, 100 * r)
    }
    ),
    ci(()=>Te(o)),
    oe([Qt, Ht], o),
    n
}
;
function ui(e, t) {
    const n = kf(e, !0);
    return o=>d("div", {
        class: t("placeholder"),
        style: {
            height: n.value ? `${n.value}px` : void 0
        }
    }, [o()])
}
const [Tf,Dc] = W("action-bar")
  , ds = Symbol(Tf)
  , mb = {
    placeholder: Boolean,
    safeAreaInsetBottom: z
};
var vb = j({
    name: Tf,
    props: mb,
    setup(e, {slots: t}) {
        const n = R()
          , o = ui(n, Dc)
          , {linkChildren: r} = wt(ds);
        r();
        const a = ()=>{
            var i;
            return d("div", {
                ref: n,
                class: [Dc(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(i = t.default) == null ? void 0 : i.call(t)])
        }
        ;
        return ()=>e.placeholder ? o(a) : a()
    }
});
const Pf = G(vb);
function Oe(e) {
    const t = en();
    t && ve(t.proxy, e)
}
const uo = {
    to: [String, Object],
    url: String,
    replace: Boolean
};
function Ef({to: e, url: t, replace: n, $router: o}) {
    e && o ? o[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t)
}
function Eo() {
    const e = en().proxy;
    return ()=>Ef(e)
}
const [bb,Ic] = W("badge")
  , yb = {
    dot: Boolean,
    max: q,
    tag: X("div"),
    color: String,
    offset: Array,
    content: q,
    showZero: z,
    position: X("top-right")
};
var pb = j({
    name: bb,
    props: yb,
    setup(e, {slots: t}) {
        const n = ()=>{
            if (t.content)
                return !0;
            const {content: l, showZero: s} = e;
            return De(l) && l !== "" && (s || l !== 0 && l !== "0")
        }
          , o = ()=>{
            const {dot: l, max: s, content: c} = e;
            if (!l && n())
                return t.content ? t.content() : De(s) && ed(c) && +c > +s ? `${s}+` : c
        }
          , r = l=>l.startsWith("-") ? l.replace("-", "") : `-${l}`
          , a = D(()=>{
            const l = {
                background: e.color
            };
            if (e.offset) {
                const [s,c] = e.offset
                  , {position: u} = e
                  , [f,h] = u.split("-");
                t.default ? (typeof c == "number" ? l[f] = Se(f === "top" ? c : -c) : l[f] = f === "top" ? Se(c) : r(c),
                typeof s == "number" ? l[h] = Se(h === "left" ? s : -s) : l[h] = h === "left" ? Se(s) : r(s)) : (l.marginTop = Se(c),
                l.marginLeft = Se(s))
            }
            return l
        }
        )
          , i = ()=>{
            if (n() || e.dot)
                return d("div", {
                    class: Ic([e.position, {
                        dot: e.dot,
                        fixed: !!t.default
                    }]),
                    style: a.value
                }, [o()])
        }
        ;
        return ()=>{
            if (t.default) {
                const {tag: l} = e;
                return d(l, {
                    class: Ic("wrapper")
                }, {
                    default: ()=>[t.default(), i()]
                })
            }
            return i()
        }
    }
});
const Ao = G(pb);
let Af = 2e3;
const wb = ()=>++Af
  , Sb = e=>{
    Af = e
}
  , [Of,Cb] = W("config-provider")
  , Bf = Symbol(Of)
  , xb = {
    tag: X("div"),
    theme: X("light"),
    zIndex: Number,
    themeVars: Object,
    themeVarsDark: Object,
    themeVarsLight: Object,
    themeVarsScope: X("local"),
    iconPrefix: String
};
function _b(e) {
    return e.replace(/([a-zA-Z])(\d)/g, "$1-$2")
}
function kb(e) {
    const t = {};
    return Object.keys(e).forEach(n=>{
        const o = _b(ib(n));
        t[`--van-${o}`] = e[n]
    }
    ),
    t
}
function da(e={}, t={}) {
    Object.keys(e).forEach(n=>{
        e[n] !== t[n] && document.documentElement.style.setProperty(n, e[n])
    }
    ),
    Object.keys(t).forEach(n=>{
        e[n] || document.documentElement.style.removeProperty(n)
    }
    )
}
var Tb = j({
    name: Of,
    props: xb,
    setup(e, {slots: t}) {
        const n = D(()=>kb(ve({}, e.themeVars, e.theme === "dark" ? e.themeVarsDark : e.themeVarsLight)));
        if (It) {
            const o = ()=>{
                document.documentElement.classList.add(`van-theme-${e.theme}`)
            }
              , r = (a=e.theme)=>{
                document.documentElement.classList.remove(`van-theme-${a}`)
            }
            ;
            oe(()=>e.theme, (a,i)=>{
                i && r(i),
                o()
            }
            , {
                immediate: !0
            }),
            mn(o),
            vn(r),
            bn(r),
            oe(n, (a,i)=>{
                e.themeVarsScope === "global" && da(a, i)
            }
            ),
            oe(()=>e.themeVarsScope, (a,i)=>{
                i === "global" && da({}, n.value),
                a === "global" && da(n.value, {})
            }
            ),
            e.themeVarsScope === "global" && da(n.value, {})
        }
        return kn(Bf, e),
        ar(()=>{
            e.zIndex !== void 0 && Sb(e.zIndex)
        }
        ),
        ()=>d(e.tag, {
            class: Cb(),
            style: e.themeVarsScope === "local" ? n.value : void 0
        }, {
            default: ()=>{
                var o;
                return [(o = t.default) == null ? void 0 : o.call(t)]
            }
        })
    }
});
const [Pb,Rc] = W("icon")
  , Eb = e=>e == null ? void 0 : e.includes("/")
  , Ab = {
    dot: Boolean,
    tag: X("i"),
    name: String,
    size: q,
    badge: q,
    color: String,
    badgeProps: Object,
    classPrefix: String
};
var Ob = j({
    name: Pb,
    props: Ab,
    setup(e, {slots: t}) {
        const n = kt(Bf, null)
          , o = D(()=>e.classPrefix || (n == null ? void 0 : n.iconPrefix) || Rc());
        return ()=>{
            const {tag: r, dot: a, name: i, size: l, badge: s, color: c} = e
              , u = Eb(i);
            return d(Ao, Ae({
                dot: a,
                tag: r,
                class: [o.value, u ? "" : `${o.value}-${i}`],
                style: {
                    color: c,
                    fontSize: Se(l)
                },
                content: s
            }, e.badgeProps), {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t), u && d("img", {
                        class: Rc("image"),
                        src: i
                    }, null)]
                }
            })
        }
    }
});
const Ce = G(Ob);
var Bb = Ce;
const [$b,$r] = W("loading")
  , Db = Array(12).fill(null).map((e,t)=>d("i", {
    class: $r("line", String(t + 1))
}, null))
  , Ib = d("svg", {
    class: $r("circular"),
    viewBox: "25 25 50 50"
}, [d("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
}, null)])
  , Rb = {
    size: q,
    type: X("circular"),
    color: String,
    vertical: Boolean,
    textSize: q,
    textColor: String
};
var Lb = j({
    name: $b,
    props: Rb,
    setup(e, {slots: t}) {
        const n = D(()=>ve({
            color: e.color
        }, $n(e.size)))
          , o = ()=>{
            const a = e.type === "spinner" ? Db : Ib;
            return d("span", {
                class: $r("spinner", e.type),
                style: n.value
            }, [t.icon ? t.icon() : a])
        }
          , r = ()=>{
            var a;
            if (t.default)
                return d("span", {
                    class: $r("text"),
                    style: {
                        fontSize: Se(e.textSize),
                        color: (a = e.textColor) != null ? a : e.color
                    }
                }, [t.default()])
        }
        ;
        return ()=>{
            const {type: a, vertical: i} = e;
            return d("div", {
                class: $r([a, {
                    vertical: i
                }]),
                "aria-live": "polite",
                "aria-busy": !0
            }, [o(), r()])
        }
    }
});
const tn = G(Lb)
  , [Mb,$o] = W("button")
  , Fb = ve({}, uo, {
    tag: X("button"),
    text: String,
    icon: String,
    type: X("default"),
    size: X("normal"),
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    nativeType: X("button"),
    loadingSize: q,
    loadingText: String,
    loadingType: String,
    iconPosition: X("left")
});
var Vb = j({
    name: Mb,
    props: Fb,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , r = ()=>n.loading ? n.loading() : d(tn, {
            size: e.loadingSize,
            type: e.loadingType,
            class: $o("loading")
        }, null)
          , a = ()=>{
            if (e.loading)
                return r();
            if (n.icon)
                return d("div", {
                    class: $o("icon")
                }, [n.icon()]);
            if (e.icon)
                return d(Ce, {
                    name: e.icon,
                    class: $o("icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , i = ()=>{
            let c;
            if (e.loading ? c = e.loadingText : c = n.default ? n.default() : e.text,
            c)
                return d("span", {
                    class: $o("text")
                }, [c])
        }
          , l = ()=>{
            const {color: c, plain: u} = e;
            if (c) {
                const f = {
                    color: u ? c : "white"
                };
                return u || (f.background = c),
                c.includes("gradient") ? f.border = 0 : f.borderColor = c,
                f
            }
        }
          , s = c=>{
            e.loading ? Ue(c) : e.disabled || (t("click", c),
            o())
        }
        ;
        return ()=>{
            const {tag: c, type: u, size: f, block: h, round: m, plain: w, square: C, loading: b, disabled: v, hairline: g, nativeType: p, iconPosition: y} = e
              , S = [$o([u, f, {
                plain: w,
                block: h,
                round: m,
                square: C,
                loading: b,
                disabled: v,
                hairline: g
            }]), {
                [Br]: g
            }];
            return d(c, {
                type: p,
                class: S,
                style: l(),
                disabled: v,
                onClick: s
            }, {
                default: ()=>[d("div", {
                    class: $o("content")
                }, [y === "left" && a(), i(), y === "right" && a()])]
            })
        }
    }
});
const pt = G(Vb)
  , [Nb,Hb] = W("action-bar-button")
  , zb = ve({}, uo, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
});
var jb = j({
    name: Nb,
    props: zb,
    setup(e, {slots: t}) {
        const n = Eo()
          , {parent: o, index: r} = gt(ds)
          , a = D(()=>{
            if (o) {
                const l = o.children[r.value - 1];
                return !(l && "isButton"in l)
            }
        }
        )
          , i = D(()=>{
            if (o) {
                const l = o.children[r.value + 1];
                return !(l && "isButton"in l)
            }
        }
        );
        return Oe({
            isButton: !0
        }),
        ()=>{
            const {type: l, icon: s, text: c, color: u, loading: f, disabled: h} = e;
            return d(pt, {
                class: Hb([l, {
                    last: i.value,
                    first: a.value
                }]),
                size: "large",
                type: l,
                icon: s,
                color: u,
                loading: f,
                disabled: h,
                onClick: n
            }, {
                default: ()=>[t.default ? t.default() : c]
            })
        }
    }
});
const xl = G(jb)
  , [Ub,Mi] = W("action-bar-icon")
  , Wb = ve({}, uo, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: q,
    iconClass: Xe,
    badgeProps: Object,
    iconPrefix: String
});
var Yb = j({
    name: Ub,
    props: Wb,
    setup(e, {slots: t}) {
        const n = Eo();
        gt(ds);
        const o = ()=>{
            const {dot: r, badge: a, icon: i, color: l, iconClass: s, badgeProps: c, iconPrefix: u} = e;
            return t.icon ? d(Ao, Ae({
                dot: r,
                class: Mi("icon"),
                content: a
            }, c), {
                default: t.icon
            }) : d(Ce, {
                tag: "div",
                dot: r,
                name: i,
                badge: a,
                color: l,
                class: [Mi("icon"), s],
                badgeProps: c,
                classPrefix: u
            }, null)
        }
        ;
        return ()=>d("div", {
            role: "button",
            class: Mi(),
            tabindex: 0,
            onClick: n
        }, [o(), t.default ? t.default() : e.text])
    }
});
const qb = G(Yb)
  , dr = {
    show: Boolean,
    zIndex: q,
    overlay: z,
    duration: q,
    teleport: [String, Object],
    lockScroll: z,
    lazyRender: z,
    beforeClose: Function,
    overlayStyle: Object,
    overlayClass: Xe,
    transitionAppear: Boolean,
    closeOnClickOverlay: z
}
  , fs = Object.keys(dr);
function Kb(e, t) {
    return e > t ? "horizontal" : t > e ? "vertical" : ""
}
function zt() {
    const e = R(0)
      , t = R(0)
      , n = R(0)
      , o = R(0)
      , r = R(0)
      , a = R(0)
      , i = R("")
      , l = R(!0)
      , s = ()=>i.value === "vertical"
      , c = ()=>i.value === "horizontal"
      , u = ()=>{
        n.value = 0,
        o.value = 0,
        r.value = 0,
        a.value = 0,
        i.value = "",
        l.value = !0
    }
    ;
    return {
        move: m=>{
            const w = m.touches[0];
            n.value = (w.clientX < 0 ? 0 : w.clientX) - e.value,
            o.value = w.clientY - t.value,
            r.value = Math.abs(n.value),
            a.value = Math.abs(o.value);
            const C = 10;
            (!i.value || r.value < C && a.value < C) && (i.value = Kb(r.value, a.value)),
            l.value && (r.value > $c || a.value > $c) && (l.value = !1)
        }
        ,
        start: m=>{
            u(),
            e.value = m.touches[0].clientX,
            t.value = m.touches[0].clientY
        }
        ,
        reset: u,
        startX: e,
        startY: t,
        deltaX: n,
        deltaY: o,
        offsetX: r,
        offsetY: a,
        direction: i,
        isVertical: s,
        isHorizontal: c,
        isTap: l
    }
}
let br = 0;
const Lc = "van-overflow-hidden";
function $f(e, t) {
    const n = zt()
      , o = "01"
      , r = "10"
      , a = u=>{
        n.move(u);
        const f = n.deltaY.value > 0 ? r : o
          , h = ls(u.target, e.value)
          , {scrollHeight: m, offsetHeight: w, scrollTop: C} = h;
        let b = "11";
        C === 0 ? b = w >= m ? "00" : "01" : C + w >= m && (b = "10"),
        b !== "11" && n.isVertical() && !(parseInt(b, 2) & parseInt(f, 2)) && Ue(u, !0)
    }
      , i = ()=>{
        document.addEventListener("touchstart", n.start),
        document.addEventListener("touchmove", a, {
            passive: !1
        }),
        br || document.body.classList.add(Lc),
        br++
    }
      , l = ()=>{
        br && (document.removeEventListener("touchstart", n.start),
        document.removeEventListener("touchmove", a),
        br--,
        br || document.body.classList.remove(Lc))
    }
      , s = ()=>t() && i()
      , c = ()=>t() && l();
    cr(s),
    vn(c),
    bn(c),
    oe(t, u=>{
        u ? i() : l()
    }
    )
}
function hs(e) {
    const t = R(!1);
    return oe(e, n=>{
        n && (t.value = n)
    }
    , {
        immediate: !0
    }),
    n=>()=>t.value ? n() : null
}
const Ua = ()=>{
    var e;
    const {scopeId: t} = ((e = en()) == null ? void 0 : e.vnode) || {};
    return t ? {
        [t]: ""
    } : null
}
  , [Gb,Xb] = W("overlay")
  , Qb = {
    show: Boolean,
    zIndex: q,
    duration: q,
    className: Xe,
    lockScroll: z,
    lazyRender: z,
    customStyle: Object
};
var Zb = j({
    name: Gb,
    props: Qb,
    setup(e, {slots: t}) {
        const n = R()
          , o = hs(()=>e.show || !e.lazyRender)
          , r = i=>{
            e.lockScroll && Ue(i, !0)
        }
          , a = o(()=>{
            var i;
            const l = ve(Dn(e.zIndex), e.customStyle);
            return De(e.duration) && (l.animationDuration = `${e.duration}s`),
            st(d("div", {
                ref: n,
                style: l,
                class: [Xb(), e.className]
            }, [(i = t.default) == null ? void 0 : i.call(t)]), [[ft, e.show]])
        }
        );
        return et("touchmove", r, {
            target: n
        }),
        ()=>d(sr, {
            name: "van-fade",
            appear: !0
        }, {
            default: a
        })
    }
});
const Df = G(Zb)
  , Jb = ve({}, dr, {
    round: Boolean,
    position: X("center"),
    closeIcon: X("cross"),
    closeable: Boolean,
    transition: String,
    iconPrefix: String,
    closeOnPopstate: Boolean,
    closeIconPosition: X("top-right"),
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: Boolean
})
  , [ey,Mc] = W("popup");
var ty = j({
    name: ey,
    inheritAttrs: !1,
    props: Jb,
    emits: ["open", "close", "opened", "closed", "keydown", "update:show", "clickOverlay", "clickCloseIcon"],
    setup(e, {emit: t, attrs: n, slots: o}) {
        let r, a;
        const i = R()
          , l = R()
          , s = hs(()=>e.show || !e.lazyRender)
          , c = D(()=>{
            const _ = {
                zIndex: i.value
            };
            if (De(e.duration)) {
                const O = e.position === "center" ? "animationDuration" : "transitionDuration";
                _[O] = `${e.duration}s`
            }
            return _
        }
        )
          , u = ()=>{
            r || (r = !0,
            i.value = e.zIndex !== void 0 ? +e.zIndex : wb(),
            t("open"))
        }
          , f = ()=>{
            r && co(e.beforeClose, {
                done() {
                    r = !1,
                    t("close"),
                    t("update:show", !1)
                }
            })
        }
          , h = _=>{
            t("clickOverlay", _),
            e.closeOnClickOverlay && f()
        }
          , m = ()=>{
            if (e.overlay)
                return d(Df, Ae({
                    show: e.show,
                    class: e.overlayClass,
                    zIndex: i.value,
                    duration: e.duration,
                    customStyle: e.overlayStyle,
                    role: e.closeOnClickOverlay ? "button" : void 0,
                    tabindex: e.closeOnClickOverlay ? 0 : void 0
                }, Ua(), {
                    onClick: h
                }), {
                    default: o["overlay-content"]
                })
        }
          , w = _=>{
            t("clickCloseIcon", _),
            f()
        }
          , C = ()=>{
            if (e.closeable)
                return d(Ce, {
                    role: "button",
                    tabindex: 0,
                    name: e.closeIcon,
                    class: [Mc("close-icon", e.closeIconPosition), yt],
                    classPrefix: e.iconPrefix,
                    onClick: w
                }, null)
        }
        ;
        let b;
        const v = ()=>{
            b && clearTimeout(b),
            b = setTimeout(()=>{
                t("opened")
            }
            )
        }
          , g = ()=>t("closed")
          , p = _=>t("keydown", _)
          , y = s(()=>{
            var _;
            const {round: O, position: x, safeAreaInsetTop: B, safeAreaInsetBottom: $} = e;
            return st(d("div", Ae({
                ref: l,
                style: c.value,
                role: "dialog",
                tabindex: 0,
                class: [Mc({
                    round: O,
                    [x]: x
                }), {
                    "van-safe-area-top": B,
                    "van-safe-area-bottom": $
                }],
                onKeydown: p
            }, n, Ua()), [(_ = o.default) == null ? void 0 : _.call(o), C()]), [[ft, e.show]])
        }
        )
          , S = ()=>{
            const {position: _, transition: O, transitionAppear: x} = e
              , B = _ === "center" ? "van-fade" : `van-popup-slide-${_}`;
            return d(sr, {
                name: O || B,
                appear: x,
                onAfterEnter: v,
                onAfterLeave: g
            }, {
                default: y
            })
        }
        ;
        return oe(()=>e.show, _=>{
            _ && !r && (u(),
            n.tabindex === 0 && Te(()=>{
                var O;
                (O = l.value) == null || O.focus()
            }
            )),
            !_ && r && (r = !1,
            t("close"))
        }
        ),
        Oe({
            popupRef: l
        }),
        $f(l, ()=>e.show && e.lockScroll),
        et("popstate", ()=>{
            e.closeOnPopstate && (f(),
            a = !1)
        }
        ),
        tt(()=>{
            e.show && u()
        }
        ),
        mn(()=>{
            a && (t("update:show", !0),
            a = !1)
        }
        ),
        vn(()=>{
            e.show && e.teleport && (f(),
            a = !0)
        }
        ),
        kn(_f, ()=>e.show),
        ()=>e.teleport ? d(lr, {
            to: e.teleport
        }, {
            default: ()=>[m(), S()]
        }) : d(Fe, null, [m(), S()])
    }
});
const Rt = G(ty)
  , [ny,Mt] = W("action-sheet")
  , oy = ve({}, dr, {
    title: String,
    round: z,
    actions: Ye(),
    closeIcon: X("cross"),
    closeable: z,
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    closeOnClickAction: Boolean,
    safeAreaInsetBottom: z
})
  , ry = [...fs, "round", "closeOnPopstate", "safeAreaInsetBottom"];
var ay = j({
    name: ny,
    props: oy,
    emits: ["select", "cancel", "update:show"],
    setup(e, {slots: t, emit: n}) {
        const o = f=>n("update:show", f)
          , r = ()=>{
            o(!1),
            n("cancel")
        }
          , a = ()=>{
            if (e.title)
                return d("div", {
                    class: Mt("header")
                }, [e.title, e.closeable && d(Ce, {
                    name: e.closeIcon,
                    class: [Mt("close"), yt],
                    onClick: r
                }, null)])
        }
          , i = ()=>{
            if (t.cancel || e.cancelText)
                return [d("div", {
                    class: Mt("gap")
                }, null), d("button", {
                    type: "button",
                    class: Mt("cancel"),
                    onClick: r
                }, [t.cancel ? t.cancel() : e.cancelText])]
        }
          , l = f=>{
            if (f.icon)
                return d(Ce, {
                    class: Mt("item-icon"),
                    name: f.icon
                }, null)
        }
          , s = (f,h)=>f.loading ? d(tn, {
            class: Mt("loading-icon")
        }, null) : t.action ? t.action({
            action: f,
            index: h
        }) : [d("span", {
            class: Mt("name")
        }, [f.name]), f.subname && d("div", {
            class: Mt("subname")
        }, [f.subname])]
          , c = (f,h)=>{
            const {color: m, loading: w, callback: C, disabled: b, className: v} = f
              , g = ()=>{
                b || w || (C && C(f),
                e.closeOnClickAction && o(!1),
                Te(()=>n("select", f, h)))
            }
            ;
            return d("button", {
                type: "button",
                style: {
                    color: m
                },
                class: [Mt("item", {
                    loading: w,
                    disabled: b
                }), v],
                onClick: g
            }, [l(f), s(f, h)])
        }
          , u = ()=>{
            if (e.description || t.description) {
                const f = t.description ? t.description() : e.description;
                return d("div", {
                    class: Mt("description")
                }, [f])
            }
        }
        ;
        return ()=>d(Rt, Ae({
            class: Mt(),
            position: "bottom",
            "onUpdate:show": o
        }, Le(e, ry)), {
            default: ()=>{
                var f;
                return [a(), u(), d("div", {
                    class: Mt("content")
                }, [e.actions.map(c), (f = t.default) == null ? void 0 : f.call(t)]), i()]
            }
        })
    }
});
const iy = G(ay)
  , [ly,xn,Fc] = W("picker")
  , If = e=>e.find(t=>!t.disabled) || e[0];
function sy(e, t) {
    const n = e[0];
    if (n) {
        if (Array.isArray(n))
            return "multiple";
        if (t.children in n)
            return "cascade"
    }
    return "default"
}
function $a(e, t) {
    t = ht(t, 0, e.length);
    for (let n = t; n < e.length; n++)
        if (!e[n].disabled)
            return n;
    for (let n = t - 1; n >= 0; n--)
        if (!e[n].disabled)
            return n;
    return 0
}
const Vc = (e,t,n)=>t !== void 0 && !!e.find(o=>o[n.value] === t);
function _l(e, t, n) {
    const o = e.findIndex(a=>a[n.value] === t)
      , r = $a(e, o);
    return e[r]
}
function cy(e, t, n) {
    const o = [];
    let r = {
        [t.children]: e
    }
      , a = 0;
    for (; r && r[t.children]; ) {
        const i = r[t.children]
          , l = n.value[a];
        if (r = De(l) ? _l(i, l, t) : void 0,
        !r && i.length) {
            const s = If(i)[t.value];
            r = _l(i, s, t)
        }
        a++,
        o.push(i)
    }
    return o
}
function uy(e) {
    const {transform: t} = window.getComputedStyle(e)
      , n = t.slice(7, t.length - 1).split(", ")[5];
    return Number(n)
}
function dy(e) {
    return ve({
        text: "text",
        value: "value",
        children: "children"
    }, e)
}
const Nc = 200
  , Hc = 300
  , fy = 15
  , [Rf,Fi] = W("picker-column")
  , Lf = Symbol(Rf);
var hy = j({
    name: Rf,
    props: {
        value: q,
        fields: dt(Object),
        options: Ye(),
        readonly: Boolean,
        allowHtml: Boolean,
        optionHeight: dt(Number),
        swipeDuration: dt(q),
        visibleOptionNum: dt(q)
    },
    emits: ["change", "clickOption", "scrollInto"],
    setup(e, {emit: t, slots: n}) {
        let o, r, a, i, l;
        const s = R()
          , c = R()
          , u = R(0)
          , f = R(0)
          , h = zt()
          , m = ()=>e.options.length
          , w = ()=>e.optionHeight * (+e.visibleOptionNum - 1) / 2
          , C = $=>{
            let k = $a(e.options, $);
            const E = -k * e.optionHeight
              , I = ()=>{
                k > m() - 1 && (k = $a(e.options, $));
                const Q = e.options[k][e.fields.value];
                Q !== e.value && t("change", Q)
            }
            ;
            o && E !== u.value ? l = I : I(),
            u.value = E
        }
          , b = ()=>e.readonly || !e.options.length
          , v = $=>{
            o || b() || (l = null,
            f.value = Nc,
            C($),
            t("clickOption", e.options[$]))
        }
          , g = $=>ht(Math.round(-$ / e.optionHeight), 0, m() - 1)
          , p = D(()=>g(u.value))
          , y = ($,k)=>{
            const E = Math.abs($ / k);
            $ = u.value + E / .003 * ($ < 0 ? -1 : 1);
            const I = g($);
            f.value = +e.swipeDuration,
            C(I)
        }
          , S = ()=>{
            o = !1,
            f.value = 0,
            l && (l(),
            l = null)
        }
          , _ = $=>{
            if (!b()) {
                if (h.start($),
                o) {
                    const k = uy(c.value);
                    u.value = Math.min(0, k - w())
                }
                f.value = 0,
                r = u.value,
                a = Date.now(),
                i = r,
                l = null
            }
        }
          , O = $=>{
            if (b())
                return;
            h.move($),
            h.isVertical() && (o = !0,
            Ue($, !0));
            const k = ht(r + h.deltaY.value, -(m() * e.optionHeight), e.optionHeight)
              , E = g(k);
            E !== p.value && t("scrollInto", e.options[E]),
            u.value = k;
            const I = Date.now();
            I - a > Hc && (a = I,
            i = k)
        }
          , x = ()=>{
            if (b())
                return;
            const $ = u.value - i
              , k = Date.now() - a;
            if (k < Hc && Math.abs($) > fy) {
                y($, k);
                return
            }
            const I = g(u.value);
            f.value = Nc,
            C(I),
            setTimeout(()=>{
                o = !1
            }
            , 0)
        }
          , B = ()=>{
            const $ = {
                height: `${e.optionHeight}px`
            };
            return e.options.map((k,E)=>{
                const I = k[e.fields.text]
                  , {disabled: Q} = k
                  , ne = k[e.fields.value]
                  , N = {
                    role: "button",
                    style: $,
                    tabindex: Q ? -1 : 0,
                    class: [Fi("item", {
                        disabled: Q,
                        selected: ne === e.value
                    }), k.className],
                    onClick: ()=>v(E)
                }
                  , Z = {
                    class: "van-ellipsis",
                    [e.allowHtml ? "innerHTML" : "textContent"]: I
                };
                return d("li", N, [n.option ? n.option(k, E) : d("div", Z, null)])
            }
            )
        }
        ;
        return gt(Lf),
        Oe({
            stopMomentum: S
        }),
        ar(()=>{
            const $ = o ? Math.floor(-u.value / e.optionHeight) : e.options.findIndex(I=>I[e.fields.value] === e.value)
              , k = $a(e.options, $)
              , E = -k * e.optionHeight;
            o && k < $ && S(),
            u.value = E
        }
        ),
        et("touchmove", O, {
            target: s
        }),
        ()=>d("div", {
            ref: s,
            class: Fi(),
            onTouchstartPassive: _,
            onTouchend: x,
            onTouchcancel: x
        }, [d("ul", {
            ref: c,
            style: {
                transform: `translate3d(0, ${u.value + w()}px, 0)`,
                transitionDuration: `${f.value}ms`,
                transitionProperty: f.value ? "all" : "none"
            },
            class: Fi("wrapper"),
            onTransitionend: S
        }, [B()])])
    }
});
const [gy] = W("picker-toolbar")
  , di = {
    title: String,
    cancelButtonText: String,
    confirmButtonText: String
}
  , Mf = ["cancel", "confirm", "title", "toolbar"]
  , my = Object.keys(di);
var Ff = j({
    name: gy,
    props: di,
    emits: ["confirm", "cancel"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return d("div", {
                    class: [xn("title"), "van-ellipsis"]
                }, [e.title])
        }
          , r = ()=>t("cancel")
          , a = ()=>t("confirm")
          , i = ()=>{
            var s;
            const c = (s = e.cancelButtonText) != null ? s : Fc("cancel");
            if (!(!n.cancel && !c))
                return d("button", {
                    type: "button",
                    class: [xn("cancel"), yt],
                    onClick: r
                }, [n.cancel ? n.cancel() : c])
        }
          , l = ()=>{
            var s;
            const c = (s = e.confirmButtonText) != null ? s : Fc("confirm");
            if (!(!n.confirm && !c))
                return d("button", {
                    type: "button",
                    class: [xn("confirm"), yt],
                    onClick: a
                }, [n.confirm ? n.confirm() : c])
        }
        ;
        return ()=>d("div", {
            class: xn("toolbar")
        }, [n.toolbar ? n.toolbar() : [i(), o(), l()]])
    }
});
const gs = (e,t)=>{
    const n = R(e());
    return oe(e, o=>{
        o !== n.value && (n.value = o)
    }
    ),
    oe(n, o=>{
        o !== e() && t(o)
    }
    ),
    n
}
;
function vy(e, t, n) {
    let o, r = 0;
    const a = e.scrollLeft
      , i = n === 0 ? 1 : Math.round(n * 1e3 / 16);
    function l() {
        ii(o)
    }
    function s() {
        e.scrollLeft += (t - a) / i,
        ++r < i && (o = bt(s))
    }
    return s(),
    l
}
function by(e, t, n, o) {
    let r, a = En(e);
    const i = a < t
      , l = n === 0 ? 1 : Math.round(n * 1e3 / 16)
      , s = (t - a) / l;
    function c() {
        ii(r)
    }
    function u() {
        a += s,
        (i && a > t || !i && a < t) && (a = t),
        za(e, a),
        i && a < t || !i && a > t ? r = bt(u) : o && (r = bt(o))
    }
    return u(),
    c
}
let yy = 0;
function fr() {
    const e = en()
      , {name: t="unknown"} = (e == null ? void 0 : e.type) || {};
    return `${t}-${++yy}`
}
function ea() {
    const e = R([])
      , t = [];
    return Ud(()=>{
        e.value = []
    }
    ),
    [e, o=>(t[o] || (t[o] = r=>{
        e.value[o] = r
    }
    ),
    t[o])]
}
function Vf(e, t) {
    if (!It || !window.IntersectionObserver)
        return;
    const n = new IntersectionObserver(a=>{
        t(a[0].intersectionRatio > 0)
    }
    ,{
        root: document.body
    })
      , o = ()=>{
        e.value && n.observe(e.value)
    }
      , r = ()=>{
        e.value && n.unobserve(e.value)
    }
    ;
    vn(r),
    bn(r),
    cr(o)
}
const [py,wy] = W("sticky")
  , Sy = {
    zIndex: q,
    position: X("top"),
    container: Object,
    offsetTop: ce(0),
    offsetBottom: ce(0)
};
var Cy = j({
    name: py,
    props: Sy,
    emits: ["scroll", "change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = ur(o)
          , a = Ke({
            fixed: !1,
            width: 0,
            height: 0,
            transform: 0
        })
          , i = R(!1)
          , l = D(()=>cs(e.position === "top" ? e.offsetTop : e.offsetBottom))
          , s = D(()=>{
            if (i.value)
                return;
            const {fixed: h, height: m, width: w} = a;
            if (h)
                return {
                    width: `${w}px`,
                    height: `${m}px`
                }
        }
        )
          , c = D(()=>{
            if (!a.fixed || i.value)
                return;
            const h = ve(Dn(e.zIndex), {
                width: `${a.width}px`,
                height: `${a.height}px`,
                [e.position]: `${l.value}px`
            });
            return a.transform && (h.transform = `translate3d(0, ${a.transform}px, 0)`),
            h
        }
        )
          , u = h=>t("scroll", {
            scrollTop: h,
            isFixed: a.fixed
        })
          , f = ()=>{
            if (!o.value || To(o))
                return;
            const {container: h, position: m} = e
              , w = Ve(o)
              , C = En(window);
            if (a.width = w.width,
            a.height = w.height,
            m === "top")
                if (h) {
                    const b = Ve(h)
                      , v = b.bottom - l.value - a.height;
                    a.fixed = l.value > w.top && b.bottom > 0,
                    a.transform = v < 0 ? v : 0
                } else
                    a.fixed = l.value > w.top;
            else {
                const {clientHeight: b} = document.documentElement;
                if (h) {
                    const v = Ve(h)
                      , g = b - v.top - l.value - a.height;
                    a.fixed = b - l.value < w.bottom && b > v.top,
                    a.transform = g < 0 ? -g : 0
                } else
                    a.fixed = b - l.value < w.bottom
            }
            u(C)
        }
        ;
        return oe(()=>a.fixed, h=>t("change", h)),
        et("scroll", f, {
            target: r,
            passive: !0
        }),
        Vf(o, f),
        oe([Qt, Ht], ()=>{
            !o.value || To(o) || !a.fixed || (i.value = !0,
            Te(()=>{
                const h = Ve(o);
                a.width = h.width,
                a.height = h.height,
                i.value = !1
            }
            ))
        }
        ),
        ()=>{
            var h;
            return d("div", {
                ref: o,
                style: s.value
            }, [d("div", {
                class: wy({
                    fixed: a.fixed && !i.value
                }),
                style: c.value
            }, [(h = n.default) == null ? void 0 : h.call(n)])])
        }
    }
});
const Nf = G(Cy)
  , [Hf,fa] = W("swipe")
  , xy = {
    loop: z,
    width: q,
    height: q,
    vertical: Boolean,
    autoplay: ce(0),
    duration: ce(500),
    touchable: z,
    lazyRender: Boolean,
    initialSwipe: ce(0),
    indicatorColor: String,
    showIndicators: z,
    stopPropagation: z
}
  , zf = Symbol(Hf);
var _y = j({
    name: Hf,
    props: xy,
    emits: ["change", "dragStart", "dragEnd"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = R()
          , a = Ke({
            rect: null,
            width: 0,
            height: 0,
            offset: 0,
            active: 0,
            swiping: !1
        });
        let i = !1;
        const l = zt()
          , {children: s, linkChildren: c} = wt(zf)
          , u = D(()=>s.length)
          , f = D(()=>a[e.vertical ? "height" : "width"])
          , h = D(()=>e.vertical ? l.deltaY.value : l.deltaX.value)
          , m = D(()=>a.rect ? (e.vertical ? a.rect.height : a.rect.width) - f.value * u.value : 0)
          , w = D(()=>f.value ? Math.ceil(Math.abs(m.value) / f.value) : u.value)
          , C = D(()=>u.value * f.value)
          , b = D(()=>(a.active + u.value) % u.value)
          , v = D(()=>{
            const M = e.vertical ? "vertical" : "horizontal";
            return l.direction.value === M
        }
        )
          , g = D(()=>{
            const M = {
                transitionDuration: `${a.swiping ? 0 : e.duration}ms`,
                transform: `translate${e.vertical ? "Y" : "X"}(${+a.offset.toFixed(2)}px)`
            };
            if (f.value) {
                const K = e.vertical ? "height" : "width"
                  , fe = e.vertical ? "width" : "height";
                M[K] = `${C.value}px`,
                M[fe] = e[fe] ? `${e[fe]}px` : ""
            }
            return M
        }
        )
          , p = M=>{
            const {active: K} = a;
            return M ? e.loop ? ht(K + M, -1, u.value) : ht(K + M, 0, w.value) : K
        }
          , y = (M,K=0)=>{
            let fe = M * f.value;
            e.loop || (fe = Math.min(fe, -m.value));
            let ge = K - fe;
            return e.loop || (ge = ht(ge, m.value, 0)),
            ge
        }
          , S = ({pace: M=0, offset: K=0, emitChange: fe})=>{
            if (u.value <= 1)
                return;
            const {active: ge} = a
              , te = p(M)
              , ue = y(te, K);
            if (e.loop) {
                if (s[0] && ue !== m.value) {
                    const P = ue < m.value;
                    s[0].setOffset(P ? C.value : 0)
                }
                if (s[u.value - 1] && ue !== 0) {
                    const P = ue > 0;
                    s[u.value - 1].setOffset(P ? -C.value : 0)
                }
            }
            a.active = te,
            a.offset = ue,
            fe && te !== ge && t("change", b.value)
        }
          , _ = ()=>{
            a.swiping = !0,
            a.active <= -1 ? S({
                pace: u.value
            }) : a.active >= u.value && S({
                pace: -u.value
            })
        }
          , O = ()=>{
            _(),
            l.reset(),
            Jn(()=>{
                a.swiping = !1,
                S({
                    pace: -1,
                    emitChange: !0
                })
            }
            )
        }
          , x = ()=>{
            _(),
            l.reset(),
            Jn(()=>{
                a.swiping = !1,
                S({
                    pace: 1,
                    emitChange: !0
                })
            }
            )
        }
        ;
        let B;
        const $ = ()=>clearTimeout(B)
          , k = ()=>{
            $(),
            +e.autoplay > 0 && u.value > 1 && (B = setTimeout(()=>{
                x(),
                k()
            }
            , +e.autoplay))
        }
          , E = (M=+e.initialSwipe)=>{
            if (!o.value)
                return;
            const K = ()=>{
                var fe, ge;
                if (!To(o)) {
                    const te = {
                        width: o.value.offsetWidth,
                        height: o.value.offsetHeight
                    };
                    a.rect = te,
                    a.width = +((fe = e.width) != null ? fe : te.width),
                    a.height = +((ge = e.height) != null ? ge : te.height)
                }
                u.value && (M = Math.min(u.value - 1, M),
                M === -1 && (M = u.value - 1)),
                a.active = M,
                a.swiping = !0,
                a.offset = y(M),
                s.forEach(te=>{
                    te.setOffset(0)
                }
                ),
                k()
            }
            ;
            To(o) ? Te().then(K) : K()
        }
          , I = ()=>E(a.active);
        let Q;
        const ne = M=>{
            !e.touchable || M.touches.length > 1 || (l.start(M),
            i = !1,
            Q = Date.now(),
            $(),
            _())
        }
          , N = M=>{
            e.touchable && a.swiping && (l.move(M),
            v.value && (!e.loop && (a.active === 0 && h.value > 0 || a.active === u.value - 1 && h.value < 0) || (Ue(M, e.stopPropagation),
            S({
                offset: h.value
            }),
            i || (t("dragStart", {
                index: b.value
            }),
            i = !0))))
        }
          , Z = ()=>{
            if (!e.touchable || !a.swiping)
                return;
            const M = Date.now() - Q
              , K = h.value / M;
            if ((Math.abs(K) > .25 || Math.abs(h.value) > f.value / 2) && v.value) {
                const ge = e.vertical ? l.offsetY.value : l.offsetX.value;
                let te = 0;
                e.loop ? te = ge > 0 ? h.value > 0 ? -1 : 1 : 0 : te = -Math[h.value > 0 ? "ceil" : "floor"](h.value / f.value),
                S({
                    pace: te,
                    emitChange: !0
                })
            } else
                h.value && S({
                    pace: 0
                });
            i = !1,
            a.swiping = !1,
            t("dragEnd", {
                index: b.value
            }),
            k()
        }
          , ie = (M,K={})=>{
            _(),
            l.reset(),
            Jn(()=>{
                let fe;
                e.loop && M === u.value ? fe = a.active === 0 ? 0 : M : fe = M % u.value,
                K.immediate ? Jn(()=>{
                    a.swiping = !1
                }
                ) : a.swiping = !1,
                S({
                    pace: fe - a.active,
                    emitChange: !0
                })
            }
            )
        }
          , Ee = (M,K)=>{
            const fe = K === b.value
              , ge = fe ? {
                backgroundColor: e.indicatorColor
            } : void 0;
            return d("i", {
                style: ge,
                class: fa("indicator", {
                    active: fe
                })
            }, null)
        }
          , $e = ()=>{
            if (n.indicator)
                return n.indicator({
                    active: b.value,
                    total: u.value
                });
            if (e.showIndicators && u.value > 1)
                return d("div", {
                    class: fa("indicators", {
                        vertical: e.vertical
                    })
                }, [Array(u.value).fill("").map(Ee)])
        }
        ;
        return Oe({
            prev: O,
            next: x,
            state: a,
            resize: I,
            swipeTo: ie
        }),
        c({
            size: f,
            props: e,
            count: u,
            activeIndicator: b
        }),
        oe(()=>e.initialSwipe, M=>E(+M)),
        oe(u, ()=>E(a.active)),
        oe(()=>e.autoplay, k),
        oe([Qt, Ht, ()=>e.width, ()=>e.height], I),
        oe(Qv(), M=>{
            M === "visible" ? k() : $()
        }
        ),
        tt(E),
        mn(()=>E(a.active)),
        ci(()=>E(a.active)),
        vn($),
        bn($),
        et("touchmove", N, {
            target: r
        }),
        ()=>{
            var M;
            return d("div", {
                ref: o,
                class: fa()
            }, [d("div", {
                ref: r,
                style: g.value,
                class: fa("track", {
                    vertical: e.vertical
                }),
                onTouchstartPassive: ne,
                onTouchend: Z,
                onTouchcancel: Z
            }, [(M = n.default) == null ? void 0 : M.call(n)]), $e()])
        }
    }
});
const ms = G(_y)
  , [ky,zc] = W("tabs");
var Ty = j({
    name: ky,
    props: {
        count: dt(Number),
        inited: Boolean,
        animated: Boolean,
        duration: dt(q),
        swipeable: Boolean,
        lazyRender: Boolean,
        currentIndex: dt(Number)
    },
    emits: ["change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = l=>t("change", l)
          , a = ()=>{
            var l;
            const s = (l = n.default) == null ? void 0 : l.call(n);
            return e.animated || e.swipeable ? d(ms, {
                ref: o,
                loop: !1,
                class: zc("track"),
                duration: +e.duration * 1e3,
                touchable: e.swipeable,
                lazyRender: e.lazyRender,
                showIndicators: !1,
                onChange: r
            }, {
                default: ()=>[s]
            }) : s
        }
          , i = l=>{
            const s = o.value;
            s && s.state.active !== l && s.swipeTo(l, {
                immediate: !e.inited
            })
        }
        ;
        return oe(()=>e.currentIndex, i),
        tt(()=>{
            i(e.currentIndex)
        }
        ),
        Oe({
            swipeRef: o
        }),
        ()=>d("div", {
            class: zc("content", {
                animated: e.animated || e.swipeable
            })
        }, [a()])
    }
});
const [jf,ha] = W("tabs")
  , Py = {
    type: X("line"),
    color: String,
    border: Boolean,
    sticky: Boolean,
    shrink: Boolean,
    active: ce(0),
    duration: ce(.3),
    animated: Boolean,
    ellipsis: z,
    swipeable: Boolean,
    scrollspy: Boolean,
    offsetTop: ce(0),
    background: String,
    lazyRender: z,
    showHeader: z,
    lineWidth: q,
    lineHeight: q,
    beforeChange: Function,
    swipeThreshold: ce(5),
    titleActiveColor: String,
    titleInactiveColor: String
}
  , Uf = Symbol(jf);
var Ey = j({
    name: jf,
    props: Py,
    emits: ["change", "scroll", "rendered", "clickTab", "update:active"],
    setup(e, {emit: t, slots: n}) {
        let o, r, a, i, l;
        const s = R()
          , c = R()
          , u = R()
          , f = R()
          , h = fr()
          , m = ur(s)
          , [w,C] = ea()
          , {children: b, linkChildren: v} = wt(Uf)
          , g = Ke({
            inited: !1,
            position: "",
            lineStyle: {},
            currentIndex: -1
        })
          , p = D(()=>b.length > +e.swipeThreshold || !e.ellipsis || e.shrink)
          , y = D(()=>({
            borderColor: e.color,
            background: e.background
        }))
          , S = (te,ue)=>{
            var P;
            return (P = te.name) != null ? P : ue
        }
          , _ = D(()=>{
            const te = b[g.currentIndex];
            if (te)
                return S(te, g.currentIndex)
        }
        )
          , O = D(()=>cs(e.offsetTop))
          , x = D(()=>e.sticky ? O.value + o : 0)
          , B = te=>{
            const ue = c.value
              , P = w.value;
            if (!p.value || !ue || !P || !P[g.currentIndex])
                return;
            const F = P[g.currentIndex].$el
              , V = F.offsetLeft - (ue.offsetWidth - F.offsetWidth) / 2;
            i && i(),
            i = vy(ue, V, te ? 0 : +e.duration)
        }
          , $ = ()=>{
            const te = g.inited;
            Te(()=>{
                const ue = w.value;
                if (!ue || !ue[g.currentIndex] || e.type !== "line" || To(s.value))
                    return;
                const P = ue[g.currentIndex].$el
                  , {lineWidth: F, lineHeight: V} = e
                  , J = P.offsetLeft + P.offsetWidth / 2
                  , me = {
                    width: Se(F),
                    backgroundColor: e.color,
                    transform: `translateX(${J}px) translateX(-50%)`
                };
                if (te && (me.transitionDuration = `${e.duration}s`),
                De(V)) {
                    const xe = Se(V);
                    me.height = xe,
                    me.borderRadius = xe
                }
                g.lineStyle = me
            }
            )
        }
          , k = te=>{
            const ue = te < g.currentIndex ? -1 : 1;
            for (; te >= 0 && te < b.length; ) {
                if (!b[te].disabled)
                    return te;
                te += ue
            }
        }
          , E = (te,ue)=>{
            const P = k(te);
            if (!De(P))
                return;
            const F = b[P]
              , V = S(F, P)
              , J = g.currentIndex !== null;
            g.currentIndex !== P && (g.currentIndex = P,
            ue || B(),
            $()),
            V !== e.active && (t("update:active", V),
            J && t("change", V, F.title)),
            a && !e.scrollspy && Yr(Math.ceil(Ec(s.value) - O.value))
        }
          , I = (te,ue)=>{
            const P = b.find((V,J)=>S(V, J) === te)
              , F = P ? b.indexOf(P) : 0;
            E(F, ue)
        }
          , Q = (te=!1)=>{
            if (e.scrollspy) {
                const ue = b[g.currentIndex].$el;
                if (ue && m.value) {
                    const P = Ec(ue, m.value) - x.value;
                    r = !0,
                    l && l(),
                    l = by(m.value, P, te ? 0 : +e.duration, ()=>{
                        r = !1
                    }
                    )
                }
            }
        }
          , ne = (te,ue,P)=>{
            const {title: F, disabled: V} = b[ue]
              , J = S(b[ue], ue);
            V || (co(e.beforeChange, {
                args: [J],
                done: ()=>{
                    E(ue),
                    Q()
                }
            }),
            Ef(te)),
            t("clickTab", {
                name: J,
                title: F,
                event: P,
                disabled: V
            })
        }
          , N = te=>{
            a = te.isFixed,
            t("scroll", te)
        }
          , Z = te=>{
            Te(()=>{
                I(te),
                Q(!0)
            }
            )
        }
          , ie = ()=>{
            for (let te = 0; te < b.length; te++) {
                const {top: ue} = Ve(b[te].$el);
                if (ue > x.value)
                    return te === 0 ? 0 : te - 1
            }
            return b.length - 1
        }
          , Ee = ()=>{
            if (e.scrollspy && !r) {
                const te = ie();
                E(te)
            }
        }
          , $e = ()=>{
            if (e.type === "line" && b.length)
                return d("div", {
                    class: ha("line"),
                    style: g.lineStyle
                }, null)
        }
          , M = ()=>{
            var te, ue, P;
            const {type: F, border: V, sticky: J} = e
              , me = [d("div", {
                ref: J ? void 0 : u,
                class: [ha("wrap"), {
                    [si]: F === "line" && V
                }]
            }, [d("div", {
                ref: c,
                role: "tablist",
                class: ha("nav", [F, {
                    shrink: e.shrink,
                    complete: p.value
                }]),
                style: y.value,
                "aria-orientation": "horizontal"
            }, [(te = n["nav-left"]) == null ? void 0 : te.call(n), b.map(xe=>xe.renderTitle(ne)), $e(), (ue = n["nav-right"]) == null ? void 0 : ue.call(n)])]), (P = n["nav-bottom"]) == null ? void 0 : P.call(n)];
            return J ? d("div", {
                ref: u
            }, [me]) : me
        }
          , K = ()=>{
            $(),
            Te(()=>{
                var te, ue;
                B(!0),
                (ue = (te = f.value) == null ? void 0 : te.swipeRef.value) == null || ue.resize()
            }
            )
        }
        ;
        oe(()=>[e.color, e.duration, e.lineWidth, e.lineHeight], $),
        oe(Qt, K),
        oe(()=>e.active, te=>{
            te !== _.value && I(te)
        }
        ),
        oe(()=>b.length, ()=>{
            g.inited && (I(e.active),
            $(),
            Te(()=>{
                B(!0)
            }
            ))
        }
        );
        const fe = ()=>{
            I(e.active, !0),
            Te(()=>{
                g.inited = !0,
                u.value && (o = Ve(u.value).height),
                B(!0)
            }
            )
        }
          , ge = (te,ue)=>t("rendered", te, ue);
        return Oe({
            resize: K,
            scrollTo: Z
        }),
        mn($),
        ci($),
        cr(fe),
        Vf(s, $),
        et("scroll", Ee, {
            target: m,
            passive: !0
        }),
        v({
            id: h,
            props: e,
            setLine: $,
            scrollable: p,
            onRendered: ge,
            currentName: _,
            setTitleRefs: C,
            scrollIntoView: B
        }),
        ()=>d("div", {
            ref: s,
            class: ha([e.type])
        }, [e.showHeader ? e.sticky ? d(Nf, {
            container: s.value,
            offsetTop: O.value,
            onScroll: N
        }, {
            default: ()=>[M()]
        }) : M() : null, d(Ty, {
            ref: f,
            count: b.length,
            inited: g.inited,
            animated: e.animated,
            duration: e.duration,
            swipeable: e.swipeable,
            lazyRender: e.lazyRender,
            currentIndex: g.currentIndex,
            onChange: E
        }, {
            default: ()=>{
                var te;
                return [(te = n.default) == null ? void 0 : te.call(n)]
            }
        })])
    }
});
const Wf = Symbol()
  , Ay = ()=>kt(Wf, null)
  , [Oy,jc] = W("tab")
  , By = j({
    name: Oy,
    props: {
        id: String,
        dot: Boolean,
        type: String,
        color: String,
        title: String,
        badge: q,
        shrink: Boolean,
        isActive: Boolean,
        disabled: Boolean,
        controls: String,
        scrollable: Boolean,
        activeColor: String,
        inactiveColor: String,
        showZeroBadge: z
    },
    setup(e, {slots: t}) {
        const n = D(()=>{
            const r = {}
              , {type: a, color: i, disabled: l, isActive: s, activeColor: c, inactiveColor: u} = e;
            i && a === "card" && (r.borderColor = i,
            l || (s ? r.backgroundColor = i : r.color = i));
            const h = s ? c : u;
            return h && (r.color = h),
            r
        }
        )
          , o = ()=>{
            const r = d("span", {
                class: jc("text", {
                    ellipsis: !e.scrollable
                })
            }, [t.title ? t.title() : e.title]);
            return e.dot || De(e.badge) && e.badge !== "" ? d(Ao, {
                dot: e.dot,
                content: e.badge,
                showZero: e.showZeroBadge
            }, {
                default: ()=>[r]
            }) : r
        }
        ;
        return ()=>d("div", {
            id: e.id,
            role: "tab",
            class: [jc([e.type, {
                grow: e.scrollable && !e.shrink,
                shrink: e.shrink,
                active: e.isActive,
                disabled: e.disabled
            }])],
            style: n.value,
            tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
            "aria-selected": e.isActive,
            "aria-disabled": e.disabled || void 0,
            "aria-controls": e.controls
        }, [o()])
    }
})
  , [$y,Dy] = W("swipe-item");
var Iy = j({
    name: $y,
    setup(e, {slots: t}) {
        let n;
        const o = Ke({
            offset: 0,
            inited: !1,
            mounted: !1
        })
          , {parent: r, index: a} = gt(zf);
        if (!r)
            return;
        const i = D(()=>{
            const c = {}
              , {vertical: u} = r.props;
            return r.size.value && (c[u ? "height" : "width"] = `${r.size.value}px`),
            o.offset && (c.transform = `translate${u ? "Y" : "X"}(${o.offset}px)`),
            c
        }
        )
          , l = D(()=>{
            const {loop: c, lazyRender: u} = r.props;
            if (!u || n)
                return !0;
            if (!o.mounted)
                return !1;
            const f = r.activeIndicator.value
              , h = r.count.value - 1
              , m = f === 0 && c ? h : f - 1
              , w = f === h && c ? 0 : f + 1;
            return n = a.value === f || a.value === m || a.value === w,
            n
        }
        )
          , s = c=>{
            o.offset = c
        }
        ;
        return tt(()=>{
            Te(()=>{
                o.mounted = !0
            }
            )
        }
        ),
        Oe({
            setOffset: s
        }),
        ()=>{
            var c;
            return d("div", {
                class: Dy(),
                style: i.value
            }, [l.value ? (c = t.default) == null ? void 0 : c.call(t) : null])
        }
    }
});
const vs = G(Iy)
  , [Ry,Vi] = W("tab")
  , Ly = ve({}, uo, {
    dot: Boolean,
    name: q,
    badge: q,
    title: String,
    disabled: Boolean,
    titleClass: Xe,
    titleStyle: [String, Object],
    showZeroBadge: z
});
var My = j({
    name: Ry,
    props: Ly,
    setup(e, {slots: t}) {
        const n = fr()
          , o = R(!1)
          , r = en()
          , {parent: a, index: i} = gt(Uf);
        if (!a)
            return;
        const l = ()=>{
            var w;
            return (w = e.name) != null ? w : i.value
        }
          , s = ()=>{
            o.value = !0,
            a.props.lazyRender && Te(()=>{
                a.onRendered(l(), e.title)
            }
            )
        }
          , c = D(()=>{
            const w = l() === a.currentName.value;
            return w && !o.value && s(),
            w
        }
        )
          , u = R("")
          , f = R("");
        ar(()=>{
            const {titleClass: w, titleStyle: C} = e;
            u.value = w ? Kt(w) : "",
            f.value = C && typeof C != "string" ? kg(Pt(C)) : C
        }
        );
        const h = w=>d(By, Ae({
            key: n,
            id: `${a.id}-${i.value}`,
            ref: a.setTitleRefs(i.value),
            style: f.value,
            class: u.value,
            isActive: c.value,
            controls: n,
            scrollable: a.scrollable.value,
            activeColor: a.props.titleActiveColor,
            inactiveColor: a.props.titleInactiveColor,
            onClick: C=>w(r.proxy, i.value, C)
        }, Le(a.props, ["type", "color", "shrink"]), Le(e, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
            title: t.title
        })
          , m = R(!c.value);
        return oe(c, w=>{
            w ? m.value = !1 : Jn(()=>{
                m.value = !0
            }
            )
        }
        ),
        oe(()=>e.title, ()=>{
            a.setLine(),
            a.scrollIntoView()
        }
        ),
        kn(Wf, c),
        Oe({
            id: n,
            renderTitle: h
        }),
        ()=>{
            var w;
            const C = `${a.id}-${i.value}`
              , {animated: b, swipeable: v, scrollspy: g, lazyRender: p} = a.props;
            if (!t.default && !b)
                return;
            const y = g || c.value;
            if (b || v)
                return d(vs, {
                    id: n,
                    role: "tabpanel",
                    class: Vi("panel-wrapper", {
                        inactive: m.value
                    }),
                    tabindex: c.value ? 0 : -1,
                    "aria-hidden": !c.value,
                    "aria-labelledby": C
                }, {
                    default: ()=>{
                        var O;
                        return [d("div", {
                            class: Vi("panel")
                        }, [(O = t.default) == null ? void 0 : O.call(t)])]
                    }
                });
            const _ = o.value || g || !p ? (w = t.default) == null ? void 0 : w.call(t) : null;
            return st(d("div", {
                id: n,
                role: "tabpanel",
                class: Vi("panel"),
                tabindex: y ? 0 : -1,
                "aria-labelledby": C
            }, [_]), [[ft, y]])
        }
    }
});
const qr = G(My)
  , fi = G(Ey)
  , [Yf,Ni] = W("picker-group")
  , qf = Symbol(Yf)
  , Fy = ve({
    tabs: Ye(),
    activeTab: ce(0),
    nextStepText: String,
    showToolbar: z
}, di);
var Vy = j({
    name: Yf,
    props: Fy,
    emits: ["confirm", "cancel", "update:activeTab"],
    setup(e, {emit: t, slots: n}) {
        const o = gs(()=>e.activeTab, c=>t("update:activeTab", c))
          , {children: r, linkChildren: a} = wt(qf);
        a();
        const i = ()=>+o.value < e.tabs.length - 1 && e.nextStepText
          , l = ()=>{
            i() ? o.value = +o.value + 1 : t("confirm", r.map(c=>c.confirm()))
        }
          , s = ()=>t("cancel");
        return ()=>{
            var c, u;
            let f = (u = (c = n.default) == null ? void 0 : c.call(n)) == null ? void 0 : u.filter(m=>m.type !== _t).map(m=>m.type === Fe ? m.children : m);
            f && (f = hg(f));
            const h = i() ? e.nextStepText : e.confirmButtonText;
            return d("div", {
                class: Ni()
            }, [e.showToolbar ? d(Ff, {
                title: e.title,
                cancelButtonText: e.cancelButtonText,
                confirmButtonText: h,
                onConfirm: l,
                onCancel: s
            }, Le(n, Mf)) : null, d(fi, {
                active: o.value,
                "onUpdate:active": m=>o.value = m,
                class: Ni("tabs"),
                shrink: !0,
                animated: !0,
                lazyRender: !1
            }, {
                default: ()=>[e.tabs.map((m,w)=>d(qr, {
                    title: m,
                    titleClass: Ni("tab-title")
                }, {
                    default: ()=>[f == null ? void 0 : f[w]]
                }))]
            })])
        }
    }
});
const hi = ve({
    loading: Boolean,
    readonly: Boolean,
    allowHtml: Boolean,
    optionHeight: ce(44),
    showToolbar: z,
    swipeDuration: ce(1e3),
    visibleOptionNum: ce(6)
}, di)
  , Ny = ve({}, hi, {
    columns: Ye(),
    modelValue: Ye(),
    toolbarPosition: X("top"),
    columnsFieldNames: Object
});
var Hy = j({
    name: ly,
    props: Ny,
    emits: ["confirm", "cancel", "change", "scrollInto", "clickOption", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = R(e.modelValue.slice(0))
          , {parent: a} = gt(qf)
          , {children: i, linkChildren: l} = wt(Lf);
        l();
        const s = D(()=>dy(e.columnsFieldNames))
          , c = D(()=>cs(e.optionHeight))
          , u = D(()=>sy(e.columns, s.value))
          , f = D(()=>{
            const {columns: k} = e;
            switch (u.value) {
            case "multiple":
                return k;
            case "cascade":
                return cy(k, s.value, r);
            default:
                return [k]
            }
        }
        )
          , h = D(()=>f.value.some(k=>k.length))
          , m = D(()=>f.value.map((k,E)=>_l(k, r.value[E], s.value)))
          , w = D(()=>f.value.map((k,E)=>k.findIndex(I=>I[s.value.value] === r.value[E])))
          , C = (k,E)=>{
            if (r.value[k] !== E) {
                const I = r.value.slice(0);
                I[k] = E,
                r.value = I
            }
        }
          , b = ()=>({
            selectedValues: r.value.slice(0),
            selectedOptions: m.value,
            selectedIndexes: w.value
        })
          , v = (k,E)=>{
            C(E, k),
            u.value === "cascade" && r.value.forEach((I,Q)=>{
                const ne = f.value[Q];
                Vc(ne, I, s.value) || C(Q, ne.length ? ne[0][s.value.value] : void 0)
            }
            ),
            Te(()=>{
                t("change", ve({
                    columnIndex: E
                }, b()))
            }
            )
        }
          , g = (k,E)=>{
            const I = {
                columnIndex: E,
                currentOption: k
            };
            t("clickOption", ve(b(), I)),
            t("scrollInto", I)
        }
          , p = ()=>{
            i.forEach(E=>E.stopMomentum());
            const k = b();
            return Te(()=>{
                t("confirm", k)
            }
            ),
            k
        }
          , y = ()=>t("cancel", b())
          , S = ()=>f.value.map((k,E)=>d(hy, {
            value: r.value[E],
            fields: s.value,
            options: k,
            readonly: e.readonly,
            allowHtml: e.allowHtml,
            optionHeight: c.value,
            swipeDuration: e.swipeDuration,
            visibleOptionNum: e.visibleOptionNum,
            onChange: I=>v(I, E),
            onClickOption: I=>g(I, E),
            onScrollInto: I=>{
                t("scrollInto", {
                    currentOption: I,
                    columnIndex: E
                })
            }
        }, {
            option: n.option
        }))
          , _ = k=>{
            if (h.value) {
                const E = {
                    height: `${c.value}px`
                }
                  , I = {
                    backgroundSize: `100% ${(k - c.value) / 2}px`
                };
                return [d("div", {
                    class: xn("mask"),
                    style: I
                }, null), d("div", {
                    class: [gb, xn("frame")],
                    style: E
                }, null)]
            }
        }
          , O = ()=>{
            const k = c.value * +e.visibleOptionNum
              , E = {
                height: `${k}px`
            };
            return d("div", {
                ref: o,
                class: xn("columns"),
                style: E
            }, [S(), _(k)])
        }
          , x = ()=>{
            if (e.showToolbar && !a)
                return d(Ff, Ae(Le(e, my), {
                    onConfirm: p,
                    onCancel: y
                }), Le(n, Mf))
        }
        ;
        oe(f, k=>{
            k.forEach((E,I)=>{
                E.length && !Vc(E, r.value[I], s.value) && C(I, If(E)[s.value.value])
            }
            )
        }
        , {
            immediate: !0
        });
        let B;
        return oe(()=>e.modelValue, k=>{
            !fn(k, r.value) && !fn(k, B) && (r.value = k.slice(0),
            B = k.slice(0))
        }
        , {
            deep: !0
        }),
        oe(r, k=>{
            fn(k, e.modelValue) || (B = k.slice(0),
            t("update:modelValue", B))
        }
        , {
            immediate: !0
        }),
        et("touchmove", Ue, {
            target: o
        }),
        Oe({
            confirm: p,
            getSelectedOptions: ()=>m.value
        }),
        ()=>{
            var k, E;
            return d("div", {
                class: xn()
            }, [e.toolbarPosition === "top" ? x() : null, e.loading ? d(tn, {
                class: xn("loading")
            }, null) : null, (k = n["columns-top"]) == null ? void 0 : k.call(n), O(), (E = n["columns-bottom"]) == null ? void 0 : E.call(n), e.toolbarPosition === "bottom" ? x() : null])
        }
    }
});
const Xo = "000000"
  , zy = ["title", "cancel", "confirm", "toolbar", "columns-top", "columns-bottom"]
  , Kf = ["title", "loading", "readonly", "optionHeight", "swipeDuration", "visibleOptionNum", "cancelButtonText", "confirmButtonText"]
  , Nn = (e="",t=Xo,n=void 0)=>({
    text: e,
    value: t,
    children: n
});
function jy({areaList: e, columnsNum: t, columnsPlaceholder: n}) {
    const {city_list: o={}, county_list: r={}, province_list: a={}} = e
      , i = +t > 1
      , l = +t > 2
      , s = ()=>{
        if (i)
            return n.length > 1 ? [Nn(n[1], Xo, l ? [] : void 0)] : []
    }
      , c = new Map;
    Object.keys(a).forEach(h=>{
        c.set(h.slice(0, 2), Nn(a[h], h, s()))
    }
    );
    const u = new Map;
    if (i) {
        const h = ()=>{
            if (l)
                return n.length > 2 ? [Nn(n[2])] : []
        }
        ;
        Object.keys(o).forEach(m=>{
            const w = Nn(o[m], m, h());
            u.set(m.slice(0, 4), w);
            const C = c.get(m.slice(0, 2));
            C && C.children.push(w)
        }
        )
    }
    l && Object.keys(r).forEach(h=>{
        const m = u.get(h.slice(0, 4));
        m && m.children.push(Nn(r[h], h))
    }
    );
    const f = Array.from(c.values());
    if (n.length) {
        const h = l ? [Nn(n[2])] : void 0
          , m = i ? [Nn(n[1], Xo, h)] : void 0;
        f.unshift(Nn(n[0], Xo, m))
    }
    return f
}
const gi = G(Hy)
  , [Uy,Wy] = W("area")
  , Yy = ve({}, Le(hi, Kf), {
    modelValue: String,
    columnsNum: ce(3),
    columnsPlaceholder: Ye(),
    areaList: {
        type: Object,
        default: ()=>({})
    }
});
var qy = j({
    name: Uy,
    props: Yy,
    emits: ["change", "confirm", "cancel", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R([])
          , r = R()
          , a = D(()=>jy(e))
          , i = (...c)=>t("change", ...c)
          , l = (...c)=>t("cancel", ...c)
          , s = (...c)=>t("confirm", ...c);
        return oe(o, c=>{
            const u = c.length ? c[c.length - 1] : "";
            u && u !== e.modelValue && t("update:modelValue", u)
        }
        , {
            deep: !0
        }),
        oe(()=>e.modelValue, c=>{
            if (c) {
                const u = o.value.length ? o.value[o.value.length - 1] : "";
                c !== u && (o.value = [`${c.slice(0, 2)}0000`, `${c.slice(0, 4)}00`, c].slice(0, +e.columnsNum))
            } else
                o.value = []
        }
        , {
            immediate: !0
        }),
        Oe({
            confirm: ()=>{
                var c;
                return (c = r.value) == null ? void 0 : c.confirm()
            }
            ,
            getSelectedOptions: ()=>{
                var c;
                return ((c = r.value) == null ? void 0 : c.getSelectedOptions()) || []
            }
        }),
        ()=>d(gi, Ae({
            ref: r,
            modelValue: o.value,
            "onUpdate:modelValue": c=>o.value = c,
            class: Wy(),
            columns: a.value,
            onChange: i,
            onCancel: l,
            onConfirm: s
        }, Le(e, Kf)), Le(n, zy))
    }
});
const Gf = G(qy)
  , [Ky,Do] = W("cell")
  , mi = {
    tag: X("div"),
    icon: String,
    size: String,
    title: q,
    value: q,
    label: q,
    center: Boolean,
    isLink: Boolean,
    border: z,
    iconPrefix: String,
    valueClass: Xe,
    labelClass: Xe,
    titleClass: Xe,
    titleStyle: null,
    arrowDirection: String,
    required: {
        type: [Boolean, String],
        default: null
    },
    clickable: {
        type: Boolean,
        default: null
    }
}
  , Gy = ve({}, mi, uo);
var Xy = j({
    name: Ky,
    props: Gy,
    setup(e, {slots: t}) {
        const n = Eo()
          , o = ()=>{
            if (t.label || De(e.label))
                return d("div", {
                    class: [Do("label"), e.labelClass]
                }, [t.label ? t.label() : e.label])
        }
          , r = ()=>{
            var s;
            if (t.title || De(e.title)) {
                const c = (s = t.title) == null ? void 0 : s.call(t);
                return Array.isArray(c) && c.length === 0 ? void 0 : d("div", {
                    class: [Do("title"), e.titleClass],
                    style: e.titleStyle
                }, [c || d("span", null, [e.title]), o()])
            }
        }
          , a = ()=>{
            const s = t.value || t.default;
            if (s || De(e.value))
                return d("div", {
                    class: [Do("value"), e.valueClass]
                }, [s ? s() : d("span", null, [e.value])])
        }
          , i = ()=>{
            if (t.icon)
                return t.icon();
            if (e.icon)
                return d(Ce, {
                    name: e.icon,
                    class: Do("left-icon"),
                    classPrefix: e.iconPrefix
                }, null)
        }
          , l = ()=>{
            if (t["right-icon"])
                return t["right-icon"]();
            if (e.isLink) {
                const s = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
                return d(Ce, {
                    name: s,
                    class: Do("right-icon")
                }, null)
            }
        }
        ;
        return ()=>{
            var s;
            const {tag: c, size: u, center: f, border: h, isLink: m, required: w} = e
              , C = (s = e.clickable) != null ? s : m
              , b = {
                center: f,
                required: !!w,
                clickable: C,
                borderless: !h
            };
            return u && (b[u] = !!u),
            d(c, {
                class: Do(b),
                role: C ? "button" : void 0,
                tabindex: C ? 0 : void 0,
                onClick: n
            }, {
                default: ()=>{
                    var v;
                    return [i(), r(), a(), l(), (v = t.extra) == null ? void 0 : v.call(t)]
                }
            })
        }
    }
});
const nn = G(Xy)
  , [Qy,Zy] = W("form")
  , Jy = {
    colon: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    required: [Boolean, String],
    showError: Boolean,
    labelWidth: q,
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    submitOnEnter: z,
    showErrorMessage: z,
    errorMessageAlign: String,
    validateTrigger: {
        type: [String, Array],
        default: "onBlur"
    }
};
var ep = j({
    name: Qy,
    props: Jy,
    emits: ["submit", "failed"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: r} = wt(Cf)
          , a = b=>b ? o.filter(v=>b.includes(v.name)) : o
          , i = b=>new Promise((v,g)=>{
            const p = [];
            a(b).reduce((S,_)=>S.then(()=>{
                if (!p.length)
                    return _.validate().then(O=>{
                        O && p.push(O)
                    }
                    )
            }
            ), Promise.resolve()).then(()=>{
                p.length ? g(p) : v()
            }
            )
        }
        )
          , l = b=>new Promise((v,g)=>{
            const p = a(b);
            Promise.all(p.map(y=>y.validate())).then(y=>{
                y = y.filter(Boolean),
                y.length ? g(y) : v()
            }
            )
        }
        )
          , s = b=>{
            const v = o.find(g=>g.name === b);
            return v ? new Promise((g,p)=>{
                v.validate().then(y=>{
                    y ? p(y) : g()
                }
                )
            }
            ) : Promise.reject()
        }
          , c = b=>typeof b == "string" ? s(b) : e.validateFirst ? i(b) : l(b)
          , u = b=>{
            typeof b == "string" && (b = [b]),
            a(b).forEach(g=>{
                g.resetValidation()
            }
            )
        }
          , f = ()=>o.reduce((b,v)=>(b[v.name] = v.getValidationStatus(),
        b), {})
          , h = (b,v)=>{
            o.some(g=>g.name === b ? (g.$el.scrollIntoView(v),
            !0) : !1)
        }
          , m = ()=>o.reduce((b,v)=>(v.name !== void 0 && (b[v.name] = v.formValue.value),
        b), {})
          , w = ()=>{
            const b = m();
            c().then(()=>t("submit", b)).catch(v=>{
                t("failed", {
                    values: b,
                    errors: v
                }),
                e.scrollToError && v[0].name && h(v[0].name)
            }
            )
        }
          , C = b=>{
            Ue(b),
            w()
        }
        ;
        return r({
            props: e
        }),
        Oe({
            submit: w,
            validate: c,
            getValues: m,
            scrollToField: h,
            resetValidation: u,
            getValidationStatus: f
        }),
        ()=>{
            var b;
            return d("form", {
                class: Zy(),
                onSubmit: C
            }, [(b = n.default) == null ? void 0 : b.call(n)])
        }
    }
});
const bs = G(ep);
function Xf(e) {
    return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e
}
function tp(e, t) {
    if (Xf(e)) {
        if (t.required)
            return !1;
        if (t.validateEmpty === !1)
            return !0
    }
    return !(t.pattern && !t.pattern.test(String(e)))
}
function np(e, t) {
    return new Promise(n=>{
        const o = t.validator(e, t);
        if (Nl(o)) {
            o.then(n);
            return
        }
        n(o)
    }
    )
}
function Uc(e, t) {
    const {message: n} = t;
    return er(n) ? n(e, t) : n || ""
}
function op({target: e}) {
    e.composing = !0
}
function Wc({target: e}) {
    e.composing && (e.composing = !1,
    e.dispatchEvent(new Event("input")))
}
function rp(e, t) {
    const n = _o();
    e.style.height = "auto";
    let o = e.scrollHeight;
    if (hn(t)) {
        const {maxHeight: r, minHeight: a} = t;
        r !== void 0 && (o = Math.min(o, r)),
        a !== void 0 && (o = Math.max(o, a))
    }
    o && (e.style.height = `${o}px`,
    Yr(n))
}
function ap(e) {
    return e === "number" ? {
        type: "text",
        inputmode: "decimal"
    } : e === "digit" ? {
        type: "tel",
        inputmode: "numeric"
    } : {
        type: e
    }
}
function yn(e) {
    return [...e].length
}
function Hi(e, t) {
    return [...e].slice(0, t).join("")
}
const [ip,Ft] = W("field")
  , ys = {
    id: String,
    name: String,
    leftIcon: String,
    rightIcon: String,
    autofocus: Boolean,
    clearable: Boolean,
    maxlength: q,
    formatter: Function,
    clearIcon: X("clear"),
    modelValue: ce(""),
    inputAlign: String,
    placeholder: String,
    autocomplete: String,
    autocapitalize: String,
    autocorrect: String,
    errorMessage: String,
    enterkeyhint: String,
    clearTrigger: X("focus"),
    formatTrigger: X("onChange"),
    spellcheck: {
        type: Boolean,
        default: null
    },
    error: {
        type: Boolean,
        default: null
    },
    disabled: {
        type: Boolean,
        default: null
    },
    readonly: {
        type: Boolean,
        default: null
    }
}
  , lp = ve({}, mi, ys, {
    rows: q,
    type: X("text"),
    rules: Array,
    autosize: [Boolean, Object],
    labelWidth: q,
    labelClass: Xe,
    labelAlign: String,
    showWordLimit: Boolean,
    errorMessageAlign: String,
    colon: {
        type: Boolean,
        default: null
    }
});
var sp = j({
    name: ip,
    props: lp,
    emits: ["blur", "focus", "clear", "keypress", "clickInput", "endValidate", "startValidate", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = fr()
          , r = Ke({
            status: "unvalidated",
            focused: !1,
            validateMessage: ""
        })
          , a = R()
          , i = R()
          , l = R()
          , {parent: s} = gt(Cf)
          , c = ()=>{
            var P;
            return String((P = e.modelValue) != null ? P : "")
        }
          , u = P=>{
            if (De(e[P]))
                return e[P];
            if (s && De(s.props[P]))
                return s.props[P]
        }
          , f = D(()=>{
            const P = u("readonly");
            if (e.clearable && !P) {
                const F = c() !== ""
                  , V = e.clearTrigger === "always" || e.clearTrigger === "focus" && r.focused;
                return F && V
            }
            return !1
        }
        )
          , h = D(()=>l.value && n.input ? l.value() : e.modelValue)
          , m = D(()=>{
            var P;
            const F = u("required");
            return F === "auto" ? (P = e.rules) == null ? void 0 : P.some(V=>V.required) : F
        }
        )
          , w = P=>P.reduce((F,V)=>F.then(()=>{
            if (r.status === "failed")
                return;
            let {value: J} = h;
            if (V.formatter && (J = V.formatter(J, V)),
            !tp(J, V)) {
                r.status = "failed",
                r.validateMessage = Uc(J, V);
                return
            }
            if (V.validator)
                return Xf(J) && V.validateEmpty === !1 ? void 0 : np(J, V).then(me=>{
                    me && typeof me == "string" ? (r.status = "failed",
                    r.validateMessage = me) : me === !1 && (r.status = "failed",
                    r.validateMessage = Uc(J, V))
                }
                )
        }
        ), Promise.resolve())
          , C = ()=>{
            r.status = "unvalidated",
            r.validateMessage = ""
        }
          , b = ()=>t("endValidate", {
            status: r.status,
            message: r.validateMessage
        })
          , v = (P=e.rules)=>new Promise(F=>{
            C(),
            P ? (t("startValidate"),
            w(P).then(()=>{
                r.status === "failed" ? (F({
                    name: e.name,
                    message: r.validateMessage
                }),
                b()) : (r.status = "passed",
                F(),
                b())
            }
            )) : F()
        }
        )
          , g = P=>{
            if (s && e.rules) {
                const {validateTrigger: F} = s.props
                  , V = Ra(F).includes(P)
                  , J = e.rules.filter(me=>me.trigger ? Ra(me.trigger).includes(P) : V);
                J.length && v(J)
            }
        }
          , p = P=>{
            var F;
            const {maxlength: V} = e;
            if (De(V) && yn(P) > +V) {
                const J = c();
                if (J && yn(J) === +V)
                    return J;
                const me = (F = a.value) == null ? void 0 : F.selectionEnd;
                if (r.focused && me) {
                    const xe = [...P]
                      , T = xe.length - +V;
                    return xe.splice(me - T, T),
                    xe.join("")
                }
                return Hi(P, +V)
            }
            return P
        }
          , y = (P,F="onChange")=>{
            const V = P;
            P = p(P);
            const J = yn(V) - yn(P);
            if (e.type === "number" || e.type === "digit") {
                const xe = e.type === "number";
                P = Sl(P, xe, xe)
            }
            let me = 0;
            if (e.formatter && F === e.formatTrigger) {
                const {formatter: xe, maxlength: T} = e;
                if (P = xe(P),
                De(T) && yn(P) > +T && (P = Hi(P, +T)),
                a.value && r.focused) {
                    const {selectionEnd: A} = a.value
                      , L = Hi(V, A);
                    me = yn(xe(L)) - yn(L)
                }
            }
            if (a.value && a.value.value !== P)
                if (r.focused) {
                    let {selectionStart: xe, selectionEnd: T} = a.value;
                    if (a.value.value = P,
                    De(xe) && De(T)) {
                        const A = yn(P);
                        J ? (xe -= J,
                        T -= J) : me && (xe += me,
                        T += me),
                        a.value.setSelectionRange(Math.min(xe, A), Math.min(T, A))
                    }
                } else
                    a.value.value = P;
            P !== e.modelValue && t("update:modelValue", P)
        }
          , S = P=>{
            P.target.composing || y(P.target.value)
        }
          , _ = ()=>{
            var P;
            return (P = a.value) == null ? void 0 : P.blur()
        }
          , O = ()=>{
            var P;
            return (P = a.value) == null ? void 0 : P.focus()
        }
          , x = ()=>{
            const P = a.value;
            e.type === "textarea" && e.autosize && P && rp(P, e.autosize)
        }
          , B = P=>{
            r.focused = !0,
            t("focus", P),
            Te(x),
            u("readonly") && _()
        }
          , $ = P=>{
            r.focused = !1,
            y(c(), "onBlur"),
            t("blur", P),
            !u("readonly") && (g("onBlur"),
            Te(x),
            mf())
        }
          , k = P=>t("clickInput", P)
          , E = P=>t("clickLeftIcon", P)
          , I = P=>t("clickRightIcon", P)
          , Q = P=>{
            Ue(P),
            t("update:modelValue", ""),
            t("clear", P)
        }
          , ne = D(()=>{
            if (typeof e.error == "boolean")
                return e.error;
            if (s && s.props.showError && r.status === "failed")
                return !0
        }
        )
          , N = D(()=>{
            const P = u("labelWidth")
              , F = u("labelAlign");
            if (P && F !== "top")
                return {
                    width: Se(P)
                }
        }
        )
          , Z = P=>{
            P.keyCode === 13 && (!(s && s.props.submitOnEnter) && e.type !== "textarea" && Ue(P),
            e.type === "search" && _()),
            t("keypress", P)
        }
          , ie = ()=>e.id || `${o}-input`
          , Ee = ()=>r.status
          , $e = ()=>{
            const P = Ft("control", [u("inputAlign"), {
                error: ne.value,
                custom: !!n.input,
                "min-height": e.type === "textarea" && !e.autosize
            }]);
            if (n.input)
                return d("div", {
                    class: P,
                    onClick: k
                }, [n.input()]);
            const F = {
                id: ie(),
                ref: a,
                name: e.name,
                rows: e.rows !== void 0 ? +e.rows : void 0,
                class: P,
                disabled: u("disabled"),
                readonly: u("readonly"),
                autofocus: e.autofocus,
                placeholder: e.placeholder,
                autocomplete: e.autocomplete,
                autocapitalize: e.autocapitalize,
                autocorrect: e.autocorrect,
                enterkeyhint: e.enterkeyhint,
                spellcheck: e.spellcheck,
                "aria-labelledby": e.label ? `${o}-label` : void 0,
                onBlur: $,
                onFocus: B,
                onInput: S,
                onClick: k,
                onChange: Wc,
                onKeypress: Z,
                onCompositionend: Wc,
                onCompositionstart: op
            };
            return e.type === "textarea" ? d("textarea", F, null) : d("input", Ae(ap(e.type), F), null)
        }
          , M = ()=>{
            const P = n["left-icon"];
            if (e.leftIcon || P)
                return d("div", {
                    class: Ft("left-icon"),
                    onClick: E
                }, [P ? P() : d(Ce, {
                    name: e.leftIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , K = ()=>{
            const P = n["right-icon"];
            if (e.rightIcon || P)
                return d("div", {
                    class: Ft("right-icon"),
                    onClick: I
                }, [P ? P() : d(Ce, {
                    name: e.rightIcon,
                    classPrefix: e.iconPrefix
                }, null)])
        }
          , fe = ()=>{
            if (e.showWordLimit && e.maxlength) {
                const P = yn(c());
                return d("div", {
                    class: Ft("word-limit")
                }, [d("span", {
                    class: Ft("word-num")
                }, [P]), Ie("/"), e.maxlength])
            }
        }
          , ge = ()=>{
            if (s && s.props.showErrorMessage === !1)
                return;
            const P = e.errorMessage || r.validateMessage;
            if (P) {
                const F = n["error-message"]
                  , V = u("errorMessageAlign");
                return d("div", {
                    class: Ft("error-message", V)
                }, [F ? F({
                    message: P
                }) : P])
            }
        }
          , te = ()=>{
            const P = u("labelWidth")
              , F = u("labelAlign")
              , V = u("colon") ? ":" : "";
            if (n.label)
                return [n.label(), V];
            if (e.label)
                return d("label", {
                    id: `${o}-label`,
                    for: n.input ? void 0 : ie(),
                    onClick: J=>{
                        Ue(J),
                        O()
                    }
                    ,
                    style: F === "top" && P ? {
                        width: Se(P)
                    } : void 0
                }, [e.label + V])
        }
          , ue = ()=>[d("div", {
            class: Ft("body")
        }, [$e(), f.value && d(Ce, {
            ref: i,
            name: e.clearIcon,
            class: Ft("clear")
        }, null), K(), n.button && d("div", {
            class: Ft("button")
        }, [n.button()])]), fe(), ge()];
        return Oe({
            blur: _,
            focus: O,
            validate: v,
            formValue: h,
            resetValidation: C,
            getValidationStatus: Ee
        }),
        kn(gf, {
            customValue: l,
            resetValidation: C,
            validateWithTrigger: g
        }),
        oe(()=>e.modelValue, ()=>{
            y(c()),
            C(),
            g("onChange"),
            Te(x)
        }
        ),
        tt(()=>{
            y(c(), e.formatTrigger),
            Te(x)
        }
        ),
        et("touchstart", Q, {
            target: D(()=>{
                var P;
                return (P = i.value) == null ? void 0 : P.$el
            }
            )
        }),
        ()=>{
            const P = u("disabled")
              , F = u("labelAlign")
              , V = M()
              , J = ()=>{
                const me = te();
                return F === "top" ? [V, me].filter(Boolean) : me || []
            }
            ;
            return d(nn, {
                size: e.size,
                class: Ft({
                    error: ne.value,
                    disabled: P,
                    [`label-${F}`]: F
                }),
                center: e.center,
                border: e.border,
                isLink: e.isLink,
                clickable: e.clickable,
                titleStyle: N.value,
                valueClass: Ft("value"),
                titleClass: [Ft("label", [F, {
                    required: m.value
                }]), e.labelClass],
                arrowDirection: e.arrowDirection
            }, {
                icon: V && F !== "top" ? ()=>V : null,
                title: J,
                value: ue,
                extra: n.extra
            })
        }
    }
});
const Tn = G(sp);
let yr = 0;
function cp(e) {
    e ? (yr || document.body.classList.add("van-toast--unclickable"),
    yr++) : yr && (yr--,
    yr || document.body.classList.remove("van-toast--unclickable"))
}
const [up,Io] = W("toast")
  , dp = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay", "zIndex"]
  , fp = {
    icon: String,
    show: Boolean,
    type: X("text"),
    overlay: Boolean,
    message: q,
    iconSize: q,
    duration: ot(2e3),
    position: X("middle"),
    teleport: [String, Object],
    wordBreak: String,
    className: Xe,
    iconPrefix: String,
    transition: X("van-fade"),
    loadingType: String,
    forbidClick: Boolean,
    overlayClass: Xe,
    overlayStyle: Object,
    closeOnClick: Boolean,
    closeOnClickOverlay: Boolean,
    zIndex: q
};
var Qf = j({
    name: up,
    props: fp,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        let o, r = !1;
        const a = ()=>{
            const f = e.show && e.forbidClick;
            r !== f && (r = f,
            cp(r))
        }
          , i = f=>t("update:show", f)
          , l = ()=>{
            e.closeOnClick && i(!1)
        }
          , s = ()=>clearTimeout(o)
          , c = ()=>{
            const {icon: f, type: h, iconSize: m, iconPrefix: w, loadingType: C} = e;
            if (f || h === "success" || h === "fail")
                return d(Ce, {
                    name: f || h,
                    size: m,
                    class: Io("icon"),
                    classPrefix: w
                }, null);
            if (h === "loading")
                return d(tn, {
                    class: Io("loading"),
                    size: m,
                    type: C
                }, null)
        }
          , u = ()=>{
            const {type: f, message: h} = e;
            if (n.message)
                return d("div", {
                    class: Io("text")
                }, [n.message()]);
            if (De(h) && h !== "")
                return f === "html" ? d("div", {
                    key: 0,
                    class: Io("text"),
                    innerHTML: String(h)
                }, null) : d("div", {
                    class: Io("text")
                }, [h])
        }
        ;
        return oe(()=>[e.show, e.forbidClick], a),
        oe(()=>[e.show, e.type, e.message, e.duration], ()=>{
            s(),
            e.show && e.duration > 0 && (o = setTimeout(()=>{
                i(!1)
            }
            , e.duration))
        }
        ),
        tt(a),
        ir(a),
        ()=>d(Rt, Ae({
            class: [Io([e.position, e.wordBreak === "normal" ? "break-normal" : e.wordBreak, {
                [e.type]: !e.icon
            }]), e.className],
            lockScroll: !1,
            onClick: l,
            onClosed: s,
            "onUpdate:show": i
        }, Le(e, dp)), {
            default: ()=>[c(), u()]
        })
    }
});
function ps() {
    const e = Ke({
        show: !1
    })
      , t = r=>{
        e.show = r
    }
      , n = r=>{
        ve(e, r, {
            transitionAppear: !0
        }),
        t(!0)
    }
      , o = ()=>t(!1);
    return Oe({
        open: n,
        close: o,
        toggle: t
    }),
    {
        open: n,
        close: o,
        state: e,
        toggle: t
    }
}
function ws(e) {
    const t = ff(e)
      , n = document.createElement("div");
    return document.body.appendChild(n),
    {
        instance: t.mount(n),
        unmount() {
            t.unmount(),
            document.body.removeChild(n)
        }
    }
}
const hp = {
    icon: "",
    type: "text",
    message: "",
    className: "",
    overlay: !1,
    onClose: void 0,
    onOpened: void 0,
    duration: 2e3,
    teleport: "body",
    iconSize: void 0,
    iconPrefix: void 0,
    position: "middle",
    transition: "van-fade",
    forbidClick: !1,
    loadingType: void 0,
    overlayClass: "",
    overlayStyle: void 0,
    closeOnClick: !1,
    closeOnClickOverlay: !1
};
let ga = []
  , gp = !1
  , Yc = ve({}, hp);
const mp = new Map;
function vp(e) {
    return hn(e) ? e : {
        message: e
    }
}
function bp() {
    const {instance: e, unmount: t} = ws({
        setup() {
            const n = R("")
              , {open: o, state: r, close: a, toggle: i} = ps()
              , l = ()=>{}
              , s = ()=>d(Qf, Ae(r, {
                onClosed: l,
                "onUpdate:show": i
            }), null);
            return oe(n, c=>{
                r.message = c
            }
            ),
            en().render = s,
            {
                open: o,
                close: a,
                message: n
            }
        }
    });
    return e
}
function yp() {
    if (!ga.length || gp) {
        const e = bp();
        ga.push(e)
    }
    return ga[ga.length - 1]
}
function kl(e={}) {
    if (!It)
        return {};
    const t = yp()
      , n = vp(e);
    return t.open(ve({}, Yc, mp.get(n.type || Yc.type), n)),
    t
}
const pp = G(Qf)
  , [wp,zi] = W("switch")
  , Sp = {
    size: q,
    loading: Boolean,
    disabled: Boolean,
    modelValue: Xe,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
        type: Xe,
        default: !0
    },
    inactiveValue: {
        type: Xe,
        default: !1
    }
};
var Cp = j({
    name: wp,
    props: Sp,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>e.modelValue === e.activeValue
          , r = ()=>{
            if (!e.disabled && !e.loading) {
                const i = o() ? e.inactiveValue : e.activeValue;
                t("update:modelValue", i),
                t("change", i)
            }
        }
          , a = ()=>{
            if (e.loading) {
                const i = o() ? e.activeColor : e.inactiveColor;
                return d(tn, {
                    class: zi("loading"),
                    color: i
                }, null)
            }
            if (n.node)
                return n.node()
        }
        ;
        return so(()=>e.modelValue),
        ()=>{
            var i;
            const {size: l, loading: s, disabled: c, activeColor: u, inactiveColor: f} = e
              , h = o()
              , m = {
                fontSize: Se(l),
                backgroundColor: h ? u : f
            };
            return d("div", {
                role: "switch",
                class: zi({
                    on: h,
                    loading: s,
                    disabled: c
                }),
                style: m,
                tabindex: c ? void 0 : 0,
                "aria-checked": h,
                onClick: r
            }, [d("div", {
                class: zi("node")
            }, [a()]), (i = n.background) == null ? void 0 : i.call(n)])
        }
    }
});
const Ss = G(Cp)
  , [xp,qc] = W("address-edit-detail")
  , Kc = W("address-edit")[2];
var _p = j({
    name: xp,
    props: {
        show: Boolean,
        rows: q,
        value: String,
        rules: Array,
        focused: Boolean,
        maxlength: q,
        searchResult: Array,
        showSearchResult: Boolean
    },
    emits: ["blur", "focus", "input", "selectSearch"],
    setup(e, {emit: t}) {
        const n = R()
          , o = ()=>e.focused && e.searchResult && e.showSearchResult
          , r = c=>{
            t("selectSearch", c),
            t("input", `${c.address || ""} ${c.name || ""}`.trim())
        }
          , a = ()=>{
            if (!o())
                return;
            const {searchResult: c} = e;
            return c.map(u=>d(nn, {
                clickable: !0,
                key: (u.name || "") + (u.address || ""),
                icon: "location-o",
                title: u.name,
                label: u.address,
                class: qc("search-item"),
                border: !1,
                onClick: ()=>r(u)
            }, null))
        }
          , i = c=>t("blur", c)
          , l = c=>t("focus", c)
          , s = c=>t("input", c);
        return ()=>{
            if (e.show)
                return d(Fe, null, [d(Tn, {
                    autosize: !0,
                    clearable: !0,
                    ref: n,
                    class: qc(),
                    rows: e.rows,
                    type: "textarea",
                    rules: e.rules,
                    label: Kc("addressDetail"),
                    border: !o(),
                    maxlength: e.maxlength,
                    modelValue: e.value,
                    placeholder: Kc("addressDetail"),
                    onBlur: i,
                    onFocus: l,
                    "onUpdate:modelValue": s
                }, null), a()])
        }
    }
});
const [kp,Ro,St] = W("address-edit")
  , Zf = {
    name: "",
    tel: "",
    city: "",
    county: "",
    country: "",
    province: "",
    areaCode: "",
    isDefault: !1,
    addressDetail: ""
}
  , Tp = {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showArea: z,
    showDetail: z,
    showDelete: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: q,
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    detailRows: ce(1),
    detailMaxlength: ce(200),
    areaColumnsPlaceholder: Ye(),
    addressInfo: {
        type: Object,
        default: ()=>ve({}, Zf)
    },
    telValidator: {
        type: Function,
        default: Ju
    }
};
var Pp = j({
    name: kp,
    props: Tp,
    emits: ["save", "focus", "change", "delete", "clickArea", "changeArea", "changeDetail", "selectSearch", "changeDefault"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = Ke({})
          , a = R(!1)
          , i = R(!1)
          , l = D(()=>hn(e.areaList) && Object.keys(e.areaList).length)
          , s = D(()=>{
            const {province: _, city: O, county: x, areaCode: B} = r;
            if (B) {
                const $ = [_, O, x];
                return _ && _ === O && $.splice(1, 1),
                $.filter(Boolean).join("/")
            }
            return ""
        }
        )
          , c = D(()=>{
            var _;
            return ((_ = e.searchResult) == null ? void 0 : _.length) && i.value
        }
        )
          , u = _=>{
            i.value = _ === "addressDetail",
            t("focus", _)
        }
          , f = (_,O)=>{
            t("change", {
                key: _,
                value: O
            })
        }
          , h = D(()=>{
            const {validator: _, telValidator: O} = e
              , x = (B,$)=>({
                validator: k=>{
                    if (_) {
                        const E = _(B, k);
                        if (E)
                            return E
                    }
                    return k ? !0 : $
                }
            });
            return {
                name: [x("name", St("nameEmpty"))],
                tel: [x("tel", St("telInvalid")), {
                    validator: O,
                    message: St("telInvalid")
                }],
                areaCode: [x("areaCode", St("areaEmpty"))],
                addressDetail: [x("addressDetail", St("addressEmpty"))]
            }
        }
        )
          , m = ()=>t("save", r)
          , w = _=>{
            r.addressDetail = _,
            t("changeDetail", _)
        }
          , C = _=>{
            r.province = _[0].text,
            r.city = _[1].text,
            r.county = _[2].text
        }
          , b = ({selectedValues: _, selectedOptions: O})=>{
            _.some(x=>x === Xo) ? kl(St("areaEmpty")) : (a.value = !1,
            C(O),
            t("changeArea", O))
        }
          , v = ()=>t("delete", r)
          , g = _=>{
            r.areaCode = _ || ""
        }
          , p = ()=>{
            setTimeout(()=>{
                i.value = !1
            }
            )
        }
          , y = _=>{
            r.addressDetail = _
        }
          , S = ()=>{
            if (e.showSetDefault) {
                const _ = {
                    "right-icon": ()=>d(Ss, {
                        modelValue: r.isDefault,
                        "onUpdate:modelValue": O=>r.isDefault = O,
                        onChange: O=>t("changeDefault", O)
                    }, null)
                };
                return st(d(nn, {
                    center: !0,
                    border: !1,
                    title: St("defaultAddress"),
                    class: Ro("default")
                }, _), [[ft, !c.value]])
            }
        }
        ;
        return Oe({
            setAreaCode: g,
            setAddressDetail: y
        }),
        oe(()=>e.addressInfo, _=>{
            ve(r, Zf, _),
            Te(()=>{
                var O;
                const x = (O = o.value) == null ? void 0 : O.getSelectedOptions();
                x && x.every(B=>B && B.value !== Xo) && C(x)
            }
            )
        }
        , {
            deep: !0,
            immediate: !0
        }),
        ()=>{
            const {disableArea: _} = e;
            return d(bs, {
                class: Ro(),
                onSubmit: m
            }, {
                default: ()=>{
                    var O;
                    return [d("div", {
                        class: Ro("fields")
                    }, [d(Tn, {
                        modelValue: r.name,
                        "onUpdate:modelValue": [x=>r.name = x, x=>f("name", x)],
                        clearable: !0,
                        label: St("name"),
                        rules: h.value.name,
                        placeholder: St("name"),
                        onFocus: ()=>u("name")
                    }, null), d(Tn, {
                        modelValue: r.tel,
                        "onUpdate:modelValue": [x=>r.tel = x, x=>f("tel", x)],
                        clearable: !0,
                        type: "tel",
                        label: St("tel"),
                        rules: h.value.tel,
                        maxlength: e.telMaxlength,
                        placeholder: St("tel"),
                        onFocus: ()=>u("tel")
                    }, null), st(d(Tn, {
                        readonly: !0,
                        label: St("area"),
                        "is-link": !_,
                        modelValue: s.value,
                        rules: e.showArea ? h.value.areaCode : void 0,
                        placeholder: e.areaPlaceholder || St("area"),
                        onFocus: ()=>u("areaCode"),
                        onClick: ()=>{
                            t("clickArea"),
                            a.value = !_
                        }
                    }, null), [[ft, e.showArea]]), d(_p, {
                        show: e.showDetail,
                        rows: e.detailRows,
                        rules: h.value.addressDetail,
                        value: r.addressDetail,
                        focused: i.value,
                        maxlength: e.detailMaxlength,
                        searchResult: e.searchResult,
                        showSearchResult: e.showSearchResult,
                        onBlur: p,
                        onFocus: ()=>u("addressDetail"),
                        onInput: w,
                        onSelectSearch: x=>t("selectSearch", x)
                    }, null), (O = n.default) == null ? void 0 : O.call(n)]), S(), st(d("div", {
                        class: Ro("buttons")
                    }, [d(pt, {
                        block: !0,
                        round: !0,
                        type: "primary",
                        text: e.saveButtonText || St("save"),
                        class: Ro("button"),
                        loading: e.isSaving,
                        nativeType: "submit"
                    }, null), e.showDelete && d(pt, {
                        block: !0,
                        round: !0,
                        class: Ro("button"),
                        loading: e.isDeleting,
                        text: e.deleteButtonText || St("delete"),
                        onClick: v
                    }, null)]), [[ft, !c.value]]), d(Rt, {
                        show: a.value,
                        "onUpdate:show": x=>a.value = x,
                        round: !0,
                        teleport: "body",
                        position: "bottom",
                        lazyRender: !1
                    }, {
                        default: ()=>[d(Gf, {
                            modelValue: r.areaCode,
                            "onUpdate:modelValue": x=>r.areaCode = x,
                            ref: o,
                            loading: !l.value,
                            areaList: e.areaList,
                            columnsPlaceholder: e.areaColumnsPlaceholder,
                            onConfirm: b,
                            onCancel: ()=>{
                                a.value = !1
                            }
                        }, null)]
                    })]
                }
            })
        }
    }
});
const Ep = G(Pp)
  , [Jf,Ap] = W("radio-group")
  , Op = {
    shape: String,
    disabled: Boolean,
    iconSize: q,
    direction: String,
    modelValue: Xe,
    checkedColor: String
}
  , eh = Symbol(Jf);
var Bp = j({
    name: Jf,
    props: Op,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = wt(eh)
          , r = a=>t("update:modelValue", a);
        return oe(()=>e.modelValue, a=>t("change", a)),
        o({
            props: e,
            updateValue: r
        }),
        so(()=>e.modelValue),
        ()=>{
            var a;
            return d("div", {
                class: Ap([e.direction]),
                role: "radiogroup"
            }, [(a = n.default) == null ? void 0 : a.call(n)])
        }
    }
});
const Cs = G(Bp)
  , [th,$p] = W("checkbox-group")
  , Dp = {
    max: q,
    shape: X("round"),
    disabled: Boolean,
    iconSize: q,
    direction: String,
    modelValue: Ye(),
    checkedColor: String
}
  , nh = Symbol(th);
var Ip = j({
    name: th,
    props: Dp,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {children: o, linkChildren: r} = wt(nh)
          , a = l=>t("update:modelValue", l)
          , i = (l={})=>{
            typeof l == "boolean" && (l = {
                checked: l
            });
            const {checked: s, skipDisabled: c} = l
              , f = o.filter(h=>h.props.bindGroup ? h.props.disabled && c ? h.checked.value : s ?? !h.checked.value : !1).map(h=>h.name);
            a(f)
        }
        ;
        return oe(()=>e.modelValue, l=>t("change", l)),
        Oe({
            toggleAll: i
        }),
        so(()=>e.modelValue),
        r({
            props: e,
            updateValue: a
        }),
        ()=>{
            var l;
            return d("div", {
                class: $p([e.direction])
            }, [(l = n.default) == null ? void 0 : l.call(n)])
        }
    }
});
const oh = G(Ip)
  , [Rp,Gc] = W("tag")
  , Lp = {
    size: String,
    mark: Boolean,
    show: z,
    type: X("default"),
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean
};
var Mp = j({
    name: Rp,
    props: Lp,
    emits: ["close"],
    setup(e, {slots: t, emit: n}) {
        const o = i=>{
            i.stopPropagation(),
            n("close", i)
        }
          , r = ()=>e.plain ? {
            color: e.textColor || e.color,
            borderColor: e.color
        } : {
            color: e.textColor,
            background: e.color
        }
          , a = ()=>{
            var i;
            const {type: l, mark: s, plain: c, round: u, size: f, closeable: h} = e
              , m = {
                mark: s,
                plain: c,
                round: u
            };
            f && (m[f] = f);
            const w = h && d(Ce, {
                name: "cross",
                class: [Gc("close"), yt],
                onClick: o
            }, null);
            return d("span", {
                style: r(),
                class: Gc([m, l])
            }, [(i = t.default) == null ? void 0 : i.call(t), w])
        }
        ;
        return ()=>d(sr, {
            name: e.closeable ? "van-fade" : void 0
        }, {
            default: ()=>[e.show ? a() : null]
        })
    }
});
const vi = G(Mp)
  , xs = {
    name: Xe,
    disabled: Boolean,
    iconSize: q,
    modelValue: Xe,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean
};
var rh = j({
    props: ve({}, xs, {
        bem: dt(Function),
        role: String,
        shape: String,
        parent: Object,
        checked: Boolean,
        bindGroup: z,
        indeterminate: {
            type: Boolean,
            default: null
        }
    }),
    emits: ["click", "toggle"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = h=>{
            if (e.parent && e.bindGroup)
                return e.parent.props[h]
        }
          , a = D(()=>{
            if (e.parent && e.bindGroup) {
                const h = r("disabled") || e.disabled;
                if (e.role === "checkbox") {
                    const m = r("modelValue").length
                      , w = r("max")
                      , C = w && m >= +w;
                    return h || C && !e.checked
                }
                return h
            }
            return e.disabled
        }
        )
          , i = D(()=>r("direction"))
          , l = D(()=>{
            const h = e.checkedColor || r("checkedColor");
            if (h && e.checked && !a.value)
                return {
                    borderColor: h,
                    backgroundColor: h
                }
        }
        )
          , s = D(()=>e.shape || r("shape") || "round")
          , c = h=>{
            const {target: m} = h
              , w = o.value
              , C = w === m || (w == null ? void 0 : w.contains(m));
            !a.value && (C || !e.labelDisabled) && t("toggle"),
            t("click", h)
        }
          , u = ()=>{
            var h, m;
            const {bem: w, checked: C, indeterminate: b} = e
              , v = e.iconSize || r("iconSize");
            return d("div", {
                ref: o,
                class: w("icon", [s.value, {
                    disabled: a.value,
                    checked: C,
                    indeterminate: b
                }]),
                style: s.value !== "dot" ? {
                    fontSize: Se(v)
                } : {
                    width: Se(v),
                    height: Se(v),
                    borderColor: (h = l.value) == null ? void 0 : h.borderColor
                }
            }, [n.icon ? n.icon({
                checked: C,
                disabled: a.value
            }) : s.value !== "dot" ? d(Ce, {
                name: b ? "minus" : "success",
                style: l.value
            }, null) : d("div", {
                class: w("icon--dot__icon"),
                style: {
                    backgroundColor: (m = l.value) == null ? void 0 : m.backgroundColor
                }
            }, null)])
        }
          , f = ()=>{
            const {checked: h} = e;
            if (n.default)
                return d("span", {
                    class: e.bem("label", [e.labelPosition, {
                        disabled: a.value
                    }])
                }, [n.default({
                    checked: h,
                    disabled: a.value
                })])
        }
        ;
        return ()=>{
            const h = e.labelPosition === "left" ? [f(), u()] : [u(), f()];
            return d("div", {
                role: e.role,
                class: e.bem([{
                    disabled: a.value,
                    "label-disabled": e.labelDisabled
                }, i.value]),
                tabindex: a.value ? void 0 : 0,
                "aria-checked": e.checked,
                onClick: c
            }, [h])
        }
    }
});
const Fp = ve({}, xs, {
    shape: String
})
  , [Vp,Np] = W("radio");
var Hp = j({
    name: Vp,
    props: Fp,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = gt(eh)
          , r = ()=>(o ? o.props.modelValue : e.modelValue) === e.name
          , a = ()=>{
            o ? o.updateValue(e.name) : t("update:modelValue", e.name)
        }
        ;
        return ()=>d(rh, Ae({
            bem: Np,
            role: "radio",
            parent: o,
            checked: r(),
            onToggle: a
        }, e), Le(n, ["default", "icon"]))
    }
});
const _s = G(Hp)
  , [zp,jp] = W("checkbox")
  , Up = ve({}, xs, {
    shape: String,
    bindGroup: z,
    indeterminate: {
        type: Boolean,
        default: null
    }
});
var Wp = j({
    name: zp,
    props: Up,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {parent: o} = gt(nh)
          , r = l=>{
            const {name: s} = e
              , {max: c, modelValue: u} = o.props
              , f = u.slice();
            if (l)
                !(c && f.length >= +c) && !f.includes(s) && (f.push(s),
                e.bindGroup && o.updateValue(f));
            else {
                const h = f.indexOf(s);
                h !== -1 && (f.splice(h, 1),
                e.bindGroup && o.updateValue(f))
            }
        }
          , a = D(()=>o && e.bindGroup ? o.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue)
          , i = (l=!a.value)=>{
            o && e.bindGroup ? r(l) : t("update:modelValue", l),
            e.indeterminate !== null && t("change", l)
        }
        ;
        return oe(()=>e.modelValue, l=>{
            e.indeterminate === null && t("change", l)
        }
        ),
        Oe({
            toggle: i,
            props: e,
            checked: a
        }),
        so(()=>e.modelValue),
        ()=>d(rh, Ae({
            bem: jp,
            role: "checkbox",
            parent: o,
            checked: a.value,
            onToggle: i
        }, e), Le(n, ["default", "icon"]))
    }
});
const ks = G(Wp)
  , [Yp,Lo] = W("address-item");
var qp = j({
    name: Yp,
    props: {
        address: dt(Object),
        disabled: Boolean,
        switchable: Boolean,
        singleChoice: Boolean,
        defaultTagText: String,
        rightIcon: X("edit")
    },
    emits: ["edit", "click", "select"],
    setup(e, {slots: t, emit: n}) {
        const o = l=>{
            e.switchable && n("select"),
            n("click", l)
        }
          , r = ()=>d(Ce, {
            name: e.rightIcon,
            class: Lo("edit"),
            onClick: l=>{
                l.stopPropagation(),
                n("edit"),
                n("click", l)
            }
        }, null)
          , a = ()=>{
            if (t.tag)
                return t.tag(e.address);
            if (e.address.isDefault && e.defaultTagText)
                return d(vi, {
                    type: "primary",
                    round: !0,
                    class: Lo("tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })
        }
          , i = ()=>{
            const {address: l, disabled: s, switchable: c, singleChoice: u} = e
              , f = [d("div", {
                class: Lo("name")
            }, [`${l.name} ${l.tel}`, a()]), d("div", {
                class: Lo("address")
            }, [l.address])];
            return c && !s ? u ? d(_s, {
                name: l.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : d(ks, {
                name: l.id,
                iconSize: 18
            }, {
                default: ()=>[f]
            }) : f
        }
        ;
        return ()=>{
            var l;
            const {disabled: s} = e;
            return d("div", {
                class: Lo({
                    disabled: s
                }),
                onClick: o
            }, [d(nn, {
                border: !1,
                titleClass: Lo("title")
            }, {
                title: i,
                "right-icon": r
            }), (l = t.bottom) == null ? void 0 : l.call(t, ve({}, e.address, {
                disabled: s
            }))])
        }
    }
});
const [Kp,ma,Gp] = W("address-list")
  , Xp = {
    list: Ye(),
    modelValue: [...q, Array],
    switchable: z,
    disabledText: String,
    disabledList: Ye(),
    showAddButton: z,
    addButtonText: String,
    defaultTagText: String,
    rightIcon: X("edit")
};
var Qp = j({
    name: Kp,
    props: Xp,
    emits: ["add", "edit", "select", "clickItem", "editDisabled", "selectDisabled", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const o = D(()=>!Array.isArray(e.modelValue))
          , r = (l,s,c)=>{
            const u = ()=>n(c ? "editDisabled" : "edit", l, s)
              , f = m=>n("clickItem", l, s, {
                event: m
            })
              , h = ()=>{
                if (n(c ? "selectDisabled" : "select", l, s),
                !c)
                    if (o.value)
                        n("update:modelValue", l.id);
                    else {
                        const m = e.modelValue;
                        m.includes(l.id) ? n("update:modelValue", m.filter(w=>w !== l.id)) : n("update:modelValue", [...m, l.id])
                    }
            }
            ;
            return d(qp, {
                key: l.id,
                address: l,
                disabled: c,
                switchable: e.switchable,
                singleChoice: o.value,
                defaultTagText: e.defaultTagText,
                rightIcon: e.rightIcon,
                onEdit: u,
                onClick: f,
                onSelect: h
            }, {
                bottom: t["item-bottom"],
                tag: t.tag
            })
        }
          , a = (l,s)=>{
            if (l)
                return l.map((c,u)=>r(c, u, s))
        }
          , i = ()=>e.showAddButton ? d("div", {
            class: [ma("bottom"), "van-safe-area-bottom"]
        }, [d(pt, {
            round: !0,
            block: !0,
            type: "primary",
            text: e.addButtonText || Gp("add"),
            class: ma("add"),
            onClick: ()=>n("add")
        }, null)]) : void 0;
        return ()=>{
            var l, s;
            const c = a(e.list)
              , u = a(e.disabledList, !0)
              , f = e.disabledText && d("div", {
                class: ma("disabled-text")
            }, [e.disabledText]);
            return d("div", {
                class: ma()
            }, [(l = t.top) == null ? void 0 : l.call(t), !o.value && Array.isArray(e.modelValue) ? d(oh, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }) : d(Cs, {
                modelValue: e.modelValue
            }, {
                default: ()=>[c]
            }), f, u, (s = t.default) == null ? void 0 : s.call(t), i()])
        }
    }
});
const Zp = G(Qp);
function Jp(e, t) {
    let n = null
      , o = 0;
    return function(...r) {
        if (n)
            return;
        const a = Date.now() - o
          , i = ()=>{
            o = Date.now(),
            n = !1,
            e.apply(this, r)
        }
        ;
        a >= t ? i() : n = setTimeout(i, t)
    }
}
const [e0,ji] = W("back-top")
  , t0 = {
    right: q,
    bottom: q,
    zIndex: q,
    target: [String, Object],
    offset: ce(200),
    immediate: Boolean,
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var n0 = j({
    name: e0,
    inheritAttrs: !1,
    props: t0,
    emits: ["click"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        let r = !1;
        const a = R(!1)
          , i = R()
          , l = R()
          , s = D(()=>ve(Dn(e.zIndex), {
            right: Se(e.right),
            bottom: Se(e.bottom)
        }))
          , c = m=>{
            var w;
            t("click", m),
            (w = l.value) == null || w.scrollTo({
                top: 0,
                behavior: e.immediate ? "auto" : "smooth"
            })
        }
          , u = ()=>{
            a.value = l.value ? En(l.value) >= +e.offset : !1
        }
          , f = ()=>{
            const {target: m} = e;
            if (typeof m == "string") {
                const w = document.querySelector(m);
                if (w)
                    return w
            } else
                return m
        }
          , h = ()=>{
            It && Te(()=>{
                l.value = e.target ? f() : ls(i.value),
                u()
            }
            )
        }
        ;
        return et("scroll", Jp(u, 100), {
            target: l
        }),
        tt(h),
        mn(()=>{
            r && (a.value = !0,
            r = !1)
        }
        ),
        vn(()=>{
            a.value && e.teleport && (a.value = !1,
            r = !0)
        }
        ),
        oe(()=>e.target, h),
        ()=>{
            const m = d("div", Ae({
                ref: e.teleport ? void 0 : i,
                class: ji({
                    active: a.value
                }),
                style: s.value,
                onClick: c
            }, o), [n.default ? n.default() : d(Ce, {
                name: "back-top",
                class: ji("icon")
            }, null)]);
            return e.teleport ? [d("div", {
                ref: i,
                class: ji("placeholder")
            }, null), d(lr, {
                to: e.teleport
            }, {
                default: ()=>[m]
            })] : m
        }
    }
});
const o0 = G(n0);
var r0 = (e,t,n)=>new Promise((o,r)=>{
    var a = s=>{
        try {
            l(n.next(s))
        } catch (c) {
            r(c)
        }
    }
      , i = s=>{
        try {
            l(n.throw(s))
        } catch (c) {
            r(c)
        }
    }
      , l = s=>s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
    l((n = n.apply(e, t)).next())
}
);
const a0 = {
    top: ce(10),
    rows: ce(4),
    duration: ce(4e3),
    autoPlay: z,
    delay: ot(300),
    modelValue: Ye()
}
  , [i0,Xc] = W("barrage");
var l0 = j({
    name: i0,
    props: a0,
    emits: ["update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = Xc("item")
          , a = R(0)
          , i = []
          , l = (C,b=e.delay)=>{
            const v = document.createElement("span");
            return v.className = r,
            v.innerText = String(C),
            v.style.animationDuration = `${e.duration}ms`,
            v.style.animationDelay = `${b}ms`,
            v.style.animationName = "van-barrage",
            v.style.animationTimingFunction = "linear",
            v
        }
          , s = R(!0)
          , c = R(e.autoPlay)
          , u = ({id: C, text: b},v)=>{
            var g;
            const p = l(b, s.value ? v * e.delay : void 0);
            !e.autoPlay && c.value === !1 && (p.style.animationPlayState = "paused"),
            (g = o.value) == null || g.append(p),
            a.value++;
            const y = (a.value - 1) % +e.rows * p.offsetHeight + +e.top;
            p.style.top = `${y}px`,
            p.dataset.id = String(C),
            i.push(p),
            p.addEventListener("animationend", ()=>{
                t("update:modelValue", [...e.modelValue].filter(S=>String(S.id) !== p.dataset.id))
            }
            )
        }
          , f = (C,b)=>{
            const v = new Map(b.map(g=>[g.id, g]));
            C.forEach((g,p)=>{
                v.has(g.id) ? v.delete(g.id) : u(g, p)
            }
            ),
            v.forEach(g=>{
                const p = i.findIndex(y=>y.dataset.id === String(g.id));
                p > -1 && (i[p].remove(),
                i.splice(p, 1))
            }
            ),
            s.value = !1
        }
        ;
        oe(()=>e.modelValue.slice(), (C,b)=>f(C ?? [], b ?? []), {
            deep: !0
        });
        const h = R({});
        return tt(()=>r0(this, null, function*() {
            var C;
            h.value["--move-distance"] = `-${(C = o.value) == null ? void 0 : C.offsetWidth}px`,
            yield Te(),
            f(e.modelValue, [])
        })),
        Oe({
            play: ()=>{
                c.value = !0,
                i.forEach(C=>{
                    C.style.animationPlayState = "running"
                }
                )
            }
            ,
            pause: ()=>{
                c.value = !1,
                i.forEach(C=>{
                    C.style.animationPlayState = "paused"
                }
                )
            }
        }),
        ()=>{
            var C;
            return d("div", {
                class: Xc(),
                ref: o,
                style: h.value
            }, [(C = n.default) == null ? void 0 : C.call(n)])
        }
    }
});
const s0 = G(l0)
  , [c0,Je,Pn] = W("calendar")
  , u0 = e=>Pn("monthTitle", e.getFullYear(), e.getMonth() + 1);
function Tl(e, t) {
    const n = e.getFullYear()
      , o = t.getFullYear();
    if (n === o) {
        const r = e.getMonth()
          , a = t.getMonth();
        return r === a ? 0 : r > a ? 1 : -1
    }
    return n > o ? 1 : -1
}
function Dt(e, t) {
    const n = Tl(e, t);
    if (n === 0) {
        const o = e.getDate()
          , r = t.getDate();
        return o === r ? 0 : o > r ? 1 : -1
    }
    return n
}
const tr = e=>new Date(e)
  , Qc = e=>Array.isArray(e) ? e.map(tr) : tr(e);
function Ts(e, t) {
    const n = tr(e);
    return n.setDate(n.getDate() + t),
    n
}
function Ps(e, t) {
    const n = tr(e);
    return n.setMonth(n.getMonth() + t),
    n
}
function ah(e, t) {
    const n = tr(e);
    return n.setFullYear(n.getFullYear() + t),
    n
}
const Pl = e=>Ts(e, -1)
  , El = e=>Ts(e, 1)
  , Zc = e=>Ps(e, -1)
  , Jc = e=>Ps(e, 1)
  , eu = e=>ah(e, -1)
  , tu = e=>ah(e, 1)
  , va = ()=>{
    const e = new Date;
    return e.setHours(0, 0, 0, 0),
    e
}
;
function d0(e) {
    const t = e[0].getTime();
    return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1
}
const ih = ve({}, hi, {
    modelValue: Ye(),
    filter: Function,
    formatter: {
        type: Function,
        default: (e,t)=>t
    }
})
  , lh = Object.keys(hi);
function f0(e, t) {
    if (e < 0)
        return [];
    const n = Array(e);
    let o = -1;
    for (; ++o < e; )
        n[o] = t(o);
    return n
}
const sh = (e,t)=>32 - new Date(e,t - 1,32).getDate()
  , Qo = (e,t,n,o,r,a)=>{
    const i = f0(t - e + 1, l=>{
        const s = qt(e + l);
        return o(n, {
            text: s,
            value: s
        })
    }
    );
    return r ? r(n, i, a) : i
}
  , ch = (e,t)=>e.map((n,o)=>{
    const r = t[o];
    if (r.length) {
        const a = +r[0].value
          , i = +r[r.length - 1].value;
        return qt(ht(+n, a, i))
    }
    return n
}
)
  , [h0] = W("calendar-day");
var g0 = j({
    name: h0,
    props: {
        item: dt(Object),
        color: String,
        index: Number,
        offset: ot(0),
        rowHeight: String
    },
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const o = D(()=>{
            var s;
            const {item: c, index: u, color: f, offset: h, rowHeight: m} = e
              , w = {
                height: m
            };
            if (c.type === "placeholder")
                return w.width = "100%",
                w;
            if (u === 0 && (w.marginLeft = `${100 * h / 7}%`),
            f)
                switch (c.type) {
                case "end":
                case "start":
                case "start-end":
                case "multiple-middle":
                case "multiple-selected":
                    w.background = f;
                    break;
                case "middle":
                    w.color = f;
                    break
                }
            return h + (((s = c.date) == null ? void 0 : s.getDate()) || 1) > 28 && (w.marginBottom = 0),
            w
        }
        )
          , r = ()=>{
            e.item.type !== "disabled" ? t("click", e.item) : t("clickDisabledDate", e.item)
        }
          , a = ()=>{
            const {topInfo: s} = e.item;
            if (s || n["top-info"])
                return d("div", {
                    class: Je("top-info")
                }, [n["top-info"] ? n["top-info"](e.item) : s])
        }
          , i = ()=>{
            const {bottomInfo: s} = e.item;
            if (s || n["bottom-info"])
                return d("div", {
                    class: Je("bottom-info")
                }, [n["bottom-info"] ? n["bottom-info"](e.item) : s])
        }
          , l = ()=>{
            const {item: s, color: c, rowHeight: u} = e
              , {type: f, text: h} = s
              , m = [a(), h, i()];
            return f === "selected" ? d("div", {
                class: Je("selected-day"),
                style: {
                    width: u,
                    height: u,
                    background: c
                }
            }, [m]) : m
        }
        ;
        return ()=>{
            const {type: s, className: c} = e.item;
            return s === "placeholder" ? d("div", {
                class: Je("day"),
                style: o.value
            }, null) : d("div", {
                role: "gridcell",
                style: o.value,
                class: [Je("day", s), c],
                tabindex: s === "disabled" ? void 0 : -1,
                onClick: r
            }, [l()])
        }
    }
});
const [m0] = W("calendar-month")
  , v0 = {
    date: dt(Date),
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: q,
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
};
var b0 = j({
    name: m0,
    props: v0,
    emits: ["click", "clickDisabledDate"],
    setup(e, {emit: t, slots: n}) {
        const [o,r] = zv()
          , a = R()
          , i = R()
          , l = kf(i)
          , s = D(()=>u0(e.date))
          , c = D(()=>Se(e.rowHeight))
          , u = D(()=>{
            const $ = e.date.getDate()
              , E = (e.date.getDay() - $ % 7 + 8) % 7;
            return e.firstDayOfWeek ? (E + 7 - e.firstDayOfWeek) % 7 : E
        }
        )
          , f = D(()=>sh(e.date.getFullYear(), e.date.getMonth() + 1))
          , h = D(()=>o.value || !e.lazyRender)
          , m = ()=>s.value
          , w = $=>{
            const k = E=>e.currentDate.some(I=>Dt(I, E) === 0);
            if (k($)) {
                const E = Pl($)
                  , I = El($)
                  , Q = k(E)
                  , ne = k(I);
                return Q && ne ? "multiple-middle" : Q ? "end" : ne ? "start" : "multiple-selected"
            }
            return ""
        }
          , C = $=>{
            const [k,E] = e.currentDate;
            if (!k)
                return "";
            const I = Dt($, k);
            if (!E)
                return I === 0 ? "start" : "";
            const Q = Dt($, E);
            return e.allowSameDay && I === 0 && Q === 0 ? "start-end" : I === 0 ? "start" : Q === 0 ? "end" : I > 0 && Q < 0 ? "middle" : ""
        }
          , b = $=>{
            const {type: k, minDate: E, maxDate: I, currentDate: Q} = e;
            if (E && Dt($, E) < 0 || I && Dt($, I) > 0)
                return "disabled";
            if (Q === null)
                return "";
            if (Array.isArray(Q)) {
                if (k === "multiple")
                    return w($);
                if (k === "range")
                    return C($)
            } else if (k === "single")
                return Dt($, Q) === 0 ? "selected" : "";
            return ""
        }
          , v = $=>{
            if (e.type === "range") {
                if ($ === "start" || $ === "end")
                    return Pn($);
                if ($ === "start-end")
                    return `${Pn("start")}/${Pn("end")}`
            }
        }
          , g = ()=>{
            if (e.showMonthTitle)
                return d("div", {
                    class: Je("month-title")
                }, [n["month-title"] ? n["month-title"]({
                    date: e.date,
                    text: s.value
                }) : s.value])
        }
          , p = ()=>{
            if (e.showMark && h.value)
                return d("div", {
                    class: Je("month-mark")
                }, [e.date.getMonth() + 1])
        }
          , y = D(()=>{
            const $ = Math.ceil((f.value + u.value) / 7);
            return Array($).fill({
                type: "placeholder"
            })
        }
        )
          , S = D(()=>{
            const $ = []
              , k = e.date.getFullYear()
              , E = e.date.getMonth();
            for (let I = 1; I <= f.value; I++) {
                const Q = new Date(k,E,I)
                  , ne = b(Q);
                let N = {
                    date: Q,
                    type: ne,
                    text: I,
                    bottomInfo: v(ne)
                };
                e.formatter && (N = e.formatter(N)),
                $.push(N)
            }
            return $
        }
        )
          , _ = D(()=>S.value.filter($=>$.type === "disabled"))
          , O = ($,k)=>{
            if (a.value) {
                const E = Ve(a.value)
                  , I = y.value.length
                  , ne = (Math.ceil((k.getDate() + u.value) / 7) - 1) * E.height / I;
                za($, E.top + ne + $.scrollTop - Ve($).top)
            }
        }
          , x = ($,k)=>d(g0, {
            item: $,
            index: k,
            color: e.color,
            offset: u.value,
            rowHeight: c.value,
            onClick: E=>t("click", E),
            onClickDisabledDate: E=>t("clickDisabledDate", E)
        }, Le(n, ["top-info", "bottom-info"]))
          , B = ()=>d("div", {
            ref: a,
            role: "grid",
            class: Je("days")
        }, [p(), (h.value ? S : y).value.map(x)]);
        return Oe({
            getTitle: m,
            getHeight: ()=>l.value,
            setVisible: r,
            scrollToDate: O,
            disabledDays: _
        }),
        ()=>d("div", {
            class: Je("month"),
            ref: i
        }, [g(), B()])
    }
});
const [y0] = W("calendar-header");
var p0 = j({
    name: y0,
    props: {
        date: Date,
        minDate: Date,
        maxDate: Date,
        title: String,
        subtitle: String,
        showTitle: Boolean,
        showSubtitle: Boolean,
        firstDayOfWeek: Number,
        switchMode: X("none")
    },
    emits: ["clickSubtitle", "panelChange"],
    setup(e, {slots: t, emit: n}) {
        const o = D(()=>{
            const m = Zc(e.date);
            return e.minDate && m < e.minDate
        }
        )
          , r = D(()=>{
            const m = eu(e.date);
            return e.minDate && m < e.minDate
        }
        )
          , a = D(()=>{
            const m = Jc(e.date);
            return e.maxDate && m > e.maxDate
        }
        )
          , i = D(()=>{
            const m = tu(e.date);
            return e.maxDate && m > e.maxDate
        }
        )
          , l = ()=>{
            if (e.showTitle) {
                const m = e.title || Pn("title")
                  , w = t.title ? t.title() : m;
                return d("div", {
                    class: Je("header-title")
                }, [w])
            }
        }
          , s = m=>n("clickSubtitle", m)
          , c = m=>n("panelChange", m)
          , u = m=>{
            const w = e.switchMode === "year-month"
              , C = t[m ? "next-month" : "prev-month"]
              , b = t[m ? "next-year" : "prev-year"]
              , v = m ? a.value : o.value
              , g = m ? i.value : r.value
              , p = m ? "arrow" : "arrow-left"
              , y = m ? "arrow-double-right" : "arrow-double-left"
              , S = ()=>c((m ? Jc : Zc)(e.date))
              , _ = ()=>c((m ? tu : eu)(e.date))
              , O = d("view", {
                class: Je("header-action", {
                    disabled: v
                }),
                onClick: v ? void 0 : S
            }, [C ? C({
                disabled: v
            }) : d(Ce, {
                class: {
                    [yt]: !v
                },
                name: p
            }, null)])
              , x = w && d("view", {
                class: Je("header-action", {
                    disabled: g
                }),
                onClick: g ? void 0 : _
            }, [b ? b({
                disabled: g
            }) : d(Ce, {
                class: {
                    [yt]: !g
                },
                name: y
            }, null)]);
            return m ? [O, x] : [x, O]
        }
          , f = ()=>{
            if (e.showSubtitle) {
                const m = t.subtitle ? t.subtitle({
                    date: e.date,
                    text: e.subtitle
                }) : e.subtitle
                  , w = e.switchMode !== "none";
                return d("div", {
                    class: Je("header-subtitle", {
                        "with-swicth": w
                    }),
                    onClick: s
                }, [w ? [u(), d("div", {
                    class: Je("header-subtitle-text")
                }, [m]), u(!0)] : m])
            }
        }
          , h = ()=>{
            const {firstDayOfWeek: m} = e
              , w = Pn("weekdays")
              , C = [...w.slice(m, 7), ...w.slice(0, m)];
            return d("div", {
                class: Je("weekdays")
            }, [C.map(b=>d("span", {
                class: Je("weekday")
            }, [b]))])
        }
        ;
        return ()=>d("div", {
            class: Je("header")
        }, [l(), f(), h()])
    }
});
const w0 = {
    show: Boolean,
    type: X("single"),
    switchMode: X("none"),
    title: String,
    color: String,
    round: z,
    readonly: Boolean,
    poppable: z,
    maxRange: ce(null),
    position: X("bottom"),
    teleport: [String, Object],
    showMark: z,
    showTitle: z,
    formatter: Function,
    rowHeight: q,
    confirmText: String,
    rangePrompt: String,
    lazyRender: z,
    showConfirm: z,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: z,
    closeOnPopstate: z,
    showRangePrompt: z,
    confirmDisabledText: String,
    closeOnClickOverlay: z,
    safeAreaInsetTop: Boolean,
    safeAreaInsetBottom: z,
    minDate: {
        type: Date,
        validator: Mr
    },
    maxDate: {
        type: Date,
        validator: Mr
    },
    firstDayOfWeek: {
        type: q,
        default: 0,
        validator: e=>e >= 0 && e <= 6
    }
};
var S0 = j({
    name: c0,
    props: w0,
    emits: ["select", "confirm", "unselect", "monthShow", "overRange", "update:show", "clickSubtitle", "clickDisabledDate", "panelChange"],
    setup(e, {emit: t, slots: n}) {
        const o = D(()=>e.switchMode !== "none")
          , r = D(()=>!e.minDate && !o.value ? va() : e.minDate)
          , a = D(()=>!e.maxDate && !o.value ? Ps(va(), 6) : e.maxDate)
          , i = (M,K=r.value,fe=a.value)=>K && Dt(M, K) === -1 ? K : fe && Dt(M, fe) === 1 ? fe : M
          , l = (M=e.defaultDate)=>{
            const {type: K, allowSameDay: fe} = e;
            if (M === null)
                return M;
            const ge = va();
            if (K === "range") {
                Array.isArray(M) || (M = []);
                const te = r.value
                  , ue = a.value
                  , P = i(M[0] || ge, te, ue ? fe ? ue : Pl(ue) : void 0)
                  , F = i(M[1] || (fe ? ge : El(ge)), te ? fe ? te : El(te) : void 0);
                return [P, F]
            }
            return K === "multiple" ? Array.isArray(M) ? M.map(te=>i(te)) : [i(ge)] : ((!M || Array.isArray(M)) && (M = ge),
            i(M))
        }
          , s = ()=>{
            const M = Array.isArray(f.value) ? f.value[0] : f.value;
            return M || i(va())
        }
        ;
        let c;
        const u = R()
          , f = R(l())
          , h = R(s())
          , m = R()
          , [w,C] = ea()
          , b = D(()=>e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0)
          , v = D(()=>{
            const M = [];
            if (!r.value || !a.value)
                return M;
            const K = new Date(r.value);
            K.setDate(1);
            do
                M.push(new Date(K)),
                K.setMonth(K.getMonth() + 1);
            while (Tl(K, a.value) !== 1);
            return M
        }
        )
          , g = D(()=>{
            if (f.value) {
                if (e.type === "range")
                    return !f.value[0] || !f.value[1];
                if (e.type === "multiple")
                    return !f.value.length
            }
            return !f.value
        }
        )
          , p = ()=>f.value
          , y = ()=>{
            const M = En(u.value)
              , K = M + c
              , fe = v.value.map((F,V)=>w.value[V].getHeight())
              , ge = fe.reduce((F,V)=>F + V, 0);
            if (K > ge && M > 0)
                return;
            let te = 0, ue;
            const P = [-1, -1];
            for (let F = 0; F < v.value.length; F++) {
                const V = w.value[F];
                te <= K && te + fe[F] >= M && (P[1] = F,
                ue || (ue = V,
                P[0] = F),
                w.value[F].showed || (w.value[F].showed = !0,
                t("monthShow", {
                    date: V.date,
                    title: V.getTitle()
                }))),
                te += fe[F]
            }
            v.value.forEach((F,V)=>{
                const J = V >= P[0] - 1 && V <= P[1] + 1;
                w.value[V].setVisible(J)
            }
            ),
            ue && (m.value = ue)
        }
          , S = M=>{
            o.value ? h.value = M : bt(()=>{
                v.value.some((K,fe)=>Tl(K, M) === 0 ? (u.value && w.value[fe].scrollToDate(u.value, M),
                !0) : !1),
                y()
            }
            )
        }
          , _ = ()=>{
            if (!(e.poppable && !e.show))
                if (f.value) {
                    const M = e.type === "single" ? f.value : f.value[0];
                    Mr(M) && S(M)
                } else
                    o.value || bt(y)
        }
          , O = ()=>{
            e.poppable && !e.show || (o.value || bt(()=>{
                c = Math.floor(Ve(u).height)
            }
            ),
            _())
        }
          , x = (M=l())=>{
            f.value = M,
            _()
        }
          , B = M=>{
            const {maxRange: K, rangePrompt: fe, showRangePrompt: ge} = e;
            return K && d0(M) > +K ? (ge && kl(fe || Pn("rangePrompt", K)),
            t("overRange"),
            !1) : !0
        }
          , $ = M=>{
            h.value = M,
            t("panelChange", {
                date: M
            })
        }
          , k = ()=>{
            var M;
            return t("confirm", (M = f.value) != null ? M : Qc(f.value))
        }
          , E = (M,K)=>{
            const fe = ge=>{
                f.value = ge,
                t("select", Qc(ge))
            }
            ;
            if (K && e.type === "range" && !B(M)) {
                fe([M[0], Ts(M[0], +e.maxRange - 1)]);
                return
            }
            fe(M),
            K && !e.showConfirm && k()
        }
          , I = (M,K,fe)=>{
            var ge;
            return (ge = M.find(te=>Dt(K, te.date) === -1 && Dt(te.date, fe) === -1)) == null ? void 0 : ge.date
        }
          , Q = D(()=>w.value.reduce((M,K)=>{
            var fe, ge;
            return M.push(...(ge = (fe = K.disabledDays) == null ? void 0 : fe.value) != null ? ge : []),
            M
        }
        , []))
          , ne = M=>{
            if (e.readonly || !M.date)
                return;
            const {date: K} = M
              , {type: fe} = e;
            if (fe === "range") {
                if (!f.value) {
                    E([K]);
                    return
                }
                const [ge,te] = f.value;
                if (ge && !te) {
                    const ue = Dt(K, ge);
                    if (ue === 1) {
                        const P = I(Q.value, ge, K);
                        if (P) {
                            const F = Pl(P);
                            Dt(ge, F) === -1 ? E([ge, F]) : E([K])
                        } else
                            E([ge, K], !0)
                    } else
                        ue === -1 ? E([K]) : e.allowSameDay && E([K, K], !0)
                } else
                    E([K])
            } else if (fe === "multiple") {
                if (!f.value) {
                    E([K]);
                    return
                }
                const ge = f.value
                  , te = ge.findIndex(ue=>Dt(ue, K) === 0);
                if (te !== -1) {
                    const [ue] = ge.splice(te, 1);
                    t("unselect", tr(ue))
                } else
                    e.maxRange && ge.length >= +e.maxRange ? kl(e.rangePrompt || Pn("rangePrompt", e.maxRange)) : E([...ge, K])
            } else
                E(K, !0)
        }
          , N = M=>t("update:show", M)
          , Z = (M,K)=>{
            const fe = K !== 0 || !e.showSubtitle;
            return d(b0, Ae({
                ref: o.value ? m : C(K),
                date: M,
                currentDate: f.value,
                showMonthTitle: fe,
                firstDayOfWeek: b.value,
                lazyRender: o.value ? !1 : e.lazyRender,
                maxDate: a.value,
                minDate: r.value
            }, Le(e, ["type", "color", "showMark", "formatter", "rowHeight", "showSubtitle", "allowSameDay"]), {
                onClick: ne,
                onClickDisabledDate: ge=>t("clickDisabledDate", ge)
            }), Le(n, ["top-info", "bottom-info", "month-title"]))
        }
          , ie = ()=>{
            if (n.footer)
                return n.footer();
            if (e.showConfirm) {
                const M = n["confirm-text"]
                  , K = g.value
                  , fe = K ? e.confirmDisabledText : e.confirmText;
                return d(pt, {
                    round: !0,
                    block: !0,
                    type: "primary",
                    color: e.color,
                    class: Je("confirm"),
                    disabled: K,
                    nativeType: "button",
                    onClick: k
                }, {
                    default: ()=>[M ? M({
                        disabled: K
                    }) : fe || Pn("confirm")]
                })
            }
        }
          , Ee = ()=>d("div", {
            class: [Je("footer"), {
                "van-safe-area-bottom": e.safeAreaInsetBottom
            }]
        }, [ie()])
          , $e = ()=>{
            var M, K;
            return d("div", {
                class: Je()
            }, [d(p0, {
                date: (M = m.value) == null ? void 0 : M.date,
                maxDate: a.value,
                minDate: r.value,
                title: e.title,
                subtitle: (K = m.value) == null ? void 0 : K.getTitle(),
                showTitle: e.showTitle,
                showSubtitle: e.showSubtitle,
                switchMode: e.switchMode,
                firstDayOfWeek: b.value,
                onClickSubtitle: fe=>t("clickSubtitle", fe),
                onPanelChange: $
            }, Le(n, ["title", "subtitle", "prev-month", "prev-year", "next-month", "next-year"])), d("div", {
                ref: u,
                class: Je("body"),
                onScroll: o.value ? void 0 : y
            }, [o.value ? Z(h.value, 0) : v.value.map(Z)]), Ee()])
        }
        ;
        return oe(()=>e.show, O),
        oe(()=>[e.type, e.minDate, e.maxDate, e.switchMode], ()=>x(l(f.value))),
        oe(()=>e.defaultDate, (M=null)=>{
            f.value = M,
            _()
        }
        ),
        Oe({
            reset: x,
            scrollToDate: S,
            getSelectedDate: p
        }),
        cr(O),
        ()=>e.poppable ? d(Rt, {
            show: e.show,
            class: Je("popup"),
            round: e.round,
            position: e.position,
            closeable: e.showTitle || e.showSubtitle,
            teleport: e.teleport,
            closeOnPopstate: e.closeOnPopstate,
            safeAreaInsetTop: e.safeAreaInsetTop,
            closeOnClickOverlay: e.closeOnClickOverlay,
            "onUpdate:show": N
        }, {
            default: $e
        }) : $e()
    }
});
const C0 = G(S0)
  , [x0,Mo] = W("image")
  , _0 = {
    src: String,
    alt: String,
    fit: String,
    position: String,
    round: Boolean,
    block: Boolean,
    width: q,
    height: q,
    radius: q,
    lazyLoad: Boolean,
    iconSize: q,
    showError: z,
    errorIcon: X("photo-fail"),
    iconPrefix: String,
    showLoading: z,
    loadingIcon: X("photo"),
    crossorigin: String,
    referrerpolicy: String
};
var k0 = j({
    name: x0,
    props: _0,
    emits: ["load", "error"],
    setup(e, {emit: t, slots: n}) {
        const o = R(!1)
          , r = R(!0)
          , a = R()
          , {$Lazyload: i} = en().proxy
          , l = D(()=>{
            const b = {
                width: Se(e.width),
                height: Se(e.height)
            };
            return De(e.radius) && (b.overflow = "hidden",
            b.borderRadius = Se(e.radius)),
            b
        }
        );
        oe(()=>e.src, ()=>{
            o.value = !1,
            r.value = !0
        }
        );
        const s = b=>{
            r.value && (r.value = !1,
            t("load", b))
        }
          , c = ()=>{
            const b = new Event("load");
            Object.defineProperty(b, "target", {
                value: a.value,
                enumerable: !0
            }),
            s(b)
        }
          , u = b=>{
            o.value = !0,
            r.value = !1,
            t("error", b)
        }
          , f = (b,v,g)=>g ? g() : d(Ce, {
            name: b,
            size: e.iconSize,
            class: v,
            classPrefix: e.iconPrefix
        }, null)
          , h = ()=>{
            if (r.value && e.showLoading)
                return d("div", {
                    class: Mo("loading")
                }, [f(e.loadingIcon, Mo("loading-icon"), n.loading)]);
            if (o.value && e.showError)
                return d("div", {
                    class: Mo("error")
                }, [f(e.errorIcon, Mo("error-icon"), n.error)])
        }
          , m = ()=>{
            if (o.value || !e.src)
                return;
            const b = {
                alt: e.alt,
                class: Mo("img"),
                style: {
                    objectFit: e.fit,
                    objectPosition: e.position
                },
                crossorigin: e.crossorigin,
                referrerpolicy: e.referrerpolicy
            };
            return e.lazyLoad ? st(d("img", Ae({
                ref: a
            }, b), null), [[mm("lazy"), e.src]]) : d("img", Ae({
                ref: a,
                src: e.src,
                onLoad: s,
                onError: u
            }, b), null)
        }
          , w = ({el: b})=>{
            const v = ()=>{
                b === a.value && r.value && c()
            }
            ;
            a.value ? v() : Te(v)
        }
          , C = ({el: b})=>{
            b === a.value && !o.value && u()
        }
        ;
        return i && It && (i.$on("loaded", w),
        i.$on("error", C),
        bn(()=>{
            i.$off("loaded", w),
            i.$off("error", C)
        }
        )),
        tt(()=>{
            Te(()=>{
                var b;
                (b = a.value) != null && b.complete && !e.lazyLoad && c()
            }
            )
        }
        ),
        ()=>{
            var b;
            return d("div", {
                class: Mo({
                    round: e.round,
                    block: e.block
                }),
                style: l.value
            }, [m(), h(), (b = n.default) == null ? void 0 : b.call(n)])
        }
    }
});
const bi = G(k0)
  , [T0,Ct] = W("card")
  , P0 = {
    tag: String,
    num: q,
    desc: String,
    thumb: String,
    title: String,
    price: q,
    centered: Boolean,
    lazyLoad: Boolean,
    currency: X("¥"),
    thumbLink: String,
    originPrice: q
};
var E0 = j({
    name: T0,
    props: P0,
    emits: ["clickThumb"],
    setup(e, {slots: t, emit: n}) {
        const o = ()=>{
            if (t.title)
                return t.title();
            if (e.title)
                return d("div", {
                    class: [Ct("title"), "van-multi-ellipsis--l2"]
                }, [e.title])
        }
          , r = ()=>{
            if (t.tag || e.tag)
                return d("div", {
                    class: Ct("tag")
                }, [t.tag ? t.tag() : d(vi, {
                    mark: !0,
                    type: "primary"
                }, {
                    default: ()=>[e.tag]
                })])
        }
          , a = ()=>t.thumb ? t.thumb() : d(bi, {
            src: e.thumb,
            fit: "cover",
            width: "100%",
            height: "100%",
            lazyLoad: e.lazyLoad
        }, null)
          , i = ()=>{
            if (t.thumb || e.thumb)
                return d("a", {
                    href: e.thumbLink,
                    class: Ct("thumb"),
                    onClick: c=>n("clickThumb", c)
                }, [a(), r()])
        }
          , l = ()=>{
            if (t.desc)
                return t.desc();
            if (e.desc)
                return d("div", {
                    class: [Ct("desc"), "van-ellipsis"]
                }, [e.desc])
        }
          , s = ()=>{
            const c = e.price.toString().split(".");
            return d("div", null, [d("span", {
                class: Ct("price-currency")
            }, [e.currency]), d("span", {
                class: Ct("price-integer")
            }, [c[0]]), Ie("."), d("span", {
                class: Ct("price-decimal")
            }, [c[1]])])
        }
        ;
        return ()=>{
            var c, u, f;
            const h = t.num || De(e.num)
              , m = t.price || De(e.price)
              , w = t["origin-price"] || De(e.originPrice)
              , C = h || m || w || t.bottom
              , b = m && d("div", {
                class: Ct("price")
            }, [t.price ? t.price() : s()])
              , v = w && d("div", {
                class: Ct("origin-price")
            }, [t["origin-price"] ? t["origin-price"]() : `${e.currency} ${e.originPrice}`])
              , g = h && d("div", {
                class: Ct("num")
            }, [t.num ? t.num() : `x${e.num}`])
              , p = t.footer && d("div", {
                class: Ct("footer")
            }, [t.footer()])
              , y = C && d("div", {
                class: Ct("bottom")
            }, [(c = t["price-top"]) == null ? void 0 : c.call(t), b, v, g, (u = t.bottom) == null ? void 0 : u.call(t)]);
            return d("div", {
                class: Ct()
            }, [d("div", {
                class: Ct("header")
            }, [i(), d("div", {
                class: Ct("content", {
                    centered: e.centered
                })
            }, [d("div", null, [o(), l(), (f = t.tags) == null ? void 0 : f.call(t)]), y])]), p])
        }
    }
});
const A0 = G(E0)
  , [O0,pn,B0] = W("cascader")
  , $0 = {
    title: String,
    options: Ye(),
    closeable: z,
    swipeable: z,
    closeIcon: X("cross"),
    showHeader: z,
    modelValue: q,
    fieldNames: Object,
    placeholder: String,
    activeColor: String
};
var D0 = j({
    name: O0,
    props: $0,
    emits: ["close", "change", "finish", "clickTab", "update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const o = R([])
          , r = R(0)
          , [a,i] = ea()
          , {text: l, value: s, children: c} = ve({
            text: "text",
            value: "value",
            children: "children"
        }, e.fieldNames)
          , u = (S,_)=>{
            for (const O of S) {
                if (O[s] === _)
                    return [O];
                if (O[c]) {
                    const x = u(O[c], _);
                    if (x)
                        return [O, ...x]
                }
            }
        }
          , f = ()=>{
            const {options: S, modelValue: _} = e;
            if (_ !== void 0) {
                const O = u(S, _);
                if (O) {
                    let x = S;
                    o.value = O.map(B=>{
                        const $ = {
                            options: x,
                            selected: B
                        }
                          , k = x.find(E=>E[s] === B[s]);
                        return k && (x = k[c]),
                        $
                    }
                    ),
                    x && o.value.push({
                        options: x,
                        selected: null
                    }),
                    Te(()=>{
                        r.value = o.value.length - 1
                    }
                    );
                    return
                }
            }
            o.value = [{
                options: S,
                selected: null
            }]
        }
          , h = (S,_)=>{
            if (S.disabled)
                return;
            if (o.value[_].selected = S,
            o.value.length > _ + 1 && (o.value = o.value.slice(0, _ + 1)),
            S[c]) {
                const B = {
                    options: S[c],
                    selected: null
                };
                o.value[_ + 1] ? o.value[_ + 1] = B : o.value.push(B),
                Te(()=>{
                    r.value++
                }
                )
            }
            const O = o.value.map(B=>B.selected).filter(Boolean);
            n("update:modelValue", S[s]);
            const x = {
                value: S[s],
                tabIndex: _,
                selectedOptions: O
            };
            n("change", x),
            S[c] || n("finish", x)
        }
          , m = ()=>n("close")
          , w = ({name: S, title: _})=>n("clickTab", S, _)
          , C = ()=>e.showHeader ? d("div", {
            class: pn("header")
        }, [d("h2", {
            class: pn("title")
        }, [t.title ? t.title() : e.title]), e.closeable ? d(Ce, {
            name: e.closeIcon,
            class: [pn("close-icon"), yt],
            onClick: m
        }, null) : null]) : null
          , b = (S,_,O)=>{
            const {disabled: x} = S
              , B = !!(_ && S[s] === _[s])
              , $ = S.color || (B ? e.activeColor : void 0)
              , k = t.option ? t.option({
                option: S,
                selected: B
            }) : d("span", null, [S[l]]);
            return d("li", {
                ref: B ? i(O) : void 0,
                role: "menuitemradio",
                class: [pn("option", {
                    selected: B,
                    disabled: x
                }), S.className],
                style: {
                    color: $
                },
                tabindex: x ? void 0 : B ? 0 : -1,
                "aria-checked": B,
                "aria-disabled": x || void 0,
                onClick: ()=>h(S, O)
            }, [k, B ? d(Ce, {
                name: "success",
                class: pn("selected-icon")
            }, null) : null])
        }
          , v = (S,_,O)=>d("ul", {
            role: "menu",
            class: pn("options")
        }, [S.map(x=>b(x, _, O))])
          , g = (S,_)=>{
            const {options: O, selected: x} = S
              , B = e.placeholder || B0("select")
              , $ = x ? x[l] : B;
            return d(qr, {
                title: $,
                titleClass: pn("tab", {
                    unselected: !x
                })
            }, {
                default: ()=>{
                    var k, E;
                    return [(k = t["options-top"]) == null ? void 0 : k.call(t, {
                        tabIndex: _
                    }), v(O, x, _), (E = t["options-bottom"]) == null ? void 0 : E.call(t, {
                        tabIndex: _
                    })]
                }
            })
        }
          , p = ()=>d(fi, {
            active: r.value,
            "onUpdate:active": S=>r.value = S,
            shrink: !0,
            animated: !0,
            class: pn("tabs"),
            color: e.activeColor,
            swipeable: e.swipeable,
            onClickTab: w
        }, {
            default: ()=>[o.value.map(g)]
        })
          , y = S=>{
            const _ = S.parentElement;
            _ && (_.scrollTop = S.offsetTop - (_.offsetHeight - S.offsetHeight) / 2)
        }
        ;
        return f(),
        oe(r, S=>{
            const _ = a.value[S];
            _ && y(_)
        }
        ),
        oe(()=>e.options, f, {
            deep: !0
        }),
        oe(()=>e.modelValue, S=>{
            S !== void 0 && o.value.map(O=>{
                var x;
                return (x = O.selected) == null ? void 0 : x[s]
            }
            ).includes(S) || f()
        }
        ),
        ()=>d("div", {
            class: pn()
        }, [C(), p()])
    }
});
const I0 = G(D0)
  , [R0,nu] = W("cell-group")
  , L0 = {
    title: String,
    inset: Boolean,
    border: z
};
var M0 = j({
    name: R0,
    inheritAttrs: !1,
    props: L0,
    setup(e, {slots: t, attrs: n}) {
        const o = ()=>{
            var a;
            return d("div", Ae({
                class: [nu({
                    inset: e.inset
                }), {
                    [si]: e.border && !e.inset
                }]
            }, n, Ua()), [(a = t.default) == null ? void 0 : a.call(t)])
        }
          , r = ()=>d("div", {
            class: nu("title", {
                inset: e.inset
            })
        }, [t.title ? t.title() : e.title]);
        return ()=>e.title || t.title ? d(Fe, null, [r(), o()]) : o()
    }
});
const F0 = G(M0)
  , [V0,ba] = W("circle");
let N0 = 0;
const ou = e=>Math.min(Math.max(+e, 0), 100);
function H0(e, t) {
    const n = e ? 1 : 0;
    return `M ${t / 2} ${t / 2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`
}
const z0 = {
    text: String,
    size: q,
    fill: X("none"),
    rate: ce(100),
    speed: ce(0),
    color: [String, Object],
    clockwise: z,
    layerColor: String,
    currentRate: ot(0),
    strokeWidth: ce(40),
    strokeLinecap: String,
    startPosition: X("top")
};
var j0 = j({
    name: V0,
    props: z0,
    emits: ["update:currentRate"],
    setup(e, {emit: t, slots: n}) {
        const o = `van-circle-${N0++}`
          , r = D(()=>+e.strokeWidth + 1e3)
          , a = D(()=>H0(e.clockwise, r.value))
          , i = D(()=>{
            const h = {
                top: 0,
                right: 90,
                bottom: 180,
                left: 270
            }[e.startPosition];
            if (h)
                return {
                    transform: `rotate(${h}deg)`
                }
        }
        );
        oe(()=>e.rate, f=>{
            let h;
            const m = Date.now()
              , w = e.currentRate
              , C = ou(f)
              , b = Math.abs((w - C) * 1e3 / +e.speed)
              , v = ()=>{
                const g = Date.now()
                  , y = Math.min((g - m) / b, 1) * (C - w) + w;
                t("update:currentRate", ou(parseFloat(y.toFixed(1)))),
                (C > w ? y < C : y > C) && (h = bt(v))
            }
            ;
            e.speed ? (h && ii(h),
            h = bt(v)) : t("update:currentRate", C)
        }
        , {
            immediate: !0
        });
        const l = ()=>{
            const {strokeWidth: h, currentRate: m, strokeLinecap: w} = e
              , C = 3140 * m / 100
              , b = hn(e.color) ? `url(#${o})` : e.color
              , v = {
                stroke: b,
                strokeWidth: `${+h + 1}px`,
                strokeLinecap: w,
                strokeDasharray: `${C}px 3140px`
            };
            return d("path", {
                d: a.value,
                style: v,
                class: ba("hover"),
                stroke: b
            }, null)
        }
          , s = ()=>{
            const f = {
                fill: e.fill,
                stroke: e.layerColor,
                strokeWidth: `${e.strokeWidth}px`
            };
            return d("path", {
                class: ba("layer"),
                style: f,
                d: a.value
            }, null)
        }
          , c = ()=>{
            const {color: f} = e;
            if (!hn(f))
                return;
            const h = Object.keys(f).sort((m,w)=>parseFloat(m) - parseFloat(w)).map((m,w)=>d("stop", {
                key: w,
                offset: m,
                "stop-color": f[m]
            }, null));
            return d("defs", null, [d("linearGradient", {
                id: o,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
            }, [h])])
        }
          , u = ()=>{
            if (n.default)
                return n.default();
            if (e.text)
                return d("div", {
                    class: ba("text")
                }, [e.text])
        }
        ;
        return ()=>d("div", {
            class: ba(),
            style: $n(e.size)
        }, [d("svg", {
            viewBox: `0 0 ${r.value} ${r.value}`,
            style: i.value
        }, [c(), s(), l()]), u()])
    }
});
const U0 = G(j0)
  , [uh,W0] = W("row")
  , dh = Symbol(uh)
  , Y0 = {
    tag: X("div"),
    wrap: z,
    align: String,
    gutter: {
        type: [String, Number, Array],
        default: 0
    },
    justify: String
};
var q0 = j({
    name: uh,
    props: Y0,
    setup(e, {slots: t}) {
        const {children: n, linkChildren: o} = wt(dh)
          , r = D(()=>{
            const l = [[]];
            let s = 0;
            return n.forEach((c,u)=>{
                s += Number(c.span),
                s > 24 ? (l.push([u]),
                s -= 24) : l[l.length - 1].push(u)
            }
            ),
            l
        }
        )
          , a = D(()=>{
            let l = 0;
            Array.isArray(e.gutter) ? l = Number(e.gutter[0]) || 0 : l = Number(e.gutter);
            const s = [];
            return l && r.value.forEach(c=>{
                const u = l * (c.length - 1) / c.length;
                c.forEach((f,h)=>{
                    if (h === 0)
                        s.push({
                            right: u
                        });
                    else {
                        const m = l - s[f - 1].right
                          , w = u - m;
                        s.push({
                            left: m,
                            right: w
                        })
                    }
                }
                )
            }
            ),
            s
        }
        )
          , i = D(()=>{
            const {gutter: l} = e
              , s = [];
            if (Array.isArray(l) && l.length > 1) {
                const c = Number(l[1]) || 0;
                if (c <= 0)
                    return s;
                r.value.forEach((u,f)=>{
                    f !== r.value.length - 1 && u.forEach(()=>{
                        s.push({
                            bottom: c
                        })
                    }
                    )
                }
                )
            }
            return s
        }
        );
        return o({
            spaces: a,
            verticalSpaces: i
        }),
        ()=>{
            const {tag: l, wrap: s, align: c, justify: u} = e;
            return d(l, {
                class: W0({
                    [`align-${c}`]: c,
                    [`justify-${u}`]: u,
                    nowrap: !s
                })
            }, {
                default: ()=>{
                    var f;
                    return [(f = t.default) == null ? void 0 : f.call(t)]
                }
            })
        }
    }
});
const [K0,G0] = W("col")
  , X0 = {
    tag: X("div"),
    span: ce(0),
    offset: q
};
var Q0 = j({
    name: K0,
    props: X0,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = gt(dh)
          , r = D(()=>{
            if (!n)
                return;
            const {spaces: a, verticalSpaces: i} = n;
            let l = {};
            if (a && a.value && a.value[o.value]) {
                const {left: c, right: u} = a.value[o.value];
                l = {
                    paddingLeft: c ? `${c}px` : null,
                    paddingRight: u ? `${u}px` : null
                }
            }
            const {bottom: s} = i.value[o.value] || {};
            return ve(l, {
                marginBottom: s ? `${s}px` : null
            })
        }
        );
        return ()=>{
            const {tag: a, span: i, offset: l} = e;
            return d(a, {
                style: r.value,
                class: G0({
                    [i]: i,
                    [`offset-${l}`]: l
                })
            }, {
                default: ()=>{
                    var s;
                    return [(s = t.default) == null ? void 0 : s.call(t)]
                }
            })
        }
    }
});
const Z0 = G(Q0)
  , [fh,J0] = W("collapse")
  , hh = Symbol(fh)
  , ew = {
    border: z,
    accordion: Boolean,
    modelValue: {
        type: [String, Number, Array],
        default: ""
    }
};
var tw = j({
    name: fh,
    props: ew,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o, children: r} = wt(hh)
          , a = c=>{
            t("change", c),
            t("update:modelValue", c)
        }
          , i = (c,u)=>{
            const {accordion: f, modelValue: h} = e;
            a(f ? c === h ? "" : c : u ? h.concat(c) : h.filter(m=>m !== c))
        }
          , l = (c={})=>{
            if (e.accordion)
                return;
            typeof c == "boolean" && (c = {
                expanded: c
            });
            const {expanded: u, skipDisabled: f} = c
              , m = r.filter(w=>w.disabled && f ? w.expanded.value : u ?? !w.expanded.value).map(w=>w.itemName.value);
            a(m)
        }
          , s = c=>{
            const {accordion: u, modelValue: f} = e;
            return u ? f === c : f.includes(c)
        }
        ;
        return Oe({
            toggleAll: l
        }),
        o({
            toggle: i,
            isExpanded: s
        }),
        ()=>{
            var c;
            return d("div", {
                class: [J0(), {
                    [si]: e.border
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
    }
});
const nw = G(tw)
  , [ow,ya] = W("collapse-item")
  , rw = ["icon", "title", "value", "label", "right-icon"]
  , aw = ve({}, mi, {
    name: q,
    isLink: z,
    disabled: Boolean,
    readonly: Boolean,
    lazyRender: z
});
var iw = j({
    name: ow,
    props: aw,
    setup(e, {slots: t}) {
        const n = R()
          , o = R()
          , {parent: r, index: a} = gt(hh);
        if (!r)
            return;
        const i = D(()=>{
            var C;
            return (C = e.name) != null ? C : a.value
        }
        )
          , l = D(()=>r.isExpanded(i.value))
          , s = R(l.value)
          , c = hs(()=>s.value || !e.lazyRender)
          , u = ()=>{
            l.value ? n.value && (n.value.style.height = "") : s.value = !1
        }
        ;
        oe(l, (C,b)=>{
            if (b === null)
                return;
            C && (s.value = !0),
            (C ? Te : bt)(()=>{
                if (!o.value || !n.value)
                    return;
                const {offsetHeight: g} = o.value;
                if (g) {
                    const p = `${g}px`;
                    n.value.style.height = C ? "0" : p,
                    Jn(()=>{
                        n.value && (n.value.style.height = C ? p : "0")
                    }
                    )
                } else
                    u()
            }
            )
        }
        );
        const f = (C=!l.value)=>{
            r.toggle(i.value, C)
        }
          , h = ()=>{
            !e.disabled && !e.readonly && f()
        }
          , m = ()=>{
            const {border: C, disabled: b, readonly: v} = e
              , g = Le(e, Object.keys(mi));
            return v && (g.isLink = !1),
            (b || v) && (g.clickable = !1),
            d(nn, Ae({
                role: "button",
                class: ya("title", {
                    disabled: b,
                    expanded: l.value,
                    borderless: !C
                }),
                "aria-expanded": String(l.value),
                onClick: h
            }, g), Le(t, rw))
        }
          , w = c(()=>{
            var C;
            return st(d("div", {
                ref: n,
                class: ya("wrapper"),
                onTransitionend: u
            }, [d("div", {
                ref: o,
                class: ya("content")
            }, [(C = t.default) == null ? void 0 : C.call(t)])]), [[ft, s.value]])
        }
        );
        return Oe({
            toggle: f,
            expanded: l,
            itemName: i
        }),
        ()=>d("div", {
            class: [ya({
                border: a.value && e.border
            })]
        }, [m(), w()])
    }
});
const lw = G(iw)
  , sw = G(Tb)
  , [cw,ru,Ui] = W("contact-card")
  , uw = {
    tel: String,
    name: String,
    type: X("add"),
    addText: String,
    editable: z
};
var dw = j({
    name: cw,
    props: uw,
    emits: ["click"],
    setup(e, {emit: t}) {
        const n = r=>{
            e.editable && t("click", r)
        }
          , o = ()=>e.type === "add" ? e.addText || Ui("addContact") : [d("div", null, [`${Ui("name")}：${e.name}`]), d("div", null, [`${Ui("tel")}：${e.tel}`])];
        return ()=>d(nn, {
            center: !0,
            icon: e.type === "edit" ? "contact" : "add-square",
            class: ru([e.type]),
            border: !1,
            isLink: e.editable,
            titleClass: ru("title"),
            onClick: n
        }, {
            title: o
        })
    }
});
const fw = G(dw)
  , [hw,Fo,Hn] = W("contact-edit")
  , Al = {
    tel: "",
    name: ""
}
  , gw = {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
        type: Object,
        default: ()=>ve({}, Al)
    },
    telValidator: {
        type: Function,
        default: Ju
    }
};
var mw = j({
    name: hw,
    props: gw,
    emits: ["save", "delete", "changeDefault"],
    setup(e, {emit: t}) {
        const n = Ke(ve({}, Al, e.contactInfo))
          , o = ()=>{
            e.isSaving || t("save", n)
        }
          , r = ()=>t("delete", n)
          , a = ()=>d("div", {
            class: Fo("buttons")
        }, [d(pt, {
            block: !0,
            round: !0,
            type: "primary",
            text: Hn("save"),
            class: Fo("button"),
            loading: e.isSaving,
            nativeType: "submit"
        }, null), e.isEdit && d(pt, {
            block: !0,
            round: !0,
            text: Hn("delete"),
            class: Fo("button"),
            loading: e.isDeleting,
            onClick: r
        }, null)])
          , i = ()=>d(Ss, {
            modelValue: n.isDefault,
            "onUpdate:modelValue": s=>n.isDefault = s,
            onChange: s=>t("changeDefault", s)
        }, null)
          , l = ()=>{
            if (e.showSetDefault)
                return d(nn, {
                    title: e.setDefaultLabel,
                    class: Fo("switch-cell"),
                    border: !1
                }, {
                    "right-icon": i
                })
        }
        ;
        return oe(()=>e.contactInfo, s=>ve(n, Al, s)),
        ()=>d(bs, {
            class: Fo(),
            onSubmit: o
        }, {
            default: ()=>[d("div", {
                class: Fo("fields")
            }, [d(Tn, {
                modelValue: n.name,
                "onUpdate:modelValue": s=>n.name = s,
                clearable: !0,
                label: Hn("name"),
                rules: [{
                    required: !0,
                    message: Hn("nameEmpty")
                }],
                maxlength: "30",
                placeholder: Hn("name")
            }, null), d(Tn, {
                modelValue: n.tel,
                "onUpdate:modelValue": s=>n.tel = s,
                clearable: !0,
                type: "tel",
                label: Hn("tel"),
                rules: [{
                    validator: e.telValidator,
                    message: Hn("telInvalid")
                }],
                placeholder: Hn("tel")
            }, null)]), l(), a()]
        })
    }
});
const vw = G(mw)
  , [bw,wn,yw] = W("contact-list")
  , pw = {
    list: Array,
    addText: String,
    modelValue: Xe,
    defaultTagText: String
};
var ww = j({
    name: bw,
    props: pw,
    emits: ["add", "edit", "select", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (o,r)=>{
            const a = ()=>{
                t("update:modelValue", o.id),
                t("select", o, r)
            }
              , i = ()=>d(_s, {
                class: wn("radio"),
                name: o.id,
                iconSize: 18
            }, null)
              , l = ()=>d(Ce, {
                name: "edit",
                class: wn("edit"),
                onClick: c=>{
                    c.stopPropagation(),
                    t("edit", o, r)
                }
            }, null)
              , s = ()=>{
                const c = [`${o.name}，${o.tel}`];
                return o.isDefault && e.defaultTagText && c.push(d(vi, {
                    type: "primary",
                    round: !0,
                    class: wn("item-tag")
                }, {
                    default: ()=>[e.defaultTagText]
                })),
                c
            }
            ;
            return d(nn, {
                key: o.id,
                isLink: !0,
                center: !0,
                class: wn("item"),
                titleClass: wn("item-title"),
                onClick: a
            }, {
                icon: l,
                title: s,
                "right-icon": i
            })
        }
        ;
        return ()=>d("div", {
            class: wn()
        }, [d(Cs, {
            modelValue: e.modelValue,
            class: wn("group")
        }, {
            default: ()=>[e.list && e.list.map(n)]
        }), d("div", {
            class: [wn("bottom"), "van-safe-area-bottom"]
        }, [d(pt, {
            round: !0,
            block: !0,
            type: "primary",
            class: wn("add"),
            text: e.addText || yw("addContact"),
            onClick: ()=>t("add")
        }, null)])])
    }
});
const Sw = G(ww);
function Cw(e, t) {
    const {days: n} = t;
    let {hours: o, minutes: r, seconds: a, milliseconds: i} = t;
    if (e.includes("DD") ? e = e.replace("DD", qt(n)) : o += n * 24,
    e.includes("HH") ? e = e.replace("HH", qt(o)) : r += o * 60,
    e.includes("mm") ? e = e.replace("mm", qt(r)) : a += r * 60,
    e.includes("ss") ? e = e.replace("ss", qt(a)) : i += a * 1e3,
    e.includes("S")) {
        const l = qt(i, 3);
        e.includes("SSS") ? e = e.replace("SSS", l) : e.includes("SS") ? e = e.replace("SS", l.slice(0, 2)) : e = e.replace("S", l.charAt(0))
    }
    return e
}
const [xw,_w] = W("count-down")
  , kw = {
    time: ce(0),
    format: X("HH:mm:ss"),
    autoStart: z,
    millisecond: Boolean
};
var Tw = j({
    name: xw,
    props: kw,
    emits: ["change", "finish"],
    setup(e, {emit: t, slots: n}) {
        const {start: o, pause: r, reset: a, current: i} = qv({
            time: +e.time,
            millisecond: e.millisecond,
            onChange: c=>t("change", c),
            onFinish: ()=>t("finish")
        })
          , l = D(()=>Cw(e.format, i.value))
          , s = ()=>{
            a(+e.time),
            e.autoStart && o()
        }
        ;
        return oe(()=>e.time, s, {
            immediate: !0
        }),
        Oe({
            start: o,
            pause: r,
            reset: s
        }),
        ()=>d("div", {
            role: "timer",
            class: _w()
        }, [n.default ? n.default(i.value) : l.value])
    }
});
const Pw = G(Tw);
function au(e) {
    const t = new Date(e * 1e3);
    return `${t.getFullYear()}.${qt(t.getMonth() + 1)}.${qt(t.getDate())}`
}
const Ew = e=>(e / 10).toFixed(e % 10 === 0 ? 0 : 1)
  , iu = e=>(e / 100).toFixed(e % 100 === 0 ? 0 : e % 10 === 0 ? 1 : 2)
  , [Aw,ln,Wi] = W("coupon");
var Ow = j({
    name: Aw,
    props: {
        chosen: Boolean,
        coupon: dt(Object),
        disabled: Boolean,
        currency: X("¥")
    },
    setup(e) {
        const t = D(()=>{
            const {startAt: r, endAt: a} = e.coupon;
            return `${au(r)} - ${au(a)}`
        }
        )
          , n = D(()=>{
            const {coupon: r, currency: a} = e;
            if (r.valueDesc)
                return [r.valueDesc, d("span", null, [r.unitDesc || ""])];
            if (r.denominations) {
                const i = iu(r.denominations);
                return [d("span", null, [a]), ` ${i}`]
            }
            return r.discount ? Wi("discount", Ew(r.discount)) : ""
        }
        )
          , o = D(()=>{
            const r = iu(e.coupon.originCondition || 0);
            return r === "0" ? Wi("unlimited") : Wi("condition", r)
        }
        );
        return ()=>{
            const {chosen: r, coupon: a, disabled: i} = e
              , l = i && a.reason || a.description;
            return d("div", {
                class: ln({
                    disabled: i
                })
            }, [d("div", {
                class: ln("content")
            }, [d("div", {
                class: ln("head")
            }, [d("h2", {
                class: ln("amount")
            }, [n.value]), d("p", {
                class: ln("condition")
            }, [a.condition || o.value])]), d("div", {
                class: ln("body")
            }, [d("p", {
                class: ln("name")
            }, [a.name]), d("p", {
                class: ln("valid")
            }, [t.value]), !i && d(ks, {
                class: ln("corner"),
                modelValue: r
            }, null)])]), l && d("p", {
                class: ln("description")
            }, [l])])
        }
    }
});
const Ol = G(Ow)
  , [Bw,lu,Bl] = W("coupon-cell")
  , $w = {
    title: String,
    border: z,
    editable: z,
    coupons: Ye(),
    currency: X("¥"),
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
}
  , Dw = e=>{
    const {value: t, denominations: n} = e;
    return De(t) ? t : De(n) ? n : 0
}
;
function Iw({coupons: e, chosenCoupon: t, currency: n}) {
    let o = 0
      , r = !1;
    return (Array.isArray(t) ? t : [t]).forEach(a=>{
        const i = e[+a];
        i && (r = !0,
        o += Dw(i))
    }
    ),
    r ? `-${n} ${(o / 100).toFixed(2)}` : e.length === 0 ? Bl("noCoupon") : Bl("count", e.length)
}
var Rw = j({
    name: Bw,
    props: $w,
    setup(e) {
        return ()=>{
            const t = Array.isArray(e.chosenCoupon) ? e.chosenCoupon.length : e.coupons[+e.chosenCoupon];
            return d(nn, {
                class: lu(),
                value: Iw(e),
                title: e.title || Bl("title"),
                border: e.border,
                isLink: e.editable,
                valueClass: lu("value", {
                    selected: t
                })
            }, null)
        }
    }
});
const Lw = G(Rw)
  , [Mw,pa] = W("empty")
  , Fw = {
    image: X("default"),
    imageSize: [Number, String, Array],
    description: String
};
var Vw = j({
    name: Mw,
    props: Fw,
    setup(e, {slots: t}) {
        const n = ()=>{
            const v = t.description ? t.description() : e.description;
            if (v)
                return d("p", {
                    class: pa("description")
                }, [v])
        }
          , o = ()=>{
            if (t.default)
                return d("div", {
                    class: pa("bottom")
                }, [t.default()])
        }
          , r = fr()
          , a = v=>`${r}-${v}`
          , i = v=>`url(#${a(v)})`
          , l = (v,g,p)=>d("stop", {
            "stop-color": v,
            offset: `${g}%`,
            "stop-opacity": p
        }, null)
          , s = (v,g)=>[l(v, 0), l(g, 100)]
          , c = v=>[d("defs", null, [d("radialGradient", {
            id: a(v),
            cx: "50%",
            cy: "54%",
            fx: "50%",
            fy: "54%",
            r: "297%",
            gradientTransform: "matrix(-.16 0 0 -.33 .58 .72)"
        }, [l("#EBEDF0", 0), l("#F2F3F5", 100, .3)])]), d("ellipse", {
            fill: i(v),
            opacity: ".8",
            cx: "80",
            cy: "140",
            rx: "46",
            ry: "8"
        }, null)]
          , u = ()=>[d("defs", null, [d("linearGradient", {
            id: a("a"),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [l("#FFF", 0, .5), l("#F2F3F5", 100)])]), d("g", {
            opacity: ".8"
        }, [d("path", {
            d: "M36 131V53H16v20H2v58h34z",
            fill: i("a")
        }, null), d("path", {
            d: "M123 15h22v14h9v77h-31V15z",
            fill: i("a")
        }, null)])]
          , f = ()=>[d("defs", null, [d("linearGradient", {
            id: a("b"),
            x1: "64%",
            y1: "97%",
            x2: "64%",
            y2: "0%"
        }, [l("#F2F3F5", 0, .3), l("#F2F3F5", 100)])]), d("g", {
            opacity: ".8"
        }, [d("path", {
            d: "M87 6c3 0 7 3 8 6a8 8 0 1 1-1 16H80a7 7 0 0 1-8-6c0-4 3-7 6-7 0-5 4-9 9-9Z",
            fill: i("b")
        }, null), d("path", {
            d: "M19 23c2 0 3 1 4 3 2 0 4 2 4 4a4 4 0 0 1-4 3v1h-7v-1l-1 1c-2 0-3-2-3-4 0-1 1-3 3-3 0-2 2-4 4-4Z",
            fill: i("b")
        }, null)])]
          , h = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            id: a(1),
            x1: "64%",
            y1: "100%",
            x2: "64%"
        }, [l("#FFF", 0, .5), l("#F2F3F5", 100)]), d("linearGradient", {
            id: a(2),
            x1: "50%",
            x2: "50%",
            y2: "84%"
        }, [l("#EBEDF0", 0), l("#DCDEE0", 100, 0)]), d("linearGradient", {
            id: a(3),
            x1: "100%",
            x2: "100%",
            y2: "100%"
        }, [s("#EAEDF0", "#DCDEE0")]), d("radialGradient", {
            id: a(4),
            cx: "50%",
            cy: "0%",
            fx: "50%",
            fy: "0%",
            r: "100%",
            gradientTransform: "matrix(0 1 -.54 0 .5 -.5)"
        }, [l("#EBEDF0", 0), l("#FFF", 100, 0)])]), d("g", {
            fill: "none"
        }, [u(), d("path", {
            fill: i(4),
            d: "M0 139h160v21H0z"
        }, null), d("path", {
            d: "M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z",
            fill: i(2)
        }, null), d("g", {
            opacity: ".6",
            "stroke-linecap": "round",
            "stroke-width": "7"
        }, [d("path", {
            d: "M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13",
            stroke: i(3)
        }, null), d("path", {
            d: "M53 36a34 34 0 0 0 0 48",
            stroke: i(3)
        }, null), d("path", {
            d: "M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13",
            stroke: i(3)
        }, null), d("path", {
            d: "M106 84a34 34 0 0 0 0-48",
            stroke: i(3)
        }, null)]), d("g", {
            transform: "translate(31 105)"
        }, [d("rect", {
            fill: "#EBEDF0",
            width: "98",
            height: "34",
            rx: "2"
        }, null), d("rect", {
            fill: "#FFF",
            x: "9",
            y: "8",
            width: "80",
            height: "18",
            rx: "1.1"
        }, null), d("rect", {
            fill: "#EBEDF0",
            x: "15",
            y: "12",
            width: "18",
            height: "6",
            rx: "1.1"
        }, null)])])])
          , m = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: a(5)
        }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "95%",
            y1: "48%",
            x2: "5.5%",
            y2: "51%",
            id: a(6)
        }, [s("#EAEDF1", "#DCDEE0")]), d("linearGradient", {
            y1: "45%",
            x2: "100%",
            y2: "54%",
            id: a(7)
        }, [s("#EAEDF1", "#DCDEE0")])]), u(), f(), d("g", {
            transform: "translate(36 50)",
            fill: "none"
        }, [d("g", {
            transform: "translate(8)"
        }, [d("rect", {
            fill: "#EBEDF0",
            opacity: ".6",
            x: "38",
            y: "13",
            width: "36",
            height: "53",
            rx: "2"
        }, null), d("rect", {
            fill: i(5),
            width: "64",
            height: "66",
            rx: "2"
        }, null), d("rect", {
            fill: "#FFF",
            x: "6",
            y: "6",
            width: "52",
            height: "55",
            rx: "1"
        }, null), d("g", {
            transform: "translate(15 17)",
            fill: i(6)
        }, [d("rect", {
            width: "34",
            height: "6",
            rx: "1"
        }, null), d("path", {
            d: "M0 14h34v6H0z"
        }, null), d("rect", {
            y: "28",
            width: "34",
            height: "6",
            rx: "1"
        }, null)])]), d("rect", {
            fill: i(7),
            y: "61",
            width: "88",
            height: "28",
            rx: "1"
        }, null), d("rect", {
            fill: "#F7F8FA",
            x: "29",
            y: "72",
            width: "30",
            height: "6",
            rx: "1"
        }, null)])])
          , w = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: a(8)
        }, [s("#EAEDF1", "#DCDEE0")])]), u(), f(), c("c"), d("path", {
            d: "m59 60 21 21 21-21h3l9 9v3L92 93l21 21v3l-9 9h-3l-21-21-21 21h-3l-9-9v-3l21-21-21-21v-3l9-9h3Z",
            fill: i(8)
        }, null)])
          , C = ()=>d("svg", {
            viewBox: "0 0 160 160"
        }, [d("defs", null, [d("linearGradient", {
            x1: "50%",
            y1: "100%",
            x2: "50%",
            id: a(9)
        }, [s("#EEE", "#D8D8D8")]), d("linearGradient", {
            x1: "100%",
            y1: "50%",
            y2: "50%",
            id: a(10)
        }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: a(11)
        }, [s("#F2F3F5", "#DCDEE0")]), d("linearGradient", {
            x1: "50%",
            x2: "50%",
            y2: "100%",
            id: a(12)
        }, [s("#FFF", "#F7F8FA")])]), u(), f(), c("d"), d("g", {
            transform: "rotate(-45 113 -4)",
            fill: "none"
        }, [d("rect", {
            fill: i(9),
            x: "24",
            y: "52.8",
            width: "5.8",
            height: "19",
            rx: "1"
        }, null), d("rect", {
            fill: i(10),
            x: "22.1",
            y: "67.3",
            width: "9.9",
            height: "28",
            rx: "1"
        }, null), d("circle", {
            stroke: i(11),
            "stroke-width": "8",
            cx: "27",
            cy: "27",
            r: "27"
        }, null), d("circle", {
            fill: i(12),
            cx: "27",
            cy: "27",
            r: "16"
        }, null), d("path", {
            d: "M37 7c-8 0-15 5-16 12",
            stroke: i(11),
            "stroke-width": "3",
            opacity: ".5",
            "stroke-linecap": "round",
            transform: "rotate(45 29 13)"
        }, null)])])
          , b = ()=>{
            var v;
            if (t.image)
                return t.image();
            const g = {
                error: w,
                search: C,
                network: h,
                default: m
            };
            return ((v = g[e.image]) == null ? void 0 : v.call(g)) || d("img", {
                src: e.image
            }, null)
        }
        ;
        return ()=>d("div", {
            class: pa()
        }, [d("div", {
            class: pa("image"),
            style: $n(e.imageSize)
        }, [b()]), n(), o()])
    }
});
const gh = G(Vw)
  , [Nw,sn,Vo] = W("coupon-list")
  , Hw = {
    code: X(""),
    coupons: Ye(),
    currency: X("¥"),
    showCount: z,
    emptyImage: String,
    enabledTitle: String,
    disabledTitle: String,
    disabledCoupons: Ye(),
    showExchangeBar: z,
    showCloseButton: z,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeMinLength: ot(1),
    exchangeButtonText: String,
    displayedCouponIndex: ot(-1),
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    chosenCoupon: {
        type: [Number, Array],
        default: -1
    }
};
var zw = j({
    name: Nw,
    props: Hw,
    emits: ["change", "exchange", "update:code"],
    setup(e, {emit: t, slots: n}) {
        const [o,r] = ea()
          , a = R()
          , i = R()
          , l = R(0)
          , s = R(0)
          , c = R(e.code)
          , u = D(()=>!e.exchangeButtonLoading && (e.exchangeButtonDisabled || !c.value || c.value.length < e.exchangeMinLength))
          , f = ()=>{
            const p = Ve(a).height
              , y = Ve(i).height + 44;
            s.value = (p > y ? p : Ht.value) - y
        }
          , h = ()=>{
            t("exchange", c.value),
            e.code || (c.value = "")
        }
          , m = g=>{
            Te(()=>{
                var p;
                return (p = o.value[g]) == null ? void 0 : p.scrollIntoView()
            }
            )
        }
          , w = ()=>d(gh, {
            image: e.emptyImage
        }, {
            default: ()=>[d("p", {
                class: sn("empty-tip")
            }, [Vo("noCoupon")])]
        })
          , C = ()=>{
            if (e.showExchangeBar)
                return d("div", {
                    ref: i,
                    class: sn("exchange-bar")
                }, [d(Tn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": g=>c.value = g,
                    clearable: !0,
                    border: !1,
                    class: sn("field"),
                    placeholder: e.inputPlaceholder || Vo("placeholder"),
                    maxlength: "20"
                }, null), d(pt, {
                    plain: !0,
                    type: "primary",
                    class: sn("exchange"),
                    text: e.exchangeButtonText || Vo("exchange"),
                    loading: e.exchangeButtonLoading,
                    disabled: u.value,
                    onClick: h
                }, null)])
        }
          , b = ()=>{
            const {coupons: g, chosenCoupon: p} = e
              , y = e.showCount ? ` (${g.length})` : ""
              , S = (e.enabledTitle || Vo("enable")) + y
              , _ = (O=[],x=0)=>O.includes(x) ? O.filter(B=>B !== x) : [...O, x];
            return d(qr, {
                title: S
            }, {
                default: ()=>{
                    var O;
                    return [d("div", {
                        class: sn("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${s.value}px`
                        }
                    }, [g.map((x,B)=>d(Ol, {
                        key: x.id,
                        ref: r(B),
                        coupon: x,
                        chosen: Array.isArray(p) ? p.includes(B) : B === p,
                        currency: e.currency,
                        onClick: ()=>t("change", Array.isArray(p) ? _(p, B) : B)
                    }, null)), !g.length && w(), (O = n["list-footer"]) == null ? void 0 : O.call(n)])]
                }
            })
        }
          , v = ()=>{
            const {disabledCoupons: g} = e
              , p = e.showCount ? ` (${g.length})` : ""
              , y = (e.disabledTitle || Vo("disabled")) + p;
            return d(qr, {
                title: y
            }, {
                default: ()=>{
                    var S;
                    return [d("div", {
                        class: sn("list", {
                            "with-bottom": e.showCloseButton
                        }),
                        style: {
                            height: `${s.value}px`
                        }
                    }, [g.map(_=>d(Ol, {
                        disabled: !0,
                        key: _.id,
                        coupon: _,
                        currency: e.currency
                    }, null)), !g.length && w(), (S = n["disabled-list-footer"]) == null ? void 0 : S.call(n)])]
                }
            })
        }
        ;
        return oe(()=>e.code, g=>{
            c.value = g
        }
        ),
        oe(Ht, f),
        oe(c, g=>t("update:code", g)),
        oe(()=>e.displayedCouponIndex, m),
        tt(()=>{
            f(),
            m(e.displayedCouponIndex)
        }
        ),
        ()=>d("div", {
            ref: a,
            class: sn()
        }, [C(), d(fi, {
            active: l.value,
            "onUpdate:active": g=>l.value = g,
            class: sn("tab")
        }, {
            default: ()=>[b(), v()]
        }), d("div", {
            class: sn("bottom")
        }, [n["list-button"] ? n["list-button"]() : st(d(pt, {
            round: !0,
            block: !0,
            type: "primary",
            class: sn("close"),
            text: e.closeButtonText || Vo("close"),
            onClick: ()=>t("change", Array.isArray(e.chosenCoupon) ? [] : -1)
        }, null), [[ft, e.showCloseButton]])])])
    }
});
const jw = G(zw)
  , su = new Date().getFullYear()
  , [Uw] = W("date-picker")
  , Ww = ve({}, ih, {
    columnsType: {
        type: Array,
        default: ()=>["year", "month", "day"]
    },
    minDate: {
        type: Date,
        default: ()=>new Date(su - 10,0,1),
        validator: Mr
    },
    maxDate: {
        type: Date,
        default: ()=>new Date(su + 10,11,31),
        validator: Mr
    }
});
var Yw = j({
    name: Uw,
    props: Ww,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.modelValue)
          , r = R(!1)
          , a = R()
          , i = ()=>{
            const y = e.minDate.getFullYear()
              , S = e.maxDate.getFullYear();
            return Qo(y, S, "year", e.formatter, e.filter)
        }
          , l = y=>y === e.minDate.getFullYear()
          , s = y=>y === e.maxDate.getFullYear()
          , c = y=>y === e.minDate.getMonth() + 1
          , u = y=>y === e.maxDate.getMonth() + 1
          , f = y=>{
            const {minDate: S, columnsType: _} = e
              , O = _.indexOf(y)
              , x = r.value ? e.modelValue[O] : o.value[O];
            if (x)
                return +x;
            switch (y) {
            case "year":
                return S.getFullYear();
            case "month":
                return S.getMonth() + 1;
            case "day":
                return S.getDate()
            }
        }
          , h = ()=>{
            const y = f("year")
              , S = l(y) ? e.minDate.getMonth() + 1 : 1
              , _ = s(y) ? e.maxDate.getMonth() + 1 : 12;
            return Qo(S, _, "month", e.formatter, e.filter)
        }
          , m = ()=>{
            const y = f("year")
              , S = f("month")
              , _ = l(y) && c(S) ? e.minDate.getDate() : 1
              , O = s(y) && u(S) ? e.maxDate.getDate() : sh(y, S);
            return Qo(_, O, "day", e.formatter, e.filter)
        }
          , w = ()=>{
            var y;
            return (y = a.value) == null ? void 0 : y.confirm()
        }
          , C = ()=>o.value
          , b = D(()=>e.columnsType.map(y=>{
            switch (y) {
            case "year":
                return i();
            case "month":
                return h();
            case "day":
                return m();
            default:
                return []
            }
        }
        ));
        oe(o, y=>{
            fn(y, e.modelValue) || t("update:modelValue", y)
        }
        ),
        oe(()=>e.modelValue, (y,S)=>{
            r.value = fn(S, o.value),
            y = ch(y, b.value),
            fn(y, o.value) || (o.value = y),
            r.value = !1
        }
        , {
            immediate: !0
        });
        const v = (...y)=>t("change", ...y)
          , g = (...y)=>t("cancel", ...y)
          , p = (...y)=>t("confirm", ...y);
        return Oe({
            confirm: w,
            getSelectedDate: C
        }),
        ()=>d(gi, Ae({
            ref: a,
            modelValue: o.value,
            "onUpdate:modelValue": y=>o.value = y,
            columns: b.value,
            onChange: v,
            onCancel: g,
            onConfirm: p
        }, Le(e, lh)), n)
    }
});
const qw = G(Yw)
  , [Kw,Ut,wa] = W("dialog")
  , Gw = ve({}, dr, {
    title: String,
    theme: String,
    width: q,
    message: [String, Function],
    callback: Function,
    allowHtml: Boolean,
    className: Xe,
    transition: X("van-dialog-bounce"),
    messageAlign: String,
    closeOnPopstate: z,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    cancelButtonDisabled: Boolean,
    confirmButtonText: String,
    confirmButtonColor: String,
    confirmButtonDisabled: Boolean,
    showConfirmButton: z,
    closeOnClickOverlay: Boolean
})
  , Xw = [...fs, "transition", "closeOnPopstate"];
var Qw = j({
    name: Kw,
    props: Gw,
    emits: ["confirm", "cancel", "keydown", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = Ke({
            confirm: !1,
            cancel: !1
        })
          , a = v=>t("update:show", v)
          , i = v=>{
            var g;
            a(!1),
            (g = e.callback) == null || g.call(e, v)
        }
          , l = v=>()=>{
            e.show && (t(v),
            e.beforeClose ? (r[v] = !0,
            co(e.beforeClose, {
                args: [v],
                done() {
                    i(v),
                    r[v] = !1
                },
                canceled() {
                    r[v] = !1
                }
            })) : i(v))
        }
          , s = l("cancel")
          , c = l("confirm")
          , u = Lv(v=>{
            var g, p;
            if (v.target !== ((p = (g = o.value) == null ? void 0 : g.popupRef) == null ? void 0 : p.value))
                return;
            ({
                Enter: e.showConfirmButton ? c : rl,
                Escape: e.showCancelButton ? s : rl
            })[v.key](),
            t("keydown", v)
        }
        , ["enter", "esc"])
          , f = ()=>{
            const v = n.title ? n.title() : e.title;
            if (v)
                return d("div", {
                    class: Ut("header", {
                        isolated: !e.message && !n.default
                    })
                }, [v])
        }
          , h = v=>{
            const {message: g, allowHtml: p, messageAlign: y} = e
              , S = Ut("message", {
                "has-title": v,
                [y]: y
            })
              , _ = er(g) ? g() : g;
            return p && typeof _ == "string" ? d("div", {
                class: S,
                innerHTML: _
            }, null) : d("div", {
                class: S
            }, [_])
        }
          , m = ()=>{
            if (n.default)
                return d("div", {
                    class: Ut("content")
                }, [n.default()]);
            const {title: v, message: g, allowHtml: p} = e;
            if (g) {
                const y = !!(v || n.title);
                return d("div", {
                    key: p ? 1 : 0,
                    class: Ut("content", {
                        isolated: !y
                    })
                }, [h(y)])
            }
        }
          , w = ()=>d("div", {
            class: [wf, Ut("footer")]
        }, [e.showCancelButton && d(pt, {
            size: "large",
            text: e.cancelButtonText || wa("cancel"),
            class: Ut("cancel"),
            style: {
                color: e.cancelButtonColor
            },
            loading: r.cancel,
            disabled: e.cancelButtonDisabled,
            onClick: s
        }, null), e.showConfirmButton && d(pt, {
            size: "large",
            text: e.confirmButtonText || wa("confirm"),
            class: [Ut("confirm"), {
                [Sf]: e.showCancelButton
            }],
            style: {
                color: e.confirmButtonColor
            },
            loading: r.confirm,
            disabled: e.confirmButtonDisabled,
            onClick: c
        }, null)])
          , C = ()=>d(Pf, {
            class: Ut("footer")
        }, {
            default: ()=>[e.showCancelButton && d(xl, {
                type: "warning",
                text: e.cancelButtonText || wa("cancel"),
                class: Ut("cancel"),
                color: e.cancelButtonColor,
                loading: r.cancel,
                disabled: e.cancelButtonDisabled,
                onClick: s
            }, null), e.showConfirmButton && d(xl, {
                type: "danger",
                text: e.confirmButtonText || wa("confirm"),
                class: Ut("confirm"),
                color: e.confirmButtonColor,
                loading: r.confirm,
                disabled: e.confirmButtonDisabled,
                onClick: c
            }, null)]
        })
          , b = ()=>n.footer ? n.footer() : e.theme === "round-button" ? C() : w();
        return ()=>{
            const {width: v, title: g, theme: p, message: y, className: S} = e;
            return d(Rt, Ae({
                ref: o,
                role: "dialog",
                class: [Ut([p]), S],
                style: {
                    width: Se(v)
                },
                tabindex: 0,
                "aria-labelledby": g || y,
                onKeydown: u,
                "onUpdate:show": a
            }, Le(e, Xw)), {
                default: ()=>[f(), m(), b()]
            })
        }
    }
});
const Zw = G(Qw)
  , [Jw,e1] = W("divider")
  , t1 = {
    dashed: Boolean,
    hairline: z,
    vertical: Boolean,
    contentPosition: X("center")
};
var n1 = j({
    name: Jw,
    props: t1,
    setup(e, {slots: t}) {
        return ()=>{
            var n;
            return d("div", {
                role: "separator",
                class: e1({
                    dashed: e.dashed,
                    hairline: e.hairline,
                    vertical: e.vertical,
                    [`content-${e.contentPosition}`]: !!t.default && !e.vertical
                })
            }, [!e.vertical && ((n = t.default) == null ? void 0 : n.call(t))])
        }
    }
});
const o1 = G(n1)
  , [mh,Sa] = W("dropdown-menu")
  , r1 = {
    overlay: z,
    zIndex: q,
    duration: ce(.2),
    direction: X("down"),
    activeColor: String,
    autoLocate: Boolean,
    closeOnClickOutside: z,
    closeOnClickOverlay: z,
    swipeThreshold: q
}
  , vh = Symbol(mh);
var a1 = j({
    name: mh,
    props: r1,
    setup(e, {slots: t}) {
        const n = fr()
          , o = R()
          , r = R()
          , a = R(0)
          , {children: i, linkChildren: l} = wt(vh)
          , s = ur(o)
          , c = D(()=>i.some(g=>g.state.showWrapper))
          , u = D(()=>e.swipeThreshold && i.length > +e.swipeThreshold)
          , f = D(()=>{
            if (c.value && De(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , h = ()=>{
            i.forEach(g=>{
                g.toggle(!1)
            }
            )
        }
          , m = ()=>{
            e.closeOnClickOutside && h()
        }
          , w = ()=>{
            if (r.value) {
                const g = Ve(r);
                e.direction === "down" ? a.value = g.bottom : a.value = Ht.value - g.top
            }
        }
          , C = ()=>{
            c.value && w()
        }
          , b = g=>{
            i.forEach((p,y)=>{
                y === g ? p.toggle() : p.state.showPopup && p.toggle(!1, {
                    immediate: !0
                })
            }
            )
        }
          , v = (g,p)=>{
            const {showPopup: y} = g.state
              , {disabled: S, titleClass: _} = g;
            return d("div", {
                id: `${n}-${p}`,
                role: "button",
                tabindex: S ? void 0 : 0,
                class: [Sa("item", {
                    disabled: S,
                    grow: u.value
                }), {
                    [yt]: !S
                }],
                onClick: ()=>{
                    S || b(p)
                }
            }, [d("span", {
                class: [Sa("title", {
                    down: y === (e.direction === "down"),
                    active: y
                }), _],
                style: {
                    color: y ? e.activeColor : ""
                }
            }, [d("div", {
                class: "van-ellipsis"
            }, [g.renderTitle()])])])
        }
        ;
        return Oe({
            close: h
        }),
        l({
            id: n,
            props: e,
            offset: a,
            updateOffset: w
        }),
        li(o, m),
        et("scroll", C, {
            target: s,
            passive: !0
        }),
        ()=>{
            var g;
            return d("div", {
                ref: o,
                class: Sa()
            }, [d("div", {
                ref: r,
                style: f.value,
                class: Sa("bar", {
                    opened: c.value,
                    scrollable: u.value
                })
            }, [i.map(v)]), (g = t.default) == null ? void 0 : g.call(t)])
        }
    }
});
const [i1,Ca] = W("dropdown-item")
  , l1 = {
    title: String,
    options: Ye(),
    disabled: Boolean,
    teleport: [String, Object],
    lazyRender: z,
    modelValue: Xe,
    titleClass: Xe
};
var s1 = j({
    name: i1,
    inheritAttrs: !1,
    props: l1,
    emits: ["open", "opened", "close", "closed", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const r = Ke({
            showPopup: !1,
            transition: !0,
            showWrapper: !1
        })
          , a = R()
          , {parent: i, index: l} = gt(vh);
        if (!i)
            return;
        const s = g=>()=>t(g)
          , c = s("open")
          , u = s("close")
          , f = s("opened")
          , h = ()=>{
            r.showWrapper = !1,
            t("closed")
        }
          , m = g=>{
            e.teleport && g.stopPropagation()
        }
          , w = (g=!r.showPopup,p={})=>{
            g !== r.showPopup && (r.showPopup = g,
            r.transition = !p.immediate,
            g && (i.updateOffset(),
            r.showWrapper = !0))
        }
          , C = ()=>{
            if (n.title)
                return n.title();
            if (e.title)
                return e.title;
            const g = e.options.find(p=>p.value === e.modelValue);
            return g ? g.text : ""
        }
          , b = g=>{
            const {activeColor: p} = i.props
              , {disabled: y} = g
              , S = g.value === e.modelValue
              , _ = ()=>{
                y || (r.showPopup = !1,
                g.value !== e.modelValue && (t("update:modelValue", g.value),
                t("change", g.value)))
            }
              , O = ()=>{
                if (S)
                    return d(Ce, {
                        class: Ca("icon"),
                        color: y ? void 0 : p,
                        name: "success"
                    }, null)
            }
            ;
            return d(nn, {
                role: "menuitem",
                key: String(g.value),
                icon: g.icon,
                title: g.text,
                class: Ca("option", {
                    active: S,
                    disabled: y
                }),
                style: {
                    color: S ? p : ""
                },
                tabindex: S ? 0 : -1,
                clickable: !y,
                onClick: _
            }, {
                value: O
            })
        }
          , v = ()=>{
            const {offset: g} = i
              , {autoLocate: p, zIndex: y, overlay: S, duration: _, direction: O, closeOnClickOverlay: x} = i.props
              , B = Dn(y);
            let $ = g.value;
            if (p && a.value) {
                const k = eb(a.value);
                k && ($ -= Ve(k).top)
            }
            return O === "down" ? B.top = `${$}px` : B.bottom = `${$}px`,
            st(d("div", Ae({
                ref: a,
                style: B,
                class: Ca([O]),
                onClick: m
            }, o), [d(Rt, {
                show: r.showPopup,
                "onUpdate:show": k=>r.showPopup = k,
                role: "menu",
                class: Ca("content"),
                overlay: S,
                position: O === "down" ? "top" : "bottom",
                duration: r.transition ? _ : 0,
                lazyRender: e.lazyRender,
                overlayStyle: {
                    position: "absolute"
                },
                "aria-labelledby": `${i.id}-${l.value}`,
                closeOnClickOverlay: x,
                onOpen: c,
                onClose: u,
                onOpened: f,
                onClosed: h
            }, {
                default: ()=>{
                    var k;
                    return [e.options.map(b), (k = n.default) == null ? void 0 : k.call(n)]
                }
            })]), [[ft, r.showWrapper]])
        }
        ;
        return Oe({
            state: r,
            toggle: w,
            renderTitle: C
        }),
        ()=>e.teleport ? d(lr, {
            to: e.teleport
        }, {
            default: ()=>[v()]
        }) : v()
    }
});
const c1 = G(s1)
  , u1 = G(a1)
  , d1 = {
    gap: ot(24),
    icon: String,
    axis: X("y"),
    magnetic: String,
    offset: {
        type: Object,
        default: ()=>({
            x: -1,
            y: -1
        })
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
}
  , [f1,cu] = W("floating-bubble");
var h1 = j({
    name: f1,
    inheritAttrs: !1,
    props: d1,
    emits: ["click", "update:offset", "offsetChange"],
    setup(e, {slots: t, emit: n, attrs: o}) {
        const r = R()
          , a = R({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        })
          , i = D(()=>({
            top: e.gap,
            right: Qt.value - a.value.width - e.gap,
            bottom: Ht.value - a.value.height - e.gap,
            left: e.gap
        }))
          , l = R(!1);
        let s = !1;
        const c = D(()=>{
            const p = {}
              , y = Se(a.value.x)
              , S = Se(a.value.y);
            return p.transform = `translate3d(${y}, ${S}, 0)`,
            (l.value || !s) && (p.transition = "none"),
            p
        }
        )
          , u = ()=>{
            if (!g.value)
                return;
            const {width: p, height: y} = Ve(r.value)
              , {offset: S} = e;
            a.value = {
                x: S.x > -1 ? S.x : Qt.value - p - e.gap,
                y: S.y > -1 ? S.y : Ht.value - y - e.gap,
                width: p,
                height: y
            }
        }
          , f = zt();
        let h = 0
          , m = 0;
        const w = p=>{
            f.start(p),
            l.value = !0,
            h = a.value.x,
            m = a.value.y
        }
        ;
        et("touchmove", p=>{
            if (p.preventDefault(),
            f.move(p),
            e.axis !== "lock" && !f.isTap.value) {
                if (e.axis === "x" || e.axis === "xy") {
                    let S = h + f.deltaX.value;
                    S < i.value.left && (S = i.value.left),
                    S > i.value.right && (S = i.value.right),
                    a.value.x = S
                }
                if (e.axis === "y" || e.axis === "xy") {
                    let S = m + f.deltaY.value;
                    S < i.value.top && (S = i.value.top),
                    S > i.value.bottom && (S = i.value.bottom),
                    a.value.y = S
                }
                const y = Le(a.value, ["x", "y"]);
                n("update:offset", y)
            }
        }
        , {
            target: r
        });
        const b = ()=>{
            l.value = !1,
            Te(()=>{
                if (e.magnetic === "x") {
                    const p = ja([i.value.left, i.value.right], a.value.x);
                    a.value.x = p
                }
                if (e.magnetic === "y") {
                    const p = ja([i.value.top, i.value.bottom], a.value.y);
                    a.value.y = p
                }
                if (!f.isTap.value) {
                    const p = Le(a.value, ["x", "y"]);
                    n("update:offset", p),
                    (h !== p.x || m !== p.y) && n("offsetChange", p)
                }
            }
            )
        }
          , v = p=>{
            f.isTap.value ? n("click", p) : p.stopPropagation()
        }
        ;
        tt(()=>{
            u(),
            Te(()=>{
                s = !0
            }
            )
        }
        ),
        oe([Qt, Ht, ()=>e.gap, ()=>e.offset], u, {
            deep: !0
        });
        const g = R(!0);
        return mn(()=>{
            g.value = !0
        }
        ),
        vn(()=>{
            e.teleport && (g.value = !1)
        }
        ),
        ()=>{
            const p = st(d("div", Ae({
                class: cu(),
                ref: r,
                onTouchstartPassive: w,
                onTouchend: b,
                onTouchcancel: b,
                onClickCapture: v,
                style: c.value
            }, o), [t.default ? t.default() : d(Bb, {
                name: e.icon,
                class: cu("icon")
            }, null)]), [[ft, g.value]]);
            return e.teleport ? d(lr, {
                to: e.teleport
            }, {
                default: ()=>[p]
            }) : p
        }
    }
});
const g1 = G(h1)
  , m1 = {
    height: ce(0),
    anchors: Ye(),
    duration: ce(.3),
    contentDraggable: z,
    lockScroll: Boolean,
    safeAreaInsetBottom: z
}
  , [v1,xa] = W("floating-panel");
var b1 = j({
    name: v1,
    props: m1,
    emits: ["heightChange", "update:height"],
    setup(e, {emit: t, slots: n}) {
        const r = R()
          , a = R()
          , i = gs(()=>+e.height, p=>t("update:height", p))
          , l = D(()=>{
            var p, y;
            return {
                min: (p = e.anchors[0]) != null ? p : 100,
                max: (y = e.anchors[e.anchors.length - 1]) != null ? y : Math.round(Ht.value * .6)
            }
        }
        )
          , s = D(()=>e.anchors.length >= 2 ? e.anchors : [l.value.min, l.value.max])
          , c = R(!1)
          , u = D(()=>({
            height: Se(l.value.max),
            transform: `translateY(calc(100% + ${Se(-i.value)}))`,
            transition: c.value ? "none" : `transform ${e.duration}s cubic-bezier(0.18, 0.89, 0.32, 1.28)`
        }))
          , f = p=>{
            const y = Math.abs(p)
              , {min: S, max: _} = l.value;
            return y > _ ? -(_ + (y - _) * .2) : y < S ? -(S - (S - y) * .2) : p
        }
        ;
        let h, m = -1;
        const w = zt()
          , C = p=>{
            w.start(p),
            c.value = !0,
            h = -i.value,
            m = -1
        }
          , b = p=>{
            var y;
            w.move(p);
            const S = p.target;
            if (a.value === S || (y = a.value) != null && y.contains(S)) {
                const {scrollTop: O} = a.value;
                if (m = Math.max(m, O),
                !e.contentDraggable)
                    return;
                if (-h < l.value.max)
                    Ue(p, !0);
                else if (!(O <= 0 && w.deltaY.value > 0) || m > 0)
                    return
            }
            const _ = w.deltaY.value + h;
            i.value = -f(_)
        }
          , v = ()=>{
            m = -1,
            c.value = !1,
            i.value = ja(s.value, i.value),
            i.value !== -h && t("heightChange", {
                height: i.value
            })
        }
        ;
        oe(l, ()=>{
            i.value = ja(s.value, i.value)
        }
        , {
            immediate: !0
        }),
        $f(r, ()=>e.lockScroll || c.value),
        et("touchmove", b, {
            target: r
        });
        const g = ()=>n.header ? n.header() : d("div", {
            class: xa("header")
        }, [d("div", {
            class: xa("header-bar")
        }, null)]);
        return ()=>{
            var p;
            return d("div", {
                class: [xa(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }],
                ref: r,
                style: u.value,
                onTouchstartPassive: C,
                onTouchend: v,
                onTouchcancel: v
            }, [g(), d("div", {
                class: xa("content"),
                ref: a
            }, [(p = n.default) == null ? void 0 : p.call(n)])])
        }
    }
});
const y1 = G(b1)
  , [bh,p1] = W("grid")
  , w1 = {
    square: Boolean,
    center: z,
    border: z,
    gutter: q,
    reverse: Boolean,
    iconSize: q,
    direction: String,
    clickable: Boolean,
    columnNum: ce(4)
}
  , yh = Symbol(bh);
var S1 = j({
    name: bh,
    props: w1,
    setup(e, {slots: t}) {
        const {linkChildren: n} = wt(yh);
        return n({
            props: e
        }),
        ()=>{
            var o;
            return d("div", {
                style: {
                    paddingLeft: Se(e.gutter)
                },
                class: [p1(), {
                    [wf]: e.border && !e.gutter
                }]
            }, [(o = t.default) == null ? void 0 : o.call(t)])
        }
    }
});
const C1 = G(S1)
  , [x1,_a] = W("grid-item")
  , _1 = ve({}, uo, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: q,
    iconColor: String,
    iconPrefix: String,
    badgeProps: Object
});
var k1 = j({
    name: x1,
    props: _1,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = gt(yh)
          , r = Eo();
        if (!n)
            return;
        const a = D(()=>{
            const {square: u, gutter: f, columnNum: h} = n.props
              , m = `${100 / +h}%`
              , w = {
                flexBasis: m
            };
            if (u)
                w.paddingTop = m;
            else if (f) {
                const C = Se(f);
                w.paddingRight = C,
                o.value >= +h && (w.marginTop = C)
            }
            return w
        }
        )
          , i = D(()=>{
            const {square: u, gutter: f} = n.props;
            if (u && f) {
                const h = Se(f);
                return {
                    right: h,
                    bottom: h,
                    height: "auto"
                }
            }
        }
        )
          , l = ()=>{
            if (t.icon)
                return d(Ao, Ae({
                    dot: e.dot,
                    content: e.badge
                }, e.badgeProps), {
                    default: t.icon
                });
            if (e.icon)
                return d(Ce, {
                    dot: e.dot,
                    name: e.icon,
                    size: n.props.iconSize,
                    badge: e.badge,
                    class: _a("icon"),
                    color: e.iconColor,
                    badgeProps: e.badgeProps,
                    classPrefix: e.iconPrefix
                }, null)
        }
          , s = ()=>{
            if (t.text)
                return t.text();
            if (e.text)
                return d("span", {
                    class: _a("text")
                }, [e.text])
        }
          , c = ()=>t.default ? t.default() : [l(), s()];
        return ()=>{
            const {center: u, border: f, square: h, gutter: m, reverse: w, direction: C, clickable: b} = n.props
              , v = [_a("content", [C, {
                center: u,
                square: h,
                reverse: w,
                clickable: b,
                surround: f && m
            }]), {
                [In]: f
            }];
            return d("div", {
                class: [_a({
                    square: h
                })],
                style: a.value
            }, [d("div", {
                role: b ? "button" : void 0,
                class: v,
                style: i.value,
                tabindex: b ? 0 : void 0,
                onClick: r
            }, [c()])])
        }
    }
});
const T1 = G(k1)
  , [P1,uu] = W("highlight")
  , E1 = {
    autoEscape: z,
    caseSensitive: Boolean,
    highlightClass: String,
    highlightTag: X("span"),
    keywords: dt([String, Array]),
    sourceString: X(""),
    tag: X("div"),
    unhighlightClass: String,
    unhighlightTag: X("span")
};
var A1 = j({
    name: P1,
    props: E1,
    setup(e) {
        const t = D(()=>{
            const {autoEscape: o, caseSensitive: r, keywords: a, sourceString: i} = e
              , l = r ? "g" : "gi";
            let c = (Array.isArray(a) ? a : [a]).filter(f=>f).reduce((f,h)=>{
                o && (h = h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                const m = new RegExp(h,l);
                let w;
                for (; w = m.exec(i); ) {
                    const C = w.index
                      , b = m.lastIndex;
                    if (C >= b) {
                        m.lastIndex++;
                        continue
                    }
                    f.push({
                        start: C,
                        end: b,
                        highlight: !0
                    })
                }
                return f
            }
            , []);
            c = c.sort((f,h)=>f.start - h.start).reduce((f,h)=>{
                const m = f[f.length - 1];
                if (!m || h.start > m.end) {
                    const w = m ? m.end : 0
                      , C = h.start;
                    w !== C && f.push({
                        start: w,
                        end: C,
                        highlight: !1
                    }),
                    f.push(h)
                } else
                    m.end = Math.max(m.end, h.end);
                return f
            }
            , []);
            const u = c[c.length - 1];
            return u || c.push({
                start: 0,
                end: i.length,
                highlight: !1
            }),
            u && u.end < i.length && c.push({
                start: u.end,
                end: i.length,
                highlight: !1
            }),
            c
        }
        )
          , n = ()=>{
            const {sourceString: o, highlightClass: r, unhighlightClass: a, highlightTag: i, unhighlightTag: l} = e;
            return t.value.map(s=>{
                const {start: c, end: u, highlight: f} = s
                  , h = o.slice(c, u);
                return f ? d(i, {
                    class: [uu("tag"), r]
                }, {
                    default: ()=>[h]
                }) : d(l, {
                    class: a
                }, {
                    default: ()=>[h]
                })
            }
            )
        }
        ;
        return ()=>{
            const {tag: o} = e;
            return d(o, {
                class: uu()
            }, {
                default: ()=>[n()]
            })
        }
    }
});
const O1 = G(A1)
  , du = e=>Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2)
  , B1 = e=>({
    x: (e[0].clientX + e[1].clientX) / 2,
    y: (e[0].clientY + e[1].clientY) / 2
})
  , Yi = W("image-preview")[1]
  , fu = 2.6
  , $1 = {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: dt(q),
    maxZoom: dt(q),
    rootWidth: dt(Number),
    rootHeight: dt(Number),
    disableZoom: Boolean,
    doubleScale: Boolean,
    closeOnClickImage: Boolean,
    closeOnClickOverlay: Boolean,
    vertical: Boolean
};
var D1 = j({
    props: $1,
    emits: ["scale", "close", "longPress"],
    setup(e, {emit: t, slots: n}) {
        const o = Ke({
            scale: 1,
            moveX: 0,
            moveY: 0,
            moving: !1,
            zooming: !1,
            initializing: !1,
            imageRatio: 0
        })
          , r = zt()
          , a = R()
          , i = R()
          , l = R(!1)
          , s = R(!1);
        let c = 0;
        const u = D(()=>{
            const {scale: N, moveX: Z, moveY: ie, moving: Ee, zooming: $e, initializing: M} = o
              , K = {
                transitionDuration: $e || Ee || M ? "0s" : ".3s"
            };
            return (N !== 1 || s.value) && (K.transform = `matrix(${N}, 0, 0, ${N}, ${Z}, ${ie})`),
            K
        }
        )
          , f = D(()=>{
            if (o.imageRatio) {
                const {rootWidth: N, rootHeight: Z} = e
                  , ie = l.value ? Z / o.imageRatio : N;
                return Math.max(0, (o.scale * ie - N) / 2)
            }
            return 0
        }
        )
          , h = D(()=>{
            if (o.imageRatio) {
                const {rootWidth: N, rootHeight: Z} = e
                  , ie = l.value ? Z : N * o.imageRatio;
                return Math.max(0, (o.scale * ie - Z) / 2)
            }
            return 0
        }
        )
          , m = (N,Z)=>{
            var ie;
            if (N = ht(N, +e.minZoom, +e.maxZoom + 1),
            N !== o.scale) {
                const Ee = N / o.scale;
                if (o.scale = N,
                Z) {
                    const $e = Ve((ie = a.value) == null ? void 0 : ie.$el)
                      , M = {
                        x: $e.width * .5,
                        y: $e.height * .5
                    }
                      , K = o.moveX - (Z.x - $e.left - M.x) * (Ee - 1)
                      , fe = o.moveY - (Z.y - $e.top - M.y) * (Ee - 1);
                    o.moveX = ht(K, -f.value, f.value),
                    o.moveY = ht(fe, -h.value, h.value)
                } else
                    o.moveX = 0,
                    o.moveY = s.value ? c : 0;
                t("scale", {
                    scale: N,
                    index: e.active
                })
            }
        }
          , w = ()=>{
            m(1)
        }
          , C = ()=>{
            const N = o.scale > 1 ? 1 : 2;
            m(N, N === 2 || s.value ? {
                x: r.startX.value,
                y: r.startY.value
            } : void 0)
        }
        ;
        let b, v, g, p, y, S, _, O, x = !1;
        const B = N=>{
            const {touches: Z} = N;
            if (b = Z.length,
            b === 2 && e.disableZoom)
                return;
            const {offsetX: ie} = r;
            r.start(N),
            v = o.moveX,
            g = o.moveY,
            O = Date.now(),
            x = !1,
            o.moving = b === 1 && (o.scale !== 1 || s.value),
            o.zooming = b === 2 && !ie.value,
            o.zooming && (p = o.scale,
            y = du(Z))
        }
          , $ = N=>{
            const {touches: Z} = N;
            if (r.move(N),
            o.moving) {
                const {deltaX: ie, deltaY: Ee} = r
                  , $e = ie.value + v
                  , M = Ee.value + g;
                if ((e.vertical ? r.isVertical() && Math.abs(M) > h.value : r.isHorizontal() && Math.abs($e) > f.value) && !x) {
                    o.moving = !1;
                    return
                }
                x = !0,
                Ue(N, !0),
                o.moveX = ht($e, -f.value, f.value),
                o.moveY = ht(M, -h.value, h.value)
            }
            if (o.zooming && (Ue(N, !0),
            Z.length === 2)) {
                const ie = du(Z)
                  , Ee = p * ie / y;
                S = B1(Z),
                m(Ee, S)
            }
        }
          , k = N=>{
            var Z;
            const ie = (Z = i.value) == null ? void 0 : Z.$el;
            if (!ie)
                return;
            const Ee = ie.firstElementChild
              , $e = N.target === ie
              , M = Ee == null ? void 0 : Ee.contains(N.target);
            !e.closeOnClickImage && M || !e.closeOnClickOverlay && $e || t("close")
        }
          , E = N=>{
            if (b > 1)
                return;
            const Z = Date.now() - O
              , ie = 250;
            r.isTap.value && (Z < ie ? e.doubleScale ? _ ? (clearTimeout(_),
            _ = null,
            C()) : _ = setTimeout(()=>{
                k(N),
                _ = null
            }
            , ie) : k(N) : Z > xf && t("longPress"))
        }
          , I = N=>{
            let Z = !1;
            if ((o.moving || o.zooming) && (Z = !0,
            o.moving && v === o.moveX && g === o.moveY && (Z = !1),
            !N.touches.length)) {
                o.zooming && (o.moveX = ht(o.moveX, -f.value, f.value),
                o.moveY = ht(o.moveY, -h.value, h.value),
                o.zooming = !1),
                o.moving = !1,
                v = 0,
                g = 0,
                p = 1,
                o.scale < 1 && w();
                const ie = +e.maxZoom;
                o.scale > ie && m(ie, S)
            }
            Ue(N, Z),
            E(N),
            r.reset()
        }
          , Q = ()=>{
            const {rootWidth: N, rootHeight: Z} = e
              , ie = Z / N
              , {imageRatio: Ee} = o;
            l.value = o.imageRatio > ie && Ee < fu,
            s.value = o.imageRatio > ie && Ee >= fu,
            s.value && (c = (Ee * N - Z) / 2,
            o.moveY = c,
            o.initializing = !0,
            bt(()=>{
                o.initializing = !1
            }
            )),
            w()
        }
          , ne = N=>{
            const {naturalWidth: Z, naturalHeight: ie} = N.target;
            o.imageRatio = ie / Z,
            Q()
        }
        ;
        return oe(()=>e.active, w),
        oe(()=>e.show, N=>{
            N || w()
        }
        ),
        oe(()=>[e.rootWidth, e.rootHeight], Q),
        et("touchmove", $, {
            target: D(()=>{
                var N;
                return (N = i.value) == null ? void 0 : N.$el
            }
            )
        }),
        Oe({
            resetScale: w
        }),
        ()=>{
            const N = {
                loading: ()=>d(tn, {
                    type: "spinner"
                }, null)
            };
            return d(vs, {
                ref: i,
                class: Yi("swipe-item"),
                onTouchstartPassive: B,
                onTouchend: I,
                onTouchcancel: I
            }, {
                default: ()=>[n.image ? d("div", {
                    class: Yi("image-wrap")
                }, [n.image({
                    src: e.src,
                    onLoad: ne,
                    style: u.value
                })]) : d(bi, {
                    ref: a,
                    src: e.src,
                    fit: "contain",
                    class: Yi("image", {
                        vertical: l.value
                    }),
                    style: u.value,
                    onLoad: ne
                }, N)]
            })
        }
    }
});
const [I1,No] = W("image-preview")
  , R1 = ["show", "teleport", "transition", "overlayStyle", "closeOnPopstate"]
  , L1 = {
    show: Boolean,
    loop: z,
    images: Ye(),
    minZoom: ce(1 / 3),
    maxZoom: ce(3),
    overlay: z,
    vertical: Boolean,
    closeable: Boolean,
    showIndex: z,
    className: Xe,
    closeIcon: X("clear"),
    transition: String,
    beforeClose: Function,
    doubleScale: z,
    overlayClass: Xe,
    overlayStyle: Object,
    swipeDuration: ce(300),
    startPosition: ce(0),
    showIndicators: Boolean,
    closeOnPopstate: z,
    closeOnClickImage: z,
    closeOnClickOverlay: z,
    closeIconPosition: X("top-right"),
    teleport: [String, Object]
};
var ph = j({
    name: I1,
    props: L1,
    emits: ["scale", "close", "closed", "change", "longPress", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = R()
          , a = Ke({
            active: 0,
            rootWidth: 0,
            rootHeight: 0,
            disableZoom: !1
        })
          , i = ()=>{
            if (o.value) {
                const p = Ve(o.value.$el);
                a.rootWidth = p.width,
                a.rootHeight = p.height,
                o.value.resize()
            }
        }
          , l = p=>t("scale", p)
          , s = p=>t("update:show", p)
          , c = ()=>{
            co(e.beforeClose, {
                args: [a.active],
                done: ()=>s(!1)
            })
        }
          , u = p=>{
            p !== a.active && (a.active = p,
            t("change", p))
        }
          , f = ()=>{
            if (e.showIndex)
                return d("div", {
                    class: No("index")
                }, [n.index ? n.index({
                    index: a.active
                }) : `${a.active + 1} / ${e.images.length}`])
        }
          , h = ()=>{
            if (n.cover)
                return d("div", {
                    class: No("cover")
                }, [n.cover()])
        }
          , m = ()=>{
            a.disableZoom = !0
        }
          , w = ()=>{
            a.disableZoom = !1
        }
          , C = ()=>d(ms, {
            ref: o,
            lazyRender: !0,
            loop: e.loop,
            class: No("swipe"),
            vertical: e.vertical,
            duration: e.swipeDuration,
            initialSwipe: e.startPosition,
            showIndicators: e.showIndicators,
            indicatorColor: "white",
            onChange: u,
            onDragEnd: w,
            onDragStart: m
        }, {
            default: ()=>[e.images.map((p,y)=>d(D1, {
                ref: S=>{
                    y === a.active && (r.value = S)
                }
                ,
                src: p,
                show: e.show,
                active: a.active,
                maxZoom: e.maxZoom,
                minZoom: e.minZoom,
                rootWidth: a.rootWidth,
                rootHeight: a.rootHeight,
                disableZoom: a.disableZoom,
                doubleScale: e.doubleScale,
                closeOnClickImage: e.closeOnClickImage,
                closeOnClickOverlay: e.closeOnClickOverlay,
                vertical: e.vertical,
                onScale: l,
                onClose: c,
                onLongPress: ()=>t("longPress", {
                    index: y
                })
            }, {
                image: n.image
            }))]
        })
          , b = ()=>{
            if (e.closeable)
                return d(Ce, {
                    role: "button",
                    name: e.closeIcon,
                    class: [No("close-icon", e.closeIconPosition), yt],
                    onClick: c
                }, null)
        }
          , v = ()=>t("closed")
          , g = (p,y)=>{
            var S;
            return (S = o.value) == null ? void 0 : S.swipeTo(p, y)
        }
        ;
        return Oe({
            resetScale: ()=>{
                var p;
                (p = r.value) == null || p.resetScale()
            }
            ,
            swipeTo: g
        }),
        tt(i),
        oe([Qt, Ht], i),
        oe(()=>e.startPosition, p=>u(+p)),
        oe(()=>e.show, p=>{
            const {images: y, startPosition: S} = e;
            p ? (u(+S),
            Te(()=>{
                i(),
                g(+S, {
                    immediate: !0
                })
            }
            )) : t("close", {
                index: a.active,
                url: y[a.active]
            })
        }
        ),
        ()=>d(Rt, Ae({
            class: [No(), e.className],
            overlayClass: [No("overlay"), e.overlayClass],
            onClosed: v,
            "onUpdate:show": s
        }, Le(e, R1)), {
            default: ()=>[b(), C(), f(), h()]
        })
    }
});
let Da;
const M1 = {
    loop: !0,
    images: [],
    maxZoom: 3,
    minZoom: 1 / 3,
    onScale: void 0,
    onClose: void 0,
    onChange: void 0,
    vertical: !1,
    teleport: "body",
    className: "",
    showIndex: !0,
    closeable: !1,
    closeIcon: "clear",
    transition: void 0,
    beforeClose: void 0,
    doubleScale: !0,
    overlayStyle: void 0,
    overlayClass: void 0,
    startPosition: 0,
    swipeDuration: 300,
    showIndicators: !1,
    closeOnPopstate: !0,
    closeOnClickOverlay: !0,
    closeIconPosition: "top-right"
};
function F1() {
    ({instance: Da} = ws({
        setup() {
            const {state: e, toggle: t} = ps()
              , n = ()=>{
                e.images = []
            }
            ;
            return ()=>d(ph, Ae(e, {
                onClosed: n,
                "onUpdate:show": t
            }), null)
        }
    }))
}
const V1 = (e,t=0)=>{
    if (It)
        return Da || F1(),
        e = Array.isArray(e) ? {
            images: e,
            startPosition: t
        } : e,
        Da.open(ve({}, M1, e)),
        Da
}
  , N1 = G(ph);
function H1() {
    return Array(26).fill("").map((n,o)=>String.fromCharCode(65 + o))
}
const [wh,qi] = W("index-bar")
  , z1 = {
    sticky: z,
    zIndex: q,
    teleport: [String, Object],
    highlightColor: String,
    stickyOffsetTop: ot(0),
    indexList: {
        type: Array,
        default: H1
    }
}
  , Sh = Symbol(wh);
var j1 = j({
    name: wh,
    props: z1,
    emits: ["select", "change"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = R()
          , a = R("")
          , i = zt()
          , l = ur(o)
          , {children: s, linkChildren: c} = wt(Sh);
        let u;
        c({
            props: e
        });
        const f = D(()=>{
            if (De(e.zIndex))
                return {
                    zIndex: +e.zIndex + 1
                }
        }
        )
          , h = D(()=>{
            if (e.highlightColor)
                return {
                    color: e.highlightColor
                }
        }
        )
          , m = (x,B)=>{
            for (let $ = s.length - 1; $ >= 0; $--) {
                const k = $ > 0 ? B[$ - 1].height : 0
                  , E = e.sticky ? k + e.stickyOffsetTop : 0;
                if (x + E >= B[$].top)
                    return $
            }
            return -1
        }
          , w = x=>s.find(B=>String(B.index) === x)
          , C = ()=>{
            if (To(o))
                return;
            const {sticky: x, indexList: B} = e
              , $ = En(l.value)
              , k = Ve(l)
              , E = s.map(Q=>Q.getRect(l.value, k));
            let I = -1;
            if (u) {
                const Q = w(u);
                if (Q) {
                    const ne = Q.getRect(l.value, k);
                    e.sticky && e.stickyOffsetTop ? I = m(ne.top - e.stickyOffsetTop, E) : I = m(ne.top, E)
                }
            } else
                I = m($, E);
            a.value = B[I],
            x && s.forEach((Q,ne)=>{
                const {state: N, $el: Z} = Q;
                if (ne === I || ne === I - 1) {
                    const ie = Z.getBoundingClientRect();
                    N.left = ie.left,
                    N.width = ie.width
                } else
                    N.left = null,
                    N.width = null;
                if (ne === I)
                    N.active = !0,
                    N.top = Math.max(e.stickyOffsetTop, E[ne].top - $) + k.top;
                else if (ne === I - 1 && u === "") {
                    const ie = E[I].top - $;
                    N.active = ie > 0,
                    N.top = ie + k.top - E[ne].height
                } else
                    N.active = !1
            }
            ),
            u = ""
        }
          , b = ()=>{
            Te(C)
        }
        ;
        et("scroll", C, {
            target: l,
            passive: !0
        }),
        tt(b),
        oe(()=>e.indexList, b),
        oe(a, x=>{
            x && t("change", x)
        }
        );
        const v = ()=>e.indexList.map(x=>{
            const B = x === a.value;
            return d("span", {
                class: qi("index", {
                    active: B
                }),
                style: B ? h.value : void 0,
                "data-index": x
            }, [x])
        }
        )
          , g = x=>{
            u = String(x);
            const B = w(u);
            if (B) {
                const $ = En(l.value)
                  , k = Ve(l)
                  , {offsetHeight: E} = document.documentElement;
                if (B.$el.scrollIntoView(),
                $ === E - k.height) {
                    C();
                    return
                }
                e.sticky && e.stickyOffsetTop && (_o() === E - k.height ? Yr(_o()) : Yr(_o() - e.stickyOffsetTop)),
                t("select", B.index)
            }
        }
          , p = x=>{
            const {index: B} = x.dataset;
            B && g(B)
        }
          , y = x=>{
            p(x.target)
        }
        ;
        let S;
        const _ = x=>{
            if (i.move(x),
            i.isVertical()) {
                Ue(x);
                const {clientX: B, clientY: $} = x.touches[0]
                  , k = document.elementFromPoint(B, $);
                if (k) {
                    const {index: E} = k.dataset;
                    E && S !== E && (S = E,
                    p(k))
                }
            }
        }
          , O = ()=>d("div", {
            ref: r,
            class: qi("sidebar"),
            style: f.value,
            onClick: y,
            onTouchstartPassive: i.start
        }, [v()]);
        return Oe({
            scrollTo: g
        }),
        et("touchmove", _, {
            target: r
        }),
        ()=>{
            var x;
            return d("div", {
                ref: o,
                class: qi()
            }, [e.teleport ? d(lr, {
                to: e.teleport
            }, {
                default: ()=>[O()]
            }) : O(), (x = n.default) == null ? void 0 : x.call(n)])
        }
    }
});
const [U1,W1] = W("index-anchor")
  , Y1 = {
    index: q
};
var q1 = j({
    name: U1,
    props: Y1,
    setup(e, {slots: t}) {
        const n = Ke({
            top: 0,
            left: null,
            rect: {
                top: 0,
                height: 0
            },
            width: null,
            active: !1
        })
          , o = R()
          , {parent: r} = gt(Sh);
        if (!r)
            return;
        const a = ()=>n.active && r.props.sticky
          , i = D(()=>{
            const {zIndex: s, highlightColor: c} = r.props;
            if (a())
                return ve(Dn(s), {
                    left: n.left ? `${n.left}px` : void 0,
                    width: n.width ? `${n.width}px` : void 0,
                    transform: n.top ? `translate3d(0, ${n.top}px, 0)` : void 0,
                    color: c
                })
        }
        );
        return Oe({
            state: n,
            getRect: (s,c)=>{
                const u = Ve(o);
                return n.rect.height = u.height,
                s === window || s === document.body ? n.rect.top = u.top + _o() : n.rect.top = u.top + En(s) - c.top,
                n.rect
            }
        }),
        ()=>{
            const s = a();
            return d("div", {
                ref: o,
                style: {
                    height: s ? `${n.rect.height}px` : void 0
                }
            }, [d("div", {
                style: i.value,
                class: [W1({
                    sticky: s
                }), {
                    [us]: s
                }]
            }, [t.default ? t.default() : e.index])])
        }
    }
});
const K1 = G(q1)
  , G1 = G(j1)
  , [X1,Ho,Q1] = W("list")
  , Z1 = {
    error: Boolean,
    offset: ce(300),
    loading: Boolean,
    disabled: Boolean,
    finished: Boolean,
    scroller: Object,
    errorText: String,
    direction: X("down"),
    loadingText: String,
    finishedText: String,
    immediateCheck: z
};
var J1 = j({
    name: X1,
    props: Z1,
    emits: ["load", "update:error", "update:loading"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.loading)
          , r = R()
          , a = R()
          , i = Ay()
          , l = ur(r)
          , s = D(()=>e.scroller || l.value)
          , c = ()=>{
            Te(()=>{
                if (o.value || e.finished || e.disabled || e.error || (i == null ? void 0 : i.value) === !1)
                    return;
                const {direction: w} = e
                  , C = +e.offset
                  , b = Ve(s);
                if (!b.height || To(r))
                    return;
                let v = !1;
                const g = Ve(a);
                w === "up" ? v = b.top - g.top <= C : v = g.bottom - b.bottom <= C,
                v && (o.value = !0,
                t("update:loading", !0),
                t("load"))
            }
            )
        }
          , u = ()=>{
            if (e.finished) {
                const w = n.finished ? n.finished() : e.finishedText;
                if (w)
                    return d("div", {
                        class: Ho("finished-text")
                    }, [w])
            }
        }
          , f = ()=>{
            t("update:error", !1),
            c()
        }
          , h = ()=>{
            if (e.error) {
                const w = n.error ? n.error() : e.errorText;
                if (w)
                    return d("div", {
                        role: "button",
                        class: Ho("error-text"),
                        tabindex: 0,
                        onClick: f
                    }, [w])
            }
        }
          , m = ()=>{
            if (o.value && !e.finished && !e.disabled)
                return d("div", {
                    class: Ho("loading")
                }, [n.loading ? n.loading() : d(tn, {
                    class: Ho("loading-icon")
                }, {
                    default: ()=>[e.loadingText || Q1("loading")]
                })])
        }
        ;
        return oe(()=>[e.loading, e.finished, e.error], c),
        i && oe(i, w=>{
            w && c()
        }
        ),
        Wd(()=>{
            o.value = e.loading
        }
        ),
        tt(()=>{
            e.immediateCheck && c()
        }
        ),
        Oe({
            check: c
        }),
        et("scroll", c, {
            target: s,
            passive: !0
        }),
        ()=>{
            var w;
            const C = (w = n.default) == null ? void 0 : w.call(n)
              , b = d("div", {
                ref: a,
                class: Ho("placeholder")
            }, null);
            return d("div", {
                ref: r,
                role: "feed",
                class: Ho(),
                "aria-busy": o.value
            }, [e.direction === "down" ? C : b, m(), u(), h(), e.direction === "up" ? C : b])
        }
    }
});
const eS = G(J1)
  , [tS,Sn] = W("nav-bar")
  , nS = {
    title: String,
    fixed: Boolean,
    zIndex: q,
    border: z,
    leftText: String,
    rightText: String,
    leftDisabled: Boolean,
    rightDisabled: Boolean,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    clickable: z
};
var oS = j({
    name: tS,
    props: nS,
    emits: ["clickLeft", "clickRight"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = ui(o, Sn)
          , a = u=>{
            e.leftDisabled || t("clickLeft", u)
        }
          , i = u=>{
            e.rightDisabled || t("clickRight", u)
        }
          , l = ()=>n.left ? n.left() : [e.leftArrow && d(Ce, {
            class: Sn("arrow"),
            name: "arrow-left"
        }, null), e.leftText && d("span", {
            class: Sn("text")
        }, [e.leftText])]
          , s = ()=>n.right ? n.right() : d("span", {
            class: Sn("text")
        }, [e.rightText])
          , c = ()=>{
            const {title: u, fixed: f, border: h, zIndex: m} = e
              , w = Dn(m)
              , C = e.leftArrow || e.leftText || n.left
              , b = e.rightText || n.right;
            return d("div", {
                ref: o,
                style: w,
                class: [Sn({
                    fixed: f
                }), {
                    [us]: h,
                    "van-safe-area-top": e.safeAreaInsetTop
                }]
            }, [d("div", {
                class: Sn("content")
            }, [C && d("div", {
                class: [Sn("left", {
                    disabled: e.leftDisabled
                }), e.clickable && !e.leftDisabled ? yt : ""],
                onClick: a
            }, [l()]), d("div", {
                class: [Sn("title"), "van-ellipsis"]
            }, [n.title ? n.title() : u]), b && d("div", {
                class: [Sn("right", {
                    disabled: e.rightDisabled
                }), e.clickable && !e.rightDisabled ? yt : ""],
                onClick: i
            }, [s()])])])
        }
        ;
        return ()=>e.fixed && e.placeholder ? r(c) : c()
    }
});
const rS = G(oS)
  , [aS,pr] = W("notice-bar")
  , iS = {
    text: String,
    mode: String,
    color: String,
    delay: ce(1),
    speed: ce(60),
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
        type: Boolean,
        default: null
    }
};
var lS = j({
    name: aS,
    props: iS,
    emits: ["close", "replay"],
    setup(e, {emit: t, slots: n}) {
        let o = 0, r = 0, a;
        const i = R()
          , l = R()
          , s = Ke({
            show: !0,
            offset: 0,
            duration: 0
        })
          , c = ()=>{
            if (n["left-icon"])
                return n["left-icon"]();
            if (e.leftIcon)
                return d(Ce, {
                    class: pr("left-icon"),
                    name: e.leftIcon
                }, null)
        }
          , u = ()=>{
            if (e.mode === "closeable")
                return "cross";
            if (e.mode === "link")
                return "arrow"
        }
          , f = b=>{
            e.mode === "closeable" && (s.show = !1,
            t("close", b))
        }
          , h = ()=>{
            if (n["right-icon"])
                return n["right-icon"]();
            const b = u();
            if (b)
                return d(Ce, {
                    name: b,
                    class: pr("right-icon"),
                    onClick: f
                }, null)
        }
          , m = ()=>{
            s.offset = o,
            s.duration = 0,
            bt(()=>{
                Jn(()=>{
                    s.offset = -r,
                    s.duration = (r + o) / +e.speed,
                    t("replay")
                }
                )
            }
            )
        }
          , w = ()=>{
            const b = e.scrollable === !1 && !e.wrapable
              , v = {
                transform: s.offset ? `translateX(${s.offset}px)` : "",
                transitionDuration: `${s.duration}s`
            };
            return d("div", {
                ref: i,
                role: "marquee",
                class: pr("wrap")
            }, [d("div", {
                ref: l,
                style: v,
                class: [pr("content"), {
                    "van-ellipsis": b
                }],
                onTransitionend: m
            }, [n.default ? n.default() : e.text])])
        }
          , C = ()=>{
            const {delay: b, speed: v, scrollable: g} = e
              , p = De(b) ? +b * 1e3 : 0;
            o = 0,
            r = 0,
            s.offset = 0,
            s.duration = 0,
            clearTimeout(a),
            a = setTimeout(()=>{
                if (!i.value || !l.value || g === !1)
                    return;
                const y = Ve(i).width
                  , S = Ve(l).width;
                (g || S > y) && Jn(()=>{
                    o = y,
                    r = S,
                    s.offset = -r,
                    s.duration = r / +v
                }
                )
            }
            , p)
        }
        ;
        return ci(C),
        cr(C),
        et("pageshow", C),
        Oe({
            reset: C
        }),
        oe(()=>[e.text, e.scrollable], C),
        ()=>{
            const {color: b, wrapable: v, background: g} = e;
            return st(d("div", {
                role: "alert",
                class: pr({
                    wrapable: v
                }),
                style: {
                    color: b,
                    background: g
                }
            }, [c(), w(), h()]), [[ft, s.show]])
        }
    }
});
const sS = G(lS)
  , [cS,uS] = W("notify")
  , dS = ["lockScroll", "position", "show", "teleport", "zIndex"]
  , fS = ve({}, dr, {
    type: X("danger"),
    color: String,
    message: q,
    position: X("top"),
    className: Xe,
    background: String,
    lockScroll: Boolean
});
var Ch = j({
    name: cS,
    props: fS,
    emits: ["update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = r=>t("update:show", r);
        return ()=>d(Rt, Ae({
            class: [uS([e.type]), e.className],
            style: {
                color: e.color,
                background: e.background
            },
            overlay: !1,
            duration: .2,
            "onUpdate:show": o
        }, Le(e, dS)), {
            default: ()=>[n.default ? n.default() : e.message]
        })
    }
});
let hu, Zo;
const hS = e=>hn(e) ? e : {
    message: e
};
function gS() {
    ({instance: Zo} = ws({
        setup() {
            const {state: e, toggle: t} = ps();
            return ()=>d(Ch, Ae(e, {
                "onUpdate:show": t
            }), null)
        }
    }))
}
const mS = ()=>({
    type: "danger",
    color: void 0,
    message: "",
    onClose: void 0,
    onClick: void 0,
    onOpened: void 0,
    duration: 3e3,
    position: void 0,
    className: "",
    lockScroll: !1,
    background: void 0
});
let vS = mS();
const bS = ()=>{
    Zo && Zo.toggle(!1)
}
;
function hr(e) {
    if (It)
        return Zo || gS(),
        e = ve({}, vS, hS(e)),
        Zo.open(e),
        clearTimeout(hu),
        e.duration > 0 && (hu = setTimeout(bS, e.duration)),
        Zo
}
const yS = G(Ch)
  , [pS,Dr] = W("key")
  , wS = d("svg", {
    class: Dr("collapse-icon"),
    viewBox: "0 0 30 24"
}, [d("path", {
    d: "M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",
    fill: "currentColor"
}, null)])
  , SS = d("svg", {
    class: Dr("delete-icon"),
    viewBox: "0 0 32 22"
}, [d("path", {
    d: "M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",
    fill: "currentColor"
}, null)]);
var Ki = j({
    name: pS,
    props: {
        type: String,
        text: q,
        color: String,
        wider: Boolean,
        large: Boolean,
        loading: Boolean
    },
    emits: ["press"],
    setup(e, {emit: t, slots: n}) {
        const o = R(!1)
          , r = zt()
          , a = c=>{
            r.start(c),
            o.value = !0
        }
          , i = c=>{
            r.move(c),
            r.direction.value && (o.value = !1)
        }
          , l = c=>{
            o.value && (n.default || Ue(c),
            o.value = !1,
            t("press", e.text, e.type))
        }
          , s = ()=>{
            if (e.loading)
                return d(tn, {
                    class: Dr("loading-icon")
                }, null);
            const c = n.default ? n.default() : e.text;
            switch (e.type) {
            case "delete":
                return c || SS;
            case "extra":
                return c || wS;
            default:
                return c
            }
        }
        ;
        return ()=>d("div", {
            class: Dr("wrapper", {
                wider: e.wider
            }),
            onTouchstartPassive: a,
            onTouchmovePassive: i,
            onTouchend: l,
            onTouchcancel: l
        }, [d("div", {
            role: "button",
            tabindex: 0,
            class: Dr([e.color, {
                large: e.large,
                active: o.value,
                delete: e.type === "delete"
            }])
        }, [s()])])
    }
});
const [CS,zn] = W("number-keyboard")
  , xS = {
    show: Boolean,
    title: String,
    theme: X("default"),
    zIndex: q,
    teleport: [String, Object],
    maxlength: ce(1 / 0),
    modelValue: X(""),
    transition: z,
    blurOnClose: z,
    showDeleteKey: z,
    randomKeyOrder: Boolean,
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    hideOnClickOutside: z,
    safeAreaInsetBottom: z,
    extraKey: {
        type: [String, Array],
        default: ""
    }
};
function _S(e) {
    for (let t = e.length - 1; t > 0; t--) {
        const n = Math.floor(Math.random() * (t + 1))
          , o = e[t];
        e[t] = e[n],
        e[n] = o
    }
    return e
}
var kS = j({
    name: CS,
    inheritAttrs: !1,
    props: xS,
    emits: ["show", "hide", "blur", "input", "close", "delete", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const r = R()
          , a = ()=>{
            const b = Array(9).fill("").map((v,g)=>({
                text: g + 1
            }));
            return e.randomKeyOrder && _S(b),
            b
        }
          , i = ()=>[...a(), {
            text: e.extraKey,
            type: "extra"
        }, {
            text: 0
        }, {
            text: e.showDeleteKey ? e.deleteButtonText : "",
            type: e.showDeleteKey ? "delete" : ""
        }]
          , l = ()=>{
            const b = a()
              , {extraKey: v} = e
              , g = Array.isArray(v) ? v : [v];
            return g.length === 1 ? b.push({
                text: 0,
                wider: !0
            }, {
                text: g[0],
                type: "extra"
            }) : g.length === 2 && b.push({
                text: g[0],
                type: "extra"
            }, {
                text: 0
            }, {
                text: g[1],
                type: "extra"
            }),
            b
        }
          , s = D(()=>e.theme === "custom" ? l() : i())
          , c = ()=>{
            e.show && t("blur")
        }
          , u = ()=>{
            t("close"),
            e.blurOnClose && c()
        }
          , f = ()=>t(e.show ? "show" : "hide")
          , h = (b,v)=>{
            if (b === "") {
                v === "extra" && c();
                return
            }
            const g = e.modelValue;
            v === "delete" ? (t("delete"),
            t("update:modelValue", g.slice(0, g.length - 1))) : v === "close" ? u() : g.length < +e.maxlength && (t("input", b),
            t("update:modelValue", g + b))
        }
          , m = ()=>{
            const {title: b, theme: v, closeButtonText: g} = e
              , p = n["title-left"]
              , y = g && v === "default";
            if (b || y || p)
                return d("div", {
                    class: zn("header")
                }, [p && d("span", {
                    class: zn("title-left")
                }, [p()]), b && d("h2", {
                    class: zn("title")
                }, [b]), y && d("button", {
                    type: "button",
                    class: [zn("close"), yt],
                    onClick: u
                }, [g])])
        }
          , w = ()=>s.value.map(b=>{
            const v = {};
            return b.type === "delete" && (v.default = n.delete),
            b.type === "extra" && (v.default = n["extra-key"]),
            d(Ki, {
                key: b.text,
                text: b.text,
                type: b.type,
                wider: b.wider,
                color: b.color,
                onPress: h
            }, v)
        }
        )
          , C = ()=>{
            if (e.theme === "custom")
                return d("div", {
                    class: zn("sidebar")
                }, [e.showDeleteKey && d(Ki, {
                    large: !0,
                    text: e.deleteButtonText,
                    type: "delete",
                    onPress: h
                }, {
                    default: n.delete
                }), d(Ki, {
                    large: !0,
                    text: e.closeButtonText,
                    type: "close",
                    color: "blue",
                    loading: e.closeButtonLoading,
                    onPress: h
                }, null)])
        }
        ;
        return oe(()=>e.show, b=>{
            e.transition || t(b ? "show" : "hide")
        }
        ),
        e.hideOnClickOutside && li(r, c, {
            eventName: "touchstart"
        }),
        ()=>{
            const b = m()
              , v = d(sr, {
                name: e.transition ? "van-slide-up" : ""
            }, {
                default: ()=>[st(d("div", Ae({
                    ref: r,
                    style: Dn(e.zIndex),
                    class: zn({
                        unfit: !e.safeAreaInsetBottom,
                        "with-title": !!b
                    }),
                    onAnimationend: f,
                    onTouchstartPassive: ss
                }, o), [b, d("div", {
                    class: zn("body")
                }, [d("div", {
                    class: zn("keys")
                }, [w()]), C()])]), [[ft, e.show]])]
            });
            return e.teleport ? d(lr, {
                to: e.teleport
            }, {
                default: ()=>[v]
            }) : v
        }
    }
});
const TS = G(kS)
  , [PS,zo,gu] = W("pagination")
  , Gi = (e,t,n)=>({
    number: e,
    text: t,
    active: n
})
  , ES = {
    mode: X("multi"),
    prevText: String,
    nextText: String,
    pageCount: ce(0),
    modelValue: ot(0),
    totalItems: ce(0),
    showPageSize: ce(5),
    itemsPerPage: ce(10),
    forceEllipses: Boolean,
    showPrevButton: z,
    showNextButton: z
};
var AS = j({
    name: PS,
    props: ES,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = D(()=>{
            const {pageCount: u, totalItems: f, itemsPerPage: h} = e
              , m = +u || Math.ceil(+f / +h);
            return Math.max(1, m)
        }
        )
          , r = D(()=>{
            const u = []
              , f = o.value
              , h = +e.showPageSize
              , {modelValue: m, forceEllipses: w} = e;
            let C = 1
              , b = f;
            const v = h < f;
            v && (C = Math.max(m - Math.floor(h / 2), 1),
            b = C + h - 1,
            b > f && (b = f,
            C = b - h + 1));
            for (let g = C; g <= b; g++) {
                const p = Gi(g, g, g === m);
                u.push(p)
            }
            if (v && h > 0 && w) {
                if (C > 1) {
                    const g = Gi(C - 1, "...");
                    u.unshift(g)
                }
                if (b < f) {
                    const g = Gi(b + 1, "...");
                    u.push(g)
                }
            }
            return u
        }
        )
          , a = (u,f)=>{
            u = ht(u, 1, o.value),
            e.modelValue !== u && (t("update:modelValue", u),
            f && t("change", u))
        }
        ;
        ar(()=>a(e.modelValue));
        const i = ()=>d("li", {
            class: zo("page-desc")
        }, [n.pageDesc ? n.pageDesc() : `${e.modelValue}/${o.value}`])
          , l = ()=>{
            const {mode: u, modelValue: f, showPrevButton: h} = e;
            if (!h)
                return;
            const m = n["prev-text"]
              , w = f === 1;
            return d("li", {
                class: [zo("item", {
                    disabled: w,
                    border: u === "simple",
                    prev: !0
                }), Br]
            }, [d("button", {
                type: "button",
                disabled: w,
                onClick: ()=>a(f - 1, !0)
            }, [m ? m() : e.prevText || gu("prev")])])
        }
          , s = ()=>{
            const {mode: u, modelValue: f, showNextButton: h} = e;
            if (!h)
                return;
            const m = n["next-text"]
              , w = f === o.value;
            return d("li", {
                class: [zo("item", {
                    disabled: w,
                    border: u === "simple",
                    next: !0
                }), Br]
            }, [d("button", {
                type: "button",
                disabled: w,
                onClick: ()=>a(f + 1, !0)
            }, [m ? m() : e.nextText || gu("next")])])
        }
          , c = ()=>r.value.map(u=>d("li", {
            class: [zo("item", {
                active: u.active,
                page: !0
            }), Br]
        }, [d("button", {
            type: "button",
            "aria-current": u.active || void 0,
            onClick: ()=>a(u.number, !0)
        }, [n.page ? n.page(u) : u.text])]));
        return ()=>d("nav", {
            role: "navigation",
            class: zo()
        }, [d("ul", {
            class: zo("items")
        }, [l(), e.mode === "simple" ? i() : c(), s()])])
    }
});
const OS = G(AS)
  , [BS,wr] = W("password-input")
  , $S = {
    info: String,
    mask: z,
    value: X(""),
    gutter: q,
    length: ce(6),
    focused: Boolean,
    errorInfo: String
};
var DS = j({
    name: BS,
    props: $S,
    emits: ["focus"],
    setup(e, {emit: t}) {
        const n = r=>{
            r.stopPropagation(),
            t("focus", r)
        }
          , o = ()=>{
            const r = []
              , {mask: a, value: i, gutter: l, focused: s} = e
              , c = +e.length;
            for (let u = 0; u < c; u++) {
                const f = i[u]
                  , h = u !== 0 && !l
                  , m = s && u === i.length;
                let w;
                u !== 0 && l && (w = {
                    marginLeft: Se(l)
                }),
                r.push(d("li", {
                    class: [{
                        [Sf]: h
                    }, wr("item", {
                        focus: m
                    })],
                    style: w
                }, [a ? d("i", {
                    style: {
                        visibility: f ? "visible" : "hidden"
                    }
                }, null) : f, m && d("div", {
                    class: wr("cursor")
                }, null)]))
            }
            return r
        }
        ;
        return ()=>{
            const r = e.errorInfo || e.info;
            return d("div", {
                class: wr()
            }, [d("ul", {
                class: [wr("security"), {
                    [Br]: !e.gutter
                }],
                onTouchstartPassive: n
            }, [o()]), r && d("div", {
                class: wr(e.errorInfo ? "error-info" : "info")
            }, [r])])
        }
    }
});
const IS = G(DS)
  , RS = G(Vy);
function on(e) {
    if (e == null)
        return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}
function Es(e) {
    var t = on(e).Element;
    return e instanceof t || e instanceof Element
}
function Zt(e) {
    var t = on(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}
function xh(e) {
    if (typeof ShadowRoot > "u")
        return !1;
    var t = on(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}
var nr = Math.round;
function $l() {
    var e = navigator.userAgentData;
    return e != null && e.brands ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}
function LS() {
    return !/^((?!chrome|android).)*safari/i.test($l())
}
function Wa(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var o = e.getBoundingClientRect()
      , r = 1
      , a = 1;
    t && Zt(e) && (r = e.offsetWidth > 0 && nr(o.width) / e.offsetWidth || 1,
    a = e.offsetHeight > 0 && nr(o.height) / e.offsetHeight || 1);
    var i = Es(e) ? on(e) : window
      , l = i.visualViewport
      , s = !LS() && n
      , c = (o.left + (s && l ? l.offsetLeft : 0)) / r
      , u = (o.top + (s && l ? l.offsetTop : 0)) / a
      , f = o.width / r
      , h = o.height / a;
    return {
        width: f,
        height: h,
        top: u,
        right: c + f,
        bottom: u + h,
        left: c,
        x: c,
        y: u
    }
}
function _h(e) {
    var t = on(e)
      , n = t.pageXOffset
      , o = t.pageYOffset;
    return {
        scrollLeft: n,
        scrollTop: o
    }
}
function MS(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}
function FS(e) {
    return e === on(e) || !Zt(e) ? _h(e) : MS(e)
}
function An(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}
function yi(e) {
    return ((Es(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function VS(e) {
    return Wa(yi(e)).left + _h(e).scrollLeft
}
function On(e) {
    return on(e).getComputedStyle(e)
}
function As(e) {
    var t = On(e)
      , n = t.overflow
      , o = t.overflowX
      , r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o)
}
function NS(e) {
    var t = e.getBoundingClientRect()
      , n = nr(t.width) / e.offsetWidth || 1
      , o = nr(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1
}
function HS(e, t, n) {
    n === void 0 && (n = !1);
    var o = Zt(t)
      , r = Zt(t) && NS(t)
      , a = yi(t)
      , i = Wa(e, r, n)
      , l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , s = {
        x: 0,
        y: 0
    };
    return (o || !o && !n) && ((An(t) !== "body" || As(a)) && (l = FS(t)),
    Zt(t) ? (s = Wa(t, !0),
    s.x += t.clientLeft,
    s.y += t.clientTop) : a && (s.x = VS(a))),
    {
        x: i.left + l.scrollLeft - s.x,
        y: i.top + l.scrollTop - s.y,
        width: i.width,
        height: i.height
    }
}
function zS(e) {
    var t = Wa(e)
      , n = e.offsetWidth
      , o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - o) <= 1 && (o = t.height),
    {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: o
    }
}
function Os(e) {
    return An(e) === "html" ? e : e.assignedSlot || e.parentNode || (xh(e) ? e.host : null) || yi(e)
}
function kh(e) {
    return ["html", "body", "#document"].indexOf(An(e)) >= 0 ? e.ownerDocument.body : Zt(e) && As(e) ? e : kh(Os(e))
}
function Ia(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = kh(e)
      , r = o === ((n = e.ownerDocument) == null ? void 0 : n.body)
      , a = on(o)
      , i = r ? [a].concat(a.visualViewport || [], As(o) ? o : []) : o
      , l = t.concat(i);
    return r ? l : l.concat(Ia(Os(i)))
}
function jS(e) {
    return ["table", "td", "th"].indexOf(An(e)) >= 0
}
function mu(e) {
    return !Zt(e) || On(e).position === "fixed" ? null : e.offsetParent
}
function US(e) {
    var t = /firefox/i.test($l())
      , n = /Trident/i.test($l());
    if (n && Zt(e)) {
        var o = On(e);
        if (o.position === "fixed")
            return null
    }
    var r = Os(e);
    for (xh(r) && (r = r.host); Zt(r) && ["html", "body"].indexOf(An(r)) < 0; ) {
        var a = On(r);
        if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
            return r;
        r = r.parentNode
    }
    return null
}
function Th(e) {
    for (var t = on(e), n = mu(e); n && jS(n) && On(n).position === "static"; )
        n = mu(n);
    return n && (An(n) === "html" || An(n) === "body" && On(n).position === "static") ? t : n || US(e) || t
}
var Jo = "top"
  , Ya = "bottom"
  , Kr = "right"
  , ko = "left"
  , Ph = "auto"
  , WS = [Jo, Ya, Kr, ko]
  , Eh = "start"
  , qa = "end"
  , YS = [].concat(WS, [Ph]).reduce(function(e, t) {
    return e.concat([t, t + "-" + Eh, t + "-" + qa])
}, [])
  , qS = "beforeRead"
  , KS = "read"
  , GS = "afterRead"
  , XS = "beforeMain"
  , QS = "main"
  , ZS = "afterMain"
  , JS = "beforeWrite"
  , eC = "write"
  , tC = "afterWrite"
  , Dl = [qS, KS, GS, XS, QS, ZS, JS, eC, tC];
function nC(e) {
    var t = new Map
      , n = new Set
      , o = [];
    e.forEach(function(a) {
        t.set(a.name, a)
    });
    function r(a) {
        n.add(a.name);
        var i = [].concat(a.requires || [], a.requiresIfExists || []);
        i.forEach(function(l) {
            if (!n.has(l)) {
                var s = t.get(l);
                s && r(s)
            }
        }),
        o.push(a)
    }
    return e.forEach(function(a) {
        n.has(a.name) || r(a)
    }),
    o
}
function oC(e) {
    var t = nC(e);
    return Dl.reduce(function(n, o) {
        return n.concat(t.filter(function(r) {
            return r.phase === o
        }))
    }, [])
}
function rC(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(n) {
            Promise.resolve().then(function() {
                t = void 0,
                n(e())
            })
        }
        )),
        t
    }
}
function jn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
        n[o - 1] = arguments[o];
    return [].concat(n).reduce(function(r, a) {
        return r.replace(/%s/, a)
    }, e)
}
var vo = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s'
  , aC = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available'
  , vu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function iC(e) {
    e.forEach(function(t) {
        [].concat(Object.keys(t), vu).filter(function(n, o, r) {
            return r.indexOf(n) === o
        }).forEach(function(n) {
            switch (n) {
            case "name":
                typeof t.name != "string" && console.error(jn(vo, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
                break;
            case "enabled":
                typeof t.enabled != "boolean" && console.error(jn(vo, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
                break;
            case "phase":
                Dl.indexOf(t.phase) < 0 && console.error(jn(vo, t.name, '"phase"', "either " + Dl.join(", "), '"' + String(t.phase) + '"'));
                break;
            case "fn":
                typeof t.fn != "function" && console.error(jn(vo, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "effect":
                t.effect != null && typeof t.effect != "function" && console.error(jn(vo, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
                break;
            case "requires":
                t.requires != null && !Array.isArray(t.requires) && console.error(jn(vo, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
                break;
            case "requiresIfExists":
                Array.isArray(t.requiresIfExists) || console.error(jn(vo, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
                break;
            case "options":
            case "data":
                break;
            default:
                console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + vu.map(function(o) {
                    return '"' + o + '"'
                }).join(", ") + '; but "' + n + '" was provided.')
            }
            t.requires && t.requires.forEach(function(o) {
                e.find(function(r) {
                    return r.name === o
                }) == null && console.error(jn(aC, String(t.name), o, o))
            })
        })
    })
}
function lC(e, t) {
    var n = new Set;
    return e.filter(function(o) {
        var r = t(o);
        if (!n.has(r))
            return n.add(r),
            !0
    })
}
function pi(e) {
    return e.split("-")[0]
}
function sC(e) {
    var t = e.reduce(function(n, o) {
        var r = n[o.name];
        return n[o.name] = r ? Object.assign({}, r, o, {
            options: Object.assign({}, r.options, o.options),
            data: Object.assign({}, r.data, o.data)
        }) : o,
        n
    }, {});
    return Object.keys(t).map(function(n) {
        return t[n]
    })
}
function Ah(e) {
    return e.split("-")[1]
}
function cC(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}
function uC(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? pi(o) : null, a = o ? Ah(o) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, s;
    switch (r) {
    case Jo:
        s = {
            x: i,
            y: t.y - n.height
        };
        break;
    case Ya:
        s = {
            x: i,
            y: t.y + t.height
        };
        break;
    case Kr:
        s = {
            x: t.x + t.width,
            y: l
        };
        break;
    case ko:
        s = {
            x: t.x - n.width,
            y: l
        };
        break;
    default:
        s = {
            x: t.x,
            y: t.y
        }
    }
    var c = r ? cC(r) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (a) {
        case Eh:
            s[c] = s[c] - (t[u] / 2 - n[u] / 2);
            break;
        case qa:
            s[c] = s[c] + (t[u] / 2 - n[u] / 2);
            break
        }
    }
    return s
}
var bu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element."
  , dC = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash."
  , yu = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function pu() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return !t.some(function(o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}
function fC(e) {
    e === void 0 && (e = {});
    var t = e
      , n = t.defaultModifiers
      , o = n === void 0 ? [] : n
      , r = t.defaultOptions
      , a = r === void 0 ? yu : r;
    return function(l, s, c) {
        c === void 0 && (c = a);
        var u = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, yu, a),
            modifiersData: {},
            elements: {
                reference: l,
                popper: s
            },
            attributes: {},
            styles: {}
        }
          , f = []
          , h = !1
          , m = {
            state: u,
            setOptions: function(v) {
                var g = typeof v == "function" ? v(u.options) : v;
                C(),
                u.options = Object.assign({}, a, u.options, g),
                u.scrollParents = {
                    reference: Es(l) ? Ia(l) : l.contextElement ? Ia(l.contextElement) : [],
                    popper: Ia(s)
                };
                var p = oC(sC([].concat(o, u.options.modifiers)));
                u.orderedModifiers = p.filter(function(k) {
                    return k.enabled
                });
                {
                    var y = lC([].concat(p, u.options.modifiers), function(k) {
                        var E = k.name;
                        return E
                    });
                    if (iC(y),
                    pi(u.options.placement) === Ph) {
                        var S = u.orderedModifiers.find(function(k) {
                            var E = k.name;
                            return E === "flip"
                        });
                        S || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "))
                    }
                    var _ = On(s)
                      , O = _.marginTop
                      , x = _.marginRight
                      , B = _.marginBottom
                      , $ = _.marginLeft;
                    [O, x, B, $].some(function(k) {
                        return parseFloat(k)
                    }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "))
                }
                return w(),
                m.update()
            },
            forceUpdate: function() {
                if (!h) {
                    var v = u.elements
                      , g = v.reference
                      , p = v.popper;
                    if (!pu(g, p)) {
                        console.error(bu);
                        return
                    }
                    u.rects = {
                        reference: HS(g, Th(p), u.options.strategy === "fixed"),
                        popper: zS(p)
                    },
                    u.reset = !1,
                    u.placement = u.options.placement,
                    u.orderedModifiers.forEach(function(k) {
                        return u.modifiersData[k.name] = Object.assign({}, k.data)
                    });
                    for (var y = 0, S = 0; S < u.orderedModifiers.length; S++) {
                        if (y += 1,
                        y > 100) {
                            console.error(dC);
                            break
                        }
                        if (u.reset === !0) {
                            u.reset = !1,
                            S = -1;
                            continue
                        }
                        var _ = u.orderedModifiers[S]
                          , O = _.fn
                          , x = _.options
                          , B = x === void 0 ? {} : x
                          , $ = _.name;
                        typeof O == "function" && (u = O({
                            state: u,
                            options: B,
                            name: $,
                            instance: m
                        }) || u)
                    }
                }
            },
            update: rC(function() {
                return new Promise(function(b) {
                    m.forceUpdate(),
                    b(u)
                }
                )
            }),
            destroy: function() {
                C(),
                h = !0
            }
        };
        if (!pu(l, s))
            return console.error(bu),
            m;
        m.setOptions(c).then(function(b) {
            !h && c.onFirstUpdate && c.onFirstUpdate(b)
        });
        function w() {
            u.orderedModifiers.forEach(function(b) {
                var v = b.name
                  , g = b.options
                  , p = g === void 0 ? {} : g
                  , y = b.effect;
                if (typeof y == "function") {
                    var S = y({
                        state: u,
                        name: v,
                        instance: m,
                        options: p
                    })
                      , _ = function() {};
                    f.push(S || _)
                }
            })
        }
        function C() {
            f.forEach(function(b) {
                return b()
            }),
            f = []
        }
        return m
    }
}
var ka = {
    passive: !0
};
function hC(e) {
    var t = e.state
      , n = e.instance
      , o = e.options
      , r = o.scroll
      , a = r === void 0 ? !0 : r
      , i = o.resize
      , l = i === void 0 ? !0 : i
      , s = on(t.elements.popper)
      , c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return a && c.forEach(function(u) {
        u.addEventListener("scroll", n.update, ka)
    }),
    l && s.addEventListener("resize", n.update, ka),
    function() {
        a && c.forEach(function(u) {
            u.removeEventListener("scroll", n.update, ka)
        }),
        l && s.removeEventListener("resize", n.update, ka)
    }
}
var gC = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: hC,
    data: {}
};
function mC(e) {
    var t = e.state
      , n = e.name;
    t.modifiersData[n] = uC({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
var vC = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: mC,
    data: {}
}
  , bC = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function yC(e) {
    var t = e.x
      , n = e.y
      , o = window
      , r = o.devicePixelRatio || 1;
    return {
        x: nr(t * r) / r || 0,
        y: nr(n * r) / r || 0
    }
}
function wu(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, f = e.isFixed, h = i.x, m = h === void 0 ? 0 : h, w = i.y, C = w === void 0 ? 0 : w, b = typeof u == "function" ? u({
        x: m,
        y: C
    }) : {
        x: m,
        y: C
    };
    m = b.x,
    C = b.y;
    var v = i.hasOwnProperty("x")
      , g = i.hasOwnProperty("y")
      , p = ko
      , y = Jo
      , S = window;
    if (c) {
        var _ = Th(n)
          , O = "clientHeight"
          , x = "clientWidth";
        if (_ === on(n) && (_ = yi(n),
        On(_).position !== "static" && l === "absolute" && (O = "scrollHeight",
        x = "scrollWidth")),
        _ = _,
        r === Jo || (r === ko || r === Kr) && a === qa) {
            y = Ya;
            var B = f && _ === S && S.visualViewport ? S.visualViewport.height : _[O];
            C -= B - o.height,
            C *= s ? 1 : -1
        }
        if (r === ko || (r === Jo || r === Ya) && a === qa) {
            p = Kr;
            var $ = f && _ === S && S.visualViewport ? S.visualViewport.width : _[x];
            m -= $ - o.width,
            m *= s ? 1 : -1
        }
    }
    var k = Object.assign({
        position: l
    }, c && bC)
      , E = u === !0 ? yC({
        x: m,
        y: C
    }) : {
        x: m,
        y: C
    };
    if (m = E.x,
    C = E.y,
    s) {
        var I;
        return Object.assign({}, k, (I = {},
        I[y] = g ? "0" : "",
        I[p] = v ? "0" : "",
        I.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + C + "px)" : "translate3d(" + m + "px, " + C + "px, 0)",
        I))
    }
    return Object.assign({}, k, (t = {},
    t[y] = g ? C + "px" : "",
    t[p] = v ? m + "px" : "",
    t.transform = "",
    t))
}
function pC(e) {
    var t = e.state
      , n = e.options
      , o = n.gpuAcceleration
      , r = o === void 0 ? !0 : o
      , a = n.adaptive
      , i = a === void 0 ? !0 : a
      , l = n.roundOffsets
      , s = l === void 0 ? !0 : l;
    {
        var c = On(t.elements.popper).transitionProperty || "";
        i && ["transform", "top", "right", "bottom", "left"].some(function(f) {
            return c.indexOf(f) >= 0
        }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "))
    }
    var u = {
        placement: pi(t.placement),
        variation: Ah(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: r,
        isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, wu(Object.assign({}, u, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: i,
        roundOffsets: s
    })))),
    t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, wu(Object.assign({}, u, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: s
    })))),
    t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
var wC = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: pC,
    data: {}
};
function SC(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
        var o = t.styles[n] || {}
          , r = t.attributes[n] || {}
          , a = t.elements[n];
        !Zt(a) || !An(a) || (Object.assign(a.style, o),
        Object.keys(r).forEach(function(i) {
            var l = r[i];
            l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l)
        }))
    })
}
function CC(e) {
    var t = e.state
      , n = {
        popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper),
    t.styles = n,
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function() {
        Object.keys(t.elements).forEach(function(o) {
            var r = t.elements[o]
              , a = t.attributes[o] || {}
              , i = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o])
              , l = i.reduce(function(s, c) {
                return s[c] = "",
                s
            }, {});
            !Zt(r) || !An(r) || (Object.assign(r.style, l),
            Object.keys(a).forEach(function(s) {
                r.removeAttribute(s)
            }))
        })
    }
}
var xC = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: SC,
    effect: CC,
    requires: ["computeStyles"]
}
  , _C = [gC, vC, wC, xC]
  , kC = fC({
    defaultModifiers: _C
});
function TC(e, t, n) {
    var o = pi(e)
      , r = [ko, Jo].indexOf(o) >= 0 ? -1 : 1
      , a = typeof n == "function" ? n(Object.assign({}, t, {
        placement: e
    })) : n
      , i = a[0]
      , l = a[1];
    return i = i || 0,
    l = (l || 0) * r,
    [ko, Kr].indexOf(o) >= 0 ? {
        x: l,
        y: i
    } : {
        x: i,
        y: l
    }
}
function PC(e) {
    var t = e.state
      , n = e.options
      , o = e.name
      , r = n.offset
      , a = r === void 0 ? [0, 0] : r
      , i = YS.reduce(function(u, f) {
        return u[f] = TC(f, t.rects, a),
        u
    }, {})
      , l = i[t.placement]
      , s = l.x
      , c = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s,
    t.modifiersData.popperOffsets.y += c),
    t.modifiersData[o] = i
}
var EC = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: PC
};
const [AC,bo] = W("popover")
  , OC = ["overlay", "duration", "teleport", "overlayStyle", "overlayClass", "closeOnClickOverlay"]
  , BC = {
    show: Boolean,
    theme: X("light"),
    overlay: Boolean,
    actions: Ye(),
    actionsDirection: X("vertical"),
    trigger: X("click"),
    duration: q,
    showArrow: z,
    placement: X("bottom"),
    iconPrefix: String,
    overlayClass: Xe,
    overlayStyle: Object,
    closeOnClickAction: z,
    closeOnClickOverlay: z,
    closeOnClickOutside: z,
    offset: {
        type: Array,
        default: ()=>[0, 8]
    },
    teleport: {
        type: [String, Object],
        default: "body"
    }
};
var $C = j({
    name: AC,
    props: BC,
    emits: ["select", "touchstart", "update:show"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        let r;
        const a = R()
          , i = R()
          , l = R()
          , s = gs(()=>e.show, g=>t("update:show", g))
          , c = ()=>({
            placement: e.placement,
            modifiers: [{
                name: "computeStyles",
                options: {
                    adaptive: !1,
                    gpuAcceleration: !1
                }
            }, ve({}, EC, {
                options: {
                    offset: e.offset
                }
            })]
        })
          , u = ()=>i.value && l.value ? kC(i.value, l.value.popupRef.value, c()) : null
          , f = ()=>{
            Te(()=>{
                s.value && (r ? r.setOptions(c()) : (r = u(),
                It && (window.addEventListener("animationend", f),
                window.addEventListener("transitionend", f))))
            }
            )
        }
          , h = g=>{
            s.value = g
        }
          , m = ()=>{
            e.trigger === "click" && (s.value = !s.value)
        }
          , w = (g,p)=>{
            g.disabled || (t("select", g, p),
            e.closeOnClickAction && (s.value = !1))
        }
          , C = ()=>{
            s.value && e.closeOnClickOutside && (!e.overlay || e.closeOnClickOverlay) && (s.value = !1)
        }
          , b = (g,p)=>n.action ? n.action({
            action: g,
            index: p
        }) : [g.icon && d(Ce, {
            name: g.icon,
            classPrefix: e.iconPrefix,
            class: bo("action-icon")
        }, null), d("div", {
            class: [bo("action-text"), {
                [us]: e.actionsDirection === "vertical"
            }]
        }, [g.text])]
          , v = (g,p)=>{
            const {icon: y, color: S, disabled: _, className: O} = g;
            return d("div", {
                role: "menuitem",
                class: [bo("action", {
                    disabled: _,
                    "with-icon": y
                }), {
                    [hb]: e.actionsDirection === "horizontal"
                }, O],
                style: {
                    color: S
                },
                tabindex: _ ? void 0 : 0,
                "aria-disabled": _ || void 0,
                onClick: ()=>w(g, p)
            }, [b(g, p)])
        }
        ;
        return tt(()=>{
            f(),
            ar(()=>{
                var g;
                a.value = (g = l.value) == null ? void 0 : g.popupRef.value
            }
            )
        }
        ),
        bn(()=>{
            r && (It && (window.removeEventListener("animationend", f),
            window.removeEventListener("transitionend", f)),
            r.destroy(),
            r = null)
        }
        ),
        oe(()=>[s.value, e.offset, e.placement], f),
        li([i, a], C, {
            eventName: "touchstart"
        }),
        ()=>{
            var g;
            return d(Fe, null, [d("span", {
                ref: i,
                class: bo("wrapper"),
                onClick: m
            }, [(g = n.reference) == null ? void 0 : g.call(n)]), d(Rt, Ae({
                ref: l,
                show: s.value,
                class: bo([e.theme]),
                position: "",
                transition: "van-popover-zoom",
                lockScroll: !1,
                "onUpdate:show": h
            }, o, Ua(), Le(e, OC)), {
                default: ()=>[e.showArrow && d("div", {
                    class: bo("arrow")
                }, null), d("div", {
                    role: "menu",
                    class: bo("content", e.actionsDirection)
                }, [n.default ? n.default() : e.actions.map(v)])]
            })])
        }
    }
});
const DC = G($C)
  , [IC,Xi] = W("progress")
  , RC = {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    showPivot: z,
    pivotColor: String,
    trackColor: String,
    strokeWidth: q,
    percentage: {
        type: q,
        default: 0,
        validator: e=>+e >= 0 && +e <= 100
    }
};
var LC = j({
    name: IC,
    props: RC,
    setup(e) {
        const t = D(()=>e.inactive ? void 0 : e.color)
          , n = ()=>{
            const {textColor: o, pivotText: r, pivotColor: a, percentage: i} = e
              , l = r ?? `${i}%`;
            if (e.showPivot && l) {
                const s = {
                    color: o,
                    left: `${+i}%`,
                    transform: `translate(-${+i}%,-50%)`,
                    background: a || t.value
                };
                return d("span", {
                    style: s,
                    class: Xi("pivot", {
                        inactive: e.inactive
                    })
                }, [l])
            }
        }
        ;
        return ()=>{
            const {trackColor: o, percentage: r, strokeWidth: a} = e
              , i = {
                background: o,
                height: Se(a)
            }
              , l = {
                width: `${r}%`,
                background: t.value
            };
            return d("div", {
                class: Xi(),
                style: i
            }, [d("span", {
                class: Xi("portion", {
                    inactive: e.inactive
                }),
                style: l
            }, null), n()])
        }
    }
});
const MC = G(LC)
  , [FC,Sr,VC] = W("pull-refresh")
  , Oh = 50
  , NC = ["pulling", "loosing", "success"]
  , HC = {
    disabled: Boolean,
    modelValue: Boolean,
    headHeight: ce(Oh),
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    pullDistance: q,
    successDuration: ce(500),
    animationDuration: ce(300)
};
var zC = j({
    name: FC,
    props: HC,
    emits: ["change", "refresh", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let o;
        const r = R()
          , a = R()
          , i = ur(r)
          , l = Ke({
            status: "normal",
            distance: 0,
            duration: 0
        })
          , s = zt()
          , c = ()=>{
            if (e.headHeight !== Oh)
                return {
                    height: `${e.headHeight}px`
                }
        }
          , u = ()=>l.status !== "loading" && l.status !== "success" && !e.disabled
          , f = y=>{
            const S = +(e.pullDistance || e.headHeight);
            return y > S && (y < S * 2 ? y = S + (y - S) / 2 : y = S * 1.5 + (y - S * 2) / 4),
            Math.round(y)
        }
          , h = (y,S)=>{
            const _ = +(e.pullDistance || e.headHeight);
            l.distance = y,
            S ? l.status = "loading" : y === 0 ? l.status = "normal" : y < _ ? l.status = "pulling" : l.status = "loosing",
            t("change", {
                status: l.status,
                distance: y
            })
        }
          , m = ()=>{
            const {status: y} = l;
            return y === "normal" ? "" : e[`${y}Text`] || VC(y)
        }
          , w = ()=>{
            const {status: y, distance: S} = l;
            if (n[y])
                return n[y]({
                    distance: S
                });
            const _ = [];
            return NC.includes(y) && _.push(d("div", {
                class: Sr("text")
            }, [m()])),
            y === "loading" && _.push(d(tn, {
                class: Sr("loading")
            }, {
                default: m
            })),
            _
        }
          , C = ()=>{
            l.status = "success",
            setTimeout(()=>{
                h(0)
            }
            , +e.successDuration)
        }
          , b = y=>{
            o = En(i.value) === 0,
            o && (l.duration = 0,
            s.start(y))
        }
          , v = y=>{
            u() && b(y)
        }
          , g = y=>{
            if (u()) {
                o || b(y);
                const {deltaY: S} = s;
                s.move(y),
                o && S.value >= 0 && s.isVertical() && (Ue(y),
                h(f(S.value)))
            }
        }
          , p = ()=>{
            o && s.deltaY.value && u() && (l.duration = +e.animationDuration,
            l.status === "loosing" ? (h(+e.headHeight, !0),
            t("update:modelValue", !0),
            Te(()=>t("refresh"))) : h(0))
        }
        ;
        return oe(()=>e.modelValue, y=>{
            l.duration = +e.animationDuration,
            y ? h(+e.headHeight, !0) : n.success || e.successText ? C() : h(0, !1)
        }
        ),
        et("touchmove", g, {
            target: a
        }),
        ()=>{
            var y;
            const S = {
                transitionDuration: `${l.duration}ms`,
                transform: l.distance ? `translate3d(0,${l.distance}px, 0)` : ""
            };
            return d("div", {
                ref: r,
                class: Sr()
            }, [d("div", {
                ref: a,
                class: Sr("track"),
                style: S,
                onTouchstartPassive: v,
                onTouchend: p,
                onTouchcancel: p
            }, [d("div", {
                class: Sr("head"),
                style: c()
            }, [w()]), (y = n.default) == null ? void 0 : y.call(n)])])
        }
    }
});
const jC = G(zC)
  , [UC,Ta] = W("rate");
function WC(e, t, n, o) {
    return e >= t ? {
        status: "full",
        value: 1
    } : e + .5 >= t && n && !o ? {
        status: "half",
        value: .5
    } : e + 1 >= t && n && o ? {
        status: "half",
        value: Math.round((e - t + 1) * 1e10) / 1e10
    } : {
        status: "void",
        value: 0
    }
}
const YC = {
    size: q,
    icon: X("star"),
    color: String,
    count: ce(5),
    gutter: q,
    clearable: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    voidIcon: X("star-o"),
    allowHalf: Boolean,
    voidColor: String,
    touchable: z,
    iconPrefix: String,
    modelValue: ot(0),
    disabledColor: String
};
var qC = j({
    name: UC,
    props: YC,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = zt()
          , [o,r] = ea()
          , a = R()
          , i = D(()=>e.readonly || e.disabled)
          , l = D(()=>i.value || !e.touchable)
          , s = D(()=>Array(+e.count).fill("").map((p,y)=>WC(e.modelValue, y + 1, e.allowHalf, e.readonly)));
        let c, u, f = Number.MAX_SAFE_INTEGER, h = Number.MIN_SAFE_INTEGER;
        const m = ()=>{
            u = Ve(a);
            const p = o.value.map(Ve);
            c = [],
            p.forEach((y,S)=>{
                f = Math.min(y.top, f),
                h = Math.max(y.top, h),
                e.allowHalf ? c.push({
                    score: S + .5,
                    left: y.left,
                    top: y.top,
                    height: y.height
                }, {
                    score: S + 1,
                    left: y.left + y.width / 2,
                    top: y.top,
                    height: y.height
                }) : c.push({
                    score: S + 1,
                    left: y.left,
                    top: y.top,
                    height: y.height
                })
            }
            )
        }
          , w = (p,y)=>{
            for (let S = c.length - 1; S > 0; S--)
                if (y >= u.top && y <= u.bottom) {
                    if (p > c[S].left && y >= c[S].top && y <= c[S].top + c[S].height)
                        return c[S].score
                } else {
                    const _ = y < u.top ? f : h;
                    if (p > c[S].left && c[S].top === _)
                        return c[S].score
                }
            return e.allowHalf ? .5 : 1
        }
          , C = p=>{
            i.value || p === e.modelValue || (t("update:modelValue", p),
            t("change", p))
        }
          , b = p=>{
            l.value || (n.start(p),
            m())
        }
          , v = p=>{
            if (!l.value && (n.move(p),
            n.isHorizontal() && !n.isTap.value)) {
                const {clientX: y, clientY: S} = p.touches[0];
                Ue(p),
                C(w(y, S))
            }
        }
          , g = (p,y)=>{
            const {icon: S, size: _, color: O, count: x, gutter: B, voidIcon: $, disabled: k, voidColor: E, allowHalf: I, iconPrefix: Q, disabledColor: ne} = e
              , N = y + 1
              , Z = p.status === "full"
              , ie = p.status === "void"
              , Ee = I && p.value > 0 && p.value < 1;
            let $e;
            B && N !== +x && ($e = {
                paddingRight: Se(B)
            });
            const M = K=>{
                m();
                let fe = I ? w(K.clientX, K.clientY) : N;
                e.clearable && n.isTap.value && fe === e.modelValue && (fe = 0),
                C(fe)
            }
            ;
            return d("div", {
                key: y,
                ref: r(y),
                role: "radio",
                style: $e,
                class: Ta("item"),
                tabindex: k ? void 0 : 0,
                "aria-setsize": x,
                "aria-posinset": N,
                "aria-checked": !ie,
                onClick: M
            }, [d(Ce, {
                size: _,
                name: Z ? S : $,
                class: Ta("icon", {
                    disabled: k,
                    full: Z
                }),
                color: k ? ne : Z ? O : E,
                classPrefix: Q
            }, null), Ee && d(Ce, {
                size: _,
                style: {
                    width: p.value + "em"
                },
                name: ie ? $ : S,
                class: Ta("icon", ["half", {
                    disabled: k,
                    full: !ie
                }]),
                color: k ? ne : ie ? E : O,
                classPrefix: Q
            }, null)])
        }
        ;
        return so(()=>e.modelValue),
        et("touchmove", v, {
            target: a
        }),
        ()=>d("div", {
            ref: a,
            role: "radiogroup",
            class: Ta({
                readonly: e.readonly,
                disabled: e.disabled
            }),
            tabindex: e.disabled ? void 0 : 0,
            "aria-disabled": e.disabled,
            "aria-readonly": e.readonly,
            onTouchstartPassive: b
        }, [s.value.map(g)])
    }
});
const KC = G(qC)
  , GC = {
    figureArr: Ye(),
    delay: Number,
    duration: ot(2),
    isStart: Boolean,
    direction: X("down"),
    height: ot(40)
}
  , [XC,Qi] = W("rolling-text-item");
var QC = j({
    name: XC,
    props: GC,
    setup(e) {
        const t = D(()=>e.direction === "down" ? e.figureArr.slice().reverse() : e.figureArr)
          , n = D(()=>`-${e.height * (e.figureArr.length - 1)}px`)
          , o = D(()=>({
            lineHeight: Se(e.height)
        }))
          , r = D(()=>({
            height: Se(e.height),
            "--van-translate": n.value,
            "--van-duration": e.duration + "s",
            "--van-delay": e.delay + "s"
        }));
        return ()=>d("div", {
            class: Qi([e.direction]),
            style: r.value
        }, [d("div", {
            class: Qi("box", {
                animate: e.isStart
            })
        }, [Array.isArray(t.value) && t.value.map(a=>d("div", {
            class: Qi("item"),
            style: o.value
        }, [a]))])])
    }
});
const [ZC,JC] = W("rolling-text")
  , ex = {
    startNum: ot(0),
    targetNum: Number,
    textList: Ye(),
    duration: ot(2),
    autoStart: z,
    direction: X("down"),
    stopOrder: X("ltr"),
    height: ot(40)
}
  , tx = 2;
var nx = j({
    name: ZC,
    props: ex,
    setup(e) {
        const t = D(()=>Array.isArray(e.textList) && e.textList.length)
          , n = D(()=>t.value ? e.textList[0].length : `${Math.max(e.startNum, e.targetNum)}`.length)
          , o = f=>{
            const h = [];
            for (let m = 0; m < e.textList.length; m++)
                h.push(e.textList[m][f]);
            return h
        }
          , r = D(()=>t.value ? new Array(n.value).fill("") : qt(e.targetNum, n.value).split(""))
          , a = D(()=>qt(e.startNum, n.value).split(""))
          , i = f=>{
            const h = +a.value[f]
              , m = +r.value[f]
              , w = [];
            for (let C = h; C <= 9; C++)
                w.push(C);
            for (let C = 0; C <= tx; C++)
                for (let b = 0; b <= 9; b++)
                    w.push(b);
            for (let C = 0; C <= m; C++)
                w.push(C);
            return w
        }
          , l = (f,h)=>e.stopOrder === "ltr" ? .2 * f : .2 * (h - 1 - f)
          , s = R(e.autoStart)
          , c = ()=>{
            s.value = !0
        }
          , u = ()=>{
            s.value = !1,
            e.autoStart && bt(()=>c())
        }
        ;
        return oe(()=>e.autoStart, f=>{
            f && c()
        }
        ),
        Oe({
            start: c,
            reset: u
        }),
        ()=>d("div", {
            class: JC()
        }, [r.value.map((f,h)=>d(QC, {
            figureArr: t.value ? o(h) : i(h),
            duration: e.duration,
            direction: e.direction,
            isStart: s.value,
            height: e.height,
            delay: l(h, n.value)
        }, null))])
    }
});
const ox = G(nx)
  , rx = G(q0)
  , [ax,Cr,ix] = W("search")
  , lx = ve({}, ys, {
    label: String,
    shape: X("square"),
    leftIcon: X("search"),
    clearable: z,
    actionText: String,
    background: String,
    showAction: Boolean
});
var sx = j({
    name: ax,
    props: lx,
    emits: ["blur", "focus", "clear", "search", "cancel", "clickInput", "clickLeftIcon", "clickRightIcon", "update:modelValue"],
    setup(e, {emit: t, slots: n, attrs: o}) {
        const r = fr()
          , a = R()
          , i = ()=>{
            n.action || (t("update:modelValue", ""),
            t("cancel"))
        }
          , l = S=>{
            S.keyCode === 13 && (Ue(S),
            t("search", e.modelValue))
        }
          , s = ()=>e.id || `${r}-input`
          , c = ()=>{
            if (n.label || e.label)
                return d("label", {
                    class: Cr("label"),
                    for: s()
                }, [n.label ? n.label() : e.label])
        }
          , u = ()=>{
            if (e.showAction) {
                const S = e.actionText || ix("cancel");
                return d("div", {
                    class: Cr("action"),
                    role: "button",
                    tabindex: 0,
                    onClick: i
                }, [n.action ? n.action() : S])
            }
        }
          , f = ()=>{
            var S;
            return (S = a.value) == null ? void 0 : S.blur()
        }
          , h = ()=>{
            var S;
            return (S = a.value) == null ? void 0 : S.focus()
        }
          , m = S=>t("blur", S)
          , w = S=>t("focus", S)
          , C = S=>t("clear", S)
          , b = S=>t("clickInput", S)
          , v = S=>t("clickLeftIcon", S)
          , g = S=>t("clickRightIcon", S)
          , p = Object.keys(ys)
          , y = ()=>{
            const S = ve({}, o, Le(e, p), {
                id: s()
            })
              , _ = O=>t("update:modelValue", O);
            return d(Tn, Ae({
                ref: a,
                type: "search",
                class: Cr("field", {
                    "with-message": S.errorMessage
                }),
                border: !1,
                onBlur: m,
                onFocus: w,
                onClear: C,
                onKeypress: l,
                onClickInput: b,
                onClickLeftIcon: v,
                onClickRightIcon: g,
                "onUpdate:modelValue": _
            }, S), Le(n, ["left-icon", "right-icon"]))
        }
        ;
        return Oe({
            focus: h,
            blur: f
        }),
        ()=>{
            var S;
            return d("div", {
                class: Cr({
                    "show-action": e.showAction
                }),
                style: {
                    background: e.background
                }
            }, [(S = n.left) == null ? void 0 : S.call(n), d("div", {
                class: Cr("content", e.shape)
            }, [c(), y()]), u()])
        }
    }
});
const cx = G(sx)
  , ux = e=>e == null ? void 0 : e.includes("/")
  , dx = [...fs, "round", "closeOnPopstate", "safeAreaInsetBottom"]
  , fx = {
    qq: "qq",
    link: "link-o",
    weibo: "weibo",
    qrcode: "qr",
    poster: "photo-o",
    wechat: "wechat",
    "weapp-qrcode": "miniprogram-o",
    "wechat-moments": "wechat-moments"
}
  , [hx,Wt,gx] = W("share-sheet")
  , mx = ve({}, dr, {
    title: String,
    round: z,
    options: Ye(),
    cancelText: String,
    description: String,
    closeOnPopstate: z,
    safeAreaInsetBottom: z
});
var vx = j({
    name: hx,
    props: mx,
    emits: ["cancel", "select", "update:show"],
    setup(e, {emit: t, slots: n}) {
        const o = h=>t("update:show", h)
          , r = ()=>{
            o(!1),
            t("cancel")
        }
          , a = (h,m)=>t("select", h, m)
          , i = ()=>{
            const h = n.title ? n.title() : e.title
              , m = n.description ? n.description() : e.description;
            if (h || m)
                return d("div", {
                    class: Wt("header")
                }, [h && d("h2", {
                    class: Wt("title")
                }, [h]), m && d("span", {
                    class: Wt("description")
                }, [m])])
        }
          , l = h=>ux(h) ? d("img", {
            src: h,
            class: Wt("image-icon")
        }, null) : d("div", {
            class: Wt("icon", [h])
        }, [d(Ce, {
            name: fx[h] || h
        }, null)])
          , s = (h,m)=>{
            const {name: w, icon: C, className: b, description: v} = h;
            return d("div", {
                role: "button",
                tabindex: 0,
                class: [Wt("option"), b, yt],
                onClick: ()=>a(h, m)
            }, [l(C), w && d("span", {
                class: Wt("name")
            }, [w]), v && d("span", {
                class: Wt("option-description")
            }, [v])])
        }
          , c = (h,m)=>d("div", {
            class: Wt("options", {
                border: m
            })
        }, [h.map(s)])
          , u = ()=>{
            const {options: h} = e;
            return Array.isArray(h[0]) ? h.map((m,w)=>c(m, w !== 0)) : c(h)
        }
          , f = ()=>{
            var h;
            const m = (h = e.cancelText) != null ? h : gx("cancel");
            if (n.cancel || m)
                return d("button", {
                    type: "button",
                    class: Wt("cancel"),
                    onClick: r
                }, [n.cancel ? n.cancel() : m])
        }
        ;
        return ()=>d(Rt, Ae({
            class: Wt(),
            position: "bottom",
            "onUpdate:show": o
        }, Le(e, dx)), {
            default: ()=>[i(), u(), f()]
        })
    }
});
const bx = G(vx)
  , [Bh,yx] = W("sidebar")
  , $h = Symbol(Bh)
  , px = {
    modelValue: ce(0)
};
var wx = j({
    name: Bh,
    props: px,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = wt($h)
          , r = ()=>+e.modelValue;
        return o({
            getActive: r,
            setActive: i=>{
                i !== r() && (t("update:modelValue", i),
                t("change", i))
            }
        }),
        ()=>{
            var i;
            return d("div", {
                role: "tablist",
                class: yx()
            }, [(i = n.default) == null ? void 0 : i.call(n)])
        }
    }
});
const Dh = G(wx)
  , [Sx,Su] = W("sidebar-item")
  , Cx = ve({}, uo, {
    dot: Boolean,
    title: String,
    badge: q,
    disabled: Boolean,
    badgeProps: Object
});
var xx = j({
    name: Sx,
    props: Cx,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , {parent: r, index: a} = gt($h);
        if (!r)
            return;
        const i = ()=>{
            e.disabled || (t("click", a.value),
            r.setActive(a.value),
            o())
        }
        ;
        return ()=>{
            const {dot: l, badge: s, title: c, disabled: u} = e
              , f = a.value === r.getActive();
            return d("div", {
                role: "tab",
                class: Su({
                    select: f,
                    disabled: u
                }),
                tabindex: u ? void 0 : 0,
                "aria-selected": f,
                onClick: i
            }, [d(Ao, Ae({
                dot: l,
                class: Su("text"),
                content: s
            }, e.badgeProps), {
                default: ()=>[n.title ? n.title() : c]
            })])
        }
    }
});
const Ih = G(xx)
  , [_x,Zi,Cu] = W("signature")
  , kx = {
    tips: String,
    type: X("png"),
    penColor: X("#000"),
    lineWidth: ot(3),
    clearButtonText: String,
    backgroundColor: X(""),
    confirmButtonText: String
}
  , Tx = ()=>{
    var e;
    const t = document.createElement("canvas");
    return !!((e = t.getContext) != null && e.call(t, "2d"))
}
;
var Px = j({
    name: _x,
    props: kx,
    emits: ["submit", "clear", "start", "end", "signing"],
    setup(e, {emit: t}) {
        const n = R()
          , o = R()
          , r = D(()=>n.value ? n.value.getContext("2d") : null)
          , a = It ? Tx() : !0;
        let i = 0, l = 0, s;
        const c = ()=>{
            if (!r.value)
                return !1;
            r.value.beginPath(),
            r.value.lineWidth = e.lineWidth,
            r.value.strokeStyle = e.penColor,
            s = Ve(n),
            t("start")
        }
          , u = g=>{
            if (!r.value)
                return !1;
            Ue(g);
            const p = g.touches[0]
              , y = p.clientX - ((s == null ? void 0 : s.left) || 0)
              , S = p.clientY - ((s == null ? void 0 : s.top) || 0);
            r.value.lineCap = "round",
            r.value.lineJoin = "round",
            r.value.lineTo(y, S),
            r.value.stroke(),
            t("signing", g)
        }
          , f = g=>{
            Ue(g),
            t("end")
        }
          , h = g=>{
            const p = document.createElement("canvas");
            if (p.width = g.width,
            p.height = g.height,
            e.backgroundColor) {
                const y = p.getContext("2d");
                m(y)
            }
            return g.toDataURL() === p.toDataURL()
        }
          , m = g=>{
            g && e.backgroundColor && (g.fillStyle = e.backgroundColor,
            g.fillRect(0, 0, i, l))
        }
          , w = ()=>{
            var g, p;
            const y = n.value;
            if (!y)
                return;
            const _ = h(y) ? "" : ((p = (g = {
                jpg: ()=>y.toDataURL("image/jpeg", .8),
                jpeg: ()=>y.toDataURL("image/jpeg", .8)
            })[e.type]) == null ? void 0 : p.call(g)) || y.toDataURL(`image/${e.type}`);
            t("submit", {
                image: _,
                canvas: y
            })
        }
          , C = ()=>{
            r.value && (r.value.clearRect(0, 0, i, l),
            r.value.closePath(),
            m(r.value)),
            t("clear")
        }
          , b = ()=>{
            var g, p, y;
            if (a && n.value) {
                const S = n.value
                  , _ = It ? window.devicePixelRatio : 1;
                i = S.width = (((g = o.value) == null ? void 0 : g.offsetWidth) || 0) * _,
                l = S.height = (((p = o.value) == null ? void 0 : p.offsetHeight) || 0) * _,
                (y = r.value) == null || y.scale(_, _),
                m(r.value)
            }
        }
          , v = ()=>{
            if (r.value) {
                const g = r.value.getImageData(0, 0, i, l);
                b(),
                r.value.putImageData(g, 0, 0)
            }
        }
        ;
        return oe(Qt, v),
        tt(b),
        Oe({
            resize: v,
            clear: C,
            submit: w
        }),
        ()=>d("div", {
            class: Zi()
        }, [d("div", {
            class: Zi("content"),
            ref: o
        }, [a ? d("canvas", {
            ref: n,
            onTouchstartPassive: c,
            onTouchmove: u,
            onTouchend: f
        }, null) : d("p", null, [e.tips])]), d("div", {
            class: Zi("footer")
        }, [d(pt, {
            size: "small",
            onClick: C
        }, {
            default: ()=>[e.clearButtonText || Cu("clear")]
        }), d(pt, {
            type: "primary",
            size: "small",
            onClick: w
        }, {
            default: ()=>[e.confirmButtonText || Cu("confirm")]
        })])])
    }
});
const Ex = G(Px)
  , [Ax,Ox] = W("skeleton-title")
  , Bx = {
    round: Boolean,
    titleWidth: q
};
var $x = j({
    name: Ax,
    props: Bx,
    setup(e) {
        return ()=>d("h3", {
            class: Ox([{
                round: e.round
            }]),
            style: {
                width: Se(e.titleWidth)
            }
        }, null)
    }
});
const Rh = G($x);
var Dx = Rh;
const [Ix,Rx] = W("skeleton-avatar")
  , Lx = {
    avatarSize: q,
    avatarShape: X("round")
};
var Mx = j({
    name: Ix,
    props: Lx,
    setup(e) {
        return ()=>d("div", {
            class: Rx([e.avatarShape]),
            style: $n(e.avatarSize)
        }, null)
    }
});
const Lh = G(Mx);
var Fx = Lh;
const Bs = "100%"
  , Vx = {
    round: Boolean,
    rowWidth: {
        type: q,
        default: Bs
    }
}
  , [Nx,Hx] = W("skeleton-paragraph");
var zx = j({
    name: Nx,
    props: Vx,
    setup(e) {
        return ()=>d("div", {
            class: Hx([{
                round: e.round
            }]),
            style: {
                width: e.rowWidth
            }
        }, null)
    }
});
const Mh = G(zx);
var jx = Mh;
const [Ux,xu] = W("skeleton")
  , Wx = "60%"
  , Yx = {
    row: ce(0),
    round: Boolean,
    title: Boolean,
    titleWidth: q,
    avatar: Boolean,
    avatarSize: q,
    avatarShape: X("round"),
    loading: z,
    animate: z,
    rowWidth: {
        type: [Number, String, Array],
        default: Bs
    }
};
var qx = j({
    name: Ux,
    inheritAttrs: !1,
    props: Yx,
    setup(e, {slots: t, attrs: n}) {
        const o = ()=>{
            if (e.avatar)
                return d(Fx, {
                    avatarShape: e.avatarShape,
                    avatarSize: e.avatarSize
                }, null)
        }
          , r = ()=>{
            if (e.title)
                return d(Dx, {
                    round: e.round,
                    titleWidth: e.titleWidth
                }, null)
        }
          , a = s=>{
            const {rowWidth: c} = e;
            return c === Bs && s === +e.row - 1 ? Wx : Array.isArray(c) ? c[s] : c
        }
          , i = ()=>Array(+e.row).fill("").map((s,c)=>d(jx, {
            key: c,
            round: e.round,
            rowWidth: Se(a(c))
        }, null))
          , l = ()=>t.template ? t.template() : d(Fe, null, [o(), d("div", {
            class: xu("content")
        }, [r(), i()])]);
        return ()=>{
            var s;
            return e.loading ? d("div", Ae({
                class: xu({
                    animate: e.animate,
                    round: e.round
                })
            }, n), [l()]) : (s = t.default) == null ? void 0 : s.call(t)
        }
    }
});
const Kx = G(qx)
  , [Gx,_u] = W("skeleton-image")
  , Xx = {
    imageSize: q,
    imageShape: X("square")
};
var Qx = j({
    name: Gx,
    props: Xx,
    setup(e) {
        return ()=>d("div", {
            class: _u([e.imageShape]),
            style: $n(e.imageSize)
        }, [d(Ce, {
            name: "photo",
            class: _u("icon")
        }, null)])
    }
});
const Zx = G(Qx)
  , [Jx,xr] = W("slider")
  , e_ = {
    min: ce(0),
    max: ce(100),
    step: ce(1),
    range: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    vertical: Boolean,
    barHeight: q,
    buttonSize: q,
    activeColor: String,
    inactiveColor: String,
    modelValue: {
        type: [Number, Array],
        default: 0
    }
};
var t_ = j({
    name: Jx,
    props: e_,
    emits: ["change", "dragEnd", "dragStart", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        let o, r, a;
        const i = R()
          , l = [R(), R()]
          , s = R()
          , c = zt()
          , u = D(()=>Number(e.max) - Number(e.min))
          , f = D(()=>{
            const k = e.vertical ? "width" : "height";
            return {
                background: e.inactiveColor,
                [k]: Se(e.barHeight)
            }
        }
        )
          , h = k=>e.range && Array.isArray(k)
          , m = ()=>{
            const {modelValue: k, min: E} = e;
            return h(k) ? `${(k[1] - k[0]) * 100 / u.value}%` : `${(k - Number(E)) * 100 / u.value}%`
        }
          , w = ()=>{
            const {modelValue: k, min: E} = e;
            return h(k) ? `${(k[0] - Number(E)) * 100 / u.value}%` : "0%"
        }
          , C = D(()=>{
            const E = {
                [e.vertical ? "height" : "width"]: m(),
                background: e.activeColor
            };
            s.value && (E.transition = "none");
            const I = ()=>e.vertical ? e.reverse ? "bottom" : "top" : e.reverse ? "right" : "left";
            return E[I()] = w(),
            E
        }
        )
          , b = k=>{
            const E = +e.min
              , I = +e.max
              , Q = +e.step;
            k = ht(k, E, I);
            const ne = Math.round((k - E) / Q) * Q;
            return bf(E, ne)
        }
          , v = ()=>{
            const k = e.modelValue;
            h(k) ? a = k.map(b) : a = b(k)
        }
          , g = k=>{
            var E, I;
            const Q = (E = k[0]) != null ? E : Number(e.min)
              , ne = (I = k[1]) != null ? I : Number(e.max);
            return Q > ne ? [ne, Q] : [Q, ne]
        }
          , p = (k,E)=>{
            h(k) ? k = g(k).map(b) : k = b(k),
            fn(k, e.modelValue) || t("update:modelValue", k),
            E && !fn(k, a) && t("change", k)
        }
          , y = k=>{
            if (k.stopPropagation(),
            e.disabled || e.readonly)
                return;
            v();
            const {min: E, reverse: I, vertical: Q, modelValue: ne} = e
              , N = Ve(i)
              , Z = ()=>Q ? I ? N.bottom - k.clientY : k.clientY - N.top : I ? N.right - k.clientX : k.clientX - N.left
              , ie = Q ? N.height : N.width
              , Ee = Number(E) + Z() / ie * u.value;
            if (h(ne)) {
                const [$e,M] = ne
                  , K = ($e + M) / 2;
                Ee <= K ? p([Ee, M], !0) : p([$e, Ee], !0)
            } else
                p(Ee, !0)
        }
          , S = k=>{
            e.disabled || e.readonly || (c.start(k),
            r = e.modelValue,
            v(),
            s.value = "start")
        }
          , _ = k=>{
            if (e.disabled || e.readonly)
                return;
            s.value === "start" && t("dragStart", k),
            Ue(k, !0),
            c.move(k),
            s.value = "dragging";
            const E = Ve(i)
              , I = e.vertical ? c.deltaY.value : c.deltaX.value
              , Q = e.vertical ? E.height : E.width;
            let ne = I / Q * u.value;
            if (e.reverse && (ne = -ne),
            h(a)) {
                const N = e.reverse ? 1 - o : o;
                r[N] = a[N] + ne
            } else
                r = a + ne;
            p(r)
        }
          , O = k=>{
            e.disabled || e.readonly || (s.value === "dragging" && (p(r, !0),
            t("dragEnd", k)),
            s.value = "")
        }
          , x = k=>typeof k == "number" ? xr("button-wrapper", ["left", "right"][k]) : xr("button-wrapper", e.reverse ? "left" : "right")
          , B = (k,E)=>{
            const I = s.value === "dragging";
            if (typeof E == "number") {
                const Q = n[E === 0 ? "left-button" : "right-button"];
                let ne;
                if (I && Array.isArray(r) && (ne = r[0] > r[1] ? o ^ 1 : o),
                Q)
                    return Q({
                        value: k,
                        dragging: I,
                        dragIndex: ne
                    })
            }
            return n.button ? n.button({
                value: k,
                dragging: I
            }) : d("div", {
                class: xr("button"),
                style: $n(e.buttonSize)
            }, null)
        }
          , $ = k=>{
            const E = typeof k == "number" ? e.modelValue[k] : e.modelValue;
            return d("div", {
                ref: l[k ?? 0],
                role: "slider",
                class: x(k),
                tabindex: e.disabled ? void 0 : 0,
                "aria-valuemin": e.min,
                "aria-valuenow": E,
                "aria-valuemax": e.max,
                "aria-disabled": e.disabled || void 0,
                "aria-readonly": e.readonly || void 0,
                "aria-orientation": e.vertical ? "vertical" : "horizontal",
                onTouchstartPassive: I=>{
                    typeof k == "number" && (o = k),
                    S(I)
                }
                ,
                onTouchend: O,
                onTouchcancel: O,
                onClick: ss
            }, [B(E, k)])
        }
        ;
        return p(e.modelValue),
        so(()=>e.modelValue),
        l.forEach(k=>{
            et("touchmove", _, {
                target: k
            })
        }
        ),
        ()=>d("div", {
            ref: i,
            style: f.value,
            class: xr({
                vertical: e.vertical,
                disabled: e.disabled
            }),
            onClick: y
        }, [d("div", {
            class: xr("bar"),
            style: C.value
        }, [e.range ? [$(0), $(1)] : $()])])
    }
});
const n_ = G(t_)
  , [ku,o_] = W("space")
  , r_ = {
    align: String,
    direction: {
        type: String,
        default: "horizontal"
    },
    size: {
        type: [Number, String, Array],
        default: 8
    },
    wrap: Boolean,
    fill: Boolean
};
function Fh(e=[]) {
    const t = [];
    return e.forEach(n=>{
        Array.isArray(n) ? t.push(...n) : n.type === Fe ? t.push(...Fh(n.children)) : t.push(n)
    }
    ),
    t.filter(n=>{
        var o;
        return !(n && (n.type === _t || n.type === Fe && ((o = n.children) == null ? void 0 : o.length) === 0 || n.type === Zr && n.children.trim() === ""))
    }
    )
}
var a_ = j({
    name: ku,
    props: r_,
    setup(e, {slots: t}) {
        const n = D(()=>{
            var a;
            return (a = e.align) != null ? a : e.direction === "horizontal" ? "center" : ""
        }
        )
          , o = a=>typeof a == "number" ? a + "px" : a
          , r = a=>{
            const i = {}
              , l = `${o(Array.isArray(e.size) ? e.size[0] : e.size)}`
              , s = `${o(Array.isArray(e.size) ? e.size[1] : e.size)}`;
            return a ? e.wrap ? {
                marginBottom: s
            } : {} : (e.direction === "horizontal" && (i.marginRight = l),
            (e.direction === "vertical" || e.wrap) && (i.marginBottom = s),
            i)
        }
        ;
        return ()=>{
            var a;
            const i = Fh((a = t.default) == null ? void 0 : a.call(t));
            return d("div", {
                class: [o_({
                    [e.direction]: e.direction,
                    [`align-${n.value}`]: n.value,
                    wrap: e.wrap,
                    fill: e.fill
                })]
            }, [i.map((l,s)=>d("div", {
                key: `item-${s}`,
                class: `${ku}-item`,
                style: r(s === i.length - 1)
            }, [l]))])
        }
    }
});
const i_ = G(a_)
  , [Vh,Tu] = W("steps")
  , l_ = {
    active: ce(0),
    direction: X("horizontal"),
    activeIcon: X("checked"),
    iconPrefix: String,
    finishIcon: String,
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String
}
  , Nh = Symbol(Vh);
var s_ = j({
    name: Vh,
    props: l_,
    emits: ["clickStep"],
    setup(e, {emit: t, slots: n}) {
        const {linkChildren: o} = wt(Nh);
        return o({
            props: e,
            onClickStep: a=>t("clickStep", a)
        }),
        ()=>{
            var a;
            return d("div", {
                class: Tu([e.direction])
            }, [d("div", {
                class: Tu("items")
            }, [(a = n.default) == null ? void 0 : a.call(n)])])
        }
    }
});
const [c_,Un] = W("step");
var u_ = j({
    name: c_,
    setup(e, {slots: t}) {
        const {parent: n, index: o} = gt(Nh);
        if (!n)
            return;
        const r = n.props
          , a = ()=>{
            const f = +r.active;
            return o.value < f ? "finish" : o.value === f ? "process" : "waiting"
        }
          , i = ()=>a() === "process"
          , l = D(()=>({
            background: a() === "finish" ? r.activeColor : r.inactiveColor
        }))
          , s = D(()=>{
            if (i())
                return {
                    color: r.activeColor
                };
            if (a() === "waiting")
                return {
                    color: r.inactiveColor
                }
        }
        )
          , c = ()=>n.onClickStep(o.value)
          , u = ()=>{
            const {iconPrefix: f, finishIcon: h, activeIcon: m, activeColor: w, inactiveIcon: C} = r;
            return i() ? t["active-icon"] ? t["active-icon"]() : d(Ce, {
                class: Un("icon", "active"),
                name: m,
                color: w,
                classPrefix: f
            }, null) : a() === "finish" && (h || t["finish-icon"]) ? t["finish-icon"] ? t["finish-icon"]() : d(Ce, {
                class: Un("icon", "finish"),
                name: h,
                color: w,
                classPrefix: f
            }, null) : t["inactive-icon"] ? t["inactive-icon"]() : C ? d(Ce, {
                class: Un("icon"),
                name: C,
                classPrefix: f
            }, null) : d("i", {
                class: Un("circle"),
                style: l.value
            }, null)
        }
        ;
        return ()=>{
            var f;
            const h = a();
            return d("div", {
                class: [In, Un([r.direction, {
                    [h]: h
                }])]
            }, [d("div", {
                class: Un("title", {
                    active: i()
                }),
                style: s.value,
                onClick: c
            }, [(f = t.default) == null ? void 0 : f.call(t)]), d("div", {
                class: Un("circle-container"),
                onClick: c
            }, [u()]), d("div", {
                class: Un("line"),
                style: l.value
            }, null)])
        }
    }
});
const d_ = G(u_)
  , [f_,Pa] = W("stepper")
  , h_ = 200
  , Ea = (e,t)=>String(e) === String(t)
  , g_ = {
    min: ce(1),
    max: ce(1 / 0),
    name: ce(""),
    step: ce(1),
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    showPlus: z,
    showMinus: z,
    showInput: z,
    longPress: z,
    autoFixed: z,
    allowEmpty: Boolean,
    modelValue: q,
    inputWidth: q,
    buttonSize: q,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    beforeChange: Function,
    defaultValue: ce(1),
    decimalLength: q
};
var m_ = j({
    name: f_,
    props: g_,
    emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
    setup(e, {emit: t}) {
        const n = (x,B=!0)=>{
            const {min: $, max: k, allowEmpty: E, decimalLength: I} = e;
            return E && x === "" || (x = Sl(String(x), !e.integer),
            x = x === "" ? 0 : +x,
            x = Number.isNaN(x) ? +$ : x,
            x = B ? Math.max(Math.min(+k, x), +$) : x,
            De(I) && (x = x.toFixed(+I))),
            x
        }
          , o = ()=>{
            var x;
            const B = (x = e.modelValue) != null ? x : e.defaultValue
              , $ = n(B);
            return Ea($, e.modelValue) || t("update:modelValue", $),
            $
        }
        ;
        let r;
        const a = R()
          , i = R(o())
          , l = D(()=>e.disabled || e.disableMinus || +i.value <= +e.min)
          , s = D(()=>e.disabled || e.disablePlus || +i.value >= +e.max)
          , c = D(()=>({
            width: Se(e.inputWidth),
            height: Se(e.buttonSize)
        }))
          , u = D(()=>$n(e.buttonSize))
          , f = ()=>{
            const x = n(i.value);
            Ea(x, i.value) || (i.value = x)
        }
          , h = x=>{
            e.beforeChange ? co(e.beforeChange, {
                args: [x],
                done() {
                    i.value = x
                }
            }) : i.value = x
        }
          , m = ()=>{
            if (r === "plus" && s.value || r === "minus" && l.value) {
                t("overlimit", r);
                return
            }
            const x = r === "minus" ? -e.step : +e.step
              , B = n(bf(+i.value, x));
            h(B),
            t(r)
        }
          , w = x=>{
            const B = x.target
              , {value: $} = B
              , {decimalLength: k} = e;
            let E = Sl(String($), !e.integer);
            if (De(k) && E.includes(".")) {
                const Q = E.split(".");
                E = `${Q[0]}.${Q[1].slice(0, +k)}`
            }
            e.beforeChange ? B.value = String(i.value) : Ea($, E) || (B.value = E);
            const I = E === String(+E);
            h(I ? +E : E)
        }
          , C = x=>{
            var B;
            e.disableInput ? (B = a.value) == null || B.blur() : t("focus", x)
        }
          , b = x=>{
            const B = x.target
              , $ = n(B.value, e.autoFixed);
            B.value = String($),
            i.value = $,
            Te(()=>{
                t("blur", x),
                mf()
            }
            )
        }
        ;
        let v, g;
        const p = ()=>{
            g = setTimeout(()=>{
                m(),
                p()
            }
            , h_)
        }
          , y = ()=>{
            e.longPress && (v = !1,
            clearTimeout(g),
            g = setTimeout(()=>{
                v = !0,
                m(),
                p()
            }
            , xf))
        }
          , S = x=>{
            e.longPress && (clearTimeout(g),
            v && Ue(x))
        }
          , _ = x=>{
            e.disableInput && Ue(x)
        }
          , O = x=>({
            onClick: B=>{
                Ue(B),
                r = x,
                m()
            }
            ,
            onTouchstartPassive: ()=>{
                r = x,
                y()
            }
            ,
            onTouchend: S,
            onTouchcancel: S
        });
        return oe(()=>[e.max, e.min, e.integer, e.decimalLength], f),
        oe(()=>e.modelValue, x=>{
            Ea(x, i.value) || (i.value = n(x))
        }
        ),
        oe(i, x=>{
            t("update:modelValue", x),
            t("change", x, {
                name: e.name
            })
        }
        ),
        so(()=>e.modelValue),
        ()=>d("div", {
            role: "group",
            class: Pa([e.theme])
        }, [st(d("button", Ae({
            type: "button",
            style: u.value,
            class: [Pa("minus", {
                disabled: l.value
            }), {
                [yt]: !l.value
            }],
            "aria-disabled": l.value || void 0
        }, O("minus")), null), [[ft, e.showMinus]]), st(d("input", {
            ref: a,
            type: e.integer ? "tel" : "text",
            role: "spinbutton",
            class: Pa("input"),
            value: i.value,
            style: c.value,
            disabled: e.disabled,
            readonly: e.disableInput,
            inputmode: e.integer ? "numeric" : "decimal",
            placeholder: e.placeholder,
            autocomplete: "off",
            "aria-valuemax": e.max,
            "aria-valuemin": e.min,
            "aria-valuenow": i.value,
            onBlur: b,
            onInput: w,
            onFocus: C,
            onMousedown: _
        }, null), [[ft, e.showInput]]), st(d("button", Ae({
            type: "button",
            style: u.value,
            class: [Pa("plus", {
                disabled: s.value
            }), {
                [yt]: !s.value
            }],
            "aria-disabled": s.value || void 0
        }, O("plus")), null), [[ft, e.showPlus]])])
    }
});
const v_ = G(m_)
  , b_ = G(s_)
  , [y_,Yt,p_] = W("submit-bar")
  , w_ = {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    currency: X("¥"),
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonType: X("danger"),
    buttonColor: String,
    suffixLabel: String,
    placeholder: Boolean,
    decimalLength: ce(2),
    safeAreaInsetBottom: z
};
var S_ = j({
    name: y_,
    props: w_,
    emits: ["submit"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = ui(o, Yt)
          , a = ()=>{
            const {price: u, label: f, currency: h, textAlign: m, suffixLabel: w, decimalLength: C} = e;
            if (typeof u == "number") {
                const b = (u / 100).toFixed(+C).split(".")
                  , v = C ? `.${b[1]}` : "";
                return d("div", {
                    class: Yt("text"),
                    style: {
                        textAlign: m
                    }
                }, [d("span", null, [f || p_("label")]), d("span", {
                    class: Yt("price")
                }, [h, d("span", {
                    class: Yt("price-integer")
                }, [b[0]]), v]), w && d("span", {
                    class: Yt("suffix-label")
                }, [w])])
            }
        }
          , i = ()=>{
            var u;
            const {tip: f, tipIcon: h} = e;
            if (n.tip || f)
                return d("div", {
                    class: Yt("tip")
                }, [h && d(Ce, {
                    class: Yt("tip-icon"),
                    name: h
                }, null), f && d("span", {
                    class: Yt("tip-text")
                }, [f]), (u = n.tip) == null ? void 0 : u.call(n)])
        }
          , l = ()=>t("submit")
          , s = ()=>n.button ? n.button() : d(pt, {
            round: !0,
            type: e.buttonType,
            text: e.buttonText,
            class: Yt("button", e.buttonType),
            color: e.buttonColor,
            loading: e.loading,
            disabled: e.disabled,
            onClick: l
        }, null)
          , c = ()=>{
            var u, f;
            return d("div", {
                ref: o,
                class: [Yt(), {
                    "van-safe-area-bottom": e.safeAreaInsetBottom
                }]
            }, [(u = n.top) == null ? void 0 : u.call(n), i(), d("div", {
                class: Yt("bar")
            }, [(f = n.default) == null ? void 0 : f.call(n), a(), s()])])
        }
        ;
        return ()=>e.placeholder ? r(c) : c()
    }
});
const C_ = G(S_)
  , [x_,Ji] = W("swipe-cell")
  , __ = {
    name: ce(""),
    disabled: Boolean,
    leftWidth: q,
    rightWidth: q,
    beforeClose: Function,
    stopPropagation: Boolean
};
var k_ = j({
    name: x_,
    props: __,
    emits: ["open", "close", "click"],
    setup(e, {emit: t, slots: n}) {
        let o, r, a, i;
        const l = R()
          , s = R()
          , c = R()
          , u = Ke({
            offset: 0,
            dragging: !1
        })
          , f = zt()
          , h = x=>x.value ? Ve(x).width : 0
          , m = D(()=>De(e.leftWidth) ? +e.leftWidth : h(s))
          , w = D(()=>De(e.rightWidth) ? +e.rightWidth : h(c))
          , C = x=>{
            u.offset = x === "left" ? m.value : -w.value,
            o || (o = !0,
            t("open", {
                name: e.name,
                position: x
            }))
        }
          , b = x=>{
            u.offset = 0,
            o && (o = !1,
            t("close", {
                name: e.name,
                position: x
            }))
        }
          , v = x=>{
            const B = Math.abs(u.offset)
              , $ = .15
              , k = o ? 1 - $ : $
              , E = x === "left" ? m.value : w.value;
            E && B > E * k ? C(x) : b(x)
        }
          , g = x=>{
            e.disabled || (a = u.offset,
            f.start(x))
        }
          , p = x=>{
            if (e.disabled)
                return;
            const {deltaX: B} = f;
            f.move(x),
            f.isHorizontal() && (r = !0,
            u.dragging = !0,
            (!o || B.value * a < 0) && Ue(x, e.stopPropagation),
            u.offset = ht(B.value + a, -w.value, m.value))
        }
          , y = ()=>{
            u.dragging && (u.dragging = !1,
            v(u.offset > 0 ? "left" : "right"),
            setTimeout(()=>{
                r = !1
            }
            , 0))
        }
          , S = (x="outside")=>{
            i || (t("click", x),
            o && !r && (i = !0,
            co(e.beforeClose, {
                args: [{
                    name: e.name,
                    position: x
                }],
                done: ()=>{
                    i = !1,
                    b(x)
                }
                ,
                canceled: ()=>i = !1,
                error: ()=>i = !1
            })))
        }
          , _ = (x,B)=>$=>{
            B && $.stopPropagation(),
            S(x)
        }
          , O = (x,B)=>{
            const $ = n[x];
            if ($)
                return d("div", {
                    ref: B,
                    class: Ji(x),
                    onClick: _(x, !0)
                }, [$()])
        }
        ;
        return Oe({
            open: C,
            close: b
        }),
        li(l, ()=>S("outside"), {
            eventName: "touchstart"
        }),
        et("touchmove", p, {
            target: l
        }),
        ()=>{
            var x;
            const B = {
                transform: `translate3d(${u.offset}px, 0, 0)`,
                transitionDuration: u.dragging ? "0s" : ".6s"
            };
            return d("div", {
                ref: l,
                class: Ji(),
                onClick: _("cell", r),
                onTouchstartPassive: g,
                onTouchend: y,
                onTouchcancel: y
            }, [d("div", {
                class: Ji("wrapper"),
                style: B
            }, [O("left", s), (x = n.default) == null ? void 0 : x.call(n), O("right", c)])])
        }
    }
});
const T_ = G(k_)
  , [Hh,Pu] = W("tabbar")
  , P_ = {
    route: Boolean,
    fixed: z,
    border: z,
    zIndex: q,
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: ce(0),
    safeAreaInsetBottom: {
        type: Boolean,
        default: null
    }
}
  , zh = Symbol(Hh);
var E_ = j({
    name: Hh,
    props: P_,
    emits: ["change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , {linkChildren: r} = wt(zh)
          , a = ui(o, Pu)
          , i = ()=>{
            var c;
            return (c = e.safeAreaInsetBottom) != null ? c : e.fixed
        }
          , l = ()=>{
            var c;
            const {fixed: u, zIndex: f, border: h} = e;
            return d("div", {
                ref: o,
                role: "tablist",
                style: Dn(f),
                class: [Pu({
                    fixed: u
                }), {
                    [si]: h,
                    "van-safe-area-bottom": i()
                }]
            }, [(c = n.default) == null ? void 0 : c.call(n)])
        }
        ;
        return r({
            props: e,
            setActive: (c,u)=>{
                co(e.beforeChange, {
                    args: [c],
                    done() {
                        t("update:modelValue", c),
                        t("change", c),
                        u()
                    }
                })
            }
        }),
        ()=>e.fixed && e.placeholder ? a(l) : l()
    }
});
const A_ = G(E_)
  , [O_,el] = W("tabbar-item")
  , B_ = ve({}, uo, {
    dot: Boolean,
    icon: String,
    name: q,
    badge: q,
    badgeProps: Object,
    iconPrefix: String
});
var $_ = j({
    name: O_,
    props: B_,
    emits: ["click"],
    setup(e, {emit: t, slots: n}) {
        const o = Eo()
          , r = en().proxy
          , {parent: a, index: i} = gt(zh);
        if (!a)
            return;
        const l = D(()=>{
            var u;
            const {route: f, modelValue: h} = a.props;
            if (f && "$route"in r) {
                const {$route: m} = r
                  , {to: w} = e
                  , C = hn(w) ? w : {
                    path: w
                };
                return !!m.matched.find(b=>{
                    const v = "path"in C && C.path === b.path
                      , g = "name"in C && C.name === b.name;
                    return v || g
                }
                )
            }
            return ((u = e.name) != null ? u : i.value) === h
        }
        )
          , s = u=>{
            var f;
            l.value || a.setActive((f = e.name) != null ? f : i.value, o),
            t("click", u)
        }
          , c = ()=>{
            if (n.icon)
                return n.icon({
                    active: l.value
                });
            if (e.icon)
                return d(Ce, {
                    name: e.icon,
                    classPrefix: e.iconPrefix
                }, null)
        }
        ;
        return ()=>{
            var u;
            const {dot: f, badge: h} = e
              , {activeColor: m, inactiveColor: w} = a.props
              , C = l.value ? m : w;
            return d("div", {
                role: "tab",
                class: el({
                    active: l.value
                }),
                style: {
                    color: C
                },
                tabindex: 0,
                "aria-selected": l.value,
                onClick: s
            }, [d(Ao, Ae({
                dot: f,
                class: el("icon"),
                content: h
            }, e.badgeProps), {
                default: c
            }), d("div", {
                class: el("text")
            }, [(u = n.default) == null ? void 0 : u.call(n, {
                active: l.value
            })])])
        }
    }
});
const D_ = G($_)
  , [I_,Eu] = W("text-ellipsis")
  , R_ = {
    rows: ce(1),
    dots: X("..."),
    content: X(""),
    expandText: X(""),
    collapseText: X(""),
    position: X("end")
};
var L_ = j({
    name: I_,
    props: R_,
    emits: ["clickAction"],
    setup(e, {emit: t, slots: n}) {
        const o = R("")
          , r = R(!1)
          , a = R(!1)
          , i = R();
        let l = !1;
        const s = D(()=>r.value ? e.collapseText : e.expandText)
          , c = C=>{
            if (!C)
                return 0;
            const b = C.match(/^\d*(\.\d*)?/);
            return b ? Number(b[0]) : 0
        }
          , u = ()=>{
            if (!i.value || !i.value.isConnected)
                return;
            const C = window.getComputedStyle(i.value)
              , b = document.createElement("div");
            return Array.prototype.slice.apply(C).forEach(g=>{
                b.style.setProperty(g, C.getPropertyValue(g))
            }
            ),
            b.style.position = "fixed",
            b.style.zIndex = "-9999",
            b.style.top = "-9999px",
            b.style.height = "auto",
            b.style.minHeight = "auto",
            b.style.maxHeight = "auto",
            b.innerText = e.content,
            document.body.appendChild(b),
            b
        }
          , f = ()=>{
            const C = (S,_)=>{
                const {content: O, position: x, dots: B} = e
                  , $ = O.length
                  , k = ()=>{
                    const Q = (ne,N)=>{
                        if (N - ne <= 1)
                            return x === "end" ? O.slice(0, ne) + B : B + O.slice(N, $);
                        const Z = Math.round((ne + N) / 2);
                        return x === "end" ? S.innerText = O.slice(0, Z) + B + s.value : S.innerText = B + O.slice(Z, $) + s.value,
                        S.offsetHeight > _ ? x === "end" ? Q(ne, Z) : Q(Z, N) : x === "end" ? Q(Z, N) : Q(ne, Z)
                    }
                    ;
                    S.innerText = Q(0, $)
                }
                  , E = (Q,ne)=>{
                    if (Q[1] - Q[0] <= 1 && ne[1] - ne[0] <= 1)
                        return O.slice(0, Q[0]) + B + O.slice(ne[1], $);
                    const N = Math.floor((Q[0] + Q[1]) / 2)
                      , Z = Math.ceil((ne[0] + ne[1]) / 2);
                    return S.innerText = e.content.slice(0, N) + e.dots + e.content.slice(Z, $) + e.expandText,
                    S.offsetHeight >= _ ? E([Q[0], N], [Z, ne[1]]) : E([N, Q[1]], [ne[0], Z])
                }
                  , I = 0 + $ >> 1;
                return e.position === "middle" ? S.innerText = E([0, I], [I, $]) : k(),
                S.innerText
            }
              , b = u();
            if (!b) {
                l = !0;
                return
            }
            const {paddingBottom: v, paddingTop: g, lineHeight: p} = b.style
              , y = Math.ceil((Number(e.rows) + .5) * c(p) + c(g) + c(v));
            y < b.offsetHeight ? (a.value = !0,
            o.value = C(b, y)) : (a.value = !1,
            o.value = e.content),
            document.body.removeChild(b)
        }
          , h = (C=!r.value)=>{
            r.value = C
        }
          , m = C=>{
            h(),
            t("clickAction", C)
        }
          , w = ()=>{
            const C = n.action ? n.action({
                expanded: r.value
            }) : s.value;
            return d("span", {
                class: Eu("action"),
                onClick: m
            }, [C])
        }
        ;
        return tt(f),
        mn(()=>{
            l && (l = !1,
            f())
        }
        ),
        oe([Qt, ()=>[e.content, e.rows, e.position]], f),
        Oe({
            toggle: h
        }),
        ()=>d("div", {
            ref: i,
            class: Eu()
        }, [r.value ? e.content : o.value, a.value ? w() : null])
    }
});
const M_ = G(L_)
  , [F_] = W("time-picker")
  , Au = e=>/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(e)
  , V_ = ["hour", "minute", "second"]
  , N_ = ve({}, ih, {
    minHour: ce(0),
    maxHour: ce(23),
    minMinute: ce(0),
    maxMinute: ce(59),
    minSecond: ce(0),
    maxSecond: ce(59),
    minTime: {
        type: String,
        validator: Au
    },
    maxTime: {
        type: String,
        validator: Au
    },
    columnsType: {
        type: Array,
        default: ()=>["hour", "minute"]
    },
    filter: Function
});
var H_ = j({
    name: F_,
    props: N_,
    emits: ["confirm", "cancel", "change", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R(e.modelValue)
          , r = R()
          , a = h=>{
            const m = h.split(":");
            return V_.map((w,C)=>e.columnsType.includes(w) ? m[C] : "00")
        }
          , i = ()=>{
            var h;
            return (h = r.value) == null ? void 0 : h.confirm()
        }
          , l = ()=>o.value
          , s = D(()=>{
            let {minHour: h, maxHour: m, minMinute: w, maxMinute: C, minSecond: b, maxSecond: v} = e;
            if (e.minTime || e.maxTime) {
                const g = {
                    hour: 0,
                    minute: 0,
                    second: 0
                };
                e.columnsType.forEach((S,_)=>{
                    var O;
                    g[S] = (O = o.value[_]) != null ? O : 0
                }
                );
                const {hour: p, minute: y} = g;
                if (e.minTime) {
                    const [S,_,O] = a(e.minTime);
                    h = S,
                    w = +p <= +h ? _ : "00",
                    b = +p <= +h && +y <= +w ? O : "00"
                }
                if (e.maxTime) {
                    const [S,_,O] = a(e.maxTime);
                    m = S,
                    C = +p >= +m ? _ : "59",
                    v = +p >= +m && +y >= +C ? O : "59"
                }
            }
            return e.columnsType.map(g=>{
                const {filter: p, formatter: y} = e;
                switch (g) {
                case "hour":
                    return Qo(+h, +m, g, y, p, o.value);
                case "minute":
                    return Qo(+w, +C, g, y, p, o.value);
                case "second":
                    return Qo(+b, +v, g, y, p, o.value);
                default:
                    return []
                }
            }
            )
        }
        );
        oe(o, h=>{
            fn(h, e.modelValue) || t("update:modelValue", h)
        }
        ),
        oe(()=>e.modelValue, h=>{
            h = ch(h, s.value),
            fn(h, o.value) || (o.value = h)
        }
        , {
            immediate: !0
        });
        const c = (...h)=>t("change", ...h)
          , u = (...h)=>t("cancel", ...h)
          , f = (...h)=>t("confirm", ...h);
        return Oe({
            confirm: i,
            getSelectedTime: l
        }),
        ()=>d(gi, Ae({
            ref: r,
            modelValue: o.value,
            "onUpdate:modelValue": h=>o.value = h,
            columns: s.value,
            onChange: c,
            onCancel: u,
            onConfirm: f
        }, Le(e, lh)), n)
    }
});
const z_ = G(H_)
  , [j_,jo] = W("tree-select")
  , U_ = {
    max: ce(1 / 0),
    items: Ye(),
    height: ce(300),
    selectedIcon: X("success"),
    mainActiveIndex: ce(0),
    activeId: {
        type: [Number, String, Array],
        default: 0
    }
};
var W_ = j({
    name: j_,
    props: U_,
    emits: ["clickNav", "clickItem", "update:activeId", "update:mainActiveIndex"],
    setup(e, {emit: t, slots: n}) {
        const o = c=>Array.isArray(e.activeId) ? e.activeId.includes(c) : e.activeId === c
          , r = c=>{
            const u = ()=>{
                if (c.disabled)
                    return;
                let f;
                if (Array.isArray(e.activeId)) {
                    f = e.activeId.slice();
                    const h = f.indexOf(c.id);
                    h !== -1 ? f.splice(h, 1) : f.length < +e.max && f.push(c.id)
                } else
                    f = c.id;
                t("update:activeId", f),
                t("clickItem", c)
            }
            ;
            return d("div", {
                key: c.id,
                class: ["van-ellipsis", jo("item", {
                    active: o(c.id),
                    disabled: c.disabled
                })],
                onClick: u
            }, [c.text, o(c.id) && d(Ce, {
                name: e.selectedIcon,
                class: jo("selected")
            }, null)])
        }
          , a = c=>{
            t("update:mainActiveIndex", c)
        }
          , i = c=>t("clickNav", c)
          , l = ()=>{
            const c = e.items.map(u=>d(Ih, {
                dot: u.dot,
                badge: u.badge,
                class: [jo("nav-item"), u.className],
                disabled: u.disabled,
                onClick: i
            }, {
                title: ()=>n["nav-text"] ? n["nav-text"](u) : u.text
            }));
            return d(Dh, {
                class: jo("nav"),
                modelValue: e.mainActiveIndex,
                onChange: a
            }, {
                default: ()=>[c]
            })
        }
          , s = ()=>{
            if (n.content)
                return n.content();
            const c = e.items[+e.mainActiveIndex] || {};
            if (c.children)
                return c.children.map(r)
        }
        ;
        return ()=>d("div", {
            class: jo(),
            style: {
                height: Se(e.height)
            }
        }, [l(), d("div", {
            class: jo("content")
        }, [s()])])
    }
});
const Y_ = G(W_)
  , [q_,lt,K_] = W("uploader");
function Ou(e, t) {
    return new Promise(n=>{
        if (t === "file") {
            n();
            return
        }
        const o = new FileReader;
        o.onload = r=>{
            n(r.target.result)
        }
        ,
        t === "dataUrl" ? o.readAsDataURL(e) : t === "text" && o.readAsText(e)
    }
    )
}
function jh(e, t) {
    return Ra(e).some(n=>n.file ? er(t) ? t(n.file) : n.file.size > +t : !1)
}
function G_(e, t) {
    const n = []
      , o = [];
    return e.forEach(r=>{
        jh(r, t) ? o.push(r) : n.push(r)
    }
    ),
    {
        valid: n,
        invalid: o
    }
}
const X_ = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg|avif)/i
  , Q_ = e=>X_.test(e);
function Uh(e) {
    return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? Q_(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1
}
var Z_ = j({
    props: {
        name: q,
        item: dt(Object),
        index: Number,
        imageFit: String,
        lazyLoad: Boolean,
        deletable: Boolean,
        reupload: Boolean,
        previewSize: [Number, String, Array],
        beforeDelete: Function
    },
    emits: ["delete", "preview", "reupload"],
    setup(e, {emit: t, slots: n}) {
        const o = ()=>{
            const {status: u, message: f} = e.item;
            if (u === "uploading" || u === "failed") {
                const h = u === "failed" ? d(Ce, {
                    name: "close",
                    class: lt("mask-icon")
                }, null) : d(tn, {
                    class: lt("loading")
                }, null)
                  , m = De(f) && f !== "";
                return d("div", {
                    class: lt("mask")
                }, [h, m && d("div", {
                    class: lt("mask-message")
                }, [f])])
            }
        }
          , r = u=>{
            const {name: f, item: h, index: m, beforeDelete: w} = e;
            u.stopPropagation(),
            co(w, {
                args: [h, {
                    name: f,
                    index: m
                }],
                done: ()=>t("delete")
            })
        }
          , a = ()=>t("preview")
          , i = ()=>t("reupload")
          , l = ()=>{
            if (e.deletable && e.item.status !== "uploading") {
                const u = n["preview-delete"];
                return d("div", {
                    role: "button",
                    class: lt("preview-delete", {
                        shadow: !u
                    }),
                    tabindex: 0,
                    "aria-label": K_("delete"),
                    onClick: r
                }, [u ? u() : d(Ce, {
                    name: "cross",
                    class: lt("preview-delete-icon")
                }, null)])
            }
        }
          , s = ()=>{
            if (n["preview-cover"]) {
                const {index: u, item: f} = e;
                return d("div", {
                    class: lt("preview-cover")
                }, [n["preview-cover"](ve({
                    index: u
                }, f))])
            }
        }
          , c = ()=>{
            const {item: u, lazyLoad: f, imageFit: h, previewSize: m, reupload: w} = e;
            return Uh(u) ? d(bi, {
                fit: h,
                src: u.objectUrl || u.content || u.url,
                class: lt("preview-image"),
                width: Array.isArray(m) ? m[0] : m,
                height: Array.isArray(m) ? m[1] : m,
                lazyLoad: f,
                onClick: w ? i : a
            }, {
                default: s
            }) : d("div", {
                class: lt("file"),
                style: $n(e.previewSize)
            }, [d(Ce, {
                class: lt("file-icon"),
                name: "description"
            }, null), d("div", {
                class: [lt("file-name"), "van-ellipsis"]
            }, [u.file ? u.file.name : u.url]), s()])
        }
        ;
        return ()=>d("div", {
            class: lt("preview")
        }, [c(), o(), l()])
    }
});
const J_ = {
    name: ce(""),
    accept: X("image/*"),
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    lazyLoad: Boolean,
    maxCount: ce(1 / 0),
    imageFit: X("cover"),
    resultType: X("dataUrl"),
    uploadIcon: X("photograph"),
    uploadText: String,
    deletable: z,
    reupload: Boolean,
    afterRead: Function,
    showUpload: z,
    modelValue: Ye(),
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String, Array],
    previewImage: z,
    previewOptions: Object,
    previewFullImage: z,
    maxSize: {
        type: [Number, String, Function],
        default: 1 / 0
    }
};
var ek = j({
    name: q_,
    props: J_,
    emits: ["delete", "oversize", "clickUpload", "closePreview", "clickPreview", "clickReupload", "update:modelValue"],
    setup(e, {emit: t, slots: n}) {
        const o = R()
          , r = []
          , a = R(-1)
          , i = R(!1)
          , l = (x=e.modelValue.length)=>({
            name: e.name,
            index: x
        })
          , s = ()=>{
            o.value && (o.value.value = "")
        }
          , c = x=>{
            if (s(),
            jh(x, e.maxSize))
                if (Array.isArray(x)) {
                    const B = G_(x, e.maxSize);
                    if (x = B.valid,
                    t("oversize", B.invalid, l()),
                    !x.length)
                        return
                } else {
                    t("oversize", x, l());
                    return
                }
            if (x = Ke(x),
            a.value > -1) {
                const B = [...e.modelValue];
                B.splice(a.value, 1, x),
                t("update:modelValue", B),
                a.value = -1
            } else
                t("update:modelValue", [...e.modelValue, ...Ra(x)]);
            e.afterRead && e.afterRead(x, l())
        }
          , u = x=>{
            const {maxCount: B, modelValue: $, resultType: k} = e;
            if (Array.isArray(x)) {
                const E = +B - $.length;
                x.length > E && (x = x.slice(0, E)),
                Promise.all(x.map(I=>Ou(I, k))).then(I=>{
                    const Q = x.map((ne,N)=>{
                        const Z = {
                            file: ne,
                            status: "",
                            message: "",
                            objectUrl: URL.createObjectURL(ne)
                        };
                        return I[N] && (Z.content = I[N]),
                        Z
                    }
                    );
                    c(Q)
                }
                )
            } else
                Ou(x, k).then(E=>{
                    const I = {
                        file: x,
                        status: "",
                        message: "",
                        objectUrl: URL.createObjectURL(x)
                    };
                    E && (I.content = E),
                    c(I)
                }
                )
        }
          , f = x=>{
            const {files: B} = x.target;
            if (e.disabled || !B || !B.length)
                return;
            const $ = B.length === 1 ? B[0] : [].slice.call(B);
            if (e.beforeRead) {
                const k = e.beforeRead($, l());
                if (!k) {
                    s();
                    return
                }
                if (Nl(k)) {
                    k.then(E=>{
                        u(E || $)
                    }
                    ).catch(s);
                    return
                }
            }
            u($)
        }
        ;
        let h;
        const m = ()=>t("closePreview")
          , w = x=>{
            if (e.previewFullImage) {
                const B = e.modelValue.filter(Uh)
                  , $ = B.map(k=>(k.objectUrl && !k.url && k.status !== "failed" && (k.url = k.objectUrl,
                r.push(k.url)),
                k.url)).filter(Boolean);
                h = V1(ve({
                    images: $,
                    startPosition: B.indexOf(x),
                    onClose: m
                }, e.previewOptions))
            }
        }
          , C = ()=>{
            h && h.close()
        }
          , b = (x,B)=>{
            const $ = e.modelValue.slice(0);
            $.splice(B, 1),
            t("update:modelValue", $),
            t("delete", x, l(B))
        }
          , v = x=>{
            i.value = !0,
            a.value = x,
            Te(()=>O())
        }
          , g = ()=>{
            i.value || (a.value = -1),
            i.value = !1
        }
          , p = (x,B)=>{
            const $ = ["imageFit", "deletable", "reupload", "previewSize", "beforeDelete"]
              , k = ve(Le(e, $), Le(x, $, !0));
            return d(Z_, Ae({
                item: x,
                index: B,
                onClick: ()=>t(e.reupload ? "clickReupload" : "clickPreview", x, l(B)),
                onDelete: ()=>b(x, B),
                onPreview: ()=>w(x),
                onReupload: ()=>v(B)
            }, Le(e, ["name", "lazyLoad"]), k), Le(n, ["preview-cover", "preview-delete"]))
        }
          , y = ()=>{
            if (e.previewImage)
                return e.modelValue.map(p)
        }
          , S = x=>t("clickUpload", x)
          , _ = ()=>{
            if (e.modelValue.length >= +e.maxCount && !e.reupload)
                return;
            const x = e.modelValue.length >= +e.maxCount && e.reupload
              , B = e.readonly ? null : d("input", {
                ref: o,
                type: "file",
                class: lt("input"),
                accept: e.accept,
                capture: e.capture,
                multiple: e.multiple && a.value === -1,
                disabled: e.disabled,
                onChange: f,
                onClick: g
            }, null);
            return n.default ? st(d("div", {
                class: lt("input-wrapper"),
                onClick: S
            }, [n.default(), B]), [[ft, !x]]) : st(d("div", {
                class: lt("upload", {
                    readonly: e.readonly
                }),
                style: $n(e.previewSize),
                onClick: S
            }, [d(Ce, {
                name: e.uploadIcon,
                class: lt("upload-icon")
            }, null), e.uploadText && d("span", {
                class: lt("upload-text")
            }, [e.uploadText]), B]), [[ft, e.showUpload && !x]])
        }
          , O = ()=>{
            o.value && !e.disabled && o.value.click()
        }
        ;
        return bn(()=>{
            r.forEach(x=>URL.revokeObjectURL(x))
        }
        ),
        Oe({
            chooseFile: O,
            closeImagePreview: C
        }),
        so(()=>e.modelValue),
        ()=>d("div", {
            class: lt()
        }, [d("div", {
            class: lt("wrapper", {
                disabled: e.disabled
            })
        }, [y(), _()])])
    }
});
const tk = G(ek)
  , [nk,Bu] = W("watermark")
  , ok = {
    gapX: ot(0),
    gapY: ot(0),
    image: String,
    width: ot(100),
    height: ot(100),
    rotate: ce(-22),
    zIndex: q,
    content: String,
    opacity: q,
    fullPage: z,
    textColor: X("#dcdee0")
};
var rk = j({
    name: nk,
    props: ok,
    setup(e, {slots: t}) {
        const n = R()
          , o = R("")
          , r = R("")
          , a = ()=>{
            const s = {
                transformOrigin: "center",
                transform: `rotate(${e.rotate}deg)`
            }
              , c = ()=>e.image && !t.content ? d("image", {
                href: r.value,
                "xlink:href": r.value,
                x: "0",
                y: "0",
                width: e.width,
                height: e.height,
                style: s
            }, null) : d("foreignObject", {
                x: "0",
                y: "0",
                width: e.width,
                height: e.height
            }, [d("div", {
                xmlns: "http://www.w3.org/1999/xhtml",
                style: s
            }, [t.content ? t.content() : d("span", {
                style: {
                    color: e.textColor
                }
            }, [e.content])])])
              , u = e.width + e.gapX
              , f = e.height + e.gapY;
            return d("svg", {
                viewBox: `0 0 ${u} ${f}`,
                width: u,
                height: f,
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                style: {
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                }
            }, [c()])
        }
          , i = s=>{
            const c = document.createElement("canvas")
              , u = new Image;
            u.crossOrigin = "anonymous",
            u.referrerPolicy = "no-referrer",
            u.onload = ()=>{
                c.width = u.naturalWidth,
                c.height = u.naturalHeight;
                const f = c.getContext("2d");
                f == null || f.drawImage(u, 0, 0),
                r.value = c.toDataURL()
            }
            ,
            u.src = s
        }
          , l = s=>{
            const c = new Blob([s],{
                type: "image/svg+xml"
            });
            return URL.createObjectURL(c)
        }
        ;
        return ar(()=>{
            e.image && i(e.image)
        }
        ),
        oe(()=>[r.value, e.content, e.textColor, e.height, e.width, e.rotate, e.gapX, e.gapY], ()=>{
            Te(()=>{
                n.value && (o.value && URL.revokeObjectURL(o.value),
                o.value = l(n.value.innerHTML))
            }
            )
        }
        , {
            immediate: !0
        }),
        ir(()=>{
            o.value && URL.revokeObjectURL(o.value)
        }
        ),
        ()=>{
            const s = ve({
                backgroundImage: `url(${o.value})`
            }, Dn(e.zIndex));
            return d("div", {
                class: Bu({
                    full: e.fullPage
                }),
                style: s
            }, [d("div", {
                class: Bu("wrapper"),
                ref: n
            }, [a()])])
        }
    }
});
const ak = G(rk)
  , ik = "4.9.1";
function lk(e) {
    [Pf, xl, qb, iy, Ep, Zp, Gf, o0, Ao, s0, pt, C0, A0, I0, nn, F0, ks, oh, U0, Z0, nw, lw, sw, fw, vw, Sw, Pw, Ol, Lw, jw, qw, Zw, o1, c1, u1, gh, Tn, g1, y1, bs, C1, T1, O1, Ce, bi, N1, K1, G1, eS, tn, pf, rS, sS, yS, TS, Df, OS, IS, gi, RS, DC, Rt, MC, jC, _s, Cs, KC, ox, rx, cx, bx, Dh, Ih, Ex, Kx, Lh, Zx, Mh, Rh, n_, i_, d_, v_, b_, Nf, C_, ms, T_, vs, Ss, qr, A_, D_, fi, vi, M_, z_, pp, Y_, tk, ak].forEach(n=>{
        n.install ? e.use(n) : n.name && e.component(n.name, n)
    }
    )
}
var sk = {
    install: lk,
    version: ik
};
function ck(e) {
    Rt.props.teleport = {
        default() {
            return document.body
        }
    },
    e.component("van-popup", Rt)
}
const Oo = (e,t)=>{
    const n = e.__vccOpts || e;
    for (const [o,r] of t)
        n[o] = r;
    return n
}
  , uk = {
    components: {},
    mounted() {
        this.setCurrentMenuItem()
    },
    watch: {
        $route() {
            this.setCurrentMenuItem()
        }
    },
    data: function() {
        return {
            currentItem: ""
        }
    },
    methods: {
        setCurrentMenuItem() {
            this.currentItem = "",
            this.menuItems.map(e=>{
                this.$route.path === "/" ? this.currentItem = "earn" : e.route !== "/" && this.$route.path.includes(e.route) && (this.currentItem = e.key)
            }
            )
        }
    },
    computed: {
        isCanTakeQuestRewards() {
            return Object.values(this.uDailyRewards).some(e=>e === "canTake") || Object.values(this.uQuests).some(e=>e.isRewarded === !1)
        },
        isCanTakeFriendsRewards() {
            return Object.values(this.uFriends).some(e=>e.bonusToTake > 0)
        },
        menuItems() {
            return [{
                route: "/",
                key: "earn",
                title: this.t("Earn"),
                icon: "thumb-circle",
                isDot: !1
            }, {
                route: "/improve",
                key: "improve",
                title: this.t("Improve"),
                icon: "fire",
                isDot: !1
            }, {
                route: "/city",
                key: "city",
                title: this.t("City"),
                icon: "wap-home",
                isDot: !1
            }, {
                route: "/friends",
                key: "friends",
                title: this.t("Friends"),
                icon: "friends",
                isDot: this.isCanTakeFriendsRewards
            }, {
                route: "/quests",
                key: "quests",
                title: this.t("Quests"),
                icon: "completed",
                isDot: this.isCanTakeQuestRewards
            }]
        }
    }
}
  , dk = {
    class: "BottomBar"
};
function fk(e, t, n, o, r, a) {
    const i = je("van-tabbar-item")
      , l = je("van-tabbar");
    return ke(),
    He("div", dk, [d(l, {
        modelValue: e.currentItem,
        "onUpdate:modelValue": t[0] || (t[0] = s=>e.currentItem = s),
        onChange: t[1] || (t[1] = s=>e._vibrate()),
        class: "mainTabBar"
    }, {
        default: Pe(()=>[(ke(!0),
        He(Fe, null, zr(a.menuItems, s=>(ke(),
        $t(i, {
            key: s.key,
            to: s.route,
            name: s.key,
            icon: s.icon,
            dot: s.isDot
        }, {
            default: Pe(()=>[Ie(le(s.title), 1)]),
            _: 2
        }, 1032, ["to", "name", "icon", "dot"]))), 128))]),
        _: 1
    }, 8, ["modelValue"])])
}
const hk = Oo(uk, [["render", fk], ["__scopeId", "data-v-13064abd"]])
  , wi = new (window.AudioContext || window.webkitAudioContext)
  , $s = wi.createGain();
$s.gain.value = .3;
$s.connect(wi.destination);
const Wh = {};
async function Wn(e, t) {
    Wh[e] = await gk(t)
}
async function gk(e) {
    const n = await (await fetch(e)).arrayBuffer();
    return wi.decodeAudioData(n)
}
function mk(e) {
    vk(Wh[e])
}
function vk(e) {
    const t = wi.createBufferSource();
    t.buffer = e,
    t.connect($s),
    t.start()
}
const bk = {
    name: "Progressbar-g",
    props: {
        height: {
            type: Number,
            default: 15
        },
        percent: {
            type: Number,
            default: 1
        },
        textColor: {
            type: String,
            default() {
                return "#000"
            }
        },
        text: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: "#008C00FF"
        },
        bgColor: {
            type: String,
            default: "#b6b6b6"
        }
    },
    data() {
        return {}
    },
    methods: {
        toggleTooltip() {}
    }
};
function yk(e, t, n, o, r, a) {
    return ke(),
    He("div", {
        class: "progressBar txtShd",
        style: Pt({
            height: n.height + "px",
            background: n.bgColor
        })
    }, [H("div", {
        class: "text",
        style: Pt({
            lineHeight: Math.round(n.height * 1) + "px",
            fontSize: Math.round(n.height * .8) + "px",
            color: n.textColor,
            textShadow: "0 0px 2px #fff"
        })
    }, le(n.text), 5), H("div", {
        class: "bar",
        style: Pt({
            width: `${n.percent}%`,
            height: n.height + "px",
            background: n.color
        })
    }, null, 4)], 4)
}
const pk = Oo(bk, [["render", yk], ["__scopeId", "data-v-8e20d87d"]]);
var wk = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Yh;
const Si = e=>Yh = e
  , qh = Symbol();
function Il(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var Ir;
(function(e) {
    e.direct = "direct",
    e.patchObject = "patch object",
    e.patchFunction = "patch function"
}
)(Ir || (Ir = {}));
function Sk() {
    const e = ud(!0)
      , t = e.run(()=>R({}));
    let n = []
      , o = [];
    const r = Ql({
        install(a) {
            Si(r),
            r._a = a,
            a.provide(qh, r),
            a.config.globalProperties.$pinia = r,
            o.forEach(i=>n.push(i)),
            o = []
        },
        use(a) {
            return !this._a && !wk ? o.push(a) : n.push(a),
            this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return r
}
const Kh = ()=>{}
;
function $u(e, t, n, o=Kh) {
    e.push(t);
    const r = ()=>{
        const a = e.indexOf(t);
        a > -1 && (e.splice(a, 1),
        o())
    }
    ;
    return !n && dd() && Ag(r),
    r
}
function Uo(e, ...t) {
    e.slice().forEach(n=>{
        n(...t)
    }
    )
}
const Ck = e=>e();
function Rl(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n,o)=>e.set(o, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n))
            continue;
        const o = t[n]
          , r = e[n];
        Il(r) && Il(o) && e.hasOwnProperty(n) && !it(o) && !xo(o) ? e[n] = Rl(r, o) : e[n] = o
    }
    return e
}
const xk = Symbol();
function _k(e) {
    return !Il(e) || !e.hasOwnProperty(xk)
}
const {assign: qn} = Object;
function kk(e) {
    return !!(it(e) && e.effect)
}
function Tk(e, t, n, o) {
    const {state: r, actions: a, getters: i} = t
      , l = n.state.value[e];
    let s;
    function c() {
        l || (n.state.value[e] = r ? r() : {});
        const u = em(n.state.value[e]);
        return qn(u, a, Object.keys(i || {}).reduce((f,h)=>(f[h] = Ql(D(()=>{
            Si(n);
            const m = n._s.get(e);
            return i[h].call(m, m)
        }
        )),
        f), {}))
    }
    return s = Gh(e, c, t, n, o, !0),
    s
}
function Gh(e, t, n={}, o, r, a) {
    let i;
    const l = qn({
        actions: {}
    }, n)
      , s = {
        deep: !0
    };
    let c, u, f = [], h = [], m;
    const w = o.state.value[e];
    !a && !w && (o.state.value[e] = {}),
    R({});
    let C;
    function b(x) {
        let B;
        c = u = !1,
        typeof x == "function" ? (x(o.state.value[e]),
        B = {
            type: Ir.patchFunction,
            storeId: e,
            events: m
        }) : (Rl(o.state.value[e], x),
        B = {
            type: Ir.patchObject,
            payload: x,
            storeId: e,
            events: m
        });
        const $ = C = Symbol();
        Te().then(()=>{
            C === $ && (c = !0)
        }
        ),
        u = !0,
        Uo(f, B, o.state.value[e])
    }
    const v = a ? function() {
        const {state: B} = n
          , $ = B ? B() : {};
        this.$patch(k=>{
            qn(k, $)
        }
        )
    }
    : Kh;
    function g() {
        i.stop(),
        f = [],
        h = [],
        o._s.delete(e)
    }
    function p(x, B) {
        return function() {
            Si(o);
            const $ = Array.from(arguments)
              , k = []
              , E = [];
            function I(N) {
                k.push(N)
            }
            function Q(N) {
                E.push(N)
            }
            Uo(h, {
                args: $,
                name: x,
                store: S,
                after: I,
                onError: Q
            });
            let ne;
            try {
                ne = B.apply(this && this.$id === e ? this : S, $)
            } catch (N) {
                throw Uo(E, N),
                N
            }
            return ne instanceof Promise ? ne.then(N=>(Uo(k, N),
            N)).catch(N=>(Uo(E, N),
            Promise.reject(N))) : (Uo(k, ne),
            ne)
        }
    }
    const y = {
        _p: o,
        $id: e,
        $onAction: $u.bind(null, h),
        $patch: b,
        $reset: v,
        $subscribe(x, B={}) {
            const $ = $u(f, x, B.detached, ()=>k())
              , k = i.run(()=>oe(()=>o.state.value[e], E=>{
                (B.flush === "sync" ? u : c) && x({
                    storeId: e,
                    type: Ir.direct,
                    events: m
                }, E)
            }
            , qn({}, s, B)));
            return $
        },
        $dispose: g
    }
      , S = Ke(y);
    o._s.set(e, S);
    const O = (o._a && o._a.runWithContext || Ck)(()=>o._e.run(()=>(i = ud()).run(t)));
    for (const x in O) {
        const B = O[x];
        if (it(B) && !kk(B) || xo(B))
            a || (w && _k(B) && (it(B) ? B.value = w[x] : Rl(B, w[x])),
            o.state.value[e][x] = B);
        else if (typeof B == "function") {
            const $ = p(x, B);
            O[x] = $,
            l.actions[x] = B
        }
    }
    return qn(S, O),
    qn(Me(S), O),
    Object.defineProperty(S, "$state", {
        get: ()=>o.state.value[e],
        set: x=>{
            b(B=>{
                qn(B, x)
            }
            )
        }
    }),
    o._p.forEach(x=>{
        qn(S, i.run(()=>x({
            store: S,
            app: o._a,
            pinia: o,
            options: l
        })))
    }
    ),
    w && a && n.hydrate && n.hydrate(S.$state, w),
    c = !0,
    u = !0,
    S
}
function Ds(e, t, n) {
    let o, r;
    const a = typeof t == "function";
    typeof e == "string" ? (o = e,
    r = a ? n : t) : (r = e,
    o = e.id);
    function i(l, s) {
        const c = Fm();
        return l = l || (c ? kt(qh, null) : null),
        l && Si(l),
        l = Yh,
        l._s.has(o) || (a ? Gh(o, t, r, l) : Tk(o, r, l)),
        l._s.get(o)
    }
    return i.$id = o,
    i
}
const Bt = Ds("user", {
    state: ()=>({
        authHash: null,
        profile: null,
        purchase: {},
        hero: {},
        skills: {},
        quests: [],
        questsContent: [],
        friends: [],
        settings: {},
        dailyRewards: {},
        tappedData: {},
        lastSendTappedDate: null
    }),
    actions: {
        setAuthHash(e) {
            this.authHash = e
        },
        setProfile(e) {
            this.profile = e
        },
        setPurchase(e) {
            this.purchase = e
        },
        setHero(e) {
            e && (this.hero = e)
        },
        setSkills(e) {
            this.skills = e
        },
        setQuests(e) {
            this.quests = e
        },
        setQuestsContent(e) {
            this.questsContent = e
        },
        setFriends(e) {
            this.friends = e.sort((t,n)=>n.bonusToTake === t.bonusToTake ? n.level - t.level : n.bonusToTake - t.bonusToTake)
        },
        setSettings(e) {
            this.settings = e
        },
        setDailyRewards(e) {
            this.dailyRewards = e
        },
        addTappedData(e, t) {
            this.lastSendTappedDate || this.setLastSendTappedDate(new Date),
            e in this.tappedData ? this.tappedData[e] = {
                amount: this.tappedData[e].amount + t,
                currentEnergy: this.hero.earns[e].energy
            } : this.tappedData[e] = {
                amount: t,
                currentEnergy: this.hero.earns[e].energy
            }
        },
        clearTappedData() {
            this.tappedData = {}
        },
        setLastSendTappedDate(e) {
            this.lastSendTappedDate = e
        },
        addMoney(e) {
            this.hero.money += e
        },
        energyAdd(e="") {
            this._energyChange(!1, e)
        },
        energyRemove(e, t) {
            e in this.hero.earns && this._energyChange(!0, e, t)
        },
        _energyChange(e, t="", n=null) {
            function o(a, i) {
                const l = a.energy + i;
                return l < 0 ? 0 : l > a.limit ? a.limit : l
            }
            (t ? [t] : Object.keys(this.hero.earns)).forEach(a=>{
                e ? n = -1 * (n || this.hero.earns[a].moneyPerTap) : n = n || this.hero.earns[a].recoveryPerSecond,
                this.hero.earns[a].energy = o(this.hero.earns[a], n)
            }
            )
        }
    },
    getters: {
        getTappedAllMoney() {
            let e = 0;
            for (const t in this.tappedData)
                "amount"in this.tappedData[t] && (e += this.tappedData[t].amount);
            return e
        }
    }
})
  , Ci = Ds("state", {
    state: ()=>({
        topBar: {
            isNoBg: !1,
            isNeedBg: !1,
            isShowPph: !0,
            isShowMoney: !0,
            isShowLottery: !1
        },
        lastPingDate: new Date,
        config: {
            isPvpOn: !1
        }
    }),
    actions: {
        setTopBarDefault() {
            this.topBar = {
                isNoBg: !1,
                isNeedBg: !1,
                isShowPph: !0,
                isShowMoney: !0,
                isShowLottery: !1
            }
        },
        setTopBarIsNoBg(e) {
            this.topBar.isNoBg = e
        },
        setTopBarIsNeedBg(e) {
            this.topBar.isNeedBg = e
        },
        setTopBarIsShowPph(e) {
            this.topBar.isShowPph = e
        },
        setTopBarIsShowMoney(e) {
            this.topBar.isShowMoney = e
        },
        setTopBarIsShowLottery(e) {
            this.topBar.isShowLottery = e
        },
        updateLastPingDate() {
            this.lastPingDate = new Date
        }
    },
    getters: {}
})
  , Xh = Ds("db", {
    state: ()=>({
        skills: [],
        levels: [],
        earnJob: [],
        skillCategory: [],
        skillSubcategory: [],
        negotiationsLeague: [],
        negotiationsStrategy: [],
        dailyRewards: [],
        translation: [],
        quests: [],
        langs: [],
        funds: [],
        fundsRisk: [],
        contentPrice: [],
        onboarding: [],
        purchases: []
    }),
    actions: {
        setSkills(e) {
            this.skills = e
        },
        setLevels(e) {
            this.levels = e
        },
        setEarnJob(e) {
            this.earnJob = e
        },
        setSkillCategory(e) {
            this.skillCategory = e
        },
        setSkillSubcategory(e) {
            this.skillSubcategory = e
        },
        setNegotiationsLeague(e) {
            this.negotiationsLeague = e
        },
        setNegotiationsStrategy(e) {
            this.negotiationsStrategy = e
        },
        setDailyRewards(e) {
            this.dailyRewards = e
        },
        setTranslation(e) {
            this.translation = e
        },
        setQuests(e) {
            this.quests = e
        },
        setLangs(e) {
            this.langs = e
        },
        setFunds(e) {
            this.funds = e
        },
        setFundsRisk(e) {
            this.fundsRisk = e
        },
        setContentPrice(e) {
            this.contentPrice = e
        },
        setOnboarding(e) {
            this.onboarding = e
        },
        setPurchases(e) {
            this.purchases = e
        }
    }
});
var Qh = {}
  , Pk = e=>encodeURIComponent(e).replace(/[!'()*]/g, t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)
  , Zh = "%[a-f0-9]{2}"
  , Du = new RegExp("(" + Zh + ")|([^%]+?)","gi")
  , Iu = new RegExp("(" + Zh + ")+","gi");
function Ll(e, t) {
    try {
        return [decodeURIComponent(e.join(""))]
    } catch {}
    if (e.length === 1)
        return e;
    t = t || 1;
    var n = e.slice(0, t)
      , o = e.slice(t);
    return Array.prototype.concat.call([], Ll(n), Ll(o))
}
function Ek(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        for (var t = e.match(Du) || [], n = 1; n < t.length; n++)
            e = Ll(t, n).join(""),
            t = e.match(Du) || [];
        return e
    }
}
function Ak(e) {
    for (var t = {
        "%FE%FF": "��",
        "%FF%FE": "��"
    }, n = Iu.exec(e); n; ) {
        try {
            t[n[0]] = decodeURIComponent(n[0])
        } catch {
            var o = Ek(n[0]);
            o !== n[0] && (t[n[0]] = o)
        }
        n = Iu.exec(e)
    }
    t["%C2"] = "�";
    for (var r = Object.keys(t), a = 0; a < r.length; a++) {
        var i = r[a];
        e = e.replace(new RegExp(i,"g"), t[i])
    }
    return e
}
var Ok = function(e) {
    if (typeof e != "string")
        throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
    try {
        return e = e.replace(/\+/g, " "),
        decodeURIComponent(e)
    } catch {
        return Ak(e)
    }
}
  , Bk = (e,t)=>{
    if (!(typeof e == "string" && typeof t == "string"))
        throw new TypeError("Expected the arguments to be of type `string`");
    if (t === "")
        return [e];
    const n = e.indexOf(t);
    return n === -1 ? [e] : [e.slice(0, n), e.slice(n + t.length)]
}
  , $k = function(e, t) {
    for (var n = {}, o = Object.keys(e), r = Array.isArray(t), a = 0; a < o.length; a++) {
        var i = o[a]
          , l = e[i];
        (r ? t.indexOf(i) !== -1 : t(i, l, e)) && (n[i] = l)
    }
    return n
};
(function(e) {
    const t = Pk
      , n = Ok
      , o = Bk
      , r = $k
      , a = v=>v == null;
    function i(v) {
        switch (v.arrayFormat) {
        case "index":
            return g=>(p,y)=>{
                const S = p.length;
                return y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? p : y === null ? [...p, [c(g, v), "[", S, "]"].join("")] : [...p, [c(g, v), "[", c(S, v), "]=", c(y, v)].join("")]
            }
            ;
        case "bracket":
            return g=>(p,y)=>y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? p : y === null ? [...p, [c(g, v), "[]"].join("")] : [...p, [c(g, v), "[]=", c(y, v)].join("")];
        case "comma":
        case "separator":
            return g=>(p,y)=>y == null || y.length === 0 ? p : p.length === 0 ? [[c(g, v), "=", c(y, v)].join("")] : [[p, c(y, v)].join(v.arrayFormatSeparator)];
        default:
            return g=>(p,y)=>y === void 0 || v.skipNull && y === null || v.skipEmptyString && y === "" ? p : y === null ? [...p, c(g, v)] : [...p, [c(g, v), "=", c(y, v)].join("")]
        }
    }
    function l(v) {
        let g;
        switch (v.arrayFormat) {
        case "index":
            return (p,y,S)=>{
                if (g = /\[(\d*)\]$/.exec(p),
                p = p.replace(/\[\d*\]$/, ""),
                !g) {
                    S[p] = y;
                    return
                }
                S[p] === void 0 && (S[p] = {}),
                S[p][g[1]] = y
            }
            ;
        case "bracket":
            return (p,y,S)=>{
                if (g = /(\[\])$/.exec(p),
                p = p.replace(/\[\]$/, ""),
                !g) {
                    S[p] = y;
                    return
                }
                if (S[p] === void 0) {
                    S[p] = [y];
                    return
                }
                S[p] = [].concat(S[p], y)
            }
            ;
        case "comma":
        case "separator":
            return (p,y,S)=>{
                const _ = typeof y == "string" && y.includes(v.arrayFormatSeparator)
                  , O = typeof y == "string" && !_ && u(y, v).includes(v.arrayFormatSeparator);
                y = O ? u(y, v) : y;
                const x = _ || O ? y.split(v.arrayFormatSeparator).map(B=>u(B, v)) : y === null ? y : u(y, v);
                S[p] = x
            }
            ;
        default:
            return (p,y,S)=>{
                if (S[p] === void 0) {
                    S[p] = y;
                    return
                }
                S[p] = [].concat(S[p], y)
            }
        }
    }
    function s(v) {
        if (typeof v != "string" || v.length !== 1)
            throw new TypeError("arrayFormatSeparator must be single character string")
    }
    function c(v, g) {
        return g.encode ? g.strict ? t(v) : encodeURIComponent(v) : v
    }
    function u(v, g) {
        return g.decode ? n(v) : v
    }
    function f(v) {
        return Array.isArray(v) ? v.sort() : typeof v == "object" ? f(Object.keys(v)).sort((g,p)=>Number(g) - Number(p)).map(g=>v[g]) : v
    }
    function h(v) {
        const g = v.indexOf("#");
        return g !== -1 && (v = v.slice(0, g)),
        v
    }
    function m(v) {
        let g = "";
        const p = v.indexOf("#");
        return p !== -1 && (g = v.slice(p)),
        g
    }
    function w(v) {
        v = h(v);
        const g = v.indexOf("?");
        return g === -1 ? "" : v.slice(g + 1)
    }
    function C(v, g) {
        return g.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : g.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"),
        v
    }
    function b(v, g) {
        g = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, g),
        s(g.arrayFormatSeparator);
        const p = l(g)
          , y = Object.create(null);
        if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""),
        !v))
            return y;
        for (const S of v.split("&")) {
            if (S === "")
                continue;
            let[_,O] = o(g.decode ? S.replace(/\+/g, " ") : S, "=");
            O = O === void 0 ? null : ["comma", "separator"].includes(g.arrayFormat) ? O : u(O, g),
            p(u(_, g), O, y)
        }
        for (const S of Object.keys(y)) {
            const _ = y[S];
            if (typeof _ == "object" && _ !== null)
                for (const O of Object.keys(_))
                    _[O] = C(_[O], g);
            else
                y[S] = C(_, g)
        }
        return g.sort === !1 ? y : (g.sort === !0 ? Object.keys(y).sort() : Object.keys(y).sort(g.sort)).reduce((S,_)=>{
            const O = y[_];
            return O && typeof O == "object" && !Array.isArray(O) ? S[_] = f(O) : S[_] = O,
            S
        }
        , Object.create(null))
    }
    e.extract = w,
    e.parse = b,
    e.stringify = (v,g)=>{
        if (!v)
            return "";
        g = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, g),
        s(g.arrayFormatSeparator);
        const p = O=>g.skipNull && a(v[O]) || g.skipEmptyString && v[O] === ""
          , y = i(g)
          , S = {};
        for (const O of Object.keys(v))
            p(O) || (S[O] = v[O]);
        const _ = Object.keys(S);
        return g.sort !== !1 && _.sort(g.sort),
        _.map(O=>{
            const x = v[O];
            return x === void 0 ? "" : x === null ? c(O, g) : Array.isArray(x) ? x.reduce(y(O), []).join("&") : c(O, g) + "=" + c(x, g)
        }
        ).filter(O=>O.length > 0).join("&")
    }
    ,
    e.parseUrl = (v,g)=>{
        g = Object.assign({
            decode: !0
        }, g);
        const [p,y] = o(v, "#");
        return Object.assign({
            url: p.split("?")[0] || "",
            query: b(w(v), g)
        }, g && g.parseFragmentIdentifier && y ? {
            fragmentIdentifier: u(y, g)
        } : {})
    }
    ,
    e.stringifyUrl = (v,g)=>{
        g = Object.assign({
            encode: !0,
            strict: !0
        }, g);
        const p = h(v.url).split("?")[0] || ""
          , y = e.extract(v.url)
          , S = e.parse(y, {
            sort: !1
        })
          , _ = Object.assign(S, v.query);
        let O = e.stringify(_, g);
        O && (O = `?${O}`);
        let x = m(v.url);
        return v.fragmentIdentifier && (x = `#${c(v.fragmentIdentifier, g)}`),
        `${p}${O}${x}`
    }
    ,
    e.pick = (v,g,p)=>{
        p = Object.assign({
            parseFragmentIdentifier: !0
        }, p);
        const {url: y, query: S, fragmentIdentifier: _} = e.parseUrl(v, p);
        return e.stringifyUrl({
            url: y,
            query: r(S, g),
            fragmentIdentifier: _
        }, p)
    }
    ,
    e.exclude = (v,g,p)=>{
        const y = Array.isArray(g) ? S=>!g.includes(S) : (S,_)=>!g(S, _);
        return e.pick(v, y, p)
    }
}
)(Qh);
const Jh = "api.muskempire.io"
  , Dk = "game.muskempire.io"
  , jE = Object.freeze(Object.defineProperty({
    __proto__: null,
    API_DOMAIN: Jh,
    GAME_DOMAIN: Dk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , eg = function(e) {
    let t = document.cookie.split(";");
    for (let n = 0; n < t.length; n++) {
        let o = t[n].split("=");
        if (e === o[0].trim())
            return decodeURIComponent(o[1])
    }
    return null
}
  , Ru = function(e, t) {
    return Object.keys(t).length === 0 ? e : e + "?" + Qh.stringify(t, {
        arrayFormat: "bracket"
    })
}
  , Ik = function(e, t) {
    const n = Bt()
      , o = !!e;
    return e instanceof Object && (e = JSON.stringify(e)),
    {
        method: o ? "post" : "get",
        credentials: "include",
        ...t,
        headers: {
            "Content-Type": "application/json",
            "Api-Key": n.authHash ?? "empty",
            "Is-Beta-Server": eg("is_beta_server")
        },
        body: o ? e : null
    }
}
  , Rk = async function(e, t, n) {
    const o = `https://${Jh}${e}`;
    let r = null
      , a = 1e3
      , i = null;
    for (let l = 1; l < 5; l++)
        try {
            r = await (await fetch(Ru(o, t), Ik(n))).json();
            break
        } catch (s) {
            await new Promise(c=>setTimeout(c, a * Math.pow(1.8, l))),
            console.error(s + ": " + Ru(o, t)),
            i = s
        }
    if (!r && i)
        throw i;
    return r
}
  , cn = async function(e, t) {
    console.log(`>>> api: ${e} request: %o`, t),
    ["ping", "questContentClaim", "fundInvest", "sendTappedData", "claimOfflineBonus", "improveSkill", "claimFriendReward", "claimQuest", "claimDailyReward", "getHero", "allUserData", "onboardingComplete"].includes(e) && Ci().updateLastPingDate();
    const r = {
        auth: "/telegram/auth",
        getProfile: "/profile/info",
        allUserData: "/user/data/all",
        onboardingComplete: "/hero/onboarding/finish",
        resetOnboarding: "/hero/onboarding/reset",
        getHero: "/hero/info",
        sendTappedData: "/hero/action/tap",
        claimOfflineBonus: "/hero/bonus/offline/claim",
        ping: "/hero/balance/sync",
        getSkills: "/skills",
        improveSkill: "/skills/improve",
        getSettings: "/settings",
        setSettings: "/settings/save",
        getFriends: "/friends",
        claimFriendReward: "/friends/claim",
        claimBatchFriendReward: "/friends/claim/batch",
        connectFriend: "/friends/referrer/set",
        getQuests: "/quests/progress",
        claimQuest: "/quests/claim",
        checkQuest: "/quests/check",
        getDailyRewards: "/quests/daily",
        claimDailyReward: "/quests/daily/claim",
        questContentInfo: "/quests/content",
        questContentSubmit: "/quests/content/submit",
        questContentClaim: "/quests/content/claim",
        questContentRemove: "/quests/content/remove",
        allProgressDailyQuests: "/quests/daily/progress/all",
        claimProgressDailyQuest: "/quests/daily/progress/claim",
        pvpGetInfo: "/pvp/info",
        pvpClaim: "/pvp/claim",
        pvpFind: "/pvp/fight",
        pvpCancelFight: "/pvp/fight/cancel",
        pvpLeaderboard: "/pvp/leaderboard",
        communityLeaderboard: "/community/leaderboard",
        communityCreate: "/community/create",
        translationsGet: "/translations/info",
        translationsSubmit: "/translations/submit",
        fundInfo: "/fund/info",
        fundInvest: "/fund/invest",
        loadDb: "/dbs",
        assets: "/assets",
        getRatings: "/ratings",
        adminReset: "/admin/reset",
        walletTopup: "/billing/invoice/create",
        richList: "/billing/rich/list",
        purchaseBuy: "/purchase/buy",
        purchaseList: "/purchase/list"
    }[e]
      , a = await Rk(r, {}, {
        data: t
    });
    if (a.success)
        console.log(`>>> api: ${e} response: %o`, a.data);
    else
        throw Bt().authHash && hr({
            type: "danger",
            message: a.error
        }),
        a.error;
    return a.data
}
  , Lk = {
    data() {
        return {
            stores: {
                user: Bt(),
                state: Ci(),
                db: Xh()
            }
        }
    },
    methods: {
        apiCall: cn
    }
}
  , Mk = {
    components: {},
    async created() {},
    async mounted() {
        this.updateState(),
        await this.render()
    },
    data() {
        return {
            title: "",
            isShowButtonNext: !1,
            isTypeProcess: !1
        }
    },
    computed: {
        dbOnboardingByKey() {
            return this._arrayByKey(this.dbOnboarding, "key")
        },
        currentOnboarding() {
            return this.dbOnboarding.filter(t=>this.uHero.level >= t.minHeroLevel && this.uHero.level <= t.maxHeroLevel).sort((t,n)=>t.key - n.key).find(t=>!this._isOnboardingComplete([t.key]) && this.checkShow(t))
        }
    },
    watch: {
        async currentOnboarding(e, t) {
            this.updateState(),
            e && e.title !== t.title && (this.isTypeProcess || await this.render())
        }
    },
    methods: {
        async render() {
            if (this.title = "",
            this.isShowButtonNext = !1,
            this.currentOnboarding) {
                let e = 0
                  , t = this.currentOnboarding.title.replace("{discipline}", this.dbSkillsByKey.discipline.title).replace("{taskManager}", this.dbSkillsByKey.task_manager.title);
                for (this.isTypeProcess = !0; e !== t.length; )
                    this.title += t[e++],
                    await this._delay(25);
                await this._delay(150),
                this.isShowButtonNext = !0,
                this.isTypeProcess = !1
            }
        },
        updateState() {
            this.$emit("onboarding", !!this.currentOnboarding)
        },
        next() {
            this.currentOnboarding.action ? this.$router.push(this.currentOnboarding.action) : this._completeOnboarding([this.currentOnboarding.key])
        },
        checkShow(e) {
            var t, n, o, r;
            switch (e.needToShowMethodCheck) {
            case "":
                return !0;
            case "notImproveDiscipline":
                return !("discipline"in this.uSkills);
            case "notImproveTaskManager":
                return !("task_manager"in this.uSkills);
            case "notClaimQuestImproveDiscipline":
                return !((t = this.uQuests.filter(a=>a.key === "improve_discipline")[0]) != null && t.isRewarded);
            case "notClaimQuestImproveTaskManager":
                return !((n = this.uQuests.filter(a=>a.key === "improve_task_manager")[0]) != null && n.isRewarded);
            case "notClaimQuestTg":
                return !((o = this.uQuests.filter(a=>a.key === "join_tg")[0]) != null && o.isRewarded);
            case "notClaimQuestYt":
                return !((r = this.uQuests.filter(a=>a.key === "join_yt")[0]) != null && r.isRewarded);
            case "notClaimDailyReward1":
                return this.uDailyRewards[1] === "canTake";
            case "notClaimDailyReward2":
                return this.uDailyRewards[2] === "canTake";
            case "notClaimDailyReward":
                return Object.values(this.uDailyRewards).includes("canTake")
            }
            return !0
        }
    }
}
  , Fk = {
    key: 0,
    class: "right",
    style: {
        "margin-top": "5px"
    }
};
function Vk(e, t, n, o, r, a) {
    const i = je("van-icon")
      , l = je("van-button");
    return a.currentOnboarding ? (ke(),
    He("div", {
        key: 0,
        class: "onboarding",
        onClick: t[0] || (t[0] = s=>r.isShowButtonNext ? a.next() : !1)
    }, [d(i, {
        name: "info",
        color: "#fbcc54"
    }), Ie(" " + le(r.title) + " ", 1), r.isShowButtonNext ? (ke(),
    He("div", Fk, [d(l, {
        size: "mini",
        type: "primary",
        icon: "arrow",
        "icon-position": "right"
    }, {
        default: Pe(()=>[Ie(le(a.currentOnboarding.actionTitle), 1)]),
        _: 1
    })])) : mt("", !0)])) : mt("", !0)
}
const Nk = Oo(Mk, [["render", Vk], ["__scopeId", "data-v-f3210873"]])
  , Hk = {
    components: {
        Onboarding: Nk,
        Progressbar: pk
    },
    async created() {
        this.localSettings = this.uSettings
    },
    mounted() {},
    props: {
        isNoBg: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isNeedBg: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isShowPph: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isShowMoney: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isShowLottery: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    data: function() {
        return {
            isMenuOpen: !1,
            isShowPphPopup: !1,
            isShowMoneyPopup: !1,
            localSettings: {},
            isShowLangPicker: !1,
            isConnectFriendPopup: !1,
            connectFriendLink: "",
            isConnectFriendProgress: !1,
            isShowOnboardingState: !1,
            isAirdropPopupShow: !1
        }
    },
    computed: {
        isShowOnboarding() {
            return this.isShowOnboardingState && this.$route.path === "/"
        },
        isCanConnectFriend() {
            return "isCanConnectFriend"in this.uProfile && this.uProfile.isCanConnectFriend
        },
        firstLang() {
            return this.dbLangByKey.en
        },
        userLang() {
            var e, t;
            if (((e = window.Telegram.WebApp.WebAppUser) == null ? void 0 : e.language_code.length) > 0) {
                const n = (t = window.Telegram.WebApp.WebAppUser) == null ? void 0 : t.language_code.substring(0, 2);
                if (n in this.dbLangByKey)
                    return this.dbLangByKey[n]
            }
            return null
        },
        langByFirstLetter() {
            let e = this.dbLang;
            return e.sort((t,n)=>t.key.localeCompare(n.key)),
            e.reduce((t,n)=>{
                const o = n.key[0];
                return t[o] || (t[o] = []),
                t[o].push(n),
                t
            }
            , {})
        }
    },
    watch: {},
    methods: {
        setOnboardingState(e) {
            this.isShowOnboardingState = e
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        showPphPopup() {
            this.isShowPphPopup = !0,
            this._completeOnboarding(this.onBoard.pph)
        },
        showMoneyPopup() {
            this.isShowMoneyPopup = !0,
            this._completeOnboarding(this.onBoard.money)
        },
        async onLangSelect(e) {
            this.localSettings.lang = e,
            this.isShowLangPicker = !1,
            e === "en" && (this.dbTranslation = []);
            try {
                await this.saveSetting();
                try {
                    await this.dbLoadDbData(["dbTranslation"])
                } catch (t) {
                    console.log("Error: %o", t)
                }
            } catch (t) {
                console.log("Error: %o", t)
            }
        },
        async saveSetting(e="") {
            this.stores.user.setSettings(this.localSettings),
            await this.apiCall("setSettings", this.localSettings)
        },
        improveAction() {
            this.isShowPphPopup = !1,
            this.isShowMoneyPopup = !1,
            this.$router.push("/improve")
        },
        storeCardsAction() {
            this.isShowPphPopup = !1,
            this.isShowMoneyPopup = !1,
            this.$router.push("/store/cards")
        },
        async connectFriend() {
            if (this.connectFriendLink.length < 5)
                return !1;
            this.isConnectFriendProgress = !0;
            try {
                const e = await cn("connectFriend", this.connectFriendLink);
                this.stores.user.setHero(e.hero),
                this.stores.user.setProfile(e.profile)
            } catch (e) {
                hr({
                    type: "danger",
                    message: e
                })
            }
            this.isConnectFriendProgress = !1
        }
    }
}
  , nt = e=>(Rd("data-v-da64d564"),
e = e(),
Ld(),
e)
  , zk = {
    style: {
        padding: "15px"
    }
}
  , jk = {
    width: "100%"
}
  , Uk = {
    class: "clicked avatarBox"
}
  , Wk = {
    style: {
        position: "absolute",
        bottom: "7px",
        left: "-3px"
    }
}
  , Yk = {
    style: {
        color: "#fff",
        "font-weight": "bold",
        "font-size": "17px",
        "text-shadow": "0 0 2px #000"
    }
}
  , qk = {
    style: {
        position: "absolute",
        bottom: "-2px",
        left: "-2px",
        width: "62px",
        border: "1px solid #000"
    }
}
  , Kk = {
    style: {
        padding: "0 10px"
    }
}
  , Gk = {
    style: {
        "font-size": "18px",
        display: "flex",
        "justify-content": "space-between"
    }
}
  , Xk = {
    class: "nowrap value"
}
  , Qk = nt(()=>H("span", {
    class: "pph24"
}, null, -1))
  , Zk = {
    style: {
        color: "#fff",
        "font-size": "1.3em",
        "font-weight": "bold"
    }
}
  , Jk = nt(()=>H("span", {
    class: "pph24"
}, null, -1))
  , eT = nt(()=>H("br", null, null, -1))
  , tT = nt(()=>H("br", null, null, -1))
  , nT = nt(()=>H("br", null, null, -1))
  , oT = {
    key: 0,
    class: "improvesLines goldLines"
}
  , rT = {
    class: "goldText",
    style: {
        margin: "0"
    }
}
  , aT = {
    key: 1
}
  , iT = nt(()=>H("br", null, null, -1))
  , lT = {
    class: "nowrap"
}
  , sT = {
    class: "nowrap value"
}
  , cT = nt(()=>H("span", {
    class: "money18"
}, null, -1))
  , uT = {
    style: {
        color: "#fff",
        "font-size": "1.3em",
        "font-weight": "bold"
    }
}
  , dT = nt(()=>H("span", {
    class: "money18"
}, null, -1))
  , fT = nt(()=>H("br", null, null, -1))
  , hT = nt(()=>H("br", null, null, -1))
  , gT = nt(()=>H("br", null, null, -1))
  , mT = nt(()=>H("br", null, null, -1))
  , vT = nt(()=>H("br", null, null, -1))
  , bT = nt(()=>H("br", null, null, -1))
  , yT = nt(()=>H("div", {
    class: "lottery"
}, null, -1))
  , pT = [yT]
  , wT = nt(()=>H("br", null, null, -1))
  , ST = {
    style: {
        color: "var(--van-text-color)"
    }
}
  , CT = nt(()=>H("br", null, null, -1))
  , xT = nt(()=>H("br", null, null, -1))
  , _T = {
    class: "center"
}
  , kT = {
    style: {
        "font-size": "2em"
    }
}
  , TT = {
    style: {
        "font-size": "2em"
    }
}
  , PT = {
    style: {
        "font-size": "2em"
    }
}
  , ET = {
    class: "container center"
}
  , AT = {
    class: "center"
}
  , OT = {
    class: "container"
}
  , BT = {
    class: "center"
}
  , $T = nt(()=>H("br", null, null, -1))
  , DT = nt(()=>H("br", null, null, -1))
  , IT = nt(()=>H("br", null, null, -1))
  , RT = nt(()=>H("br", null, null, -1));
function LT(e, t, n, o, r, a) {
    const i = je("Progressbar")
      , l = je("onboarding")
      , s = je("van-icon")
      , c = je("van-button")
      , u = je("van-count-down")
      , f = je("van-popup")
      , h = je("van-switch")
      , m = je("van-cell")
      , w = je("van-cell-group")
      , C = je("van-index-anchor")
      , b = je("van-index-bar")
      , v = je("van-field");
    return ke(),
    He("div", {
        class: Kt(["topBar", {
            needBg: n.isNeedBg,
            noBg: n.isNoBg
        }])
    }, [H("div", zk, [H("table", jk, [H("tr", null, [H("td", {
        style: {
            width: "60px"
        },
        onClick: t[0] || (t[0] = g=>e.$router.push("/hero"))
    }, [H("div", Uk, [H("div", {
        class: "avatar",
        style: Pt({
            backgroundImage: `url(${e._getAvatarByLevel(e.uHero.level)})`
        })
    }, null, 4), H("div", Wk, [H("div", Yk, le(e.t("Lv.")) + " " + le(e.uHero.level), 1)]), H("div", qk, [d(i, {
        height: 10,
        color: "linear-gradient( 135deg, #FFB320 10%, #FFF6A8 100%)",
        "bg-color": "#000",
        percent: e.uLevelPercent,
        text: e.uLevelPercent + "%"
    }, null, 8, ["percent", "text"])])])]), H("td", Kk, [H("div", Gk, [st(d(l, {
        onOnboarding: a.setOnboardingState
    }, null, 8, ["onOnboarding"]), [[ft, a.isShowOnboarding]]), n.isShowPph && !a.isShowOnboarding ? (ke(),
    He("div", {
        key: 0,
        class: "metric",
        onClick: t[1] || (t[1] = (...g)=>a.showPphPopup && a.showPphPopup(...g)),
        id: "profit"
    }, [H("div", {
        class: Kt(["nowrap", {
            goldLightText: e.uPurchase.extendedOfflineTimeLeft > 0
        }])
    }, [e.uPurchase.extendedOfflineTimeLeft ? (ke(),
    $t(s, {
        key: 0,
        name: "star"
    })) : mt("", !0), Ie(" " + le(e.t("Profit per Hour")) + " ", 1), e._isOnboardingComplete(e.onBoard.pph) ? mt("", !0) : (ke(),
    $t(s, {
        key: 1,
        name: "question"
    }))], 2), H("div", Xk, [Qk, Ie(), H("span", {
        class: Kt({
            goldText: e.uPurchase.extendedOfflineTimeLeft > 0
        })
    }, "+" + le(e._numberShort(e.uHero.moneyPerHour)), 3)])])) : mt("", !0), d(f, {
        show: e.isShowPphPopup,
        "onUpdate:show": t[2] || (t[2] = g=>e.isShowPphPopup = g),
        round: "",
        position: "top",
        class: "center metricPopUp"
    }, {
        default: Pe(()=>[H("div", Zk, le(e.t("Profit per Hour")), 1), H("div", null, [Jk, Ie(" +" + le(e._number(e.uHero.moneyPerHour)), 1)]), H("p", null, le(e.t("To increase your Profit Per Hour, buy new improvements.")), 1), d(c, {
            type: "primary",
            onClick: a.improveAction,
            round: "",
            size: "small"
        }, {
            default: Pe(()=>[Ie(le(e.t("Go to the Improvement menu")), 1)]),
            _: 1
        }, 8, ["onClick"]), eT, tT, nT, e.uPurchase.extendedOfflineTimeLeft && e.uPurchase.extendedOfflineTimeLeft > 0 ? (ke(),
        He("div", oT, [H("h3", rT, le(e.t("You have an Offline Boost active")), 1), H("p", null, [Ie(le(e.t("There's a offline boost")) + " ", 1), d(u, {
            time: e.uPurchase.extendedOfflineTimeLeft * 1e3
        }, null, 8, ["time"])]), d(c, {
            type: "warning",
            onClick: a.storeCardsAction,
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: Pe(()=>[Ie(le(e.t("Go to Store")), 1)]),
            _: 1
        }, 8, ["onClick"])])) : (ke(),
        He("div", aT, [H("p", null, le(e.t("You will make a profit even when you are offline for up to 3 hours.")) + " " + le(e.t("Log in more often to collect more profits.")), 1), H("p", null, le(e.t("You can increase the offline time you are credited for by purchasing an Offline Boost from the Premium Store")), 1), d(c, {
            type: "warning",
            onClick: a.storeCardsAction,
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: Pe(()=>[Ie(le(e.t("Go to Store")), 1)]),
            _: 1
        }, 8, ["onClick"])])), iT]),
        _: 1
    }, 8, ["show"]), n.isShowMoney && !a.isShowOnboarding ? (ke(),
    He("div", {
        key: 1,
        class: "metric",
        id: "money",
        onClick: t[3] || (t[3] = (...g)=>a.showMoneyPopup && a.showMoneyPopup(...g))
    }, [H("div", lT, [Ie(le(e.t("Money")) + " ", 1), e._isOnboardingComplete(e.onBoard.money) ? mt("", !0) : (ke(),
    $t(s, {
        key: 0,
        name: "question"
    }))]), H("div", sT, [cT, Ie(" " + le(e._numberShort(e.uHero.money)), 1)])])) : mt("", !0), d(f, {
        show: e.isShowMoneyPopup,
        "onUpdate:show": t[4] || (t[4] = g=>e.isShowMoneyPopup = g),
        round: "",
        position: "top",
        class: "center metricPopUp"
    }, {
        default: Pe(()=>[H("div", uT, le(e.t("Money")), 1), H("div", null, [dT, Ie(" " + le(e._number(e.uHero.money)), 1)]), H("p", null, [Ie(le(e.t("How to get more money:")), 1), fT, H("span", null, "- " + le(e.t("Complete Quests")), 1), hT, H("span", null, "- " + le(e.t("Invite Friends")), 1), gT, H("span", null, "- " + le(e.t("Participate in Negotiations")), 1), mT, H("span", null, "- " + le(e.t("Tap")), 1), vT, H("span", null, "- " + le(e.t("Invest in the Stock Exchange")), 1), bT]), H("p", null, le(e.t("By buying improvements, you increase your experience and level.")), 1)]),
        _: 1
    }, 8, ["show"]), n.isShowLottery && !a.isShowOnboarding && e.uHero.level > 2 ? (ke(),
    He("div", {
        key: 2,
        class: "metric clicked",
        onClick: t[5] || (t[5] = g=>e.$router.push("/quests/content"))
    }, pT)) : mt("", !0)])]), H("td", {
        style: {
            width: "40px",
            position: "relative"
        },
        class: Kt({
            menuOpen: e.isMenuOpen
        })
    }, [d(s, {
        name: "wap-nav",
        onClick: a.toggleMenu,
        class: "menuBtn"
    }, null, 8, ["onClick"]), d(f, {
        show: e.isMenuOpen,
        "onUpdate:show": t[22] || (t[22] = g=>e.isMenuOpen = g),
        round: "",
        position: "top",
        "overlay-class": "overlayClass",
        class: "settingPopup",
        transition: e.isRtl ? "van-slide-left" : "van-slide-right"
    }, {
        default: Pe(()=>[d(w, null, {
            default: Pe(()=>[e.uProfile.isBetaTester ? (ke(),
            $t(m, {
                key: 0,
                center: "",
                title: e.t("Sound"),
                icon: "volume-o"
            }, {
                "right-icon": Pe(()=>[d(h, {
                    modelValue: e.localSettings.sound,
                    "onUpdate:modelValue": t[6] || (t[6] = g=>e.localSettings.sound = g),
                    onClick: a.saveSetting
                }, null, 8, ["modelValue", "onClick"])]),
                _: 1
            }, 8, ["title"])) : mt("", !0), d(m, {
                center: "",
                title: e.t("Vibrate"),
                icon: "bulb-o"
            }, {
                "right-icon": Pe(()=>[d(h, {
                    modelValue: e.localSettings.vibrate,
                    "onUpdate:modelValue": t[7] || (t[7] = g=>e.localSettings.vibrate = g),
                    onClick: a.saveSetting
                }, null, 8, ["modelValue", "onClick"])]),
                _: 1
            }, 8, ["title"]), d(m, {
                center: "",
                title: e.t("Language"),
                value: e.dbLangByKey[e.localSettings.lang].title,
                icon: "chat",
                "is-link": "",
                "arrow-direction": "down",
                onClick: t[8] || (t[8] = g=>e.isShowLangPicker = !0)
            }, null, 8, ["title", "value"]), d(m, {
                center: "",
                title: e.t("Rating"),
                "is-link": "",
                to: "/rating",
                onClick: t[9] || (t[9] = g=>{
                    e.isMenuOpen = !1
                }
                ),
                icon: "award"
            }, null, 8, ["title"]), d(m, {
                center: "",
                title: e.t("Tutorial"),
                "is-link": "",
                onClick: t[10] || (t[10] = g=>e._resetOnboarding()),
                icon: "question"
            }, null, 8, ["title"]), d(m, {
                center: "",
                title: e.t("Video tutorials"),
                "is-link": "",
                onClick: t[11] || (t[11] = g=>e._openUrl("https://www.youtube.com/watch?v=rxltFZiroR8")),
                icon: "tv-o"
            }, null, 8, ["title"])]),
            _: 1
        }), wT, d(w, null, {
            default: Pe(()=>[d(m, {
                center: "",
                title: "Airdrop",
                "is-link": "",
                onClick: t[12] || (t[12] = g=>e.isAirdropPopupShow = !0),
                icon: "gem"
            }), d(m, {
                center: "",
                icon: "miniprogram-o",
                title: e.t("Connect Wallet")
            }, {
                "right-icon": Pe(()=>[H("span", ST, le(e.t("soon")), 1)]),
                _: 1
            }, 8, ["title"])]),
            _: 1
        }), CT, d(w, null, {
            default: Pe(()=>[d(m, {
                center: "",
                title: e.t("Our Telegram channel"),
                "is-link": "",
                onClick: e._ourTgClick,
                icon: "like"
            }, null, 8, ["title", "onClick"]), d(m, {
                center: "",
                title: e.t("Support"),
                "is-link": "",
                onClick: t[13] || (t[13] = g=>e._openUrl("https://t.me/musk_assistance")),
                icon: "service"
            }, null, 8, ["title"]), this.localSettings.lang !== "en" ? (ke(),
            $t(m, {
                key: 0,
                center: "",
                title: e.t("Tell about the mistranslation"),
                "is-link": "",
                to: "/translations",
                onClick: t[14] || (t[14] = g=>{
                    e.isMenuOpen = !1
                }
                ),
                icon: "wechat"
            }, null, 8, ["title"])) : mt("", !0)]),
            _: 1
        }), a.isCanConnectFriend ? (ke(),
        He(Fe, {
            key: 0
        }, [xT, d(w, null, {
            default: Pe(()=>[d(m, {
                center: "",
                title: e.t("Indicate the friend who invited me"),
                "is-link": "",
                onClick: t[15] || (t[15] = g=>e.isConnectFriendPopup = !0),
                icon: "friends"
            }, null, 8, ["title"])]),
            _: 1
        })], 64)) : mt("", !0), d(f, {
            show: e.isShowLangPicker,
            "onUpdate:show": t[18] || (t[18] = g=>e.isShowLangPicker = g),
            position: "bottom",
            style: {
                height: "80%"
            },
            closeable: ""
        }, {
            default: Pe(()=>[H("h2", _T, le(e.t("Select language")), 1), d(b, null, {
                default: Pe(()=>[d(w, {
                    inset: ""
                }, {
                    default: Pe(()=>[d(m, {
                        title: a.firstLang.title,
                        "is-link": "",
                        value: a.firstLang.key,
                        center: "",
                        onClick: t[16] || (t[16] = g=>a.onLangSelect(a.firstLang.key))
                    }, {
                        icon: Pe(()=>[H("span", kT, le(a.firstLang.icon) + " ", 1)]),
                        _: 1
                    }, 8, ["title", "value"]), a.userLang ? (ke(),
                    $t(m, {
                        key: 0,
                        title: a.userLang.title,
                        "is-link": "",
                        value: a.userLang.key,
                        center: "",
                        onClick: t[17] || (t[17] = g=>a.onLangSelect(a.userLang.key))
                    }, {
                        icon: Pe(()=>[H("span", TT, le(a.userLang.icon) + " ", 1)]),
                        _: 1
                    }, 8, ["title", "value"])) : mt("", !0)]),
                    _: 1
                }), (ke(!0),
                He(Fe, null, zr(a.langByFirstLetter, (g,p)=>(ke(),
                He(Fe, {
                    key: p
                }, [d(C, {
                    index: p
                }, null, 8, ["index"]), d(w, {
                    inset: ""
                }, {
                    default: Pe(()=>[(ke(!0),
                    He(Fe, null, zr(g, y=>(ke(),
                    $t(m, {
                        key: y.key,
                        title: y.title,
                        label: y.titleEn,
                        "is-link": "",
                        value: y.key,
                        center: "",
                        onClick: S=>a.onLangSelect(y.key)
                    }, {
                        icon: Pe(()=>[H("span", PT, le(y.icon) + " ", 1)]),
                        _: 2
                    }, 1032, ["title", "label", "value", "onClick"]))), 128))]),
                    _: 2
                }, 1024)], 64))), 128))]),
                _: 1
            })]),
            _: 1
        }, 8, ["show"]), a.isCanConnectFriend ? (ke(),
        $t(f, {
            key: 1,
            show: e.isConnectFriendPopup,
            "onUpdate:show": t[20] || (t[20] = g=>e.isConnectFriendPopup = g),
            style: {
                "max-height": "80%",
                width: "100%"
            },
            position: "top"
        }, {
            default: Pe(()=>[H("div", ET, [H("h2", AT, le(e.t("Connect with Friend")), 1), H("p", null, le(e.t("If you were invited by a friend, but for some reason you didn't connect with it and didn't receive bonuses, you can join this friend manually.")), 1), H("p", null, le(e.t("This option is available for the first 24 hours after register")), 1), H("p", null, le(e.t("Enter your friend's invite link or referral code:")), 1), d(w, null, {
                default: Pe(()=>[d(v, {
                    modelValue: e.connectFriendLink,
                    "onUpdate:modelValue": t[19] || (t[19] = g=>e.connectFriendLink = g),
                    center: "",
                    autofocus: !0,
                    clearable: "",
                    class: "refCodeInput",
                    placeholder: this.uProfile.refCode,
                    style: {
                        color: "#fff",
                        "font-size": "1.1em"
                    }
                }, null, 8, ["modelValue", "placeholder"])]),
                _: 1
            }), d(c, {
                type: "primary",
                style: {
                    "margin-top": "10px"
                },
                loading: e.isConnectFriendProgress,
                "loading-text": e.t("Connecting a friend..."),
                onClick: a.connectFriend
            }, {
                default: Pe(()=>[Ie(le(e.t("Connect a friend ")), 1)]),
                _: 1
            }, 8, ["loading", "loading-text", "onClick"])])]),
            _: 1
        }, 8, ["show"])) : mt("", !0), d(f, {
            show: e.isAirdropPopupShow,
            "onUpdate:show": t[21] || (t[21] = g=>e.isAirdropPopupShow = g),
            position: "bottom",
            style: {
                "max-height": "80%"
            },
            closeable: ""
        }, {
            default: Pe(()=>[H("div", OT, [H("h2", BT, le(e.t("About Airdrop")), 1), H("p", null, le(e.t("TOKEN WILL BE LAUNCHED ON {TON}")), 1), H("p", null, le(e.t("This game is the first step toward our extensive ecosystem, which we will gradually reveal to you.")), 1), H("p", null, le(e.t("One of the exciting stages ahead is a significant token airdrop. We're committed to maximizing your earnings.")), 1), H("p", null, le(e.t("The number of tokens you receive in the airdrop will depend on several factors. We'll share all the calculation details a bit later.")), 1), H("p", null, [Ie(le(e.t("For now, we can tell you that these three game metrics will play a major role in determining the final token distribution:")) + " ", 1), $T, Ie(" " + le(e.t("1. Profit Per Hour")) + " ", 1), DT, Ie(" " + le(e.t("2. The total number of coins you’ve earned throughout the period")) + " ", 1), IT, Ie(" " + le(e.t("3. The number of friends you’ve invite.")), 1), RT]), H("p", null, le(e.t("For now, the most important thing is to enjoy the game, develop your character, and help us grow our ecosystem!")), 1), d(c, {
                onClick: e._ourTgClick,
                size: "large",
                type: "warning",
                round: ""
            }, {
                default: Pe(()=>[Ie(le(e.t("Follow our TG channel")), 1)]),
                _: 1
            }, 8, ["onClick"])])]),
            _: 1
        }, 8, ["show"])]),
        _: 1
    }, 8, ["show", "transition"])], 2)])])])], 2)
}
const MT = Oo(Hk, [["render", LT], ["__scopeId", "data-v-da64d564"]])
  , FT = {
    components: {},
    async created() {},
    props: {},
    data: function() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {
        next() {
            this.$refs.swipeOnboardingStart.next()
        }
    }
}
  , VT = {
    class: "onboardingStart center",
    style: {
        direction: "ltr"
    }
}
  , NT = {
    class: "container"
}
  , HT = {
    class: "goldText title"
}
  , zT = {
    class: "center buttonNextContainer"
}
  , jT = {
    class: "container"
}
  , UT = {
    class: "goldText title"
}
  , WT = {
    class: ""
}
  , YT = {
    class: "center buttonNextContainer"
}
  , qT = {
    class: "container"
}
  , KT = {
    class: "",
    style: {
        "margin-bottom": "0",
        "font-size": "1.5em"
    }
}
  , GT = {
    class: "goldText title"
}
  , XT = {
    class: "center buttonNextContainer"
};
function QT(e, t, n, o, r, a) {
    const i = je("van-button")
      , l = je("van-swipe-item")
      , s = je("van-swipe");
    return ke(),
    He("div", VT, [d(s, {
        class: "onboardingSwipe",
        autoplay: 0,
        loop: !1,
        ref: "swipeOnboardingStart",
        style: {
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0"
        },
        duration: e.isRtl ? 0 : 500,
        touchable: !e.isRtl
    }, {
        default: Pe(()=>[d(l, {
            class: Kt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: Pe(()=>[H("div", NT, [H("div", HT, le(e.t("Let's get rich together")), 1), H("div", {
                class: "maskot",
                style: Pt({
                    backgroundImage: `url(${e._getAvatarByLevel(3)})`
                })
            }, null, 4), H("div", zT, [d(i, {
                class: "buttonNext",
                icon: "arrow",
                "icon-position": "right",
                onClick: a.next,
                type: "primary",
                round: ""
            }, {
                default: Pe(()=>[Ie(le(e.t("Next")), 1)]),
                _: 1
            }, 8, ["onClick"])])])]),
            _: 1
        }, 8, ["class"]), d(l, {
            class: Kt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: Pe(()=>[H("div", jT, [H("div", UT, le(e.t("Take real tokens")), 1), H("p", WT, le(e.t("Improve your character, earn coins and exchange them for real tokens")), 1), H("div", {
                class: "maskot",
                style: Pt({
                    backgroundImage: `url(${e._getAvatarByLevel(12)})`
                })
            }, null, 4), H("div", YT, [d(i, {
                class: "buttonNext",
                icon: "arrow",
                "icon-position": "right",
                onClick: a.next,
                type: "primary",
                round: ""
            }, {
                default: Pe(()=>[Ie(le(e.t("Next")), 1)]),
                _: 1
            }, 8, ["onClick"])])])]),
            _: 1
        }, 8, ["class"]), d(l, {
            class: Kt(["item", {
                rtl: e.isRtl
            }])
        }, {
            default: Pe(()=>[H("div", qT, [H("p", KT, le(e.t("Invite friends and get up to")), 1), H("div", GT, le(e.t("100,000,000 coins!")), 1), H("div", {
                class: "maskot",
                style: Pt({
                    backgroundImage: `url(${e._getAvatarByLevel(19)})`
                })
            }, null, 4), H("div", XT, [d(i, {
                type: "warning",
                round: "",
                class: "btnShadow",
                icon: "arrow",
                "icon-position": "right",
                onClick: t[0] || (t[0] = c=>e._completeOnboarding(e.onBoard.start))
            }, {
                default: Pe(()=>[Ie(le(e.t("Start earn")), 1)]),
                _: 1
            })])])]),
            _: 1
        }, 8, ["class"])]),
        _: 1
    }, 8, ["duration", "touchable"])])
}
const ZT = Oo(FT, [["render", QT], ["__scopeId", "data-v-4ebf6322"]])
  , JT = {
    components: {},
    async created() {},
    props: {
        level: {
            type: Number,
            required: !0
        }
    },
    data: function() {
        return {}
    },
    computed: {
        skills() {
            return this._getAvailableSkillsForLevel(this.level) ?? []
        }
    },
    watch: {},
    methods: {
        next() {},
        async completeOnboarding() {}
    }
}
  , eP = {
    class: "skillsByLevel"
}
  , tP = {
    class: "title"
}
  , nP = {
    class: "level"
};
function oP(e, t, n, o, r, a) {
    return ke(),
    He("div", eP, [(ke(!0),
    He(Fe, null, zr(a.skills, i=>(ke(),
    He("div", {
        key: i.key,
        class: "skillItem",
        style: Pt({
            backgroundImage: `url(${e._getSkillImg(i.key)})`
        })
    }, [H("div", tP, le(i.title), 1), H("div", nP, le(i.level), 1)], 4))), 128))])
}
const rP = Oo(JT, [["render", oP], ["__scopeId", "data-v-30aa9df3"]])
  , aP = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH1AQMAAAA6RJ5sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF+/v7BgYGDwXe/gAAAv9JREFUeJzt3TF2gzAMBmDnZWDMETgKRzNH4ygcIWMGHmps2UIiLpBmCfWvIY2LPl4nPUsOqSMbveviz8k9g391d0344WK0Nv3u4OHh4bf89R2vchjcn6/XDT+4HJcj/iHpzz8VHh7+W32v/LzhGUzsO10f+pjXcDnyMfXB5YhT4eHh4ZUPcXsupeBQJPOHnuDh4WvxcbF4CXh4ePjDvqM0TNnwOcz+Z+b5yxiLGen6JQEPD38yP629iX1voujHpf74uDD7H3h4ePjkC9Hq23HI/PdIwMPDV+JDTpvrSCCD4/5Hrkn/5OO1Rl/L/RP7y5u+g4eHP7nvpakSLwc+xud7P/LNOtm/8B4njnzD/kcdOAvge6v+zRPBw8P/G09H/N163uNwTqw/OdT8RUa2Q4SF+S08PHxtvjVe1Z9bnvL6mCklq4tLORsKof0MDw9fnX/pf265/6G4mUmJ4bUldZy8Pz8xvl/7/f4NHh7+232Xsv7mOacheqlfy7Vp6Z/Eh+oEDw//X/y6fzniQ4Rfpm0Nh3pkUJ0N9fxmmc108PDwlfsuzVhMyIxFlrkdkkKXAx4evlZP+hyYh7opeNmSOn8ed+cni58LfrC+0L/Bw8OfzHc5Y7t+0Lp+6P2LecpHPf8jZ0NLSG9F8PDwJ/f+Ix9exyWnT2T1/M9k57eXPKqBh4ev1ed9j8xYXFqmWJ0/e7md6b/e9C/9Gzw8/Fk9ZwYv01uuEaTPf14jVK/B+Kv185738PDwFfvRFYLbMTlMYj9x/Rpihvn8Ljw8fL2ebPTRq1B7I58+amvOn+Hh4eHFc5jz5yvJ5994mT5oR5Sf/xFU9E3R+xd/gYeHP51vY658/yMPbNM4N19bF5rc/xR8mxd7foCHh6/Wb9QPNeNV33/A7ZQa1HzmN/5+eHj47/Qyjh1LPs9fnD5/jtHH2zX53p6K+x94ePiqfA7pn25LMeqISH3/rCRms+XD2xYeHv6LvYnPvRQMW3KUV/9MsDj/DWXpkP9lfgwPD1+Bf9aPH6RrIHCorCwbAAAAAElFTkSuQmCC"
  , iP = {
    components: {
        NewSkillsByLevel: rP,
        OnboardingStart: ZT,
        TopBar: MT,
        BottomBar: hk
    },
    async created() {
        this.startTime = new Date;
        try {
            await this.loadWithMinTime(2e3, async()=>{
                await this.auth(),
                await this.dbLoadDbData(),
                await this.loadPageData(),
                await this.preloadSounds()
            }
            ),
            this.$router.beforeEach(()=>{
                this._sound("page_change")
            }
            ),
            this.dbLoaded = !0
        } catch (e) {
            e === "platform" && (this.isPlatformOk = !1)
        }
    },
    async mounted() {
        this.$nextTick(function() {
            this.onLoaded(),
            this.updateTheme(),
            setInterval((function() {
                "money"in this.stores.user.hero && (this.stores.user.addMoney(this.uHero.moneyPerHour / 3600),
                this.stores.user.energyAdd())
            }
            ).bind(this), 1e3),
            setInterval((async function() {
                await this._sendTappedData();
                const e = (new Date - this.stores.state.lastPingDate) / 1e3
                  , n = (new Date - this.startTime) / 1e3 > 300 ? 120 : 30;
                if (e > n && this.uProfile.id && this.$route.name !== "negotiations" && !this.isPingInProcess) {
                    this.isPingInProcess = !0;
                    try {
                        const o = await this.apiCall("ping");
                        this.stores.user.setHero(o.hero)
                    } catch (o) {
                        throw this.isPingInProcess = !1,
                        o
                    }
                    this.isPingInProcess = !1
                }
            }
            ).bind(this), 5e3)
        })
    },
    data() {
        return {
            isPlatformOk: !0,
            isPingInProcess: !1,
            dbLoaded: !1,
            isOfflineBonusShow: !1,
            isLevelChange: !1,
            debugData: null,
            offlineBonusLocalVar: 0,
            startTime: null
        }
    },
    computed: {},
    watch: {
        uHero(e, t) {
            "level"in t && e.level !== t.level && (this.isLevelChange = !0,
            this._vibrate("success"),
            this._sound("level_up"));
            const n = e.moneyPerHour / 60 * 1;
            "offlineBonus"in e && e.offlineBonus > n && (this.offlineBonusLocalVar = e.offlineBonus,
            this.isOfflineBonusShow = !0,
            this._vibrate("success"),
            this._sound("offline_bonus"))
        },
        dbLoaded(e) {}
    },
    methods: {
        async preloadSounds() {
            return await Promise.all([Wn("level_up", "/assets/sound/level_up.mp3"), Wn("offline_bonus", "/assets/sound/offline_bonus.mp3"), Wn("page_change", "/assets/sound/page_change.mp3"), Wn("soft_tap", "/assets/sound/soft_tap.mp3"), Wn("take_money", "/assets/sound/take_money.mp3"), Wn("take_pph", "/assets/sound/take_pph.mp3"), Wn("tap", "/assets/sound/tap.wav"), Wn("tap2", "/assets/sound/tap2.wav")])
        },
        async loadWithMinTime(e, t) {
            const n = Date.now();
            await t();
            const o = Date.now() - n;
            o < e && await this._delay(e - o)
        },
        onLoaded() {
            this._isIphone() ? document.documentElement.classList.add("isIphone") : (document.documentElement.classList.add("isNotIphone"),
            this.onScroll(),
            document.documentElement.addEventListener("touchstart", this.onScroll, {
                passive: !1
            }),
            document.documentElement.addEventListener("touchmove", this.onScroll, {
                passive: !1
            }),
            document.documentElement.addEventListener("scroll", this.onScroll, {
                passive: !1
            }))
        },
        onScroll() {
            window.scrollY <= 1 && window.scrollTo(0, 1)
        },
        updateTheme() {
            const e = "#1F3152";
            window.Telegram.WebApp.setHeaderColor(e),
            window.Telegram.WebApp.setBackgroundColor(e)
        },
        play() {},
        pause() {
            this.$refs.bgmusic.pause()
        },
        async claimOfflineBonus() {
            this.isOfflineBonusShow = !1;
            try {
                const e = await this.apiCall("claimOfflineBonus");
                this._animateMoneyFromBottom(this.offlineBonusLocalVar),
                this.stores.user.setHero(e.hero),
                this.offlineBonusLocalVar = 0
            } catch (e) {
                console.log("Error: %o", e),
                hr({
                    type: "danger",
                    message: this.t("Some problem")
                })
            }
        }
    }
}
  , Rn = e=>(Rd("data-v-e7e70d77"),
e = e(),
Ld(),
e)
  , lP = {
    key: 0,
    style: {
        "align-content": "center",
        position: "fixed",
        top: "10%",
        left: "0"
    },
    class: "center"
}
  , sP = {
    class: "goldText"
}
  , cP = Rn(()=>H("img", {
    src: aP,
    alt: "",
    style: {
        "max-width": "80%",
        background: "#fff",
        padding: "10px"
    }
}, null, -1))
  , uP = Rn(()=>H("a", {
    href: "https://t.me/muskempire_bot",
    style: {
        color: "#fff",
        "font-size": "1.5em"
    }
}, "https://t.me/muskempire_bot", -1))
  , dP = Rn(()=>H("audio", {
    id: "sound",
    src: ""
}, null, -1))
  , fP = {
    key: 0,
    class: "loadingScreen"
}
  , hP = Rn(()=>H("div", {
    class: "improvesLines goldLines center",
    style: {
        position: "fixed",
        bottom: "80px",
        left: "0",
        width: "100%"
    }
}, [H("div", {
    class: "goldText",
    style: {
        "font-size": "30px"
    }
}, "Earn your billions!")], -1))
  , gP = Rn(()=>H("div", {
    class: "tokenWillBe"
}, [H("div", null, "Token will be launched on Ton")], -1))
  , mP = {
    class: "leSnake"
}
  , vP = Rn(()=>H("div", {
    class: "progressBar"
}, [H("div", {
    class: "progressResult"
})], -1))
  , bP = {
    id: "scrollable",
    class: "scrollable"
}
  , yP = {
    class: "container center"
}
  , pP = {
    class: "goldText"
}
  , wP = Rn(()=>H("span", {
    class: "money26"
}, null, -1))
  , SP = {
    class: "container center",
    style: {
        "padding-bottom": "40px"
    }
}
  , CP = {
    class: "goldText"
}
  , xP = Rn(()=>H("br", null, null, -1))
  , _P = {
    class: "improvesLines goldLines",
    style: {
        margin: "20px 0"
    }
}
  , kP = {
    style: {
        "margin-bottom": "10px"
    }
}
  , TP = {
    key: 0
}
  , PP = Rn(()=>H("br", null, null, -1))
  , EP = {
    key: 3,
    style: {
        width: "100%",
        padding: "5px",
        background: "#bbb",
        position: "fixed",
        top: "150px",
        left: "0"
    }
};
function AP(e, t, n, o, r, a) {
    const i = je("van-config-provider")
      , l = je("OnboardingStart")
      , s = je("TopBar")
      , c = je("RouterView")
      , u = je("van-button")
      , f = je("van-count-down")
      , h = je("van-popup")
      , m = je("new-skills-by-level")
      , w = je("BottomBar");
    return ke(),
    He("div", null, [r.isPlatformOk ? (ke(),
    He(Fe, {
        key: 1
    }, [d(i, {
        theme: "dark"
    }), dP, r.dbLoaded ? e._isOnboardingComplete(e.onBoard.start) ? (ke(),
    He(Fe, {
        key: 2
    }, [d(s, {
        "is-show-pph": this.stores.state.topBar.isShowPph,
        "is-show-money": this.stores.state.topBar.isShowMoney,
        "is-need-bg": this.stores.state.topBar.isNeedBg,
        "is-no-bg": this.stores.state.topBar.isNoBg,
        "is-show-lottery": this.stores.state.topBar.isShowLottery
    }, null, 8, ["is-show-pph", "is-show-money", "is-need-bg", "is-no-bg", "is-show-lottery"]), H("div", bP, [d(c)]), d(h, {
        show: r.isOfflineBonusShow,
        "onUpdate:show": t[1] || (t[1] = C=>r.isOfflineBonusShow = C),
        round: "",
        position: "bottom"
    }, {
        default: Pe(()=>[H("div", yP, [e.uPurchase.extendedOfflineTimeLeft ? (ke(),
        He(Fe, {
            key: 1
        }, [H("h1", pP, le(e.t("Offline bonus")), 1), H("p", null, [Ie(le(e.t("You have an Offline Boost active.")) + " ", 1), d(f, {
            time: e.uPurchase.extendedOfflineTimeLeft * 1e3,
            style: {
                color: "#fff"
            }
        }, null, 8, ["time"])]), H("p", null, le(e.t("Your company keeps earning while you're offline.")), 1)], 64)) : (ke(),
        He(Fe, {
            key: 0
        }, [H("h1", null, le(e.t("Offline bonus")), 1), H("p", null, le(e.t("Your company keeps earning 3 hours while you're offline.")), 1), H("p", null, le(e.t("You can purchase a Boost increasing the offline bonus period.")), 1), d(u, {
            type: "primary",
            onClick: t[0] || (t[0] = C=>e.$router.push("/store/cards")),
            round: "",
            size: "small",
            icon: "star"
        }, {
            default: Pe(()=>[Ie(le(e.t("Go to Store")), 1)]),
            _: 1
        }), H("p", null, le(e.t("Come back more often, employees miss you.")), 1)], 64)), H("h2", null, [wP, Ie(" +" + le(e._number(r.offlineBonusLocalVar)), 1)]), d(u, {
            type: "warning",
            class: "btnShadow",
            round: "",
            size: "large",
            onClick: a.claimOfflineBonus
        }, {
            default: Pe(()=>[Ie(le(e.t("Claim")), 1)]),
            _: 1
        }, 8, ["onClick"])])]),
        _: 1
    }, 8, ["show"]), r.isLevelChange ? (ke(),
    $t(h, {
        key: 0,
        show: r.isLevelChange,
        "onUpdate:show": t[3] || (t[3] = C=>r.isLevelChange = C),
        round: "",
        class: "levelUp",
        position: "bottom"
    }, {
        default: Pe(()=>[H("div", SP, [H("div", {
            class: "avatar aniBounceZoomIn",
            style: Pt({
                backgroundImage: `url(${e._getAvatarByLevel(e.uHero.level)})`
            })
        }, null, 4), H("h1", CP, le(e.t("Level UP!")), 1), H("div", null, [Ie(le(e.t("Congratulations, you got")) + " ", 1), xP, Ie(le(e.t("Lv.")) + " " + le(e.uHero.level) + " — " + le(e.t(e.dbLevelsByLevel[e.uHero.level].title)), 1)]), H("div", _P, [H("div", kP, le(e.t("Profit Per Tap increased.")), 1), e._getAvailableSkillsForLevel(e.uHero.level).length > 0 ? (ke(),
        He("div", TP, [Ie(le(e.t("New improves:")) + " ", 1), PP, d(m, {
            level: e.uHero.level,
            style: {
                "overflow-y": "scroll",
                "max-height": "170px"
            }
        }, null, 8, ["level"])])) : mt("", !0)]), d(u, {
            type: "success",
            size: "large",
            round: "",
            onClick: t[2] || (t[2] = C=>{
                r.isLevelChange = !1
            }
            )
        }, {
            default: Pe(()=>[Ie(le(e.t("I'm good!")), 1)]),
            _: 1
        })])]),
        _: 1
    }, 8, ["show"])) : mt("", !0), d(w)], 64)) : (ke(),
    $t(l, {
        key: 1
    })) : (ke(),
    He("div", fP, [hP, gP, H("div", mP, [(ke(),
    He(Fe, null, zr("Loading...", (C,b)=>H("span", {
        key: C,
        style: Pt({
            animationDelay: b * .2 + "s"
        })
    }, le(C), 5)), 64))]), vP])), r.debugData ? (ke(),
    He("div", EP, le(r.debugData), 1)) : mt("", !0)], 64)) : (ke(),
    He("div", lP, [H("h1", sP, le(e.t("Use Telegram on your mobile!")), 1), cP, uP]))])
}
const OP = Oo(iP, [["render", AP], ["__scopeId", "data-v-e7e70d77"]])
  , BP = "modulepreload"
  , $P = function(e) {
    return "/" + e
}
  , Lu = {}
  , Ze = function(t, n, o) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const a = document.querySelector("meta[property=csp-nonce]")
          , i = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
        r = Promise.all(n.map(l=>{
            if (l = $P(l),
            l in Lu)
                return;
            Lu[l] = !0;
            const s = l.endsWith(".css")
              , c = s ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${c}`))
                return;
            const u = document.createElement("link");
            if (u.rel = s ? "stylesheet" : BP,
            s || (u.as = "script",
            u.crossOrigin = ""),
            u.href = l,
            i && u.setAttribute("nonce", i),
            document.head.appendChild(u),
            s)
                return new Promise((f,h)=>{
                    u.addEventListener("load", f),
                    u.addEventListener("error", ()=>h(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    return r.then(()=>t()).catch(a=>{
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = a,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw a
    }
    )
};
/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Wo = typeof document < "u";
function DP(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Ne = Object.assign;
function tl(e, t) {
    const n = {};
    for (const o in t) {
        const r = t[o];
        n[o] = Jt(r) ? r.map(e) : e(r)
    }
    return n
}
const Rr = ()=>{}
  , Jt = Array.isArray
  , tg = /#/g
  , IP = /&/g
  , RP = /\//g
  , LP = /=/g
  , MP = /\?/g
  , ng = /\+/g
  , FP = /%5B/g
  , VP = /%5D/g
  , og = /%5E/g
  , NP = /%60/g
  , rg = /%7B/g
  , HP = /%7C/g
  , ag = /%7D/g
  , zP = /%20/g;
function Is(e) {
    return encodeURI("" + e).replace(HP, "|").replace(FP, "[").replace(VP, "]")
}
function jP(e) {
    return Is(e).replace(rg, "{").replace(ag, "}").replace(og, "^")
}
function Ml(e) {
    return Is(e).replace(ng, "%2B").replace(zP, "+").replace(tg, "%23").replace(IP, "%26").replace(NP, "`").replace(rg, "{").replace(ag, "}").replace(og, "^")
}
function UP(e) {
    return Ml(e).replace(LP, "%3D")
}
function WP(e) {
    return Is(e).replace(tg, "%23").replace(MP, "%3F")
}
function YP(e) {
    return e == null ? "" : WP(e).replace(RP, "%2F")
}
function Gr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const qP = /\/$/
  , KP = e=>e.replace(qP, "");
function nl(e, t, n="/") {
    let o, r = {}, a = "", i = "";
    const l = t.indexOf("#");
    let s = t.indexOf("?");
    return l < s && l >= 0 && (s = -1),
    s > -1 && (o = t.slice(0, s),
    a = t.slice(s + 1, l > -1 ? l : t.length),
    r = e(a)),
    l > -1 && (o = o || t.slice(0, l),
    i = t.slice(l, t.length)),
    o = ZP(o ?? t, n),
    {
        fullPath: o + (a && "?") + a + i,
        path: o,
        query: r,
        hash: Gr(i)
    }
}
function GP(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function Mu(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function XP(e, t, n) {
    const o = t.matched.length - 1
      , r = n.matched.length - 1;
    return o > -1 && o === r && or(t.matched[o], n.matched[r]) && ig(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function or(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function ig(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!QP(e[n], t[n]))
            return !1;
    return !0
}
function QP(e, t) {
    return Jt(e) ? Fu(e, t) : Jt(t) ? Fu(t, e) : e === t
}
function Fu(e, t) {
    return Jt(t) ? e.length === t.length && e.every((n,o)=>n === t[o]) : e.length === 1 && e[0] === t
}
function ZP(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , o = e.split("/")
      , r = o[o.length - 1];
    (r === ".." || r === ".") && o.push("");
    let a = n.length - 1, i, l;
    for (i = 0; i < o.length; i++)
        if (l = o[i],
        l !== ".")
            if (l === "..")
                a > 1 && a--;
            else
                break;
    return n.slice(0, a).join("/") + "/" + o.slice(i).join("/")
}
var Xr;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(Xr || (Xr = {}));
var Lr;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(Lr || (Lr = {}));
function JP(e) {
    if (!e)
        if (Wo) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    KP(e)
}
const eE = /^[^#]+#/;
function tE(e, t) {
    return e.replace(eE, "#") + t
}
function nE(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , o = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: o.left - n.left - (t.left || 0),
        top: o.top - n.top - (t.top || 0)
    }
}
const xi = ()=>({
    left: window.scrollX,
    top: window.scrollY
});
function oE(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , o = typeof n == "string" && n.startsWith("#")
          , r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r)
            return;
        t = nE(r, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function Vu(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Fl = new Map;
function rE(e, t) {
    Fl.set(e, t)
}
function aE(e) {
    const t = Fl.get(e);
    return Fl.delete(e),
    t
}
let iE = ()=>location.protocol + "//" + location.host;
function lg(e, t) {
    const {pathname: n, search: o, hash: r} = t
      , a = e.indexOf("#");
    if (a > -1) {
        let l = r.includes(e.slice(a)) ? e.slice(a).length : 1
          , s = r.slice(l);
        return s[0] !== "/" && (s = "/" + s),
        Mu(s, "")
    }
    return Mu(n, e) + o + r
}
function lE(e, t, n, o) {
    let r = []
      , a = []
      , i = null;
    const l = ({state: h})=>{
        const m = lg(e, location)
          , w = n.value
          , C = t.value;
        let b = 0;
        if (h) {
            if (n.value = m,
            t.value = h,
            i && i === w) {
                i = null;
                return
            }
            b = C ? h.position - C.position : 0
        } else
            o(m);
        r.forEach(v=>{
            v(n.value, w, {
                delta: b,
                type: Xr.pop,
                direction: b ? b > 0 ? Lr.forward : Lr.back : Lr.unknown
            })
        }
        )
    }
    ;
    function s() {
        i = n.value
    }
    function c(h) {
        r.push(h);
        const m = ()=>{
            const w = r.indexOf(h);
            w > -1 && r.splice(w, 1)
        }
        ;
        return a.push(m),
        m
    }
    function u() {
        const {history: h} = window;
        h.state && h.replaceState(Ne({}, h.state, {
            scroll: xi()
        }), "")
    }
    function f() {
        for (const h of a)
            h();
        a = [],
        window.removeEventListener("popstate", l),
        window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u, {
        passive: !0
    }),
    {
        pauseListeners: s,
        listen: c,
        destroy: f
    }
}
function Nu(e, t, n, o=!1, r=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: o,
        position: window.history.length,
        scroll: r ? xi() : null
    }
}
function sE(e) {
    const {history: t, location: n} = window
      , o = {
        value: lg(e, n)
    }
      , r = {
        value: t.state
    };
    r.value || a(o.value, {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function a(s, c, u) {
        const f = e.indexOf("#")
          , h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + s : iE() + e + s;
        try {
            t[u ? "replaceState" : "pushState"](c, "", h),
            r.value = c
        } catch (m) {
            console.error(m),
            n[u ? "replace" : "assign"](h)
        }
    }
    function i(s, c) {
        const u = Ne({}, t.state, Nu(r.value.back, s, r.value.forward, !0), c, {
            position: r.value.position
        });
        a(s, u, !0),
        o.value = s
    }
    function l(s, c) {
        const u = Ne({}, r.value, t.state, {
            forward: s,
            scroll: xi()
        });
        a(u.current, u, !0);
        const f = Ne({}, Nu(o.value, s, null), {
            position: u.position + 1
        }, c);
        a(s, f, !1),
        o.value = s
    }
    return {
        location: o,
        state: r,
        push: l,
        replace: i
    }
}
function cE(e) {
    e = JP(e);
    const t = sE(e)
      , n = lE(e, t.state, t.location, t.replace);
    function o(a, i=!0) {
        i || n.pauseListeners(),
        history.go(a)
    }
    const r = Ne({
        location: "",
        base: e,
        go: o,
        createHref: tE.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: ()=>t.location.value
    }),
    Object.defineProperty(r, "state", {
        enumerable: !0,
        get: ()=>t.state.value
    }),
    r
}
function uE(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function sg(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Yn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}
  , cg = Symbol("");
var Hu;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(Hu || (Hu = {}));
function rr(e, t) {
    return Ne(new Error, {
        type: e,
        [cg]: !0
    }, t)
}
function Cn(e, t) {
    return e instanceof Error && cg in e && (t == null || !!(e.type & t))
}
const zu = "[^/]+?"
  , dE = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , fE = /[.+*?^${}()[\]/\\]/g;
function hE(e, t) {
    const n = Ne({}, dE, t)
      , o = [];
    let r = n.start ? "^" : "";
    const a = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (r += "/");
        for (let f = 0; f < c.length; f++) {
            const h = c[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0)
                f || (r += "/"),
                r += h.value.replace(fE, "\\$&"),
                m += 40;
            else if (h.type === 1) {
                const {value: w, repeatable: C, optional: b, regexp: v} = h;
                a.push({
                    name: w,
                    repeatable: C,
                    optional: b
                });
                const g = v || zu;
                if (g !== zu) {
                    m += 10;
                    try {
                        new RegExp(`(${g})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${w}" (${g}): ` + y.message)
                    }
                }
                let p = C ? `((?:${g})(?:/(?:${g}))*)` : `(${g})`;
                f || (p = b && c.length < 2 ? `(?:/${p})` : "/" + p),
                b && (p += "?"),
                r += p,
                m += 20,
                b && (m += -8),
                C && (m += -20),
                g === ".*" && (m += -50)
            }
            u.push(m)
        }
        o.push(u)
    }
    if (n.strict && n.end) {
        const c = o.length - 1;
        o[c][o[c].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"),
    n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const i = new RegExp(r,n.sensitive ? "" : "i");
    function l(c) {
        const u = c.match(i)
          , f = {};
        if (!u)
            return null;
        for (let h = 1; h < u.length; h++) {
            const m = u[h] || ""
              , w = a[h - 1];
            f[w.name] = m && w.repeatable ? m.split("/") : m
        }
        return f
    }
    function s(c) {
        let u = ""
          , f = !1;
        for (const h of e) {
            (!f || !u.endsWith("/")) && (u += "/"),
            f = !1;
            for (const m of h)
                if (m.type === 0)
                    u += m.value;
                else if (m.type === 1) {
                    const {value: w, repeatable: C, optional: b} = m
                      , v = w in c ? c[w] : "";
                    if (Jt(v) && !C)
                        throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);
                    const g = Jt(v) ? v.join("/") : v;
                    if (!g)
                        if (b)
                            h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                        else
                            throw new Error(`Missing required param "${w}"`);
                    u += g
                }
        }
        return u || "/"
    }
    return {
        re: i,
        score: o,
        keys: a,
        parse: l,
        stringify: s
    }
}
function gE(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const o = t[n] - e[n];
        if (o)
            return o;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function mE(e, t) {
    let n = 0;
    const o = e.score
      , r = t.score;
    for (; n < o.length && n < r.length; ) {
        const a = gE(o[n], r[n]);
        if (a)
            return a;
        n++
    }
    if (Math.abs(r.length - o.length) === 1) {
        if (ju(o))
            return 1;
        if (ju(r))
            return -1
    }
    return r.length - o.length
}
function ju(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const vE = {
    type: 0,
    value: ""
}
  , bE = /[a-zA-Z0-9_]/;
function yE(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[vE]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${c}": ${m}`)
    }
    let n = 0
      , o = n;
    const r = [];
    let a;
    function i() {
        a && r.push(a),
        a = []
    }
    let l = 0, s, c = "", u = "";
    function f() {
        c && (n === 0 ? a.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (s === "*" || s === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),
        a.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: s === "*" || s === "+",
            optional: s === "*" || s === "?"
        })) : t("Invalid state to consume buffer"),
        c = "")
    }
    function h() {
        c += s
    }
    for (; l < e.length; ) {
        if (s = e[l++],
        s === "\\" && n !== 2) {
            o = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            s === "/" ? (c && f(),
            i()) : s === ":" ? (f(),
            n = 1) : h();
            break;
        case 4:
            h(),
            n = o;
            break;
        case 1:
            s === "(" ? n = 2 : bE.test(s) ? h() : (f(),
            n = 0,
            s !== "*" && s !== "?" && s !== "+" && l--);
            break;
        case 2:
            s === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + s : n = 3 : u += s;
            break;
        case 3:
            f(),
            n = 0,
            s !== "*" && s !== "?" && s !== "+" && l--,
            u = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`),
    f(),
    i(),
    r
}
function pE(e, t, n) {
    const o = hE(yE(e.path), n)
      , r = Ne(o, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
    r
}
function wE(e, t) {
    const n = []
      , o = new Map;
    t = Yu({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function r(u) {
        return o.get(u)
    }
    function a(u, f, h) {
        const m = !h
          , w = SE(u);
        w.aliasOf = h && h.record;
        const C = Yu(t, u)
          , b = [w];
        if ("alias"in u) {
            const p = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of p)
                b.push(Ne({}, w, {
                    components: h ? h.record.components : w.components,
                    path: y,
                    aliasOf: h ? h.record : w
                }))
        }
        let v, g;
        for (const p of b) {
            const {path: y} = p;
            if (f && y[0] !== "/") {
                const S = f.record.path
                  , _ = S[S.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (y && _ + y)
            }
            if (v = pE(p, f, C),
            h ? h.alias.push(v) : (g = g || v,
            g !== v && g.alias.push(v),
            m && u.name && !Wu(v) && i(u.name)),
            w.children) {
                const S = w.children;
                for (let _ = 0; _ < S.length; _++)
                    a(S[_], v, h && h.children[_])
            }
            h = h || v,
            (v.record.components && Object.keys(v.record.components).length || v.record.name || v.record.redirect) && s(v)
        }
        return g ? ()=>{
            i(g)
        }
        : Rr
    }
    function i(u) {
        if (sg(u)) {
            const f = o.get(u);
            f && (o.delete(u),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(i),
            f.alias.forEach(i))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1),
            u.record.name && o.delete(u.record.name),
            u.children.forEach(i),
            u.alias.forEach(i))
        }
    }
    function l() {
        return n
    }
    function s(u) {
        let f = 0;
        for (; f < n.length && mE(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !ug(u, n[f])); )
            f++;
        n.splice(f, 0, u),
        u.record.name && !Wu(u) && o.set(u.record.name, u)
    }
    function c(u, f) {
        let h, m = {}, w, C;
        if ("name"in u && u.name) {
            if (h = o.get(u.name),
            !h)
                throw rr(1, {
                    location: u
                });
            C = h.record.name,
            m = Ne(Uu(f.params, h.keys.filter(g=>!g.optional).concat(h.parent ? h.parent.keys.filter(g=>g.optional) : []).map(g=>g.name)), u.params && Uu(u.params, h.keys.map(g=>g.name))),
            w = h.stringify(m)
        } else if (u.path != null)
            w = u.path,
            h = n.find(g=>g.re.test(w)),
            h && (m = h.parse(w),
            C = h.record.name);
        else {
            if (h = f.name ? o.get(f.name) : n.find(g=>g.re.test(f.path)),
            !h)
                throw rr(1, {
                    location: u,
                    currentLocation: f
                });
            C = h.record.name,
            m = Ne({}, f.params, u.params),
            w = h.stringify(m)
        }
        const b = [];
        let v = h;
        for (; v; )
            b.unshift(v.record),
            v = v.parent;
        return {
            name: C,
            path: w,
            params: m,
            matched: b,
            meta: xE(b)
        }
    }
    return e.forEach(u=>a(u)),
    {
        addRoute: a,
        resolve: c,
        removeRoute: i,
        getRoutes: l,
        getRecordMatcher: r
    }
}
function Uu(e, t) {
    const n = {};
    for (const o of t)
        o in e && (n[o] = e[o]);
    return n
}
function SE(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: CE(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}
function CE(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const o in e.components)
            t[o] = typeof n == "object" ? n[o] : n;
    return t
}
function Wu(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function xE(e) {
    return e.reduce((t,n)=>Ne(t, n.meta), {})
}
function Yu(e, t) {
    const n = {};
    for (const o in e)
        n[o] = o in t ? t[o] : e[o];
    return n
}
function ug(e, t) {
    return t.children.some(n=>n === e || ug(e, n))
}
function _E(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const o = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < o.length; ++r) {
        const a = o[r].replace(ng, " ")
          , i = a.indexOf("=")
          , l = Gr(i < 0 ? a : a.slice(0, i))
          , s = i < 0 ? null : Gr(a.slice(i + 1));
        if (l in t) {
            let c = t[l];
            Jt(c) || (c = t[l] = [c]),
            c.push(s)
        } else
            t[l] = s
    }
    return t
}
function qu(e) {
    let t = "";
    for (let n in e) {
        const o = e[n];
        if (n = UP(n),
        o == null) {
            o !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Jt(o) ? o.map(a=>a && Ml(a)) : [o && Ml(o)]).forEach(a=>{
            a !== void 0 && (t += (t.length ? "&" : "") + n,
            a != null && (t += "=" + a))
        }
        )
    }
    return t
}
function kE(e) {
    const t = {};
    for (const n in e) {
        const o = e[n];
        o !== void 0 && (t[n] = Jt(o) ? o.map(r=>r == null ? null : "" + r) : o == null ? o : "" + o)
    }
    return t
}
const TE = Symbol("")
  , Ku = Symbol("")
  , Rs = Symbol("")
  , dg = Symbol("")
  , Vl = Symbol("");
function _r() {
    let e = [];
    function t(o) {
        return e.push(o),
        ()=>{
            const r = e.indexOf(o);
            r > -1 && e.splice(r, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: ()=>e.slice(),
        reset: n
    }
}
function Zn(e, t, n, o, r, a=i=>i()) {
    const i = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
    return ()=>new Promise((l,s)=>{
        const c = h=>{
            h === !1 ? s(rr(4, {
                from: n,
                to: t
            })) : h instanceof Error ? s(h) : uE(h) ? s(rr(2, {
                from: t,
                to: h
            })) : (i && o.enterCallbacks[r] === i && typeof h == "function" && i.push(h),
            l())
        }
          , u = a(()=>e.call(o && o.instances[r], t, n, c));
        let f = Promise.resolve(u);
        e.length < 3 && (f = f.then(c)),
        f.catch(h=>s(h))
    }
    )
}
function ol(e, t, n, o, r=a=>a()) {
    const a = [];
    for (const i of e)
        for (const l in i.components) {
            let s = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (PE(s)) {
                    const u = (s.__vccOpts || s)[t];
                    u && a.push(Zn(u, n, o, i, l, r))
                } else {
                    let c = s();
                    a.push(()=>c.then(u=>{
                        if (!u)
                            return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));
                        const f = DP(u) ? u.default : u;
                        i.components[l] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && Zn(m, n, o, i, l, r)()
                    }
                    ))
                }
        }
    return a
}
function PE(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function Gu(e) {
    const t = kt(Rs)
      , n = kt(dg)
      , o = D(()=>{
        const s = Xt(e.to);
        return t.resolve(s)
    }
    )
      , r = D(()=>{
        const {matched: s} = o.value
          , {length: c} = s
          , u = s[c - 1]
          , f = n.matched;
        if (!u || !f.length)
            return -1;
        const h = f.findIndex(or.bind(null, u));
        if (h > -1)
            return h;
        const m = Xu(s[c - 2]);
        return c > 1 && Xu(u) === m && f[f.length - 1].path !== m ? f.findIndex(or.bind(null, s[c - 2])) : h
    }
    )
      , a = D(()=>r.value > -1 && BE(n.params, o.value.params))
      , i = D(()=>r.value > -1 && r.value === n.matched.length - 1 && ig(n.params, o.value.params));
    function l(s={}) {
        return OE(s) ? t[Xt(e.replace) ? "replace" : "push"](Xt(e.to)).catch(Rr) : Promise.resolve()
    }
    return {
        route: o,
        href: D(()=>o.value.href),
        isActive: a,
        isExactActive: i,
        navigate: l
    }
}
const EE = j({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Gu,
    setup(e, {slots: t}) {
        const n = Ke(Gu(e))
          , {options: o} = kt(Rs)
          , r = D(()=>({
            [Qu(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
            [Qu(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return ()=>{
            const a = t.default && t.default(n);
            return e.custom ? a : is("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, a)
        }
    }
})
  , AE = EE;
function OE(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function BE(e, t) {
    for (const n in t) {
        const o = t[n]
          , r = e[n];
        if (typeof o == "string") {
            if (o !== r)
                return !1
        } else if (!Jt(r) || r.length !== o.length || o.some((a,i)=>a !== r[i]))
            return !1
    }
    return !0
}
function Xu(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Qu = (e,t,n)=>e ?? t ?? n
  , $E = j({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const o = kt(Vl)
          , r = D(()=>e.route || o.value)
          , a = kt(Ku, 0)
          , i = D(()=>{
            let c = Xt(a);
            const {matched: u} = r.value;
            let f;
            for (; (f = u[c]) && !f.components; )
                c++;
            return c
        }
        )
          , l = D(()=>r.value.matched[i.value]);
        kn(Ku, D(()=>i.value + 1)),
        kn(TE, l),
        kn(Vl, r);
        const s = R();
        return oe(()=>[s.value, l.value, e.name], ([c,u,f],[h,m,w])=>{
            u && (u.instances[f] = c,
            m && m !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
            u.updateGuards.size || (u.updateGuards = m.updateGuards))),
            c && u && (!m || !or(u, m) || !h) && (u.enterCallbacks[f] || []).forEach(C=>C(c))
        }
        , {
            flush: "post"
        }),
        ()=>{
            const c = r.value
              , u = e.name
              , f = l.value
              , h = f && f.components[u];
            if (!h)
                return Zu(n.default, {
                    Component: h,
                    route: c
                });
            const m = f.props[u]
              , w = m ? m === !0 ? c.params : typeof m == "function" ? m(c) : m : null
              , b = is(h, Ne({}, w, t, {
                onVnodeUnmounted: v=>{
                    v.component.isUnmounted && (f.instances[u] = null)
                }
                ,
                ref: s
            }));
            return Zu(n.default, {
                Component: b,
                route: c
            }) || b
        }
    }
});
function Zu(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const DE = $E;
function IE(e) {
    const t = wE(e.routes, e)
      , n = e.parseQuery || _E
      , o = e.stringifyQuery || qu
      , r = e.history
      , a = _r()
      , i = _r()
      , l = _r()
      , s = Qg(Yn);
    let c = Yn;
    Wo && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const u = tl.bind(null, P=>"" + P)
      , f = tl.bind(null, YP)
      , h = tl.bind(null, Gr);
    function m(P, F) {
        let V, J;
        return sg(P) ? (V = t.getRecordMatcher(P),
        J = F) : J = P,
        t.addRoute(J, V)
    }
    function w(P) {
        const F = t.getRecordMatcher(P);
        F && t.removeRoute(F)
    }
    function C() {
        return t.getRoutes().map(P=>P.record)
    }
    function b(P) {
        return !!t.getRecordMatcher(P)
    }
    function v(P, F) {
        if (F = Ne({}, F || s.value),
        typeof P == "string") {
            const A = nl(n, P, F.path)
              , L = t.resolve({
                path: A.path
            }, F)
              , Y = r.createHref(A.fullPath);
            return Ne(A, L, {
                params: h(L.params),
                hash: Gr(A.hash),
                redirectedFrom: void 0,
                href: Y
            })
        }
        let V;
        if (P.path != null)
            V = Ne({}, P, {
                path: nl(n, P.path, F.path).path
            });
        else {
            const A = Ne({}, P.params);
            for (const L in A)
                A[L] == null && delete A[L];
            V = Ne({}, P, {
                params: f(A)
            }),
            F.params = f(F.params)
        }
        const J = t.resolve(V, F)
          , me = P.hash || "";
        J.params = u(h(J.params));
        const xe = GP(o, Ne({}, P, {
            hash: jP(me),
            path: J.path
        }))
          , T = r.createHref(xe);
        return Ne({
            fullPath: xe,
            hash: me,
            query: o === qu ? kE(P.query) : P.query || {}
        }, J, {
            redirectedFrom: void 0,
            href: T
        })
    }
    function g(P) {
        return typeof P == "string" ? nl(n, P, s.value.path) : Ne({}, P)
    }
    function p(P, F) {
        if (c !== P)
            return rr(8, {
                from: F,
                to: P
            })
    }
    function y(P) {
        return O(P)
    }
    function S(P) {
        return y(Ne(g(P), {
            replace: !0
        }))
    }
    function _(P) {
        const F = P.matched[P.matched.length - 1];
        if (F && F.redirect) {
            const {redirect: V} = F;
            let J = typeof V == "function" ? V(P) : V;
            return typeof J == "string" && (J = J.includes("?") || J.includes("#") ? J = g(J) : {
                path: J
            },
            J.params = {}),
            Ne({
                query: P.query,
                hash: P.hash,
                params: J.path != null ? {} : P.params
            }, J)
        }
    }
    function O(P, F) {
        const V = c = v(P)
          , J = s.value
          , me = P.state
          , xe = P.force
          , T = P.replace === !0
          , A = _(V);
        if (A)
            return O(Ne(g(A), {
                state: typeof A == "object" ? Ne({}, me, A.state) : me,
                force: xe,
                replace: T
            }), F || V);
        const L = V;
        L.redirectedFrom = F;
        let Y;
        return !xe && XP(o, J, V) && (Y = rr(16, {
            to: L,
            from: J
        }),
        M(J, J, !0, !1)),
        (Y ? Promise.resolve(Y) : $(L, J)).catch(U=>Cn(U) ? Cn(U, 2) ? U : $e(U) : ie(U, L, J)).then(U=>{
            if (U) {
                if (Cn(U, 2))
                    return O(Ne({
                        replace: T
                    }, g(U.to), {
                        state: typeof U.to == "object" ? Ne({}, me, U.to.state) : me,
                        force: xe
                    }), F || L)
            } else
                U = E(L, J, !0, T, me);
            return k(L, J, U),
            U
        }
        )
    }
    function x(P, F) {
        const V = p(P, F);
        return V ? Promise.reject(V) : Promise.resolve()
    }
    function B(P) {
        const F = ge.values().next().value;
        return F && typeof F.runWithContext == "function" ? F.runWithContext(P) : P()
    }
    function $(P, F) {
        let V;
        const [J,me,xe] = RE(P, F);
        V = ol(J.reverse(), "beforeRouteLeave", P, F);
        for (const A of J)
            A.leaveGuards.forEach(L=>{
                V.push(Zn(L, P, F))
            }
            );
        const T = x.bind(null, P, F);
        return V.push(T),
        ue(V).then(()=>{
            V = [];
            for (const A of a.list())
                V.push(Zn(A, P, F));
            return V.push(T),
            ue(V)
        }
        ).then(()=>{
            V = ol(me, "beforeRouteUpdate", P, F);
            for (const A of me)
                A.updateGuards.forEach(L=>{
                    V.push(Zn(L, P, F))
                }
                );
            return V.push(T),
            ue(V)
        }
        ).then(()=>{
            V = [];
            for (const A of xe)
                if (A.beforeEnter)
                    if (Jt(A.beforeEnter))
                        for (const L of A.beforeEnter)
                            V.push(Zn(L, P, F));
                    else
                        V.push(Zn(A.beforeEnter, P, F));
            return V.push(T),
            ue(V)
        }
        ).then(()=>(P.matched.forEach(A=>A.enterCallbacks = {}),
        V = ol(xe, "beforeRouteEnter", P, F, B),
        V.push(T),
        ue(V))).then(()=>{
            V = [];
            for (const A of i.list())
                V.push(Zn(A, P, F));
            return V.push(T),
            ue(V)
        }
        ).catch(A=>Cn(A, 8) ? A : Promise.reject(A))
    }
    function k(P, F, V) {
        l.list().forEach(J=>B(()=>J(P, F, V)))
    }
    function E(P, F, V, J, me) {
        const xe = p(P, F);
        if (xe)
            return xe;
        const T = F === Yn
          , A = Wo ? history.state : {};
        V && (J || T ? r.replace(P.fullPath, Ne({
            scroll: T && A && A.scroll
        }, me)) : r.push(P.fullPath, me)),
        s.value = P,
        M(P, F, V, T),
        $e()
    }
    let I;
    function Q() {
        I || (I = r.listen((P,F,V)=>{
            if (!te.listening)
                return;
            const J = v(P)
              , me = _(J);
            if (me) {
                O(Ne(me, {
                    replace: !0
                }), J).catch(Rr);
                return
            }
            c = J;
            const xe = s.value;
            Wo && rE(Vu(xe.fullPath, V.delta), xi()),
            $(J, xe).catch(T=>Cn(T, 12) ? T : Cn(T, 2) ? (O(T.to, J).then(A=>{
                Cn(A, 20) && !V.delta && V.type === Xr.pop && r.go(-1, !1)
            }
            ).catch(Rr),
            Promise.reject()) : (V.delta && r.go(-V.delta, !1),
            ie(T, J, xe))).then(T=>{
                T = T || E(J, xe, !1),
                T && (V.delta && !Cn(T, 8) ? r.go(-V.delta, !1) : V.type === Xr.pop && Cn(T, 20) && r.go(-1, !1)),
                k(J, xe, T)
            }
            ).catch(Rr)
        }
        ))
    }
    let ne = _r(), N = _r(), Z;
    function ie(P, F, V) {
        $e(P);
        const J = N.list();
        return J.length ? J.forEach(me=>me(P, F, V)) : console.error(P),
        Promise.reject(P)
    }
    function Ee() {
        return Z && s.value !== Yn ? Promise.resolve() : new Promise((P,F)=>{
            ne.add([P, F])
        }
        )
    }
    function $e(P) {
        return Z || (Z = !P,
        Q(),
        ne.list().forEach(([F,V])=>P ? V(P) : F()),
        ne.reset()),
        P
    }
    function M(P, F, V, J) {
        const {scrollBehavior: me} = e;
        if (!Wo || !me)
            return Promise.resolve();
        const xe = !V && aE(Vu(P.fullPath, 0)) || (J || !V) && history.state && history.state.scroll || null;
        return Te().then(()=>me(P, F, xe)).then(T=>T && oE(T)).catch(T=>ie(T, P, F))
    }
    const K = P=>r.go(P);
    let fe;
    const ge = new Set
      , te = {
        currentRoute: s,
        listening: !0,
        addRoute: m,
        removeRoute: w,
        hasRoute: b,
        getRoutes: C,
        resolve: v,
        options: e,
        push: y,
        replace: S,
        go: K,
        back: ()=>K(-1),
        forward: ()=>K(1),
        beforeEach: a.add,
        beforeResolve: i.add,
        afterEach: l.add,
        onError: N.add,
        isReady: Ee,
        install(P) {
            const F = this;
            P.component("RouterLink", AE),
            P.component("RouterView", DE),
            P.config.globalProperties.$router = F,
            Object.defineProperty(P.config.globalProperties, "$route", {
                enumerable: !0,
                get: ()=>Xt(s)
            }),
            Wo && !fe && s.value === Yn && (fe = !0,
            y(r.location).catch(me=>{}
            ));
            const V = {};
            for (const me in Yn)
                Object.defineProperty(V, me, {
                    get: ()=>s.value[me],
                    enumerable: !0
                });
            P.provide(Rs, F),
            P.provide(dg, xd(V)),
            P.provide(Vl, s);
            const J = P.unmount;
            ge.add(P),
            P.unmount = function() {
                ge.delete(P),
                ge.size < 1 && (c = Yn,
                I && I(),
                I = null,
                s.value = Yn,
                fe = !1,
                Z = !1),
                J()
            }
        }
    };
    function ue(P) {
        return P.reduce((F,V)=>F.then(()=>B(V)), Promise.resolve())
    }
    return te
}
function RE(e, t) {
    const n = []
      , o = []
      , r = []
      , a = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < a; i++) {
        const l = t.matched[i];
        l && (e.matched.find(c=>or(c, l)) ? o.push(l) : n.push(l));
        const s = e.matched[i];
        s && (t.matched.find(c=>or(c, s)) || r.push(s))
    }
    return [n, o, r]
}
const Qr = IE({
    history: cE("/"),
    routes: [{
        path: "/",
        name: "main",
        component: ()=>Ze(()=>import("./Main-CaEiHOJR.js"), __vite__mapDeps([0, 1]))
    }, {
        path: "/improve",
        component: ()=>Ze(()=>import("./Improve-BMs0B2XZ.js"), __vite__mapDeps([2, 3, 4]))
    }, {
        path: "/improve/:routeCategory",
        component: ()=>Ze(()=>import("./Improve-BMs0B2XZ.js"), __vite__mapDeps([2, 3, 4]))
    }, {
        path: "/improve/:routeCategory/:routeKey",
        component: ()=>Ze(()=>import("./Improve-BMs0B2XZ.js"), __vite__mapDeps([2, 3, 4]))
    }, {
        path: "/friends",
        name: "Friends",
        component: ()=>Ze(()=>import("./Friends-Cg4IUMIv.js"), __vite__mapDeps([5, 6]))
    }, {
        path: "/communities",
        name: "communities",
        component: ()=>Ze(()=>import("./Communities-Bvr_VwWy.js"), __vite__mapDeps([7, 8]))
    }, {
        path: "/rich/list",
        name: "rich_list",
        component: ()=>Ze(()=>import("./RichList-C9XHS66Y.js"), __vite__mapDeps([9, 10, 11]))
    }, {
        path: "/negotiations",
        name: "negotiations",
        component: ()=>Ze(()=>import("./Negotiations-CF0l_h1s.js"), __vite__mapDeps([12, 13]))
    }, {
        path: "/negotiations/leaderboards",
        name: "negotiations_leaderboards",
        component: ()=>Ze(()=>import("./NegotiationsLeaderboards-D7TAQhOn.js"), __vite__mapDeps([14, 15]))
    }, {
        path: "/quests",
        name: "quests",
        component: ()=>Ze(()=>import("./Quests-YUyVBrmo.js"), __vite__mapDeps([16, 17, 18]))
    }, {
        path: "/quests/:routeCategory",
        component: ()=>Ze(()=>import("./Quests-YUyVBrmo.js"), __vite__mapDeps([16, 17, 18]))
    }, {
        path: "/quests/:routeCategory/:routeKey",
        component: ()=>Ze(()=>import("./Quests-YUyVBrmo.js"), __vite__mapDeps([16, 17, 18]))
    }, {
        path: "/rating",
        name: "rating",
        component: ()=>Ze(()=>import("./Rating-MT5yvYVA.js"), __vite__mapDeps([19, 20]))
    }, {
        path: "/hero",
        name: "hero",
        component: ()=>Ze(()=>import("./Hero-BvjCj479.js"), __vite__mapDeps([21, 10, 22]))
    }, {
        path: "/tg",
        name: "tg",
        component: ()=>Ze(()=>import("./Tg-BoRb6PLV.js"), [])
    }, {
        path: "/balance",
        name: "balance",
        component: ()=>Ze(()=>import("./Balance-BpGXKmSh.js"), [])
    }, {
        path: "/lottery",
        name: "lottery",
        component: ()=>Ze(()=>import("./Lottery-_2b2Uol8.js"), __vite__mapDeps([23, 24]))
    }, {
        path: "/fund",
        name: "fund",
        component: ()=>Ze(()=>import("./Fund-CC1ewyY6.js"), __vite__mapDeps([25, 26]))
    }, {
        path: "/city",
        name: "city",
        component: ()=>Ze(()=>import("./City-CZh8MjsG.js"), __vite__mapDeps([27, 28]))
    }, {
        path: "/translations",
        name: "translations",
        component: ()=>Ze(()=>import("./Translations-eZFS1B_d.js"), [])
    }, {
        path: "/store",
        name: "store",
        component: ()=>Ze(()=>import("./Store-D_AEVTvK.js"), __vite__mapDeps([29, 3, 17, 30]))
    }, {
        path: "/store/:routeCategory",
        component: ()=>Ze(()=>import("./Store-D_AEVTvK.js"), __vite__mapDeps([29, 3, 17, 30]))
    }]
})
  , LE = {
    methods: {
        async dbLoadDbData(e=["all"]) {
            try {
                let t, n;
                [t,n] = await Promise.all([this.apiCall("loadDb", {
                    dbs: e,
                    lang: this.stores.user.settings.lang
                }), this.apiCall("assets")]),
                Object.keys(t).forEach(o=>{
                    if (o === "dbSkills") {
                        const r = t[o].map(a=>(a.title = a.title.replaceAll("{", "").replaceAll("}", ""),
                        a.desc = a.desc.replaceAll("{", "").replaceAll("}", ""),
                        a));
                        this.stores.db.setSkills(r)
                    }
                    if (o === "dbLevels" && this.stores.db.setLevels(t[o]),
                    o === "dbEarnJob" && this.stores.db.setEarnJob(t[o]),
                    o === "dbSkillCategory" && this.stores.db.setSkillCategory(t[o]),
                    o === "dbSkillSubcategory" && this.stores.db.setSkillSubcategory(t[o]),
                    o === "dbNegotiationsLeague" && this.stores.db.setNegotiationsLeague(t[o]),
                    o === "dbNegotiationsStrategy" && this.stores.db.setNegotiationsStrategy(t[o]),
                    o === "dbDailyRewards" && this.stores.db.setDailyRewards(t[o]),
                    o === "dbTranslation" && this.stores.db.setTranslation(t[o]),
                    o === "dbQuests") {
                        const r = t[o].map(a=>{
                            var i, l;
                            return a.checkType === "improve" && a.checkData in this.dbSkillsByKey && (a.title = a.title.replace("{skillName}", (i = this.dbSkillsByKey[a.checkData]) == null ? void 0 : i.title),
                            a.desc = a.desc.replace("{skillName}", (l = this.dbSkillsByKey[a.checkData]) == null ? void 0 : l.title)),
                            a.title = a.title.replaceAll("{", "").replaceAll("}", ""),
                            a.desc = a.desc.replaceAll("{", "").replaceAll("}", ""),
                            a
                        }
                        );
                        this.stores.db.setQuests(r)
                    }
                    if (o === "dbLang" && this.stores.db.setLangs(t[o]),
                    o === "dbFunds") {
                        const r = t[o].map(a=>(a.title = a.title.replaceAll("{", "").replaceAll("}", ""),
                        a.desc = a.desc.replaceAll("{", "").replaceAll("}", ""),
                        a));
                        this.stores.db.setFunds(r)
                    }
                    o === "dbFundsRisk" && this.stores.db.setFundsRisk(t[o]),
                    o === "dbContentPrice" && this.stores.db.setContentPrice(t[o]),
                    o === "dbOnboarding" && this.stores.db.setOnboarding(t[o]),
                    o === "gameConfig" && (window.gameConfig = t[o])
                }
                ),
                Object.keys(n).forEach(o=>{
                    if (o === "dbPurchase") {
                        const r = n[o].map(a=>(a.title = a.title.replaceAll("{", "").replaceAll("}", ""),
                        a.desc = a.desc.replaceAll("{", "").replaceAll("}", ""),
                        a));
                        this.stores.db.setPurchases(r)
                    }
                }
                )
            } catch {
                hr({
                    type: "danger",
                    message: this.t("Problem with load data. Please Reload Page")
                })
            }
        }
    },
    computed: {
        dbLevelsByLevel() {
            return this._arrayByKey(this.dbLevels, "level")
        },
        dbLangByKey() {
            return this._arrayByKey(this.dbLang, "key")
        },
        dbSkillsByKey() {
            return this._arrayByKey(this.dbSkills, "key")
        },
        dbEarnJobByKey() {
            return this._arrayByKey(this.dbEarnJob, "key")
        },
        dbSkillNeedToUpdateQuest() {
            return this.dbQuests.filter(e=>e.checkType === "improve").map(e=>e.checkData)
        },
        dbSkillSubcategoryByKey() {
            return this._arrayByKey(this.dbSkillSubcategory, "key")
        },
        dbNegotiationsLeagueByKey() {
            return this._arrayByKey(this.dbNegotiationsLeague, "key")
        },
        dbNegotiationsStrategyByKey() {
            return this._arrayByKey(this.dbNegotiationsStrategy, "key")
        },
        dbSkills() {
            return this.stores.db.skills || []
        },
        dbLevels() {
            return this.stores.db.levels || []
        },
        dbEarnJob() {
            return this.stores.db.earnJob || []
        },
        dbSkillCategory() {
            return this.stores.db.skillCategory || []
        },
        dbSkillSubcategory() {
            return this.stores.db.skillSubcategory || []
        },
        dbNegotiationsLeague() {
            return this.stores.db.negotiationsLeague || []
        },
        dbNegotiationsStrategy() {
            return this.stores.db.negotiationsStrategy || []
        },
        dbDailyRewards() {
            return this.stores.db.dailyRewards || []
        },
        dbTranslation() {
            return this.stores.db.translation || []
        },
        dbQuests() {
            return this.stores.db.quests || []
        },
        dbLang() {
            return this.stores.db.langs || []
        },
        dbFunds() {
            return this.stores.db.funds || []
        },
        dbFundsRisk() {
            return this.stores.db.fundsRisk || []
        },
        dbContentPrice() {
            return this.stores.db.contentPrice || []
        },
        dbOnboarding() {
            return this.stores.db.onboarding || []
        },
        dbPurchase() {
            return this.stores.db.purchases || []
        },
        gameConfig() {
            return window.gameConfig || {}
        }
    },
    data() {
        return {}
    }
}
  , ME = {
    methods: {
        async auth() {
            const e = Bt();
            try {
                const t = eg("user_auth_hash");
                t && e.setAuthHash(t);
                const n = window.Telegram.WebApp.initData
                  , o = window.Telegram.WebApp.initDataUnsafe.hash
                  , r = window.Telegram.WebApp.initDataUnsafe.start_param
                  , a = window.Telegram.WebApp.initDataUnsafe.chat ? window.Telegram.WebApp.initDataUnsafe.chat.id : ""
                  , i = window.Telegram.WebApp.initDataUnsafe.chat_type
                  , l = window.Telegram.WebApp.initDataUnsafe.chat_instance
                  , s = window.Telegram.WebApp.initDataUnsafe.user ? window.Telegram.WebApp.initDataUnsafe.user.photo_url : ""
                  , c = "android";
                await cn("auth", {
                    initData: n,
                    startParam: r,
                    photoUrl: s,
                    platform: "android",
                    chatId: a,
                    chatType: i,
                    chatInstance: l
                }),
                t || e.setAuthHash(o)
            } catch (t) {
                if (t === "platform")
                    throw t;
                console.log("Error auth: %o", t),
                hr({
                    type: "danger",
                    message: this.t("Auth error") + ": " + t
                })
            }
        },
        async loadHero() {
            const e = Bt()
              , t = await cn("getHero", "");
            t && e.setHero(t)
        },
        async loadProfile() {
            const e = Bt()
              , t = await cn("getProfile", "");
            t && e.setProfile(t)
        },
        async loadFriends() {
            const e = Bt()
              , t = await cn("getFriends", "");
            t && e.setFriends(t)
        },
        async loadQuests() {
            const e = Bt()
              , t = await cn("getQuests", "");
            t && e.setQuests(t)
        },
        async loadDailyRewards() {
            const e = Bt()
              , t = await cn("getDailyRewards", "");
            t && e.setDailyRewards(t)
        },
        async loadSkills() {
            const e = Bt()
              , t = await cn("getSkills", "");
            t && e.setSkills(t)
        },
        async loadSettings() {
            const e = Bt()
              , t = await cn("getSettings", "");
            t && e.setSettings(t)
        },
        async loadPageData() {
            const e = Bt()
              , t = await this.apiCall("allUserData", {
                lang: e.settings.lang
            });
            e.setProfile(t.profile),
            e.setPurchase(t.purchase),
            e.setHero(t.hero),
            e.setSkills(t.skills),
            e.setQuests(t.quests),
            e.setQuestsContent(t.questsContent),
            e.setFriends(t.friends),
            e.setSettings(t.settings),
            e.setDailyRewards(t.dailyRewards)
        }
    },
    watch: {
        isRtl(e) {
            e ? window.document.body.classList.add("rtl") : window.document.body.classList.remove("rtl")
        }
    },
    computed: {
        uSkills() {
            return this.stores.user.skills || {}
        },
        uQuests() {
            return this.stores.user.quests || []
        },
        uQuestsContent() {
            return this.stores.user.questsContent || []
        },
        uFriends() {
            return this.stores.user.friends || []
        },
        uHero() {
            return this.stores.user.hero || {}
        },
        uProfile() {
            return this.stores.user.profile || {}
        },
        uPurchase() {
            return this.stores.user.purchase || {}
        },
        uDailyRewards() {
            return this.stores.user.dailyRewards || {}
        },
        uSettings() {
            return this.stores.user.settings || {}
        },
        uLevelPercent() {
            return this._getLevelPercent(this.uHero.level, this.uHero.exp)
        },
        uRefLink() {
            return `https://t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}`
        },
        isRtl() {
            return "lang"in this.uSettings && this.uSettings.lang in this.dbLangByKey ? this.dbLangByKey[this.uSettings.lang].isRtl : !1
        }
    }
}
  , FE = {
    data: function() {
        return {
            onBoard: {
                start: ["1"],
                pph: ["20", "21"],
                money: ["30", "31"],
                perTap: ["40", "41"],
                energy: ["50", "51"],
                pvp: ["60"],
                pvpLeague: ["70"],
                pvpStrategy: ["80"],
                fund: ["90"],
                questsContent: ["100"]
            }
        }
    },
    methods: {
        async _delay(e) {
            await new Promise(t=>setTimeout(t, e))
        },
        t(e, t) {
            const n = function(o, r) {
                let a = o;
                return r && typeof r == "object" && Object.keys(r).forEach(function(i) {
                    a = a.replace(`{${i}}`, r[i])
                }),
                a = a.replaceAll("{", "").replaceAll("}", ""),
                a
            };
            if (this.uSettings.lang !== "en") {
                const o = this.dbTranslation.find(r=>r.key === e);
                if (o)
                    return n(o.title || e, t)
            }
            return n(e, t)
        },
        async _sendTappedData() {
            if (Object.keys(this.stores.user.tappedData).length) {
                const e = new Date
                  , t = this.stores.user.lastSendTappedDate;
                this.stores.user.setLastSendTappedDate(e);
                const n = this._cloneObject(this.stores.user.tappedData);
                this.stores.user.clearTappedData();
                let o = await this.apiCall("sendTappedData", {
                    data: n,
                    seconds: Math.ceil((e - t) / 1e3)
                });
                o.hero.money += this.stores.user.getTappedAllMoney,
                o.hero.earns = this._cloneObject(this.stores.user.hero.earns),
                this.stores.user.setHero(o.hero)
            } else
                this.stores.user.lastSendTappedDate && this.stores.user.setLastSendTappedDate(null)
        },
        async _completeOnboarding(e) {
            let t = this.uHero;
            "onboarding"in t || (t.onboarding = []);
            const n = e.filter(r=>!t.onboarding.includes(r));
            if (n.length === 0)
                return;
            const o = n[0];
            t.onboarding.push(o);
            try {
                const r = await this.apiCall("onboardingComplete", parseInt(o));
                this.stores.user.setHero(r)
            } catch (r) {
                console.log("Error: %o", r)
            }
        },
        _isOnboardingComplete(...e) {
            return "onboarding"in this.uHero ? !e.some(t=>t.filter(o=>!this.uHero.onboarding.includes(o)).length > 0) : !1
        },
        async _resetOnboarding(e=[]) {
            const t = await this.apiCall("resetOnboarding", e);
            this.stores.user.setHero(t.hero)
        },
        _cloneObject(e) {
            return JSON.parse(JSON.stringify(e))
        },
        _number(e) {
            return new Intl.NumberFormat().format(Math.round(e))
        },
        _numberShort(e, t=!1) {
            const n = e >= 0 ? 1 : -1;
            if (e * n < 1e3)
                return Math.round(e);
            if (e * n >= 1e3 && e * n < 1e6) {
                const o = e / 1e3;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "K"
            }
            if (e * n >= 1e6 && e * n < 1e9) {
                const o = e / 1e6;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "M"
            }
            if (e * n >= 1e9 && e * n < 1e12) {
                const o = e / 1e9;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "B"
            }
            if (e * n >= 1e12) {
                const o = e / 1e12;
                return (t || o % 1 === 0 ? Math.round(o) : Math.floor(o * 10) / 10) + "T"
            }
        },
        _getRandomArrayElement(e) {
            const t = Math.floor(Math.random() * e.length);
            return e[t]
        },
        _isEmptyObject(e) {
            return Object.keys(e).length === 0
        },
        _rand(e, t=0) {
            return t ? Math.floor(Math.random() * (t - e + 1)) + e : Math.floor(Math.random() * e)
        },
        _vibrate(e="light") {
            this.uSettings.vibrate && (e in ["light", "medium", "heavy", "rigid", "soft"] ? window.Telegram.WebApp.HapticFeedback.impactOccurred(e) : e in ["error", "success", "warning"] ? window.Telegram.WebApp.HapticFeedback.notificationOccurred(e) : window.Telegram.WebApp.HapticFeedback.selectionChanged())
        },
        _isIphone() {
            return navigator.userAgent.includes("iPhone")
        },
        _shareBtnClick() {
            const e = encodeURIComponent(this.t(`🔥Play with me, grow your startup. 

💸 +5k coins as your first gift
💵 +25k coins if you have Telegram Premium`));
            window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=t.me/muskempire_bot/game?startapp=${this.uProfile.refCode}&text=${e}`)
        },
        _ourTgClick() {
            window.Telegram.WebApp.openTelegramLink("https://t.me/muskempire")
        },
        _openUrl(e) {
            e.includes("t.me/") ? window.Telegram.WebApp.openTelegramLink(e) : window.Telegram.WebApp.openLink(e)
        },
        _sound(e) {
            this.uSettings.sound && this.uProfile.isBetaTester && mk(e)
        },
        _copyToClipboard(e) {
            hr({
                type: "primary",
                message: this.t("Copied to clipboard"),
                duration: 1e3,
                position: "bottom"
            }),
            navigator.clipboard.writeText(e)
        },
        _animateMoneyFromBottom(e=1e4, t="money") {
            this._sound(t === "money" ? "take_money" : "take_pph");
            let n = Math.round(1.98 * Math.pow(e, .4) + 16.85);
            n > 400 ? n = 300 : n < 10 && (n = 10),
            console.log("_animateMoneyFromBottom:", e, n);
            const o = t === "money" ? "money16" : "pph16"
              , r = t === "money" ? "fromBottomToRight" : "fromBottomToLeft";
            let a = t === "money" ? document.getElementById("money") : document.getElementById("profit");
            a && a.classList.add("aniVibration");
            const i = 1e3
              , l = 800;
            for (let s = 0; s < n; s++) {
                const c = document.createElement("div");
                c.classList.add("moneyFromBottom", o),
                c.style.top = "100%",
                c.style.left = this._rand(10, 90) + "%";
                const u = this._rand(500, i)
                  , f = this._rand(0, l);
                c.style.animation = `${r} ${u}ms ease ${f}ms 1 normal none`,
                document.body.appendChild(c),
                this.$nextTick(()=>{
                    setTimeout(()=>{
                        c.remove()
                    }
                    , u + l)
                }
                ),
                s % 30 === 0 && this._vibrate("soft")
            }
            setTimeout(()=>{
                a && a.classList.remove("aniVibration")
            }
            , i + Math.round(l / 2))
        },
        _millisecondsUntilNextDayUTC() {
            const e = new Date
              , t = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
            return Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1) - t
        },
        _millisecondsUntilNextUTCHour(e) {
            const t = new Date
              , n = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
            let o;
            return t.getUTCHours() < e ? o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), e) : o = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + 1, e),
            o - n
        },
        _getLevelPercent(e, t) {
            const n = this.dbLevels;
            if (e >= n.length - 1)
                return 0;
            const o = e + 1;
            if (e && o) {
                const r = this.dbLevelsByLevel[o].exp - this.dbLevelsByLevel[e].exp
                  , a = t - this.dbLevelsByLevel[e].exp;
                return Math.round(a / r * 100)
            }
            return 0
        },
        _getAvailableSkillsForLevel(e) {
            let t = [];
            return this.dbSkills.forEach(n=>{
                n.levels && n.levels.length > 0 && n.levels.forEach(o=>{
                    o.requiredHeroLevel === e && t.push({
                        key: n.key,
                        title: n.title,
                        level: o.level
                    })
                }
                )
            }
            ),
            t
        },
        _getAvatarByLevel(e) {
            return "/assets/img/heroes/" + e + "_not.png?v=5"
        },
        _getSkillImg(e) {
            return "/assets/img/skills/" + e + ".jpg?v=2"
        },
        _getQuestImg(e) {
            return "/assets/img/quests/" + e + ".jpg?v=2"
        },
        _groupBy(e, t) {
            return e.reduce((n,o)=>((n[o[t]] = n[o[t]] || []).push(o),
            n), {})
        },
        _arrayByKey(e, t) {
            return e.reduce((n,o)=>(n[o[t]] = o,
            n), {})
        },
        _filterByKey(e, t, n) {
            return e.filter(o=>o[t] === n)
        },
        _getFirstFilteredByKey(e, t, n) {
            return e.filter(o=>o[t] === n)[0]
        },
        _getValueFirstFilteredByKey(e, t, n, o) {
            return e.filter(a=>`${a[t]}` == `${n}`)[0][o]
        }
    }
};
async function VE(e) {
    Ci().setTopBarDefault(),
    e.name
}
const Ln = ff(OP)
  , NE = Sk();
Qr.beforeEach(VE);
Qr.afterEach(function() {
    Qr.options.history.state.back !== null ? window.Telegram.WebApp.BackButton.show() : window.Telegram.WebApp.BackButton.hide()
});
window.Telegram.WebApp.onEvent("backButtonClicked", function() {
    Qr.back()
});
Ln.use(NE);
Ln.use(Qr);
Ln.use(sk);
ck(Ln);
Ln.mixin(LE);
Ln.mixin(ME);
Ln.mixin(FE);
Ln.mixin(Lk);
Ln.mount("#app");
window.userStore = Bt();
window.stateStore = Ci();
window.dbStore = Xh();
export {Fe as F, Dk as G, rP as N, pk as P, sr as T, Oo as _, H as a, d as b, He as c, mt as d, Kt as e, Ie as f, $t as g, Ld as h, jE as i, cn as j, zr as k, zE as l, HE as m, Pt as n, ke as o, Rd as p, ve as q, je as r, hr as s, le as t, It as u, ws as v, Pe as w, ps as x, Ae as y, Qw as z};
