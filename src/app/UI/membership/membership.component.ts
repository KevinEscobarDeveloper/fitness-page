import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../infraestructure/plan-api/plan.service';
import { Plan } from '../../domain/models/plans/plan';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  animations: [
    trigger('shine', [
      state('default', style({
        boxShadow: 'none'
      })),
      state('shining', style({
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)'
      })),
      transition('default <=> shining', [
        animate('0.5s')
      ])
    ]),
    trigger('rotateButton', [
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
    ])
  ]
})
export class MembershipComponent implements OnInit {
  plans: Plan[] = [];
  activated: number | null = 1;
  shiningIndex: number | null = 1;
  buttonState: 'inactive' | 'active' = 'inactive';

  constructor(private readonly planService: PlanService) { }

  ngOnInit(): void {
    this.onGetAllPlans();
  };

  onShine(index: number): void {
    this.shiningIndex = index;
    this.activated = index;
    this.triggerButtonAnimation();
  }

  triggerButtonAnimation(): void {
    this.buttonState = 'active';
  }

  resetButtonState(): void {
    this.buttonState = 'inactive';
  }

  onGetAllPlans(): void {
    this.planService.getAll().subscribe((plans) => {
      this.plans = plans;
    });
  }
}
