import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'lib-pwd-generator',
  imports: [
    FormsModule,
    UpperCasePipe
  ],
  template: `
    <div class="flex flex-col gap-2">
      <!-- Title -->
      <div class="text-preset-4 self-center text-gray-600">Password Generator</div>

      <!-- todo: wrap in form -->
      <!-- <form ></form> -->

      <!-- Password -->
      <div class="text-preset-2 text-gray-200 bg-gray-800 p-4">
        <input class="placeholder:text-gray-700 outline-none "
               type="text"
               placeholder="P4$5W0rD!" readonly>
        <button class="relative text-preset-2 text-gray-200 bg-gray-800 fill-green hover:fill-gray-200 hover:cursor-pointer active:fill-gray-200" (click)="onPressCopy()">
          <div class="absolute -left-16 top-1 text-preset-4 text-green" [class.hidden]="pressedCopy()">COPIED</div>
          <svg width="21" height="24">
            <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
          </svg>
        </button>
      </div>

      <!-- Options -->
      <div class="text-preset-4 text-gray-200 bg-gray-800 p-4 flex flex-col gap-6">

        <!-- Char Length slider -->
        <div class="flex flex-col gap-6">
          <div class="flex justify-between">
            <div>Character Length</div>
            <div class="text-preset-2 text-green">{{ pwdLength }}</div>
          </div>
          <input type="range" min="0" max="20" [(ngModel)]="pwdLength">
        </div>

        <!-- Checkboxes -->
        <div class="flex flex-col items-start gap-5 text-preset-4">
          <div class="flex items-center gap-5">
            <input type="checkbox">
            <div>Include Uppercase Letters</div>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox">
            <div>Include Lowercase Letters</div>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox">
            <div>Include Numbers</div>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox">
            <div>Include Symbols</div>
          </div>
        </div>

        <div class="text-preset-4 text-gray-600 bg-gray-850 p-4 flex justify-between items-center">
          <div>{{ 'strength' | uppercase }}</div>
          <div class="flex gap-3 items-center">

            <span class="text-preset-3">{{ pwdStrength() | uppercase }}</span>
            <div class="flex gap-1 items-center">
              <!-- todo: preload tailwind colors yellow, orange and red. Change of active state with variable active:bg-color.  -->
              <div class="bg-gray-850 w-2.5 h-6 border-2 border-white"></div>
              <div class="bg-gray-850 w-2.5 h-6 border-2 border-white"></div>
              <div class="bg-gray-850 w-2.5 h-6 border-2 border-white"></div>
              <div class="bg-gray-850 w-2.5 h-6 border-2 border-white"></div>
            </div>
          </div>
        </div>

        <button class="bg-green text-gray-800 fill-gray-800 border-2 border-green flex justify-center items-center p-4 gap-2 hover:fill-green hover:text-green hover:bg-gray-850 hover:cursor-pointer transition-all duration-300" type="submit">
          <div class="text-preset-4">{{ 'generate' | uppercase }}</div>
          <div>
            <svg width="12" height="12">
              <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
          </div>
        </button>

      </div>

    </div>
  `,
  styleUrl: `./pwd-generator.css`,
  styles: `
    /* Styling slider */
    input[type="range"] {
      -webkit-appearance: none; /* remove default style */
      appearance: none;
      width: 100%;
      height: 6px;
      background: var(--color-gray-850, #18171F);
      border-radius: 5px;
      outline: none;
    }

    /* Track (the bar) */
    input[type="range"]::-webkit-slider-runnable-track {
      height: 6px;
      background: red;
      border-radius: 5px;
    }

    input[type="range"]::-moz-range-track {
      height: 6px;
      background: red;
      border-radius: 5px;
    }

    /* Thumb (the handle) */
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 28px;
      height: 28px;
      background: var(--color-gray-200, #E6E5EA);
      border: 2px solid var(--color-gray-200, #E6E5EA);
      border-radius: 50%;
      cursor: pointer;
      margin-top: -12px; /* align thumb with track */
      transition: 0.2s;
    }

    input[type="range"]::-webkit-slider-thumb:hover,
    input[type="range"]::-webkit-slider-thumb:active,
    input[type="range"]::-webkit-slider-thumb:focus {
      background: var(--color-gray-850, #18171F);
      border: 2px solid var(--color-green, #A4FFAF);
    }

    input[type="range"]::-moz-range-thumb {
      appearance: none;
      width: 28px;
      height: 28px;
      background: var(--color-gray-200, #E6E5EA);
      border: 2px solid var(--color-gray-200, #E6E5EA);
      border-radius: 50%;
      cursor: pointer;
      margin-top: -12px; /* align thumb with track */
      transition: 0.2s;
    }

    input[type="range"]::-moz-range-thumb:hover,
    input[type="range"]::-moz-range-thumb:active,
    input[type="range"]::-moz-range-thumb:focus {
      background: var(--color-gray-850, #18171F);
      border: 2px solid var(--color-green, #A4FFAF);
    }

    /* Styling Checkboxes */
    /* Hide the default checkbox visually but keep it accessible */
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 17px;
      height: 17px;
      border: 2px solid var(--color-gray-200, #E6E5EA);
      border-radius: 0;
      background-color: var(--color-gray-950, #08070B);
      cursor: pointer;
      position: relative;
      transition: all 0.1s ease;
    }

    @media (hover: hover) and (pointer: fine) {
      input[type="checkbox"]:hover {
        border-color: var(--color-green, #A4FFAF);
      }
    }

    input[type="checkbox"]:checked {
      background-color: var(--color-green, #A4FFAF);
      border-color: var(--color-green, #A4FFAF);
    }

    input[type="checkbox"]:checked::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 0px;
      width: 6px;
      height: 12px;
      border: solid black;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    input[type="checkbox"]:disabled {
      background-color: var(--color-gray-200, #E6E5EA);
      border-color: var(--color-gray-600, #817D92);
      cursor: not-allowed;
    }
  `
})
export class PwdGenerator {
  pwdLength: number = 0;
  pwdStrength = signal<'too weak!' | 'weak' | 'medium' | 'strong'>('medium');
  pressedCopy = signal<boolean>(true);

  onPressCopy() {
    this.pressedCopy.set(false);
    setTimeout(() => {
      this.pressedCopy.set(true);
    }, 5000);
  }
}
