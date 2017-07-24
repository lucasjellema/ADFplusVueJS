/* based on https://tutorials.kode-blog.com/vue-js-components */
var menus = [{
                title:'General',
                sub_menus: [
                    {
                        name:'Dashboard',
                        active:true,
                    },
                    {
                        name:'Customers',
                        active:false,
                    },
                ],
            },
            {
                title:'Administration',
                sub_menus: [
                    {
                        name:'Users',
                        active:false,
                    }
                ],
            },
            {
                title:'Transactions',
                sub_menus: [
                    {
                        name:'Payments',
                        active:false,
                    },
                    {
                        name:'Transfers',
                        active:false,
                    },
                    {
                        name:'Balance',
                        active:false,
                    },
                ],
            },
        ];

var app_menu_list_template = 
`<div>
    <app-menu :title="menu.title" :sub_menus="menu.sub_menus" v-for="menu in menus">
    </app-menu>
</div>`;

var app_menu_template  = 
`<div>
    <p class="menu-label">
        {{title}}
    </p>
    <ul class="menu-list">
        <li v-for="menu in sub_menus"><a :class="isActive(menu)" >{{menu.name}}</a></li>
    </ul>
</div>`;

Vue.component('app-menu-list',{
    template: app_menu_list_template,
    data(){
        return {
            menus
        };
    }
});

Vue.component('app-menu',{
    props: ['title','sub_menus'],
    template:app_menu_template,
    methods:{
        isActive: function (menu) {
            return menu.active ? 'is-active' : '';
        }
    }
});

var updates = [
            {
                name:'John Doe',
                handle:'johndoe',
                status:'Away on holiday',
                age:'31m',
                avatar:'http://lorempixel.com/64/64/people/',
                replies: [
                    {
                        name:'Mary Jane',
                        handle:'mary-j',
                        status:'Bring me a souvenir bun',
                        age:'10m',
                        avatar:'http://lorempixel.com/64/64/sports/'
                    },
                ],
            },
            {
                name:'Mary Jane',
                handle:'mary-j',
                status:'Rocking Vue.JS Tuts :)',
                age:'10s',
                avatar:'http://lorempixel.com/64/64/sports/',
                replies: [
                ],
            },
            {
                name:'Jack Smith',
                handle:'jsmith',
                status:'Cooking dinner for the family',
                age:'2 days',
                avatar:'http://lorempixel.com/64/64/food/'
            },
            {
                name:'Alan Shore',
                handle:'mrshore',
                status:'Oh yeah! black sails.',
                age:'13m',
                avatar:'http://lorempixel.com/64/64/nature/'
            },
        ];

var updates_list_template = 
`<div>
    <update :avatar="update.avatar" :replies="update.replies" v-for="update in updates">
        <template slot="name">{{update.name}}</template>
        <template slot="handle">{{update.handle}}</template>
        <template slot="status">{{update.status}}</template>
        <template slot="age">{{update.age}}</template>
    </update>
</div>`;

var update_template = 
`<div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img :src='avatar' alt="Image">
            </figure>
        </div>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong><slot name="name"></strong> <small>@<slot name="handle"></small> <small><slot name="age"></small>
                    <br>
                    <slot name="status">
                </p>
            </div>
            <nav class="level">
                <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                </div>
            </nav>
            <status-replies :replies="replies"></status-replies>
        </div>
    </article>
</div>`;

var status_reply_template = 
`<div>
<div class="box" v-for='reply in replies'>
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                <img :src="reply.avatar" alt="Image">
            </figure>
        </div>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>{{reply.name}}</strong> <small>@{{reply.handle}}</small> <small>{{reply.age}}</small>
                    <br>
                    {{reply.status}}
                </p>
            </div>
        </div>
    </article>
</div>
</div>`;

Vue.component('updates-list',{
    template: updates_list_template,
    data(){
        return {
            updates
        };
    }
});

Vue.component('update',{
    props: ['avatar','replies'],
    template: update_template,
});

Vue.component('status-replies',{
    props: ['replies'],
    template: status_reply_template,
});

Vue.component('post-reply',{
    template:`
    <div class="modal is-active" id="modal-ter">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Reply to  status</p>
                    <button @click="$emit('close')" class="delete"></button>
                </header>
                <section class="modal-card-body">
                    <p class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </p>
                </section>
                <footer class="modal-card-foot">
                    <a class="button is-success">Post Reply</a>
                </footer>
            </div>
        </div>
    `
});

function initVue() {
     console.log("Initialize Vue in VueContent.js");
     new Vue({
      el: '#app',
      data: {
        greeting: 'Welcome to your hybrid ADF and Vue.js app!',
        docsURL: 'http://vuejs.org/guide/',
        message: 'Hello Vue!',
        value:'Welcome to the tutorial <small>which is all about Vue.js</small>',
        viewed:true,
        updates:updates,
        showReplyModal: false
        },
      methods: {
        humanizeURL: function (url) {
          return url
            .replace(/^https?:\/\//, '')
            .replace(/\/$/, '')
        }
      }
      }) /* new Vue */
}