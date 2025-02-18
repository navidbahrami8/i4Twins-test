import { ChangeDetectorRef, Component } from '@angular/core';
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
svgData: string = ''; // متغیر برای ذخیره داده SVG
constructor(private cdf:ChangeDetectorRef)
  {}
onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (file && file.type === "image/svg+xml") {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.svgData = e.target.result;  // ذخیره داده SVG
    };
this.data={data:this.svgData,status:'circle',fill:'red',width:500,height:500,tag:'svg'}
this.cdf.detectChanges()
    reader.readAsText(file);
  } else {
    console.error("لطفاً یک فایل SVG انتخاب کنید.");
  }
}

}
