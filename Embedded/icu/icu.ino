#include "DHT.h"
#define DHTPIN 2     // Digital pin connected to the DHT sensor
#define DHTTYPE DHT11   // DHT 11
DHT dht(DHTPIN, DHTTYPE);
int dataFromMaster;
void setup() {
  Serial.begin(9600); // Default baud rate of the Bluetooth module
  dht.begin();
}
void loop() {
 delay(2000);
 int h = dht.readHumidity();
 int t = dht.readTemperature();         
// Serial.print("Current humidity = ");
// Serial.print(h);
// Serial.print("%  ");
// Serial.print("temperature = ");
// Serial.print(t); 
// Serial.println("C  ");
 //send to master
 Serial.write(h); 
 Serial.write(t); 
 
if(Serial.available() > 0){ // Checks whether data is comming from the serial port
 dataFromMaster = Serial.read(); // Reads the data from the serial port and store it in dataFromMaster variable
}

}
