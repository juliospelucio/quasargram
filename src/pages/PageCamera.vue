<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <img
        class="full-width"
        src="https://lh3.googleusercontent.com/proxy/W4FJAjaoWP0Ov1jVrmed0gLnz3RzWQSXClNgmP5IcZck_dUo_Gsb9DS2OyOh4lKNa2n2V0w8tASZiWSf4Fdvue4EyqobHSvtmF9k2Ie7grSTNa3sHio7AUCMQbenF79Ocj4XGgYj-ByTj2gS8J8U_5-Neo8YwfE"
        alt=""
      />
    </div>
    <div class="text-center q-pa-md">
      <q-btn color="grey-10" icon="eva-camera" size="lg" round />
    </div>

    <div class="row justify-center q-ma-md">
      <q-input v-model="post.caption" class="col col-sm-6" label="Caption" dense />
    </div>

    <div class="row justify-center q-ma-md">
      <q-input v-model="post.location" class="col col-sm-6" label="Location" dense>
        <template v-slot:append>
          <q-btn icon="eva-navigation-2-outline" dense flat round/>
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-ma-md q-mt-lg">
        <q-btn color="primary" label="Post Image" rounded unelevated />
    </div>
  </q-page>
</template>

<script>
import {uid} from 'quasar'
export default {
  name: "PageCamera",
  data() {
      return {
          post: {
              id: uid(),
              caption: '',
              location: '',
              photo: null,
              date: Date.now()
          }
      }
  }
};
</script>
<style lang="sass">
.camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>