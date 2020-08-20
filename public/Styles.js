import React from 'react'
import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    list: {
      marginTop: 24,
    },
    cell: {
      backgroundColor: "#DDD",
      marginBottom: 3,
    },
    col: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
  
    },
    colItem: {
      borderBottomColor: "black",
      textAlign: "center",
      fontSize: 20,
      margin : 10,
      borderWidth: 1,
      flex: 1,
    },
    inputView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    input: {
      backgroundColor: "#fff",
      borderColor: "#CCC",
      borderWidth: 3,
      padding: 10,
      margin : 20,
      flex: 1,
    },
    btn: {
      backgroundColor: "#fff",
      color: "green",
      flex: 1,
    },
})
  