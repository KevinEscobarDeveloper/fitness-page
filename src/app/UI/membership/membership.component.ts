// membership.component.ts
import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../infraestructure/plan-api/plan.service';
import { Plan } from '../../domain/models/plans/plan';
import { rotateButtonAnimation, shineAnimation } from '../shared/animations/membership-animations';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  animations: [
    shineAnimation,
    rotateButtonAnimation
  ]
})
export class MembershipComponent implements OnInit {
  plans: Plan[] = [];
  activated: number | null = 1;
  shiningIndex: number | null = 1;
  buttonState: 'inactive' | 'active' = 'inactive';
  isAnnual: boolean = false;

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
