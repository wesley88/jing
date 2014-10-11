var showLine = function(line, container) {
    var chars = line.split('');

    chars.forEach(function(char){
        container.append('<div class="char">'+char+'</div>');
    });
};


var showSection = function(section, container){
    section.forEach(function(line){
        var lineEle = $('<div class="line"></div>');

        showLine(line, lineEle);

        container.append(lineEle);
    });
};


var populateText = function(){
    var text = window.text;

    var container = $('.container');

    text.forEach(function(section){
        var ele = $('<div class="section"></div>');
        
        showSection(section, container);

        container.append(ele);
    })
};


$(document).ready(populateText);