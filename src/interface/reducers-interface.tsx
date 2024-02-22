export interface ItemAction {
  type: string;
  payload: { id: string; title: string };
}

export interface ItemState {
  active: { id: string; title: string }[];
  complete: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
}

export interface IuserState {
  userData: { name: string; email: string; password: string }[];
  isLoggedIn: boolean;
}

export interface IuserAction {
  type: string;
  payload: { name: string; email: string; password: string, isLoggedIn: boolean };

}

export interface ItemReducerState {
  itemReducer: ItemState;
}

export interface IuserReducerState {
  userReducer: IuserState;
}