const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const addImages = () => {

  const listGallery = document.querySelector(".gallery");
  const widthImage = 360;
  const heightImage = 300;

  const galleryHTML = images
    .map((image) => `<li class="list-item-image"><img src=${image.url} alt=${image.alt} width=${widthImage} height=${heightImage}></li>`)
    .join(" ");

  listGallery.style.display = "flex";
  listGallery.style.flexWrap = "wrap";
  listGallery.style.columnGap = "24px";
  listGallery.style.rowGap = "48px";
  listGallery.style.listStyleType = "none";
  listGallery.style.alignItems = "center";
  listGallery.style.justifyContent = "center";

  listGallery.insertAdjacentHTML("beforeend", galleryHTML);

  // const itemImage = document.querySelector(".list-item-image");
  // itemImage.style.flexWidth = "((100% - 24px*2)/3)";
}

addImages();

