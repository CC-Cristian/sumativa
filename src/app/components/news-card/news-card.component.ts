import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent  implements OnInit {
  @Input() newsTitle: string = '';
  @Input() newsDescription: string = '';
  @Input() newsImage: string = '';
  columnSize: number = 12; // Se utilizará en el sistema de columnas de Ionic
  layoutClass: string = ''; // Clase para aplicar el diseño específico

  
  constructor() {
    this.setColumnSize();
    
  }

  private setColumnSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
      this.columnSize = 4; // 3 columnas en pantallas grandes
    } else if (screenWidth >= 768) {
      this.columnSize = 6; // 2 columnas en pantallas medianas
    } else {
      this.columnSize = 12; // 1 columna en pantallas pequeñas
    }
  }
  ngOnInit() {

    
      this.setLayoutClass();
    
  }

  private setLayoutClass() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
      this.layoutClass = 'large-screen-layout';
    } else if (screenWidth >= 768) {
      this.layoutClass = 'medium-screen-layout';
    } else {
      this.layoutClass = 'small-screen-layout';
    }
  }

}
