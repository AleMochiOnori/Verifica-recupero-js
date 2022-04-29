/*Using the data from the provided API, we need the Web app to:
* Display a list of 10 beers with their {
name:
date:
image:
description:
}
* Implement a delete button to delete the beer on your list
* BONUS Add a search bar to search for a beer based on it's title*/


async function getBeer() {
    const data = await fetch("https://api.punkapi.com/v2/beers")
    const res = await data.json()
    const sliced = res.slice(0, 10)
    sliced.forEach(element => {
      const div = document.createElement("div")
      div.innerHTML = element.name
      document.querySelector("body").append(div)
      const li = document.createElement("li")
      document.querySelector("body").append(li)
      li.innerHTML = element.first_brewed
      const img = document.createElement("img")
      img.setAttribute("src", element.image_url)
      document.querySelector("body").append(img)
      const section = document.createElement("section")
      document.querySelector("body").append(section)
      section.innerHTML = element.description

    });
    console.log(sliced)
  }
  getBeer()
  
  deleteBeer()
  