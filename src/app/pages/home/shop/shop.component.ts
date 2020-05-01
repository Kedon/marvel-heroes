import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'
import { IMagazine, IData, ISerie, ICharacter, ICreator } from '../interfaces'


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
  public filter = { }
  /**
   *  Injecting http service to api
   * @param api
   */
  constructor(private api: HomeService) {

  }
  ngOnInit() {
    this.getMagazines(0)
    this.browseMenu()
  }

  pageOffset = () => {
    this.currentPage++
    console.log(this.currentPage)
    this.offSet = this.currentPage > 1 ? (this.currentPage - 1) * this.limit : 0
    this.loader = this.maxPages === this.currentPage ? true : false
    this.getMagazines(this.offSet)
  }

  /**
   * Get magazines on page render
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
      this.maxPages = Math.ceil(total / limit)

      console.log(this.maxPages)

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
      this.loader = false
      this.disableMoreButton = this.maxPages <= this.currentPage

    } catch (error) {
      this.loader = false
      alert(JSON.stringify(error))
    }
  }
  /**
   * Get series on page render, populate browser menu
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
       * Magazines data
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
   * Get characters on page render, populate browser menu
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
       * Magazines data
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
   * Get series on page render, populate browser menu
   */
  getCreators = async () => {
    try {
      /** API data  */
      const data: IData = await this.api.getCreators();
      const { count, limit, offset, total } = data
      /**
       * Series resullt Array<ISerie>
      * Maping only important render fields
       */

      const creators: Array<ICreator> = data.results.map((m: any) => ({
        id: m.id,
        fullName: m.fullName
      }))
      /**
       * Magazines data
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
   * Format browser menu
   */
  public browseMenu = async () => {
    await this.getSeries()
    await this.getCharacters()
    await this.getCreators()
  }

  /**
   * Filter magazines by browser category
   */
  public getData = (evt) => {
    this.allMagazines=[]
    /**
     * Series comma sepatated
     */
    const series = this.series.results.filter( s => s.selected).map(s => s.id).join(',')
    const characters = this.characters.results.filter( s => s.selected).map(s => s.id).join(',')
    const creators = this.creators.results.filter( s => s.selected).map(s => s.id).join(',')

    let params = {
      characters: characters,
      series: series,
      creators: creators
    }
    if(!series) {
      delete params.series
    }
    if(!characters) {
      delete params.characters
    }
    if(!creators) {
      delete params.creators
    }
     if(!series && !characters && !creators) {
       alert("Você não selecionou nenhum filtro")
       return 
     }
   
     this.filter = params
     this.getMagazines(0)
  }
}