<template>
    <div>
        <fec-header/>
        <div class="banner">
            <slider animation="fade" class="imgBox" height="600px">
                <slider-item v-for="item in banner" :key="item.imgUrl">
                    <div >
                        <img :src="item.imgUrl" alt="">
                    </div>
                </slider-item>
            </slider>
            <div class="nav">
                <li v-for="item in menuData" :key="item._id" v-if="item._id!=='home'">
                    <router-link :to="'/product/'+item._id"  >
                        {{item.name}}
                    </router-link>
                    <div class="navChild" >
                        <div v-for="child in item.child" :key="child._id" class="child">
                                <router-link :to="'/product/'+child._id" class="span" >
                                    {{child.name}}>
                                </router-link>
                                <div v-for="grandSon in child.child" :key="grandSon._id" class="grandSon">
                                <router-link :to="'/product/'+grandSon._id">{{grandSon.name}}</router-link>
                                <em></em>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        </div>
        <ul class="clearfix bottomAdList"><!-- 三张小banner -->
            <li><p><a target="_blank" href="">
                <img class="js_lazy" data-original="//img3.fecshoptest.com/images/free_en.jpg" src="//img3.fecshoptest.com/images/free_en.jpg" alt="" width="100%" style=""></a></p></li>
            <li><p><a target="_blank" href="">
                <img class="js_lazy" data-original="//img3.fecshoptest.com/images/new.jpg" src="//img3.fecshoptest.com/images/new.jpg" alt="" width="100%" style=""></a></p></li>
            <li><p><a target="_blank" href="">
                <img class="js_lazy" data-original="//img3.fecshoptest.com/images/vip.jpg" src="//img3.fecshoptest.com/images/vip.jpg" alt="" width="100%" style=""></a></p></li>
        </ul>
        <div class="banner_right"><!-- 两张中等banner -->
            <div class="banner_l_top"><a class="link_ad" href="">
                <img class="js_lazy" data-original="//img3.fecshoptest.com/images/en_a.jpg" src="//img3.fecshoptest.com/images/en_a.jpg" alt="" width="100%" style=""></a></div>
            <div class="banner_r_top"><a href="">
                <img class="js_lazy" data-original="//img3.fecshoptest.com/images/sammy.jpg" src="//img3.fecshoptest.com/images/sammy.jpg" alt="" width="100%" style=""></a></div>
            <div style="clear:both"></div>
        </div>
        <div class="main">
            <div class="mt10">
                <h4 class="sectionBox_h best_seller"><span>best seller</span><em><a href="">more</a></em></h4>
                <div class="pro-content">
                    <div class="scrollBox">
                        <div class="viewport" style="overflow: hidden; position: relative;height: 572px;">
                            <div id="owl-best-seller" class="owl-carousel owl-theme"
                                 style="opacity: 1; display: block;height: 572px;">
                                <div class="owl-wrapper-outer">
                                    <div class="owl-wrapper" style="width: 4200px; left: 0px; display: block;margin-top: 20px">
                                        <div class="owl-item" style="width: 300px;display: flex;">
                                            <div class="item" v-for="item in indexData" >
                                                <p class="tc pro_img">
                                                    <a style="" class="i_proImg"
                                                       :href="'http://appserver.fecshoptest.com'+item.one.url">
                                                        <img style="width: 100%;" class="lazyOwl"
                                                             :src="item.one.image">
                                                    </a>
                                                </p>
                                                <p class="proName">
                                                    <a :href="item.one.url">{{item.one.name}}</a>
                                                </p>
                                                <p class="proPrice">
                                                    <span class="bizhong">
                                                        {{item.one.price.code}}
                                                    </span>
                                                    <span orgp="33.00" class="my_shop_price f14">
                                                        <span class="icon">
                                                            {{item.one.price.symbol}}
                                                        </span>
                                                        {{item.one.price.value}}
                                                    </span>

                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="owl-controls clickable">-->
                                    <!--<div class="owl-buttons">-->
                                        <!--<div class="owl-prev"><</div>-->
                                        <!--<div class="owl-next">></div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt10 mt12">
                <h4 class="sectionBox_h best_seller"><span>best seller</span><em><a href="">more</a></em></h4>
                <div class="pro-content">
                    <div class="scrollBox">
                        <div class="viewport" style="overflow: hidden; position: relative;height: 572px;">
                            <div id="owl-best-seller" class="owl-carousel owl-theme"
                                 style="opacity: 1; display: block;height: 572px;">
                                <div class="owl-wrapper-outer">
                                    <div class="owl-wrapper" style="width: 4200px; left: 0px; display: block;margin-top: 20px">
                                        <div class="owl-item" style="width: 300px;display: flex;">
                                            <div class="item" v-for="item in indexData" >
                                                <p class="tc pro_img">
                                                    <a style="" class="i_proImg"
                                                       :href="'http://appserver.fecshoptest.com'+item.two.url">
                                                        <img style="width: 100%;" class="lazyOwl"
                                                             :src="item.two.image">
                                                    </a>
                                                </p>
                                                <p class="proName">
                                                    <a :href="item.two.url">{{item.two.name}}</a>
                                                </p>
                                                <p class="proPrice">
                                                    <span class="bizhong">
                                                        {{item.two.price.code}}
                                                    </span>
                                                    <span orgp="33.00" class="my_shop_price f14">
                                                        <span class="icon">
                                                            {{item.two.price.symbol}}
                                                        </span>
                                                        {{item.two.price.value}}
                                                    </span>

                                                </p></div>
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="owl-controls clickable">-->
                                    <!--<div class="owl-buttons">-->
                                        <!--<div class="owl-prev"><</div>-->
                                        <!--<div class="owl-next">></div>-->
                                    <!--</div>-->
                                <!--</div>-->
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
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  name: 'index',
  components: {fecHeader, fecFooter, fecFooterFix, Slider, SliderItem},
  data () {
    return {
      menuData: null,
      indexData: null,
      banner: null
    }
  },
  mounted  () {
    fetch('/cms/home/index')
      .then(res => res.json())
      .then(data => {
        if (data.code == '200') {
          this.banner = data.data.advertiseImg.bigImgList
        } else {
          console.log(data.message)
        }
      })
    fetch('/cms/home/index').then(res => res.json()).then(data => {
      if (data.code == '200') {
        this.indexData = data.data.productList
      } else {
        console.log(data.message)
      }
    })
    fetch('/general/base/menu')
      .then(res => res.json())
      .then(data => {
        this.menuData = data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .banner {
        width: 1200px;
        height: 600px;
        margin: 0 auto;
        position: relative;
    }

    .banner .imgBox {
        width: 1200px;
        height: 600px;
        overflow: hidden;
    }

    .banner .nav {
        width: 200px;
        height: 600px;
        position: absolute;
        background: rgba(255, 255, 255, 0.6);
        top: 0;
        left: 0;
        z-index: 1000;
    }

    .banner .nav li {
        height: 80px;
        line-height: 80px;
        cursor: pointer;
        position: relative;
    }
    .banner .nav li:hover{
        background: rgba(255, 255, 255, 0.77);
    }
    .banner .nav li:hover .navChild{
        display: block;
    }
    .banner .navChild{
        position: absolute;
        top: 0;
        left: 200px;
        width: 1000px;
        height: 600px;
        display: none;
    }

    .banner .navChild .child{
        height: 80px;
        border-bottom: 2px solid #eee;
        width: 1000px;
        padding: 10px 15px;
        box-sizing: border-box;
        background: rgba(255,255,255,0.9);
        display: flex;
        z-index: -666;
        height: 82px;
    }

    .banner .navChild .child .span{
        display: inline-block;
        width: 170px;
        height: 80px;
        letter-spacing: 5px;
        text-align: right;
    }
    .banner .navChild .grandSon{
        z-index: 10;
        margin: 0 6px;
        color: #666;
    }
    .banner .navChild .grandSon em{
        width: 2px;
        height: 22px;
        background: #eee;
        display: inline-block;
        margin-bottom: -6px;
    }
    .banner .navChild .grandSon:last-child em{
        width:0;
    }
    .clearfix{
        width: 1200px;
        margin: 20px auto;
    }
    .banner_right{
        width: 1200px;
        margin: 20px auto;
    }
    .mt10 {
        width: 1200px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .owl-prev,.owl-next{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        font-size: 16px;
        cursor: pointer;
        height: 58px;
        width: 28px;
        z-index: 10;
        background: rgba(255,255,255,0.6);
        color: #333;
        display: none;
        line-height: 58px;
        border-radius: 10px;
    }
    .main:hover .owl-prev,.main:hover .owl-next{
        display: block;
    }
    .owl-prev{
        left: 0;
    }
    .owl-next{
        right: 0;
    }
    .mt12{
        margin-top: 618px;
    }
</style>
