import { Injectable } from '@angular/core';
import { ResourceContextService } from './resource-context.service';

/** @deprecated Inject ResourceContextService in new code. Kept for cumulative compatibility. */
@Injectable({ providedIn: 'root' })
export class BoatContextService extends ResourceContextService {
  setBoatId(value: string): string { return this.setResourceId(value); }
}
