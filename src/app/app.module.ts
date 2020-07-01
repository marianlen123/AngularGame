import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { UserService } from './main/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    MainComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [MainComponent]
})
export class AppModule { }
