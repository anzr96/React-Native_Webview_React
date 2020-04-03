import { initialScreens } from "../screens/screens";

export const beforeLoginLayout = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: initialScreens.OnboardingScreen,
          },
        },
      ],
    },
  },
};
