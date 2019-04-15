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
                label="Instagram url"
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
import instagramUtil from '@/util/instagramUtil.js';

library.add(faInstagram);

export default {
    props: [
        'editor',
        'editorRef',
        'insert',
    ],
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            isShow: false,
            url: '',
            instagramHtml: '',
        }
    },
    methods: {
        init() {
            this.isShow = !this.isShow
            this.url = '';
        },
        getIframe() {
            instagramUtil(this.url).then((data) => {
                this.instagramHtml = data;
                this.addIframe(data)
            })
        },
        addIframe(html) {
            // const handlerVm = this
            this.editorRef.focus()
            this.editor.selectElement(this.insert.focusLine)
            html.replace('max-width: 900px;', 'max-width: 658px;')
            this.editor.pasteHTML(
                '<div class="instagram--content" style="text-align: center;" contenteditable="false"><div style="display: inline-block; text-align: left; width: 900px;">' + html + '</div></div>',
                { cleanAttrs: [], cleanTags: [], unwrapTags: []})
            const script = document.createElement("script");
            script.src = "https://platform.instagram.com/en_US/embeds.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }
}
</script>
