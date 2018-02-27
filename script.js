//
function sendRequest() {
    var xhr = new XMLHttpRequest();
    var i = 0;

    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/?limit=151', true);
    xhr.timeout = 55000;
    xhr.ontimeout = function () {
        console.log('Время вышло');
    };
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var list = JSON.parse(xhr.responseText, function (key, value) {
                    if (key == 'name') {
                        var getSecondTd = document.querySelectorAll('tr')[i].getElementsByTagName('td')[1];
                        var text = document.createElement('p');
                        text.innerHTML = value;
                        getSecondTd.appendChild(text);

                        i++;
                    }
                });
            }
        }
    };
}

//create a table
var size = 151;
var table = document.createElement('table');
document.body.appendChild(table);

for (i = 0; i < 152; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    tr.dataset.number = i;
    for (var j = 0; j < 3; j++) {
        var td = document.createElement('td');
        td.dataset.number = j;
        tr.appendChild(td);
        if (j === 2) {
            td.style.display = 'none';
        }
    }

}

//put the pictures in td[0] element;
for (var i = 0; i <= size; i++) {
    var putImg = document.querySelectorAll('tr')[i].getElementsByTagName('td')[0];
    putImg.innerHTML = "<img src=sprites/" + (i + 1) + ".png alt='' size='auto'>";
}

//create an event, when you point at a cell, that highlights the cell and sets up the permission to make it visible for the new third cell.
table.onmouseover = function (event) {
    var target = event.target;

    var getChild = target.parentNode;
    var getParent = target.parentNode.parentNode;

    var getDataP = getParent.getAttribute('data-number');
    var getDataCh = getChild.getAttribute('data-number');
    var make = document.querySelectorAll('tr')[getDataP].getElementsByTagName('td')[getDataCh].style.background = 'orange';


    if (+getDataCh === 0) {
        var add = document.querySelectorAll('tr')[getDataP].getElementsByTagName('td')[2].style.display = 'table-cell';
        var addText = document.querySelectorAll('tr')[getDataP].getElementsByTagName('td')[2];
        addText.innerHTML = '<p>Я искренне хотел добавить здесь доп.инф. но не смог :|</p>';
    }

};

//create an event, when you leave the cell,it backs up  in a standard condition and sets up the permission to make the third cell is hidden
table.onmouseout = function (event) {
    var target = event.target;
    var getChild = target.parentNode;
    var getParent = target.parentNode.parentNode;
    var getDataP = getParent.getAttribute('data-number');
    var getDataCh = getChild.getAttribute('data-number');

    var make = document.querySelectorAll('tr')[getDataP].getElementsByTagName('td')[getDataCh].style.background = 'none';
    var getParent = target.parentNode.parentNode;
    var getData = getParent.getAttribute('data-number');
    var add = document.querySelectorAll('tr')[getData].getElementsByTagName('td')[2].style.display = 'none';

};

sendRequest();



