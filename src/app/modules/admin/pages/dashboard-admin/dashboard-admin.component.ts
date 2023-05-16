import { Component } from '@angular/core';
import { Menu } from '../../interfaces/menu.inteface';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  menu: Menu[];
  perfil: string = 'municipalidad';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.menu = [
      { name: 'Inicio', icon: 'home', link: 'home' },
      { name: 'Profesionales TI', icon: 'home', link: 'applicants' },
      { name: 'Compañías', icon: 'person', link: 'companies' },
      { name: 'Estadísticas', icon: 'settings', link: 'statistics' },
    ];
  }
  
  ngOnInit(): void {
 

  }






}
