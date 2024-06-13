import { Observable } from "rxjs";
import { Plan } from "../plan";


export abstract class PlansGateway {
    abstract getById(id: string): Observable<Plan>;
    abstract getAll(): Observable<Array<Plan>>;
    abstract saveReview(plan: Plan): Observable<Plan>;
}