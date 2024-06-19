import { Injectable } from '@angular/core';
import { artisans } from "../../data/datas.json"

@Injectable({
  providedIn: 'root'
})
export class ArtisansDataService {
  artisanList = artisans
}
