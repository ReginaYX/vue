<template>
    <div>
        <fec-header/>
        <header id="header">
            <div id="top_main">
                <div class="top_main_inner pr">
                    <div class="top_header clearfix">
                        <div class="topSeachForm">
                            <form method="get" name="searchFrom" class="js_topSeachForm"
                                  action="http://appfront.fecshoptest.com/catalogsearch/index">
                                <div class="top_seachBox">
                                    <div class="searchInput fl">
                                        <input type="text" value="" maxlength="150" placeholder="Products keyword"
                                               class="searchArea js_k2 ac_input" name="q">
                                    </div>
                                    <button class="fl js_topSearch seachBtn" type="submit"><span
                                            class="t_hidden">search</span></button>
                                    <!-- <input type="hidden" class="category" value="0" name="category"> -->
                                </div><!--end .top_seachBox-->
                            </form>
                        </div>
                        <div class="logo"><a titel="fecshop logo" href="http://appfront.fecshoptest.com" style="">
                            <img src="//img3.fecshoptest.com/custom/logo.png">
                        </a></div>
                    </div><!--end .top_header-->
                </div><!--end .top_main_inner-->
            </div>
            <div class="top_menu">
                <nav id="nav">
                    <ul class="clearfix" v-if="menuData">
                        <li>
                            <a href="http://appfront.fecshoptest.com" class="nav_t">Home</a>
                        </li>
                        <li v-for="item in menuData" :key="item._id" v-if="item._id!=='home'">
                            <a href="http://appfront.fecshoptest.com/wedding" class="nav_t">
                                {{item.name}}</a>
                            <div class="sub_menu big_sub_menu clearfix" v-if="item.child">
                                <div class="trends_item clearfix">
                                    <dl>
                                        <span v-for="child in item.child"><dt><a href="http://appfront.fecshoptest.com/wedding-dresses">{{child.name}}</a></dt>
                                        <a href="http://appfront.fecshoptest.com/wedding-dresses">
                                        </a>
                                        <dd v-for="grandSon in child.child"><a href="http://appfront.fecshoptest.com/wedding-dresses"></a><a  href="http://appfront.fecshoptest.com/wedding-dresses-2016">{{grandSon.name}}</a></dd></span>
                                    </dl>
                                </div>
                                <div class="trends_img">
                                    <a href="//fecshop.appfront.fancyecommerce.com/wedding"><img alt=""
                                                                                                 src="//img.fancyecommerce.com/custom/menu/what_a.jpg"
                                                                                                 width="244"></a><a
                                        style="margin-left: 20px;" href="//fecshop.appfront.fancyecommerce.com/wedding"><img
                                        alt="" src="//img.fancyecommerce.com/custom/menu/what_b.jpg" width="244"></a>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <div class="nav_fullbg" style="display: none;"></div>
                    <div class="navmask" style="display: none;"></div>
                </nav>
            </div>
        </header>
        <div class="main-container">
        <div class="main container two-columns-left">
        <div class="col-main">
            <div class="menu_category">
                <div class="category_img">
                    <a href="#"></a><a>
                </a></div>
                <a>
                    <!--<div class="category_description" v-if="productList" style="text-align: left">-->
                        <!--<h1>{{productList.name}}</h1>-->
                    <!--</div>-->
                    <div class="panelBar">
                        <div class="toolbar">
                            <div class="tb_le" v-if="sort">
                                <!--排序方式-->
                                <b>Sort By:</b>
                                <select class="product_sort" @change="setSort">
                                    <option v-for="v in sort.frontSort" :value="v.value">
                                        {{v.label}}
                                    </option>
                                </select>
                                <!--<select class="product_num_per_page">-->
                                    <!--<option url="//appfront.fecshoptest.com/wedding?numPerPage=30" value="30">30-->
                                    <!--</option>-->
                                    <!--<option url="//appfront.fecshoptest.com/wedding?numPerPage=60" value="60">60-->
                                    <!--</option>-->
                                    <!--<option url="//appfront.fecshoptest.com/wedding?numPerPage=90" value="90">90-->
                                    <!--</option>-->
                                <!--</select>-->
                            </div>
                            <div class="tb_rg">
                                <span>&lt;</span>


                                <span class="current">1</span>


                                <span>&gt;</span>

                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </a>
                <div class="category_product">
                    <ul >
                        <li v-for="item in products">
                            <div class="c_img" style="width: 230px;height: 230px">
                            <router-link :to="'/detail/'+item.one._id" style="width: 230px;height: 230px;display: block">
                                <img class="js_lazy" :src="item.one.image" style="width: 170px;height: 230px;display: block;margin: 0 auto">
                            </router-link>
                            </div>
                            <div class="c_name">
                                <router-link :to="'/detail/'+item.one._id">
                                    {{item.one.name}} </router-link>
                            </div>
                            <div class="c_price">
                                <div :class="['price',{sp:item.one.special_price}]">
                                    {{item.one.price.symbol}}{{item.one.price.value}}
                                </div>
                                <div class="special_price">
                                    {{item.one.special_price.symbol}}{{item.one.special_price.value}}
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li v-for="item in products" v-if="item.two.image">
                            <div class="c_img" style="width: 230px;height: 230px">
                                <router-link :to="'/detail/'+item.two._id" style="width: 230px;height: 230px;display: block">
                                    <img class="js_lazy" :src="item.two.image" style="width: 170px;height: 230px;display: block;margin: 0 auto">
                                </router-link>
                            </div>
                            <div class="c_name">
                                <router-link :to="'/detail/'+item.two._id">
                                    {{item.two.name}}</router-link>
                            </div>
                            <div class="c_price">
                                <div :class="['price',{sp:item.two.special_price}]">
                                    {{item.two.price.symbol}}{{item.two.price.value}}
                                </div>
                                <div class="special_price">
                                    {{item.two.special_price.symbol}}{{item.two.special_price.value}}
                                </div>
                                <div class="clear"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
                <!--<div class="panelBar">-->
                    <!--<div class="toolbar">-->
                        <!--<div class="tb_le">-->

                            <!--<b>Sort By:</b>-->
                            <!--<select class="product_sort" v-if="sort" @change="setSort">-->
                                <!--<option url="//appfront.fecshoptest.com/wedding?sort=hot&amp;dir=desc" :value="item.value" v-for="item in sort.frontSort">-->
                                    <!--{{item.label}}-->
                                <!--</option>-->
                            <!--</select>-->
                        <!--</div>-->
                        <!--<div class="tb_rg">-->
                            <!--<span>&lt;</span>-->
                            <!--<span class="current">1</span>-->

                            <!--<span>&gt;</span>-->

                        <!--</div>-->
                        <!--<div class="clear"></div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
        </div>
        <div class="col-left ">

            <div class="category_left_filter_category">
                <div class="filter_attr_title" style="font-size: 1.1em" v-if="productList">{{productList.name}}</div>
                <div class="filter_category_content">
                    <ul v-if="productList">
                        <li v-for="v in productList.filter_category" >
                            <a href="http://appfront.fecshoptest.com/wedding-dresses" style="color: #000;font-weight: 120;font-size: 0.9em">
                                {{v.name}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="category_left_filter" v-if="filter">

                <div class="filter_attr" v-for="(v,key) in filter">
                    <div class="filter_attr_title">
                        {{v.label}}
                    </div>
                    <div class="filter_attr_info" v-for="item in v.items" v-if="item._id">

                        <input type="checkbox" id="filterBox" @click="setFilter(item._id,key)" :value="item._id" :checked="item.selected" >
                        <label for="filterBox" style="font-size: 0.8em;color: #333">{{item.label}}({{item.count}})</label><br>
                    </div>
                </div>
            </div>
            <div class="category_left_filter">
            <div class="filter_attr">
                <div class="filter_attr_title"  >
                    price
                </div>
                <div class="filter_attr_info" v-for="item in filterPrice">

                    <input type="checkbox" id="priceBox" @click="setPrice(item.val)" :value="item.val" :checked="item.selected">
                    <label for="priceBox" style="font-size: 0.8em;color: #333">
                        {{item.label}}</label><br>

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

export default {
  name: 'product',
  components: {fecHeader, fecFooter, fecFooterFix},
  data () {
    return {
      // 总
      productList: null,
      // 产品
      products: null,
      // 排序规则
      sort: null,
      // 筛选条件
      filter: null,
      // 筛选价格
      filterPrice: null,
      // 分类信息
      menuData: null,
      // 排序条件
      sortColumn: null,
      // 用户选的排序方式
      filterAttrs: {},
      // 用户筛选的条件
      fedPrice: null
      // 用户筛选的价格区间
    }
  },
  methods: {
    setFilter (v, k) {
      // let o = this.filterAttr
      // o[k] = v
      // this.filterAttr = o
      // this.filterAttrs = JSON.stringify(this.filterAttr)
      if (this.filterAttrs[k]) {
        delete this.filterAttrs[k]
      }else{
        this.filterAttrs[k] = v
      }
      this.fetchData()
    },
    setPrice (v) {
      this.fedPrice = v
      this.fetchData()
    },
    setSort (e) {
      this.sortColumn = e.target.value
      this.fetchData()
    },
    fetchData () {
      fetch('/catalog/category/index?categoryId='+this.$route.params.id+'&sortColumn='+this.sortColumn+'&filterAttrs='+escape(JSON.stringify(this.filterAttrs))+'&filterPrice='+this.fedPrice)
        .then(res => res.json())
        .then(data => {
          if (data.code == '200') {
            this.productList = data.data
            this.products = data.data.products
            this.sort = data.data.query_item
            this.filter = data.data.filter_info
            this.filterPrice = data.data.filter_price.price
          } else {
            console.log(data.message)
          }
        })
    }
  },
  mounted  () {
    fetch('/catalog/category/index?categoryId='+this.$route.params.id)
      .then(res => res.json())
      .then(data => {
        if (data.code == '200') {
          this.productList = data.data
          this.products = data.data.products
          this.sort = data.data.query_item
          this.filter = data.data.filter_info
          this.filterPrice = data.data.filter_price.price
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
<style>
    .col-left .filter_attr_title{
        color: #000;
        text-align: left;
        font-size: 0.9em;
    }
    .filter_category_content ul li{
        color: #000;
        text-align: left;
    }
    .filter_attr_info{
        text-align: left;
    }
    /*.menu_category{*/
        /*display: flex;*/
    /*}*/
</style>
