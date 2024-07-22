document.getElementById('modal-btn').addEventListener(
     'click', function(){
        document.getElementById('formContainer').style.display = 'block';
    }
) 

function addDish() {
  let title = document.getElementById('title').value;
  let price = document.getElementById('price').value;
  let image = document.querySelector('input[type=file]').files[0];
  let featured = document.getElementById('featured').value;
  let active = document.getElementById('active').value;

  if (title && price && image && featured && active) {
    let reader = new FileReader();
    reader.onload = function(e) {
      var table = document.getElementById('menu-table')
      .getElementsByTagName('tbody')[0];
      let newRow = table.insertRow();
      let rowIndex = table.rows.length;

      let cell_1 = newRow.insertCell(0);
      let cell_2 = newRow.insertCell(1);
      let cell_3 = newRow.insertCell(2);
      let cell_4 = newRow.insertCell(3);
      let cell_5 = newRow.insertCell(4);
      let cell_6 = newRow.insertCell(5);
      let cell_7 = newRow.insertCell(6);
      let cell_8 = newRow.insertCell(7);

      let img = document.createElement('img');
      img.src = e.target.result;
      img.width = 100;

      cell_1.innerHTML = rowIndex;
      cell_2.innerHTML = title;
      cell_3.innerHTML = price;
      cell_4.appendChild(img);
      cell_5.innerHTML = featured;
      cell_6.innerHTML = active;
      cell_7.innerHTML = '<button class="upDateBtn">Update Dish</button>';
      cell_8.innerHTML = '<button class="removeBtn">Remove Dish</button>';

      /* Add event for update and remove buttons */
      cell_7.querySelector('.upDateBtn').addEventListener('click', function(){
        upDateDish(newRow)
      });

      cell_8.querySelector('.removeBtn').addEventListener('click', function(){
        removeDish(newRow)
      })

      document.getElementById('dishForm').reset();
      document.getElementById('formContainer').style.display = 'none';
    }
    reader.readAsDataURL(image)
  }else{
    alert('Please fill in all fields')
  }
}

function upDateDish(row){
  alert('update functionality to be implemeted')
}

function removeDish(row){
  let index = row.rowIndex - 1;
  document.getElementById('menu-table').deleteRow(index)
}

/* Add event listeners for existing update and remove button */
document.querySelectorAll('.upDateBtn').forEach(function(button){
  button.addEventListener('click', function(){
    upDateDish(button.closest('tr'))
  })
})

document.querySelectorAll('.removeBtn').forEach(function(button){
  button.addEventListener('click', function(){
    removeDish(button.closest('tr'))
  })
})