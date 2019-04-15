<template>
    <v-tooltip v-model="isShow" bottom>
        <template v-slot:activator="{ on }">
            <span class="btn-toggle" @click="init">
                <font-awesome-icon :icon="['fab', 'twitter']"/>
            </span>
        </template>
        <span @mouseleave="init">
            <v-layout row>
                <v-text-field
                color="white"
                light
                label="Tweet embed code. (Not URL)"
                v-model="url"
                ></v-text-field>
                <v-btn icon style="margin-top: 15px;" color="green" @click="getIframe">
                    <v-icon>fas fa-check-circle</v-icon>
                </v-btn>
            </v-layout>
        </span>
    </v-tooltip>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { setTimeout } from 'timers';

library.add(faTwitter);

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

export default {
    props: [
        'editor',
        'editorRef',
        'insert',
        'hidecaption',
    ],
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            isShow: false,
            url: '',
            instagramHtml: '',
            embedElm: null,
        }
    },
    methods: {
        init() {
            this.isShow = !this.isShow
            this.url = '';
        },
        getIframe() {
            this.addIframe(this.url);
            // twitterUtil(this.url, hidecaption).then((data) => {
            //     this.instagramHtml = data;
            //     this.addIframe(this.)
            // })
        },
        addIframe(html) {
            // const handlerVm = this
            this.editorRef.focus()
            this.editor.selectElement(this.insert.focusLine)
            this.editor.pasteHTML(
                '<div class="twitter--container"><div class="twitter--content">' + html + '</div></div><br>',
                { cleanAttrs: [], cleanTags: [], unwrapTags: []})

            this.embedElm = this.editor.getSelectedParentElement()
            
            if (window.twttr === undefined) {
                const script = document.createElement("script");
                script.src = "https://platform.twitter.com/widgets.js";
                script.async = true;
                this.embedElm.appendChild(script);
            } else {
                window.twttr.widgets.load()
            }
            const focused = this.editor.getSelectedParentElement()
            const currentPos = focused.getBoundingClientRect()
            window.scrollTo(0, currentPos.top - currentPos.x);
            this.$emit('onChange')
            
            sleep(1000).then(() => {
                this.editor.pasteHTML('<span></span>', { cleanAttrs: [], cleanTags: [], unwrapTags: []})
                sleep(1000).then(() => {
                    this.insert.isToggle = false
                    this.insert.isShow = false
                })
            })
        },
    }
}
</script>
