type Theme = {
    state: {
        primary: string,
        background: string
    },
    action: {
        type: string
    }
}

const themeReducer = (state: Theme['state'], action: Theme['action']) => {
    switch(action.type){
        case 'color-1':
            return {
                ...state,
                primary: 'color-1'
            }
        case 'color-2':
            return {
                ...state,
                primary: 'color-2'
            }
        case 'color-3':
            return {
                ...state,
                primary: 'color-3'
            }
        case 'color-4':
            return {
                ...state,
                primary: 'color-4'
            }
        case 'color-5':
            return {
                ...state,
                primary: 'color-5'
            }
        case 'color-6':
            return {
                ...state,
                primary: 'color-6'
            }    
        case 'bg-1':
            return {
                ...state,
                background: 'bg-1'
            }
        case 'bg-2':
            return {
                ...state,
                background: 'bg-2'
            }
        default:
            return state    
    }
}

export default themeReducer