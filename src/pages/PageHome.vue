<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post"
          flat
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">julio_pelucio</q-item-label>
              <q-item-label caption> {{ post.location }} </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.imageUrl" />

          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">{{ post.date | niceDate }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">julio_pelucio</q-item-label>
            <q-item-label caption> Júlio Pelúcio </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
export default {
  name: "HomePage",
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://s2.glbimg.com/pPzzzaEVmTCJKDSfuCwa1FxgtyY=/0x0:620x316/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/S/HKG0nbS9Ab2XBICXCmRw/museu.jpg",
        },
        {
          id: 2,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://s2.glbimg.com/pPzzzaEVmTCJKDSfuCwa1FxgtyY=/0x0:620x316/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/S/HKG0nbS9Ab2XBICXCmRw/museu.jpg",
        },
        {
          id: 3,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://s2.glbimg.com/pPzzzaEVmTCJKDSfuCwa1FxgtyY=/0x0:620x316/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/S/HKG0nbS9Ab2XBICXCmRw/museu.jpg",
        },
        {
          id: 4,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://s2.glbimg.com/pPzzzaEVmTCJKDSfuCwa1FxgtyY=/0x0:620x316/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/S/HKG0nbS9Ab2XBICXCmRw/museu.jpg",
        },
      ],
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
};
</script>
<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>