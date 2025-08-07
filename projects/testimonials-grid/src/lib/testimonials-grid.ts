import { Component } from '@angular/core';

@Component({
  selector: 'lib-testimonials-grid',
  imports: [],
  template: `
    <div class="wrapper">
      <div class="grid-daniel">

        <div class="top-part">
          <img class="profile-img" src="assets/testimonials-grid/images/image-daniel.jpg" alt="avatar">
          <div class="title">
            <div class="name text-preset-2">Daniel Clifford</div>
            <div class="grad text-preset-4">Verified Graduate</div>
          </div>
        </div>

        <img class="quote" src="assets/testimonials-grid/images/bg-pattern-quotation.svg" alt="quote">

        <div class="content upper-content text-preset-1">
          <p>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
          </p>
        </div>

        <div class="content lower-content text-preset-3">
          <p>
            “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </div>

      <div class="grid-jonathan">
        <div class="top-part">
          <img class="profile-img" src="assets/testimonials-grid/images/image-jonathan.jpg" alt="avatar">
          <div class="title">
            <div class="name text-preset-2">Jonathan Walters</div>
            <div class="grad text-preset-4">Verified Graduate</div>
          </div>
        </div>

        <div class="content upper-content text-preset-1">
          <p>
            The team was very supportive and kept me motivated
          </p>
        </div>

        <div class="content lower-content text-preset-3">
          <p>
            “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “
          </p>
        </div>
      </div>

      <div class="grid-kira">
        <div class="top-part">
          <img class="profile-img" src="assets/testimonials-grid/images/image-jeanette.jpg" alt="avatar">
          <div class="title">
            <div class="name text-preset-2">Jeanette Harmon</div>
            <div class="grad text-preset-4">Verified Graduate</div>
          </div>
        </div>

        <div class="content upper-content text-preset-1">
          <p>
            An overall wonderful and rewarding experience
          </p>
        </div>

        <div class="content lower-content text-preset-3">
          <p>
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
      </div>


      <div class="grid-patrick">
        <div class="top-part">
          <img class="profile-img" src="assets/testimonials-grid/images/image-patrick.jpg" alt="avatar">
          <div class="title">
            <div class="name text-preset-2">Patrick Abrams</div>
            <div class="grad text-preset-4">Verified Graduate</div>
          </div>
        </div>

        <div class="content upper-content text-preset-1">
          <p>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
          </p>
        </div>

        <div class="content lower-content text-preset-3">
          <p>
            “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
          </p>
        </div>
      </div>

      <div class="grid-jeanette">
        <div class="top-part">
          <img class="profile-img" src="assets/testimonials-grid/images/image-kira.jpg" alt="avatar">
          <div class="title">
            <div class="name text-preset-2">Kira Whittle</div>
            <div class="grad text-preset-4">Verified Graduate</div>
          </div>
        </div>

        <div class="content upper-content text-preset-1">
          <p>
            Such a life-changing experience. Highly recommended!
          </p>
        </div>

        <div class="content lower-content text-preset-3">
          <p>
            “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
          </p>
        </div>
      </div>
    </div>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    :host {
      --black: #121212;
      --white: #fff;
      --dark-blue: #19202d;
      --grey-100: #e7eaee;
      --grey-200: #cfcfcf;
      --grey-400: #676d7e;
      --grey-500: #48556a;
      --purple-50: #ede4ff;
      --purple-300: #a775f1;
      --purple-500: #733fc8;

      --spacing-500: 40px;
      --spacing-400: 32px;
      --spacing-300: 24px;
      --spacing-200: 16px;
      --spacing-100: 8px;
      --spacing-50: 4px;

      font-family: 'Barlow Semi Condensed';
    }

    .text-preset-1 {
      font-size: 20px;
      line-height: 120%;
      letter-spacing: 0;
      font-weight: 600;
    }

    .text-preset-2 {
      font-size: 13px;
      line-height: 110%;
      letter-spacing: 0;
      font-weight: 500;
    }

    .text-preset-3 {
      font-size: 13px;
      line-height: 140%;
      letter-spacing: 0;
      font-weight: 500;
    }

    .text-preset-4 {
      font-size: 11px;
      line-height: 110%;
      letter-spacing: 0;
      font-weight: 500;
    }

    /* === Grids === */

    .grid-daniel, .grid-jonathan, .grid-jeanette, .grid-kira, .grid-patrick {
      padding: var(--spacing-400);
      border-radius: var(--spacing-100);
      box-shadow: 40px 60px 50px -47px rgba(72, 85, 106, 0.25);
    }

    .grid-daniel {
      background-color: var(--purple-500);
      grid-area: grid-1;
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200);
      position: relative;
    }

    .grid-daniel .quote {
      position: absolute;
      top: 10px;
      right: 20px;
      z-index: 0;
    }

    .grid-daniel .profile-img {
      border: 2px solid var(--purple-300);
    }

    .grid-daniel .name {
      color: var(--white);
    }

    .grid-daniel .grad {
      color: var(--purple-50);
    }

    .grid-daniel .upper-content {
      color: var(--white);
    }

    .grid-daniel .lower-content {
      color: var(--purple-50);
    }

    .grid-jonathan {
      background-color: var(--grey-500);
      grid-area: grid-2;
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200);
    }

    .grid-jonathan .name {
      color: var(--white);
    }

    .grid-jonathan .grad {
      color: var(--grey-100);
    }

    .grid-jonathan .upper-content {
      color: var(--white);
    }

    .grid-jonathan .lower-content {
      color: var(--grey-100);
    }

    .grid-jeanette {
      background-color: var(--white);
      grid-area: grid-3;
      color: var(--grey-500);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200);
    }

    .grid-jeanette .name {
      color: var(--grey-500);
    }

    .grid-jeanette .grad {
      color: var(--grey-400);
    }

    .grid-jeanette .upper-content {
      color: var(--grey-500);
    }

    .grid-jeanette .lower-content {
      color: var(--grey-400);
    }

    .grid-kira {
      background-color: var(--white);
      grid-area: grid-4;
      color: var(--grey-500);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200);
    }

    .grid-kira .name {
      color: var(--grey-500);
    }

    .grid-kira .grad {
      color: var(--grey-400);
    }

    .grid-kira .upper-content {
      color: var(--grey-500);
    }

    .grid-kira .lower-content {
      color: var(--grey-400);
    }

    .grid-patrick {
      background-color: var(--dark-blue);
      grid-area: grid-5;
      color: var(--white);
      display: flex;
      flex-direction: column;
      gap: var(--spacing-200);
    }

    .grid-patrick .name {
      color: var(--white);
    }

    .grid-patrick .grad {
      color: var(--white);
    }

    .grid-patrick .upper-content {
      color: var(--grey-200);
    }

    .grid-patrick .lower-content {
      color: var(--grey-100);
    }

    .grid-patrick .profile-img {
      border: 2px solid var(--purple-500);
    }

    /* --- */

    .content {
      z-index: 1;
    }

    .top-part {
      display: flex;
      flex-direction: row;
      gap: var(--spacing-200);
    }

    .title {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-50);
      z-index: 1;
    }

    .profile-img {
      border-radius: 50%;
      width: 28px;
      height: 28px;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-400);
      background-color: #f6f6f6;
      color: #444;
      padding: var(--spacing-400);
    }

    @media (min-width: 768px) {
      /* Tablet */
      .wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: auto auto;
        grid-template-areas:
        "grid-1 grid-1"
        "grid-2 grid-4"
        "grid-5 grid-5"
        "grid-3 grid-3";
        background-color: #f6f6f6;
        color: #444;
      }
    }

    @media (min-width: 1024px) {
      /* Desktop */
      .wrapper {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: auto auto auto auto;
        grid-template-areas:
        "grid-1 grid-1 grid-2 grid-3"
        "grid-4 grid-5 grid-5 grid-3";
        background-color: #f6f6f6;
        color: #444;
        max-width: 1200px;
      }
    }
  `
})
export class TestimonialsGrid {

}
