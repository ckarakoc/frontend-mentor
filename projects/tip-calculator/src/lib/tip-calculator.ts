import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-tip-calculator',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe,
    NgClass
  ],
  template: `
    <div class="flex flex-col justify-center items-center bg-tip-gray-100 min-h-screen sm:h-fit sm:px-10">
      <div class="py-10">
        <svg width="87" height="54">
          <path fill="#3D6666"
                d="M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 001.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 01-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 01-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 00-.396-1.968 4.762 4.762 0 00-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 001.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 001.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 001.596-1.14 4.833 4.833 0 00.96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 00-.96-1.56A4.737 4.737 0 0034.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 00.552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 00-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z" />
        </svg>
      </div>

      <form class="bg-white flex flex-col rounded-t-xl w-full h-full p-8 gap-10 sm:rounded-b-xl lg:flex-row"
            [formGroup]="form"
            (ngSubmit)="onSubmit()"
      >
        <div class="flex flex-col gap-10 h-full w-full">
          <!-- Bill -->
          <div class="flex flex-col gap-2">
            <label for="bill-input" class="text-preset-5 text-tip-gray-400">
              Bill
            </label>
            <div class="flex items-center p-2 bg-tip-gray-50 text-tip-green-900 text-preset-3 ring-2 ring-tip-gray-50 hover:ring-tip-green-400 hover:rounded-lg focus-within:rounded-lg focus-within:ring-tip-green-400 hover:cursor-pointer">
              <div class="fill-tip-gray-200 px-2">
                <svg width="11" height="17">
                  <path
                    d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" />
                </svg>
              </div>
              <input class="grow text-right placeholder:text-tip-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                     type="number"
                     placeholder="0"
                     name="bill-input"
                     id="bill-input"
                     min="0"
                     formControlName="bill"
                     (keydown)="onRestrictedKeydown($event, true)"
              >
            </div>
          </div>

          <!-- Select Tips -->
          <div class="flex flex-col gap-2">
            <span class="text-preset-5 text-tip-gray-400">Select Tip %</span>
            <div class="grid grid-cols-2 gap-4 text-white text-preset-3 sm:grid-cols-3">
              <div class="min-w-36">
                <input type="radio"
                       formControlName="tip"
                       name="tip"
                       id="tip-5"
                       value="5"
                       class="peer hidden" />
                <label for="tip-5"
                       class="bg-tip-green-900 peer-checked:bg-tip-green-400 rounded-lg p-2 text-center cursor-pointer block hover:bg-tip-green-200">
                  5%
                </label>
              </div>
              <div>
                <input type="radio"
                       formControlName="tip"
                       name="tip"
                       id="tip-10"
                       value="10"
                       class="peer hidden" />
                <label for="tip-10"
                       class="bg-tip-green-900 peer-checked:bg-tip-green-400 rounded-lg p-2 text-center cursor-pointer block hover:bg-tip-green-200">
                  10%
                </label>
              </div>
              <div>
                <input type="radio"
                       formControlName="tip"
                       name="tip"
                       id="tip-15"
                       value="15"
                       class="peer hidden" />
                <label for="tip-15"
                       class="bg-tip-green-900 peer-checked:bg-tip-green-400 rounded-lg p-2 text-center cursor-pointer block hover:bg-tip-green-200">
                  15%
                </label>
              </div>
              <div>
                <input type="radio"
                       formControlName="tip"
                       name="tip"
                       id="tip-25"
                       value="25"
                       class="peer hidden" />
                <label for="tip-25"
                       class="bg-tip-green-900 peer-checked:bg-tip-green-400 rounded-lg p-2 text-center cursor-pointer block hover:bg-tip-green-200">
                  25%
                </label>
              </div>
              <div>
                <input type="radio"
                       formControlName="tip"
                       name="tip"
                       id="tip-50"
                       value="50"
                       class="peer hidden" />
                <label for="tip-50"
                       class="bg-tip-green-900 peer-checked:bg-tip-green-400 rounded-lg p-2 text-center cursor-pointer block hover:bg-tip-green-200">
                  50%
                </label>
              </div>
              <div class="relative">
                <input type="number"
                       formControlName="customTip"
                       name="customTip"
                       id="customTip"
                       (input)="clearRadioTip()"
                       [min]="customTipMin"
                       [max]="customTipMax"
                       placeholder="Custom"
                       class="bg-tip-gray-50 text-tip-gray-500 peer-checked:bg-tip-green-100 checked:text-tip-green-900 w-full rounded-lg p-2 pr-8 text-center cursor-pointer block  outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-tip-gray-500 pointer-events-none">%</span>
              </div>
            </div>
          </div>

          <!-- Number of People -->
          <div class="flex flex-col gap-2">
            <div class="flex justify-between">
              <label for="people-input" class="text-preset-5 text-tip-gray-400">
                Number of People
              </label>
              <div class="text-preset-5 text-tip-orange"
                   [ngClass]="{'hidden': !form.controls['people'].hasError('min') }"> Can't be zero
              </div>
            </div>
            <div class="flex items-center p-2 bg-tip-gray-50 text-tip-green-900 text-preset-3 ring-2 ring-tip-gray-50 hover:ring-tip-green-400 hover:rounded-lg focus-within:rounded-lg focus-within:ring-tip-green-400 hover:cursor-pointer"
                 [ngClass]="{ 'ring-tip-orange rounded-lg hover:ring-tip-orange focus-within:ring-tip-orange': form.controls['people'].hasError('min') }"
            >
              <div class="fill-tip-gray-200 px-2">
                <svg width="13" height="16">
                  <path d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" />
                </svg>
              </div>
              <input class="grow text-right placeholder:text-tip-gray-200 outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                     type="number"
                     placeholder="0"
                     name="people-input"
                     id="people-input"
                     min="0"
                     formControlName="people"
                     (keydown)="onRestrictedKeydown($event, false)"
              >
            </div>
          </div>
        </div>
        <!-- Card -->
        <div class="flex flex-col gap-5 justify-between bg-tip-green-900 rounded-2xl p-8 lg:min-w-md">
          <div class="flex flex-col gap-5">
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-preset-5 text-white">Tip Amount</span>
                <span class="text-preset-6 text-tip-gray-200">/ person</span>
              </div>
              <div>
                <span class="text-preset-2 text-tip-green-400">{{ calculatedTip() | currency:'USD' }}</span>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="text-preset-5 text-white">Total</span>
                <span class="text-preset-6 text-tip-gray-200">/ person</span>
              </div>
              <div>
                <span class="text-preset-2 text-tip-green-400">{{ calculatedTotal() | currency:'USD' }}</span>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button type="submit"
                  [disabled]="form.invalid"
                  class="text-preset-4 bg-tip-green-400 text-tip-green-900 py-2 rounded-lg w-full hover:bg-tip-green-200 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-tip-green-400">
            RESET
          </button>
        </div>

      </form>

    </div>
  `,
  styleUrl: `./tip-calculator.css`
})
export class TipCalculator implements OnInit, OnDestroy {

  fb = inject(FormBuilder);

  form = this.fb.group({
    bill: this.fb.control<number | null>(null, Validators.required),
    people: this.fb.control<number | null>(null, [Validators.required, Validators.min(1)]),
    tip: this.fb.control<number | null>(null),
    customTip: this.fb.control<number | null>(null)
  }, { validators: [this.atLeastOneTipValidator] });

  private tipSub!: Subscription;
  private customTipSub!: Subscription;
  private billSub!: Subscription;
  private peopleSub!: Subscription;
  customTipMin = 0;
  customTipMax = 500;

  ngOnInit(): void {
    this.tipSub = this.form.controls.tip.valueChanges.subscribe((val) => {
      if (!val) return;
      return this.form.patchValue({ customTip: null });
    });
    this.customTipSub = this.form.controls.customTip.valueChanges.subscribe((val) => {
      if (!val) return;
      if (val < this.customTipMin) return this.form.patchValue({ customTip: this.customTipMin });
      if (val > this.customTipMax) return this.form.patchValue({ customTip: this.customTipMax });
    });
    this.billSub = this.form.controls.bill.valueChanges.subscribe((val) => {
      if (!val) return;
      if (val < 0) return this.form.patchValue({ bill: 0 });
      return this.form.patchValue({ bill: Number((val).toFixed(2)) });
    });
    this.peopleSub = this.form.controls.people.valueChanges.subscribe((val) => {
      if (!val) return;
      if (val < 0) return this.form.patchValue({ people: 0 });
      return this.form.patchValue({ people: Math.floor(val) });
    });
  }

  ngOnDestroy() {
    this.tipSub?.unsubscribe();
    this.customTipSub?.unsubscribe();
    this.billSub?.unsubscribe();
    this.peopleSub?.unsubscribe();
  }

  onRestrictedKeydown(event: KeyboardEvent, allowDecimal = false): void {
    const invalidChars = allowDecimal ? ['+', '-', 'e', 'E'] : ['+', '-', 'e', 'E', '.'];

    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  }

  private atLeastOneTipValidator(group: AbstractControl): ValidationErrors | null {
    const tip = group.get('tip')?.value;
    const tipInp = group.get('customTip')?.value;

    if (!tip && !tipInp) {
      return { atLeastOneTipRequired: true };
    }
    return null;
  }

  calculatedTip(): number {
    const { bill, people, tip, customTip } = this.form.value;
    if (!bill || !people || (!tip && !customTip) || (tip && customTip)) return 0;
    if (tip)
      return (bill * (tip / 100)) / people;
    if (customTip)
      return (bill * (customTip / 100)) / people;
    return -1; //should not be reached
  }

  calculatedTotal(): number {
    const { bill, people, tip, customTip } = this.form.value;
    if (!bill || !people || (!tip && !customTip) || (tip && customTip)) return 0;
    if (tip)
      return (bill + bill * (tip / 100)) / people;
    if (customTip)
      return (bill + bill * (customTip / 100)) / people;
    return -1; //should not be reached
  }

  clearRadioTip() {
    this.form.patchValue({
      tip: null
    });
  }

  onSubmit() {
    this.form.reset();
  }
}
