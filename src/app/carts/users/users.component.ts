import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() Success: EventEmitter<string> = new EventEmitter()
  UsersForm!: FormGroup
  send = false
  //

  constructor(private formbul: FormBuilder) {}
  // for input validate
  ngOnInit(): void {
    this.UsersForm = this.formbul.group({
      fullname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      credNmber: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    this.Success.emit(this.UsersForm.value)
  }
  get fullname() {
    return this.UsersForm.get('fullname')
  }
  get address() {
    return this.UsersForm.get('address')
  }
  get credNmber() {
    return this.UsersForm.get('credNmber')
  }
}

