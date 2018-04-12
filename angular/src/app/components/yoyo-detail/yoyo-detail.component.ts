import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { UpdateYoyoService } from '../../services/update-yoyo.service';

@Component({
  selector: 'app-yoyo-detail',
  templateUrl: './yoyo-detail.component.html',
  styleUrls: ['./yoyo-detail.component.css']
})
export class YoyoDetailComponent implements OnInit {
  yoyo: any = {};

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private updateYoYoService: UpdateYoyoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getYoYo(this.route.snapshot.params['id']);
  }

  getYoYo(id) {
    this.inventoryService.getYoYo(id)
      .subscribe(yoyo => this.yoyo = yoyo);
  }

  updateYoYo(id) { // works
    this.updateYoYoService.updateYoYo(id)
      .subscribe(res => this.router.navigate(['/yo-yos']),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Front-end error occurred' + err.error.message);
        } else {
          console.log('Back-end error occurred..' + err.status + '..body was..' + err.error);
        }
      });
  }

}
