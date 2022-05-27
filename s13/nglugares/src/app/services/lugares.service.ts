import { Injectable } from '@angular/core';
// herramienta que permite hacer peticiones
import { HttpClient } from "@angular/common/http"
// Observable es la manera que se va a manejar el resultado de las peticiones, types
import { Observable } from 'rxjs';

@Injectable({
  // indica que no es necesario incluirlo en app.module.ts
  providedIn: 'root'
})
export class LugaresService {
  url:string = "https://62731e366b04786a09017eb6.mockapi.io/categorias"

  // inyección por depencdencias: declarar algo como una propiedad más (en este caso _Http)
  // reemplazar const_Http = new HttpClient()
  constructor(private _Http: HttpClient) { }

  obtenerCategorias(): Observable<any> {
    return this._Http.get(this.url)
  }
}
