<template lang="pug">
  .login-section.d-flex.justify-content-center.align-items-center.flex-column
    LoadingPage(:isLoading="isLoading")
    #login-logo.login-logo(v-dragged="onDragged" title="可以拖曳唷!")
    #login-bg.login-bg(v-dragged="onDragged" title="視窗可以拖曳唷!")
      form(@submit.prevent='signin')
        label.lable-name(for='email')
        input#email(type='email', required='', autofocus='', v-model='user.username')
        label.lable-password(for='password')
        input#password(type='password', required='', v-model='user.password')
        label.lable-saved(for='saved')
        input#saved(type='checkbox' v-model="saved")
        button#musicPlay.btn-play(type='button', @click='musicStatus()')
          | stop
        button.btn-login(type='submit')
          | 登入
        router-link(:to="{name:'Index'}")
          button.btn-end
            | 結束
    AlertMessage
    audio#roBGM(loop='', muted='', webkit-playsinline='true', playsinline='true')
      source(src='https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/01.mp3', type='audio/mpeg')
</template>

<style lang="scss" scoped>
.login-section {
  height: 100vh;
  background-image: url(../assets/img/RTC_1920_1080.jpg);
  background-position: center top;
  position: relative;
  cursor: url(../assets/img/normal_select.png), auto;
}
.login-logo{
  position: absolute;
  top: 20%;
  left: 30%;
  background-image: url(../assets/img/logo.png);
  background-position: center center;
  background-repeat: no-repeat;
  width: 202px;
  height: 130px;
}
.login-bg{
  height: 120px;
  width: 280px;
  background-image: url(../assets/img/login.png);
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 5px;
  position: absolute;
  bottom: 25%;
  #email{
    position: absolute;
    width: 130.5px;
    height: 19px;
    left: 32.4%;
    top: 24%;
    border: 0px;
    border: 1px solid #b9b8b8;
    font-size: 12px;
  }
  #password{
    position: absolute;
    width: 130.5px;
    height: 19px;
    left: 32.4%;
    top: 51%;
    border: 0px;
    border: 1px solid #b9b8b8;
    font-size: 12px;
  }
  #saved{
    position: absolute;
    right: 13%;
    top: 27%;
  }
  .lable-name{
    position: absolute;
    top: 23%;
    left: 22.5%;
    width: 20px;
    height: 20px;
    cursor: url(../assets/img/link_select.png), auto;
  }
  .lable-password{
    position: absolute;
    top: 49.5%;
    left: 4.5%;
    width: 74px;
    height: 20px;
    cursor: url(../assets/img/link_select.png), auto;
  }
  .lable-saved {
    position: absolute;
    top: 23%;
    right: 4.5%;
    width: 23px;
    height: 20px;
    cursor: url(../assets/img/link_select.png), auto;
  }
  .btn-login{
    position: absolute;
    bottom: 3%;
    right: 17.5%;
    width: 42px;
    font-size: 12px;
    height: 21px;
    border-radius: 5px;
    border: 0px;
    box-shadow: 0px 0px 2px #000;
    background-color: #eae8e8;
    font-weight: bold;
    cursor: url(../assets/img/link_select.png), auto;
  }
  .btn-end{
    position: absolute;
    bottom: 3%;
    right: 1.5%;
    width: 42px;
    font-size: 12px;
    height: 21px;
    border-radius: 5px;
    border: 0px;
    box-shadow: 0px 0px 2px #000;
    background-color: #eae8e8;
    font-weight: bold;
    cursor: url(../assets/img/link_select.png), auto;
  }
  .btn-play{
    position: absolute;
    font-size: 12px;
    bottom: 3.5%;
    left: 3%;
    width: 56px;
    height: 20px;
    border-radius: 3px;
    border: 0px;
    box-shadow: 0px 0px 2px #000;
    background-color: #eae8e8;
    cursor: url(../assets/img/link_select.png), auto;
  }
}
</style>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';
import LoadingPage from '@/components/shared/LoadingPage.vue';
import AlertMessage from '@/components/shared/AlertMessage.vue';

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      saved: true,
    };
  },
  methods: {
    signin() {
      const vm = this;
      if(vm.saved){
        localStorage.setItem('saveAccount', JSON.stringify(vm.user.username));
      }
      vm.$store.dispatch('signin', vm.user);
    },
    autoPlayMusic() {
      const roBGM = document.getElementById('roBGM');
      if (roBGM.paused) {
        roBGM.play();
        roBGM.volume = 0.2;
      }
    },
    musicStatus() {
      const musicPlay = document.getElementById('musicPlay');
      const roBGM = document.getElementById('roBGM');
      if (roBGM.paused) {
        roBGM.play();
        musicPlay.innerHTML = 'stop';
      } else {
        roBGM.pause();
        musicPlay.textContent = 'play';
      }
    },
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first) {
        this.isDragging = true
        return
      }
      if (last) {
        this.isDragging = false
        return
      }
      var l = +window.getComputedStyle(el)['left'].slice(0, -2) || 0
      var t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0
      el.style.left = l + deltaX + 'px'
      el.style.top = t + deltaY + 'px'
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  components: {
    LoadingPage,
    AlertMessage,
  },
  mounted() {
    const vm = this;
    vm.autoPlayMusic();
    vm.user.username = JSON.parse(localStorage.getItem('saveAccount')) || '';
  },
};
</script>
