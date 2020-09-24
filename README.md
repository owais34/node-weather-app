# Node Weather App

![](https://github.com/owais34/node-weather-app/blob/master/images/logo.png)

A simple responsive UI weather app made using ReactJS , CSS in the frontend side and Node.js Express.js on the client .
Get live weather recordings anytime anywhere.


# Features 

Here are some inportant features of this project

## Responsive UI

>Heres what the app looks like on large screen size

<img src="https://github.com/owais34/node-weather-app/blob/master/images/pc.png" alt="pc" width="1000"/>


>Heres the same app on small screen size

  <img src="https://github.com/owais34/node-weather-app/blob/master/images/mobile2.jpg" alt="mobile" width="300" />        <img src="https://github.com/owais34/node-weather-app/blob/master/images/mobile1.jpg" alt="mobile" width="300"/>
  
 ## How to run locally
 
 Clone the repo to your local machine by running the following command on your command line
 
 #### Run

```
$ git clone https://github.com/owais34/node-weather-app.git
```

>Now navigate to the cloned repository by running

```
$ cd node-weather-app 
```
>Install necessary dependencies after removing package-lock or yarn.lock file by running
```
$ npm install
```
>Start the server by running 
```
$ node src/app.js
```
### Routes
 After starting the server locally
 
 The homepage can be visited at 
 
 [http://localhost:3000/](http://localhost:3000/)
 
 The working JSON response api can be visited at
 
 [http://localhost:3000/weather?address=location_address](http://localhost:3000/weather?address=location_address)
 
 Where location address is the address of the given location , the returned response is in JSON format.
 
 On a sucessfull request the JSON output is 
 
 ```
 {"location":"Koderma, Jharkhand, India",
 "forecast":{"description":" Haze",
              "temperature":27,
              "wind_speed":9,
              "precipitation":1.3,
              "icon":"https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png"}
}
```
  On a failure a JSON object with error property is returned defining the cause of error.
  Like so.
  
  ```
  {"error":"Unable to find address"}
  
 ```


