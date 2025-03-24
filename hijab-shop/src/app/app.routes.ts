import { Routes } from '@angular/router';
import {HomepageComponent} from '../app/components/homepage/homepage.component'

export const routes: Routes = [
    {path: '', redirectTo: '/frontpage', pathMatch: 'full' },
    {path: 'frontpage', component: HomepageComponent },
];
