import { Observable } from 'rxjs';
import { Jet } from '../model/jet.model';

export interface IsDirty {

  jet:Jet;

  isDirty(): boolean | Observable<boolean>;
}
