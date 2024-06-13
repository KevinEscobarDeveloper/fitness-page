import { Injectable } from '@angular/core';
import { PlansGateway } from '../../domain/models/plans/gateway/plans-gateway';
import { Observable } from 'rxjs';
import { Plan } from '../../domain/models/plans/plan';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends PlansGateway {
  constructor(private readonly http: HttpClient) {
    super();
  }
  override getById(id: string): Observable<Plan> {
    throw new Error('Method not implemented.');
  }
  override getAll(): Observable<Plan[]> {
    return this.http.get<Plan[]>(environment.apiBackend + "/get-plans");
  }
  override saveReview(plan: Plan): Observable<Plan> {
    throw new Error('Method not implemented.');
  }


}
