import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productCode=""
  productName=""
  manuDate=""
  expDate=""
  brand=""
  price=""
  sellName=""
  disName=""

  readValue=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manuDate":this.manuDate,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellName":this.sellName,"disName":this.disName}
    console.log(data)
  }

}
