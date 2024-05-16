
export class Product{
  id?: number;
  name?: String;
  description?: String;
  price?: number;
}

export class School{
  id?: number;
  name?: String;

}

export class Transaction{
  id?: number;
  date?: Date;
  amountProduct?: number;
  priceFinal?: number;
  product =  new Product();
  school = new School();
}
