import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PageService } from "./services/page.service";
import { ComponentService } from "./services/component.service";
import { BannerComponent } from "./components/banner/banner.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { TextComponent } from "./components/text/text.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";
import { PageComponent } from "./components/page/page.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavigationComponent,
    TextComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "**", component: PageComponent }])
  ],
  bootstrap: [AppComponent],
  providers: [PageService, ComponentService]
})
export class AppModule {}
