import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Flogin!:FormGroup

  ngOnInit(): void {}

  constructor(
    private userservice:UserService,
    private router:Router,
    ){
      this.Flogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      })
    }
  onSubmit(){
    this.userservice.login(this.Flogin.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/home']);
    })
    .catch(error =>  console.log(error))

  }
}
