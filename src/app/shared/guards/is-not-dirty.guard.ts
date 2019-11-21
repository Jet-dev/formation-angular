import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsDirty } from './IsDirty';

@Injectable({
  providedIn: 'root'
})
export class IsNotDirtyGuard implements CanDeactivate<IsDirty> {

  canDeactivate(component: IsDirty,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.isDirty()) {
      return confirm('Voulez vous vraiment appeler votre Jet ' + component.jet.name + ' ?');
    }
    return true;

  }

}
