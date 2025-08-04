import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { NgxSpinnerComponent } from "ngx-spinner";
import { FreeDictionaryHelpers } from '../_helpers/free-dictionary-helpers';
import { DictionaryError, isDictionaryError } from '../_models/dictionary.model.error';
import { ActivatedRoute, Router } from '@angular/router';
import { FreeDictionaryAPI } from '../_services/free-dictionary-api';
import { DictionaryEntry } from '../_models/dictionary.model';
import { CustomValidators } from '../_validators/whitespace.validator';

@Component({
  selector: 'app-api-search',
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgxSpinnerComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './api-search.html',
  styleUrl: './api-search.css'
})
export class ApiSearch implements OnInit, OnDestroy{
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  dictionaryApi = inject(FreeDictionaryAPI);

  dictionaryResult = signal<DictionaryEntry[] | DictionaryError | null>(null);
  audioPlaying = signal<boolean>(false);
  submitted = signal<boolean>(false);
  currentPage = signal<number>(1);
  totalPages = computed(() => {
    let res = this.dictionaryResult();
    if (!this.isDictionaryError(res) && res != null) {
      return res.length;
    }
    return 0;
  });

  private audio = new Audio();

  searchForm = this.fb.group({
    searchbar: ['', [Validators.required, CustomValidators.noWhitespaceValidator]],
  });

  get searchbar() {
    return this.searchForm.get('searchbar');
  }

  ngOnInit() {
    this.handleQueryParams();
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.remove();
    }
  }

  search(word?: string) {
    this.submitted.set(true);
    if (word) this.router.navigate([], { queryParams: { q: word }, relativeTo: this.route }).then();
    else this.router.navigate([], { queryParams: { q: this.getSearchbarValue() }, relativeTo: this.route }).then();
  }

  isSearchbarInvalid(): boolean {
    if (!this.searchbar) return false;
    return (this.searchbar.invalid && (this.searchbar.dirty || this.searchbar.touched)) && this.submitted();
  }

  getSearchbarValue(): string | null {
    if (this.searchForm.valid) {
      const query = this.searchbar?.value?.trim();
      if (query) {
        return query;
      }
    }
    return null;
  }

  resetSearchbar() {
    this.searchForm.reset();
    this.submitted.set(false);
  }

  playAudio(src: string) {
    if (!this.audioPlaying()) {
      this.audioPlaying.set(true);
      this.audio.src = src;
      this.audio.load();
      this.audio.onended = () => {
        this.audioPlaying.set(false);
      };

      this.audio.play().catch(() => {
        this.audioPlaying.set(false);
      });
    }
  }

  private handleQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        const encodedParam = encodeURIComponent(decodeURIComponent(params['q']));
        this.searchForm.patchValue({ searchbar: decodeURIComponent(params['q']) });

        this.dictionaryApi.getWordData(encodedParam).subscribe({
          next: data => this.dictionaryResult.set(data),
          error: err => this.dictionaryResult.set(err)
        });
      }
    });
  }

  previousPage() {
    if (this.currentPage() === 1) return;
    this.currentPage.set(this.currentPage() - 1);
  }

  nextPage() {
    if (this.currentPage() === this.totalPages()) return;
    this.currentPage.set(this.currentPage() + 1);
  }

  protected readonly isDictionaryError = isDictionaryError;
  protected readonly FreeDictionaryHelpers = FreeDictionaryHelpers;
}
