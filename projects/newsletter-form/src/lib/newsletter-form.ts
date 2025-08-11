import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-newsletter-form',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  template: `
    <div class="bg-white w-full h-auto flex flex-col lg:flex-row-reverse text-blue-8">
      <div class="pb-5 sm:p-5">
        <picture>
          <source media="(min-width: 1024px)" srcset="assets/newsletter-form/images/illustration-sign-up-desktop.svg" type="image/svg+xml" />
          <source media="(min-width: 640px)" srcset="assets/newsletter-form/images/illustration-sign-up-tablet.svg" type="image/svg+xml" />
          <img src="assets/newsletter-form/images/illustration-sign-up-mobile.svg"
               alt="sign up"
               width="375"
               height="284"
               class="w-full h-auto" priority />
        </picture>
      </div>

      <section class="px-5 pb-10 flex flex-col gap-10 lg:justify-center">
        <h1 class="text-5xl tracking-tighter font-extrabold">Stay updated!</h1>

        <div class="text-base leading-6 font-medium space-y-5">
          <p>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul class="space-y-3">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>

        <form [formGroup]="nlForm" (ngSubmit)="onSubmit()" class="flex flex-col">
          <div class="flex justify-between h-full font-extrabold text-xs mb-1 px-1">
            <label for="emailInp">Email address</label>
            @if (hasError('email')) {
              <span class="text-red">Valid email required</span>
            }
          </div>
          <input id="emailInp"
                 type="email"
                 name="email"
                 formControlName="email"
                 class="px-5 py-3 border-1 border-blue-8 w-full text-base leading-6 text-blue-8 rounded-xl focus:outline-none focus:border-blue-8"
                 [ngClass]="{ 'error-input': hasError('email') }"
                 email
          />
          <button type="submit"
                  class="px-5 py-4 text-white rounded-xl text-base leading-7 font-bold w-full mt-2 bg-blue-8 disabled:cursor-not-allowed
                  hover:bg-linear-to-r hover:from-red hover:to-pink hover:cursor-pointer"
                  [disabled]="this.nlForm.invalid"
          > Subscribe to monthly newsletter
          </button>
        </form>
      </section>


    </div>
  `,
  styleUrl: './newsletter-form.css',
  styles: `
    li {
      /* Base-64 of assets/newsletter-form/images/icon-list.svg */
      list-style-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTAuNSIgcj0iMTAuNSIgZmlsbD0iI0ZGNjE1NSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNiAxMS4zODEgOC43MzUgMTQgMTUgOCIvPjwvZz48L3N2Zz4=');
      list-style-position: inside;
    }
  `
})
export class NewsletterForm {
  private _fb: FormBuilder = inject(FormBuilder);
  private _router = inject(Router);

  nlForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  hasError(formControlName?: string) {
    if (!formControlName) {
      return this.nlForm.invalid;
    }
    return this.nlForm.get(formControlName)?.invalid && this.nlForm.get(formControlName)?.touched && this.nlForm.get(formControlName)?.dirty;
  }

  onSubmit() {
    this._router.navigate(['newsletter-form', 'success']).then();
  }
}
