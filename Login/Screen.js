import React from "react";
import {View, Text,StyleSheet, SafeAreaView,TextInput,TouchableHighlight} from "react-native";
import {connect} from "react-redux"
import {setAuth,details} from "../actions/auth"

class Screen extends React.Component{
constructor(props){
super(props)
this.state = {
firstname:"",
lastname:"",


}}
render(){
return(
<SafeAreaView style={styles.container}>
<View style={styles.mainView}>
<Text style={styles.mainTextStyle}>Submit Author Details</Text>
<Text style={styles.textStyle}>Enter First Name</Text>
<TextInput
style={styles.textInputStyle}
underlineColorAndroid="transparent"
placeholderTextColor="#cccccc"
placeholder="First Name"
onChangeText={t => {
this.setState({ firstname: t }, () => {
});
}}
/>
<Text style={styles.textStyle}>Enter Last Name</Text>
<TextInput
style={styles.textInputStyle}
underlineColorAndroid="transparent"
placeholderTextColor="#cccccc"
placeholder="Last Name"
onChangeText={t => {
this.setState({ lastname: t }, () => {
});
}}
/>

<TouchableHighlight
underlayColor="transparent"
style={styles.buttonStyle}
onPress={() => {
var details = {};
details.firstname = this.state.firstname;
details.lastname = this.state.lastname;

this.props.reduxSetAuth(details)
this.props.navigation.navigate("ShowData")
}}
>
<Text style={styles.buttonTextStyle}>Submit</Text>
</TouchableHighlight>
</View>
</SafeAreaView>
)
}}
const styles = StyleSheet.create({
container: {
flex: 1,
width: "100%",
height:"100%",
justifyContent: 'flex-start',
alignItems: 'center',
backgroundColor:"lightgray",
paddingBottom:50
},
mainView:{
width:"100%",
height:"50%",
justifyContent: "flex-start",
alignItems: "center",
padding:20,
},
textInputStyle:{
width:"100%",
height:40,
backgroundColor:"white",
paddingHorizontal:15,
marginBottom:10,
marginTop:10
},
textStyle:{
width:"100%",
height:20,
textAlign:"left",
marginTop:10,
fontSize:15
},
mainTextStyle:{
width:"100%",
height:40,
//paddingHorizontal:15,
textAlign:"center",
marginTop:10,
marginBottom:10,
fontSize:20
},
buttonStyle:{
width: "100%",
height: 40,
borderRadius: 5,
justifyContent: "center",
alignItems: "center",
backgroundColor: "white",
marginTop:20
},
buttonTextStyle:{
width:"100%",
height:"100%",
textAlign:"center",
marginTop:10,
fontSize:18
},
})
const mapDispatchToProps = (dispatch) =>{
return{
reduxSetAuth:(details) => dispatch(setAuth(details))
}}
export default connect(
null,
mapDispatchToProps
)(Screen);