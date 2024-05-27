import { Component, OnInit } from '@angular/core';
import { Transaction } from '../core/model';
import { FormControl, NgForm } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  produits = [];
  schools= [];
  transactions = [];

  transaction = new Transaction();

  constructor(
    private transactionService: TransactionService,
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const transactionId = this.route.snapshot.params['codigo'];
   this.loadTransaction(transactionId);
    this.listProduct();
    this.listSchool();
  }

  loadTransaction(id: number){
    this.transactionService.searchId(id)
    .then(response=>{
      this.transaction = response;
    });
}

get editing() {
  return Boolean(this.transaction.id);
}

save(form: NgForm){
  if(this.editing){
    this.updateTransaction(form);
  }else{
    this.addTransaction(form);
  }
}

  addTransaction(form: NgForm){
    this.transactionService.addTransaction(this.transaction)
    .then(()=> {
      this.messageService.add({ severity: 'success', detail: 'Transaction ajoutée avec succès !!!'});

      form.reset();
      this.transaction = new Transaction();
    })
  }

  updateTransaction(form: NgForm){
    this.transactionService.update(this.transaction)
    .then(transaction => {
      this.transaction = transaction;
      this.messageService.add({ severity: 'success', detail: 'Transaction modifiée avec succès !!!'});


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
