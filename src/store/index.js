/* eslint-disable no-param-reassign */
import {createStore} from 'vuex';
import {nanoid} from 'nanoid';

export default createStore({
  state: {
    cart: [],
    products: [
      {
        id: 1,
        icon: 'apple',
        title: 'Iphone 12',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 5,
      },
      {
        id: 2,
        icon: 'microsoft-xbox',
        title: 'Xbox One',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 99,
      },
      {
        id: 3,
        icon: 'sony-playstation',
        title: 'PS5',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 99,
      },
      {
        id: 4,
        icon: 'nintendo-switch',
        title: 'Nintendo Switch',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 99,
      },
      {
        id: 5,
        icon: 'steam',
        title: 'Steam Giftcard',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 99,
      },
      {
        id: 6,
        icon: 'apple',
        title: 'Macbook Pro',
        info: `Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Necessitatibus corrupti qui quaerat
         commodi nam nesciunt hic sunt,`,
        stock: 99,
      },
    ],
    // STATE DE PRACTICA FORMULARIOS //////////////////////////
    formData: {
      id: '',
      name: '',
      date: '',
      age: '',
      genre: '',
      city: '',
      profession: '',
    },
    formRegister: [],
    action: 'create',
  },
  getters: {
    cartLength(state) {
      return state.cart.length;
    },
    cartItemsCounter(state) {
      let counter = 0;
      state.cart.forEach((item) => counter += item.amount);
      return counter;
    },
    // GETTERS DE PRACTICA FORMULARIOS //////////////////////////
    formRegisterObject(state) {
      const object = {};
      state.formRegister.forEach((item)=>{
        object[item.id] = item;
      });
      console.log(object);
      return object;
    },
  },
  mutations: {
    addNew(state, product) {
      state.cart.push(product); // añade el producto al carrito
    },
    removeItem(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    addStock(state, product) {
      state.products.forEach((item) => {
        if (item.id === product.id) {
          item.stock += 1;
        }
      });
    },
    removeStock(state, product) {
      state.products.forEach((item) => {
        if (item.id === product.id) {
          item.stock -= 1;
        }
      });
    },
    // MUTATIONS DE PRACTICA FORMULARIOS //////////////////////////
    updateName(state, payload) {
      state.formData.name = payload;
    },
    updateDate(state, payload) {
      state.formData.date = payload;
    },
    updateAge(state, payload) {
      state.formData.age = payload;
    },
    updateGenre(state, payload) {
      state.formData.genre = payload;
    },
    updateCity(state, payload) {
      state.formData.city = payload;
    },
    updateProfession(state, payload) {
      state.formData.profession = payload;
    },
    clearData(state) {
      state.formData = {
        id: '',
        name: '',
        date: '',
        age: '',
        genre: '',
        city: '',
        profession: '',
      };
      state.action = 'create';
    },
    editRegister(state, id) {
      state.action = 'edit';
      console.log(state.formRegister);
      state.formRegister.map((el) => {
        (el.id == id) ? state.formData = el : null;
      });
    },
    deleteRegister(state, id) {
      state.formRegister.map((el) => {
        if (el.id == id) {
          const target = state.formRegister.indexOf(el);
          state.formRegister.splice(target, 1);
        }
      });
    },
    loadLocalData(state, payload) {
      state.formRegister = payload;
    },
  },
  actions: {
    addNew({commit}, product) {
      commit('addNew', product);
    },
    removeItem({commit}, id) {
      commit('removeItem', id);
    },
    addStock({commit}, product) {
      commit('addStock', product);
    },
    removeStock({commit}, product) {
      commit('removeStock', product);
    },
    // ACTIONS DE PRACTICA FORMULARIOS //////////////////////////
    updateName({commit}, value) {
      commit('updateName', value);
    },
    updateDate({commit}, value) {
      commit('updateDate', value);
    },
    updateAge({commit}, value) {
      commit('updateAge', value);
    },
    updateGenre({commit}, value) {
      commit('updateGenre', value);
    },
    updateCity({commit}, value) {
      commit('updateCity', value);
    },
    updateProfession({commit}, value) {
      commit('updateProfession', value);
    },
    async clearData(context) { // Se ejecuta al enviar el formulario //
      const registro = context.state.formData;
      context.state.formData.id ||= nanoid();
      if (context.state.action === 'create') {
        // si es un registro nuevo lo añade a firebase y al store
        context.state.formRegister.push(registro);
        // localStorage.setItem('tareas', JSON.stringify(state.formRegister));
        try {
          await fetch(`https://vue3-guide-default-rtdb.firebaseio.com/registros/${registro.id}.json`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(registro),
              });
        } catch (error) {
          console.log(error);
        }
      }
      if (context.state.action === 'edit') {
        // si es un registro editado actualiza el store y firebase
        try {
          await fetch(`https://vue3-guide-default-rtdb.firebaseio.com/registros.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.getters.formRegisterObject),
          });
        } catch (error) {
          console.log(error);
        }
      }
      context.commit('clearData');
    },
    editRegister({commit}, id) {
      commit('editRegister', id);
    },
    async deleteRegister(context, id) {
      context.commit('deleteRegister', id);
      try {
        await fetch(`https://vue3-guide-default-rtdb.firebaseio.com/registros.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(context.getters.formRegisterObject),
        });
      } catch (error) {
        console.log(error);
      }
    },
    async loadLocalData({commit}) {
      // if (localStorage.getItem('tareas')) {
      //   // const tareas = JSON.parse(localStorage.getItem('tareas'));
      // } else {
      //   // localStorage.setItem('tareas', JSON.stringify([]));
      // }
      try {
        const res = await fetch(`https://vue3-guide-default-rtdb.firebaseio.com/registros.json`); // GET
        const registros = Object.values(await res.json());
        console.log(registros);
        commit('loadLocalData', registros);
      } catch (error) {
        console.log(error);
      }
    },

  },
  modules: {
  },
});
