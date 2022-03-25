import { CLASS, DIRECTION } from './constants';
const Slider = function(sliderRef){
    this.sliderRef = sliderRef;
    this.slidesRef = this.sliderRef.getElementsByClassName('slides')[0];
    this.currentRef = this.slidesRef.getElementsByClassName('current')[0];
    this.prevBtn = sliderRef.querySelector('.goToPrev');
    this.nextBtn = sliderRef.querySelector('.goToNext');
    this.prevRef;
    this.nextRef;
    this.handleSlide();
    this.bindListeners();
}

Slider.prototype.handleSlide = function(){
   
    this.prevRef = this.currentRef.previousElementSibling || this.slidesRef.lastElementChild ;
    this.nextRef = this.currentRef.nextElementSibling || this.slidesRef.firstElementChild;
    this.prevRef.classList.add(CLASS.PREVIOUS);
    this.nextRef.classList.add(CLASS.NEXT);
    this.currentRef.classList.add(CLASS.CURRENT);
}

Slider.prototype.moveSlider = function(direction = DIRECTION.NEXT){

    //remove classnames
    this.currentRef.classList.remove(CLASS.CURRENT);
    this.nextRef.classList.remove(CLASS.NEXT);
    this.prevRef.classList.remove(CLASS.PREVIOUS);

   if(direction === DIRECTION.NEXT){
        this.currentRef = this.nextRef;
   }
   else{
        this.currentRef = this.prevRef;
   }
   this.handleSlide();
}

Slider.prototype.bindListeners = function(){
    this.prevBtn.addEventListener('click', (e) => this.moveSlider(DIRECTION.PREVIOUS));
    this.nextBtn.addEventListener('click', this.moveSlider.bind(this, DIRECTION.NEXT));
}

export default Slider;