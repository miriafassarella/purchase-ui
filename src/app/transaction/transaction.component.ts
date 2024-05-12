import { LazyLoadEvent } from 'primeng/api';
import {TransactionFilter, TransactionService } from './../transaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


export class TransactionComponent implements OnInit {

  totalRecords = 0;
  filter = new TransactionFilter();
  @ViewChild('table') table: any;

produits = [];

  acheteurs= [
    {label:'Francis', value: '1'},
    {label:'Martin', value: '2'}
  ];

  transactions = [];


  constructor(private transactionService: TransactionService) {

  }

ngOnInit(): void {

}

list(page = 0): void{
  this.filter.page = page;
  this.transactionService.list(this.filter)
  .then((result: any) => {
    this.transactions = result.transactions;
    this.totalRecords = result.total;
  });
}

changePage(event: LazyLoadEvent){
  const page = event!.first! / event!.rows!;
  this.list(page);
}

erase(transaction: any){
  this.transactionService.erase(transaction.id)
  .then(()=>{
    this.table.reset();
  });
}

}
