import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Player } from './player';
import { UserService } from './user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
  }
  modal() {
    const modalRef = this.modalService.open(ModalComponent);
    this.userService = this.users;
    modalRef.componentInstance.title = 'Action';
  }
  users = [
    new Player(1,'assets/user.png', 'A'),
    new Player(2, 'assets/user.png', 'B'),
    new Player(3, 'assets/user.png', 'C'),
    new Player(4, 'assets/user.png', 'D'),
    new Player(5, 'assets/user.png', 'E'),
    new Player(6, 'assets/user.png', 'F'),
    new Player(7, 'assets/user.png', 'G'),
  ]
players = this.users;

}
