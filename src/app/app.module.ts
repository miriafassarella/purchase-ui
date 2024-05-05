
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabViewModule } from 'primeng/tabview';
import {MessageModule} from 'primeng/message';
import {InputNumberModule} from 'primeng/inputnumber';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { TransactionService } from './transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    SelectButtonModule,
    TabViewModule,
    FormsModule,
    TableModule,
    TooltipModule,
    MessageModule,
    InputNumberModule,
    HttpClientModule

  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]

})
export class AppModule { }
