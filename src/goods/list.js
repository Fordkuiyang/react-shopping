

const requireContext = require.context("../assets", true, /\.(png|jpg|gif)$/);
const images = requireContext.keys().map(requireContext);

export const products = [{
    id: '1',
    name: '男童鞋',
    type: 'perfume',
    price: 9000,
    reserve: 6,
    info: {
        img: './' + images.find(img => img.includes('1_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '2',
    name: '男士挎包',
    type: 'perfume',
    price: 14000,
    reserve: 10,
    info: {
        img: './' + images.find(img => img.includes('2_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
}, {
    id: '3',
    name: '女童鞋',
    type: 'perfume',
    price: 999,
    reserve: 3,
    info: {
        img: './' + images.find(img => img.includes('3_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
}, {
    id: '4',
    name: '男童鞋',
    type: 'perfume',
    price: 1999,
    reserve: 12,
    info: {
        img: './' + images.find(img => img.includes('4_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '5',
    name: '男士鞋',
    type: 'perfume',
    price: 1500,
    reserve: 2,
    info: {
        img: './' + images.find(img => img.includes('5_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '6',
    name: '男士背包',
    type: 'shoe',
    price: 15000,
    reserve: 20,
    info: {
        img: './' + images.find(img => img.includes('6_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '7',
    name: '男童鞋',
    type: 'shoe',
    price: 4499,
    reserve: 13,
    info: {
        img: './' + images.find(img => img.includes('7_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '8',
    name: '男童鞋',
    type: 'shoe',
    price: 1499,
    reserve: 8,
    info: {
        img: './' + images.find(img => img.includes('8_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '9',
    name: '时尚潮流包',
    type: 'shoe',
    price: 799,
    reserve: 40,
    info: {
        img: './' + images.find(img => img.includes('9_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '10',
    name: '金耳环',
    type: 'shoe',
    price: 29999,
    reserve: 4,
    info: {
        img: './' + images.find(img => img.includes('10_600x600')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '11',
    name: '男士手表',
    type: 'phone',
    price: 35999,
    reserve: 2,
    info: {
        img: './' + images.find(img => img.includes('11_600x600')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '12',
    name: '女士手表',
    type: 'phone',
    price: 26999,
    reserve: 8,
    info: {
        img: './' + images.find(img => img.includes('12_600x600')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '13',
    name: '女士银饰',
    type: 'phone',
    price: 19999,
    reserve: 7,
    info: {
        img: './' + images.find(img => img.includes('13_600x600')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '14',
    name: '男童鞋',
    type: 'phone',
    price: 8888,
    reserve: 18,
    info: {
        img: './' + images.find(img => img.includes('14_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},
{
    id: '15',
    name: '男士鞋',
    type: 'phone',
    price: 2999,
    reserve: 24,
    info: {
        img: './' + images.find(img => img.includes('15_470X470')),
        title: '',
        count: '',
        enshrinecount,
    }
},]