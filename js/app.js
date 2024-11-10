//// PART ONE

const titleElement = document.querySelector('#main-title');

titleElement.textContent = "Welcome to the Cozy Cafe";
titleElement.style.textAlign = 'center';

//// PART TWO

const bodyElement = document.querySelector('body');

bodyElement.style.backgroundColor = 'bisque';

//// PART THREE

const paragraphElement = document.querySelector('p');

paragraphElement.textContent = 'Life happens, coffee helps.';

//// PART FOUR

const titlesElements = document.querySelectorAll('.highlight-title');

titlesElements.forEach((element) => {
    element.style.fontStyle = 'italic';
});

//// PART FIVE

const pastMenuList = document.querySelector('#past-menu-items');

if (pastMenuList) {
    const newMenuItem = document.createElement('li');
    newMenuItem.textContent = 'Rose Cake';
    pastMenuList.appendChild(newMenuItem);
};

//// PART SIX

const specialList = document.querySelector('#cafe-specialties');

if (specialList) {
    const newSpecialItem = document.createElement('li');
    newSpecialItem.textContent = 'Karak Tea';
    newSpecialItem.classList.add('on-offer');
    specialList.appendChild(newSpecialItem);
}

//// PART SEVEN

const blogSection = document.querySelector('#blogs');

if (blogSection) {
    const newPost = document.createElement('div');
    newPost.classList.add('blog-post');

    const eventTitle = document.createElement('h3');
    eventTitle.textContent = 'Karak Tea Tasting Event';

    const eventInfo = document.createElement('p');
    eventInfo.textContent = 'Ready To Tea Party?, We are all MAD in here';

    newPost.appendChild(eventTitle);
    newPost.appendChild(eventInfo);

    blogSection.appendChild(newPost);
} else {
    console.error('Error');
}
