var ul = document.createElement('ul')

data.forEach(function(note) {
    var li = document.createElement('li')

    ul.appendChild(li)
    li.appendChild(document.createTextNode(note.content))
})

document.getElementById('notes').appendChild(ul)