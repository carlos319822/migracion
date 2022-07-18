import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[]=[];

  
  mobileQuery: MediaQueryList;

  

  

  private _mobileQueryListener: () => void;

  constructor(private _menuService: MenuService,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => {
      this.menu=data;
    })
  }
  

}
