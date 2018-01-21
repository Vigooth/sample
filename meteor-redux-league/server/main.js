import { Meteor } from 'meteor/meteor';
const API_KEY = '?api_key=RGAPI-9729fb22-2d8f-471f-b3bf-4ca9336e37ff';
const ROOT_URL = `https://euw1.api.riotgames.com/lol`;
import { HTTP } from 'meteor/http';
import { WebApp } from 'meteor/webapp';
import axios from 'axios';
import { JsonRoutes } from 'meteor/simple:json-routes';
Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use('/',(req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Accept", "application/json, text/plain, */*");
    res.setHeader( "Pragma","no-cache");
    res.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    //res.end(`Hello world from: ${Meteor.release}`);
    return next();
  });
  JsonRoutes.setResponseHeaders({
  "Cache-Control": "no-store",
  "Pragma": "no-cache",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
});
});

Meteor.methods({
  'fetchLol':(url)=>{
    function simpleStringify (object){
      var simpleObject = {};
      for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
          continue;
        }
        if (typeof(object[prop]) == 'object'){
          continue;
        }
        if (typeof(object[prop]) == 'function'){
          continue;
        }
        simpleObject[prop] = object[prop];
      }
      return JSON.stringify(simpleObject); // returns cleaned up JSON
    };
    const summonerName = 'chibredélaissé';
    //const url = `${ROOT_URL}/summoner/v3/summoners/by-name/${summonerName}${API_KEY}`;
    //const request =  axios.get(url).then((response)=>console.log(response));
    //const request =  HTTP.call('GET',url);

      return  axios.get("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json").then((response)=>simpleStringify(response));
      console.log("try")
      //HTTP.get(url,{}, (error, result)=>{(!error)?console.log(result):console.log(error)});


  }
})
