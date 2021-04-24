import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  typewriter_text: string = "WEB DEVELOPER + DATA SCIENTIST";
  typewriter_display: string = "";
  links: any[];

  constructor() {
    this.links = [
      {"name": "About", "href": "#"},
      {"name": "About", "href": "#"},
      {"name": "About", "href": "#"},
      {"name": "About", "href": "#"},
    ];
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let pointer_text = 0;
    var interval = setInterval(() => {
      this.typewriter_display += this.typewriter_text[pointer_text++];
      if (pointer_text === this.typewriter_text.length)
        clearInterval(interval);

    }, 50);
  }

}
