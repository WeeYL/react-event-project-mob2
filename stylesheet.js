import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'midnightblue',
  
    },
    buttonLayout: {
      flexDirection:'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      paddingHorizontal:48,
      
    },
  
    HeaderStyle:{
      
      color:'black',
      fontSize:56,
      paddingVertical:24,
      alignSelf: 'center',
  
    },
  
    subTextStyle:{
      
      color:'black',
      opacity:0.5,
      paddingVertical:16,
      fontSize:24,
      alignSelf: 'center',
  
    },
  
    buttonStyle:{
      alignItems: "center",
      backgroundColor: "green",
      color:'white',
      padding: 10,
      borderRadius: 50,
      width:100,
      textAlign:"center"
      
    }
  });

  export default styles;