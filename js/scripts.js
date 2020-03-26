$(documen).ready(function() {
  $('form#triangle').submit(function(event) {
    event.preventDefault()
    var one = parseInt($('input#one').val())
    var two = parseInt($('input#two').val())
    var three = parseInt($('input#three').val())
    if (one === two && two === three) {
      //equilateral
    } else {
      if ((one === two && two !== three) || (two === three && three !== one)) {
        //isosceles
      } else {
        if (one !== two && two !== three && one + two > three && one + three > two && two + three > one) {
          //scalene
        } else {
          //not a triangle
        }
      }
    }
  })
})
