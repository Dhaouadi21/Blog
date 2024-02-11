import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArtserviceService } from '../artservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterarticle',
  templateUrl: './ajouterarticle.component.html',
  styleUrls: ['./ajouterarticle.component.css']
})
export class AjouterarticleComponent {

  artForm = new FormGroup({
    title: new FormControl(''),
    contenue: new FormControl(''),
    category: new FormControl(''),
    date: new FormControl(''),
  })
  submitted = false

  constructor(private artservice: ArtserviceService, private _router: Router) { }

  ajouter() {
    if (this.artForm.invalid) {
      return
    }
    this.artservice.ajoutArticle(this.artForm.value).subscribe((response: any) => {
      console.log(response);
      this._router.navigate(['listearticle'])

    }, (error) => {
      console.log(error);
    })
  }
}
