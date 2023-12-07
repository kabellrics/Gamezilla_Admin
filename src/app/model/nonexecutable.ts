export interface NonExecutablesResult {
  body: NonExecutable[]
  itemCount: number
}

export interface NonExecutable {
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
  ExecutableId: string
  SGDBID: string
  IGDBID: string
  SSCPID: string
}
