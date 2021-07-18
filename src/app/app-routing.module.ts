import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    {path: "", component: AuthComponent},
    {path: "home", loadChildren: () =>import('./sidenav/sidenav-routing').then(m => m.SidenavRouting)}  
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}