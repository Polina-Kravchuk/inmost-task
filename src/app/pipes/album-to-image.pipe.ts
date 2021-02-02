import {Pipe, PipeTransform} from '@angular/core';
import {AlbumModel} from "../models/albumModel";

// <img [src]='album | albumToImage'

@Pipe({
  name: 'albumToImage'
})
export class AlbumToImagePipe implements PipeTransform {

  transform(album: AlbumModel): string {
    const img = album.image.find(e => e.size === 'large')
    return img['#text'];
  }
}
