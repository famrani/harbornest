import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { PrivateMediaService } from './private-media.service';

@Injectable()
export class FirebaseMediaInterceptor implements HttpInterceptor {
  constructor(private media: PrivateMediaService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET' || !this.isFirebaseDatabaseRequest(req.url)) return next.handle(req);

    return next.handle(req).pipe(
      switchMap((event) => {
        if (!(event instanceof HttpResponse) || !event.body) return of(event);
        return from(this.media.resolveFirebaseTree(event.body)).pipe(
          switchMap((body) => of(event.clone({ body }))),
          catchError(() => of(event)),
        );
      }),
    );
  }

  private isFirebaseDatabaseRequest(url: string): boolean {
    return /https:\/\/[^/]+\.(firebaseio\.com|firebasedatabase\.app)\//i.test(url);
  }
}
