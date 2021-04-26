import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwipeEvent } from 'ng-swipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {

  typewriter_text: string = "WEB DEVELOPER + DATA SCIENTIST";
  typewriter_display: string = "";
  links: any[];
  skills: any[];
  translateY: number = 0
  width = "100vh"
  semafore = false;
  slideTimer = 250

  constructor() {
    this.links = [
      { "name": "About", "href": "#about" },
    ];

    this.skills = [
      "assets/skills/angular.png",
      "assets/skills/firebase.png",
      "assets/skills/node-js.webp",
      "assets/skills/Pytorch.png",
      "assets/skills/TensorFlow.png",
      "assets/skills/SkLearn.png",
    ]

    this.width = `$(this.links.length)00vh`
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

  scroll(event: any) {
    if (this.semafore || Math.abs(event.wheelDelta) < 10)
      return;
    this.semafore = true

    if (event.wheelDelta < 0)
      this.scrollDown()
    else
      this.scrollUp()

    setTimeout(() => { this.semafore = false }, this.slideTimer + 200);
  }

  swipe(event: any) {
    console.log('any')
    if (this.semafore || Math.abs(event.distance) < 4 || event.direction === 'x')
      return
    this.semafore = true

    if (event.distance > 0)
      this.scrollUp()
    else
      this.scrollDown()

    setTimeout(() => { this.semafore = false }, this.slideTimer + 200);
  }

  scrollTo(idx: number) {
    this.translateY = idx
  }

  scrollDown() {
    if (this.translateY !== this.links.length)
      this.translateY++;
  }

  scrollUp() {
    if (this.translateY !== 0)
      this.translateY--;
  }

}
