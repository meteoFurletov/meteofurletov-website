Atelier's action button — use for any primary, secondary, or inline text action; terracotta carries the primary intent.

```jsx
<Button variant="primary" size="md" onClick={save}>Primary action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Text link</Button>
```

Variants: `primary` (filled terracotta, hovers to clay), `secondary` (transparent with hairline border), `ghost` (underlined terracotta link). Sizes: `sm` / `md` / `lg`. On petrol/Ember grounds, use `primary` or pass a custom `style` border for secondary.
