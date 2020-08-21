import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { connect } from 'react-redux'
import { Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import styles from './public/Styles'


class Task extends React.Component {

  renderItem(obj, props) {
    return (
      <View style={styles.cell}>
        <View style={styles.col}>
          <Text style={[styles.colId, styles.font]}>{obj.item.key}</Text>
          <Text style={[styles.colText, styles.font]}>{obj.item.desc}</Text>
          {obj.item.key !== 'id'? (<TouchableOpacity style={[styles.buttonDelete, styles.colBtn]}
                                    onPress={() => props.dispatch({type: 'task/remove', itemToRemove: obj.item.key})}>
                                    <Text style={styles.font}>DELETAR</Text>
                                  </TouchableOpacity>)
                                  :
                                  (<Text style={[styles.colId, styles.colBtn, styles.font]}>FUNÇÃO</Text>)
          }
        </View>
      </View>
    )
  }

  render() {
    let textInput = ''
    return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={this.props.itens} renderItem={(item) => this.renderItem(item, this.props)} ref="flatlist"
        onContentSizeChange={() =>{
        this.refs.flatlist.scrollToEnd()
        }}/>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder="Ensira a tarefa..." onChangeText={(text) => {
          textInput = text
        }} />
        <TouchableOpacity style={styles.buttonHover} onPress={() => {
            let addItem = [...this.props.itens]
            let globalIndex = this.props.index
            let OneMoreInIndex = (globalIndex + 1)

            let newitem = {
              key: (OneMoreInIndex.toString()),
              id: (OneMoreInIndex.toString()),
              desc: textInput 
            }
            
            addItem.push(newitem)
            this.props.dispatch({type: 'task/add', itens: addItem, index: OneMoreInIndex})
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
  return { itens: state.itens, index: state.index }
}

export default connect(mapStateToProps)(Task)
