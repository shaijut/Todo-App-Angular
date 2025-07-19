import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type FeedbackType = 'success' | 'error';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
  private messageSubject = new BehaviorSubject<{ type: FeedbackType, message: string } | null>(null);
  private timeoutId: any;

  getMessage(): Observable<{ type: FeedbackType, message: string } | null> {
    return this.messageSubject.asObservable();
  }

  showMessage(type: FeedbackType, message: string, durationMs: number = 3000) {
    this.messageSubject.next({ type, message });

    clearTimeout(this.timeoutId); // prevent multiple timers
    this.timeoutId = setTimeout(() => {
      this.clear();
    }, durationMs);
  }

  clear() {
    this.messageSubject.next(null);
  }
}
