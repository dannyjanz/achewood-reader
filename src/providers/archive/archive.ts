import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comic } from '../comic';

@Injectable()
export class ArchiveProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ArchiveProvider Provider');
  }

  loadArchivePage(): Observable<Comic[]> {
    let parser = new DOMParser();

    return this.http.get('http://www.achewood.com/list.php', { responseType: 'text' }).pipe(
      map(page => parser.parseFromString(page.toString(), 'text/html')),
      map(document => document.getElementById("body").getElementsByTagName("dl")),
      map(this.getDListElements),
      map(links => links.map(link => new Comic(link.innerHTML.toString(), link.getAttribute("href"))) )
    );
  }

  getDListElements(nodes: NodeListOf<HTMLDListElement>): Array<Element> {

    let elements: Array<Element> = [];
    for(let i = 0; i < nodes.length; i++) {    
      let children = nodes[i].children
          
      for(let j = 0; j < children.length; j++) {    
        let element = children[j]
            
        if(element.tagName == 'DD') {
          elements.push(element.children[0]);
        }
      }
    }
    return elements;
  }

}
