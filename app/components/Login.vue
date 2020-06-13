<template>
<Page>
  <ActionBar>
    <GridLayout width="100%" columns="auto, *">
      <Label class="title" text="Sign in"  col="1"/>
    </GridLayout>
  </ActionBar>

  <StackLayout>
    <Label class="form-label"
           text="Email"
           />
    <TextField v-model="form.email"
               keyboardType="email"
               hint="you@example.com"
               />
    <Label class="form-label"
           text="Password"
           />
    <TextField v-model="form.password"
               :secure="true"
               />
    <Button text="Sign in"
            @tap="signIn()"
            :isEnabled="!busy"
            class="-primary"
            />
    <TextView v-model="statusText"
              v-if="statusText"
              :editable="false"
              />
  </StackLayout>
</Page>
</template>

<script lang="ts">
const appSettings = require("tns-core-modules/application-settings");
import queries from '~/queries';
import routes from '~/routes';

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            busy: false,
            statusText: '',
        }
    },
    methods: {
        signIn() {
            this.busy = true;
            this.statusText = "Signing in..."

            this.$apollo.mutate({
                mutation: queries.signIn,
                variables: this.form,
                fetchPolicy: 'no-cache',
            }).then(({ data: { signIn: { success, authenticationToken } } }) => {
                if (success) {
                    console.log(success, authenticationToken);
                    this.statusText = "Signed in successfully!";
                    appSettings.setString("authenticationToken", authenticationToken);
                    this.$store.commit('authenticated');
                    this.$navigateTo(routes.root);
                } else {
                    this.statusText = "Wrong email or password."
                }
            }).catch(e => {
                this.statusText = e.toString();
            }).finally(() => {
                this.busy = false;
            });
        },
    },
    mounted() {
        // this.request();
    }
}
</script>

<style scoped>
.connect-button {
  vertical-align: center;
  text-align: center;
  font-size: 30;
  color: #333333;
}
</style>
