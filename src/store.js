import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notebooks: [
      {
        name: 'Gerber Durazno',
        price: 12.5,
        image: 'https://tuabarrote.com/1355-large_default/gerber-2-113gr-durazno.jpg',
        stars: 5,
        totalReviews: 230,
        modelData: 'Baby Food',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Pañales Pampers',
        price: 219,
        image: 'https://super.walmart.com.mx/images/product-images/img_large/00003700074960L.jpg',
        stars: 3.4,
        totalReviews: 20,
        modelData: 'Diapers',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Crema corporal Baby Dove',
        price: 60,
        image: 'https://images-na.ssl-images-amazon.com/images/I/814pxaR%2BPsL._SL1500_.jpg',
        stars: 1,
        totalReviews: 1,
        modelData: 'Lotion',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Ricitos de oro shampoo',
        price: 51,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7N42FcJYuGtgEg0r4-3HeeaKTYmdfg48RBoSECQlRUJ57kCbE0SYdWtjlgY8nufZVrvVH9SYE&usqp=CAc',
        stars: 4.4,
        totalReviews: 340,
        modelData: 'Baby wash',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Bio Baby Toallita Húmeda',
        price: 35,
        image: 'https://ecotiendanatural.cl/2438-thickbox_default/toallitas-humedas-bio-baby-pack.jpg',
        stars: 3,
        totalReviews: 30,
        modelData: 'Wipes',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Cerveza Oscura Bohemia',
        price: 111,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSApapCNXxE58U_6ZbFkVod7PA-WBeczrcmSBt4A6B1ortooS3QY_ChL79WqGDJY9VtxYZoiTvTYg&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Beer',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Vino tinto La Cetto',
        price: 283,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfMx9uxd3U1fhVqEXa2NS7u9AYn0xqj3wBGGPo8rfGr_2IUmlLnhByODNwouvvrJ-deV8_aPtI1g&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Wine',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Gatorade',
        price: 15,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0Sue1HtV48yTBouKxWhch8oHp_earyc66JaiNMTAFygT_0IEI0mSz0T_wtb-ZuBU_2Z7ToMe7E_U&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Sports Drink',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Agua mineral Peña Fiel',
        price: 38,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHj9NgBZ0oVNf4nt8fbTRyli_vi1FAARfgEuNURh6fo6kb2IjbdLs8X3f6LmLX8kdHANed6qhf_Q&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Club Soda',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Chips Fuego',
        price: 16,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS5WmBzKRfK-iKN6tpoirJlGqg7W8ruW-etMiA5GLaJZIWFGRhqPTDSs0mxbspEGtiF9ER8c6Hicw&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Chips',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Palomitas para microondas ACT II',
        price: 27,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR82gQVltXl91x5Xfcla4QF7VH7r9rjnNGspdUBo0waQFN8Bo6Tm-UM5poV927HhlmiE1zN984OHQ&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Popcorn',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Avena Quaker',
        price: 27,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNIdCiJSUgP7YTsE5xLjd9dNcJLID25DaiAevyr-cA3zSPbfHqUuVx88TGgTPOSewNbNXa3skiEqY&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Oatmeal',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Aspirina',
        price: 30,
        image: 'https://super.walmart.com.mx/images/product-images/img_large/00750100849196L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Medicines',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Frijoles Bayos La Costeña',
        price: 13,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKCZKNyvYokeCPuUZUG-VDMbGcaJ9ydKsVZxY-Hh9hRLIJfHva-84BrahpdsvVY7CDyBH9hZ9n6vM&usqp=CAc',
        stars: 2,
        totalReviews: 248,
        modelData: 'Canned Foods',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Cigarros Marlboro',
        price: 64,
        image: 'https://cdn.shopify.com/s/files/1/1296/8317/products/Marlboro-Rojos_grande.jpg?v=1466921232',
        stars: 2,
        totalReviews: 248,
        modelData: 'Cigarettes',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Queso Oaxaca 1kg',
        price: 200,
        image: 'https://www.superama.com.mx/Content/images/products/img_medium/0020517600000M.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Cheese',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Detergente líquido MAS color',
        price: 65,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750119941332L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Cleaning Products',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Canela Molida Cazares',
        price: 5.5,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750302046906L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Condiments',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Verduras congeladas La Huerta',
        price: 23.5,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104790299L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Frozen Foods',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Utensilios de cocina Mainstays 8 pzas',
        price: 89,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00001634638083L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Kitchen Items',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Carne de res SuKarne',
        price: 84,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750129350101L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Meat',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Tijeras Barrilito',
        price: 39,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750121497451L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Meat',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Pañuelos desechables Kleenex',
        price: 21,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750194348988L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Personal Care',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Premios para mascota Barkeys',
        price: 35,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00008013641823L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Personal Care',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Filete de Pescado Sierra Madre',
        price: 21,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00069402112300L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Sea Food',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        name: 'Jengibre Terana molido',
        price: 35.5,
        image: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750108810251L.jpg',
        stars: 2,
        totalReviews: 248,
        modelData: 'Spices',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],

    smartphones: [
      // {
      //   name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
      //   price: 1199,
      //   image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
      //   stars: 0,
      //   totalReviews: 0,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
      // {
      //   name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
      //   price: 929,
      //   image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
      //   stars: 1.5,
      //   totalReviews: 11,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
      // {
      //   name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
      //   price: 3949,
      //   image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
      //   stars: 1,
      //   totalReviews: 2,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
      // {
      //   name: 'Smartphone Samsung Galaxy S7 Edge',
      //   price: 1943,
      //   image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
      //   stars: 5,
      //   totalReviews: 310,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
      // {
      //   name: 'Smartphone Motorola Moto G6 Plus',
      //   price: 1699,
      //   image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
      //   stars: 2.9,
      //   totalReviews: 42,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
      // {
      //   name: 'Smartphone Motorola Moto Z3 Play',
      //   price: 2999,
      //   image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
      //   stars: 0.5,
      //   totalReviews: 1,
      //   details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      // },
    ],

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getNotebooks: state => state.notebooks,
    // getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
