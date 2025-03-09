let id;
let name, gender, score;

id = prompt("Enter id:");
name = prompt("Enter name:");
gender = prompt("Enter gender:");
score = prompt("Enter score:");

document.write(`
   <div class="container my-5">
        <table class="table table-dark border table-hover">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Score</th>
            </tr>
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${gender}</td>
                <td>${score}</td>
            </tr>
        </table>
    </div>
`);
