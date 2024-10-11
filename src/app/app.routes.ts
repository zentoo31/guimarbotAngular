import { Routes } from '@angular/router';
import { MainComponent } from './mainPages/main/main.component';
import { LoginComponent } from './mainPages/login/login.component';
import { NotFoundComponent } from './mainPages/not-found/not-found.component';
import { RegisterComponent } from './mainPages/register/register.component';
import { ProfileComponent } from './dashboardPages/profile/profile.component';
import { BlogComponent } from './dashboardPages/blog/blog.component';
import { CommunityComponent } from './dashboardPages/community/community.component';
import { WorkshopComponent } from './dashboardPages/workshop/workshop.component';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboardPages/dashboard/dashboard.component';
import { PostDetailComponent } from './dashboardPages/community/post-detail/post-detail.component';
import { SubjectsComponent } from './dashboardPages/subjects/subjects.component';
import { SubjectDetailComponent } from './dashboardPages/subjects/subject-detail/subject-detail.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "dashboard", component: DashboardComponent, children: [
        {path: "", redirectTo: "profile", pathMatch: "full"},
        {path: "profile", component: ProfileComponent},
        {path: "blog", component: BlogComponent},
        {path: "community", component: CommunityComponent},
        {path: "community/:id", component: PostDetailComponent},
        {path: "subjects", component: SubjectsComponent},
        {path: "subjects/:id", component: SubjectDetailComponent},
        {path: "workshop", component: WorkshopComponent}
    ]},
    {path: "**", component: NotFoundComponent}
];
