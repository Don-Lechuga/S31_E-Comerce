import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userservice:UserService, private router:Router){

  }



  logout(){
    this.userservice.logout()
    .then( ()=> {
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }

}
