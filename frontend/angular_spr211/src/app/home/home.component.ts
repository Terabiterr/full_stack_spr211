import { Component } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../models/User'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '', age: 0 }
  constructor(private userService: UserService) {
    this.refreshUsers()
  }
  refreshUsers() {
    this.users = this.userService.getUsers()
  }
  addUser() {
    if (this.newUser.id && this.newUser.name && this.newUser.email && this.newUser.age) {
      this.userService.addUser(this.newUser)
      this.newUser = { id: 0, name: '', email: '', age: 0 }
      this.refreshUsers()
    }
  }
  updateUser(id: number) {
    const user: User | null = this.userService.getUserById(id)
    if (user != null) {
      user.name = prompt('Enter name:') as string
      this.userService.updateUser(id, user)
    }
    this.refreshUsers()
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id)
    this.refreshUsers()
  }
}
