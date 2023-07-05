document
  .getElementById("user-add-data")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //IDs
    let Username = document.getElementById("input-username").value;
    let Email = document.getElementById("input-email").value;
    let Address = document.getElementById("input-address").value;
    let Admin = document.getElementById("input-admin").checked;
    let table = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];
    let rowLength = table.insertRow(table.rows.length);

    let firstCell = rowLength.insertCell(0);
    firstCell.innerHTML = Username;

    let secondCell = rowLength.insertCell(1);
    secondCell.innerHTML = Email;

    let thirdCell = rowLength.insertCell(2);
    thirdCell.innerHTML = Address;

    let fourthCell = rowLength.insertCell(3);
    fourthCell.innerHTML = Admin ? "X" : "-";

    document.getElementById("user-add-data").reset();
  });
