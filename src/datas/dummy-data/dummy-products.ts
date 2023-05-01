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
        image: 'https://www.shutterstock.com/image-illustration/3d-illustration-zamioculcas-black-pot-600w-1933878641.jpg',
        discount: 70
    }
];

export default DUMMY_PRODUCTS;