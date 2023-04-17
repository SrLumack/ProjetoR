import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,ImageBackground, FlatList, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather, Entypo, AntDesign } from '@expo/vector-icons';

export default function App() {
   const [lancamentos,setLancamentos] = useState([  
    {nome: `Resident Evil 4 `, key:1},
    {nome: ` Hogwarts Legacy `, key:2},
   ])
   const [competitivos,setCompetitivos] = useState([  
    {nome: ` Fortnite `, key:1},
    {nome: ` Valorant `, key:2},
   ])
   const [rpgs,setRpgs] = useState([  
    {nome: ` Elden Ring `, key:1},
    {nome: ` Bloodborne `, key:2},
   ])
   const [pesquisa,setpesquisa] = useState('')

   const home = () => {
    alert('Ir para página principal');
  }
  const search = () => {
    alert('Efetuar uma pesquisa');
  }
  const request = () => {
    alert('Mudar configurações');
  }

  return (
     <View style={styles.container}>

      <ImageBackground
      source={require('./assets/Background.png')}
      style={styles.imageBackground}
      >
        
     <View style={styles.conatiner0}>
      <TextInput 
     style={styles.input}
     placeholder='Search Games...'
     placeholderTextColor='#fff' 
     underlineColorAndroid="transparent"
     onChangeText={setpesquisa}
     />
            <TouchableOpacity
       onPress={search}>
       <Feather name="search" size={26} color="white" style={styles.iconsearch1}  />
       </TouchableOpacity>
     </View>
     
     
     
    <ScrollView>
      <Text style={styles.h1}>Lançamentos</Text>  
      <ScrollView style={styles.box}>
      <FlatList
     numColumns={2}
     keyExtractor={(item)=> item.key}
     data={lancamentos}
     renderItem={({item}) => (     
      
     <Text style={styles.item}> {item.nome} </Text> 
     )}
     />
      </ScrollView>

      <Text style={styles.h1}>Competitivos</Text>
      <ScrollView style={styles.box}>
      <FlatList
     numColumns={2}
     keyExtractor={(item)=> item.key}
     data={competitivos}
     renderItem={({item}) => (     
      
     <Text style={styles.item}> {item.nome} </Text> 
     )}
     />
      </ScrollView>

      <Text style={styles.h1}>RPGS</Text>
      <ScrollView style={styles.box}>
      <FlatList
     numColumns={2}
     keyExtractor={(item)=> item.key}
     data={rpgs}
     renderItem={({item}) => (     
      
     <Text style={styles.item}> {item.nome} </Text> 
     )}
     />
      </ScrollView>
    </ScrollView>

      <View style={styles.footer}>

 <TouchableOpacity
       onPress={search}>
       <Feather name="search" size={22} color="white"style={styles.iconsearch}  />
       </TouchableOpacity>
        
        <TouchableOpacity
        onPress={home}>
        <Entypo name="home" size={22} color="white" style={styles.iconhome} />
        </TouchableOpacity>

    
        <TouchableOpacity
        onPress={request}>
        <AntDesign name="book" size={22} color="white" style={styles.iconrequest} />
        </TouchableOpacity>
      </View>
      
      </ImageBackground>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#333', // Change background color to dark mode color
    justifyContent:'center',
    alignContent:'center',
    
      },

  imageBackground:{
    flex:1,

  },

  conatiner0:{
    
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    marginTop:20,
    flexDirection:'row',
  },

  containerh1:{
   marginLeft:20,
   marginBottom:-45,
  },

  h1:{
    padding: 20,
    fontSize:30,
    alignItems:'center',
    justifyContent:'center',
    color: '#fff', // Change text color to white for dark mode
  },

  input:{
    borderWidth: 1 ,
    borderRadius: 25,
    paddingLeft:40,
    fontSize:14,
    width:350,
    height: 40,
    opacity:0.25,
    backgroundColor:'#292E49', // Change background color to dark mode color
    marginBottom:15,
    marginLeft:1,
    left:13,
    elevation:5,
    color: '#ADBAFF', // Change text color to white for dark mode
  },

  icon:{
    right:355,
    bottom:7,
    color: '#967259', // Change icon color to light mode color
  },
  
  item:{
    fontSize:20,
    width:'40%',
    height: 150,
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: '#222', // Change background color to dark mode color
    margin: 8,
    padding:10,
    flexGrow: 1,
    borderRadius: 15,
    borderBottomLeftRadius:0,
    borderTopRightRadius:0,
    paddingLeft:30,
    paddingTop:10,
    elevation:5,
    color: '#fff', // Change text color to white for dark mode
  },
  box:{
    flex:0,
    marginTop: 10,
    
    
  },

  footer:{
    borderTopLeftRadius:52,
    borderTopRightRadius:52,
    backgroundColor:"#0D0F14",
    opacity:0.5,
    flexDirection:'row',
    paddingBottom:10,
    alignItems: 'center', // Add alignItems property to center items vertically
    justifyContent: 'center', // Add justifyContent property to center items horizontally
  },

  footertext:{
    color:"white",
    left:25,
    top:38,
    marginLeft:50,
  },

  iconsearch:{
    left:-8,
    top:10,
    color: '#162683', // Change icon color to white for dark mode
    padding: 20,
  },

  iconsearch1:{
    bottom:8,
    right:330,
    color: '#162683', // Change icon color to white for dark mode
   
  },
  
  iconhome:{
    left:0,
    top:2,
    color: '#ADBAFF', // Change icon color to white for dark mode
    padding: 20,
  },

  iconrequest:{
    left:8,
    top:10,
    color: '#162683', // Change icon color to white for dark mode
    padding: 20,
  },
});