import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import {Observable} from 'rxjs'
import { map,startWith} from 'rxjs/operators'
import { MatSnackBar }from '@angular/material'
import { NgModule } from '@angular/core'



@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom SnackBar></span>`,  
})
export class CustomSnackBarComponent {}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularAppMD';
  notifications = 0;
  showSpinner = false;
  opened = false;
  selectedValue: string = "";
options: string[] = ['Angular','React','Vue']

filteredOptions: Observable<string[]>;


minDate = new Date(2018,11,1);
maxDate= new Date(2019,11,10);

objectOptions =[
  {name: 'Angular' },
  {name: 'Angular Material' },
  {name: 'React' },
  {name: 'Vue' },
]

constructor(private snackBar: MatSnackBar ){

}

dateFilter = date => {
  const day = date.getDay();
  return day != 0 && day != 6;
  

}

openSnackBar(msg){
  this.snackBar.open(msg);
}

openSnackBar2(msg,action){
  this.snackBar.open(msg,action, {duration:2000});
}

openCustomSnackBar(){
  this.snackBar.openFromComponent(CustomSnackBarComponent,{duration:2000})
}


openSnackBar3(msg,action){
  let sb = this.snackBar.open(msg,action);
  sb.afterDismissed().subscribe(()=>{
    console.log("the snack bar was dismissed");
  });

  sb.onAction().subscribe(()=>{
    console.log("the snackbar action was triggered");
  });
}


displayFn(subject){
  return subject ? subject.name : undefined;
}

myControl = new FormControl();

ngOnInit(){
  this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
  map(value => this.filter(value))
  );
}

private filter(value: string):string[] {
  const filterValue = value.toLowerCase()
  return this.options.filter(option => option.toLowerCase().includes(filterValue))
}

log(state){
  console.log(state);
}

  loadData() {
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    },5000);
}


}
