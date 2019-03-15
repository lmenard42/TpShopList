var ComponentList = {
    props: ['list'],
    template: '<ul class="list-group mx-2 mt-3 col-3">'
     + '<li v-for="(item, index) in list" :key="index" class="list-group-item"><center> <div class="row">'
     + '<input type="text" v-model="item.id" hidden>'
     + '<input class="ml-2" type="checkbox" v-model="item.checked">'
     + '<input v-model="item.text" type="text" class="ml-2">' 
     + '<input v-if="item.checked" size="3" class="ml-2" type="text" v-model="item.prix">'
     + '<button class="btn btn-danger ml-2" @click="deleteArticle(index)">X</button>'
     + '</div></center></li></ul>',
     methods:{
        deleteArticle: function(id){
            this.list.splice(id,1)
        }
    }
}

new Vue ({
    el: '#app',
    components: {
        'list' : ComponentList
    },
    data: {
        title: 'Shop List',
        emptyList: true,
        list:[],
        article: '',
        id: 0,
        checked: false,
        prix: 0,
        budget: 0
    },
    watch: {
        list(){
            localStorage.setItem('key', JSON.stringify(this.list))
            console.log(JSON.parse(localStorage.getItem('key')))
        }
    },
    methods: {
        addArticle: function(){
            this.list.push({id: this.id ,text: this.article, checked: this.checked, prix: this.prix})
            this.emptyList = false
            ++this.id
        },

    },
    computed:{
        calcTotal: function (){
            return this.list.reduce((acc, cur) => cur.checked ? acc += Number(cur.prix) : acc, 0)
        },

        alertBudget: function() {
            return this.calcTotal > this.budget
        }
    }
})