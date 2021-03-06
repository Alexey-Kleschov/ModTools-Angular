import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { A11yFlyoutComponent } from './a11y-flyout/a11y-flyout.component';
import { UserFlyoutComponent } from './user-flyout/user-flyout.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { ContentTypePickerComponent } from './content-type-picker/content-type-picker.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    SearchComponent,
    LanguagePickerComponent,
    A11yFlyoutComponent,
    UserFlyoutComponent,
    ClientPickerComponent,
    ContentTypePickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class MainModule { }
