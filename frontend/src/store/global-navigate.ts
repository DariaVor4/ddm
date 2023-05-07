import { makeVar } from '@apollo/client';
// import { NavigateFunction } from 'react-router-dom';

const globalNavigateVar = makeVar<(route:string)=>void>((route:string) => {
  window.location.href = route;
});

export default globalNavigateVar;
