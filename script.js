let addedCat;
function fetchAndDisplay(){
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    fetch(url)
    .then(function(res){
      return res.json()
    }).then(function(res){
        let data = res
      localStorage.setItem("catData" , JSON.stringify(data.categories))
    }).catch(function(err){
      console.log(err)
    })
  }
  function displayCat(){
      var catData = JSON.parse(localStorage.getItem("catData"));
      catData.forEach(category => {
          let box = document.createElement("div");
          let catNum = document.createElement("p");
          catNum.innerText = "Category  " + category.idCategory;
          
          let catName = document.createElement("p");
          catName.innerText ="Category "+ category.strCategory;

          let catImg = document.createElement("img");
          catImg.src = category.strCategoryThumb;

          let button = document.createElement("button")
          button.id = "selectedCat"
          button.innerText = "select";
          button.addEventListener("click" , function(){
            addedCat = category.strCategory;
            localStorage.setItem("addedCat" , addedCat);
            window.location.href ="menu.html"
          });

          box.append(catImg,catNum,catName,button)
          document.getElementById("container").append(box)


      });
  }
  fetchAndDisplay();
  displayCat();
