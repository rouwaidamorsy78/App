import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  selectedIndex: number | null = null;

  imageArr = [
    { imageUrl: '/images/poert1.png', imageAlt: 'port1' },
    { imageUrl: '/images/port2.png', imageAlt: 'port2' },
    { imageUrl: '/images/port3.png', imageAlt: 'port3' },
    { imageUrl: '/images/poert1.png', imageAlt: 'port1' },
    { imageUrl: '/images/port2.png', imageAlt: 'port1' },
    { imageUrl: '/images/port3.png', imageAlt: 'port1' },
  ];

  isSelected!: string;
  openSlide: boolean = true;
  openPhoto(index: number): void {
    this.openSlide = false;
    // console.log(index);

    this.isSelected = this.imageArr[index].imageUrl;
    // console.log(this.isSelected);
  }
  closeLayer(){
    this.openSlide = true;
  }
 
}
