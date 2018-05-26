<template>
  <Frame>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="true" height="100%">
      <GridLayout columns="*,*,*" rows="auto, auto, auto" dock="bottom" height="60" class="tab">
        <StackLayout row="0" col="0" @tap="toggleTab(0)" :class="{'active': activeTab == 0}">
            <Label :text="String.fromCharCode(0xf234)"  class="fa"/>
            <Label text="Invite" row="1" col="0" class="subtab ro"/>
        </StackLayout>
        <StackLayout row="0" col="1" @tap="toggleTab(1)" :class="{'active': activeTab == 1}">
          <Label :text="String.fromCharCode(0xf2bd)" row="0" col="1" class="fa"/>
          <Label text="Profile" row="1" col="1" class="subtab"/>
        </StackLayout>
        <StackLayout row="0" col="2" @tap="toggleTab(2)" :class="{'active': activeTab == 2}">
          <Label :text="String.fromCharCode(0xf0c0)" row="0" col="2" class="fa"/>
          <Label text="Clients" row="1" col="2" class="subtab"/>
        </StackLayout>
      </GridLayout>
      <GridLayout dock="top" clipToBounds="false">
        <GridLayout class="background_gray" ref="background"></GridLayout>
        
        <StackLayout translateX="-1000" ref="AddClient">
          <Label text="Invite"></Label>
        </StackLayout>

        <StackLayout translateX="0" ref="Profile">
          <Label text="Profile"></Label>
          <Button @tap="nestedPage">Go to nested page without frame</Button>
        </StackLayout>

        <StackLayout translateX="1000" ref="NewClient">
          <Label text="Clients"></Label>
        </StackLayout>
      </GridLayout>
  </DockLayout>
</Page>
</Frame>
</template>

<script>

  // pages
  import Nested from "./nested";

  // tools
  import {screen} from "tns-core-modules/platform/platform"
  import * as enums from "tns-core-modules/ui/enums"

  export default {
    data () {
      return {
        activeTab: 1,
      };
    },

    components: {}, 

    mounted(){

    },

    methods: {
      toggleTab(index){
          var _self = this,
              width = screen.mainScreen.widthDIPs+(screen.mainScreen.widthDIPs*0.2),
              modulator = Math.abs(this.activeTab-index);

          this.activeTab = index;

          if(index == 0){
            _self.translateAnimation('AddClient', 0)
            _self.translateAnimation('Profile', width)
            _self.translateAnimation('NewClient', width)
          } else if(index == 1){
            _self.translateAnimation('AddClient', width*-1)
            _self.translateAnimation('Profile', 0)
            _self.translateAnimation('NewClient', width)
          } else if(index == 2){
            _self.translateAnimation('AddClient', width*-1)
            _self.translateAnimation('Profile', width*-1)
            this.translateAnimation('NewClient', 0)
          }
          // console.log(this.$refs.pager.$el._nativeView);
          // this.$refs.pager.nativeView.selectedIndex = index;
      },

      translateAnimation(elem, to){
        if(this.$refs[elem]){
          this.$refs[elem].nativeView.animate({
                translate: {x: to, y:0},
                duration: 300,
                curve: enums.AnimationCurve.easeInOut
              });
        }
      },

      nestedPage(){
        this.$navigateTo(Nested);
      }
    }
  };
</script>

<style scoped>
  .subtab
  {
    margin-top: 8px;
    font-size: 12px;
  }

  .fa
  {
    margin-top: 10px;
    font-size: 26px;
  }

  .subtab,
  .fa
  {
    color: #929292;
    text-align: center;
  }

  .active .fa,
  .active .subtab
  {
    color: #6dc068;
  }

  .tab
  {
    background: #f7f7f7;
  }
</style>