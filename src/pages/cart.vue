<template>
    <div>
        <fec-header/>
        <fecTop/>
        <div class="main-container">
            <div class="main container one-column">
                <div class="col-main" v-if="cart_info">

                    <div class="product_page">

                        <div class="cart">
                            <div>

                                <div class="shopping-cart-div">
                                    <div class="shopping-cart-ab">
                                    </div>
                                    <table id="shopping-cart-table" class="data-table cart-table">
                                        <colgroup>
                                            <col width="1">
                                            <col width="1">
                                            <col width="">
                                            <col width="6">
                                            <col width="76">
                                            <col width="76">
                                            <col width="91">
                                            <col width="76">
                                            <col width="106">
                                            <col width="106">
                                            <col width="26">
                                            <col width="1">
                                        </colgroup>
                                        <thead>
                                        <tr class="first last">
                                            <th rowspan="1">
                                                <input type="checkbox" name="cart_select_all" class="cart_select cart_select_all" id="cart_select_all" :checked="selectedAll" @click="all">&nbsp;
                                                <label for="cart_select_all">全选</label>
                                            </th>
                                            <th rowspan="1">&nbsp;</th>
                                            <th rowspan="5"><span class="nobr">产品名称</span></th>
                                            <th class="a-center" colspan="1"><span class="nobr">单价</span></th>
                                            <th rowspan="1" class="a-center">个数</th>
                                            <th class="a-center" colspan="1">总价</th>
                                            <th rowspan="1" class="a-right">&nbsp;</th>
                                        </tr>
                                        </thead>
                                        <tfoot>

                                        </tfoot>
                                        <tbody v-if="productInfo">

                                        <tr class="first last odd" v-for="item in productInfo">

                                            <td>
                                                <input rel="3342" :checked="item.active" type="checkbox" name="cart_select_item" class="cart_select cart_select_item" @click="SelectOne(item)">
                                            </td>


                                            <td>
                                                <a href="http://fecshop.appfront.fancyecommerce.com/cn/stylish-striped-criss-cross-womens-dress" :title="item.name" class="product-image">
                                                    <img :src="item.img_url"  width="75" height="75">
                                                </a>
                                            </td>

                                            <td>
                                                <h2 class="product-name">
                                                    <a href="http://fecshop.appfront.fancyecommerce.com/cn/stylish-striped-criss-cross-womens-dress">{{item.name}}</a>
                                                </h2>
                                                <ul>

                                                    <li v-for="(v,k) in item.custom_option_info">{{k}}: {{v}}</li>
                                                    <!--<li>尺码：M </li>-->

                                                </ul>
                                            </td>


                                            <td class="a-right">
										<span class="cart-price">
											<span class="price">￥ {{item.base_product_price}}</span>
										</span>

                                            </td>


                                            <td class="a-center">
                                                <div style="width:60px;margin:auto">
                                                    <a href="javascript:void(0)" class="cartqtydown changeitemqty" num="1" @click="update(item.item_id,'less_one')">-</a>
                                                    <input name="cart[qty]" size="4" title="Qty" class="input-text qty" maxlength="12" :value="item.qty">
                                                    <a href="javascript:void(0)" class="cartqtyup changeitemqty" num="1" @click="update(item.item_id,'add_one')">+</a>
                                                    <div class="clear"></div>
                                                </div>
                                            </td>


                                            <td class="a-right">
										<span class="cart-price">
											<span class="price">￥ {{item.base_product_row_price}}</span>
										</span>
                                            </td>



                                            <td class="a-right last">
                                                <a style="margin-right: 15px;float: right;" href="javascript:void(0)" title="Remove item" class="btn-remove btn-remove2" @click="update(item.item_id,'remove')">Remove item</a>
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="cart-collaterals">
                                <div class="col2-set">
                                    <div class="col-1">
                                    </div>
                                    <div class="col-2">
                                        <form id="discount-coupon-form">
                                            <div class="discount">
                                                <h2>优惠券</h2>
                                                <div class="discount-form">
                                                    <label for="coupon_code">如果您有优惠券，请在下面填写</label>
                                                    <div class="input-box">
                                                        <input type="hidden" class="couponType" value="2">
                                                        <input style="color:#777;" class="input-text" id="coupon_code" name="coupon_code" value="">
                                                    </div>
                                                    <div class="buttons-cou">
                                                        <a href="javascript:void(0)" class="add_coupon_submit submitbutton"><span><span>添加优惠券</span></span> </a>

                                                    </div>
                                                    <div class="clear"></div>
                                                    <div class="coupon_add_log"></div>
                                                </div>
                                            </div>
                                        </form>


                                    </div>
                                </div>
                                <div class="totals cart-totals">
                                    <div class="process_total">
                                        <table id="shopping-cart-totals-table">
                                            <colgroup>
                                                <col>
                                                <col width="1">
                                            </colgroup>

                                            <tbody >
                                            <tr>
                                                <td style="" class="a-left" colspan="1">
                                                    总价 :
                                                </td>
                                                <td style="" class="a-right">
											<span class="price" v-if="cart_info">
                                                ￥ {{cart_info.base_product_total}}
                                            </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="" class="a-left" colspan="1">
                                                    折扣优惠 :    </td>
                                                <td style="" class="a-right" v-if="cart_info">
                                                    <span class="price">-￥ {{cart_info.base_coupon_cost}}</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <table id="shopping-cart-totals-table2">
                                            <colgroup>
                                                <col>
                                                <col width="90">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <td style="" class="a-left" colspan="1">
                                                    <strong>总额</strong>
                                                </td>
                                                <td style="" class="a-right">
                                                    <strong>
                                                        <span class="price" v-if="cart_info">
                                                            ￥ {{cart_info.base_grand_total}}
                                                        </span>
                                                    </strong>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="proceed_to_checkout">

                                        <button type="button" title="Proceed to Checkout" class="button btn-proceed-checkout btn-checkout"><span><span>支付</span></span></button>

                                    </div>
                                </div>
                                <div class="clear"></div>
                            </div>

                        </div>
                    </div>
                </div v-if= v-if=>
            </div>

        </div>
        <fec-footer/>
        <fec-footer-fix/>
    </div>
</template>

<script>
import fecHeader from '../common/fecHeader'
import fecFooter from '../common/fecFooter'
import fecFooterFix from '../common/fecFooterFix'
import fecTop from '../common/fecTop'
import axios from 'axios'

export default {
  name: 'cart',
  components: {fecHeader, fecFooter, fecFooterFix, fecTop},
  data () {
    return {
      cart_info: null,
      productInfo: null,
      selectedAll: true,
      isEmpty: false
    }
  },
  methods: {
    update: function (id, type) {
      axios({
        method: 'post',
        url: '/checkout/cart/updateinfo',
        data: {
          up_type: type,
          item_id: id
        },
        headers: {
          'access-token': localStorage.access,
          'fecshop-uuid': localStorage.uuid
        },
        transformRequest: [function (data) {
          let str = ''
          for (let k in data) {
            str += k + '=' + data[k] + '&'
          }
          return str.split(0, -1)
        }]
      }).then((res) => {
        if (res.data.code == 200) {
          this.fetchData()
        } else {
          console.log(res.data.message)
        }
      })
    },
    SelectOne: function (item) {
      let selected = this.selectedAll?0:1
      fetch('/checkout/cart/selectone?checked='+selected+'&item_id='+item.item_id, {
        headers: {
          'access-token': localStorage.access,
          'fecshop-uuid': localStorage.uuid
        }
      }).then((res) => {
        this.fetchData()
      })
    },
    all: function () {
      let selected = this.selectedAll?0:1
      fetch('/checkout/cart/selectall?checked='+selected, {
        headers: {
          'access-token': localStorage.access,
          'fecshop-uuid': localStorage.uuid
        }
      }).then((res) => {
        this.fetchData()
      })
    },
    fetchData () {
      fetch('/checkout/cart/index', {
        headers: {
          'access-token': localStorage.access ? localStorage.access : '',
          'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            let v = data.data.cart_info
            let n = 0
            if (v) {
              v.products.forEach(item => {
                if (item.active) {
                  n = n + 1
                }
              })
              this.cart_info= v,
              this.productInfo = v.products,
              this.selectedAll= n == v.products.length,
              this.isEmpty= false
            } else {
              // 购物车为空
              this.isEmpty= true
            }
          } else {
            console.log(data.message)
          }
        })
    },
    register: function () {
      this.$router.push('/register')
    }
  },
  mounted  () {
    this.fetchData()
    // fetch('/checkout/cart/index', {
    //   headers: {
    //     'access-token': localStorage.access ? localStorage.access : '',
    //     'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.code == '200') {
    //       this.cart_info = data.data.cart_info
    //       this.productInfo = data.data.cart_info.products
    //     } else {
    //       console.log(data.message)
    //     }
    //   })
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .owl-theme .owl-controls {
        display: none
    }

    .owl-theme:hover .owl-controls .owl-buttons div.owl-next {
        right: -5px
    }

    .owl-theme:hover .owl-controls .owl-buttons div.owl-prev {
        left: -5px
    }
    #yii-debug-toolbar-logo {
        position: fixed;
        right: 31px;
        bottom: 4px;
    }

    @media print {
        .yii-debug-toolbar {
            display: none !important;
        }
    }

    .yii-debug-toolbar {
        font: 11px Verdana, Arial, sans-serif;
        text-align: left;
        width: 96px;
        transition: width .3s ease;
        z-index: 1000000;
    }

    .yii-debug-toolbar_active {
        width: 100%;
    }

    .yii-debug-toolbar_position_top {
        margin: 0 0 20px 0;
        width: 100%;
    }

    .yii-debug-toolbar_position_bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 0;
    }

    .yii-debug-toolbar__bar {
        position: relative;
        padding: 0;
        font: 11px Verdana, Arial, sans-serif;
        text-align: left;
        overflow: hidden;
        box-sizing: content-box;

        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f7f7f7', GradientType=0); /* IE6-9 */

        border: 1px solid rgba(0, 0, 0, 0.11);

        /* ensure debug toolbar text is displayed ltr even on rtl pages */
        direction: ltr;
    }

    .yii-debug-toolbar.yii-debug-toolbar_active:not(.yii-debug-toolbar_animating) .yii-debug-toolbar__bar {
        overflow: visible;
    }
    .yii-debug-toolbar:not(.yii-debug-toolbar_active) .yii-debug-toolbar__bar,
    .yii-debug-toolbar.yii-debug-toolbar_animating .yii-debug-toolbar__bar {
        height:40px;
    }

    .yii-debug-toolbar__bar:after {
        content: '';
        display: table;
        clear: both;
    }

    .yii-debug-toolbar__view {
        height: 0;
        overflow: hidden;
        background: white;
    }

    .yii-debug-toolbar__view iframe {
        margin: 0;
        padding: 0;
        padding-top: 10px;
        height: 100%;
        width: 100%;
        border: 0;
    }

    .yii-debug-toolbar_iframe_active .yii-debug-toolbar__view {
        height: 100%;
    }

    .yii-debug-toolbar_iframe_animating .yii-debug-toolbar__view {
        transition: height .3s ease;
    }

    .yii-debug-toolbar__block {
        float: left;
        margin: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.11);
        padding: 4px 8px;
        line-height: 32px;
        white-space: nowrap;
    }

    .yii-debug-toolbar__block_active,
    .yii-debug-toolbar__ajax:hover {
        background: rgb(247, 247, 247); /* Old browsers */
        background: -moz-linear-gradient(top, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#e0e0e0', GradientType=0); /* IE6-9 */
    }

    .yii-debug-toolbar__block a {
        display: inline-block;
        text-decoration: none;
        color: black;
    }

    .yii-debug-toolbar__block img {
        vertical-align: middle;
    }

    .yii-debug-toolbar__label {
        display: inline-block;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: normal;
        line-height: 14px;
        white-space: nowrap;
        vertical-align: baseline;
        color: #ffffff;
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        background-color: #999999;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    .yii-debug-toolbar__label:empty {
        display: none;
    }

    a.yii-debug-toolbar__label:hover,
    a.yii-debug-toolbar__label:focus {
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }

    .yii-debug-toolbar__label_important,
    .yii-debug-toolbar__label_error {
        background-color: #b94a48;
    }

    .yii-debug-toolbar__label_important[href] {
        background-color: #953b39;
    }

    .yii-debug-toolbar__label_warning,
    .yii-debug-toolbar__badge_warning {
        background-color: #f89406;
    }

    .yii-debug-toolbar__label_warning[href] {
        background-color: #c67605;
    }

    .yii-debug-toolbar__label_success {
        background-color: #468847;
    }

    .yii-debug-toolbar__label_success[href] {
        background-color: #356635;
    }

    .yii-debug-toolbar__label_info {
        background-color: #3a87ad;
    }

    .yii-debug-toolbar__label_info[href] {
        background-color: #2d6987;
    }

    .yii-debug-toolbar__label_inverse,
    .yii-debug-toolbar__badge_inverse {
        background-color: #333333;
    }

    .yii-debug-toolbar__label_inverse[href],
    .yii-debug-toolbar__badge_inverse[href] {
        background-color: #1a1a1a;
    }

    .yii-debug-toolbar__title {
        background: rgb(247, 247, 247); /* Old browsers */
        background: -moz-linear-gradient(top, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#e0e0e0', GradientType=0); /* IE6-9 */
    }

    .yii-debug-toolbar__block_last{ /* creates space for .yii-debug-toolbar__toggle, .yii-debug-toolbar__external */
        width: 80px;
        height: 40px;
        float: left;
    }

    .yii-debug-toolbar__toggle,
    .yii-debug-toolbar__external {
        cursor: pointer;
        position: absolute;

        width: 30px;
        height: 30px;
        font-size: 25px;
        font-weight: 100;
        line-height: 28px;
        color: #ffffff;
        text-align: center;

        opacity: 0.5;
        filter: alpha(opacity=50);

        transition: opacity .3s ease;
    }

    .yii-debug-toolbar__toggle:hover,
    .yii-debug-toolbar__toggle:focus,
    .yii-debug-toolbar__external:hover,
    .yii-debug-toolbar__external:focus {
        color: #ffffff;
        text-decoration: none;
        opacity: 0.9;
        filter: alpha(opacity=90);
    }

    .yii-debug-toolbar__toggle-icon,
    .yii-debug-toolbar__external-icon {
        display: inline-block;

        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .yii-debug-toolbar__toggle {
        right: 10px;
        bottom: 4px;
    }

    .yii-debug-toolbar__toggle-icon {
        padding: 7px 0;
        width: 10px;
        height: 16px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBmaWxsPSIjNDQ0IiBkPSJNMTUuNTYzIDQwLjgzNmEuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDE1LTE1YTEgMSAwIDAgMCAwLTEuNDE0bC0xNS0xNWExIDEgMCAwIDAtMS40MTQgMS40MTRMMjkuODU2IDI1LjEzIDE1LjU2MyAzOS40MmExIDEgMCAwIDAgMCAxLjQxNHoiLz48L3N2Zz4=');
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }

    .yii-debug-toolbar_active .yii-debug-toolbar__toggle-icon {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    .yii-debug-toolbar_iframe_active .yii-debug-toolbar__toggle-icon {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .yii-debug-toolbar__external {
        display: none;
        right: 50px;
        bottom: 4px;
    }

    .yii-debug-toolbar_iframe_active .yii-debug-toolbar__external {
        display: block;
    }

    .yii-debug-toolbar__external-icon {
        padding: 8px 0;
        width: 14px;
        height: 14px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDUwIDUwIj48cGF0aCBmaWxsPSIjNDQ0IiBkPSJNMzkuNjQyIDkuNzIyYTEuMDEgMS4wMSAwIDAgMC0uMzgyLS4wNzdIMjguMTAzYTEgMSAwIDAgMCAwIDJoOC43NDNMMjEuNyAyNi43OWExIDEgMCAwIDAgMS40MTQgMS40MTVMMzguMjYgMTMuMDZ2OC43NDNhMSAxIDAgMCAwIDIgMFYxMC42NDZhMS4wMDUgMS4wMDUgMCAwIDAtLjYxOC0uOTI0eiIvPjxwYXRoIGQ9Ik0zOS4yNiAyNy45ODVhMSAxIDAgMCAwLTEgMXYxMC42NmgtMjh2LTI4aDEwLjY4M2ExIDEgMCAwIDAgMC0ySDkuMjZhMSAxIDAgMCAwLTEgMXYzMGExIDEgMCAwIDAgMSAxaDMwYTEgMSAwIDAgMCAxLTF2LTExLjY2YTEgMSAwIDAgMC0xLTF6Ii8+PC9zdmc+');
    }

    .yii-debug-toolbar__switch-icon {
        margin-left: 10px;
        padding: 5px 10px;
        width: 18px;
        height: 18px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDUwIDUwIiB2ZXJzaW9uPSIxLjEiPjxwYXRoIGQ9Im00MS4xIDIzYy0wLjYgMC0xIDAuNC0xIDF2MTAuN2wtMjUuNi0wLjFjMCAwIDAtMiAwLTIuOCAwLTAuOC0wLjctMS0xLTAuNmwtMy41IDMuNWMtMC42IDAuNi0wLjYgMS4zIDAgMmwzLjQgMy40YzAuNCAwLjQgMS4xIDAuMiAxLTAuNmwwLTIuOWMwIDAgMjAuOCAwLjEgMjYuNiAwIDAuNiAwIDEtMC40IDEtMXYtMTEuN2MwLTAuNi0wLjQtMS0xLTF6TTkgMjYuOSA5IDI2LjkgOSAyNi45IDkgMjYuOSIvPjxwYXRoIGQ9Im05IDI2LjljMC42IDAgMS0wLjQgMS0xdi0xMC43bDI1LjYgMC4xYzAgMCAwIDIgMCAyLjggMCAwLjggMC43IDEgMSAwLjZsMy41LTMuNWMwLjYtMC42IDAuNi0xLjMgMC0ybC0zLjQtMy40Yy0wLjQtMC40LTEuMS0wLjItMSAwLjZsMCAyLjljMCAwLTIwLjgtMC4xLTI2LjYgMC0wLjYgMC0xIDAuNC0xIDF2MTEuN2MwIDAuNiAwLjQgMSAxIDF6Ii8+PC9zdmc+');
    }

    .yii-debug-toolbar__ajax {
        position: relative;
    }

    .yii-debug-toolbar__ajax:hover .yii-debug-toolbar__ajax_info,
    .yii-debug-toolbar__ajax:focus .yii-debug-toolbar__ajax_info {
        visibility: visible;
    }
    .yii-debug-toolbar__ajax_info {
        visibility: hidden;
        transition: visibility .2s linear;
        background-color: white;
        box-shadow: inset 0 -10px 10px -10px #e1e1e1;
        position: absolute;
        bottom: 40px;
        left: -1px;
        padding: 10px;
        max-width: 480px;
        max-height: 480px;
        word-wrap: break-word;
        overflow: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0.11);
        z-index: 1000001;
    }
    .yii-debug-toolbar__ajax a {
        color: #337ab7;
    }
    .yii-debug-toolbar__ajax table {
        width: 100%;
        table-layout: auto;
        border-spacing: 0;
        border-collapse: collapse;
    }
    .yii-debug-toolbar__ajax table td {
        padding: 4px;
        font-size: 12px;
        line-height: normal;
        vertical-align: top;
        border-top: 1px solid #ddd;
    }
    .yii-debug-toolbar__ajax table th {
        padding: 4px;
        font-size: 11px;
        line-height: normal;
        vertical-align: bottom;
        border-bottom: 2px solid #ddd;
    }
    .yii-debug-toolbar__ajax_request_status {
        color: white;
        padding: 2px 5px;
    }
    .yii-debug-toolbar__ajax_request_url {
        max-width: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
