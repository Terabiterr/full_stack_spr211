import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../models/User';


@Injectable({ //DI
  providedIn: 'root'
})
export class ProductService {
  private token: string = ``
  private url: string = `https://localhost:7255/api/apiproducts`
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    //Помилка скоріш усього потрібно використати ngOnInit
    const user = new User()
    user.email = "mario@gmail.com"
    user.password = "0000"
    this.authService.getToken(user).subscribe(
      (data: string) => {
      this.token = data
      console.log(this.token)
    },
    (error) => {
      console.log(error)
    })
   }
  //Create
  createProduct(product: Product) : Observable<any> {
    return this.http.post(this.url, product);
  }
  //Read all
  getProducts() :Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  //read by id
  getProductById(id: number) : Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
  //Update
  updateProduct(id: number, product: Product) : Observable<any> {
    return this.http.put(`${this.url}/${id}`, product);
  }
  //Delete
  deleteProduct(id: number) : Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
