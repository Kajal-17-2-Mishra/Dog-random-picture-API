let url = "https://dog.ceo/api/breeds/image/random";
  let button = document.querySelector("#dogPic");
  button.addEventListener("click", async ()=>{
    let link = await getPic();
    let img = document.querySelector("#dog");
    img.setAttribute("src",link);
  })
  async function getPic(){
      try {
        let response = await axios.get(url);
        return response.data.message;
      } catch (error) {
        console.log(`Error: ${error}`);
        return 'image not found!'
      }
    }
