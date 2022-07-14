
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


//after numerous testing the code. I realize the entire code has to be included in document.ready function to work.

$(document).ready(function(){    
    makeGrid(); //As soon as the document is ready the page displays the preset makeGrid function is called.

$('#sizePicker').click(function (){ //once submit is submitted creates table dynamically
$('table').empty();    //clears table when reset button is clicked/this code stops the table from duplicating
makeGrid();        //makeGrid function is called a 2nd time, once reset button is pressed it clears table without removing the whole table.
event.preventDefault(); //  prevents the grid from disappearing once created


});    
function makeGrid(){
const rowTable = $('#inputHeight').val();
const colTable = $('#inputWidth').val(); 

for (var r = 1; r <= rowTable; r++){    // loop to automate the creation of the rows
$('#pixelCanvas').append('<tr></tr>'); //add "<tr>" element to table
}   for (var c = 1; c <= colTable; c++ ){  // loop to automate the creation of the columns
$('table tr').append('<td></td>'); //add "<td>" element to table
$('tr').addClass('cells');  //add class to "<tr>" element
$('td').addClass('cells'); //add class to "<td>" element
}

$('td').click(function () {           // selects cell once pressed
const color = $('#colorPicker').val();  // holds color picked 
$(this).css('background-color', color); // place color picked into cell
});

$('td').dblclick(function () {        // when select cell and double click
const color = $('#colorPicker').val(); 
$(this).css('background-color', '');   //after double clicking cell erases color. by setting background color to an empty string.

});
}
});      


