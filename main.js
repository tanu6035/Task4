document.addEventListener('DOMContentLoaded', () => {
    const trendingContent = [
        { id: 1, title: 'Stranger', image: 'pic1.webp' },
        { id: 2, title: 'Caption', image: 'pic2.webp' },
        { id: 3, title: 'Hare', image: 'pic3.avif' },
        { id: 4, title: 'Mystry 2', image: 'pic4.webp' },
        { id: 5, title: 'ovie', image: 'pic5.avif' }
    ];

    const seriesContent = [
        { id: 1, title: 'Family ', image: 'pic6.jpg' },
        { id: 2, title: 'Mystry man', image: 'pic7.avif' },
        { id: 3, title: 'Forest', image: 'pic8.avif' },
        { id: 4, title: 'Scooby', image: 'pic9.avif' },
        { id: 5, title: 'Final Destination', image: 'pic10.avif' }

    ];

    const recommendedContent = [
        { id: 1, title: 'Trending', image: 'pic11.avif' },
        { id: 2, title: 'Rajasthan', image: 'pic12.avif' },
        { id: 3, title: 'Rajasthan 2', image: 'pic13.avif' },
        { id: 4, title: 'Party', image: 'pic14.avif' },
        { id: 5, title: 'Solve', image: 'pic15.avif' }

    ];

    function displayContent(sectionId, contentArray) {
        const section = document.getElementById(sectionId).querySelector('.content-grid');
        contentArray.forEach(content => {
            const contentItem = document.createElement('div');
            contentItem.className = 'content-item';
            contentItem.innerHTML = `
                <img src="${content.image}" alt="${content.title}">
                <h3>${content.title}</h3>
            `;
            contentItem.addEventListener('click', () => {
                localStorage.setItem('selectedContent', JSON.stringify(content));
                window.location.href = 'content.html';
            });
            section.appendChild(contentItem);
        });
    }

    displayContent('trending', trendingContent);
    displayContent('series', seriesContent);
    displayContent('recommended', recommendedContent);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const allContentItems = document.querySelectorAll('.content-item');
        allContentItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    if (document.getElementById('content-details')) {
        const selectedContent = JSON.parse(localStorage.getItem('selectedContent'));
        if (selectedContent) {
            const contentDetails = document.getElementById('content-details');
            contentDetails.innerHTML = `
                <img src="${selectedContent.image}" alt="${selectedContent.title}">
                <h1>${selectedContent.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            `;
        }
    }
});
