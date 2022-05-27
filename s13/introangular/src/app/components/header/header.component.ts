import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hobbies:Array<string> = [
    "Tocar guitarra",
    "Probar comida",
    "Cocinar",
    "Jugar fútbol"
  ]

  meQuiere:boolean = true

  url:string = "https://picsum.photos/200/300"

  nuevoHobby:string = "Hacer surf"

  constructor() { }

  agregarNuevoHobby() {
    // this para referenciar la clase HeaderComponent
    console.log(this.nuevoHobby)
    this.hobbies.push(this.nuevoHobby)
  }

  ngOnInit(): void {
  }

}
