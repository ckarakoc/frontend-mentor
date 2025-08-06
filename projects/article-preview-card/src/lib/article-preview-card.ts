import { Component, HostListener, signal } from '@angular/core';
import { TippyGlobalStylesComponent } from './tippy-global-styles';
import { NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { TippyDirective } from '@ngneat/helipopper';

@Component({
  selector: 'lib-article-preview-card',
  imports: [
    TippyGlobalStylesComponent,
    NgOptimizedImage,
    NgTemplateOutlet,
    NgClass,
    TippyDirective
  ],
  template: `
    <lib-tippy-styles></lib-tippy-styles>
    <div class="bg-white max-w-80 rounded-2xl flex flex-col sm:flex-row sm:max-w-3xl shadow-2xl">
      <img class="rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none sm:max-w-1/3" src="assets/article-preview-card/images/drawers.jpg" alt="card image" priority>

      <div class="sm:flex sm:flex-col">
        <!-- Content -->
        <div class="content p-8 flex flex-col gap-4">
          <h1 class="font-bold text-xl leading-7 tracking-wide text-gray-900">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p
            class="font-medium text-sm leading-5 text-gray-500">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        </div>

        <!-- Footer -->
        <div class="flex relative h-20">
          @if (!toastVisible() || this.innerWidth > 640) {
            <!-- Show on Mobile or Desktop -->
            <div class="flex gap-3 px-7 py-4 items-center">
              <div class="">
                <img ngSrc="assets/article-preview-card/images/avatar-michelle.jpg" alt="avatar" width="40" height="40" class="rounded-full"/>
              </div>
              <div class="flex flex-col justify-center gap-0.5">
                <div class="text-sm text-gray-900 leading-4 font-bold">Michelle Appleton</div>
                <div class="text-sm text-gray-400 leading-4 font-medium">28 Jun 2025</div>
              </div>
            </div>
          } @else if (this.innerWidth < 640) {
            <!-- Show on Mobile Only -->
            <div class="bg-gray-900  w-full rounded-b-xl text-white px-7 py-4 flex items-center">
              <ng-container *ngTemplateOutlet="tpl"></ng-container>
            </div>
          }

          <button
            class="absolute top-1/2 transform -translate-y-1/2 right-10 sm:bg-gray-200 rounded-full flex items-center justify-center align-middle w-8 h-8 group hover:bg-gray-500 transition-colors duration-300 cursor-pointer"
            [tp]="tpl"
            tpPlacement="top"
            tpVariation="custom"
            [tpInteractive]="true"
            (click)="toggleToastOnMobile()"
            [ngClass]="{
              'bg-gray-500': toastVisible(),
              'bg-gray-200': !toastVisible()
            }">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"
                 class="group-hover:fill-white sm:fill-gray-500 transition-colors duration-700"
                 [ngClass]="{
                    'fill-white': toastVisible(),
                    'fill-gray-500': !toastVisible()
               }">
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <ng-template #tpl>
      <div class="flex items-center gap-4">
        <div class="uppercase tracking-[0.25rem] font-medium custom-1 text-sm select-none">share</div>
        <div class="flex gap-5">
          <a href="#">
            <img ngSrc="assets/article-preview-card/images/icon-facebook.svg" alt="Facebook" width="20" height="20"/>
          </a>
          <a href="#">
            <img ngSrc="assets/article-preview-card/images/icon-twitter.svg" alt="Twitter" width="20" height="17"/>
          </a>
          <a href="#">
            <img ngSrc="assets/article-preview-card/images/icon-pinterest.svg" alt="Pinterest" width="20" height="20"/>
          </a>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: [
    './article-preview-card.css'
  ],
  styles: `
    :host {
      font-family: 'Manrope', sans-serif;
    }
  `
})
export class ArticlePreviewCard {
  innerWidth: number = window.innerWidth;
  toastVisible = signal<boolean>(false);

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = (event.target as Window).innerWidth;
    if (this.innerWidth >= 640) {
      // this.toastVisible.set(false);
    }
  }

  toggleToastOnMobile() {
    if (this.innerWidth < 640) {
      this.toastVisible.set(!this.toastVisible());
    }
  }
}
