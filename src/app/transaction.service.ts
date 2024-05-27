import { transition } from '@angular/animations';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Transaction } from './core/model';



export class TransactionFilter{
  page = 0;
  itemsPage = 5;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionUrl = 'http://localhost:8080/transactions';

  productUrl = 'http://localhost:8080/products';

  schoolUrl = 'http://localhost:8080/schools';

  constructor(private http: HttpClient) { }


  list(filter: TransactionFilter): Promise<any>{

    const headers = new HttpHeaders();

    let params = new HttpParams()
    .set('page', filter.page)
    .set('size', filter.itemsPage);


      return  this.http.get(`${this.transactionUrl}`, { headers, params })
       .toPromise()
       .then((response: any) => {

          const transactions = response['content'];

          const result = {
            transactions,
            total: response['totalElements']
          };
          return result;
       });
}

erase(id: number): Promise<any>{

  const headers = new HttpHeaders();
  return firstValueFrom(
    this.http.delete(`${this.transactionUrl}/${id}`, { headers })
  )
}

addTransaction(transaction: Transaction): Promise<Transaction> {
  const headers = new HttpHeaders()
    .append('Content-Type', 'application/json');

  return firstValueFrom(
  this.http.post<Transaction>(this.transactionUrl, transaction, { headers })
  )
}

update(transition: Transaction): Promise<Transaction>{
  const headers = new HttpHeaders()
  .append('Content-Type', 'application/json');

return firstValueFrom(
 this.http.put<Transaction>(`${this.transactionUrl}/${transition.id}`, transition, { headers })
)
}

searchId(id: number): Promise<Transaction> {

  const headers = new HttpHeaders();


  return this.http.get(`${this.transactionUrl}/${id}`, {headers})
  .toPromise()
  .then((response : any) => {
    const transaction = response;

    return transaction;
  });

}

listProducts(): Promise<any>{
  const headers = new HttpHeaders();
  return  this.http.get(`${this.productUrl}`, { headers })
  .toPromise();
}

listSchools(): Promise<any>{
  const headers = new HttpHeaders();
  return  this.http.get(`${this.schoolUrl}`, { headers})
  .toPromise();
}
}

