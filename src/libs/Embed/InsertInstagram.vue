<template>
    <v-tooltip v-model="isShow" bottom>
        <template v-slot:activator="{ on }">
            <span class="btn-toggle" @click="init">
                <font-awesome-icon :icon="['fab', 'instagram']"/>
            </span>
        </template>
        <span @mouseleave="init">
            <v-layout row>
                <v-text-field
                color="white"
                light
                label="Instagram url or Embed Code"
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
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import instagramUtil from '../../util/instagramUtil.js';
import { setTimeout } from 'timers';
import validUrl from 'valid-url';

library.add(faInstagram);

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
            let hidecaption
            if (this.hidecaption) {
                hidecaption = true
            } else {
                hidecaption = false
            }
            if (validUrl.isUri(this.url)) {
                instagramUtil(this.url, hidecaption).then((data) => {
                    this.instagramHtml = data;
                    this.addIframe(data)
                })
            } else {
                this.addIframe(this.url)
            }
        },
        addIframe(html) {
            // const handlerVm = this
            this.editorRef.focus()
            this.editor.selectElement(this.insert.focusLine)
            this.editor.pasteHTML(
                '<div class="instagram--container"><div class="instagram--content">' + html + '</div></div><br>',
                { cleanAttrs: [], cleanTags: [], unwrapTags: []})

            this.embedElm = this.editor.getSelectedParentElement()

            if (window.instgrm === undefined) {
                const script = document.createElement("script");
                script.src = "https://platform.instagram.com/en_US/embeds.js";
                script.async = true;
                this.embedElm.appendChild(script);
            } else {
                window.instgrm.Embeds.process()
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
