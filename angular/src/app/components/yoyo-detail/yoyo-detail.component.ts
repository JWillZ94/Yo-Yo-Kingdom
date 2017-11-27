import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yoyo-detail',
  templateUrl: './yoyo-detail.component.html',
  styleUrls: ['./yoyo-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class YoyoDetailComponent implements OnInit {
  yoyo = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getYoYoDetail(this.route.snapshot.params['id']);
  }

  getYoYoDetail(id) {
    this.http.get('http://localhost:3000/yoyo/' + id).subscribe(data => {
      this.yoyo = data;
    });
  }

}
