import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  targetId;
  constructor() { }
  getTargetId(id) {
    this.targetId = id;
  }
  outTargerId() {
    return this.targetId;
  }
}
