$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    event.preventDefault()
    var one = parseInt($('input#one').val())
    var two = parseInt($('input#two').val())
    var three = parseInt($('input#three').val())
    var result = ''
    if (one === two && two === three) {
      result = 'equilateral'
      console.log('equilateral')
    } else {
      if ((one === two && two !== three) || (two === three && three !== one)) {
        result = 'isosceles'
      } else {
        if (one !== two && two !== three && one + two > three && one + three > two && two + three > one) {
          result = 'scalene'
        } else {
          result = 'not a triangle'
        }
      }
    }
    if (result !== 'not a triangle') {
      $('#result').html(`<h3>This is ${result}</h3>
      <h2>Good job</h2>`)
    } else {
      alert('not a triangle dummy')
    }
  })
})
