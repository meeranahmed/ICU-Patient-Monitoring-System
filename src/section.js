import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SectionList,
  SafeAreaView,
} from 'react-native';

import CustomButton from './CustomButton';
import {useNavigation } from '@react-navigation/native';


const Section =() => {


  const DATA = [
    {
      title: 'ICU ROOM 302',
      
      data: 
      // [
      //   'Gamal Hassan',
      //   'Aziz Sarhan',
      //   'Soad Roshdy',
      //   'Farid Mohamed',

      // ],
      [
          {
            name: 'Gamal Hassan',
            oxygen: 'SPO2: 95%',
            rate:'bpm: 65'
          },
          {
            name: 'Aziz Sarhan',
            oxygen: 'SPO2: 98%',
            rate:'bpm: 70'
          },
          {
            name: 'Soad Roshdy',
            oxygen: 'SPO2: 92%',
            rate:'bpm: 55',
          },
          {
            name: 'Farid Mohamed',
            oxygen: 'SPO2: 96%',
            rate:'bpm: 77'
          },
          
        ],
        
    },
    {
        title: 'ICU ROOM 303',
        
        data:
        // [
        //     'Kareem Abdel-Aziz',
        //     'Sandra Fawzy',
        //     'Eslam Salah',
        //     'Ayat Hassan',

        // ],
        [
            {
              name: 'Kareem Abdel-Aziz',
              oxygen: 'SPO2: 93%',
              rate:'bpm: 81'
            },
            {
              name: 'Sandra Fawzy',
              oxygen: 'SPO2:  98%',
              rate:'bpm: 68'
            },
            {
              name: 'Eslam Salah',
              oxygen: 'SPO2: 94%',
              rate:'bpm: 75',
            },
            {
              name: 'Ayat Hassan',
              oxygen: 'SPO2: 96%',
              rate:'bpm: 62'
            },
            
          ],
          
      },

  ]


  const sectionItem =({section}) =>{
    return(
        <View>
        <Text style={styles.title}>{section.title}</Text>
        </View>
        
         )
    }

    const navigation = useNavigation()
    const clickHandle =() =>{
         navigation.navigate("Patient");
    }
    
    const oneitem =({item}) =>{
        return(
             <View style={styles.item}>
                 <Text style={styles.name}>{item.name}</Text>
                 <View>
                 <Text style={styles.readings}>{item.oxygen}</Text>
                 </View>
                 <View>
                 <Text style={styles.readings}>{item.rate}</Text>
                 </View>
                 <View>
                 <CustomButton title={'View Details'} clickHandle={clickHandle}/>
                 </View>
                 
                 
             </View>
            
        )
    }

    const separateItem =() =>{
        return(
           <View style={styles.separator}/>
        )
    }

  return (
    <SafeAreaView>
    <SectionList
      keyExtractor={(index) => index.toString()}
      sections={DATA}
      renderItem={oneitem}
      renderSectionHeader={ sectionItem}
      ItemSeparatorComponent={separateItem}
    
    
    />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

    title: {
        color: '#3ea9e2',
        textAlign: 'center',
        fontWeight: "bold",
        marginTop:40,
        fontSize:25
    },
    separator:{
        height:1,
        width:'100%',
        backgroundColor:'#ccc'
    },
    item:{
    marginLeft:20,
    paddingVertical:15,
    },
    name:{
    fontSize:30,
    fontWeight:'600'
    },
    readings:{
        marginTop:10,
        fontSize:15,
        fontWeight:'500'
    }
});

export default Section