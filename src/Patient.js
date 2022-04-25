import { Text, View } from "react-native";
import React from "react";
import { useEffect, useState } from 'react';
import {
  LineChart,
} from 'react-native-chart-kit';

import CustomButton from './CustomButton';



const Patient =() => {

  const [toggle, setToggle] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [text, setText] = useState("Show Humidity");
  const [Title , setTitle]=useState("Patient Temperature Chart");
  const [ySuffix,setySuffix]=useState("C");
 // const [sec , setSec] = useState(0);
  let data;
  let temp = [];
  let humi = [];
  let label =[];

  const toggleHandler = () => {
    setToggle(!toggle);
    setText(toggle ? "Show Humidity" : "Show Temp");
    setTitle(toggle ? "Patient Temperature Chart" : "Patient Humidity Chart");
    setySuffix(toggle ? "C" : "%");
  };
  
  


  const dataURL = "http://192.168.100.34:5000/"; 
  useEffect(() => {
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
  }, [toggle]);

    


  console.log()
  console.log("chartData" , chartData); 

    return(
      <View>
        <Text style={{
          marginVertical:70,
          fontSize:30,
          textAlign:"center",
          fontWeight:"bold",
          color:"#3ea9e2",
          
        }}>{Title}</Text>
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
        <CustomButton title={text} clickHandle={toggleHandler} />
      </View>
    );
}

export default Patient