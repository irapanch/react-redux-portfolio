import { createSelector } from "@reduxjs/toolkit"

export const selectTodos = state => state.todoRed.todos
export const selectFilter = state => state.todoRed.filter
export const selectLoading = state => state.todoRed.loading
export const selectCurrentItem = state => state.todoRed.currentItem

//  створення лічильника невиконаних todos
export const selectUncompleted1 =  state => { //працює, але йде зайвий перерендер сторінки
    const todos = selectTodos(state)
    return todos.reduce((total, curr) => !curr.completed ?total + 1 : total, 0)
}
//  для запобігання зайвому перерендеру використовуємо createSelector з   редаксу, який під капотом вже має мемоізацію:
export const selectUncompleted = createSelector    ([selectTodos], (todos) => { 
    return todos.reduce((total, curr) => !curr.completed ?total + 1 : total, 0)
})
// ------------------------------



// -- рефакторинг селектору на createSelector з   редаксу:
export const selectFilteredTodos1 = state => { //працює, але йде зайвий перерендер сторінки
    const todos = selectTodos(state)
    const filter = selectFilter(state)

    switch(filter){
        case 'all':
            return todos
        case 'active':
            return todos.filter(item => !item.completed)
            case 'completed':
                return todos.filter(item => item.completed)

        default:
            console.log('error with filter: ', filter);
    }
}

export const selectFilteredTodos = createSelector    ([selectTodos, selectFilter], (todos, filter) => { 
    switch(filter){
        case 'all':
            return todos
        case 'active':
            return todos.filter(item => !item.completed)
            case 'completed':
                return todos.filter(item => item.completed)

        default:
            console.log('error with filter: ', filter);
    }
})



