import { makeVar } from '@apollo/client';

export const globalNavigateVar = makeVar<(route:string)=>void>((route:string) => {
  window.location.href = route;
});
