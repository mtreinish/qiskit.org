/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit-element';
import { localize } from '../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../i18next.js';

import { trackClickEvent } from '../helpers/track-events.js';

import {
  SharedStyles,
  HeaderStyles,
  SectionStyles,
} from './app-shared-styles.js';
import './vaadin-ibmq-styles/vaadin-button.js';

class PageFun extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      css`
        :host {
          --app-section-background-color: var(--app-primary-color);
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.fun.modelQTitle')}</h3>
            <p>${i18next.t('pages.fun.modelQDescription')}</p>
            <div class="actions">
              <a
                href="/modelq/"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  action: 'Model Q',
                  objectType: 'Button'
                })}
              >
                <vaadin-button theme="secondary">${i18next.t('pages.fun.modelQButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/model-q.jpg" .alt=${i18next.t('pages.fun.modelQAltImage')}>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.fun.helloQuantumTitle')}</h3>
            <p>${i18next.t('pages.fun.helloQuantumDescription')}</p>
            <div class="actions">
              <a
                href="https://helloquantum.mybluemix.net"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  action: 'Hello Quantum',
                  objectType: 'Button'
                })}
              >
                <vaadin-button theme="secondary">${i18next.t('pages.fun.helloQuantumButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/hello-quantum.png" .alt=${i18next.t('pages.fun.helloQuantumAltImage')}>
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.fun.entanglionTitle')}</h3>
            <p>${i18next.t('pages.fun.entanglionDescription')}</p>
            <div class="actions">
              <a
                href="https://entanglion.github.io"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  action: 'Entanglion',
                  objectType: 'Button'
                })}
              >
                <vaadin-button theme="secondary">${i18next.t('pages.fun.entanglionButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/entanglion.png" .alt=${i18next.t('pages.fun.entanglionAltImage')}>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-fun', PageFun);
