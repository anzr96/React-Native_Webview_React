import { screens } from "../screens/screens";

const HomeIcon = require("../../assets/images/bottom-tabs/home.png");

const tabList = [
  {
    stack: {
      children: [
        {
          component: {
            id: "HomeScreenId",
            name: screens.WebViewScreen,
            passProps: {
              tabIndex: 1,
              path: "/",
            },
          },
        },
      ],
      options: {
        bottomTab: {
          icon: HomeIcon,
        },
        topBar: {
          visible: false,
        },
        bottomTabs: {
          visible: true,
        },
      },
    },
  },
];

export const afterLoginLayout = {
  root: {
    sideMenu: {
      center: {
        bottomTabs: {
          id: "BottomTabsId",
          children: tabList,
          options: {
            bottomTabs: {
              currentTabIndex: tabList.length - 1,
            },
          },
        },
      },
    },
  },
};
