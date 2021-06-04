//Consumiento api randomuser.me

function getData() {
    // console.log('test');
  
    //Get API
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
  
        let author = data.results;
        // console.log(author);
  
        //Get Data Value
        let output = "<h2><center></center></h2>";
  
        //Get Data Loop Through
        author.forEach(function(lists) {
          output += `
                   <br>
                    <div class="card mx-auto bg-dark" style="width: 25rem; color: white;">
                        <img src="${lists.picture.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${lists.name.first}</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-dark">Cell: ${lists.cell}</li>
                    <li class="list-group-item bg-dark">Edad: ${lists.dob.age}</li>
                    <li class="list-group-item bg-dark"> ${lists.email}</li>
                    <li class="list-group-item bg-dark">Genero: ${lists.gender}</li>
                    <li class="list-group-item bg-dark">Ciudad: ${lists.location.city}</li>
                    <li class="list-group-item bg-dark">País: ${lists.location.country}</li>
                    </ul>
                    <div class="card-body" style="text-align: center;">
                    <button class="btn btn-primary" id="myBtn">Read More...</button>
                    </div>
                </div>
                  `;
        });
  
        //Show On Our Screen All Data
        document.getElementById('output').innerHTML = output;
  
      });
  }
  