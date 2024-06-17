import { Component, OnInit } from '@angular/core';
import { ReviewUseCase } from '../../domain/usecase/review-use-case';
import { Review } from '../../domain/models/Review/review';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {

  reviews: Review[] = [];
  activeIndex = 0;
  constructor(private reviewUseCase: ReviewUseCase) { }
  ngOnInit(): void {
    this.onGetAllReviews();
  }

  onGetAllReviews(): void {
    this.reviewUseCase.getAll().subscribe((reviews) => {
      this.reviews = reviews;
    })

  }

  floor(value: number): number {
    return Math.floor(value);
  }

  ceil(value: number): number {
    return Math.ceil(value);
  }

  hasHalfStar(value: number): boolean {
    return value % 1 !== 0;
  }

  nextReview() {
    if (this.activeIndex < this.reviews.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  previousReview() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.reviews.length - 1; // Vuelve al último review si es el primero
    }
  }
  
  
}
