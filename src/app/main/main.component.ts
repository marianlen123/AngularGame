import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Player } from './player';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  ctx: OffscreenCanvasRenderingContext2D;
  requestId;
  interval;
  imageSrc = '';
  width = $('.board').width() + 0.32 * ($('.board').width());
  height = $('.board').height() + 0.18 * $('.board').height();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  modal(event) {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Action';
    modalRef.componentInstance.users = this.users;
    modalRef.componentInstance.passSrc.subscribe((src) => {
      $(`#${elementId}`).parent().append(`<img class="img-fluid appenedimg" src="${src}" style="
        position: absolute;
        left: 0;
        transform: scale(0.7)
      ">`);
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

}
