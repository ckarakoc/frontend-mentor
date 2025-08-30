import { Component } from '@angular/core';
import { PwdGenerator } from 'pwd-generator';

@Component({
  standalone: true,
  imports: [
    PwdGenerator
  ],
  template: `
    <div class="flex min-h-full w-full justify-center items-center align-middle bg-[#08070B]">
      <lib-pwd-generator></lib-pwd-generator>
    </div>
  `,
  styles: `
    /*:host {*/
    /*  display: block;*/
    /*  width: 100dvw;*/
    /*  height: 100dvh;*/
    /*  background-color: #F6F5F6;*/
    /*  overflow: auto;*/
    /*  box-sizing: border-box;*/
    /*}*/
  `
})
export class PwdGeneratorContainer {
}
