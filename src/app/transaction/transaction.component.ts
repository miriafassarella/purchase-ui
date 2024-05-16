import { Product, School, Transaction } from './../core/model';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import {TransactionFilter, TransactionService } from './../transaction.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

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
  schools= [];
  transactions = [];

  transaction = new Transaction();



  constructor(
    private transactionService: TransactionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

ngOnInit(): void {
  this.listProduct();
  this.listSchool();
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

confirmExlusion(transition: any){
  this.confirmationService.confirm({
    message: 'Etes-vous sûr que vous voulez supprimer?',
    accept: ()=> {
      this.erase(transition);
    }
  })
}

erase(transaction: any){

  this.transactionService.erase(transaction.id)
  .then(()=>{
    this.table.reset();
    this.messageService.add({ severity: 'success', detail: 'Transaction supprimée avec succès !!' })

  });
}

save(form: NgForm){
  this.transactionService.addTransaction(this.transaction)
  .then(()=> {
    this.messageService.add({ severity: 'success', detail: 'Transaction ajoutée avec succès !!!'});
    this.list();
    form.reset();
    this.transaction = new Transaction();
  })
}

listProduct(): any{
 return this.transactionService.listProducts()
  .then((produits : any)=> {this.produits = produits.map((p: any) => ({label: p.name, value: p.id}))});
}

listSchool(): any {
  this.transactionService.listSchools()
  .then((schools : any)=> {this.schools = schools.map((p: any) => ({label: p.name, value: p.id}))})
}

}
