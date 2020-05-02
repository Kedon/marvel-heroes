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
  description: string,
  selected?: boolean
}

/**
 * Character data interface
 */
export interface ICharacter {
  id?: string,
  name: string,
  description?: string,
  selected?: boolean
}

/**
 * Creator data interface
 */
export interface ICreator {
  id?: string,
  fullName: string,
  selected?: boolean
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
 * Handle error interface
 */
export interface ErrorResponse {
  code: number,
  message: string
 }

 export interface IHandleError {
  operation?:  string,
  statusText?: string,
  error: ErrorResponse
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

/**
 * Dictionary interface
 */
export interface Dictionary<T> {
  [Key: string]:Array<T>;
}