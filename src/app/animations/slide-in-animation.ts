// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, query, animateChild, group } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%' // use all height so that flex layout looks good (otherwise elements at top until end of animation)
        }),
      ], { optional: true }), // optional needed for ng test
      // Without this query, expansion panels are expanded during animation
      query('.mat-expansion-panel-content', [
        style({ display: 'none' }),
      ], { optional: true }), // optional needed for ng test
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('700ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('700ms ease-out', style({ left: '0%', opacity: 1 }))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);