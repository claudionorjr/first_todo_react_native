/**
 * @description: Reducer recebe dados do Action do Component e envia um novo estado.
 * 
 * @param {State} state 
 * @param {Action} action 
 */
export default function reducer (state = {itens: [{key: "0", id: "id", desc:"Tarefa"},] }, action){
    
    switch (action.type) {
        case 'task/add':
            return {
                ...state,
                itens: action.itens
            }
        case 'task/remove':
        return {
            ...state,
            itens: action.itens
        }
        default:
            return state;
    }
}