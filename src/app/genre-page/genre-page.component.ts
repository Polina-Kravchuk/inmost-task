import {Component, OnInit} from '@angular/core';
import {LastFmService} from "../services/last-fm.service";
import {ActivatedRoute} from "@angular/router";
import {AlbumModel} from "../models/albumModel";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {

  albumView: AlbumModel[];

  constructor(private lastFmService: LastFmService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const genreName = this.activateRoute.snapshot.params['genre'];
    this.lastFmService.getTopAlbums(genreName).subscribe(e => {
      console.log(e);
      this.albumView = e;
    })
  }

}
