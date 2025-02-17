import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from "./ components /svg/svg/svg/svg.component";
import { ISvg } from './ components /svg/svg/svg/interfaces/svg.interface';

@Component({
  selector: 'app-root',
  imports: [SvgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
data:ISvg={status:'circle',fill:'red',width:100,height:100,tag:'svg'}
}
