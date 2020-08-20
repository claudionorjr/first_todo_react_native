import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux'
import { Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import styles from './public/Styles'


class Task extends React.Component {

  renderItem(obj) {
    return (
      <View style={styles.cell}>
        <View style={styles.col}>
          <Text style={[styles.colId, styles.font]}>{obj.item.id}</Text>
          <Text style={[styles.colText, styles.font]}>{obj.item.desc}</Text>
          <TouchableOpacity style={[styles.buttonDelete, styles.colBtn]} onPress={() => {
            let newList = [...this.props.itens]
            newList.splice(obj.item.id, 1)
            this.props.dispatch({type: 'task/remove', itens: newList})
            }
          }>
            <Text style={styles.font}>DELETAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    let textInput = ''
    return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={this.props.itens} renderItem={this.renderItem} ref="flatlist"
        onContentSizeChange={() =>{
        this.refs.flatlist.scrollToEnd()
        }}/>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Ensira a tarefa..." onChangeText={(text) => {
          textInput = text
        }} />
        <TouchableOpacity style={styles.buttonHover} onPress={() => {
          let KeyIndex = ((this.props.itens).length + 1).toString()
          let index = ((this.props.itens).length).toString()

          let newitem = {
            key: KeyIndex,
            id: index,
            desc: textInput 
          }
      
          let addItem = [...this.props.itens]
          addItem.push(newitem)
          this.props.dispatch({type: 'task/add', itens: addItem})
          }
        }>
            <Text style={styles.font}>NOVA TAREFA</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="#5FC7FA" barStyle="light-content" />
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { itens: state.itens }
}

export default connect(mapStateToProps)(Task)
