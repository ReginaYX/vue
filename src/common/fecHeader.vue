<template>
    <div id="fecHeader">
        <div id="top_nav">
            <input type="hidden" class="currentBaseUrl" value="http://appfront.fecshoptest.com/cn">
            <input type="hidden" class="logoutUrl" value="http://appfront.fecshoptest.com/cn/customer/account/logout?rt=Ly9hcHBmcm9udC5mZWNzaG9wdGVzdC5jb20vY24v">
            <input type="hidden" class="logoutStr" value="退出">
            <input type="hidden" class="welcome_str" value="欢迎您！">
            <div class="top_nav_inner">
                <div class="top_nav_left">
                    <dl class="top_lang">
                        <dt><span class="current_lang" rel="appfront.fecshoptest.com/cn">中文</span></dt>
                        <dd class="lang_list">
                            <ul>
                                <li class="store_lang" rel="appfront.fecshoptest.com"><a href="javascript:void(0)">Español</a></li>
                                <li class="store_lang" rel="appfront.fecshoptest.com/fr"><a href="javascript:void(0)">Français</a></li>
                                <li class="store_lang" rel="appfront.fecshoptest.com/cn"><a href="javascript:void(0)">中文</a></li>
                                <li class="store_lang" rel="appfront.fecshoptest.com/it"><a href="javascript:void(0)">Italiano</a></li>
                            </ul>
                        </dd>
                    </dl>
                    <!-- 币种选择 -->
                    <dl class="top_currency">
                        <dt><span class="current_currency"><label>$</label>USD</span></dt>
                        <dd class="currency_list">
                            <ul>

                                <li rel="EUR"><label>€</label>EUR</li>
                                <li rel="USD"><label>$</label>USD</li>
                                <li rel="GBP"><label>£</label>GBP</li>
                                <li rel="CNY"><label>￥</label>CNY</li>

                            </ul>
                        </dd>
                    </dl>
                </div>
                <div class="top_nav_right">
                    <div class="login-text t_r">
				<!--<span id="js_isNotLogin">-->
					<!--<router-link to="/login" rel="nofollow" v-if="access">登录账户</router-link>-->
				<!--</span>-->
                    </div>
                    <dl class="top_account t_r">
                        <dt>
                            <a href="http://appfront.fecshoptest.com/cn/customer/account" rel="nofollow" class="mycoount"></a>
                        </dt>
                        <dd style="">
                            <ul>
                                <li><a href="javascript:void(0)" @click="mine">我的账户</a></li>
                                <li><a href="javascript:void(0)" @click="myOrder">我的订单</a></li>
                                <li><a href="javascript:void(0)" @click="myFavorite">我的收藏</a></li>
                                <li><a href="javascript:void(0)" @click="logout">退出账户</a></li>
                            </ul>
                        </dd>
                    </dl>
                    <div class="mywish t_r">
                        <router-link to="/mine/favorite">
                            <span class="mywishbg"></span>
                        </router-link>
                        <span class="mywish-text" id="js_favour_num">{{favoriteCount}}</span>
                    </div>
                    <div class="mycart t_r">
                        <router-link to="/cart">
                            <span class="mycartbg" id="js_topBagWarp"></span>
                        </router-link>
                        <span class="mycart-text" id="js_cart_items">{{cartCount}}</span>
                    </div>
                </div>
            </div><!--end .top_nav_inner-->
        </div>
    </div>
</template>

<script>
export default {
  name: 'fecHeader',
  data () {
    return {
      cartCount: 0,
      access: null,
      favoriteCount: 0
    }
  },
  methods: {
    mine () {
      fetch('/customer/account/index', {
        headers: {
          'access-token': localStorage.access ? localStorage.access : '',
          'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            this.$router.push('/mine/account')
          } else if (data.code == '1100003') {
            this.$router.push('/login')
          } else {
            alert(data.message)
          }
        })
    },
    myOrder () {
      fetch('/customer/order/index', {
        headers: {
          'access-token': localStorage.access ? localStorage.access : '',
          'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            this.$router.push('/mine/order')
          } else if (data.code == '1100003') {
            this.$router.push('/login')
          } else {
            alert(data.message)
          }
        })
    },
    myFavorite () {
      fetch('/customer/productfavorite/index', {
        headers: {
          'access-token': localStorage.access ? localStorage.access : '',
          'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            this.$router.push('/mine/favorite')
          } else if (data.code == '1100003') {
            this.$router.push('/login')
          } else {
            alert(data.message)
          }
        })
    },
    logout () {
      localStorage.access = null
    }

  },
  mounted () {
    fetch('/checkout/cart/index', {
      headers: {
        'access-token': localStorage.access ? localStorage.access : '',
        'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.code == 200) {
          this.cartCount = data.data.cart_info.items_count
          if (data.data.cart_info == false) {
            this.cartCount = 0
          }
        }
      })
    fetch('/customer/productfavorite/index', {
      headers: {
        'access-token': localStorage.access ? localStorage.access : '',
        'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.code == 200) {
          this.favoriteCount = data.data.count
        }
      })
  }
}
</script>

<style scoped>
</style>
