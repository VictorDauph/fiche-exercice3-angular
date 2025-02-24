import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {
      id: 1,
      name: 'Alice Dupont',
      email: 'alice.dupont@example.com',
      age: 28,
    },
    {
      id: 2,
      name: 'Jean Martin',
      email: 'jean.martin@example.com',
      age: 35,
    },
    {
      id: 3,
      name: 'Claire Bernard',
      email: 'claire.bernard@example.com',
      age: 24,
    },
    {
      id: 4,
      name: 'Thomas Leroy',
      email: 'thomas.leroy@example.com',
      age: 42,
    },
    {
      id: 5,
      name: 'Marie Curie',
      email: 'marie.curie@example.com',
      age: 30,
    },
  ];

  private usersSubject = new BehaviorSubject<any[]>(this.users);

  addUser(user: any) {
    this.users.push(user)
    this.usersSubject.next(this.users);
    console.log(this.users)
  }

  getUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }
}
