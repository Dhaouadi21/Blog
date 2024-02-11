import { Component, OnInit } from '@angular/core';
import { ArtserviceService } from '../artservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listearticle',
  templateUrl: './listearticle.component.html',
  styleUrls: ['./listearticle.component.css']
})
export class ListearticleComponent implements OnInit {

  artTab: any[] = []
  constructor(private artservice: ArtserviceService, private _router: Router, private _route: ActivatedRoute) { }
  ngOnInit() {
    this.listeArticle();
  }
  listeArticle() {
    this.artservice.getArticle().subscribe((response: any) => {
      this.artTab = response
      console.log(response);

    }, (error) => {
      console.log(error);

    })
  }

  supprimerArticle(id: any) {
    this.artservice.deletArticle(id).subscribe((response: any) => {
      console.log(response);

      this.artTab = this.artTab.filter((article: any) => article.id != id);
    }, (error) => {
      console.log(error);

    })
  }
  updateArticle(article: any) {
    this._router.navigate([article.id], { relativeTo: this._route });
  }
}
