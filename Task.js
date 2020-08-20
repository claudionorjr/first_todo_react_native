import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux'
import { Text, View, FlatList, TextInput, Button } from 'react-native'
import styles from './public/Styles'


class Task extends React.Component {

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

  render() {
    let textInput = ''
    return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={this.props.itens} renderItem={this.renderItem}/>
      <View style={styles.inputView}>
        <TextInput style={styles.input} onChangeText={(text) => {
          textInput = text
        }} />
        <Button style={styles.btn} onPress={() => {
          let KeyIndex = ((this.props.itens).length + 1).toString()
          //let item = (list.length + 1).toString()

          let index = ((this.props.itens).length).toString()
          //let item2 = (.length).toString()

          let newitem = {
            key: KeyIndex,
            id: index,
            desc: textInput 
          }
      
          let addItem = [...this.props.itens]
          addItem.push(newitem)
          this.props.dispatch({type: 'task/add', itens: addItem})
          }
        } title="Nova Tarefa" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
  }
}

const mapStateToProps = (state) => {
  return { itens: state.itens }
}

export default connect(mapStateToProps)(Task)
