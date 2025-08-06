import { Component, HostListener } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'lib-meet-landing-page',
  imports: [
    NgTemplateOutlet
  ],
  template: `
    <header>
      <section id="logo">
        <svg width="119" height="28" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g>
              <circle fill="#4D96A9" cx="7" cy="21" r="7"/>
              <circle fill="#855FB1" cx="21" cy="7" r="7"/>
            </g>
            <path
              d="M44.121 25.676V13.95c.316-.41.701-.718 1.154-.923a3.677 3.677 0 011.533-.308c.822 0 1.48.286 1.976.859.495.572.743 1.323.743 2.251v9.848h5.121v-10.56c0-.195-.005-.384-.016-.567a8.383 8.383 0 00-.047-.535c.337-.41.738-.729 1.201-.956.464-.226.98-.34 1.55-.34.821 0 1.48.286 1.975.859.495.572.743 1.323.743 2.251v9.848h5.121v-10.56c0-2.009-.606-3.661-1.817-4.957-1.212-1.296-2.767-1.944-4.663-1.944-1.096 0-2.108.206-3.035.616a6.956 6.956 0 00-2.403 1.75 6.042 6.042 0 00-2.134-1.734c-.853-.42-1.796-.632-2.829-.632-.78 0-1.523.12-2.229.357a6.264 6.264 0 00-1.944 1.069V8.539H39v17.137h5.121zM76.556 26c1.39 0 2.64-.205 3.746-.615 1.106-.41 2.186-1.07 3.24-1.977l-3.382-3.077c-.4.41-.885.729-1.455.956a5.082 5.082 0 01-1.896.34c-.97 0-1.813-.254-2.53-.762a4.508 4.508 0 01-1.58-1.96h11.918V17.61c0-1.34-.21-2.586-.632-3.742-.422-1.155-1.007-2.143-1.755-2.964a8.225 8.225 0 00-2.671-1.943c-1.033-.476-2.16-.713-3.383-.713a8.657 8.657 0 00-3.43.68 8.445 8.445 0 00-2.766 1.879 8.9 8.9 0 00-1.849 2.835 8.985 8.985 0 00-.68 3.482c0 1.23.237 2.392.712 3.482a8.93 8.93 0 001.928 2.835 8.776 8.776 0 002.893 1.879 9.404 9.404 0 003.572.68zm3.035-10.755h-6.987c.253-.864.685-1.533 1.296-2.008.612-.475 1.339-.713 2.182-.713.822 0 1.543.248 2.165.745.622.497 1.07 1.155 1.344 1.976zM95.365 26c1.391 0 2.64-.205 3.746-.615 1.107-.41 2.187-1.07 3.24-1.977l-3.382-3.077c-.4.41-.885.729-1.454.956a5.082 5.082 0 01-1.897.34c-.97 0-1.812-.254-2.529-.762a4.508 4.508 0 01-1.58-1.96h11.918V17.61c0-1.34-.211-2.586-.633-3.742-.421-1.155-1.006-2.143-1.754-2.964a8.225 8.225 0 00-2.671-1.943c-1.033-.476-2.16-.713-3.383-.713a8.657 8.657 0 00-3.43.68 8.445 8.445 0 00-2.766 1.879 8.9 8.9 0 00-1.85 2.835 8.985 8.985 0 00-.68 3.482c0 1.23.238 2.392.712 3.482a8.93 8.93 0 001.929 2.835 8.776 8.776 0 002.892 1.879 9.404 9.404 0 003.572.68zM98.4 15.245h-6.986c.253-.864.685-1.533 1.296-2.008.611-.475 1.338-.713 2.181-.713.822 0 1.544.248 2.166.745.621.497 1.07 1.155 1.343 1.976zm15.87 10.658c.484 0 1.085-.049 1.802-.146.716-.097 1.306-.221 1.77-.372V21.14c-.422.13-.811.221-1.17.275a7.639 7.639 0 01-1.138.081c-.822 0-1.396-.156-1.723-.47-.326-.313-.49-.847-.49-1.603v-6.511H118V8.539h-4.679V3l-5.12 1.134v4.405h-3.383v4.374h3.382v7.548c0 1.792.511 3.147 1.533 4.065 1.022.918 2.535 1.377 4.537 1.377z"
              fill="#28283D" fill-rule="nonzero"/>
          </g>
        </svg>
      </section>
    </header>
    <main>
      <section id="hero">
        <div class="hero-image">
          <picture>
            <source media="(min-width: 640px)" srcset="assets/meet-landing-page/desktop/image-hero-left.png" type="image/png"/>
            <img src="assets/meet-landing-page/tablet/image-hero.png" alt="hero-image-tablet"/>
          </picture>

          @if (innerWidth > 1440) {
            <ng-container *ngTemplateOutlet="heroTemplate"></ng-container>
          }
          <picture>
            <source media="(min-width: 640px)" srcset="assets/meet-landing-page/desktop/image-hero-right.png" type="image/png"/>
            <img src="assets/meet-landing-page/tablet/image-hero.png" alt="hero-image-tablet"/>
          </picture>
        </div>

        @if (innerWidth <= 1440) {
          <ng-container *ngTemplateOutlet="heroTemplate"></ng-container>
        }

        <ng-template #heroTemplate>
          <div class="hero-container">
            <h1>
              Group Chat for Everyone
            </h1>
            <p>
              Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
            </p>

            <div class="hero-buttons">
              <button class="btn btn-blue">Download <span class="version-blue">v1.3</span></button>
              <button class="btn btn-purple">What is it?</button>
            </div>
          </div>
        </ng-template>
      </section>

      <div class="circle-container">
        <div class="line"></div>
        <div class="circle">01</div>
      </div>

      <section id="content">
        <div class="image-content">
          <img src="assets/meet-landing-page/desktop/image-woman-in-videocall.jpg" alt="lu"/>
          <img src="assets/meet-landing-page/desktop/image-women-videochatting.jpg" alt="ru"/>
          <img src="assets/meet-landing-page/desktop/image-men-in-meeting.jpg" alt="ld"/>
          <img src="assets/meet-landing-page/desktop/image-man-texting.jpg" alt="rd"/>
        </div>

        <div class="text-content">
          <h3>Built for modern use</h3>
          <h2>Smarter meetings, all in one place</h2>
          <p>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
        </div>
      </section>
    </main>
    <footer>
      <div class="circle-container">
        <div class="line"></div>
        <div class="circle">02</div>
      </div>

      <picture>
        <source media="(min-width: 768px)" srcset="assets/meet-landing-page/desktop/image-footer.jpg" type="image/png"/>
        <source media="(min-width: 640px)" srcset="assets/meet-landing-page/tablet/image-footer.jpg" type="image/png"/>
        <img src="assets/meet-landing-page/mobile/image-footer.jpg" alt="footer-image"/>
      </picture>

      <h2>Experience more together</h2>

      <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>

      <button class="btn btn-purple">Download <span class="version-purple">v1.3</span></button>

    </footer>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');

    :host {
      --color-cyan-300: #8FE3F9;
      --color-cyan-400: #71C0D4;
      --color-cyan-600: #4D96A9;
      --color-purple-300: #D9B8FF;
      --color-purple-400: #B18BDD;
      --color-purple-600: #855FB1;
      --color-slate-900: #28283D;
      --color-slate-600: #87879D;
      --color-slate-300: #D1D1DF;
      --color-white: #FAFAFA;

      --spacing-50: 4px;
      --spacing-100: calc(var(--spacing-50) * 2);
      --spacing-200: calc(var(--spacing-50) * 4);
      --spacing-300: calc(var(--spacing-50) * 6);
      --spacing-400: calc(var(--spacing-50) * 8);
      --spacing-500: calc(var(--spacing-50) * 10);
      --spacing-700: calc(var(--spacing-50) * 14);
      --spacing-800: calc(var(--spacing-50) * 16);
      --spacing-900: calc(var(--spacing-50) * 18);
      --spacing-1000: calc(var(--spacing-50) * 20);
      --spacing-1400: calc(var(--spacing-50) * 28);

      --circle-distance: 110px;

      font-family: 'Red Hat Display', sans-serif;
      background-color: var(--color-white);
      display: block;
      width: 100%;
      overflow: hidden;
    }

    h1 {
      /* Text Preset 1 */
      font-size: 40px;
      font-weight: 900;
      line-height: 1.1;
      color: var(--color-slate-900);
    }

    h2 {
      /* Text Preset 2 */
      font-size: 32px;
      font-weight: 900;
      line-height: 1.1;
      color: var(--color-slate-900);
    }

    h3 {
      /* Text Preset 3 */
      font-size: 12px;
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--color-cyan-600);
    }

    p {
      /* Text Preset 4 */
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: var(--color-slate-600);

      max-width: 50ch;
    }

    /* Button */
    /* <editor-fold desc="Button"> */
    .btn {
      padding: var(--spacing-200) var(--spacing-500);
      border-radius: 30px;
      color: var(--color-white);
      font-size: 16px;
      font-weight: 900;
      line-height: 1.5;
      text-wrap: nowrap;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.5s;
      cursor: pointer;
    }

    .btn-blue {
      background-color: var(--color-cyan-600);
    }

    .btn-blue:hover {
      background-color: var(--color-cyan-400);
    }

    .btn-purple {
      background-color: var(--color-purple-600);
    }

    .btn-purple:hover {
      background-color: var(--color-purple-400);
    }

    .version-blue {
      color: var(--color-cyan-300);
    }

    .btn:hover .version-blue {
      color: var(--color-cyan-300);
    }

    .version-purple {
      color: var(--color-purple-300);
    }

    .btn:hover .version-purple {
      color: var(--color-purple-300);
    }

    /* </editor-fold> */

    /* Circle divider with number in it */
    /* <editor-fold desc="Circle Divider"> */
    .circle-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .circle-container .line {
      border: 1px solid var(--color-slate-300);
      height: var(--spacing-1000);
    }

    .circle-container .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--spacing-700);
      height: var(--spacing-700);
      border-radius: 100%;
      border: 2px solid var(--color-slate-300);
      font-size: 16px;
      font-weight: 900;
      color: var(--color-slate-600);
      line-height: 1.5;
      background-color: var(--color-white);
    }

    /* </editor-fold> */

    /* Content */
    /* <editor-fold desc="Content"> */
    header #logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-500) var(--spacing-1000) var(--spacing-800) var(--spacing-1000);
    }

    main #hero {
      padding-bottom: var(--spacing-500);
    }

    main #content {
      padding-top: var(--spacing-500);
    }

    main .hero-image {
      /*overflow: hidden;*/
    }

    main .hero-image {
      transform-origin: center;
      transform: scale(1.15);
    }

    main .hero-image img {
      transform: none;
    }

    main .hero-image picture:nth-child(2) {
      display: none;
    }

    main .hero-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 20px;
      padding: 5rem 3rem 2rem 3rem;
    }

    main .hero-container .hero-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      gap: 20px;
    }

    main .image-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: var(--spacing-200);
      padding: var(--spacing-400);
    }

    main .image-content img {
      max-width: 150px;
      border-radius: 10px;
    }

    main .text-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: var(--spacing-200);
      padding: var(--spacing-400);
    }

    footer {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: var(--spacing-800) var(--spacing-400);
      gap: var(--spacing-300);
      margin-top: var(--circle-distance);
    }

    footer::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(from var(--color-cyan-600) r g b / 0.8);
      pointer-events: none;
      /*z-index: 5;*/
    }

    footer picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }

    footer picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    footer .circle-container {
      position: absolute;
      top: calc(var(--circle-distance) * -1);
      left: 50%;
      transform: translateX(-50%);
    }

    footer > * {
      color: white;
      z-index: 10;
    }

    /* </editor-fold> */

    @media (min-width: 640px) {
      h1 {
        /* Text Preset 1 */
        font-size: 48px;
      }

      h2 {
        /* Text Preset 2 */
        font-size: 36px;
      }

      h3 {
        /* Text Preset 3 */
        font-size: 14px;
      }

      p {
        /* Text Preset 4 */
      }

      main .hero-image {
        display: flex;
        justify-content: space-between;
        transform: scale(1.05) !important;
      }

      main .hero-image picture:nth-child(2) {
        display: block !important;
      }

      main .hero-container {
        padding: 5rem 10rem 2rem 10rem;
      }

      main .hero-container .hero-buttons {
        flex-direction: row !important;
      }
    }

    @media (min-width: 880px) {
      main .image-content img {
        max-width: 180px;
      }
    }

    @media (min-width: 1024px) {
      h1 {
        /* Text Preset 1 */
        font-size: 64px;
      }

      h2 {
        /* Text Preset 2 */
        font-size: 40px;
      }

      h3 {
        /* Text Preset 3 */
        font-size: 16px;
      }

      p {
        /* Text Preset 4 */
        font-size: 18px;
      }

      main .image-content img {
        max-width: 200px;
      }

      footer {
        flex-direction: row;
        text-align: left;
        align-items: start;
        padding: var(--spacing-1000) var(--spacing-1400);
        gap: var(--spacing-500);
      }

      footer p {
        max-width: 400px;
      }
    }

    @media (min-width: 1440px) {
      main .image-content img {
        max-width: 270px;
      }

      main .hero-container {
        padding: 0;
      }
    }
  `
})
export class MeetLandingPage {
  innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.innerWidth = (event.target as Window).innerWidth;
  }
}
