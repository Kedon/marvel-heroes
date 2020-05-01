/**
 * Magazine data interface
 */
export interface IMagazine {
  thumbnail?: string,
  title?: string,
  creators?: string
}

/**
 * Série data interface
 */
export interface ISerie {
  id?: string,
  title: string,
  description: string
}

/**
 * Character data interface
 */
export interface ICharacter {
  id?: string,
  name: string,
  description?: string
}

/**
 * Creator data interface
 */
export interface ICreator {
  id?: string,
  fullName: string
}

/**
 * Banner data interface
 */
export interface IBanner {
  id?: string,
  thumbnail?: string,
  title?: string,
  description?: string,
  story: string,
  creators: string
}



/**
 * API response data interface
 */
export interface IData {
  count?: number,
  limit?: number,
  offset?: number,
  results?: Array<any>,
  total?: number
};
