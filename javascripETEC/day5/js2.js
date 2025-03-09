


//     var id,name,gender,salary,house,rate,total,op,income;
//     id = prompt("Enter your ID:");
//     name = prompt("Enter your name:");
//     gender = prompt("Enter your gender ):");
//     salary = parseFloat(prompt("Enter your salary:"));
//     house = parseFloat(prompt("Enter your house:"));
//     rate=prompt("Enter your rate:");
    
//    ot=house*rate;
//    income=salary*rate;
// document.write(`
//      <div class="container">
//         <table class="table table-hover" border="1">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Gender</th>
//                             <th>Salary</th>
//                             <th>House</th>
//                             <th>Rate (%)</th>
//                             <th>income</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>${id}</td>
//                             <td>${name}</td>
//                             <td>${gender}</td>
//                             <td>${salary}$</td>
//                             <td>${house}h</td>
//                             <td>${rate}%</td>
//                             <td>${income}$</td>
                           
//                         </tr>
//                     </tbody>
//                 </table>
//      </div>
//      </div>
// `);


var  id,name,gender,salary,house,rate,income,op;;
id=prompt("Enter your id:");
name=prompt("Enter your name:");
gender=prompt("Enter your salary:");
house=prompt("Enter your house:");
rate=prompt("Enter your rate:");

ot=house*rate;
income=salary*rate;
document.write(`
     <div class="container">
        <table class="table table-hover" border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>House</th>
                            <th>Rate (%)</th>
                            <th>income</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${gender}</td>
                            <td>${salary}$</td>
                            <td>${house}h</td>
                            <td>${rate}%</td>
                            <td>${income}$</td>
                           
                        </tr>
                    </tbody>
                </table>
     </div>
     </div>
    `);
