import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: "", itens: [
      {key: "0", id: "id", desc:"Tarefa", done: false},
      ]
    }

    this.insertItem = this.insertItem.bind(this)
  }

  renderItem(obj) {
    return (
    <View style={styles.cell}>
      <View style={styles.col}>
        <Text style={styles.colItem}>{obj.item.id}</Text>
        <Text style={styles.colItem}>{obj.item.desc}</Text>
      </View>
    </View>
    )
  }

  insertItem() {
    let newitem = {
      key: (this.state.itens.length + 1).toString(),
      id: (this.state.itens.length).toString(),
      desc: this.state.text,
      done: false
    }

    let itens = this.state.itens
    itens.push(newitem)
    this.setState({itens})

    let text = ""
    this.setState({text})
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={this.state.itens} renderItem={this.renderItem} extraData={this.state}/>
        <View style={styles.inputView}>
          <TextInput style={styles.input} onChangeText={(text) => {this.setState({text})}} value={this.state.text}/>
          <Button onPress={this.insertItem} title="Nova Tarefa" />
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})
