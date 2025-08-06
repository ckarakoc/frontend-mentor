import { CanMatchFn } from '@angular/router';

export const appBoundaryGuard: CanMatchFn = (route, segments) => {
  const fullPath = segments.map(segment => segment.path).join('/');
  let boundaries: string[] = [];
  for (const boundary of boundaries) {
    console.log(`❌ Blocking path "${ fullPath }" - belongs to ${ boundary } app`);
    if (fullPath.startsWith(boundary)) return false;
  }
  return true;
};
