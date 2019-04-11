Vue.component('cuisine-card', {
  template: '#cuisine-card',
  // data from parent (application) that this component depends on
  // after being defined here, they have to be passed in html properties
  props: {
    cuisineType: Object,
  },
  // component only methods
  methods: {
    addPoint: function(cuisineType) {
      console.log("point added: " + cuisineType.name)
      cuisineType.votes++;
    }
  }
})

Vue.component('modal', {
  template: '#modal-template',
  props: {
    onAddNewType: Function,
  },
  // component internal data, visible only within this component
  data: function() {
    return {
      newType: {
        name: '',
        desc: '',
        votes: 0,
        imageUrl: ''
      }
    }
  },
  methods: {}
})

new Vue({
  el: '#vue-app',
  data: {
    types: [
      {name: 'italian', desc: 'spaghetti', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg'},
      {name: 'spanish', desc: 'churros', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1512058466835-da4d54fb0ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80.jpg'},
      {name: 'israeli', desc: 'falafel', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1547058881-aa0edd92aab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg'},
      {name: 'mexican', desc: 'guacamole', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1548228586-171fb0887ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=970&q=80'},
      {name: 'thai', desc: 'red curry', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg'},
      {name: 'chinese', desc: 'dumplings', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1550303659-a777c03a27bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg'},
      {name: 'polish', desc: 'pierogi', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1503595787607-3bc1626adf4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg'},    
      {name: 'japanese', desc: 'sushi rolls', votes: 0, imageUrl: 'https://images.unsplash.com/photo-1540648639573-8c848de23f0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1124&q=80.jpg'}   
    ],
    query: '',
    showModal: false
  },
  computed: {
    sortedTypes: function() {
      return this.types.concat().sort((type1, type2) => {
        if(type1.votes < type2.votes) { return 1; }
        if(type1.votes > type2.votes) { return -1; }
        return 0
      });
    },
    filteredList: function() {
      return this.types.filter(type => {
        return type.name.toLowerCase().includes(this.query.toLowerCase()) ||
               type.desc.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  methods: {
    addNewType: function(newType) {
      this.types.push(newType);
      this.showModal = false;
    },
    closeModal: function() {
      this.showModal = false;
    }
  }
})

