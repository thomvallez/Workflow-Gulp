definegrid = function() {
    var browserWidth = $(window).width();
    if (browserWidth >= 320) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 80;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 17;
        gridonload = 'off';
        makehugrid();
    } //small
    if (browserWidth >= 768) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 80;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 30;
        gridonload = 'off';
        makehugrid();
    } //medium
    if (browserWidth >= 1024) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 86;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 30;
        gridonload = 'off';
        makehugrid();
    } //large
    if (browserWidth >= 1280) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 75;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 30;
        gridonload = 'off';
        makehugrid();
    } //xlarge
    if (browserWidth >= 1440) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 70;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 30;
        gridonload = 'off';
        makehugrid();
    } //xxlarge
    if (browserWidth >= 1920) {
        pageUnits = '%';
        colUnits = '%';
        pagewidth = 65;
        columns = 8;
        columnwidth = 12.5;
        gutterwidth = 0;
        pagetopmargin = 35;
        rowheight = 30;
        gridonload = 'off';
        makehugrid();
    } //xxlarge
}
$(document).ready(function() {
    definegrid();
    setgridonload();
});

$(window).resize(function() {
    definegrid();
    setgridonresize();
});
