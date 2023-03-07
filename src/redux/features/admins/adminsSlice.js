import Action from '../../actions'


const initialState = {
    showModalAddPhienBan: false
}

export default function adminsReducer(state = initialState, action) {
    switch (action.type) {
        case Action.ADMIN_SHOW_MODAL_ADD_PHIEN_BAN.type: {
            return {
                ...state,
                showModalAddPhienBan: true
            }
        }
        case Action.ADMIN_HIDE_MODAL_ADD_PHIEN_BAN.type: {
            return {
                ...state,
                showModalAddPhienBan: false
            }
        }
        default:
            return state
    }
}