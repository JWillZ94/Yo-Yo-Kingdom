import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  yoyo = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  saveYoYo() {
    this.http.post('http://localhost:3000/yoyo', this.yoyo)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/yoyo-details', id]); // Goes to this route after it gets the job done
      }, (err) => {
        console.log(err);
      });
  }

  updateYoYo(id, data) {
    this.http.put('http://localhost:3000/yoyo/' + id, data)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/yoyo-details', id]);
      }, (err) => {
        console.log(err);
      }
    );
  }

  deleteYoYo(id) {
    this.http.delete('http://localhost:3000/yoyo/' + id)
      .subscribe(res => {
        this.router.navigate(['/yo-yos']);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
