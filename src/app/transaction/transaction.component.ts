import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})


export class TransactionComponent {



produits = [];

  acheteurs= [
    {label:'Francis', value: '1'},
    {label:'Martin', value: '2'}
  ];

  lancamentos = [
    {produto: 'Stylo', direcao: 'Francis Larochelle', descricao: 'Comprado pelo setor educativo', number: '456783445'},
    {produto: 'Dell Latitude 3510', direcao: 'Michelle Destremspes', descricao: 'Comprado pelo setor de TI', number: '877655454'},
    {produto: 'Borracha', direcao: 'Martin', descricao: 'Comprado pelo setor educativo ', number: '98765656'},
    {produto: 'Lexibar', direcao: 'Francis Larochelle', descricao: 'Comprado pelo setor de TI', number: '986556767'},
    {produto: 'Antidote', direcao: 'Michelle Destremspes', descricao: 'Comprado pelo setor de TI', number: '4765568788'}
  ];


  constructor() {

  }


}
