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
        discount: 0
    },
    {
        name: 'Menekşe',
        description: 'Menekşe',
        price: 45,
        image: 'https://www.shutterstock.com/image-illustration/3d-illustration-zamioculcas-black-pot-600w-1933878641.jpg',
        discount: 15
    },
    {
        name: 'Menekşe',
        description: 'Menekşe',
        price: 10.05,
        image: 'https://www.shutterstock.com/image-illustration/3d-illustration-zamioculcas-black-pot-600w-1933878641.jpg',
        discount: 0
    },
    {
        name: 'Domates',
        description: 'Domates',
        price: 12,
        image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2023/01/17/thumbs_b_c_67d55974fa88d00a6eac860a7dc306ce.jpg',
        discount: 15
    },
    {
        name: 'Menekşe',
        description: 'Menekşe',
        price: 10.05,
        image: 'https://www.shutterstock.com/image-illustration/3d-illustration-zamioculcas-black-pot-600w-1933878641.jpg',
        discount: 0
    },
    {
        name: 'Menekşe',
        description: 'Menekşe',
        price: 45,
        image: 'https://www.shutterstock.com/image-illustration/3d-illustration-zamioculcas-black-pot-600w-1933878641.jpg',
        discount: 15
    }
];

export default DUMMY_PRODUCTS;