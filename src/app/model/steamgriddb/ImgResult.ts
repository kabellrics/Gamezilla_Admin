export interface ImgResult {
  success: boolean
  data: SGDBImg[]
}

export interface SGDBImg {
  id: number
  score: number
  style: string
  width: number
  height: number
  nsfw: boolean
  humor: boolean
  notes?: string
  mime: string
  language: string
  url: string
  thumb: string
  lock: boolean
  epilepsy: boolean
  upvotes: number
  downvotes: number
  author: Author
}

export interface Author {
  name: string
  steam64: string
  avatar: string
}
