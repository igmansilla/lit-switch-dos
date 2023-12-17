/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import { LitSwitchDos } from '../lit-switch-dos.js';

suite('lit-switch-dos', () => {
  test('is defined', () => {
    const el = document.createElement('lit-switch-dos');
    assert.instanceOf(el, LitSwitchDos);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<lit-switch-dos></lit-switch-dos>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<lit-switch-dos name="Test"></lit-switch-dos>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<lit-switch-dos></lit-switch-dos>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = await fixture(html`<lit-switch-dos></lit-switch-dos>`);
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
