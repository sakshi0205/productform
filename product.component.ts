import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 

   storelist:any[]=["Dmart","Reliance","BigBazar","Mega Store"];
  prod:Product=
   {
   pCost:0,pId:0,pName:"",pOnline:"",pCat:"",pStore:[]
   };
  idValidation=false


  dispSkill(data:any,index:any,isSelected:any):void
    {
        
        if(isSelected==true)
        {
            this.prod.pStore.push(data)
           for(let a of this.prod.pStore){
              console.log(a+"")
           }
        }
        else
        {
            this.prod.pStore.splice(index,1)
        }
    }
  constructor() { }

  ngOnInit() {
  }

  addProduct(add){
    console.log("Added product are: ",add.pid,add.pname,add.pcost,add.ponline,add.pstore)
  
    if(!add.pid)
    {
      this.idValidation=true;
      return
    }
    else{
      this.idValidation=false
    }

  
 
}}