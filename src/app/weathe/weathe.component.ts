import { Component, OnInit } from '@angular/core';
import { ReponseDetailPayes } from '../Models/reponse-detail-payes';
import { WeatheService } from '../Services/weathe.service';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
@Component({
  selector: 'app-weathe',
  templateUrl: './weathe.component.html',
  styleUrls: ['./weathe.component.css']
})

export class WeatheComponent implements OnInit {
  
  countries = COUNTRIES;
  reponse:ReponseDetailPayes={
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
    }};

  constructor(public Wservice:WeatheService) { }

  ngOnInit(): void {
   
   // this.Wservice.fetchData("London")

    
  }
 
getPayes(emit){

  console.log("get input payes"+ emit)

this.Wservice.fetchData(emit)



}

isutil(){
  const mq = window.matchMedia( "(min-width: 500px)" );
  if (mq.matches) {
    return false 
           } 
           else {
     return true  
           }
        }
}
