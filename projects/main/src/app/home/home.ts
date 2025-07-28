import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { HomeCard } from '../home-card/home-card';


@Component({
  selector: 'app-home',
  imports: [
    FaIconComponent,
    HomeCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @ViewChild('masonry') masonry!: ElementRef<HTMLDivElement>;

  isElementScrolled = signal<boolean>(false);
  isWindowScrolled = signal<boolean>(false);
  isScrollAtTop = computed(() => !this.isElementScrolled() && !this.isWindowScrolled())

  checkScrollTop(el: HTMLElement): void {
    this.isElementScrolled.set(el.scrollTop > 50);
    this.isWindowScrolled.set(window.scrollY > 50);
  }

  scrollToTop(el: HTMLElement): void {
    if (this.isElementScrolled())
      el.scrollTo({ top: 0, behavior: 'smooth' });
    else
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected readonly faChevronCircleUp = faChevronCircleUp;
}
