<template>
<v-row class='row'>
<v-col
v-for='photo in photos'
:key='photo.id'
cols='12'
sm='3'
>
<v-hover v-slot="{ hover }">
<v-card>
<v-img class='img' :src="photo.url" alt="img">
<router-link :to='/img/+photo.id'><v-btn text class="white--text" v-if='hover'>Подробнее</v-btn></router-link>
</v-img>
</v-card>
</v-hover>
</v-col>
</v-row>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      showBtn: false
    }
  },
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.row {
border-top: 1px solid #000;
}

.row:first-child {
margin-top: 1rem;
}

.img {
display: flex;
align-items: flex-end;
}
</style>
