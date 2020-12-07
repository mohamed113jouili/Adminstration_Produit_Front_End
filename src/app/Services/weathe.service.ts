import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReponseDetailPayes } from '../Models/reponse-detail-payes';



@Injectable({
  providedIn: 'root'
})
export class WeatheService {
  apikey: string = "dc7a59eb5ab916e851992f7e1bc7df95"
  terApi: string = "&query="

  host: string = "http://api.weatherstack.com/current?access_key=" + this.apikey;
  constructor(public http: HttpClient) { }
  reponse: ReponseDetailPayes = {
    "request": {
      "type": "City",
      "query": "New York, United States of America",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "New York",
      "country": "United States of America",
      "region": "New York",
      "lat": "40.714",
      "lon": "-74.006",
      "timezone_id": "America/New_York",
      "localtime": "2019-09-07 10:05",
      "localtime_epoch": 1567850700,
      "utc_offset": "-4.0"
    },
    "current": {
      "observation_time": "02:05 PM",
      "temperature": 15,
      "weather_code": 113,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
      ],
      "weather_descriptions": [
        "Sunny"
      ],
      "wind_speed": 0,
      "wind_degree": 0,
      "wind_dir": "N",
      "pressure": 1011,
      "precip": 0,
      "humidity": 78,
      "cloudcover": 0,
      "feelslike": 15,
      "uv_index": 5,
      "visibility": 16
    }
  };


  public payesdetail = new BehaviorSubject<ReponseDetailPayes>(this.reponse);
  getPayes(nampayes: string) {

    return this.http.get<ReponseDetailPayes>(this.host + +this.terApi + nampayes,)
      .pipe(map(resp => resp));

  }

  public readonly currentPayes = this.payesdetail.asObservable();
  public async fetchData(namepayes: string) {
    const data = await this.http.get<ReponseDetailPayes>(this.host + this.terApi + namepayes).toPromise();
    this.payesdetail.next(data)


  }


}
