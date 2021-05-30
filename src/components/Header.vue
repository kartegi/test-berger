<template>
    <div class="header">
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"><v-icon>menu</v-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Берген.ИТ</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    <div class='profile-info'>
      <v-avatar :size="70">
        <img
            src="../img/profile-img.jpeg"
            alt="John"
        >
      </v-avatar>
        <p>Эгиев Аслан</p>
        <a href = "mailto: kocmoc006@mail.ru">kocmoc006@mail.ru</a>
    </div>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to='/'>
            <v-list-item>
                <v-list-item-title>Галерея</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to='/about'>
            <v-list-item>
                <v-list-item-title>Обо мне</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  })
}
</script>

<style scoped>
    .profile-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0.5rem;
    }
</style>
