<template>
    <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="#2d394e">
            <Label class="drawer-header" text="Feeds"/>

            <Label class="drawer-item" text="Item 1"/>
            <Label class="drawer-item" text="Item 2"/>
            <Label class="drawer-item" text="Item 3"/>
            <TextField v-if="showFeedForm"
                        hint="Create feed" 
                        color="black" 
                        backgroundColor="white"
                        v-model="newFeed.name" />
            <Button v-if="!showFeedForm" text="Add feed" @tap="showFeedForm = true"></Button>
            <Button v-else text="Create" @tap="createFeed()"></Button>
        </StackLayout>

        <GridLayout ~mainContent columns="*" rows="*">
            <Label class="message" :text="msg" col="0" row="0"/>
        </GridLayout>
    </RadSideDrawer>
</template>

<script lang="ts">
  export default {
    data() {
      return {
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
</style>
