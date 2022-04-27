

int dataFromSlave1=0;
int dataFromSlave2=0;

void setup() {

  Serial.begin(9600); // Default baud rate of the Bluetooth module

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
 
 delay(500);
}
