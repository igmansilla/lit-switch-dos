---
layout: page.11ty.cjs
title: <lit-switch-dos> ⌲ Home
---

# &lt;lit-switch-dos>

`<lit-switch-dos>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-switch-dos>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-switch-dos></lit-switch-dos>
```

  </div>
  <div>

<lit-switch-dos></lit-switch-dos>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-switch-dos>` can be configured with attributed in plain HTML.

```html
<lit-switch-dos name="HTML"></lit-switch-dos>
```

  </div>
  <div>

<lit-switch-dos name="HTML"></lit-switch-dos>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-switch-dos>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;lit-switch-dos&gt;</h2>
    <lit-switch-dos .name=${name}></lit-switch-dos>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;lit-switch-dos&gt;</h2>
<lit-switch-dos name="lit-html"></lit-switch-dos>

  </div>
</section>
