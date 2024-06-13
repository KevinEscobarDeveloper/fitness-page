// aplicacion/usecases/review.usecase.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../models/Review/review';
import { ReviewGateway } from '../models/Review/gateway/review-gateway';


@Injectable({
    providedIn: 'root'
})
export class ReviewUseCase {
    constructor(private reviewGateway: ReviewGateway) { }

    getReviewById(id: string): Observable<Review> {
        return this.reviewGateway.getById(id);
    }

    getAll(): Observable<Array<Review>> {
        return this.reviewGateway.getAll();
    }

    saveReview(review: Review): Observable<void> {
        return this.reviewGateway.saveReview(review);
    }
}
