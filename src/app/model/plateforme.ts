export interface PlateformesResult {
  body: Plateforme[]
  itemCount: number
}

export interface Plateforme {
  Id: string
  Name: string
  Fanart: string
  ShowOrder: string
  PlateformeTypeId: string
}