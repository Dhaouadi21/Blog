import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArtserviceService } from '../artservice.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-modifierarticle',
  templateUrl: './modifierarticle.component.html',
  styleUrls: ['./modifierarticle.component.css']
})
export class ModifierarticleComponent implements OnInit {


  upForm!: FormGroup
  id: any;

  constructor(private artservice: ArtserviceService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.upForm = new FormGroup({
      title: new FormControl(''),
      contenue: new FormControl(''),
      category: new FormControl(''),
      date: new FormControl(''),
    })
    this._route.paramMap.subscribe((param: ParamMap) => {
      let index = parseInt(param.get('id') || "")
      this.id = index
    })
    this.artservice.getArticleById(this.id).subscribe((response: any) => {
      this.upForm.patchValue(response)

    },
      (error: any) => {
        console.log(error);

      }
    )

  }


  modifierArt() {
    this.artservice.updatedArticle(this.upForm.value, this.id).subscribe((response: any) => {
      this.upForm.reset()
      console.log(response);

    }, (error) => {
      console.log(error);

    })
  }
}
