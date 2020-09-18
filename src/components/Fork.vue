<template>
  <div id="wrapper" class="divided">
  	<!-- One -->
  		<section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
  			<div class="content">
  				<h1>JAVA</h1>
          <p class="major">Make progress | Enrich myself | Enjoy life</p>
  				<p>
            Pursuing enrichment is the most important thing in a insipid life.<br>
            That hot afternoon, in front of the old computer.<br>
            The first time when the playful teenager broke the code.<br>
            Starting with the first 'helloWorld'.<br>
            The future is setted as a wonderful trajectory.
          </p>
          <p class="major">日有所进，终能衣锦还乡 -- I said！</p>
  			</div>
  			<div class="image">
  				<img src="../images/4AA6733D28DE007C0B547F04C5BC7843.png" alt="" />
  			</div>
  		</section>

  	<!-- Two -->
  		<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
  			<div class="content">
  				<h2>YOUNG</h2>
  				<p class="major">Juvenility? &nbsp;&nbsp;Inexperience? &nbsp;&nbsp;Undependable?&nbsp;&nbsp;Oh no!<br>Enjoy working? &nbsp;&nbsp;Yes!</p>
          <p>互联网行业圈，加班算事？<br>下班又无事可做<br>不加班就没有学习的目标，这才会让人心焦<br> 是兄弟就请给我派活！</p>
          <p>摄于2018.12.27 1:00 冰城冬夜的冷风中</p>
        </div>
  			<div class="image">
  				<img src="../images/69A9153DE0B7947E47897034DC5E2C30.png" alt="" />
  			</div>
  		</section>

  	<!-- Three -->
  		<section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
  			<div class="content">
  				<h2>学习！</h2>
  				<p>
            这其实是我第一次设计页面<br>
            不再有UI小姐姐递过来的模板后,<br>
            这第一步迈下的都变得艰难;<br>
            很多方案的筛选实现,<br>
            决定使用这样简约一点的风格;
            问我原因？
            emmm...像我吧
            </p>
  			</div>
  			<div class="image">
  				<img src="../images/EEAF379C1B67BEA836DEB3D549B528B9.png" alt="" />
  			</div>
  		</section>

  	<!-- Four -->
  		<section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
  			<div class="content">
  				<h2>DJ&Bboy_FORK</h2>
          <p>
            五年的舞龄教会我很多<br>
            不止是技巧和热爱<br>
            很荣幸认识你 --hiphop<br>
            听过peace&love 或许还有 respect；在我这儿？ HAVE FUN！fun就完了
          </p>
<!--          <ul class="actions vertical">
          	<li><a href="#" class="button">点我！了解更多</a></li>
          </ul> -->
  			</div>
  			<div class="image">
  				<img src="../images/9539F26950530753905FE61DD7DEEC08.png" alt="" />
  			</div>
  		</section>



  	<!-- Six -->
  		<section class="wrapper style1 align-center">
  			<div class="inner">
  				<h2>欢迎来到田羽晋的个人简历网站</h2>
  				<p>求职意向：JAVA工程师 <br>年龄：23<br>学历：本科 <br>物联网工程</p>
  				<div class="items style1 medium onscroll-fade-in">
  					<section>
  						<span @click='downFile()' class="icon style2 major fa-save" v-cloak></span>
  						<h3>下载简历</h3>
  						<p>详细了解，约个面试吧~</p>
  					</section>
  					<section>
  						<span class="icon style2 major fa-leaf"></span>
  						<h3>java&springboot</h3>
  						<p>快进来指导一下我的技术方面</p>
              <p>抱歉，我还没想好怎么展示这个暂时没有</p>
  					</section>

  				</div>
  			</div>
  		</section>

  	<!-- Footer -->
  		<footer class="wrapper style1 align-center">
  			<div class="inner">
  				<ul class="icons">
  					<li><a @click='copyTXT("15765519493")' class="icon style2 fa-phone"><span class="label">phone</span></a></li>
  					<li><a @click='copyTXT("1339364481@qq.com")' class="icon style2 fa-envelope"><span class="label">e-mail</span></a></li>
            <li><a @click='copyTXT("https://www.facebook.com/bboyfork")' class="icon style2 fa-facebook"><span class="label">Facebook</span></a></li>
  				</ul>
  				<p>到底了！后续内容，后续开发！</p>
  			</div>

  		</footer>
  </div>
</template>
<script>

  function selectText(textbox, startIndex, stopIndex){
    if (textbox.createTextRange) {//ie
      const range = textbox.createTextRange();
      range.collapse(true);
      range.moveStart('character', startIndex);//起始光标
      range.moveEnd('character', stopIndex - startIndex);//结束光标
      range.select();//不兼容苹果
    }else {//firefox/chrome
      textbox.setSelectionRange(startIndex, stopIndex);
      textbox.focus();
    }
  }

  export default {
    name: 'Fork',
    data(){
      return {
        msg: 'Fork简历页面'
      }
    },
    methods:{
      downFile(){
        window.open("http://bboyfork.icu/resumeHome/getResume");
        //window.open("http://localhost:8081/resumeHome/getResume");
      },
      copyTXT(str){
        //ios兼容性待测试 但应该是好使了 pc浏览器已支持
        var input = document.createElement("input");
        if(!input){
          input.id = "copy-input";
          input.readOnly = "readonly";
        }
        input.value = str;
        document.body.appendChild(input);
        selectText(input, 0,str.length);
        document.execCommand('Copy');
        document.body.removeChild(input);
        alert("已复制");
      }
    }
  }

</script>

<style scoped>
</style>
