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
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css'],
  imports: [FormsModule]
})
export class ChangeComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('textInput') textInputInput: any;
  @ViewChild('chatWindow', { static: false }) chatWindowRef: ElementRef;
  public componentName = 'changepwd.component';
  public changepwdForm: FormGroup;

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

  changepwd() {
    if (this.changepwdForm && this.changepwdForm.value && this.changepwdForm.value.password1) {
      this.utilsSvc.mauth.sendPasswordResetEmail(this.changepwdForm.value.email);
      $('#resetModal').modal('show');
    }
  }

  createForm() {
    this.changepwdForm = this.fb.group({
      oldpassword: ['', [Validators.required, Validators.email]],
      newpassword1: ['', [Validators.required, Validators.email]],
      newpassword2: ['', [Validators.required, Validators.email]],
    });

  }



}
