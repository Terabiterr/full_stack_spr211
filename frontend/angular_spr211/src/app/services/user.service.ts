import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({ //DI
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alex', email: 'alex@gmail.com', age: 27 },
    { id: 2, name: 'Felix', email: 'felix@gmail.com', age: 45 },
    { id: 3, name: 'Tom', email: 'tom@gmail.com', age: 85 },
    { id: 4, name: 'Mario', email: 'mario@gmail.com', age: 18 },
    { id: 5, name: 'Jerry', email: 'jerry@gmail.com', age: 99 }
  ]
  constructor() { }
  getUsers(): User[] {
    return this.users
  }
  addUser(user: User): User {
    this.users.push(user)
    return user
  }
  updateUser(id: number, user: User): User {
    this.users.forEach(u => {
      if(u.id == id) {
        u.name = user.name
        u.email = user.email
        u.age = user.age
      }
    })
    return user
  }
  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id)
  }
  getUserById(id: number) : User | null {
    return this.users.find(u => u.id === id) as User | null
  }
}
