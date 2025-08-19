import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataView } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { HomeCard } from '../home-card/home-card';
import { HomeCardSkeleton } from '../home-card-skeleton/home-card-skeleton';

@Component({
  selector: 'app-home',
  imports: [DataView, CardModule, HomeCard, HomeCardSkeleton],
  template: `
    <div class="outer p-4 min-h-screen" [style.background-image]="backgroundImage">
      <div class="flex flex-col justify-center items-center align-middle text-white my-6">
        <h1 class="text-5xl font-bold text-yellow-300 tracking-wide border-l-8 border-blue-500 pl-3">
          Frontend Mentor Projects
        </h1>
      </div>

      <p-dataview #dv
                  [value]="masonryData"
                  [paginator]="true"
                  [rows]="12"
                  [paginatorPosition]="'bottom'"
                  layout="grid">
        <ng-template #grid let-items>
          <div class="grid grid-cols-12 gap-4 lg:px-40 xl:px-70 mb-20">
            @for (item of items; track item) {
              <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 p-2">
                <div class="flex items-center justify-center">
                  @defer (on viewport; prefetch on viewport) {
                    <app-home-card class="w-full" [item]="item" />
                  } @placeholder (minimum 500ms) {
                    <app-home-card-skeleton class="w-full" />
                  }
                </div>
              </div>
            }
          </div>
        </ng-template>
      </p-dataview>
    </div>
  `,
  styles: `
    .outer {
      background-color: black;
      background-position: bottom;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }

    ::ng-deep p-dataview .p-paginator {
      position: initial;
      margin-top: 1rem;
      width: fit-content !important;
      display: flex;
      justify-self: center;
    }

    @media (min-width: 768px) {
      ::ng-deep p-dataview .p-paginator {
        position: fixed;
        transform: translateX(-50%);
        bottom: 2rem;
        left: 50%;
        z-index: 1000;
      }
    }

    @media (max-width: 768px) {
      .outer {
        background-attachment: scroll; /* fallback */
      }
    }
  `
})
export class Home implements OnInit {
  private http: HttpClient = inject(HttpClient);
  protected masonryData!: MasonryCardData[];

  backgroundImage = 'url(assets/images/background-img.jpg)';


  ngOnInit(): void {
    this.http.get<MasonryCardData[]>('assets/data/masonry-cards.json').subscribe(data => this.masonryData = data);
  }
}
