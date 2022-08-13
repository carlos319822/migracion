import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { Subscription, timeout } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../../interfaces/response';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginData = {
    userName:'',
    password:''
  }

  form: FormGroup;
  
  loading = false; 
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router, private service:UserService, private http: HttpClient) {
    this.form= fb.group({
    usuario:['',Validators.required],
    password:['',Validators.required]
    })
   }
  

  login(){   

    this.service.login(this.loginData).subscribe((data:any) => {
      localStorage.setItem('user', JSON.stringify(data.result));
      localStorage.setItem('token_value',data.result.token);
      
      // let retrievedObject = localStorage.getItem('user');
      
      // d.copyInto(retrievedObject);


      // console.log(d); 

      this.Loading();
      this.router.navigate(['dashboard'])   
      

    },err=>{
      this.error();
     this.form.reset();
    })
  
  


   /* if(usuario == 'admin' && password == 'admin'){
      //Redireccionamos al inicio

      
      this.Loading();

    }else{
      //Mensaje de error
      this.error();
      this.form.reset();
    }
    this.user.LoginByEmail(form).subscribe(data =>{

      console.log(data);
    })*/


  }


  error(){
    this._snackBar.open('Usuario o contraseña Incorrectos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  Loading(){
    this.loading = true;
    setTimeout(()=>{

      //Redireccionamos al dinio
      this.router.navigate(['dashboard'])
    }, 1500);
  }
}
