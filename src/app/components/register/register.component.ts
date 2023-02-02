import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    Fregistro!: FormGroup

    constructor(
      private userservice:UserService,
      private router:Router,
      ){
        this.Fregistro = new FormGroup({
          email: new FormControl(),
          password: new FormControl(),
        })
      }

      ngOnInit(): void {}

      onSubmit(){
        this.userservice.register(this.Fregistro.value)
        .then(response => {
          console.log(response)
          this.router.navigate(['/login']);
        })
        .catch(error =>  console.log(error))

      }
    }
