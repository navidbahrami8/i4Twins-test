import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input
} from '@angular/core';
import * as d3 from 'd3';
import { ISvg } from './interfaces/svg.interface';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.css',
})
export class SvgComponent implements AfterViewInit {
  colors:string[]=['blue','green', 'black']
  svg:any;
  isInput:boolean=false
 _data!:ISvg;
get data(): ISvg {
    return this._data;
}
@Input() set data(value: ISvg) {
    this._data = value;
    this.createChart();
}
@Input() title!:string
  constructor(private el: ElementRef,private cdf:ChangeDetectorRef
   ) {}
  ngAfterViewInit(): void {
    
  }
   createChart(): void {

    const container = this.el.nativeElement.querySelector('#canvas');
    container.innerHTML = '';  // پاک کردن محتویات قبلی

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(this._data.data, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    container.appendChild(svgElement); // اضافه کردن SVG به container

    //this.svg = d3
    //  .select(this.el.nativeElement)
     // .select(this._data?.tag)
     // .attr('width', this._data?.width)
     // .attr('height', this._data?.height);

   this.svg
    .append(svgElement)
    .attr('fill', this._data?.fill);

      this.svg.select(svgElement)
      .on('click', (event:any) => {
        this.changeColor()
        //وقتی چپ کلیک را میزنیم
      })
      .on('contextmenu', (event:any) => {
        event.preventDefault();
        this.isInput =true;
        this.cdf.markForCheck();
        //وقتی راست کلیک را میزنیم
      });
      this.cdf.detectChanges();
  }

  changeColor(){
    for (let index = 1; index < this.colors.length; index++) {
      const element = this.colors[index];
      setTimeout(() => {
      this.svg.append(this._data?.status).attr('fill',element)
      this.cdf.markForCheck();
      },5000)
    }
  }
}
