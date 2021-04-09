import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ComponentMeta } from "../interfaces/models";

@Injectable()
export class ComponentService {
  readonly components: ComponentMeta[] = [
    { id: "header-links", typeCode: "navigation" },
    {
      id: "home-banner",
      typeCode: "banner",
      content: "https://plchldr.co/i/400x225?&bg=4287f5&fc=fff&text=Home Banner"
    },
    {
      id: "contact-banner",
      typeCode: "banner",
      content:
        "https://plchldr.co/i/400x225?&bg=f55d42&fc=fff&text=Contact Banner"
    },
    {
      id: "faq-banner",
      typeCode: "banner",
      content: "https://plchldr.co/i/400x225?&bg=5af542&fc=fff&text=FAQ Banner"
    },
    { id: "contact-text", typeCode: "text", content: "This is contact text" },
    { id: "faq-text", typeCode: "text", content: "This is faq text" },
    { id: "footer", typeCode: "footer" }
  ];

  get(componentId: string): Observable<ComponentMeta> {
    return of(this.components.find(component => component.id === componentId));
  }
}
