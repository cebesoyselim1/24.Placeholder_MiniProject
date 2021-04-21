const cardImg = document.querySelector(".card-header");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".card-text");
const authorImg = document.querySelector(".author-img-container");
const authorTitle = document.querySelector(".author-description-title");
const authorDate = document.querySelector(".author-description-date");


setTimeout(() => {
    cardLoader();
},2000)


function cardLoader(){
    cardImg.innerHTML = `<img src="https://www.theneweconomy.com/wp-content/uploads/2020/06/B051-remote-working-coronavirus-technology-scaled.jpg" alt="img" class="card-img">`;
    cardImg.classList.remove("anim");
    cardTitle.innerHTML = "Lorem ipsum dolor sit amet.";
    cardTitle.classList.remove("anim");
    cardTitle.classList.remove("animTitle");
    cardText.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, commodi quo rem delectus eos ratione consequuntur praesentium voluptas possimus debitis!";
    cardText.classList.remove("anim");
    cardText.classList.remove("animText");
    authorImg.innerHTML = `<img src="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large" alt="" class="author-img">`;
    authorImg.classList.remove("anim");
    authorTitle.innerHTML = "Ali Altın";
    authorTitle.classList.remove("anim");
    authorTitle.classList.remove("animTitle");
    authorDate.innerHTML = "Jan 15, 2021";
    authorDate.classList.remove("anim");
    authorDate.classList.remove("animTitle");
}