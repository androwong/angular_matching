import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalystComponent } from './pages/analyst/analyst.component';
import { ManagersComponent } from './pages/managers/managers.component';
import { MatchingComponent } from './pages/matching/matching.component';
import { EnterRankingsComponent } from './pages/enter-rankings/enter-rankings.component';
import { ViewMatchComponent } from './pages/view-match/view-match.component';
import { AboutComponent } from './pages/about/about.component';
import { HowToUseComponent } from './pages/how-to-use/how-to-use.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    { path: '', component: AnalystComponent},
    { path: 'managers', component: ManagersComponent},
    { path: 'matching', component: MatchingComponent},
    { path: 'enter-rankings', component: EnterRankingsComponent},
    { path: 'view-match', component: ViewMatchComponent},
    { path: 'about', component: AboutComponent},
    { path: 'how-to-use', component: HowToUseComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}