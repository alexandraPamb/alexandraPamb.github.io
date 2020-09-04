// function Toggle(listNumber){
//    var classes = document.getElementsByClassName('list-subitem-'+ listNumber);
//     for (i = 0; i < classes.length; i++) {
//         if (classes[i].classList.contains('display-none'))
//             {
//  classes[i].classList.remove('display-none');             
//             }
//         else  
//         {
//  classes[i].classList.add('display-none');     
            
//         }
// }
// }

// var classTitle = document.getElementsByClassName('title');
// var classTitleImage = document.getElementsByClassName('title-image');

$(window).resize(function() {
    if ($(window).width() > 768) {
      $('.title').remove().insertAfter($('.title-image'));
    } else {
      $('.title').remove().insertBefore($('.title-image'));
    }
  })