interface product {
    name: string,
    description: string,
    price: number,
    image: string,
    discount: number
};

const DUMMY_PRODUCTS : product[] = [
    {
        name: 'Menekşe',
        description: 'Menekşe',
        price: 10.05,
        image: 'https://www.bahcetohum.com/img/products/mor-beyaz-menekse--cicek-tohumlari-_28.01.2022_a5be501.png',
        discount: 0
    },
    {
        name: 'Çam',
        description: 'Çam Ağaç Fidan',
        price: 45,
        image: 'https://productimages.hepsiburada.net/s/20/375-375/9871437824050.jpg',
        discount: 15
    },
    {
        name: 'Biber',
        description: 'Kıl Biber',
        price: 10.05,
        image: 'https://www.fidebahcesi.com/image/cache/data/fide/sarisin-f1-corbaci-kil-biber-fidesi-a785-550x550.jpg',
        discount: 0
    },
    {
        name: 'Domates',
        description: 'Domates',
        price: 12,
        image: 'https://images.migrosone.com/sanalmarket/product/28089034/domates-pembe-kg-f23b66-1650x1650.jpg',
        discount: 15
    },
    {
        name: 'Karpuz',
        description: 'Karpuz Tohum',
        price: 10.05,
        image: 'https://productimages.hepsiburada.net/s/35/375-375/10481318199346.jpg',
        discount: 0
    },
    {
        name: 'Kapya',
        description: 'Kapya Biber',
        price: 45,
        image: 'https://www.fidebahcesi.com/image/cache/data/fide/standart-kapya-biber-fidesi-196-1000x1000.jpg',
        discount: 15
    }
];

export default DUMMY_PRODUCTS;