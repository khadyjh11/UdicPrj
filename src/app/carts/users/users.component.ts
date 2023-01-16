import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() Success: EventEmitter<string> = new EventEmitter()

  constructor() {}
  ngOnInit(): void {}
  fullname: string = ''
  address: string = ''
  credNmber: number | string = ''
  validateUserName(userName: string) {
    const UserList = ['ankit', 'admin', 'user', 'superuser']
    return UserList.indexOf(userName) > -1
  }
  // submit  fullname fun
  onSubmit(): void {
    this.Success.emit(this.fullname)
  }
}
