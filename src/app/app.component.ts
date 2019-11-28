import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Observable} from 'rxjs'
import { map,startWith} from 'rxjs/operators'
import { MatSnackBar }from '@angular/material'
import { NgModule } from '@angular/core'
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MatDialog } from '@angular/material'
import { DialogExampleComponent } from './dialog-example/dialog-example.component'
import { MatTableDataSource } from '@angular/material'
import { MatSort, MatPaginator } from '@angular/material'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  numbers: number[] = [];

  //todo: check. anguilar 8 requests second parameter
  @ViewChild(MatSort,null) sort: MatSort;
  @ViewChild(MatPaginator,null) paginator: MatPaginator;

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

constructor(private snackBar: MatSnackBar,
  private dialog: MatDialog ){

    for(let i=0;i<1000;i++)
      this.numbers.push(i)
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
  this.snackBar.openFromComponent(CustomSnackbarComponent,
    {duration:2000})
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
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
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

logData(row){
  console.log(row);
}

applyFilter(filterText: string){
  this.dataSource.filter = filterText.trim().toLowerCase();
}

openDialog(){
  let dr = this.dialog.open(DialogExampleComponent,
    { data: 
    { name: 'Vishjwas'}});
  dr.afterClosed().subscribe(result =>{
    console.log(`DIalog resultr: ${result}`)
  })
}


}
