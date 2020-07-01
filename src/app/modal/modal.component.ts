import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../main/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  title = 'Animation';
  src = '';
  targetId;

  constructor(public activeModal: NgbActiveModal, private userService: UserService) { }

  @Input() public users;
  selected;
  @Output() passSrc: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.users);
  }

  sendImage(event):void {
    let elementId: string = (event.target as Element).id;
    this.src = $(`#${elementId}`).attr('src');
    console.log(this.src);
    this.activeModal.close();
    this.passSrc.emit(this.src);
  }

  onOptionsSelected() {
    this.userService.getTargetId(this.selected.id);
  }
}
