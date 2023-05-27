import { jsx as d, jsxs as Ne, Fragment as Ae } from "react/jsx-runtime";
import * as l from "react";
import { composeEventHandlers as T } from "@radix-ui/primitive";
import { composeEventHandlers as Rn } from "@radix-ui/primitive";
import { useComposedRefs as _ } from "@radix-ui/react-compose-refs";
import { createContextScope as Qe, createContext as et } from "@radix-ui/react-context";
import { DismissableLayer as tt } from "@radix-ui/react-dismissable-layer";
import { useFocusGuards as ot } from "@radix-ui/react-focus-guards";
import { FocusScope as nt } from "@radix-ui/react-focus-scope";
import { useId as oe } from "@radix-ui/react-id";
import * as re from "@radix-ui/react-popper";
import { createPopperScope as rt } from "@radix-ui/react-popper";
import { Portal as lt } from "@radix-ui/react-portal";
import { Primitive as N } from "@radix-ui/react-primitive";
import { useControllableState as ie } from "@radix-ui/react-use-controllable-state";
import { useLayoutEffect as B } from "@radix-ui/react-use-layout-effect";
import { hideOthers as st } from "aria-hidden";
import * as _e from "react-dom";
import { RemoveScroll as ct } from "react-remove-scroll";
import { Slot as Ie } from "@radix-ui/react-slot";
import { clamp as Ze } from "@radix-ui/number";
import { createCollection as Rt } from "@radix-ui/react-collection";
import { useDirection as Nt } from "@radix-ui/react-direction";
import { useCallbackRef as At } from "@radix-ui/react-use-callback-ref";
import { useCallbackRef as An } from "@radix-ui/react-use-callback-ref";
import { usePrevious as _t } from "@radix-ui/react-use-previous";
import { VisuallyHidden as Mt } from "@radix-ui/react-visually-hidden";
let ye = /* @__PURE__ */ new Map();
function Ot(r, s) {
  let e = r + (s ? Object.entries(s).sort((o, n) => o[0] < n[0] ? -1 : 1).join() : "");
  if (ye.has(e))
    return ye.get(e);
  let t = new Intl.Collator(r, s);
  return ye.set(e, t), t;
}
function Me(r, s) {
  let e = Ot(r, {
    usage: "search",
    ...s
  });
  return {
    startsWith(t, o) {
      return o.length === 0 ? !0 : (t = t.normalize("NFC"), o = o.normalize("NFC"), e.compare(t.slice(0, o.length), o) === 0);
    },
    endsWith(t, o) {
      return o.length === 0 ? !0 : (t = t.normalize("NFC"), o = o.normalize("NFC"), e.compare(t.slice(-o.length), o) === 0);
    },
    contains(t, o) {
      if (o.length === 0)
        return !0;
      t = t.normalize("NFC"), o = o.normalize("NFC");
      let n = 0, i = o.length;
      for (; n + i <= t.length; n++) {
        let c = t.slice(n, n + i);
        if (e.compare(o, c) === 0)
          return !0;
      }
      return !1;
    }
  };
}
const Dt = (r) => {
  const s = l.useRef();
  return l.useEffect(() => {
    s.current = r;
  }), s.current;
};
function kt(r) {
  const s = `${r}CollectionProvider`, [e, t] = Qe(s), [o, n] = e(s, {
    collectionRef: { current: null },
    itemMap: /* @__PURE__ */ new Map(),
    listeners: /* @__PURE__ */ new Set()
  }), i = (u) => {
    const { scope: m, children: S } = u, C = l.useRef(null), x = l.useRef(/* @__PURE__ */ new Map()).current, h = l.useRef(/* @__PURE__ */ new Set()).current;
    return /* @__PURE__ */ d(o, { scope: m, itemMap: x, collectionRef: C, listeners: h, children: S });
  };
  i.displayName = s;
  const c = `${r}CollectionSlot`, a = l.forwardRef((u, m) => {
    const { scope: S, children: C } = u, x = n(c, S), h = _(m, x.collectionRef);
    return /* @__PURE__ */ d(Ie, { ref: h, children: C });
  });
  a.displayName = c;
  const g = `${r}CollectionItemSlot`, p = "data-radix-collection-item", v = l.forwardRef((u, m) => {
    const { scope: S, children: C, ...x } = u, h = l.useRef(null), w = _(m, h), A = n(g, S);
    return l.useEffect(() => {
      const V = Array.from(A.itemMap.values());
      return A.itemMap.set(h, { ref: h, ...x }), A.listeners.forEach((M) => M(Array.from(A.itemMap.values()), V)), () => {
        const M = Array.from(A.itemMap.values());
        A.itemMap.delete(h), A.listeners.forEach((P) => P(Array.from(A.itemMap.values()), M));
      };
    }), /* @__PURE__ */ d(Ie, { [p]: "", ref: w, children: C });
  });
  v.displayName = g;
  function f(u) {
    const m = n(`${r}CollectionConsumer`, u), S = l.useCallback(() => {
      const x = m.collectionRef.current;
      if (!x)
        return [];
      const h = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(m.itemMap.values()).sort(
        (V, M) => h.indexOf(V.ref.current) - h.indexOf(M.ref.current)
      );
    }, [m.collectionRef, m.itemMap]), C = l.useCallback(
      (x) => (m.listeners.add(x), () => m.listeners.delete(x)),
      [m.listeners]
    );
    return { getItems: S, subscribe: C };
  }
  return [
    { Provider: i, Slot: a, ItemSlot: v },
    f,
    t
  ];
}
const Ft = [" ", "Enter", "ArrowUp", "ArrowDown"], Lt = ["Enter"], Je = (r) => !!(r.length === 1 && r.match(/\S| /)), it = "Combobox", [fe, Ce] = kt(it), [Bt, j] = et(it), Ht = ({ children: r }) => /* @__PURE__ */ d(re.Root, { children: /* @__PURE__ */ d(fe.Provider, { scope: void 0, children: r }) }), $t = (r) => {
  const {
    allowCustomValue: s = !1,
    autocomplete: e = "none",
    children: t,
    open: o,
    defaultOpen: n,
    onOpenChange: i,
    value: c,
    defaultValue: a,
    onValueChange: g,
    disabled: p,
    required: v = !1,
    locale: f = "en-EN",
    onTextValueChange: u,
    textValue: m,
    defaultTextValue: S,
    filterValue: C,
    defaultFilterValue: x,
    onFilterValueChange: h
  } = r, [w, A] = l.useState(null), [V, M] = l.useState(null), [P, k] = l.useState(null), [H, z] = l.useState(null), [$ = !1, O] = ie({
    prop: o,
    defaultProp: n,
    onChange: i
  }), [F, L] = ie({
    prop: c,
    defaultProp: a,
    onChange: g
  }), [U, K] = ie({
    prop: m,
    defaultProp: S,
    onChange: u
  }), [q, X] = ie({
    prop: C,
    defaultProp: x,
    onChange: h
  }), W = oe(), ue = l.useCallback(
    (le, se) => {
      const de = se.map((y) => y.ref.current), [Z, ...ce] = de, [Q] = ce.slice(-1), b = H;
      for (const y of le) {
        if (y === b)
          return;
        if (y?.scrollIntoView({ block: "nearest" }), y === Z && V && (V.scrollTop = 0), y === Q && V && (V.scrollTop = V.scrollHeight), z(y), e === "both") {
          const D = se.find((I) => I.ref.current === y);
          D && K(D.textValue);
        }
        if (y !== b)
          return;
      }
    },
    [e, K, V, H]
  );
  return l.useEffect(() => {
    e !== "both" && z(null);
  }, [U, e]), l.useEffect(() => {
    if (P && w)
      return st([P, w]);
  }, [P, w]), /* @__PURE__ */ d(Ht, { children: /* @__PURE__ */ d(
    Bt,
    {
      allowCustomValue: s,
      autocomplete: e,
      required: v,
      trigger: w,
      onTriggerChange: A,
      contentId: W,
      value: F,
      onValueChange: L,
      open: $,
      onOpenChange: O,
      disabled: p,
      locale: f,
      focusFirst: ue,
      textValue: U,
      onTextValueChange: K,
      onViewportChange: M,
      onContentChange: k,
      visuallyFocussedItem: H,
      filterValue: q,
      onFilterValueChange: X,
      onVisuallyFocussedItemChange: z,
      children: t
    }
  ) });
}, Ut = "ComboboxTrigger", Kt = l.forwardRef((r, s) => {
  const { ...e } = r, t = j(Ut), o = () => {
    t.disabled || t.onOpenChange(!0);
  };
  return /* @__PURE__ */ d(re.Anchor, { asChild: !0, children: /* @__PURE__ */ d(
    nt,
    {
      asChild: !0,
      trapped: t.open,
      onMountAutoFocus: (n) => {
        n.preventDefault();
      },
      onUnmountAutoFocus: (n) => {
        t.trigger?.focus({ preventScroll: !0 }), document.getSelection()?.empty(), n.preventDefault();
      },
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: s,
          "data-disabled": t.disabled ? "" : void 0,
          ...e,
          onClick: T(e.onClick, () => {
            t.trigger?.focus();
          }),
          onPointerDown: T(e.onPointerDown, (n) => {
            const i = n.target;
            i.hasPointerCapture(n.pointerId) && i.releasePointerCapture(n.pointerId), (i.closest("button") ?? i.closest("div")) === n.currentTarget && n.button === 0 && n.ctrlKey === !1 && (o(), t.trigger?.focus());
          })
        }
      )
    }
  ) });
}), at = "ComboboxInput", Wt = l.forwardRef((r, s) => {
  const e = j(at), t = l.useRef(null), { getItems: o } = Ce(void 0), { startsWith: n } = Me(e.locale, { sensitivity: "base" }), i = e.disabled, c = _(t, s, e.onTriggerChange), a = () => {
    i || e.onOpenChange(!0);
  }, g = Dt(e.filterValue);
  return B(() => {
    const p = setTimeout(() => {
      if (e.textValue === "" || e.textValue === void 0 || e.filterValue === "" || e.filterValue === void 0)
        return;
      const v = o().find(
        (u) => u.type === "option" && n(u.textValue, e.textValue)
      ), f = vo(g ?? "", e.filterValue);
      v && !e.visuallyFocussedItem && f === e.filterValue.length && t.current?.setSelectionRange(e.filterValue.length, e.textValue.length);
    });
    return () => clearTimeout(p);
  }, [e.textValue, e.filterValue, n, e.visuallyFocussedItem, o, g]), /* @__PURE__ */ d(
    "input",
    {
      type: "text",
      role: "combobox",
      "aria-controls": e.contentId,
      "aria-expanded": e.open,
      "aria-required": e.required,
      "aria-autocomplete": e.autocomplete,
      "data-state": e.open ? "open" : "closed",
      "aria-disabled": i,
      "aria-activedescendant": e.visuallyFocussedItem?.id,
      disabled: i,
      "data-disabled": i ? "" : void 0,
      "data-placeholder": e.textValue === void 0 ? "" : void 0,
      value: e.textValue ?? "",
      ...r,
      ref: c,
      onKeyDown: T(r.onKeyDown, (p) => {
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(p.key))
          setTimeout(() => {
            let f = o().filter((u) => !u.disabled).map((u) => u.ref.current);
            if (["ArrowUp", "End"].includes(p.key) && (f = f.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(p.key)) {
              const u = e.visuallyFocussedItem ?? p.target;
              let m = f.indexOf(u);
              m === f.length - 1 && (m = -1), f = f.slice(m + 1);
            }
            if (["ArrowDown"].includes(p.key) && e.autocomplete === "both" && f.length > 1) {
              const [u, ...m] = f, S = o().find((C) => C.ref.current === u).textValue;
              e.textValue === S && (f = m);
            }
            e.focusFirst(f, o());
          }), p.preventDefault();
        else if (["Tab"].includes(p.key) && e.open)
          p.preventDefault();
        else if (["Escape"].includes(p.key))
          e.open ? e.onOpenChange(!1) : (e.onValueChange(void 0), e.onTextValueChange("")), p.preventDefault();
        else if (Lt.includes(p.key)) {
          if (e.visuallyFocussedItem) {
            const v = o().find((f) => f.ref.current === e.visuallyFocussedItem);
            v && (e.onValueChange(v.value), e.onTextValueChange(v.textValue), e.autocomplete === "both" && e.onFilterValueChange(v.textValue), v.ref.current?.click());
          } else {
            const v = o().find(
              (f) => f.type === "option" && !f.disabled && f.textValue === e.textValue
            );
            v && (e.onValueChange(v.value), e.onTextValueChange(v.textValue), e.autocomplete === "both" && e.onFilterValueChange(v.textValue), v.ref.current?.click());
          }
          e.onOpenChange(!1), p.preventDefault();
        } else
          e.onVisuallyFocussedItemChange(null);
      }),
      onChange: T(r.onChange, (p) => {
        e.onTextValueChange(p.currentTarget.value), e.autocomplete === "both" && e.onFilterValueChange(p.currentTarget.value);
      }),
      onKeyUp: T(r.onKeyUp, (p) => {
        !e.open && (Je(p.key) || ["ArrowUp", "ArrowDown", "Home", "End", "Backspace"].includes(p.key)) && a(), setTimeout(() => {
          if (e.autocomplete === "both" && Je(p.key) && e.filterValue !== void 0) {
            const v = e.filterValue, f = o().find((u) => n(u.textValue, v));
            f && e.onTextValueChange(f.textValue);
          }
        });
      }),
      onBlur: T(r.onBlur, () => {
        e.onVisuallyFocussedItemChange(null);
        const [p] = o().filter(
          (f) => f.textValue === e.textValue && f.type === "option"
        );
        if (e.allowCustomValue) {
          p && (e.onValueChange(p.value), e.autocomplete === "both" && e.onFilterValueChange(p.textValue));
          return;
        }
        const [v] = o().filter((f) => f.value === e.value && f.type === "option");
        p ? e.onValueChange(p.value) : v && e.textValue !== "" ? (e.onTextValueChange(v.textValue), e.autocomplete === "both" && e.onFilterValueChange(v.textValue)) : (e.onValueChange(void 0), e.onTextValueChange(""));
      })
    }
  );
}), zt = l.forwardRef((r, s) => {
  const { children: e, ...t } = r, o = j(at), n = o.disabled, i = () => {
    n || (o.onOpenChange(!0), o.trigger?.focus());
  };
  return /* @__PURE__ */ d(
    N.button,
    {
      "aria-hidden": !0,
      type: "button",
      "aria-disabled": n,
      "aria-controls": o.contentId,
      "aria-expanded": o.open,
      disabled: n,
      "data-disabled": n ? "" : void 0,
      ...t,
      tabIndex: -1,
      ref: s,
      onClick: T(t.onClick, () => {
        o.trigger?.focus();
      }),
      onPointerDown: T(t.onPointerDown, (c) => {
        c.button === 0 && c.ctrlKey === !1 && (i(), c.preventDefault());
      }),
      onKeyDown: T(t.onKeyDown, (c) => {
        Ft.includes(c.key) && (i(), c.preventDefault());
      }),
      children: e || "▼"
    }
  );
}), Gt = "ComboboxPortal", ut = (r) => /* @__PURE__ */ d(lt, { asChild: !0, ...r });
ut.displayName = Gt;
const dt = "ComboboxContent", jt = l.forwardRef((r, s) => {
  const e = j(dt), [t, o] = l.useState();
  if (B(() => {
    o(new DocumentFragment());
  }, []), !e.open) {
    const n = t;
    return n ? _e.createPortal(
      /* @__PURE__ */ d(fe.Slot, { scope: void 0, children: /* @__PURE__ */ d("div", { children: r.children }) }),
      n
    ) : null;
  }
  return /* @__PURE__ */ d(qt, { ...r, ref: s });
}), Yt = 10, qt = l.forwardRef(
  (r, s) => {
    const { onEscapeKeyDown: e, onPointerDownOutside: t, ...o } = r, n = j(dt), i = _(s, (a) => n.onContentChange(a)), { onOpenChange: c } = n;
    return ot(), l.useEffect(() => {
      const a = () => {
        c(!1);
      };
      return window.addEventListener("blur", a), window.addEventListener("resize", a), () => {
        window.removeEventListener("blur", a), window.removeEventListener("resize", a);
      };
    }, [c]), /* @__PURE__ */ d(ct, { allowPinchZoom: !0, children: /* @__PURE__ */ d(
      tt,
      {
        asChild: !0,
        onEscapeKeyDown: e,
        onPointerDownOutside: t,
        onFocusOutside: (a) => {
          a.preventDefault();
        },
        onDismiss: () => {
          n.onOpenChange(!1), n.trigger?.focus({ preventScroll: !0 });
        },
        children: /* @__PURE__ */ d(
          Xt,
          {
            role: "listbox",
            id: n.contentId,
            "data-state": n.open ? "open" : "closed",
            onContextMenu: (a) => a.preventDefault(),
            ...o,
            ref: i,
            style: {
              // flex layout so we can place the scroll buttons properly
              display: "flex",
              flexDirection: "column",
              // reset the outline by default as the content MAY get focused
              outline: "none",
              ...o.style
            }
          }
        )
      }
    ) });
  }
), Xt = l.forwardRef(
  (r, s) => {
    const { align: e = "start", collisionPadding: t = Yt, ...o } = r;
    return /* @__PURE__ */ d(
      re.Content,
      {
        ...o,
        ref: s,
        align: e,
        collisionPadding: t,
        style: {
          // Ensure border-box for floating-ui calculations
          boxSizing: "border-box",
          ...o.style,
          "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
          "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
          "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
), Zt = "ComboboxViewport", Jt = l.forwardRef((r, s) => {
  const e = j(Zt), t = _(s, e.onViewportChange);
  return /* @__PURE__ */ Ne(Ae, { children: [
    /* @__PURE__ */ d(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"
        }
      }
    ),
    /* @__PURE__ */ d(fe.Slot, { scope: void 0, children: /* @__PURE__ */ d(
      N.div,
      {
        "data-radix-combobox-viewport": "",
        role: "presentation",
        ...r,
        ref: t,
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto",
          ...r.style
        }
      }
    ) })
  ] });
}), pt = "ComboboxItem", [Qt, ft] = et(pt), mt = l.forwardRef((r, s) => {
  const { value: e, disabled: t = !1, textValue: o, ...n } = r, i = l.useRef(null), c = _(s, i), { getItems: a } = Ce(void 0), {
    onTextValueChange: g,
    textValue: p,
    visuallyFocussedItem: v,
    ...f
  } = j(pt), u = oe(), [m, S] = l.useState(o ?? ""), C = l.useMemo(() => v === a().find((M) => M.ref.current === i.current)?.ref.current, [a, v]), x = f.value === e, h = () => {
    t || (f.onValueChange(e), g(m), f.onOpenChange(!1), f.autocomplete === "both" && f.onFilterValueChange(m), f.trigger?.focus({ preventScroll: !0 }));
  }, { startsWith: w } = Me(f.locale, { sensitivity: "base" }), A = l.useCallback((M) => {
    S((P) => P || (M?.textContent ?? "").trim());
  }, []);
  l.useEffect(() => {
    x && p === void 0 && m !== "" && g(m);
  }, [m, x, p, g]);
  const V = oe();
  return f.autocomplete === "list" && m && p && !w(m, p) || f.autocomplete === "both" && m && f.filterValue && !w(m, f.filterValue) ? null : /* @__PURE__ */ d(Qt, { textId: u, onTextValueChange: A, isSelected: x, children: /* @__PURE__ */ d(fe.ItemSlot, { scope: void 0, value: e, textValue: m, disabled: t, type: "option", children: /* @__PURE__ */ d(
    N.div,
    {
      role: "option",
      "aria-labelledby": u,
      "data-highlighted": C ? "" : void 0,
      "aria-selected": x && C,
      "data-state": x ? "checked" : "unchecked",
      "aria-disabled": t || void 0,
      "data-disabled": t ? "" : void 0,
      tabIndex: t ? void 0 : -1,
      ...n,
      id: V,
      ref: c,
      onPointerUp: T(n.onPointerUp, h)
    }
  ) }) });
}), eo = "ComboboxItemText", to = l.forwardRef((r, s) => {
  const { className: e, style: t, ...o } = r, n = ft(eo), i = _(s, n.onTextValueChange);
  return /* @__PURE__ */ d(N.span, { id: n.textId, ...o, ref: i });
}), oo = "ComboboxItemIndicator", no = l.forwardRef((r, s) => {
  const { isSelected: e } = ft(oo);
  return e ? /* @__PURE__ */ d(N.span, { "aria-hidden": !0, ...r, ref: s }) : null;
}), ht = "ComboboxNoValueFound", ro = l.forwardRef((r, s) => {
  const { textValue: e = "", locale: t } = j(ht), [o, n] = l.useState([]), { subscribe: i } = Ce(void 0), { startsWith: c } = Me(t, { sensitivity: "base" });
  return l.useEffect(() => {
    const a = i((g) => {
      n(g);
    });
    return () => {
      a();
    };
  }, [i]), o.some((a) => c(a.textValue, e)) ? null : /* @__PURE__ */ d(N.div, { ...r, ref: s });
}), lo = l.forwardRef((r, s) => {
  const { disabled: e = !1, ...t } = r, o = j(ht), { textValue: n, visuallyFocussedItem: i } = o, { getItems: c, subscribe: a } = Ce(void 0), g = l.useRef(null), [p, v] = l.useState(!1), f = _(s, g), u = l.useMemo(() => i === c().find((C) => C.ref.current === g.current)?.ref.current, [c, i]), m = oe(), S = () => {
    !e && n && (o.onValueChange(n), o.onTextValueChange(n), o.onOpenChange(!1), o.autocomplete === "both" && o.onFilterValueChange(n), o.trigger?.focus({ preventScroll: !0 }));
  };
  return B(() => {
    const C = a((x) => {
      v(!x.some((h) => h.textValue === n && h.type !== "create"));
    });
    return c().length === 0 && v(!0), () => {
      C();
    };
  }, [n, a, c]), !n || !p ? null : /* @__PURE__ */ d(
    fe.ItemSlot,
    {
      scope: void 0,
      value: n ?? "",
      textValue: n ?? "",
      disabled: e,
      type: "create",
      children: /* @__PURE__ */ d(
        N.div,
        {
          role: "option",
          tabIndex: e ? void 0 : -1,
          "aria-disabled": e || void 0,
          "data-disabled": e ? "" : void 0,
          "data-highlighted": u ? "" : void 0,
          ...t,
          id: m,
          ref: f,
          onPointerUp: T(t.onPointerUp, S)
        }
      )
    }
  );
}), so = $t, co = Kt, io = Wt, ao = zt, uo = ut, po = jt, fo = Jt, mo = mt, ho = to, go = no, Co = ro, xo = lo;
function vo(r, s) {
  const e = Math.min(r.length, s.length);
  for (let t = 0; t < e; t++)
    if (r[t] !== s[t])
      return t;
  return e;
}
const Tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComboboxItem: mt,
  Content: po,
  CreateItem: xo,
  Icon: ao,
  Item: mo,
  ItemIndicator: go,
  ItemText: ho,
  NoValueFound: Co,
  Portal: uo,
  Root: so,
  TextInput: io,
  Trigger: co,
  Viewport: fo
}, Symbol.toStringTag, { value: "Module" })), So = [" ", "Enter", "ArrowUp", "ArrowDown"], bo = [" ", "Enter"], me = "Select", [xe, he, wo] = Rt(me), [ae, yo] = Qe(me, [
  wo,
  rt
]), ve = rt(), [Io, Y] = ae(me), [To, Vo] = ae(me), Oe = (r) => {
  const {
    __scopeSelect: s,
    children: e,
    open: t,
    defaultOpen: o,
    onOpenChange: n,
    value: i,
    defaultValue: c,
    onValueChange: a,
    dir: g,
    // name,
    // autoComplete,
    disabled: p,
    required: v,
    multi: f = !1
  } = r, u = ve(s), [m, S] = l.useState(null), [C, x] = l.useState(null), [h, w] = l.useState(!1), A = Nt(g), [V = !1, M] = ie({
    prop: t,
    defaultProp: o,
    onChange: n
  }), [P, k] = ie({
    prop: i,
    defaultProp: c,
    onChange(O) {
      a && (Array.isArray(O), a(O));
    }
  }), H = l.useRef(null), [z, $] = l.useState(/* @__PURE__ */ new Set());
  return /* @__PURE__ */ d(re.Root, { ...u, children: /* @__PURE__ */ d(
    Io,
    {
      required: v,
      scope: s,
      trigger: m,
      onTriggerChange: S,
      valueNode: C,
      onValueNodeChange: x,
      valueNodeHasChildren: h,
      onValueNodeHasChildrenChange: w,
      contentId: oe(),
      value: P,
      onValueChange: k,
      open: V,
      onOpenChange: M,
      dir: A,
      triggerPointerDownPosRef: H,
      disabled: p,
      multi: f,
      children: /* @__PURE__ */ d(xe.Provider, { scope: s, children: /* @__PURE__ */ d(
        To,
        {
          scope: r.__scopeSelect,
          onNativeOptionAdd: l.useCallback((O) => {
            $((F) => new Set(F).add(O));
          }, []),
          onNativeOptionRemove: l.useCallback((O) => {
            $((F) => {
              const L = new Set(F);
              return L.delete(O), L;
            });
          }, []),
          children: e
        }
      ) })
    }
  ) });
};
Oe.displayName = me;
const gt = "SelectTrigger", De = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r, o = ve(e), n = Y(gt, e), i = n.disabled, c = _(s, n.onTriggerChange), a = he(e), [g, p, v] = Vt((u) => {
      const m = a().filter((x) => !x.disabled), S = m.find((x) => x.value === n.value), C = Pt(m, u, S);
      if (C !== void 0 && !Array.isArray(C.value)) {
        const x = n.multi ? [C.value] : C.value;
        n.onValueChange(x);
      }
    }), f = () => {
      i || (n.onOpenChange(!0), v());
    };
    return /* @__PURE__ */ d(re.Anchor, { asChild: !0, ...o, children: /* @__PURE__ */ d(
      N.div,
      {
        role: "combobox",
        "aria-controls": n.contentId,
        "aria-expanded": n.open,
        "aria-required": n.required,
        "aria-autocomplete": "none",
        dir: n.dir,
        "data-state": n.open ? "open" : "closed",
        "data-disabled": i ? "" : void 0,
        "data-placeholder": n.value === void 0 ? "" : void 0,
        tabIndex: i ? void 0 : 0,
        ...t,
        ref: c,
        onClick: T(t.onClick, (u) => {
          u.currentTarget.focus();
        }),
        onPointerDown: T(t.onPointerDown, (u) => {
          const m = u.target;
          m.hasPointerCapture(u.pointerId) && m.releasePointerCapture(u.pointerId), (m.closest("button") ?? m.closest("div")) === u.currentTarget && u.button === 0 && u.ctrlKey === !1 && (f(), n.triggerPointerDownPosRef.current = {
            x: Math.round(u.pageX),
            y: Math.round(u.pageY)
          }, u.preventDefault());
        }),
        onKeyDown: T(t.onKeyDown, (u) => {
          const m = g.current !== "", S = u.ctrlKey || u.altKey || u.metaKey, C = u.target;
          (C.closest("button") ?? C.closest("div")) === u.currentTarget && (!S && u.key.length === 1 && p(u.key), !(m && u.key === " ") && So.includes(u.key) && (f(), u.preventDefault()));
        })
      }
    ) });
  }
);
De.displayName = gt;
const Ct = "SelectValue", ke = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, children: t, placeholder: o, ...n } = r, i = Y(Ct, e), { onValueNodeHasChildrenChange: c } = i, a = t !== void 0, g = _(s, i.onValueNodeChange), [p, v] = l.useState([]), f = he(e);
    B(() => {
      c(a);
    }, [c, a]), l.useLayoutEffect(() => {
      if (Array.isArray(i.value) && p.length !== i.value.length) {
        const m = setTimeout(() => {
          const S = f().filter(
            (C) => Array.isArray(C.value) ? !1 : i.value?.includes(C.value)
          );
          v(S);
        });
        return () => {
          clearTimeout(m);
        };
      }
    }, [i.value, f, p]);
    let u;
    if ((i.value === void 0 || i.value.length === 0) && o !== void 0)
      u = /* @__PURE__ */ d("span", { children: o });
    else if (typeof t == "function")
      if (Array.isArray(i.value)) {
        const m = i.value.map((S) => {
          const C = p.find((x) => x.value === S);
          return C ? t({ value: S, textValue: C?.textValue }) : null;
        });
        u = m.every((S) => S === null) ? o : m;
      } else
        u = t(i.value);
    else
      u = t;
    return /* @__PURE__ */ d(N.span, { ...n, ref: g, children: u || null });
  }
);
ke.displayName = Ct;
const Po = "SelectIcon", Fe = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, children: t, ...o } = r;
    return /* @__PURE__ */ d(N.span, { "aria-hidden": !0, ...o, ref: s, children: t || "▼" });
  }
);
Fe.displayName = Po;
const Eo = "SelectPortal", Le = (r) => /* @__PURE__ */ d(lt, { asChild: !0, ...r });
Le.displayName = Eo;
const ne = "SelectContent", Be = l.forwardRef(
  (r, s) => {
    const e = Y(ne, r.__scopeSelect), [t, o] = l.useState();
    if (B(() => {
      o(new DocumentFragment());
    }, []), !e.open) {
      const n = t;
      return n ? _e.createPortal(
        /* @__PURE__ */ d(xt, { scope: r.__scopeSelect, children: /* @__PURE__ */ d(xe.Slot, { scope: r.__scopeSelect, children: /* @__PURE__ */ d("div", { children: r.children }) }) }),
        n
      ) : null;
    }
    return /* @__PURE__ */ d(vt, { ...r, ref: s });
  }
);
Be.displayName = ne;
const G = 10, [xt, J] = ae(ne), Ro = "SelectContentImpl", vt = l.forwardRef(
  (r, s) => {
    const {
      __scopeSelect: e,
      position: t = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: c,
      sideOffset: a,
      align: g,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: f,
      collisionPadding: u,
      sticky: m,
      hideWhenDetached: S,
      avoidCollisions: C,
      //
      ...x
    } = r, h = Y(ne, e), [w, A] = l.useState(null), [V, M] = l.useState(null), P = _(s, (b) => A(b)), [k, H] = l.useState(null), [z, $] = l.useState(null), O = he(e), [F, L] = l.useState(!1), U = l.useRef(!1);
    l.useEffect(() => {
      if (w)
        return st(w);
    }, [w]), ot();
    const K = l.useCallback(
      (b) => {
        const [y, ...D] = O().map((R) => R.ref.current), [I] = D.slice(-1), E = document.activeElement;
        for (const R of b)
          if (R === E || (R?.scrollIntoView({ block: "nearest" }), R === y && V && (V.scrollTop = 0), R === I && V && (V.scrollTop = V.scrollHeight), R?.focus(), document.activeElement !== E))
            return;
      },
      [O, V]
    ), q = l.useCallback(
      () => K([k, w]),
      [K, k, w]
    );
    l.useEffect(() => {
      F && q();
    }, [F, q]);
    const { onOpenChange: X, triggerPointerDownPosRef: W } = h;
    l.useEffect(() => {
      if (w) {
        let b = { x: 0, y: 0 };
        const y = (I) => {
          b = {
            x: Math.abs(Math.round(I.pageX) - (W.current?.x ?? 0)),
            y: Math.abs(Math.round(I.pageY) - (W.current?.y ?? 0))
          };
        }, D = (I) => {
          b.x <= 10 && b.y <= 10 ? I.preventDefault() : w.contains(I.target) || X(!1), document.removeEventListener("pointermove", y), W.current = null;
        };
        return W.current !== null && (document.addEventListener("pointermove", y), document.addEventListener("pointerup", D, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", y), document.removeEventListener("pointerup", D, { capture: !0 });
        };
      }
    }, [w, X, W]), l.useEffect(() => {
      const b = () => X(!1);
      return window.addEventListener("blur", b), window.addEventListener("resize", b), () => {
        window.removeEventListener("blur", b), window.removeEventListener("resize", b);
      };
    }, [X]);
    const [ue, le] = Vt((b) => {
      const y = O().filter((E) => !E.disabled), D = y.find((E) => E.ref.current === document.activeElement), I = Pt(y, b, D);
      I && setTimeout(() => I.ref.current.focus());
    }), se = l.useCallback(
      (b, y, D) => {
        const I = !U.current && !D;
        (h.value !== void 0 && h.value === y || I) && (H(b), I && (U.current = !0));
      },
      [h.value]
    ), de = l.useCallback(() => w?.focus(), [w]), Z = l.useCallback(
      (b, y, D) => {
        const I = !U.current && !D;
        (h.value !== void 0 && (Array.isArray(y) ? y.every((R) => h.value?.includes(R)) : h.value === y) || I) && $(b);
      },
      [h.value]
    ), ce = t === "popper" ? Te : St, Q = ce === Te ? {
      side: c,
      sideOffset: a,
      align: g,
      alignOffset: p,
      arrowPadding: v,
      collisionBoundary: f,
      collisionPadding: u,
      sticky: m,
      hideWhenDetached: S,
      avoidCollisions: C
    } : {};
    return /* @__PURE__ */ d(
      xt,
      {
        scope: e,
        content: w,
        viewport: V,
        onViewportChange: M,
        itemRefCallback: se,
        selectedItem: k,
        onItemLeave: de,
        itemTextRefCallback: Z,
        focusSelectedItem: q,
        selectedItemText: z,
        position: t,
        isPositioned: F,
        searchRef: ue,
        children: /* @__PURE__ */ d(ct, { as: Ie, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          nt,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (b) => {
              b.preventDefault();
            },
            onUnmountAutoFocus: T(o, (b) => {
              h.trigger?.focus({ preventScroll: !0 }), document.getSelection()?.empty(), b.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              tt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: n,
                onPointerDownOutside: i,
                onFocusOutside: (b) => b.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  ce,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    "aria-multiselectable": h.multi ? "true" : void 0,
                    dir: h.dir,
                    onContextMenu: (b) => b.preventDefault(),
                    ...x,
                    ...Q,
                    onPlaced: () => L(!0),
                    ref: P,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: T(x.onKeyDown, (b) => {
                      const y = b.ctrlKey || b.altKey || b.metaKey;
                      if (b.key === "Tab" && b.preventDefault(), !y && b.key.length === 1 && le(b.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(b.key)) {
                        let I = O().filter((E) => !E.disabled).map((E) => E.ref.current);
                        if (["ArrowUp", "End"].includes(b.key) && (I = I.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(b.key)) {
                          const E = b.target, R = I.indexOf(E);
                          I = I.slice(R + 1);
                        }
                        setTimeout(() => K(I)), b.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
vt.displayName = Ro;
const No = "SelectItemAlignedPosition", St = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, onPlaced: t, ...o } = r, n = Y(ne, e), i = J(ne, e), [c, a] = l.useState(null), [g, p] = l.useState(null), v = _(s, (P) => p(P)), f = he(e), u = l.useRef(!1), m = l.useRef(!0), { viewport: S, selectedItem: C, selectedItemText: x, focusSelectedItem: h } = i, w = l.useCallback(() => {
      if (n.trigger && n.valueNode && c && g && S && C && x) {
        const P = n.trigger.getBoundingClientRect(), k = g.getBoundingClientRect(), H = n.valueNode.getBoundingClientRect(), z = x.getBoundingClientRect();
        if (n.dir !== "rtl") {
          const E = z.left - k.left, R = H.left - E, ee = P.left - R, te = P.width + ee, Se = Math.max(te, k.width), be = window.innerWidth - G, we = Ze(R, [G, be - Se]);
          c.style.minWidth = `${te}px`, c.style.left = `${we}px`;
        } else {
          const E = k.right - z.right, R = window.innerWidth - H.right - E, ee = window.innerWidth - P.right - R, te = P.width + ee, Se = Math.max(te, k.width), be = window.innerWidth - G, we = Ze(R, [G, be - Se]);
          c.style.minWidth = `${te}px`, c.style.right = `${we}px`;
        }
        const $ = f(), O = window.innerHeight - G * 2, F = S.scrollHeight, L = window.getComputedStyle(g), U = parseInt(L.borderTopWidth, 10), K = parseInt(L.paddingTop, 10), q = parseInt(L.borderBottomWidth, 10), X = parseInt(L.paddingBottom, 10), W = U + K + F + X + q, ue = Math.min(C.offsetHeight * 5, W), le = window.getComputedStyle(S), se = parseInt(le.paddingTop, 10), de = parseInt(le.paddingBottom, 10), Z = P.top + P.height / 2 - G, ce = O - Z, Q = C.offsetHeight / 2, b = C.offsetTop + Q, y = U + K + b, D = W - y;
        if (y <= Z) {
          const E = C === $[$.length - 1].ref.current;
          c.style.bottom = "0px";
          const R = g.clientHeight - S.offsetTop - S.offsetHeight, ee = Math.max(
            ce,
            Q + // viewport might have padding bottom, include it to avoid a scrollable viewport
            (E ? de : 0) + R + q
          ), te = y + ee;
          c.style.height = `${te}px`;
        } else {
          const E = C === $[0].ref.current;
          c.style.top = "0px";
          const ee = Math.max(
            Z,
            U + S.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
            (E ? se : 0) + Q
          ) + D;
          c.style.height = `${ee}px`, S.scrollTop = y - Z + S.offsetTop;
        }
        c.style.margin = `${G}px 0`, c.style.minHeight = `${ue}px`, c.style.maxHeight = `${O}px`, t?.(), requestAnimationFrame(() => u.current = !0);
      }
    }, [
      f,
      n.trigger,
      n.valueNode,
      c,
      g,
      S,
      C,
      x,
      n.dir,
      t
    ]);
    B(() => w(), [w]);
    const [A, V] = l.useState();
    B(() => {
      g && V(window.getComputedStyle(g).zIndex);
    }, [g]);
    const M = l.useCallback(
      (P) => {
        P && m.current === !0 && (w(), h?.(), m.current = !1);
      },
      [w, h]
    );
    return /* @__PURE__ */ d(
      _o,
      {
        scope: e,
        contentWrapper: c,
        shouldExpandOnScrollRef: u,
        onScrollButtonChange: M,
        children: /* @__PURE__ */ d(
          "div",
          {
            ref: a,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: A
            },
            children: /* @__PURE__ */ d(
              N.div,
              {
                ...o,
                ref: v,
                style: {
                  // When we get the height of the content, it includes borders. If we were to set
                  // the height without having `boxSizing: 'border-box'` it would be too big.
                  boxSizing: "border-box",
                  // We need to ensure the content doesn't get taller than the wrapper
                  maxHeight: "100%",
                  ...o.style
                }
              }
            )
          }
        )
      }
    );
  }
);
St.displayName = No;
const Ao = "SelectPopperPosition", Te = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, align: t = "start", collisionPadding: o = G, ...n } = r, i = ve(e);
    return /* @__PURE__ */ d(
      re.Content,
      {
        ...i,
        ...n,
        ref: s,
        align: t,
        collisionPadding: o,
        style: {
          // Ensure border-box for floating-ui calculations
          boxSizing: "border-box",
          ...n.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Te.displayName = Ao;
const [_o, He] = ae(
  ne,
  {}
), Ve = "SelectViewport", $e = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r, o = J(Ve, e), n = He(Ve, e), i = _(s, o.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ Ne(Ae, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          }
        }
      ),
      /* @__PURE__ */ d(xe.Slot, { scope: e, children: /* @__PURE__ */ d(
        N.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...t,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...t.style
          },
          onScroll: T(t.onScroll, (a) => {
            const g = a.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: v } = n;
            if (v?.current && p) {
              const f = Math.abs(c.current - g.scrollTop);
              if (f > 0) {
                const u = window.innerHeight - G * 2, m = parseFloat(p.style.minHeight), S = parseFloat(p.style.height), C = Math.max(m, S);
                if (C < u) {
                  const x = C + f, h = Math.min(u, x), w = x - h;
                  p.style.height = `${h}px`, p.style.bottom === "0px" && (g.scrollTop = w > 0 ? w : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = g.scrollTop;
          })
        }
      ) })
    ] });
  }
);
$e.displayName = Ve;
const bt = "SelectGroup", [Mo, Oo] = ae(bt), Ue = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r, o = oe();
    return /* @__PURE__ */ d(Mo, { scope: e, id: o, children: /* @__PURE__ */ d(N.div, { role: "group", "aria-labelledby": o, ...t, ref: s }) });
  }
);
Ue.displayName = bt;
const wt = "SelectLabel", Ke = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r, o = Oo(wt, e);
    return /* @__PURE__ */ d(N.div, { id: o.id, ...t, ref: s });
  }
);
Ke.displayName = wt;
const ge = "SelectItem", [Do, yt] = ae(ge), We = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, value: t, disabled: o = !1, textValue: n, ...i } = r, c = Y(ge, e), a = J(ge, e), g = typeof t == "string" ? Array.isArray(c.value) ? c.value.includes(t) : c.value === t : t.every((h) => c.value?.includes(h)), p = Array.isArray(c.value) && Array.isArray(t) && t.some((h) => c.value?.includes(h)), [v, f] = l.useState(n ?? ""), [u, m] = l.useState(!1), S = _(
      s,
      (h) => a.itemRefCallback?.(h, t, o)
    ), C = oe(), x = () => {
      if (!o) {
        let h = c.multi && typeof t == "string" ? [t] : t;
        p && !g ? c.onValueChange(h) : Array.isArray(c.value) && (h = Et(t, c.value)), c.onValueChange(h), c.multi || c.onOpenChange(!1);
      }
    };
    if (!c.multi && Array.isArray(t))
      throw new Error("You can only pass an array of values in multi selects");
    return /* @__PURE__ */ d(
      Do,
      {
        scope: e,
        value: t,
        disabled: o,
        textId: C,
        isSelected: g,
        isIntermediate: p,
        onItemTextChange: l.useCallback((h) => {
          f((w) => w || (h?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(xe.ItemSlot, { scope: e, value: t, disabled: o, textValue: v, children: /* @__PURE__ */ d(
          N.div,
          {
            role: "option",
            "aria-labelledby": C,
            "data-highlighted": u ? "" : void 0,
            "aria-selected": c.multi ? void 0 : g && u,
            "aria-checked": c.multi ? g : void 0,
            "data-state": g ? "checked" : "unchecked",
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            tabIndex: o ? void 0 : -1,
            ...i,
            ref: S,
            onFocus: T(i.onFocus, () => m(!0)),
            onBlur: T(i.onBlur, () => m(!1)),
            onPointerUp: T(i.onPointerUp, x),
            onPointerMove: T(i.onPointerMove, (h) => {
              o ? a.onItemLeave?.() : h.currentTarget.focus({ preventScroll: !0 });
            }),
            onPointerLeave: T(i.onPointerLeave, (h) => {
              h.currentTarget === document.activeElement && a.onItemLeave?.();
            }),
            onKeyDown: T(i.onKeyDown, (h) => {
              a.searchRef?.current !== "" && h.key === " " || (bo.includes(h.key) && x(), h.key === " " && h.preventDefault());
            })
          }
        ) })
      }
    );
  }
);
We.displayName = ge;
const pe = "SelectItemText", ze = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, className: t, style: o, ...n } = r, i = Y(pe, e), c = J(pe, e), a = yt(pe, e), g = Vo(pe, e), [p, v] = l.useState(null), f = _(
      s,
      (x) => v(x),
      a.onItemTextChange,
      (x) => c.itemTextRefCallback?.(x, a.value, a.disabled)
    ), u = p?.textContent, m = l.useMemo(
      () => /* @__PURE__ */ d(
        "option",
        {
          value: a.value,
          disabled: a.disabled,
          children: u
        },
        Array.isArray(a.value) ? a.value.join(";") : a.value
      ),
      [a.disabled, a.value, u]
    ), { onNativeOptionAdd: S, onNativeOptionRemove: C } = g;
    return B(() => (S(m), () => C(m)), [S, C, m]), /* @__PURE__ */ Ne(Ae, { children: [
      /* @__PURE__ */ d(N.span, { id: a.textId, ...n, ref: f }),
      a.isSelected && i.valueNode && !i.valueNodeHasChildren ? _e.createPortal(n.children, i.valueNode) : null
    ] });
  }
);
ze.displayName = pe;
const It = "SelectItemIndicator", Ge = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, children: t, ...o } = r, n = yt(It, e);
    return typeof t == "function" ? /* @__PURE__ */ d(N.span, { "aria-hidden": !0, ...o, ref: s, children: t({
      isSelected: n.isSelected,
      isIntermediate: n.isIntermediate
    }) }) : n.isSelected ? /* @__PURE__ */ d(N.span, { "aria-hidden": !0, ...o, ref: s, children: t }) : null;
  }
);
Ge.displayName = It;
const Pe = "SelectScrollUpButton", je = l.forwardRef(
  (r, s) => {
    const e = J(Pe, r.__scopeSelect), t = He(Pe, r.__scopeSelect), [o, n] = l.useState(!1), i = _(s, t.onScrollButtonChange);
    return B(() => {
      if (e.viewport && e.isPositioned) {
        const c = e.viewport, a = () => {
          const g = c.scrollTop > 0;
          n(g);
        };
        return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
      }
    }, [e.viewport, e.isPositioned]), o ? /* @__PURE__ */ d(
      Tt,
      {
        ...r,
        ref: i,
        onAutoScroll: () => {
          const { viewport: c, selectedItem: a } = e;
          c && a && (c.scrollTop -= a.offsetHeight);
        }
      }
    ) : null;
  }
);
je.displayName = Pe;
const Ee = "SelectScrollDownButton", Ye = l.forwardRef(
  (r, s) => {
    const e = J(Ee, r.__scopeSelect), t = He(Ee, r.__scopeSelect), [o, n] = l.useState(!1), i = _(s, t.onScrollButtonChange);
    return B(() => {
      if (e.viewport && e.isPositioned) {
        const c = e.viewport, a = () => {
          const g = c.scrollHeight - c.clientHeight, p = Math.ceil(c.scrollTop) < g;
          n(p);
        };
        return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
      }
    }, [e.viewport, e.isPositioned]), o ? /* @__PURE__ */ d(
      Tt,
      {
        ...r,
        ref: i,
        onAutoScroll: () => {
          const { viewport: c, selectedItem: a } = e;
          c && a && (c.scrollTop += a.offsetHeight);
        }
      }
    ) : null;
  }
);
Ye.displayName = Ee;
const Tt = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, onAutoScroll: t, ...o } = r, n = J("SelectScrollButton", e), i = l.useRef(null), c = he(e), a = l.useCallback(() => {
      i.current !== null && (window.clearInterval(i.current), i.current = null);
    }, []);
    return l.useEffect(() => () => a(), [a]), B(() => {
      c().find((p) => p.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
    }, [c]), /* @__PURE__ */ d(
      N.div,
      {
        "aria-hidden": !0,
        ...o,
        ref: s,
        style: { flexShrink: 0, ...o.style },
        onPointerMove: T(o.onPointerMove, () => {
          n.onItemLeave?.(), i.current === null && (i.current = window.setInterval(t, 50));
        }),
        onPointerLeave: T(o.onPointerLeave, () => {
          a();
        })
      }
    );
  }
), ko = "SelectSeparator", qe = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r;
    return /* @__PURE__ */ d(N.div, { "aria-hidden": !0, ...t, ref: s });
  }
);
qe.displayName = ko;
const Re = "SelectArrow", Xe = l.forwardRef(
  (r, s) => {
    const { __scopeSelect: e, ...t } = r, o = ve(e), n = Y(Re, e), i = J(Re, e);
    return n.open && i.position === "popper" ? /* @__PURE__ */ d(re.Arrow, { ...o, ...t, ref: s }) : null;
  }
);
Xe.displayName = Re;
const Fo = "BubbleSelect", Lo = l.forwardRef(
  (r, s) => {
    const { value: e, ...t } = r, o = l.useRef(null), n = _(s, o), i = _t(e), c = Y(Fo, void 0);
    l.useEffect(() => {
      const g = o.current, p = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(p, "value").set;
      if (i !== e && f) {
        const u = new Event("change", { bubbles: !0 });
        f.call(g, e), g.dispatchEvent(u);
      }
    }, [i, e]);
    let a = e;
    return c.multi && !Array.isArray(e) && (a = []), /* @__PURE__ */ d(Mt, { asChild: !0, children: /* @__PURE__ */ d(
      "select",
      {
        ...t,
        multiple: c.multi ? !0 : void 0,
        ref: n,
        defaultValue: a
      }
    ) });
  }
);
Lo.displayName = "BubbleSelect";
function Vt(r) {
  const s = At(r), e = l.useRef(""), t = l.useRef(0), o = l.useCallback(
    (i) => {
      const c = e.current + i;
      s(c), function a(g) {
        e.current = g, window.clearTimeout(t.current), g !== "" && (t.current = window.setTimeout(() => a(""), 1e3));
      }(c);
    },
    [s]
  ), n = l.useCallback(() => {
    e.current = "", window.clearTimeout(t.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(t.current), []), [e, o, n];
}
function Pt(r, s, e) {
  const o = s.length > 1 && Array.from(s).every((g) => g === s[0]) ? s[0] : s, n = e ? r.indexOf(e) : -1;
  let i = Bo(r, Math.max(n, 0));
  o.length === 1 && (i = i.filter((g) => g !== e));
  const a = i.find((g) => g.textValue.toLowerCase().startsWith(o.toLowerCase()));
  return a !== e ? a : void 0;
}
function Bo(r, s) {
  return r.map((e, t) => r[(s + t) % r.length]);
}
const Et = (r, s = []) => {
  if (Array.isArray(r))
    return r.reduce((t, o) => Et(o, t), s);
  const e = s.indexOf(r);
  return e === -1 ? [...s, r] : [...s.slice(0, e), ...s.slice(e + 1)];
}, Ho = Oe, $o = De, Uo = ke, Ko = Fe, Wo = Le, zo = Be, Go = $e, jo = Ue, Yo = Ke, qo = We, Xo = ze, Zo = Ge, Jo = je, Qo = Ye, en = qe, tn = Xe, Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arrow: tn,
  Content: zo,
  Group: jo,
  Icon: Ko,
  Item: qo,
  ItemIndicator: Zo,
  ItemText: Xo,
  Label: Yo,
  Portal: Wo,
  Root: Ho,
  ScrollDownButton: Qo,
  ScrollUpButton: Jo,
  Select: Oe,
  SelectArrow: Xe,
  SelectContent: Be,
  SelectGroup: Ue,
  SelectIcon: Fe,
  SelectItem: We,
  SelectItemIndicator: Ge,
  SelectItemText: ze,
  SelectLabel: Ke,
  SelectPortal: Le,
  SelectScrollDownButton: Ye,
  SelectScrollUpButton: je,
  SelectSeparator: qe,
  SelectTrigger: De,
  SelectValue: ke,
  SelectViewport: $e,
  Separator: en,
  Trigger: $o,
  Value: Uo,
  Viewport: Go,
  createSelectScope: yo
}, Symbol.toStringTag, { value: "Module" }));
export {
  Tn as Combobox,
  Vn as Select,
  Rn as composeEventHandlers,
  An as useCallbackRef
};
