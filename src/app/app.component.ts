import { Component } from '@angular/core';
import { SidenavExampleComponent } from './sidenav-example/sidenav-example.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAppMD';
  notifications = 0;
  showSpinner = false;
  opened = false;

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
