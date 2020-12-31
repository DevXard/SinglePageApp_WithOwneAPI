$('#form').submit(createCake)

async function createCake(){
    let flavor = $('#flavor').val()
    let size = $('#size').val()
    let rating = $('#rating').val()
    let image = $('#image').val()
    
    let json = {
        flavor: flavor,
        size:size,
        rating:rating,
        image: image
    }

    await axios.post('/api/cupcakes', json)
}

async function getCupcakes(){
    let res = await axios.get('/api/cupcakes')
    let list = res.data.cupcakes
    listCupcakes(list)
}

function listCupcakes(arr){
    for(let cup of arr){
        $('.cupcakes').append(`
        <div class="col-sm-3">
        <img src="${cup.image}" alt="..." class=" img-thumbnail h ">
        <p>${cup.flavor} <span>Rating: ${cup.rating}</span></p>
        </div>
        `);
    }
}

getCupcakes()