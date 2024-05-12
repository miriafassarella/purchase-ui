
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';



export class TransactionFilter{
  page = 0;
  itemsPage = 5;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transactionUrl = 'http://localhost:8080/transactions';


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
}

