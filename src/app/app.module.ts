import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './templates/header/header.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { AnalystComponent } from './pages/analyst/analyst.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { MatchingComponent } from './pages/matching/matching.component';
import { EnterRankingsComponent } from './pages/enter-rankings/enter-rankings.component';
import { ViewMatchComponent } from './pages/view-match/view-match.component';
import { AboutComponent } from './pages/about/about.component';
import { HowToUseComponent } from './pages/how-to-use/how-to-use.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AnalystComponent,
    ManagersComponent,
    MatchingComponent,
    EnterRankingsComponent,
    ViewMatchComponent,
    AboutComponent,
    HowToUseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
