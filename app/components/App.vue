<template>
    <Page>
        <ActionBar title="Test title">
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>

        <RadSideDrawer ref="drawer">
            <StackLayout ~drawerContent backgroundColor="#2d394e">
                <Label class="drawer-header" text="Feeds"/>

                <Label class="drawer-item" text="All downloads" />
                <Label class="drawer-item active" text="Test feed" />
                <Label class="drawer-item" text="Music" />

                <TextField v-if="showFeedForm"
                           hint="Create feed" 
                           color="black" 
                           backgroundColor="white"
                           v-model="newFeed.name" />
                <Label v-if="!showFeedForm" class="show-feed-form" text="+" @tap="showFeedForm = true" />
                <Button v-else text="Create" @tap="createFeed()"></Button>

            </StackLayout>

            <GridLayout ~mainContent columns="*" rows="*">
                <Label class="message" :text="msg" col="0" row="0"/>
            </GridLayout>
        </RadSideDrawer>
    </Page>
</template>

<script lang="ts">
  // import SideDrawer from 'app/SideDrawer';

  export default {
    data() {
      return {
        msg: 'Hello love!',
        showFeedForm: false,
        newFeed: {
            name: '',
        },
      }
    },
    computed: {
      addFeedButtonText() {
          if (this.showFeedForm)
            return 'Create';
          else
            return 'Add feed';
      }
    },
    methods: {
      createFeed() {
          console.log(`Creating feed: ${this.newFeed.name}`);
          this.newFeed.name = '';
          this.showFeedForm = false;
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #222b3b;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header, .drawer-item {
        background-color: #2d394e;
        color: #ffffff;
    }

    .drawer-header {
        padding: 25 16 16 16;
        /* margin-bottom: 16; */
        font-size: 16;
        font-weight: bold;
        color: #AAA;
    }

    .drawer-item {
        padding: 8 16;
        font-size: 16;
    }

    .drawer-item.active {
        font-weight: bold;
    }

    .show-feed-form {
        text-align: center;
        font-size: 20;
        color: #FFFFFF;
        padding: 8 16;
    }
</style>
