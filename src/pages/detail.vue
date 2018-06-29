<template>
    <div>
        <fec-header/>
        <fecTop/>
        <div class="main-container">
            <div class="main container one-column">
                <div class="col-main">
                    <div class="product_page">
                        <div class="product_view">
                            <input type="hidden" class="product_view_id" >
                            <input type="hidden" class="sku">
                            <input type="hidden" class="product_csrf" name="_csrf" >
                            <div class="product_info" id="product_page_info" v-if="product">
                                <h1 style="text-align: left" v-if="product">{{product.name}}</h1>
                                <div>
                                    <div class="rbc_cold" v-if="product">
                                        <span>
								<span class="average_rating">平均评分 :</span>
								<span :class="['review_star','review_star_'+product.reviw_rate_star_average]" style="font-weight:bold;"></span>

								<a href="#text-reviews" v-if="product">
									(<span>{{product.review_count}} 条评论</span>)
								</a>
							</span>
                                    </div>
                                </div>
                                <div class="item_code" style="text-align: left" v-if="product">产品编号: {{product.sku}}</div>
                                <div class="price_info"  v-if="product.price_info.special_price">

                                    <div class="special_price special_active">
                                        {{product.price_info.special_price.symbol}}{{product.price_info.special_price.value}}
                                    </div>
                                    <div class="price special_active">
                                        {{product.price_info.price.symbol}}{{product.price_info.price.value}}
                                    </div>
                                    <div class="clear"></div>

                                </div>
                                <div class="price_info"  v-else>

                                    <div class="special_price special_active">
                                        {{product.price_info.price.symbol}}{{product.price_info.price.value}}
                                    </div>
                                    <div class="clear"></div>

                                </div>
                                <div class="product_info_section">
                                    <div class="product_options"  v-if="product">

                                        <div class="pg" v-for="item in product.options">
                                            <div class="label size-label">{{item.label}}</div>
                                            <div class="chose_size rg">
                                                <ul>
                                                    <li class="current show_as_img" v-for="v in item.value" v-if="v.show_as_img">
                                                        <a class="current" href="javascript:void(0)" @click="change(v._id.$oid)">
                                                            <span><img :src="v.show_as_img"></span>
                                                        </a>
                                                        <b></b>
                                                    </li>
                                                    <li class="current" v-else>
                                                        <a class="current" href="javascript:void(0)">
                                                            <span>{{v.size}}</span>
                                                        </a>
                                                        <b></b>
                                                    </li>
                                                </ul>
                                                <div class="clear"></div>
                                            </div>
                                            <div class="clear"></div>
                                        </div>

                                    </div>

                                    <div class="product_qty pg">
                                        <div class="label">个数</div>
                                        <span class="tb-stock" id="J_Stock">
                                            <a href="javascript:void(0);" title="减1" hidefocus="" :class="['tb-reduce','J_Reduce','tb-iconfont',{'tb-disable-reduce':showDEC}]" @click="dec">-</a>
                                            <input id="J_IptAmount" type="text" class="tb-text" maxlength="8" title="请输入购买量" v-model="qty">
                                            <a href="javascript:void(0);" hidefocus="" class="tb-increase J_Increase tb-iconfont" title="加1" @click="add">+</a>
                                        </span>
                                        <!--<div class="rg" style="margin-left: 5px">-->
                                            <!--<input type="text" name="qty" class="qty" v-model="qty">-->
                                        <!--</div>-->
                                        <div class="clear"></div>
                                    </div>

                                    <div class="addtocart">
                                        <button type="button" id="js_registBtn" class="redBtn addProductToCart" @click="addCart">
                                            <em><span><i></i>加入购物车</span></em></button>

                                        <div class="myFavorite_nohove" id="myFavorite">
                                            <i></i>
                                            <a href="javascript:void(0)" class="addheart" @click="addFavorite" >
                                                收藏该产品</a>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="media_img">
                                <div class="col-left ">
                                    <div class="product-main-img" v-if="product" >
                                        <div style="height:533px;width:400px;" class="zoomWrapper" v-if="imgSrc">
                                            <pic-zoom :url="imgSrc" width="400px" :scale="3"></pic-zoom>
                                        </div>
                                        <div style="height:533px;width:400px;" class="zoomWrapper" v-else>
                                            <img :src="product.image_detail[0]" width="400px">
                                        </div>
                                    </div>
                                    <div class="product-img-box">
                                        <div class="gallery-img">
                                            <a href="javascript:;" class="pre_images"></a>
                                            <div class="box-img" id="gal1">
                                                <div class="list-img" v-if="product">
                                                    <a href="#" v-for="item in product.image_detail" >
                                                        <img class="elevateZoom lazyOwl" :src="item" width="105px" @mouseover="imgSrc=item">
                                                    </a>
                                                </div>
                                            </div>
                                            <a href="javascript:;" class="next_images"></a>
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                    <div class="clear"></div>

                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                        <div class="product_description_info">
                            <div :class="['nav',{fixed:barFixed}]" id="nav-container">
                                <ul id="nav-box">
                                    <li class="nav_tab cur">产品描述</li>
                                    <li class="nav_tab"><a href="#pic_list_2">评论</a></li>
                                    <li class="nav_tab"><a href="#pic_list_3">货运 & 支付</a></li>
                                </ul>
                            </div>
                            <div id="text">
                                <div class="text-description" style="" v-if="product">
                                    <table>
                                        <tbody>
                                        <tr v-for="(v,k) in product.groupAttrArr">
                                            <td>{{k}}</td>
                                            <td>{{v}}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <br>
                                    <div v-html="product.description"></div>
                                    <div class="img-section" v-if="product">
                                        <br>
                                        <img class="js_lazy" v-for="item in product.image_detail" :src="item" style="">
                                        <br>
                                    </div>
                                </div>
                                <div class="text-reviews" id="text-reviews" style="">

                                    <div class="product-Reviews">
                                        <div id="pic_list_2" class="scroll_horizontal">
                                            <div class="scroll_left" style="text-align: left">
                                                <a href="">产品评论</a>
                                            </div>
                                            <div class="clear"></div>
                                            <div class="box pro_commit">
                                                <div class="averageWarp" v-if="product">
                                                    <span class="lineBlock fon14">平均评分:
</span>
                                                    <a href="#" :class="['review_star','review_star_'+product.reviw_rate_star_average]" ></a>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="product-Reviews_top">
                                                    <ul id="review_description" v-if="product">
                                                        <li v-for="item in product.productReview.coll">
                                                            <div class="review_description_left" style="text-align: left">
                                                                <a href="#" :class="['review_star','review_star_'+item.rate_star]" ></a>
                                                                <p>{{item.name}}</p>
                                                                <span>{{item.review_date}}</span>
                                                            </div>
                                                            <div class="review_description_right" style="text-align: left">
                                                                <input id="review_url_407" value="" type="hidden">
                                                                <div class="review_description_centen">
                                                                    <div class="addsize"></div>
                                                                    <div class="review-content">
                                                                        {{item.review_content}}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div class="clear"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="clear"></div>
                                                <!--<div class="view_all_review">-->
                                                    <!--<a href="http://appfront.fecshoptest.com/catalog/reviewproduct/lists?spu=kilw&amp;_id=57bab0d5f656f2940a3bf56e">-->
                                                        <!--查看所有评论(0)-->
                                                    <!--</a>-->
                                                <!--</div>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-questions" style="text-align: left" id="pic_list_3">
                                    <div class="scroll_left" style="border-bottom: 1px solid #ddd;">
                                        <a href="">支付方式</a>
                                    </div>
                                    <div class="clear" style="height: 15px"></div>
                                    <p>FECSHOP.com接受PayPal，信用卡作为安全支付方式：</p>

                                    <p>全部:</p>

                                    <p>1. PayPal</p>

                                    <p><img alt="" height="96" width="300" src="http://img3.fecshoptest.com/images/paypal48.jpg"></p>

                                    <p>1）登录到您的帐户或使用信用卡。
                                        <br>
                                        2）输入您的信用卡详情，订单将发送到您的贝宝地址。 然后点击“提交”。
                                        <br>
                                        3）您的付款将被处理，并且收据将发送到您的电子邮件收件箱。</p>

                                    <p>2. 信用卡</p>

                                    <p><img alt="" height="40" width="554" src="http://img3.fecshoptest.com/images/creditcard48.jpg"></p>

                                    <p> 1）选择您的送货地址或创建一个新的。
                                        <br>
                                        2）输入您的信用卡详细信息，然后单击“提交”。
                                        <br>
                                        3）您的付款将被处理，并且收据将发送到您的电子邮件收件箱。</p>


                                </div>
                                <!--
                                <div class="text-wholesale" style="width:100%;height:500px;background:yellow;text-align:center;">

                                </div>
                                -->
                            </div>
                        </div>
                    </div>
                </div>
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
import PicZoom from 'vue-piczoom'
import axios from 'axios'

export default {
  inject: ['reload'],
  name: 'detail',
  components: {fecHeader, fecFooter, fecFooterFix, fecTop, PicZoom},
  data () {
    return {
      product: null,
      qty: 1,
      imgSrc: null,
      pid: null,
      showDEC: false,
      barFixed: false,
      toast: null
    }
  },
  methods: {
    addFavorite: function () {
      fetch('/catalog/product/favorite?product_id='+this.$route.params.id, {
        headers: {
          'access-token': localStorage.access ? localStorage.access : ''
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            alert('收藏成功')
          } else if (data.code == '1100003') {
            this.$router.push('/login')
          } else {
            console.log(data.message)
          }
        })
    },
    change (pid) {
      this.pid = pid
      fetch('/catalog/product/index?product_id='+this.pid)
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            this.product = data.data.product
          } else {
            console.log(data.message)
          }
        })
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#nav-container').offsetTop
      if (scrollTop > offsetTop) {
        this.barFixed = true
        if (scrollTop <= 700) {
          this.barFixed = false
        }
      } else {
        this.barFixed = false
      }
    },
    dec: function () {
      if (this.qty > 1) {
        this.qty--
        this.showDEC = true
      } else {
        this.showDEC = false
      }
    },
    add: function () {
      this.qty++
    },
    addCart: function () {
      if (localStorage.uuid) {
        axios({
          method: 'post',
          url: '/checkout/cart/add',
          headers: {
            'access-token': localStorage.access ? localStorage.access : '',
            'fecshop-uuid': localStorage.uuid
          },
          data: 'product_id='+ this.$route.params.id + '&qty='+ this.qty + '&custom_option={}'
        })
          .then((res) => {
            if (res.data.code == '200') {
              alert('加入成功')
              this.reload()
            } else if (res.data.code == '1100003') {
              this.$router.push('/login')
            } else {
              console.log(res.data.message)
            }
          })
      } else {
        this.$router.push('/login')
      }
    }
  },
  mounted  () {
    fetch('/catalog/product/index?product_id='+this.$route.params.id)
      .then(res => res.json())
      .then(data => {
        if (data.code == '200') {
          this.product = data.data.product
        } else {
          console.log(data.message)
        }
      })
    window.addEventListener('scroll', this.handleScroll)
    // this.todo=localStorage.todo?JSON.parse(localStorage.todo):[];
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .product_description_info .fixed{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .tb-stock {
        position: relative;
    }
    .tb-stock,.tb-stock .tb-disable-reduce:hover {
        color: #ccc;
        cursor: not-allowed;
        background-color: #ededed;
    }

    .tb-stock .tb-reduce {
        border-right: 0!important;
    }
    .tb-stock a, .tb-stock a:hover {
        display: block;
        _display: inline;
        float: left;
        width: 26px;
        height: 26px;
        border: 1px solid #ccc;
        line-height: 26px;
        padding: 0;
        vertical-align: top;
        overflow: hidden;
        text-align: center;
        background-color: #ededed;
        overflow: hidden;
        color: #3C3C3C;
        outline: 0;
        text-decoration: none;
    }

    .tb-iconfont {
        font-family: tb-iconfont!important;
        font-size: 12px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscaleFont type;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
     .tb-stock .tb-stock-num,.tb-stock input {
        float: left;
        margin: 0;
        padding: 0;
        width: 48px;
        height: 26px;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        color: #666;
        border: 1px solid #CCC;
        outline: 0;
        background: #FFF;
        ime-mode: disabled;
    }
    .tb-stock .tb-increase {
        border-left: 0!important;
        margin-right: 8px;
    }
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
