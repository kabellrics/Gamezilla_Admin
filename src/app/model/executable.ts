export interface ExecutablesResult {
  body: Executable[]
  itemCount: number
}

export interface Executable {
  Id: string
  Name: string
  Path: string
  Cover: string
  Logo: string
  Heroe: string
  Video: string
  Favorite: boolean
  IsActif: boolean
  NbStart: string
  LastStartDate: string
  PlateformeId: string
  StartParam: string
  StoreId: string
}
