import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from 'godigital-lib';
import { ServicesService, AUTHSTATUS } from 'godigital-lib';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let $: any;

interface ChatMessage {
  role: string;
  content: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('textInput') textInputInput: any;
  @ViewChild('chatWindow', { static: false }) chatWindowRef: ElementRef;
  public componentName = 'login.component';
  public loginForm: FormGroup;

  isCollapsed: boolean = true;

  constructor(
    public loginSvc: LoginService,
    public fb: FormBuilder,
    public mainSvc: ServicesService,
    public utilsSvc: UtilsService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
  }

  ngAfterViewChecked() {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  login() {
    this.loginSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(
      data => {
        const value2 = this.utilsSvc.getUid();
        this.router.navigate(['/home']);
      },
      error=> {
        console.log('login error=', error);
        if (error && error[0]===AUTHSTATUS.UNKNOWNERROR) {
          $('#loginErrorModal').modal('show');
        }
        if (error && error[0]===AUTHSTATUS.EMAILNOTVERIFIED) {
          $('#emailNotVerifiedModal').modal('show');
        }
      }
    )
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      rememberme: false,
    });
  }


}
