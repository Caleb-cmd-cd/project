//fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,description,price,rating,category,images')
//.then(res => res.json())
//.then(DisplayDiv())


//.then(console.log);


/*fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,description,price,rating,category,images', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil'
       other product data
    })
  })
  .then(res => res.json())
  .then(console.log); */



function DisplayDiv(Test){

  const object = fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,description,price,rating,category,images')
    .then(res => res.json())
    .then(data => {
      console.log(JSON.stringify(data, null, 2));
       console.log("x",data);
    })
    .then(data => {
      console.log("other",data);
      const DisplayDiv = document.getElementById('DisplayDiv');
      DisplayDiv.innerHTML = object.products;
    })
    .catch(error => console.error('Error:', error));


//console.log(object)

  // const DisplayDiv = document.getElementById('DisplayDiv');
  // DisplayDiv.innerHTML = object;

}


DisplayDiv();
console.log(DisplayDiv());