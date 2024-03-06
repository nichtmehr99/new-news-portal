const fetchCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json()
    const btnContainer = document.getElementById('btn-container')
    data.data.news_category.forEach(singleCategory => {
        // console.log(singleCategory)
        const newCategory = document.createElement('div')

        newCategory.innerHTML = `
        <button onclick = "loadAllNews('${singleCategory.category_id}')" class="btn">${singleCategory.category_name}</button>
        `
        btnContainer.appendChild(newCategory)
    });
}

const loadAllNews = async(catId)=>{
    const response = await fetch(`
    https://openapi.programming-hero.com/api/news/category/${catId}
    `)
    const data = await response.json()
    const newsContainer = document.getElementById('main-container')
    newsContainer.innerText = ''
    data.data.forEach(news => {
        // console.log(news)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src="${news.thumbnail_url}"/></figure>
            <div class="card-body">
              <h2 class="card-title">${news.title}</h2>
              <p>${news.details.slice(0,200)}</p>

              <div class="avatar">
                <div class="w-16 rounded-full">
                  <img src="${news.author.img}" />
                </div>
                <p>${news.author.name}</p>
                <p>Total Views: ${news.total_view} </p>
              </div>

            </div>
          </div>
        `
        newsContainer.appendChild(div)
    })
}


loadAllNews()
fetchCategory()
