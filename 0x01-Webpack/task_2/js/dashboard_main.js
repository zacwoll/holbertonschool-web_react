import $ from "jquery";
import _ from 'lodash';
import '../css/main.css';

$('<div id="logo"></div>').prependTo("body");
$('<p>Holberton Dashboard</p>').appendTo("body");
$('<p>Dashboard data for the students</p>').appendTo("body");
$('<button>Click here to get started</button>').appendTo("body");
$("<p id='count'></p>").appendTo("body");
$('<p>Copyright - Holberton School</p>').appendTo("body");

$('button').on('click', _.debounce(updateCounter));

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
}