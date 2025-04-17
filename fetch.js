let data=[];

async function fetchData(){
    const response=await fetch("http://localhost:3000/api/user");
    data=await response.json();
console.log(data)
    return data;
}

// why getElementBy id didn't work?
function renderData(){
    const mainElement=document.querySelector("#my");
    mainElement.innerHTML=data.map((user) => `<article class="cf ph3 ph5-ns pv4">
        <div class="dtc w2 w3-ns v-mid">
          <img
            src="${user.picture.medium}"
            class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns customPicture"
          />
        </div>
        <div class="dtc v-mid pl3">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">${user.name.first} ${user.name.last}</h1>
          <h2 class="f6 fw4 mt0 mb0 black-60 shortName">@${user.name.first.charAt(0)}${user.name.last.charAt(0)}</h2>
        </div>
        <div class="dtc v-mid">
          <form class="w-100 tr">
            <button
              class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
              type="submit"
            >
              + Follow
            </button>
          </form>
        </div>
      </article>`
      
    ).join("");
}



setInterval(async function getData(){
    await fetchData();
    renderData();
}, 3000);
getData();