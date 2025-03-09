let score1, score2, score3, score4, score5;
score1 = prompt("Enter score1:");
score2 = prompt("Enter score2:");
score3 = prompt("Enter score3:");
score4 = prompt("Enter score4:");
score5 = prompt("Enter score5:");

let total = Number(score1) + Number(score2) + Number(score3) + Number(score4) + Number(score5);
let average = total / 5;

document.write(`
    <div class="container my-5">
        <table class="table table-dark border table-hover">
            <tr>
                <th>Score 1</th>
                <th>Score 2</th>
                <th>Score 3</th>
                <th>Score 4</th>
                <th>Score 5</th>
                <th>Total</th>
                <th>Average</th>
            </tr>
            <tr>
                <td>${score1}</td>
                <td>${score2}</td>
                <td>${score3}</td>
                <td>${score4}</td>
                <td>${score5}</td>
                <td>${total}</td>
                <td>${average}</td>
            </tr>
        </table>
    </div>
`);
