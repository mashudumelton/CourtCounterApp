import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
valueone: number;
valuetwo: number 

  constructor(public navCtrl: NavController) {
 this.valueone = 0;
 this.valuetwo =0;
  }
  onClick7(){
    this.valueone =0;
    this.valuetwo =0;
  
  }
onClick1(){
  // console.log(this.value)
  this.valueone +=3;
  
}
onClick2(){
  // console.log(this.value)
  this.valueone +=2;
  
}
onClick3(){
  // console.log(this.value)
  this.valueone +=1;
  
}


onClick4(){
  // console.log(this.value)
  this.valuetwo +=3;
  
}
onClick5(){
  // console.log(this.value)
  this.valuetwo +=2;
  
}
onClick6(){
  // console.log(this.value)
  this.valuetwo +=1;
  
}

}
