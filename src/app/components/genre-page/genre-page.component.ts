import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumModel} from "../../models/albumModel";
import {LastFmService} from "../../services/last-fm.service";
import {AlbumStorageService} from "../../services/album-storage.service";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.scss']
})
export class GenrePageComponent implements OnInit {

  albumView: AlbumModel[];
  filteredAlumbs: AlbumModel[];
  _search: string;

  get search(): string {
    return this._search;
  }

  set search(val: string) {
    this._search = val;
    this.doSearch(this._search);
  }

  doSearch(search: string) {
    this.filteredAlumbs = this.albumView.filter(e => e.name.includes(search))
  }

  constructor(
    public albumStorageService: AlbumStorageService,
    private lastFmService: LastFmService,
    private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const genreName = this.activateRoute.snapshot.params['genre'];
    this.lastFmService.getTopAlbums(genreName).subscribe(e => {

      this.albumView = e;
      this.filteredAlumbs = this.albumView;
    })
  }

}
