let shop = document.querySelector('#shop');

console.log(shop);

let shopItemsData = [
  {
    id: 'jfhgbvnscs',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-1.jpg',
  },
  {
    id: 'ioytrhndcv',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-2.jpg',
  },
  {
    id: 'wuefbncxbsn',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-3.jpg',
  },
  {
    id: 'thyfhcbcv',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-4.jpg',
  },
  {
    id: 'thiecbawdjksadjk',
    name: 'Mens Tie',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-5.png',
  },
  {
    id: 'iuertrywebncdjksadjk',
    name: 'Casual shoes',
    price: 200,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-6.png',
  },
  {
    id: 'thierytbvcbvzdhadjk',
    name: 'black suit',
    price: 450,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-7.png',
  },
  {
    id: 'trfoiwfcnbcawdjksadjk',
    name: 'polo shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-8.png',
  },
  {
    id: 'cbvxbcvsceldk',
    name: 'denim shirt',
    price: 85,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-9.png',
  },
  {
    id: 'oiopijmjkhuihb',
    name: 'denim pants',
    price: 120,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-10.png',
  },
  {
    id: 'oiopijewyiohbjhib',
    name: 'basic cap',
    price: 35,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-11.png',
  },
  {
    id: 'rtytytuyuytyytbvncv',
    name: 'leather boots',
    price: 350,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-12.png',
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      return `
  <div class="product">
    <img src=${x.img} alt="" />
    <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        <div class="price-quantity">
        <h3>$${x.price}</h3>
        <div class="buttons">
            <i class="bi bi-dash"></i>
            <div class="quantity">10</div>
            <i class="bi bi-plus"></i>
        </div>
        </div>
    </div>
</div>
    `;
    })
    .join(''));
};

generateShop();
