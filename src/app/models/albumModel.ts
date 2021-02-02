import {ArtistModel} from "./artistModel";
import {ImageSizeModel} from "./imageSizeModel";

export class AlbumModel{
  name: string;
  artist: ArtistModel;
  image: ImageSizeModel[];
}
