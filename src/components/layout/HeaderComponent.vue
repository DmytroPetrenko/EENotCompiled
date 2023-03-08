<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheDashboard from '../TheDashboard.vue'

@Component({
  components: { TheDashboard },
})
export default class HeaderComponent extends Vue {
  activeIndex: string = '1'
  menuIsActive: boolean = false
  windowWidth: number = 0
  windowWidthFlag: boolean = true

  lang: string = 'ru'

  menuNav() {
    this.menuIsActive = !this.menuIsActive
  }

  switchLang() {
    this.$i18n.locale = this.lang
  }

  getWindowWidth() {
    this.windowWidth = document.documentElement.clientWidth
    if (this.windowWidth > 960) {
      this.windowWidthFlag = true
    } else {
      this.windowWidthFlag = false
    }
  }

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)

      //Init
      this.getWindowWidth()
    })
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<template>
  <el-header height="auto">
    <el-row type="flex" justify="space-between">
      <el-col class="header-logo" :span="4"
        ><a href="/"><img src="@/assets/img/logo.png" alt="logo" srcset=""/></a
      ></el-col>
      <el-col class="header-logo" :span="8">
        <the-dashboard />
      </el-col>
      <el-col class="header-menu" :span="12">
        <el-button plain size="mini" class="mobile-nav" @click="menuNav">
          <i v-if="menuIsActive" class="el-icon-close"></i>
          <i v-else class="el-icon-menu"></i>
        </el-button>
        <el-menu
          id="horizontalMenu"
          :router="true"
          v-if="windowWidthFlag"
          mode="horizontal"
          :default-active="activeIndex"
          v-bind:class="{ '': !menuIsActive, isOpen: menuIsActive }"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/" :route="{ name: 'Home' }">
            {{ $t('menu.home') }}
          </el-menu-item>
          <el-menu-item index="/batteries" :route="{ name: 'Batteries' }">
            {{ $t('menu.batteries') }}
          </el-menu-item>
          <el-menu-item index="/service" :route="{ name: 'Service' }">
            {{ $t('menu.service') }}
          </el-menu-item>
          <el-menu-item index="/contact" :route="{ name: 'Contact' }">
            {{ $t('menu.contact') }}
          </el-menu-item>
          <el-menu-item index="/shop" :route="{ name: 'Shop' }">
            {{ $t('menu.shop') }}
          </el-menu-item>
        </el-menu>
        <el-menu
          v-else
          id="verticalMenu"
          mode="vertical"
          :default-active="activeIndex"
          v-bind:class="{ '': !menuIsActive, isOpen: menuIsActive }"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1"
            ><router-link @click.native="menuNav" to="/">{{
              $t('menu.home')
            }}</router-link></el-menu-item
          >
          <el-menu-item index="2"
            ><router-link @click.native="menuNav" to="/batteries">{{
              $t('menu.batteries')
            }}</router-link></el-menu-item
          >
          <el-menu-item index="3"
            ><router-link @click.native="menuNav" to="/service">{{
              $t('menu.service')
            }}</router-link></el-menu-item
          >
          <el-menu-item index="4"
            ><router-link @click.native="menuNav" to="/contact">{{
              $t('menu.contact')
            }}</router-link></el-menu-item
          >
          <el-menu-item index="5"
            ><router-link @click.native="menuNav" to="/shop">{{
              $t('menu.shop')
            }}</router-link></el-menu-item
          >
        </el-menu>
        <el-radio-group :change="switchLang()" v-model="lang" size="mini">
          <el-radio-button label="ru">Ru</el-radio-button>
          <el-radio-button label="ua">Ua</el-radio-button>
          <el-radio-button label="en">En</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
  </el-header>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  position: relative;
  background-color: #545c64;
}
.header-menu {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.el-menu--horizontal.el-menu {
  border: none;

  .el-menu-item {
    transition: none;
    background: transparent;
    a {
      display: block;
      height: 100%;
      font-size: 16px;
      text-decoration: none;
    }
    &.is-active {
      border: none;
    }
  }
}
#verticalMenu {
  display: none;
  position: fixed;
  top: 60px;
  width: 100%;
  height: 100%;
  text-align: center;
  a {
    color: white;
    text-decoration: none;
  }
  &.isOpen {
    display: block;
  }
  .el-menu-item.is-active > a {
    color: rgb(255, 208, 75);
  }
}

.mobile-nav {
  display: none;
  margin: 15px 10px;
  font-size: 14px;
  height: 29px;
  padding: 0 5px;
  @media (max-width: 960px) {
    display: block;
  }
}
.header-logo {
  display: flex;
  img {
    height: 49px;
    margin: 5px 10px;
  }
}
.el-radio-group {
  margin: 15px 10px;
}
.el-menu-item {
  a {
    display: block;
  }
}
</style>
