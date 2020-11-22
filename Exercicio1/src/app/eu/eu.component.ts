import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Karen';
  idade: string = '32';
  pais: string = 'Venezuela';
  cidade: string = 'Rio de Janeiro';
  gosto: string = 'Sushi';
  img: string = './assets/Eu.jpg'



  constructor() { }

  ngOnInit(): void {
  }

}
