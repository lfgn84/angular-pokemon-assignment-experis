import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CatalogueServiceService as CatalogueService} from 'src/app/services/catalogue-service.service';
@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.css']
})
export class CatalogueViewComponent implements OnInit {
  private allPokemon:Pokemon[] = [];

  constructor(private router:Router, private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    if(sessionStorage.userName === "" || !sessionStorage.userName){
        this.router.navigateByUrl("")
    }
    this.catalogueService.getAllPokemon().subscribe((pokemons) => this.allPokemon = pokemons )
  }

}
