// animations.ts
import { animate, state, style, transition, trigger } from '@angular/animations';

export const shineAnimation = trigger('shine', [
  state('default', style({
    boxShadow: 'none'
  })),
  state('shining', style({
    boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
  })),
  transition('default <=> shining', [
    animate('0.5s')
  ])
]);

export const rotateButtonAnimation = trigger('rotateButton', [
  state('inactive', style({
    transform: 'rotate(0)'
  })),
  state('active', style({
    transform: 'rotate(360deg)'
  })),
  transition('inactive => active', [
    animate('0.5s ease-in-out')
  ]),
  transition('active => inactive', [
    style({ transform: 'rotate(0)' })
  ])
]);
