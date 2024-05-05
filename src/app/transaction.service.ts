import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionUrl = 'http://localhost:8080/transactions';

  constructor(private http: HttpClient) { }


  list(): Promise<any>{

    const headers = new HttpHeaders();

    return firstValueFrom(
       this.http.get(`${this.transactionUrl}`, { headers })
     );
 }
}
