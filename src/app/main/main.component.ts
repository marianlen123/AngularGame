import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Player } from './player';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animateArc', [
      // state('true', style({
      //   left: '400px',
      //   top: '200px'
      // })),
      state('false', style({
        left: '0',
        top: '0'
      })),
      transition('false => true', animate('1000ms linear', keyframes([
        style({ left: '0', top: '200px', offset: 0 }),
        style({ left: '200px', top: '100px', offset: 0.50 }),
        style({ left: '400px', top: '200px', offset: 1 })
      ]))),
      // transition('true => false', animate('1000ms linear', keyframes([
      //   style({ left: '400px', top: '200px', offset: 0 }),
      //   style({ left: '200px', top: '100px', offset: 0.50 }),
      //   style({ left: '0', top: '200px', offset: 1 })
      // ])))
    ])
  ]
})
export class MainComponent implements OnInit {
  width = $('.board').width() + 0.32 * ($('.board').width());
  height = $('.board').height() + 0.18 * $('.board').height();

  constructor(private modalService: NgbModal, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  modal(event) {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Action';
    modalRef.componentInstance.users = this.users;
    modalRef.componentInstance.passSrc.subscribe((src) => {
      var img = document.createElement("img");
      img.setAttribute('class', 'appenedimg img-fluid');
      img.style.position = 'absolute';
      img.style.left = '0';
      img.style.transform = 'scale(0.7)';
      img.src = src;
      document.getElementById(elementId).parentElement.appendChild(img);
    })
  }

  users = [
    new Player(1, 'assets/user.png', 'Jackson'),
    new Player(2, 'assets/user.png', 'Elsa'),
    new Player(3, 'assets/user.png', 'Anna'),
    new Player(4, 'assets/user.png', 'Tom'),
    new Player(5, 'assets/user.png', 'Jerry'),
    new Player(6, 'assets/user.png', 'Kevin'),
    new Player(7, 'assets/user.png', 'Steve')
  ]
  players = this.users;
  arc: string = 'false';
  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
}
