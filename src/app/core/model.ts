
export class Product{
  id?: number;
  name?: String;

}

export class School{
  id?: number;
  name?: String;

}

export class Transaction{
  id?: number;
  dateRegister?: Date;
  description?: string;
  amountProduct?: number;
  price?: number;
  priceFinal?: number;
  product =  new Product();
  school = new School();
}
