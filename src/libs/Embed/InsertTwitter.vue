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
                label="Tweet url or embed code."
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
import validUrl from 'valid-url';

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
            const randomId = Math.random().toString()
            if (validUrl.isUri(this.url)) {
                this.addIframe(this.getIframeCode(this.url, randomId))
            } else {
                this.addIframe(this.url, randomId);
            }
        },
        addIframe(html, id) {
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
                window.twttr.widgets.load(
                    document.getElementById(id)
                )
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
        getIframeCode(url, id) {
            return `<span id="${id}"><blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href=“${url}?ref_src=twsrc%5Etfw"></a></blockquote></span>
            <blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr"><a href=“${url}?ref_src=twsrc%5Etfw"></a></blockquote>`
        }
    }
}
</script>
