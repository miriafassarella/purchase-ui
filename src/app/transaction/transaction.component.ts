import { TransactionService } from './../transaction.service';



import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


export class TransactionComponent implements OnInit {



produits = [];

  acheteurs= [
    {label:'Francis', value: '1'},
    {label:'Martin', value: '2'}
  ];

  transactions = [];


  constructor(private transactionService: TransactionService) {

  }

ngOnInit(): void {
  this.list();
}

list(){
  this.transactionService.list()
  .then(transactions => this.transactions = transactions);
}

}
