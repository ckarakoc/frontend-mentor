import { Component, ElementRef, inject, model, OnChanges, OnDestroy, OnInit, Renderer2, signal, SimpleChanges, viewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgOptimizedImage, TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-font-dropdown',
  imports: [
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    TitleCasePipe
  ],
  template: `
    <div #dropdown class="relative h-8 w-28 select-none px-3 text-sm font-bold text-d-slate-500 text-nowrap hover:cursor-pointer dark:text-white md:text-lg"
         (click)="toggleDropdown()">
      <form class="flex h-full flex-col items-end justify-center align-middle" [formGroup]="fontForm">
        <div class="select-none pr-5 hover:cursor-pointer">{{ fontForm.value.typeface | titlecase }}</div>

        <div class="absolute top-10 right-1">
          <div class="absolute -inset-1 z-10 rounded-xl bg-black opacity-10 blur dark:bg-d-purple dark:opacity-75">
          </div>
          <div class="relative z-10 flex flex-col gap-4 rounded-xl bg-white py-4 pr-12 pl-6 dark:bg-d-slate-400"
               [class.hidden]="!isDropdownVisible()">
            <input type="radio"
                   class="hidden"
                   formControlName="typeface"
                   id="sans-serif"
                   value="sans serif">
            <label class="font-inter hover:text-d-purple hover:cursor-pointer"
                   (click)="toggleDropdown()"
                   for="sans-serif">Sans Serif</label>

            <input type="radio"
                   class="hidden"
                   formControlName="typeface"
                   id="serif"
                   value="serif">
            <label class="font-lora hover:text-d-purple hover:cursor-pointer"
                   (click)="toggleDropdown()"
                   for="serif">Serif</label>

            <input type="radio"
                   class="hidden"
                   formControlName="typeface"
                   id="mono"
                   value="mono">
            <label class="font-inconsolata hover:text-d-purple hover:cursor-pointer"
                   (click)="toggleDropdown()"
                   for="mono">Mono</label>
          </div>
        </div>
      </form>
      <div class="absolute top-1/2 right-2 -translate-y-1/2 transform">
        <img ngSrc="assets/images/icon-arrow-down.svg" alt="arrow down" height="8" width="14">
      </div>
    </div>
  `,
  styles: ``
})
export class FontDropdown implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private fb = inject(FormBuilder);

  isDropdownVisible = signal<boolean>(false);
  dropdown = viewChild('dropdown', { read: ElementRef });
  typeface = model<string | null>();

  fontForm = this.fb.group({
    typeface: ['sans serif', [Validators.required]] // it's actually a typeface, but w.e.
  });

  private readonly clickListener = this.renderer.listen('document', 'click', (event: Event) => {
    if (!this.dropdown()?.nativeElement.contains(event.target as Node)) {
      this.isDropdownVisible.set(false);
    }
  });

  ngOnInit() {
    const savedFont = localStorage.getItem('selectedTypeface');
    if (savedFont) {
      this.fontForm.patchValue({ typeface: savedFont });
      this.typeface.set(this.fontForm.value.typeface);
    }
    this.fontForm.valueChanges.subscribe(value => {
      if (value.typeface) {
        localStorage.setItem('selectedTypeface', value.typeface);
      }
      this.typeface.set(value.typeface);
    });
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.renderer) {
      this.renderer.destroy();
    }
  }

  toggleDropdown() {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }
}
