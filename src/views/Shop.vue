<template>
  <div class="shop">
    <div>
      <ShoppingCart />
      <ProductList />
    </div>
    <!-- <div v-else>
			{{ $t("shop.empty-page") }}
		</div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductList from '../components/ProductList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'

@Component({
  components: {
    ProductList,
    ShoppingCart,
  },
})
export default class Shop extends Vue {}
</script>

<style lang="scss" scoped></style>
