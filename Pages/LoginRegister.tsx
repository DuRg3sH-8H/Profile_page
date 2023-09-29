import React from "react";
import { View,Text,StatusBar,StyleSheet, SafeAreaView } from "react-native";
import Icons from "../components/Icons";



const LoginRegister = () => {
    return(
        <SafeAreaView style={styles.all}>
            <View>
                <StatusBar backgroundColor="#690c23" barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Others</Text>
                </View>

                <View style={styles.container}>

                    <View style={styles.card1}>
                        <Text style={styles.club}>Club MRR</Text>
                        <Text>To continue Log in with your RSP account.</Text>
                        <View style={styles.buttons}>
                            <View style={styles.button1}>
                                <Text style={styles.text}>Login</Text>
                            </View>
                            <View style={styles.button1}>
                                <Text style={styles.text}>Register</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card2}>
                        <View style={styles.services}>
                            <Icons name="globe"/>
                            <Text style={[styles.text,styles.servicename]}>Language</Text>
                        </View>
                        <View style={styles.services}>
                            <Icons name="human-male"/>
                            <Text style={[styles.text,styles.servicename]}>Our Member</Text>
                        </View>
                        <View style={styles.services}>
                            <Icons name="telephone"/>
                            <Text style={[styles.text,styles.servicename]}>  Contact</Text>
                        </View>
                        <View style={styles.services}>
                            <Icons name="file-download"/>
                            <Text style={[styles.text,styles.servicename]}>  Downloads</Text>
                        </View>
                        <View style={styles.services}>
                            <Icons name="exclamationcircle"/>
                            <Text style={[styles.text,styles.servicename]}> About Us</Text>
                        </View>
                        
                        <View style={styles.services}>
                            <Icons name="images"/>
                            <Text style={[styles.text,styles.servicename]}>Gallery</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE', 
      padding:16,
      borderRadius:16,
      height:780
    },
    header: {
      backgroundColor: '#690c23',
      padding: 20,
    },
    headerText: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    content: {
        fontSize:24,
    },
    card1:{
        backgroundColor: '#690c23',
        borderRadius: 10,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems:'center'
    },
    club:{
        fontSize:24,
        padding:16,
        paddingBottom:6
    },
    buttons:{
        flexDirection:'row',
        padding:10,
        paddingBottom:16

    },
    button1:{
        padding:10,
        alignItems:'center',
        flex:1,
        backgroundColor:'#EEEEEE',
        borderRadius:16,
        margin:8

    },
    text:{
        color:'#690c23',
    },
    all:{
        backgroundColor:"#690c23"
    },
    card2:{
        backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Android elevation
    marginTop:10
    },
    services:{
        flexDirection:'row',
        alignItems:"center"
    },
    servicename:{
        flex:1,
        padding:6,
        fontSize:16,
        justifyContent:'center',


    },
  });
export default LoginRegister;