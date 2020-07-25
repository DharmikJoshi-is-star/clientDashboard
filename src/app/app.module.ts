import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SampleModule } from "app/main/sample/sample.module";
import { AuthHttpInterceptor } from "./auth/auth-http-interceptor";

const appRoutes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./start/start.module").then((m) => m.StartModule),
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: "mail",
        loadChildren: () =>
            import("./mail/mail.module").then((m) => m.MailModule),
    },
    {
        path: "users",
        loadChildren: () =>
            import("./users/users.module").then((m) => m.UsersModule),
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "groups",
        loadChildren: () =>
            import("./groups/groups.module").then((m) => m.GroupsModule),
    },
    {
        path: "role",
        loadChildren: () =>
            import("./role/role.module").then((m) => m.RoleModule),
    },
    {
        path: "sample",
        redirectTo: "sample",
    },
    {
        path: "**",
        loadChildren: () =>
            import("./errors/errors.module").then((m) => m.ErrorsModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthHttpInterceptor,
            multi: true,
        },
    ],
})
export class AppModule {}
