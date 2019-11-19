import { Injectable } from '@angular/core';
import { Jet } from '../model/jet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JetService {

  private BASE_URL = 'https://us-central1-formation-71217.cloudfunctions.net/api/v1/jets';

  constructor(private httpClient: HttpClient) {
  }


  fetchAllJets(): Observable<Jet[]> {
    return this.httpClient.get<Jet[]>(this.BASE_URL);
  }

  createJet(jet: Jet) {
    return this.httpClient.post<Jet>(this.BASE_URL, jet);
  }

  updateJet(jet: Jet) {
    return this.httpClient.put<Jet>(this.BASE_URL + '/' + jet.id, jet);
  }

  deleteJet(jetId: string) {
    return this.httpClient.delete(this.BASE_URL + '/' + jetId);
  }

  fetchJetById(jetId: string): Observable<Jet> {
    return this.httpClient.get<Jet>(`${this.BASE_URL}/${jetId}`);
  }


}
