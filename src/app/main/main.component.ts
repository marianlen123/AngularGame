import { Component, OnInit } from '@angular/core';
import { trigger, state, style, keyframes, transition, animate } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Player } from './player';
import { UserService } from './user.service';
declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animateArc', [
      transition('false => true', animate('1000ms linear', keyframes([
        style({ left: '0',     top: '0', offset: 0 }),
        style({ left: '670px', top: '320px', offset: 1 })
      ]))),
      transition('true => false', animate('1000ms linear', keyframes([
        style({ left: '670px', top: '320px', offset: 0 }),
        style({ left: '0',     top: '0', offset: 1 })
      ])))
    ])
  ]
})
export class MainComponent implements OnInit {
  width = $('.board').width() + 0.32 * ($('.board').width());
  height = $('.board').height() + 0.18 * $('.board').height();
  targetId;
  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
  }
  modal(event) {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
    this.startId = elementId;
    var startPositionX = parseFloat($(`#${elementId}`).parent().parent().css('left'));
    var startPositionY = parseFloat($(`#${elementId}`).parent().parent().css('top'));      
    var animObj = $(`#${elementId}`).parent().parent().parent().parent().find('.appenedimg');
    animObj.removeClass("targetMove");
    animObj.css({'display': 'block', 'left': startPositionX, 'top': startPositionY}); 
    

    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Action';
    modalRef.componentInstance.users = this.users;
    modalRef.componentInstance.passSrc.subscribe((src) => {
      animObj.attr('src', src);     
      console.log(startPositionX, startPositionY);
      this.targetId = this.userService.outTargerId();
      var endPositionX = parseFloat($(`#userImg${this.targetId}`).parent().parent().css('left'));
      var endPositionY =parseFloat( $(`#userImg${this.targetId}`).parent().parent().css('top'));
      console.log(endPositionX, endPositionY);
      animObj.addClass("targetMove");
      $(".targetMove").css({'left': endPositionX, 'top': endPositionY, 'transform': 'translate(-17%, -17%)scale(0.5)', 'display': 'block'});
      setTimeout(() => {
        $(".targetMove").attr('src', 'assets/poo2-4.gif');
        setTimeout(() => {
          $(".targetMove").css('display', 'none');
          $(".targetMove").attr('src', '');
        }, 3000);
      }, 2000);
    });
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
  startId = '';
  endId = '';

  toggleBounce(){
    this.arc = this.arc === 'false' ? 'true' : 'false';
  }
}
