import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from 'godigital-lib';
import { ServicesService, UsersService } from 'godigital-lib';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let $: any;

interface ChatMessage {
  role: string;
  content: string;
}

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css'],
  imports: [FormsModule]
})
export class ForgotComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('textInput') textInputInput: any;
  @ViewChild('chatWindow', { static: false }) chatWindowRef: ElementRef;
  public componentName = 'forgotpwd.component';
  public forgotpwdForm: FormGroup;

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

  forgotpwd() {
    if (this.forgotpwdForm && this.forgotpwdForm.value && this.forgotpwdForm.value.email) {
      this.utilsSvc.mauth.sendPasswordResetEmail(this.forgotpwdForm.value.email);
      $('#resetModal').modal('show');
    }
  }

  createForm() {
    this.forgotpwdForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });

  }



}
