import { Component, OnInit, ɵConsole } from '@angular/core';
import { HomeService } from '../services/home.service'
import { IMagazine, IData, ISerie, ICharacter, ICreator, Dictionary } from '../interfaces'


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public magazines: IData
  public series: IData
  public characters: IData
  public creators: IData
  public currentPage = 1;
  public limit = 12;
  public maxPages = 0;
  public offSet = 0;
  public loader = false;
  public disableMoreButton = false;
  public allMagazines = [];
  public filter = {};
  public hasNoData = false;
  public filterSelecteds: {
    series: ISerie[],
    characters: ICharacter[]
    creators: ICreator[]

  }
  public isOnline: boolean = navigator.onLine

  /**
   *  Injecting http service to api
   * @param api
   */
  constructor(private api: HomeService) {
    /**
     * Initialize selected empty
     */
    this.filterSelecteds = {
      series: [],
      characters: [],
      creators: []
    }
    /**
    * Event listener check internet conection
    */
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.loadPage()
    });

    window.addEventListener('offline', () => {
      this.isOnline = false
    });

  }
  ngOnInit() {
    this.loadPage()
  }

  /**
   * Load manazines offset 0
   * Load menu filter Browse BY
   */
  loadPage = () => {
    this.getMagazines(0)
    this.browseMenu()
  }

  /**
   * Load more data from custom offset
   */
  pageOffset = () => {
    this.currentPage++
    console.log(this.currentPage)
    this.offSet = this.currentPage > 1 ? (this.currentPage - 1) * this.limit : 0
    this.loader = this.maxPages === this.currentPage ? true : false
    this.getMagazines(this.offSet)
  }

  /**
   * Load magazines given offset
   * @param offSet<Number>
   */
  getMagazines = async (offSet) => {
    try {
      this.loader = true
      /** API data  */
      const data: IData = await this.api.getMagazines({ offset: JSON.stringify(offSet), filter: this.filter });
      const { count, limit, offset, total } = data
      /**
       * Series resullt Array<IMagazine>
       * Maping only cover fields
       * slice(get frist 2 authors only)
       */
      await data.results.map((m: any) => this.allMagazines.push({
        thumbnail: `${m.thumbnail.path}.${m.thumbnail.extension}`,
        title: m.title,
        creators: m.creators.items.map(
          (author) => author.name).slice(0, 2).join(', ')
      }))
      /**
       * Get number of pages 
       */
      this.maxPages = Math.ceil(total / limit)

      /**
       * Magazines data
       */
      this.magazines = {
        count: count,
        limit: limit,
        offset: offset,
        results: this.allMagazines,
        total: total
      }
      /**
       * Loader and button enable / disable control
       */
      this.loader = false
      this.hasNoData = total <= 0
      this.disableMoreButton = total > 0 && this.maxPages <= this.currentPage

    } catch (error) {
      this.loader = false
      alert(JSON.stringify(error))
    }
  }

  /**
   * Clear filter and unselect checkboxes
   */

  clearSerieFilter = () => {
    const series: Array<ISerie> = this.series.results.map(s => ({...s, selected: false}))
    const characters: Array<ICharacter>  = this.characters.results.map(s => ({...s, selected: false}))
    const creators: Array<ICreator>  = this.creators.results.map(s => ({...s, selected: false}))

    /**
     * Update results
     */
    this.series.results = series
    this.characters.results = characters
    this.creators.results = creators

    /**
     * Clear selecteds Filters
     */
    this.filterSelecteds = {
      series: [],
      characters: [],
      creators: []
    }

    this.getData()
  }

  /**
   * Load series on page render, populate browser menu
   */
  getSeries = async () => {
    try {
      /** API data  */
      const data: IData = await this.api.getSeries();
      const { count, limit, offset, total } = data
      /**
       * Series resullt Array<ISerie>
      * Maping only important render fields
       */

      const series: Array<ISerie> = data.results.map((m: any) => ({
        id: m.id,
        title: m.title,
        description: m.description
      }))
      /**
       * Series data
       * Maping only important render fields
       */
      this.series = {
        count: count,
        limit: limit,
        offset: offset,
        results: series,
        total: total
      }

    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
  /**
   * Load characters on page render, populate browser menu
   */
  getCharacters = async () => {
    try {
      /** API data  */
      const data: IData = await this.api.getCharacters();
      const { count, limit, offset, total } = data
      /**
       * Characters resullt Array<ICharacter>
       * Maping only important render fields
       */
      const characters: Array<ICharacter> = data.results.map((m: any) => ({
        id: m.id,
        name: m.name,
        description: m.description
      }))
      /**
       * Characters data
       */
      this.characters = {
        count: count,
        limit: limit,
        offset: offset,
        results: characters,
        total: total
      }
    } catch (error) {
      alert(JSON.stringify(error))
    }
  }
  /**
   * Load Creators on page render, populate browser menu
   */
  getCreators = async () => {
    try {
      /** API data  */
      const data: IData = await this.api.getCreators();
      const { count, limit, offset, total } = data
      /**
       * Creators resullt Array<ICreator>
      * Maping only important render fields
       */

      const creators: Array<ICreator> = data.results.map((m: any) => ({
        id: m.id,
        fullName: m.fullName
      }))
      /**
       * Creators data
       */
      this.creators = {
        count: count,
        limit: limit,
        offset: offset,
        results: creators,
        total: total
      }

    } catch (error) {
      alert(JSON.stringify(error))
    }
  }

  /**
   * Load browse by menu
   */
  browseMenu = async () => {
    await this.getSeries()
    await this.getCharacters()
    await this.getCreators()
  }
  /**
   * Update filter on checkbox item change
   */
  onChangeCheckbox = () => {
    const series: Array<ISerie> = this.series.results.filter(s => s.selected).map(s => s)
    const characters: Array<ICharacter> = this.characters.results.filter(s => s.selected).map(s => s)
    const creators: Array<ICreator> = this.creators.results.filter(s => s.selected).map(s => s)

    /**
     * update all filters to filterSeletecteds variable
     */
    this.filterSelecteds = {
      series,
      characters,
      creators
    }
  }
  
 /**
  * On remove chips update filterSelecteds variable
  * @param data JSON<ISerie>, JSON<characters>,  JSON<creators>, 
  */
  handleRemoveOne = (data, type) => {
    switch (type) {
      case 'series': {
        /**
         * On checkbox unselect update component and remove chips
         */
        let series: Array<ISerie> = this.series.results.map((s: ISerie) => ({
         ...s,
          selected: s.id === data.id ? false : s.selected
        }))
        /** Remove chips by selected item index */
        let idxRemove = this.filterSelecteds.series.findIndex(x => x.id === data.id)
        this.filterSelecteds.series.splice(idxRemove, 1)

        /**
         * Update series results
         */
        this.series.results = series
        break;
      }
      case 'characters': {
          /**
         * On checkbox unselect update component and remove chips
         */
        let characters: Array<ISerie> = this.characters.results.map((s: ISerie) => ({
          ...s,
          selected: s.id === data.id ? false : s.selected
        }))
         /** Remove chips by selected item index */
        let idxRemove = this.filterSelecteds.characters.findIndex(x => x.id === data.id)
        this.filterSelecteds.characters.splice(idxRemove, 1)
         /**
         * Update characters results
         */
        this.characters.results = characters
        break;
      }
      case 'creators': {
          /**
         * On checkbox unselect update component and remove chips
         */
        let creators: Array<ISerie> = this.creators.results.map((s: ISerie) => ({
          ...s,
           selected: s.id === data.id ? false : s.selected
         }))
          /** Remove chips by selected item index */
         let idxRemove = this.filterSelecteds.creators.findIndex(x => x.id === data.id)
         this.filterSelecteds.creators.splice(idxRemove, 1)
        /**
         * Update characters results
         */
         this.creators.results = creators
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    /**
     * Load magazines by custom filter
     */
    this.getData()
  }

  /**
   * Filter magazines by browser category
   */
  getData = () => {
    this.allMagazines = []
   
    /**
     * Series comma sepatated formmat to filter
     */
    const series = this.filterSelecteds.series.filter(s => s.selected).map(s => s.id).join(',')
    const characters = this.filterSelecteds.characters.filter(s => s.selected).map(s => s.id).join(',')
    const creators = this.filterSelecteds.creators.filter(s => s.selected).map(s => s.id).join(',')

    /**
     *  Params data to filter
     */
    let params = {
      characters: characters,
      series: series,
      creators: creators
    }

    /**
     * Remove empty attributes
     */
    if (!series) {
      delete params.series
    }
    if (!characters) {
      delete params.characters
    }
    if (!creators) {
      delete params.creators
    }
    
    /**
     * Update filter data
     */
    this.filter = params;

    /**
     * Load magazines
     */
    this.getMagazines(0)
  }
}