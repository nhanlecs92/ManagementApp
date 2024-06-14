import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from '../models/language.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  languages: ILanguage[] = [
    {
      value: 'en',
      viewValue: 'English',
      imgUrl: 'Flag_of_the_United_Kingdom.svg',
    },
    {
      value: 'vi',
      viewValue: 'Việt Nam',
      imgUrl: 'Flag_of_Vietnam.svg',
    },
  ];
  selectedLanguage = this.languages[0].value;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
