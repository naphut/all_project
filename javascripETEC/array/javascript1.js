const btnAdd = document.querySelector('.btnAdd');
const data = document.querySelector('#value');
let array = [];


btnAdd.addEventListener('click', () => {
    array.push(data.value);
    data.value = '';
    Swal.fire({
        title: 'Added!',
        text: 'Value already added to array.',
        icon: 'success'
    });
});


const btnViews = document.querySelector('.btnViews');
const tbody = document.querySelector('.tbody');
btnViews.addEventListener('click', () => {
    tbody.innerHTML = ''; 
    array.forEach((ele, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${ele}</td>
            </tr>
        `;
    });
});


const Search = (search) => {
    const result = array.filter((ele, index) => {
        return ele === search;
    });
    if (result.length === 0) {
        Swal.fire({
            title: 'Search not found!',
            icon: 'error'
        });
    } else {
        Swal.fire({
            title: 'Search found!',
            text: 'Result is shown on table.',
            icon: 'success'
        });
    }

    result.forEach((ele, index) => {
        tbody.innerHTML = '';
        tbody.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${ele}</td>
            </tr>
        `;
    });
};

const btnSearch = document.querySelector('.btnSearch');
btnSearch.addEventListener('click', function () {
    Search(data.value);
    data.value = ''; 
});
