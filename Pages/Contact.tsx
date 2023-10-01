import React from "react";
import { View,Text,StatusBar,StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Icons from "../components/Icons";

export default function Contact() {
  return (
    <SafeAreaView style={styles.all}>
        <ScrollView>
        <View>
            <StatusBar backgroundColor="#690c23" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Contact</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.card1}>
                    <Text style={styles.club}>Club MRR</Text>
                    <Text>Reach Our Customer Service.</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.icons}>
                        <Icons name="telephone"/>
                        <Text style={styles.textIcon}>Call Us</Text>
                    </View>
                    <View style={styles.icons}>
                        <Icons name="email-open"/>
                        <Text style={styles.textIcon}>Email Us</Text>
                    </View>
                    <View style={styles.icons}>
                        <Icons name="chatbox"/>
                        <Text style={styles.textIcon}>Chat</Text>
                    </View>
                </View>
                <View style={styles.h2}>
                    <Text style={styles.h2text}>Quick Contact</Text>
                </View>
                <View>
                    <View>
                        <Text style={styles.title}>Name<Text style={styles.star}>*</Text></Text>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.placeholder}>Enter Full Name Here</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Phone Number<Text style={styles.star}>*</Text></Text>
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.placeholder}>Enter Phone Number</Text>
                    </View>

                    <View>
                        <Text style={styles.title}>Message<Text style={styles.star}>*</Text></Text>
                    </View>


                    <View style={styles.box}>
                        <Text style={styles.placeholder}>Enter Your Message</Text>
                    </View>
    

                </View>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE', 
        padding:16,
        borderTopEndRadius:16,
        borderTopLeftRadius:16,

      },
    header: {
        backgroundColor: '#690c23',
        padding: 20,
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    card1:{
          backgroundColor: '#690c23',
          borderRadius: 10,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 4,
          alignItems:'center',
          height:180,
    },
    club:{
          fontSize:24,
          paddingTop:48,
          paddingBottom:6
    },
    all:{
        backgroundColor:"#690c23"
    },
    buttons:{

        flexDirection:'row',
        marginTop:20

    },
    icons:{
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4, // Android elevation
        marginRight:40,
        height:120,
        width:106,
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    textIcon:{
        color:"#690c23"
    },
    h2:{
        backgroundColor:'#EEEEEE',
        padding:30,
        alignItems:'center',
        marginTop:20
    },
    h2text:{
        fontSize:24,
        color:"#690c23",
        fontWeight:'bold'
    },
    title:{
        fontSize:18,
        color:'#000000',
        marginTop:10
    },
    star:{
        color:'#690c23'
    },
    input:{
        backgroundColor:'#FFFFFF',
        padding:10,
        borderRadius:4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        margin:4,
        height:60,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    box:{
        backgroundColor:'#FFFFFF',
        padding:10,
        borderRadius:4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        margin:4,
        alignItems:'flex-start',
        height:120
    
    },
    placeholder:{
        fontSize:16
    }
})