document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    initializeCarousel();
    
    // 初始化班级大事时间轴
    initializeTimeline();
    
    // 初始化社交媒体图标
    initializeSocialIcons();
});

function initializeCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    websiteData.carouselItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        div.innerHTML = `
            <img src="${item.image}" class="d-block w-100" alt="${item.title}">
            <div class="carousel-caption">
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
        `;
        carouselInner.appendChild(div);
    });
}

function initializeTimeline() {
    const timeline = document.querySelector('.timeline');
    websiteData.classEvents.forEach(event => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="card">
                <img src="${event.image}" class="card-img-top" alt="${event.title}">
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${event.date}</h6>
                    <p class="card-text">${event.description}</p>
                </div>
            </div>
        `;
        timeline.appendChild(div);
    });
}

function initializeSocialIcons() {
    const socialIcons = document.querySelector('.social-icons');
    websiteData.socialMedia.forEach(social => {
        const div = document.createElement('div');
        div.className = 'social-icon-container';
        div.innerHTML = `
            <div class="social-platform">${social.displayName}</div>
            <div class="social-text">${social.text}</div>
        `;
        socialIcons.appendChild(div);
    });
} 