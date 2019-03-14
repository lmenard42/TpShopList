var ComponentList = {
    props: ['article'],
    template: '<li class="list-group-item"> {{ article.text }} </li>'
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
        id: 0
    },
    methods: {
        addArticle: function(){
            this.list.push({id: this.id ,text: this.article})
            this.emptyList = false
            ++this.id
        }
    }
})