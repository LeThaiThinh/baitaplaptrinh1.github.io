export const HomeAction = () => {
    return {
        type: 'HOME',
    }
}

export const BookAction = () => {
    return {
        type: 'BOOK',
    }
}
export const MenuAction = () => {
    return {
        type: 'MENU',
    }
}
const ChangePageReducer = (state = '', action) => {
    switch (action.type) {
        case 'HOME':
            return action.type
        case 'BOOK':
            return action.type
        case 'MENU':
            return action.type
        default:
            return 'HOME'
    }
}

export default ChangePageReducer