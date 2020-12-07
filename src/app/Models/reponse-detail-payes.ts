export interface ReponseDetailPayes {

request?:Request,
location?:Location,
current?:Current,

}


export interface Request {

    type?:string,
      query?:string,
      language?:string,
       unit?:string
      
}

export interface Location {

    name?:string,
    country?:string,
    region?:string,
    lat?:string,
    lon?:string,
    timezone_id?:string,
    localtime?:string,
    localtime_epoch?:number,
    utc_offset?:string
}

export interface Current{
    observation_time?:string,
    temperature?:number,
    weather_code?:number,
    weather_icons?:string[],
    weather_descriptions?:string[],
    wind_speed?:number,
    wind_degree?:number,
    wind_dir?:string,
    pressure?:number,
    precip?:number,
    humidity?:number,
    cloudcover?:number,
     feelslike?:number,
    uv_index?:number,
    visibility?:number,
    is_day?:string

}

/****
 * 
 * 
 * {
   "request":{
      "type":"City",
      "query":"New London, United States of America",
      "language":"en",
      "unit":"m"
   },
   "location":{
      "name":"New London",
      "country":"United States of America",
      "region":"New York",
      "lat":"43.205",
      "lon":"-75.588",
      "timezone_id":"America\/New_York",
      "localtime":"2020-10-07 10:22",
      "localtime_epoch":1602066120,
      "utc_offset":"-4.0"
   },
   "current":{
      "observation_time":"02:22 PM",
      "temperature":15,
      "weather_code":296,
      "weather_icons":[
         "https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0033_cloudy_with_light_rain_night.png"
      ],
      "weather_descriptions":[
         "Light Rain"
      ],
      "wind_speed":7,
      "wind_degree":260,
      "wind_dir":"W",
      "pressure":1003,
      "precip":1.2,
      "humidity":67,
      "cloudcover":100,
      "feelslike":14,
      "uv_index":1,
      "visibility":13,
      "is_day":"no"
   }
}
 * 
 * 
 */