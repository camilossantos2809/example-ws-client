import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
  iconfont: "md"
});

export default new Vuetify({
  theme: {
    primary: colors.indigo.darken4,
    secondary: colors.indigo.lighten1,
    accent: colors.indigo.accent1,
    error: colors.red.accent2,
    info: colors.blue.darken1,
    success: colors.green.darken3,
    warning: colors.amber.lighten2
  },
  icons: { iconfont: "mdi" }
});
