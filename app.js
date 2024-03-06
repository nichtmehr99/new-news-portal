const fetchCategory = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json()
    const btnContainer = document.getElementById('btn-container')
    data.data.news_category.forEach(singleCategory => {
        // console.log(singleCategory)
        const newCategory = document.createElement('div')
        newCategory.innerHTML = `
            
        `

    });
}
fetchCategory()