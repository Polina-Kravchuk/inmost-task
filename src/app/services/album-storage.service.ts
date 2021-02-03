import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AlbumModel} from "../models/albumModel";

@Injectable({
  providedIn: 'root'
})
export class AlbumStorageService {

  private likedAlbums: AlbumModel[] = [];

  storageKey = 'albums';

  constructor() {
    this.loadLikedFromStorage();
  }

  likedAlbumsCount() {
    return this.likedAlbums.length;
  }

  isLiked(album: AlbumModel): boolean {
    var finded = this.likedAlbums.find(e => e.name === album.name);
    if (finded)
      return true;
    return false;
  }

  unlike(album: AlbumModel) {
    this.likedAlbums = this.likedAlbums.filter(e => e.name !== album.name);
    this.saveLikedToStorage();
  }

  like(album: AlbumModel) {
    this.likedAlbums.push(album);
    this.saveLikedToStorage();
  }

  loadLikedFromStorage() {
    const json = localStorage.getItem(this.storageKey);
    if (json) {
      this.likedAlbums = JSON.parse(json)
    } else {
      this.likedAlbums = [];
    }
  }

  saveLikedToStorage() {
    const json = JSON.stringify(this.likedAlbums);
    localStorage.setItem(this.storageKey, json);
  }
}
