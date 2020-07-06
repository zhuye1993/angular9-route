import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/auth/http.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data: any[]
  constructor(private http: HttpService) { }

  ngOnInit() {
    document.cookie = '123456'
    this.http.getData().subscribe((res:any) => {
      console.log(res);
      
      this.data = res.data
    })
  }

}
