import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomeService } from '../../home/services/home.service';
import { IData, IBanner } from '../../home/interfaces'

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
    @Input() label: string;
    @Output() onClick = new EventEmitter<any>();

    public banners: Array<IBanner>;
    public currentIdx = 0
    public pagination = []
    public idSetInterval = null


    constructor(private api: HomeService) { }

    ngOnInit() {
        // this.getBanners();
    }
    ngOnDestroy() {
        if (this.idSetInterval) {
          clearInterval(this.idSetInterval);
        }
      }
    
    bannerAutoPlay = () => {
        this.idSetInterval = setInterval(() => {
            this.next(); 
            }, 5000);
    }
    onClickButton(event) {
        this.onClick.emit(event);
    }
    /**
     * Load banners from Marvel api
     */
    getBanners = async () => {
        return false 
        try {
            const data: IData = await this.api.getBanners();
            const { count, limit, offset, total } = data
            /**
             * Series resullt Array<IMagazine>
             * Maping only cover fields
             * slice(get frist 2 authors only)
             */
            const banners: Array<IBanner> = data.results.map((m: any, idx) => {
                /**
                 * Create pagination array
                 */
                console.log(m)
                this.pagination.push(idx)
                return ({
                thumbnail: `${m.thumbnail.path}.${m.thumbnail.extension}`,
                title: m.title,
                story: m.stories.items.map(
                    ( story ) =>  story.name).slice(1,2),
                creators: m.creators.items.map(
                    ( author ) =>  author.name).slice(0,2).join(' And ')
            })})
            /**
             * Magazines data
             */
            alert(banners)
            this.banners = banners
            console.log(JSON.stringify(this.banners))
            this.bannerAutoPlay()
            //  this.selectedBanner = this.banners[0]
        } catch (error) {

        }

    }
    next = () => {this.pagination
        this.currentIdx = this.currentIdx < this.pagination.length-1 ?  this.currentIdx+1 : 0
       
    }
    prev = () => {
        this.currentIdx = this.currentIdx > 0  ?  this.currentIdx-1 : this.pagination.length-1
    }
}