import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { TestService } from '../test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

login1 : Login = new Login();
user : string;
err;
submitted =false;
constructor(private service : TestService,
  private router: Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  login(){
    let str = this.login1.username;  
    this.service.findUserLogin(this.login1.username,this.login1.password).subscribe(data => {console.log(data.username) ;sessionStorage.setItem("user",str);this.goto();},
    error =>{alert("Login Not Successful");console.log(error);});
    this.submitted=true;
    this.login1 = new Login();
    }
   
    goto(){
      this.router.navigate(['/view']);
    }
  
}
