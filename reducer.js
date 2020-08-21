/**
 * @description: Reducer recebe dados do Action do Component e envia um novo estado.
 * 
 * @param {State} state 
 * @param {Action} action 
 */
export default function reducer (state = {itens: [{key: "id", id: 0, desc:"Tarefa"},], index: 0 }, action){
    
    switch (action.type) {
        case 'task/add':
            return {
                ...state,
                index: action.index,
                itens: action.itens
            }
        case 'task/remove':
            let newList = state.itens.filter((e) => {
                
                if (e.key != action.itemToRemove) return true
            })
            return {
                ...state,
                itens: newList
            }
        default:
            return state;
    }
}