import { Routes } from '@angular/router';

import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';



export const routes: Routes = [
    {
        path: "portfolio",
        component: Portfolio
    },

    {
        path: "contact",
        component: Contact
    },

    {path: "about",
        component: About
    },
    {
        path: "home",
        component: Home
    },

{
    path: "",
    redirectTo: "home",
    pathMatch: "full"
},
    
{
    path: "not-found",
component: NotFound},

{path: "**",
    redirectTo: "not-found",
    pathMatch: "full",
}
];
