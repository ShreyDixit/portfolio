import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() links: any;
  @Input() translateY: number = 0;
  @Output() clickedElIdx = new EventEmitter<number>();

  sideNav = false

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(idx: number): void {
    this.clickedElIdx.emit(idx + 1);
  }

}
