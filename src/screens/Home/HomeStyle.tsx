import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      backgroundColor: '#808080',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection:'column',      
      justifyContent:'center',
      alignSelf:'center',
      marginBottom:40,
      paddingTop: 20,
      paddingBottom: 10,      
    },
    inputContainer: {
      width: '80%',
      alignItems:'center',
      flexDirection:'column',
      borderWidth: 1,
      borderColor:  "#ccc",  
      borderRadius: 5,    
    },
    text:{
      fontSize:20,
      lineHeight:21,
      fontWeight:'bold',
      letterSpacing:0.25,
      color:"#E5BF3C",
      flexDirection:'column',      
      marginLeft:16,      
      marginVertical:9,
      marginBottom: 10,
    },
    textInput: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginBottom: 10,
      fontSize: 16,
    },
    button:{
      alignItems:'center',
      width:'80%',
      justifyContent:'center',
      paddingVertical:8,
      borderRadius:4,
      elevation: 3,
      backgroundColor: 'black',
      paddingHorizontal: 32,
      marginTop: 7,
    },
    title:{
      textAlign:'center',  
      fontSize: 30,
      fontWeight:'bold',
      color: '#E5BF3C',         
    }
});

export default styles;
  