var ComponentList = {
    props: ['article'],
    template: '<li class="list-group-item"><center> <div class="row">'
     + '<input type="text" v-model="article.id" hidden>'
     + '<input class="ml-2" type="checkbox" v-model="article.checked">'
     + '<input v-model="article.text" type="text" class="ml-2">' 
     + '<input v-if="article.checked" size="5" class="ml-2" type="text" v-model="article.prix">'
     + '<button class="btn btn-danger ml-2">X</button>'
     + '</div></center></li>'
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
        prix: 0
    },
    methods: {
        addArticle: function(){
            this.list.push({id: this.id ,text: this.article, checked: this.checked, prix: this.prix})
            this.emptyList = false
            ++this.id
        }

    }
})