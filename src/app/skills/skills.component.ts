import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  @Input() skills: any[] = [];
  width: String = this.skills.length + "00%";
  currentSlide = 0;
  amountToMove = 0;
  classes = new Array(5).fill("inactive")

  constructor(private cdRef: ChangeDetectorRef) {
    this.classes[this.currentSlide] = "active"
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.slideTo(this.currentSlide + 1)
    }, 2000);
    this.width = this.skills.length + "00%";
    this.cdRef.detectChanges();
  }

  public slideTo(i: number) {
    i = i % this.skills.length;
    this.classes[this.currentSlide] = 'inactive'
    this.classes[i] = "active"
    this.amountToMove = (i * 100) / this.skills.length
    this.currentSlide = i;
  }

}
