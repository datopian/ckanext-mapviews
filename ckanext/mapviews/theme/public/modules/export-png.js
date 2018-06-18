ckan.module('mapviews-export-png', function($) {
    return {
        initialize: function() {
            this.el.click(function(e){
                e.preventDefault()
                this.downloadMap()
            }.bind(this))
        },
        downloadMap: function() {
            var scrollY = window.pageYOffset;
            var container = document.body;

            window.scrollTo(0, 0);

            html2canvas(container, {
                allowTaint: true,
                useCORS: true,
                foreignObjectRendering: true,
                ignoreElements: function(element) {
                    return false
                }
            }).then(function(canvas) {
                Canvas2Image.saveAsPNG(canvas);             
            });
            window.scrollTo(0, scrollY);
        }
    }
})