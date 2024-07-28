import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {
     public number=1;
     dec(){
      this.number=this.number-1 >1 ?this.number-1:1
     }
     inc(){
      this.number=this.number+1 
     }
}
