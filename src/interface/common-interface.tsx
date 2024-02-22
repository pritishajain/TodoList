export interface IstateProps {
  active: { id: string; title: string }[];
  complete: { id: string; title: string }[];
  recycleBin: { id: string; title: string }[];
}

export interface IuserProps {
  userData: { name: string; email: string; password:string }[];
}

