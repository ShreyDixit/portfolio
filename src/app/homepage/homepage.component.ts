import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  formEndPoint: string = "https://formspree.io/f/xdoyadzg"
  formMessage: string = "";

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  })

  constructor() {
    this.links = [
      { "name": "About", "href": "#about" },
      { "name": "Contact", "href": "#contact" },
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

    if (event.wheelDelta < 0)
      this.scrollDown()
    else
      this.scrollUp()
  }

  swipe(event: any) {
    if (this.semafore || Math.abs(event.distance) < 4 || event.direction === 'x')
      return

    if (event.distance > 0)
      this.scrollUp()
    else
      this.scrollDown()
  }

  scrollTo(idx: number) {
    this.translateY = idx
  }

  scrollDown() {
    this.semafore = true
    if (this.translateY !== this.links.length)
      this.translateY++;
    setTimeout(() => { this.semafore = false }, this.slideTimer + 200);
  }

  scrollUp() {
    this.semafore = true
    if (this.translateY !== 0)
      this.translateY--;
    setTimeout(() => { this.semafore = false }, this.slideTimer + 200);
  }

  async formSubmit() {
    if (this.contactForm.invalid)
      return;

    this.contactForm.disable()

    const response = await fetch(this.formEndPoint, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.contactForm.get('name')?.value,
        replyto: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value
      })
    });

    this.formMessage = response.status === 200 ? "I have recieved your message and I will reach out to you shortly" : "Oops, it seems there was error. Please retry after some time"
  }

}
