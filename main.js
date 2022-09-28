
let content = document.getElementById('content');
let fragmento = document.createDocumentFragment();
let url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories';

function axisoLarnU(){
  axios.get(url).then((response)=>{
    let json = response.data.communityCategories;
    json.forEach((e) => {
      content.innerHTML += `
      <div class="contenedor">
      <div class="contenedor__icono"><img src="${e.icon}"></div>
          <h2 class="contenedor__name">${e.name}</h2>
          <p class="contenedor__totalQ">TotalQuizzes: ${e.totalQuizzes}</p>
          <p class="contenedor__user">Users: ${e.users}</p>
          <a href="https://es.larnu.com/" class="contenedor__link">Go to LarnU</a>
      </div>
      `
    })
  })
  .catch((error) =>{
    let message = error.statusText || "Ha ocurrido un error :( , lo sentimos";
    content.innerHTML = `Error ${error.status}: ${message}`
  })
}

  axisoLarnU();

