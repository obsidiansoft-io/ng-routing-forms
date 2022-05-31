import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.consultarRoles();
    this.userService.guardarUsuario({
      full_name: "Ruddy García",
      email: "ruddy.soltero@gmail.com",
    });
  }
}
