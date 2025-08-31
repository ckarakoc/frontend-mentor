import { Component, computed, ElementRef, inject, linkedSignal, OnDestroy, OnInit, Renderer2, signal, viewChild } from '@angular/core';
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

      <!-- Password -->
      <div class="text-preset-2 text-gray-200 bg-gray-800 p-4">
        <input class="placeholder:text-gray-700 outline-none "
               type="text"
               name="password"
               [value]="password()"
               placeholder="P4$5W0rD!" readonly>
        <button class="relative text-preset-2 text-gray-200 bg-gray-800 fill-green hover:fill-gray-200 hover:cursor-pointer active:fill-gray-200" (click)="onPressCopy()">
          <div class="absolute -left-16 top-1 text-preset-4 text-green" [class.hidden]="!pressedCopy()">COPIED</div>
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
            <div class="text-preset-2 text-green">{{ pwdLength() }}</div>
          </div>
          <input #pwdLengthSlider
                 type="range" [min]="min" [max]="max" name="pwdLengthSlider"
                 [ngModel]="pwdLength()"
                 (ngModelChange)="onSliderChange(+$event)">
        </div>

        <!-- Checkboxes -->
        <div class="flex flex-col items-start gap-5 text-preset-4">
          <div class="flex items-center gap-5">
            <input type="checkbox" id="uppercaseCheckbox" name="uppercaseCheckbox" [checked]="uppercaseChecked()" (change)="uppercaseChecked.set(!uppercaseChecked())">
            <label for="uppercaseCheckbox">Include Uppercase Letters</label>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox" id="lowercaseCheckbox" name="lowercaseCheckbox" [checked]="lowercaseChecked()" (change)="lowercaseChecked.set(!lowercaseChecked())">
            <label for="lowercaseCheckbox">Include Lowercase Letters</label>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox" id="numberCheckbox" name="numberCheckbox" [checked]="numbersChecked()" (change)="numbersChecked.set(!numbersChecked())">
            <label for="numberCheckbox">Include Numbers</label>
          </div>
          <div class="flex items-center gap-5">
            <input type="checkbox" id="symbolCheckbox" name="symbolCheckbox" [checked]="symbolsChecked()" (change)="symbolsChecked.set(!symbolsChecked())">
            <label for="symbolCheckbox">Include Symbols</label>
          </div>
        </div>

        <!-- Password Strength Indicator -->
        <div class="text-preset-4 text-gray-600 bg-gray-850 p-4 flex justify-between items-center">
          <div>{{ 'strength' | uppercase }}</div>
          <div class="flex gap-3 items-center">
            @if (pwdStrength() >= 3) {
              <span class="text-preset-3">{{ pwdStrengthTxt() | uppercase }}</span>
            }
            <div class="flex gap-1 items-center">
              <div class="  w-2.5 h-6 border-2 {{pwdStrength() < 3 ? 'bg-gray-850 border-gray-200' : 'border-' + pwdStrengthColor() + ' bg-' + pwdStrengthColor() }}"></div>
              <div class="  w-2.5 h-6 border-2 {{pwdStrength() < 28 ? 'bg-gray-850 border-gray-200' : 'border-' + pwdStrengthColor() + ' bg-' + pwdStrengthColor() }}"></div>
              <div class="  w-2.5 h-6 border-2 {{pwdStrength() < 36 ? 'bg-gray-850 border-gray-200' : 'border-' + pwdStrengthColor() + ' bg-' + pwdStrengthColor() }}"></div>
              <div class="  w-2.5 h-6 border-2 {{pwdStrength() < 59 ? 'bg-gray-850 border-gray-200' : 'border-' + pwdStrengthColor() + ' bg-' + pwdStrengthColor() }}"></div>
            </div>
          </div>
        </div>

        <button class="bg-green text-gray-800 fill-gray-800 border-2 border-green flex justify-center items-center p-4 gap-2 hover:fill-green hover:text-green hover:bg-gray-850 hover:cursor-pointer transition-all duration-300"
                type="submit"
                (click)="onSubmit()"
        >
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
      /*background: var(--color-gray-850, #18171F);*/
      border-radius: 5px;
      outline: none;
    }

    /* Track (the bar) */
    input[type="range"]::-webkit-slider-runnable-track {
      height: 6px;
      /*background: red;*/
      border-radius: 5px;
    }

    input[type="range"]::-moz-range-track {
      height: 6px;
      /*background: red;*/
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
export class PwdGenerator implements OnInit, OnDestroy {
  private lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  private uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  private numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  private symbols = ['!', '@', '#', '$', '%', '&'];
  uppercaseChecked = signal<boolean>(false);
  lowercaseChecked = signal<boolean>(false);
  numbersChecked = signal<boolean>(false);
  symbolsChecked = signal<boolean>(false);

  password = signal<string | null>(null);
  pwdLength = linkedSignal<number>(() => 0);
  pwdStrengthColor = computed<'red' | 'orange' | 'yellow' | 'green'>(() => {
    if (this.pwdStrengthTxt() === 'too weak!') {
      return 'red';
    } else if (this.pwdStrengthTxt() === 'weak') {
      return 'orange';
    } else if (this.pwdStrengthTxt() === 'medium') {
      return 'yellow';
    } else {
      return 'green';
    }
  });
  pwdStrengthTxt = computed<'too weak!' | 'weak' | 'medium' | 'strong'>(() => {
    if (this.pwdStrength() < 28) {
      return 'too weak!';
    } else if (this.pwdStrength() < 36) {
      return 'weak';
    } else if (this.pwdStrength() < 59) {
      return 'medium';
    } else {
      return 'strong';
    }
  });
  pwdStrength = computed(() => {
    return this.pwdLength() *
      Math.log2(1 +
        (this.lowercaseChecked() ? this.lowercase.length : 0) +
        (this.uppercaseChecked() ? this.uppercase.length : 0) +
        (this.numbersChecked() ? this.numbers.length : 0) +
        (this.symbolsChecked() ? this.symbols.length : 0));
  });
  pressedCopy = signal<boolean>(false);

  pwdLengthSlider = viewChild<ElementRef>('pwdLengthSlider');

  private renderer = inject(Renderer2);
  min: number = 0;
  max: number = 20;

  ngOnInit() {
    this.renderer.setStyle(this.pwdLengthSlider()?.nativeElement, 'background', '#18171F');
  }

  ngOnDestroy() {
    this.renderer.destroy();
  }

  onPressCopy() {
    this.pressedCopy.set(true);
    setTimeout(() => {
      this.pressedCopy.set(false);
    }, 5000);

    navigator.clipboard.writeText(this.password() ?? '').then(() => {
      console.log('Copied:', this.password() ?? '');
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  }

  onSubmit() {
    let pwd = this.generatePwd();
    if (pwd) this.password.set(pwd);
    else this.password.set(null);
  }

  onSliderChange(v: number) {
    const value = (v - this.min) / (this.max - this.min) * 100;
    this.pwdLength.set(v);
    this.renderer.setStyle(this.pwdLengthSlider()?.nativeElement, 'background', 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #18171F ' + value + '%, #18171F 100%)');
  }

  private generatePwd() {
    let allowedChars: string[] = [];
    if (this.lowercaseChecked()) {
      allowedChars = allowedChars.concat(this.lowercase);
    }
    if (this.uppercaseChecked()) {
      allowedChars = allowedChars.concat(this.uppercase);
    }
    if (this.numbersChecked()) {
      allowedChars = allowedChars.concat(this.numbers);
    }
    if (this.symbolsChecked()) {
      allowedChars = allowedChars.concat(this.symbols);
    }

    let pwd: string = '';
    for (let i = 0; i < this.pwdLength(); i++) {
      pwd += allowedChars[Math.floor(Math.random() * allowedChars.length)];
    }
    return pwd;
  }
}
