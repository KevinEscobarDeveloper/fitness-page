import { Observable } from "rxjs";
import { Review } from "../review";


export abstract class ReviewGateway {
    abstract getById(id: string): Observable<Review>;
    abstract getAll(): Observable<Array<Review>>;
    abstract saveReview(review: Review): Observable<void>;
}