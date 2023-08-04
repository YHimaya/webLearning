(document).ready(function(){
    const slideData=$('.slide');
    let pointer=0;


    function viewSlide(){
        /*slideData.removeClass('active');
        slideData.equal(pointer).addClass('active');*/
        slideData.fadeOut(3000);
        slideData.eq(pointer).fadeIn(3000)
    }

    function next(){
        pointer++;
        if(pointer>=slideData.length){
            pointer=0;
        }
        viewSlide();
    }
    setInterval(next,3000);
})