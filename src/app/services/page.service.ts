import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Page } from "../interfaces/models";

@Injectable()
export class PageService {
  readonly pages: Page[] = [
    {
      path: "/",
      title: "Homepage",
      componentIds: ["header-links", "home-banner", "footer"]
    },
    {
      path: "contact",
      title: "Contact page",
      componentIds: ["header-links", "contact-banner", "contact-text", "footer"]
    },
    {
      path: "faq",
      title: "Frequently Asked Questions",
      componentIds: ["header-links", "faq-banner", "faq-text", "footer"]
    }
  ];

  getPage(path: string): Observable<Page> {
    return of(this.pages.find(page => page.path === path));
  }
}
