import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-home-card-skeleton',
  imports: [
    Skeleton
  ],
  template: `
    <div class="skeleton-card p-6">
      <div class="flex mb-4">
        <p-skeleton height="16rem" class="mb-2" />
      </div>
      <div class="flex flex-col gap-4">
        <p-skeleton width="50%" height="30px" />
        <p-skeleton width="70%" height="15px" />
        <p-skeleton width="100%" height="50px" />
      </div>
      <div class="flex justify-end mt-4">
        <p-skeleton width="35px" height="35px" />
      </div>
    </div>
  `,
  styles: `
    .skeleton-card {
      backdrop-filter: blur(25px) saturate(172%);
      border: 1px solid rgba(209, 213, 219, 0.3);
      background-color: rgba(243, 235, 235, 0.19);
      border-radius: 12px;
    }
  `
})
export class HomeCardSkeleton {

}
