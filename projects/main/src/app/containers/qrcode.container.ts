import { Component } from '@angular/core';
import { Qrcode } from 'qrcode';

@Component({
  standalone: true,
  imports: [Qrcode],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle bg-slate-300">
      <lib-qrcode></lib-qrcode>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: var(--color-slate-300);
      overflow: auto;
      box-sizing: border-box;
      padding: 1rem;
    }
  `]
})
export class QrcodeContainer {
}
