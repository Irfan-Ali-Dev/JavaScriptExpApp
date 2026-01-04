// console.log("Hello Exp");

// const amount = document.querySelector("#amount");
// const category = document.querySelector("#category")
// const remarks = document.querySelector("#remarks")
// const submit = document.querySelector("#submit")
// const showData = document.querySelector("#showData")

// // function renderData() {
// //     amount.value += showData;  
// //     console.log(renderData());
// //     };
// // renderData();


// console.log(amount.value);

  let expenses = [];
  let total = 0;

  function addExpense() {
    const amount = Number(document.querySelector("#amount").value);
    const category = document.querySelector("#category").value;
    const description = document.querySelector("#description").value;
    const date = new Date().toLocaleDateString();

    if (!amount || !description) {
      alert("Please enter amount and description");
      return;
    }

    expenses.push({ amount, category, description, date });
    total += amount;

    renderExpenses();
    updateTotal();

    document.querySelector("#amount").value = "";
    document.querySelector("#description").value = "";
  }

  function renderExpenses() {
    const list = document.querySelector("#expenseList");
    list.innerHTML = "";

    expenses.forEach((exp, index) => {
      const div = document.createElement("div");
      div.className = "expense-item";

      div.innerHTML = `
        <div class="expense-info">
          <strong>${exp.category}</strong> (${exp.description})<br/>
          ${exp.date} — Rs: ${exp.amount}
        </div>
        <div class="expense-actions">
          <button onclick="editExpense(${index})">Edit</button>
          <button onclick="deleteExpense(${index})">Delete</button>
        </div>
      `;

      list.appendChild(div);
    });
  }

  function deleteExpense(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    renderExpenses();
    updateTotal();
  }

  function editExpense(index) {
    const exp = expenses[index];

    document.getElementById("amount").value = exp.amount;
    document.getElementById("category").value = exp.category;
    document.getElementById("description").value = exp.description;

    total -= exp.amount;
    expenses.splice(index, 1);

    renderExpenses();
    updateTotal();
  }

  function updateTotal() {
    document.getElementById("total").innerText = total;
  }