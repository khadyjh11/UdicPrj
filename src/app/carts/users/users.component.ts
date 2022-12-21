import { Component, OnInit, Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() Success: EventEmitter<string> = new EventEmitter()
  fullname: string = ''
  address: string = ''
  credNmber: number | string = ''

  constructor() {}
  ngOnInit(): void {}

  // submit  fullname fun
  onSubmit(): void {
    this.Success.emit(this.fullname)
  }
}
