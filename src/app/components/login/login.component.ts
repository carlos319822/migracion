import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false; 
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form= this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.form)
    const usuario = this.form.value.usuario;
    const password = this.form.value.usuario;


    if(usuario == 'admin' && password == 'admin'){
      //Redireccionamos al inicio

      
      this.Loading();

    }else{
      //Mensaje de error
      this.error();
      this.form.reset();
    }

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
