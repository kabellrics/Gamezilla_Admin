export interface SGDBGame {
  types: string[]
  id: number
  name: string
  verified: boolean
  release_date?: number
}
export interface SGBDGameResult {
  success: boolean
  data: SGDBGame[]
}
