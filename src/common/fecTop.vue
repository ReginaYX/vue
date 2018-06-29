<template>
    <div id="fecTop">
        <header id="header">
            <div id="top_main">
                <div class="top_main_inner pr">
                    <div class="top_header clearfix">
                        <div class="topSeachForm">
                            <form method="get" name="searchFrom" class="js_topSeachForm"
                                  action="http://appfront.fecshoptest.com/catalogsearch/index">
                                <div class="top_seachBox">
                                    <div class="searchInput fl">
                                        <input type="text" value="" maxlength="150" placeholder="搜索产品"
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
    </div>
</template>

<script>
export default {
  name: 'fecFooter',
  data () {
    return {
      menuData: null
    }
  },
  mounted () {
    fetch('/general/base/menu')
      .then(res => res.json())
      .then(data => {
        this.menuData = data
      })
  }
}
</script>

<style scoped>
</style>
