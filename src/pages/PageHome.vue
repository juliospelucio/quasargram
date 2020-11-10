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
            <div class="text-caption text-grey">{{ post.date }}</div>
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
            "https://lh3.googleusercontent.com/proxy/W4FJAjaoWP0Ov1jVrmed0gLnz3RzWQSXClNgmP5IcZck_dUo_Gsb9DS2OyOh4lKNa2n2V0w8tASZiWSf4Fdvue4EyqobHSvtmF9k2Ie7grSTNa3sHio7AUCMQbenF79Ocj4XGgYj-ByTj2gS8J8U_5-Neo8YwfE",
        },
        {
          id: 2,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/W4FJAjaoWP0Ov1jVrmed0gLnz3RzWQSXClNgmP5IcZck_dUo_Gsb9DS2OyOh4lKNa2n2V0w8tASZiWSf4Fdvue4EyqobHSvtmF9k2Ie7grSTNa3sHio7AUCMQbenF79Ocj4XGgYj-ByTj2gS8J8U_5-Neo8YwfE",
        },
        {
          id: 3,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/W4FJAjaoWP0Ov1jVrmed0gLnz3RzWQSXClNgmP5IcZck_dUo_Gsb9DS2OyOh4lKNa2n2V0w8tASZiWSf4Fdvue4EyqobHSvtmF9k2Ie7grSTNa3sHio7AUCMQbenF79Ocj4XGgYj-ByTj2gS8J8U_5-Neo8YwfE",
        },
        {
          id: 4,
          caption: "Museu Memorial",
          date: 1605036007702,
          location: "Minas Gerais, Brasil",
          imageUrl:
            "https://lh3.googleusercontent.com/proxy/W4FJAjaoWP0Ov1jVrmed0gLnz3RzWQSXClNgmP5IcZck_dUo_Gsb9DS2OyOh4lKNa2n2V0w8tASZiWSf4Fdvue4EyqobHSvtmF9k2Ie7grSTNa3sHio7AUCMQbenF79Ocj4XGgYj-ByTj2gS8J8U_5-Neo8YwfE",
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