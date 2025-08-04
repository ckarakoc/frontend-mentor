import { HttpInterceptorFn } from '@angular/common/http';
import { SpinnerService } from '../_services/spinner-service';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  const spinnerService = inject(SpinnerService);

  const shouldShowSpinner = req.headers.has('X-HTTP-SPINNER');

  if (shouldShowSpinner) {
    let config = spinnerService.spinnerConfig();
    config.fullScreen = true;
    spinner.show('ngx-spinner-http', config);
  }

  return next(req).pipe(
    finalize(() => {
      if (shouldShowSpinner) spinner.hide('ngx-spinner-http');
    })
  );
};
