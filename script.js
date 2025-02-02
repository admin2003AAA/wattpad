document.addEventListener('DOMContentLoaded', function() {
    // تفاعل مع NewsAPI
    async function fetchNews() {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=iq&apiKey=e692043d8df64922a959a26802224eaf');
        const data = await response.json();
        const articles = data.articles;

        const newsContainer = document.getElementById('news');
        newsContainer.innerHTML = '';  // إفراغ الأخبار السابقة

        articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <img src="${article.urlToImage}" alt="صورة الخبر">
                <div class="news-content">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">قراءة المزيد</a>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    fetchNews();
});
