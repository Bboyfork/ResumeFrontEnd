<template>
  <div id="view">
    <router-view></router-view>
    <div class="wrapper style1 align-center">
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502006046" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="../images/govLogo.png" style="float:left;"/>
          <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">粤公网安备&nbsp;44030502006046号</p>
        </a>
    </div>
  </div>
</template>

<script>
export default {
 name: 'demo'
}
</script>
<style>
@import url("../assets/css/main.css");
</style>
