import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { HomeService } from '../../home/services/home.service';
import { IData, IBanner } from '../../home/interfaces'


import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./carousel.animations";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {

  @Input() animationType = AnimationType.Scale;
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

    public banners: Array<IBanner>;
    public currentIdx = 0
    public pagination = []
    public idSetInterval = null
    


  currentSlide = 0;

  constructor(private api: HomeService) { }

  /**
     * Load banners from Marvel api
     */
    getBanners = async () => {
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
          console.log(banners)
          this.banners = banners
          this.bannerAutoPlay()
          //  this.selectedBanner = this.banners[0]
      } catch (error) {

      }

  }

  bannerAutoPlay = () => {
    this.idSetInterval = setInterval(() => {
        this.onNextClick(); 
        }, 5000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.banners.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.banners.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  onGoToClick(getSlider) {
    this.currentSlide = getSlider;
    console.log("next clicked, new current slide is: ", getSlider);
  }

  ngOnInit() {
    //this.preloadImages(); // for the demo
    this.getBanners();
  }

  preloadImages() {
    /*for (const slide of this.banners) {
      new Image().src = slide.thumbnail;
    }*/
  }
}