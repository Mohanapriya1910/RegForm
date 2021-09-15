import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public text : string ='';
  public text1 : string ='';
  public text2 : string = '';
  public password : string ='';
  public check : boolean = false;
  public display : boolean = false;
  public refresh : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setFirstname(event: any): void{
    this.text=event.target.value;
  }

  setLastname(event: any): void{
    this.text1=event.target.value;
  }

  setUsername(event: any): void{
    this.text2=event.target.value;
  }

  setPassword(event: any): void{
    this.password=event.target.value;
  }

  setCheck(event: any): void{
    console.log=(event.target.value)
    this.check=event.target.value;
  }

  displaydata(){
    this.display =! this.display
  }

  reset(){
    this.refresh =! this.refresh  
  }

}
