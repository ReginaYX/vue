<template>
    <div>
        <div class="std">
            <div style="margin:4px 0 0">
                <div class="page-title" style="text-align: left;">
                    <h2>编辑账号信息</h2>
                </div>
                <form method="post" id="form-validate" autocomplete="off" action="http://fecshop.appfront.fancyecommerce.com/cn/customer/editaccount">
                    <input class="thiscsrf" type="hidden" value="hJ2F2am6afQazIcDVncB2jOGJLpTf4fTpd6H8zO0O7bV88C7zPcZkm6L4VYdFDHqe89X6RE85bX0jdDESuEO6Q==" name="_csrf">					<div class="">
                    <ul class="" style="text-align: left;">
                        <li>
                            <label for="customer_email" class="required">邮箱地址</label>
                            <div class="input-box" v-if="info">
                                <input style="color:#ccc;" readonly="true" id="customer_email" name="editForm[email]" :value="info.email" title="Email" maxlength="255" class="input-text required-entry" type="text">
                            </div>
                        </li>
                        <li class="">
                            <div class="field name-firstname" v-if="info">
                                <label for="firstname" class="required">名</label>
                                <div class="input-box">
                                    <input id="firstname" name="editForm[firstname]" :value="info.firstname" title="First Name" maxlength="255" class="input-text required-entry" type="text">
                                    <div class="validation-advice" id="required_current_firstname" style="display:none;">这是一个必填选项</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="field name-lastname" v-if="info">
                                <label for="lastname" class="required">姓</label>
                                <div class="input-box">
                                    <input id="lastname" name="editForm[lastname]" :value="info.lastname" title="Last Name" maxlength="255" class="input-text required-entry" type="text">
                                    <div class="validation-advice" id="required_current_lastname" style="display:none;">这是一个必填选项</div>
                                </div>
                            </div>
                        </li>
                        <li class="control">
                            <input name="editForm[change_password]" id="change_password" value="1" @click="passwordShow" title="Change Password" class="checkbox" type="checkbox">
                            <label style="display:inline;" for="change_password">更改密码</label>
                        </li>
                    </ul>
                </div>

                    <div class="" id="fieldset_pass" v-if="password">

                        <ul class="form-list" style="text-align: left">
                            <li>
                                <label style="font-weight:100;" for="current_password" class="required">当前密码</label>
                                <div class="input-box">
                                    <input title="Current Password" class="input-text required-entry" name="editForm[current_password]" id="current_password" type="password">
                                    <div class="validation-advice" id="required_current_password" style="display:none;">这是一个必填选项</div>
                                </div>
                            </li>
                            <li class="fields">
                                <div class="field">
                                    <label style="font-weight:100;" for="password" class="required">新密码</label>
                                    <div class="input-box">
                                        <input title="New Password" class="input-text validate-password required-entry" name="editForm[password]" id="password" type="password">
                                        <div class="validation-advice" id="required_new_password" style="display:none;">这是一个必填选项</div>
                                    </div>
                                </div>
                                <div class="field">
                                    <label style="font-weight:100;" for="confirmation" class="required"><em>*</em>确认新密码</label>
                                    <div class="input-box">
                                        <input title="Confirm New Password" class="input-text validate-cpassword required-entry" name="editForm[confirmation]" id="confirmation" type="password">
                                        <div class="validation-advice" id="required_confirm_password" style="display:none;">这是一个必填选项</div>
                                    </div>
                                </div>
                                <div class="clear"></div>
                            </li>
                        </ul>
                    </div>
                    <div class="buttons-set">
                        <button type="submit" title="Save" class="button" onclick="return check_edit()"><span><span>提交</span></span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import fecHeader from '../../common/fecHeader'
import fecFooter from '../../common/fecFooter'
import fecFooterFix from '../../common/fecFooterFix'
import fecTop from '../../common/fecTop'
import axios from 'axios'

export default {
  name: 'mine',
  components: {fecHeader, fecFooter, fecFooterFix, fecTop},
  data () {
    return {
      info: null,
      password: false
    }
  },
  methods: {
    submit: function () {
      // var form = document.querySelector('form')
      // var form = JSON.stringify(this.formData)
      axios({
        method: 'post',
        url: '/customer/login/account',
        data: this.formData,
        transformRequest: [function (data) {
          let str = ''
          for (let k in data) {
            str += k + '=' + data[k] + '&'
          }
          return str.split(0, -1)
        }]
      }).then((res) => {
        if (res.data.code == 200) {
          localStorage.access = res.headers['access-token']
          localStorage.uuid = res.headers['fecshop-uuid']
          this.$router.go(-1)
        } else {
          alert(res.data.message)
        }
      })
    },
    passwordShow () {
      this.password = !this.password
    }
  },
  mounted  () {
    fetch('/customer/editaccount', {
      headers: {
        'access-token': localStorage.access ? localStorage.access : '',
        'fecshop-uuid': localStorage.uuid ? localStorage.uuid : ''
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.code == '200') {
          this.info = data.data
        } else {
          alert(data.message)
        }
      })
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
