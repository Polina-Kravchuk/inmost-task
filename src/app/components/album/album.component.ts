import {Component, Input, OnInit} from '@angular/core';
import {AlbumModel} from "../../models/albumModel";
import {AlbumStorageService} from "../../services/album-storage.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: AlbumModel;

  constructor(public albumStorageService: AlbumStorageService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  like() {
    this.albumStorageService.like(this.album);
    this._snackBar.open(this.album.name, 'Like', {
      duration: 2000
    });
  }

  unlike() {
    this.albumStorageService.unlike(this.album);
    this._snackBar.open(this.album.name, 'Unlike', {
      duration: 2000
    });
  }
}
