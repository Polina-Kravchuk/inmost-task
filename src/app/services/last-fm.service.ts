import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AlbumModel} from "../models/albumModel";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LastFmService {

  constructor(private http: HttpClient) {
  }

  getTopAlbums(genre: string): Observable<AlbumModel[]> {
    const apiKey = '22e5dcb7293a23da484afeacce80c247';
    const url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${apiKey}&format=json`
    return this.http.get(url).pipe(
      map((e: any) => {
        return e.albums.album;
      })
    );
  }
}
