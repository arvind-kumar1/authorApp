import React from "react";
import {View, Text,SafeAreaView,StyleSheet,TouchableOpacity, ScrollView,Alert} from "react-native";
import {connect} from "react-redux";
import { ActivityIndicator, Appbar } from 'react-native-paper';

class ShowData extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      topsubs:[],
      isloading:false,
     
      
    };
  }
  fetchData(){
    this.setState({isloading:true});
    fetch('https://openlibrary.org/search/authors.json?q='+this.props.details.firstname+'%20'+this.props.details.lastname)
            .then((response) => response.json())
            .then((res) =>  {
              if(res.numFound==0){
                this.setState({isloading:false})
                Alert.alert(
                  "Alert",
                  "No Records Found",
                  [
                   
                    { text: "OK", onPress: () => this.props.navigation.navigate('Screen') }
                  ]
                );
  
              }else{
                this.setState({topsubs:res.docs[0].top_subjects,isloading:false,key:res.docs[0].key})
              }
            }
             
            )
             
            
            
           
            .catch((error) => console.error(error))
  }
  
  componentDidMount(){
    this.fetchData()
  }

 
 
render(){
  if(this.state.isloading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator animating={true} color="blue" />
        <Text>Loading...</Text>
        </View>
    )
  }
return(
 
<SafeAreaView style={styles.container} >

   <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => this.props.navigation.navigate('Screen')} />
      <Appbar.Content title="Go Back"  />
    </Appbar.Header>
 
<Text style={styles.mainTextStyle}>Author Details </Text>
<View style={styles.textViewStyle}>
<Text style={styles.textStyle}>Name:   </Text>
<Text style={styles.textStyle}>{this.props.details.firstname} {this.props.details.lastname}</Text>
</View>
<View>
  <Text  style={styles.booklist}>
     BookList
  </Text>
</View>
 
            <ScrollView>
<View style={{alignItems:'center',flex:1,justifyContent:'center'}}>
{this.state.topsubs.map((item) => {
    return (
      
      <View style={{flex:1}} >
       
         <TouchableOpacity>
        <View style={{margin:10,padding :10 , backgroundColor:'grey',borderRadius:20,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,}}>
  <Text  style={{fontSize: 20,
    fontWeight: "bold",color:'white'}}>
          {item}
        </Text>
        </View>
        </TouchableOpacity>
        
      </View>
     
    )
  })}
</View>
</ScrollView>
</SafeAreaView>
)
}}
const styles = StyleSheet.create({
container: {
flex: 1,
width: "100%",
height:"100%",
justifyContent: 'flex-start',
// alignItems: 'flex-start',
backgroundColor:"lightgray",
},
textViewStyle:{
flexDirection:"row",
paddingBottom:20,
marginHorizontal:20
},
textStyle:{
height:20,
textAlign:"left",
marginTop:10,
fontSize:15
},
mainTextStyle:{
width:"100%",
height:40,
textAlign:"center",
marginTop:10,
marginBottom:10,
fontSize:20
},
booklist:{
  width:"100%",
height:40,
textAlign:"center",
marginTop:10,
marginBottom:10,
fontSize:20,
color:'white',
fontWeight:'bold'
}
})
const mapStateToProps = (state) => {
return{
details:state.details
}}
export default connect(mapStateToProps,null)(ShowData)