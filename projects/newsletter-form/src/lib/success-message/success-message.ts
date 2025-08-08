import { Component } from '@angular/core';

@Component({
  selector: 'lib-success-message',
  imports: [],
  template: `
    <div class="bg-white flex flex-col p-10 gap-10 h-full w-full justify-between">
      <section class="flex flex-col gap-10 justify-center h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF6A3A" />
              <stop offset="100%" stop-color="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285" />
          </g>
        </svg>

        <h1 class="text-4xl font-bold break-all">Thanks for <br>subscribing!</h1>
        <p class="break-words max-w-[50ch]">A confirmation email has been sent to <span class="font-bold">ash&commat;loremcompany.com</span>. Please open it and click the button inside to confirm your subscription</p>
      </section>

      <button type="submit"
              class="px-5 py-4 text-white rounded-xl text-base leading-7 font-bold w-full mt-2 disabled:cursor-not-allowed
                  hover:bg-linear-to-r hover:from-red hover:to-pink bg-blue-8 hover:cursor-pointer"
      >Dismiss message
      </button>

    </div>
  `,
  styleUrl: '../newsletter-form.css',
  styles: ``
})
export class SuccessMessage {

}
