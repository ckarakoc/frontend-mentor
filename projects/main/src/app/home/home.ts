import { AfterViewInit, Component, computed, ElementRef, inject, OnInit, Signal, signal, ViewChild, viewChildren } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { HomeCard } from '../home-card/home-card';
import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface MasonryCardData {
  imgUrl: string;
  link: string;
  cardContent: string;
  cardTitle: string;
  tags: string[];
  useHref?: boolean;
  golden?: boolean;
}


@Component({
  selector: 'app-home',
  imports: [
    FaIconComponent,
    HomeCard,
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  @ViewChild('masonry') masonry!: ElementRef<HTMLDivElement>;
  homeCardList = viewChildren(HomeCard);
  outerHomeCardDivList: Signal<readonly ElementRef[]> = viewChildren('outerHomeCardDiv', { read: ElementRef });

  isElementScrolled = signal<boolean>(false);
  isWindowScrolled = signal<boolean>(false);
  isScrollAtTop = computed(() => !this.isElementScrolled() && !this.isWindowScrolled());

  private http: HttpClient = inject(HttpClient);
  protected masonryData!: MasonryCardData[];

  ngOnInit(): void {
    this.http.get<MasonryCardData[]>('assets/data/masonry-cards.json').subscribe(data => this.masonryData = data);
  }

  ngAfterViewInit(): void {
    this.giveOriginToDivs();
    setTimeout(() => {
      this.giveOriginToDivs();
    }, 3000);
  }

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

  giveOriginToDivs(): void {
    const outerDivList = this.outerHomeCardDivList();
    this.homeCardList().map((h, idx) => {
      if (outerDivList[idx].nativeElement.getBoundingClientRect().top < 50) {
        h.addClassToFirstDiv('origin-top');
        h.removeClassToFirstDiv('origin-bottom');
      } else {
        h.addClassToFirstDiv('origin-bottom');
        h.removeClassToFirstDiv('origin-top');
      }
    });
  }

  protected readonly faChevronCircleUp = faChevronCircleUp;
}
