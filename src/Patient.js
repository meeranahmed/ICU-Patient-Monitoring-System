import { ScrollView, Text, View ,StyleSheet, Pressable} from "react-native";
import React from "react";
import { useEffect, useState } from 'react';
import {
  LineChart,
} from 'react-native-chart-kit';

import CustomButton from './CustomButton';




const Patient =() => {

  const [toggle, setToggle] = useState(false);
  const [chartData, setChartData] = useState([0]);
  const [text, setText] = useState("Show Humidity");
  const [Title , setTitle]=useState("Patient Temperature Chart");
  const [ySuffix,setySuffix]=useState("C");
  let [value , setValue] = useState(0);
  let [sec , setSec] = useState(0);
  let data;
  let temp = [];
  let humi = [];
  let label =[];

  const toggleHandler = () => {
    setToggle(!toggle);
    setText(toggle ? "Show Humidity" : "Show Temp");
    setTitle(toggle ? "Patient Temperature Chart" : "Patient Humidity Chart");
    setySuffix(toggle ? "C" : "%");
    setValue(!toggle ? 1:0)
   
  };
  


  const postReq = (id , sensor) => {
    console.log(id)
    console.log(sensor)
    
      try {
           fetch(
              'http://192.168.100.34:8000/post',
              {
                method: 'POST',
                headers: { 'accept':'application/json',
                          'Content-Type': 'application/json'
                          },
                body: JSON.stringify({ 
                  state: id,
                  val : sensor})
            })
      }
      catch (error) {
          console.error(error);
      }
      
  }
  
  setInterval(() => {
    setSec(sec = sec+1)
  }, 5000)

  const dataURL = "http://192.168.100.34:5000/"; 
  useEffect(() => {
    console.log(value)
    fetch(dataURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        data = json;
        //setChartData(data);
        data.map((x) => {
          temp.push(x.Temperature_C);
          humi.push(x.Humadity);
        });
        setChartData(toggle ? humi : temp);
        
       // console.log(json);
      })
      .catch((error) => alert(error)) // display errors
      

  }, [sec]);

    


  console.log()
  console.log("chartData" , chartData); 

    return(
      <View>
        <Text style={{
          marginVertical:40,
          fontSize:28,
          textAlign:"center",
          fontWeight:"bold",
          color:"#3ea9e2",
          
        }}>{Title}</Text>
        <ScrollView vertical={true}>
        <LineChart
          data={{
            labels: label,
            datasets: [
              {
                data: chartData
              }
            ]
          }}
          width={300} 
          height={400}
          yAxisSuffix={ySuffix}
          chartConfig={{
            backgroundColor: "#3ea9e2",
            backgroundGradientFrom: "#3ea9e2",
            backgroundGradientTo: "#3ea9e2",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#3ea9e2"
            }
          }}
          bezier
          style={{
            marginLeft:35,
            borderRadius: 16
          }}
          
        />
        
        <CustomButton  title={text} clickHandle={toggleHandler} />
        </ScrollView>
        <View>
          {/* <CustomButton  title="Stop Sensor" onPress={() => { postReq(0)} } />
          <CustomButton  title="Start Sensor" onPress={() => {postReq(1)} } /> */}
          <Pressable style={styles.button} onPress={() => { postReq(0,value)}}>
            <Text style={styles.text}>Stop Sensor</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => { postReq(1,value)}}>
            <Text style={styles.text}>Start Sensor</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop:10,
    marginLeft: 100,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#3ea9e2",
    width: 190
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Patient