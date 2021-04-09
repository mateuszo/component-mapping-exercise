import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  currentPath$: Observable<string> = this.route.url.pipe(
    map((segments: UrlSegment[]) => {
      return this.urlToPath(segments);
    })
  );

  ngOnInit() {}

  private urlToPath(url: UrlSegment[]): string {
    if (url.length === 0) return "/";
    return url
      .map(segment => segment.path)
      .reduce((accumulator, currentValue) => accumulator + "/" + currentValue);
  }
}
