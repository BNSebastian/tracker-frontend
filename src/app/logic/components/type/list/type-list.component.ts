import { frontendUrl } from 'src/app/shared/environments/frontend';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TypeRead } from '../../../models/type';
import { TypeService } from '../../../services/type.service';
import { backendUrl } from 'src/app/shared/environments/backend';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent {
  public dataArray!: TypeRead[];

  constructor(private typeService: TypeService, private router: Router) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.typeService.getAll().subscribe((apiData: TypeRead[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate([`${frontendUrl.type}/${id}`]);
  }

  deleteData(id: number) {
    this.typeService.deleteById(id).subscribe(
      (response) => {
        console.log('API body:', response);
      },
      (error) => {
        console.log('API error:', error);
      }
    );
    this.router.navigateByUrl(frontendUrl.type);
  }
}
