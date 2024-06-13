import { Injectable } from '@angular/core';
import { ReviewGateway } from '../../domain/models/Review/gateway/review-gateway';
import { Observable } from 'rxjs';
import { Review } from '../../domain/models/Review/review';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService extends ReviewGateway {
  constructor(private readonly http: HttpClient) {
    super();
  }

  override getById(id: string): Observable<Review> {
    throw new Error('Method not implemented.');
  }
  override getAll(): Observable<Array<Review>> {
    return this.http.get<Array<Review>>(environment.apiBackend + "/get-reviews");
  }
  override saveReview(review: Review): Observable<void> {
    throw new Error('Method not implemented.');
  }


}
