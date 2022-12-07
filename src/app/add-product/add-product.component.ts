import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manuDate":this.manuDate,"expDate":this.expDate,"brand":this.brand,"price":this.price,"sellName":this.sellName,"disName":this.disName}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          alert("Product added successfully")
          this.productCode=""
          this.productName=""
          this.manuDate=""
          this.expDate=""
          this.brand=""
          this.price=""
          this.sellName=""
          this.disName=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }

}
