import React from 'react'
import { StyleSheet } from 'react-native'

const detailsColor = "#0075AD"
const textColor = "#000000"
const backgroundColor = "#E0DDE5"
const inputColor = "#5FC7FA"
const buttonColor = "#5FC7FA"

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
    },
    list: {
      marginTop: 24,
    },
    cell: {
    },
    col: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
  
    },
    colId: {
      borderColor: detailsColor,
      textAlign: "center",
      margin : 7,
      borderRadius: 7,
      borderWidth: 2,
      borderWidth: 1,
      flex: 1,
    },
    colText: {
      borderColor: detailsColor,
      textAlign: "center",
      margin : 7,
      borderRadius: 7,
      borderWidth: 2,
      borderWidth: 1,
      flex: 11,
    },
    colBtn: {
      margin : 7,
      flex: 3,
    },
    inputView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 20,
    },
    input: {
      backgroundColor: inputColor,
      borderColor: detailsColor,
      borderRadius: 7,
      borderWidth: 2,
      padding: 10,
      marginRight: 20,
      shadowColor: "#000",
      shadowOpacity: 1.5,
      elevation: 6,
      flex: 1,
    },
    buttonHover: {
      backgroundColor: buttonColor,
      borderColor: detailsColor,
      borderRadius: 7,
      borderWidth: 2,
      padding: 10,
      shadowRadius: 20,
      shadowColor: "#000",
      shadowOpacity: 1.5,
      elevation: 6,
      shadowOffset : { width: 1, height: 13},
    },
    buttonDelete: {
      backgroundColor: backgroundColor,
      borderColor: "#FA0800",
      borderRadius: 7,
      borderWidth: 1,
      shadowRadius: 20,
      shadowColor: "#000",
      shadowOpacity: 1.5,
      elevation: 6,
      shadowOffset : { width: 1, height: 13},
    },
    font: {
      margin: 4,
      fontSize: 16,
      color: textColor,
    },
})
  