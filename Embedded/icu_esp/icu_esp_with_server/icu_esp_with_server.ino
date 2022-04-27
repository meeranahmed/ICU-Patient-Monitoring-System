#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
SoftwareSerial s(3,1);

int dataFromSlave1=0;
int dataFromSlave2=0;
//const char* ssid = "STUDBME2";
//const char* password = "BME2Stud";
ESP8266WiFiMulti WiFiMulti;

void setup() {

    s.begin(9600);
  Serial.begin(9600);
  SPI.begin();
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
 
    delay(1000);
    Serial.println("Connecting..");
 
  }
  Serial.println("Connected to WiFi Network");
 
}

void loop() {
 if(Serial.available() > 0){ // Checks whether data is comming from the serial port
   dataFromSlave1 = Serial.read(); // Reads the data from the serial port and store it in dataFromSlave variable
   Serial.print("Current humidity = ");
   Serial.print(dataFromSlave1);
   Serial.print("%  ");
   dataFromSlave2 = Serial.read();
   Serial.print("temperature = ");
   Serial.print(dataFromSlave2); 
   Serial.println("C  ");
 }
    if ((WiFiMulti.run() == WL_CONNECTED)) {
    WiFiClient client;
    HTTPClient http;
    Serial.print("[HTTP] begin...\n");
    /* Make sure to replace the http by your API & replace the localhost by your IP address */
    if (http.begin(client, "http://localhost:5000/add?temp="+String(dataFromSlave2)+"&hum="+String(dataFromSlave1))) {  // HTTP
      Serial.print("[HTTP] GET...\n");
      // start connection and send HTTP header
      int httpCode = http.GET();
      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTP] GET... code: %d\n", httpCode);
        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = http.getString();
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }
      http.end();
    } else {
      Serial.printf("[HTTP} Unable to connect\n");
    }
  }
  /* Another Calling For the Led Indicator API */ 
  if ((WiFiMulti.run() == WL_CONNECTED)) {
    WiFiClient client;
    HTTPClient http;
    Serial.print("[HTTP] begin...\n");
    if (http.begin(client,"http://localhost:5000/led")) {  // HTTP
      Serial.print("[HTTP] GET...\n");
      // start connection and send HTTP header
      int httpCode = http.GET();
      // httpCode will be negative on error
      if (httpCode > 0) {
        // HTTP header has been send and Server response header has been handled
        Serial.printf("[HTTP] GET... code: %d\n", httpCode);
        // file found at server
        if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
          String payload = http.getString();
          if(payload=="1"){
            digitalWrite(5,LOW);}
          else{
            digitalWrite(5,HIGH);}
          Serial.println(payload);
        }
      } else {
        Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }
      http.end();
    } else {
      Serial.printf("[HTTP} Unable to connect\n");
    }
  } 
 delay(500);
}
