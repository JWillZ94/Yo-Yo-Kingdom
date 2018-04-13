import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { InventoryService } from '../../services/inventory.service';
import { CreateYoyoService } from '../../services/create-yoyo.service';
import { UpdateYoyoService } from '../../services/update-yoyo.service';
import { DeleteYoyoService } from '../../services/delete-yoyo.service';

@Component({ // Child to CartComponent
  selector: 'app-yo-yos',
  templateUrl: './yo-yos.component.html',
  styleUrls: ['./yo-yos.component.css']
})
export class YoYosComponent implements OnInit {
  yoyos: any = [];
  yoyoCart: any = [];
  yoyo: any = {};


  constructor( // uses HttpClient for this component, in this example, connecting to the back-end
    private http: HttpClient,
    private inventoryService: InventoryService,
    private createYoYoService: CreateYoyoService,
    private updateYoYoService: UpdateYoyoService,
    private deleteYoYoService: DeleteYoyoService
  ) {}

  ngOnInit() {
    this.getYoYos();
  }

  getYoYos() {
    this.inventoryService.getYoYos()
      .subscribe(yoyos => this.yoyos = yoyos);
  }

}
