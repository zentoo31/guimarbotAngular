import { Routes } from '@angular/router';
import { MainComponent } from './mainPages/main/main.component';
import { LoginComponent } from './mainPages/login/login.component';
import { NotFoundComponent } from './mainPages/not-found/not-found.component';
import { RegisterComponent } from './mainPages/register/register.component';
import { ProfileComponent } from './dashboardPages/profile/profile.component';
import { CommunityComponent } from './dashboardPages/community/community.component';
import { authGuard } from './guards/auth.guard';
import { FavoritesComponent } from './dashboardPages/favorites/favorites.component';
import { AchievementsComponent } from './dashboardPages/achievements/achievements.component';
import { DashboardComponent } from './dashboardPages/dashboard/dashboard.component';
import { PostDetailComponent } from './dashboardPages/community/post-detail/post-detail.component';
import { SubjectsComponent } from './dashboardPages/subjects/subjects.component';
import { SubjectDetailComponent } from './dashboardPages/subjects/subject-detail/subject-detail.component';
import { PayuComponent } from './mainPages/payu/payu.component';
import { RoutesSubjectComponent } from './dashboardPages/subjects/routes-subject/routes-subject.component';
import { ScholarshipComponent } from './dashboardPages/scholarship/scholarship.component';
import { BuyComponent } from './dashboardPages/buy/buy.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "pay", component: PayuComponent},
    {path: "dashboard", component: DashboardComponent, children: [
        {path: "", redirectTo: "profile", pathMatch: "full"},
        {path: "profile", component: ProfileComponent},
        {path: "favorites", component: FavoritesComponent},
        {path: "community", component: CommunityComponent},
        {path: "community/:id", component: PostDetailComponent},
        {path: "subjects", component: SubjectsComponent},
        {path: "subjects/:id", component: SubjectDetailComponent},
        {path: "achievements", component: AchievementsComponent},
        {path: "routes-subject", component: RoutesSubjectComponent},
        {path: "buy", component: BuyComponent},
        {path: "scholarship", component: ScholarshipComponent}
        
    ]},
    {path: "**", component: NotFoundComponent}
];
