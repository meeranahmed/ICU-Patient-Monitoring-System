// import React from "react";
// import { Text, SafeAreaView ,StyleSheet, FlatList , View ,Image } from "react-native";



 

// const HomePage =() =>{

//     const icuRooms = [
//         {
//             id:1,
//             name: 'ICU Room 302',
//             image: require('../assets/icu.png')
//         },
//         {
//             id:2,
//             name: 'ICU Room 303',
//             image: require('../assets/icu.png')
//         },
//         {
//             id:3,
//             name: 'ICU Room 402',
//             image: require('../assets/icu.png')
//         },
//         {
//             id:4,
//             name: 'ICU Room 403',
//             image: require('../assets/icu.png')
//         },
//     ]

//     const oneitem =({item}) =>{
//         return(
//              <View style={styles.item}>
//                  <View style={styles.avatarContainer}>
//                    <Image source={item.image} style={styles.avatar} />  
//                  </View>
//                  <Text style={styles.name}>{item.name}</Text>
//              </View>
            
//         )
//     }

//     const separateItem =() =>{
//         return(
//            <View style={styles.separator}/>
//         )
//     }



    
//     return(
//         <SafeAreaView >
//                 <FlatList
//                     ListHeaderComponent={<Text style={styles.title}> ICU ROOMS</Text>}
//                     ItemSeparatorComponent={separateItem}
//                     data={icuRooms}
//                     renderItem={ oneitem}
//                 />       
//         </SafeAreaView>
//     );
// }


// const styles = StyleSheet.create({

//     title: {
//       color: '#3ea9e2',
//       textAlign: 'center',
//       fontWeight: "bold",
//       marginTop:40,
//       fontSize:25
//     },
//     separator:{
//         height:1,
//         width:'100%',
//         backgroundColor:'#ccc'
//     },
//     item:{
//         flex:1,
//         flexDirection:'row',
//         alignItems:'center',
//         paddingVertical:5,
        
//     },
//     avatarContainer:{
//         backgroundColor:'#FFFF',
//         borderRadius:100,
//         height:89,
//         width:89,
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     avatar:{
//         height:65,
//         width:65
//     },
//     name:{
//         fontSize:22,
//         fontWeight:'600'
//     }



// });

// export default HomePage
