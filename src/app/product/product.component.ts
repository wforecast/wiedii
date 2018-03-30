import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
