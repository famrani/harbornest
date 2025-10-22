import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewChecked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from 'godigital-lib';
import { ServicesService, AUTHSTATUS } from 'godigital-lib';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-tourhome',
  templateUrl: './tourhome.component.html',
  styleUrls: ['./tourhome.component.css'],
  imports: [FormsModule]
})
export class TourhomeComponent implements OnInit, OnDestroy, AfterViewChecked {
  public componentName = 'home.component';
  public tours = [
    { slug:'sunset-cruise', title:'Sunset Cruise & Champagne', duration:'2.5h', capacity:8, price:320, cover:'assets/img/events/sunset/sunset1.jpg' },
    { slug:'lerins-day-escape', title:'Day Escape – Lérins Islands', duration:'4–8h', capacity:8, price:540, cover:'assets/img/events/leyrins/leyrins1.jpg' },
    { slug:'business-meetings', title:'Business Meeting at Marina', duration:'1–4h', capacity:6, price:180, cover:'assets/img/events/business-meeting/business-meeting1.jpg' },
    { slug:'afterwork', title:'Afterwork en mer', duration:'1–4h', capacity:6, price:180, cover:'assets/img/events/afterwork/afterwork1.jpg' },
    { slug:'evjf-evg', title:'EVJF / EVG en mer', duration:'1–4h', capacity:6, price:180, cover:'assets/img/events/evjf/evjf-g1.jpg' },
    { slug:'night-on-board', title:'Night on Board', duration:'1–4h', capacity:6, price:180, cover:'assets/img/events/night-on-board/night-on-board1.jpg' },
  ];

  constructor(
    public fb: FormBuilder,
    public mainSvc: ServicesService,
    public utilsSvc: UtilsService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngAfterViewChecked() {
  }


}
