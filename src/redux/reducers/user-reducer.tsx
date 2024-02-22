import { IuserAction, IuserState } from "../../interface/reducers-interface";

const initialSate: IuserState = {
    userData: [],
    isLoggedIn: false
}

const userReducer = (state: IuserState = initialSate, action: IuserAction): IuserState => {
    switch (action.type) {
        case "Set_User_Data":
            return {
                ...state,
                userData: [...state.userData, action.payload],
            };
        case "Set_Logged_In" :
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            };
        default: {
            return state;
        }
    }
}

export default userReducer;