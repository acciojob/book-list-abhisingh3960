let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let isbnInput = document.getElementById('isbn');
let submitButton = document.getElementById('submit');
let table = document.getElementById('book-list'); // Targeting tbody with id 'book-list'

submitButton.addEventListener('click', () => {
    let titleValue = titleInput.value.trim();
    let authorValue = authorInput.value.trim();
    let isbnValue = isbnInput.value.trim();

    if (titleValue && authorValue && isbnValue) {
        let newRow = table.insertRow(); 

        let titleCell = newRow.insertCell(0);
        let authorCell = newRow.insertCell(1);
        let isbnCell = newRow.insertCell(2);
        let deleteCell = newRow.insertCell(3);

        titleCell.innerText = titleValue;
        authorCell.innerText = authorValue;
        isbnCell.innerText = isbnValue;

        // Create the delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete'; 
        deleteButton.addEventListener('click', () => {
            table.deleteRow(newRow.rowIndex - 1);
        });

        deleteCell.appendChild(deleteButton);

        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    } else {
        alert("Please fill in all fields");
    }
});
