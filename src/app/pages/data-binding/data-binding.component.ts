import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Adriana Arake';
  imageUrl = 'https://picsum.photos/200/300';
  imageDesc = 'essa é uma image';
  buttonText = 'Clique aqui';
  textRed = true;
  bgColor = 'green';
  fontSize = '60px';
  widthImg = 300;
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    console.log('clicou aqui', value);
  }

  clicouNoFilho(text: any) {
    console.log(text);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }
}
