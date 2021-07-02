import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-client-domi',
  templateUrl: './navigation-client-domi.component.html',
  styleUrls: ['./navigation-client-domi.component.css']
})
export class NavigationClientDomiComponent implements OnInit {
  opened: boolean;
  mode = new FormControl('over');
  showFiller = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }

}
