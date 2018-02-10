import fullStocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, fullStocks){
        state.stocks = fullStocks
    },
    'RND_STOCKS'(state){

    }
};

const actions = {
    initStocksAction: (context) => {
        context.commit('SET_STOCKS', fullStocks);
    },
    buyStockAction: (context, order) => {
        console.log('Buy order:', order);
        context.commit('BUY_STOCK', order); //mutation in portfolio module
    },
    randomizeStocks: (context) => {
        context.commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default{
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}