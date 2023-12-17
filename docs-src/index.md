---
layout: page.11ty.cjs
title: <lit-switch> ⌲ Home
---

# &lt;lit-switch>

`<lit-switch>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<lit-switch>` is just an HTML element. You can it anywhere you can use HTML!

```html
<lit-switch></lit-switch>
```

  </div>
  <div>

<lit-switch></lit-switch>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<lit-switch>` can be configured with attributed in plain HTML.

```html
<lit-switch name="HTML"></lit-switch>
```

  </div>
  <div>

<lit-switch name="HTML"></lit-switch>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<lit-switch>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;lit-switch&gt;</h2>
    <lit-switch .name=${name}></lit-switch>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;lit-switch&gt;</h2>
<lit-switch name="lit-html"></lit-switch>

  </div>
</section>
