import { Component } from '@angular/core';
import { QuizApp } from 'quiz-app';

@Component({
  standalone: true,
  imports: [
    QuizApp
  ],
  template: `
    <div class="flex min-h-full w-full justify-center items-center align-middle bg-[#08070B]">
      <lib-quiz-app></lib-quiz-app>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #08070B;
      overflow: auto;
      box-sizing: border-box;
    }
  `
})
export class QuizAppContainer {
}
