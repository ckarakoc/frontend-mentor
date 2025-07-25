import { Component } from '@angular/core';
import { Qrcode } from 'qrcode';

@Component({
  standalone: true,
  imports: [Qrcode],
  template: `
    <lib-qrcode class="flex h-screen w-screen flex-col items-center justify-center bg-slate-300"></lib-qrcode>
  `
})
export class QrcodeContainer {
}
