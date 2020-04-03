import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Navigation } from "react-native-navigation";

import { afterLoginLayout } from "../../utils/afterLoginLayout";
import { beforeLoginLayout } from "../utils/beforeLoginLayout";

const InitialisingScreen: React.FC<any> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (isLoggedIn !== undefined) {
      if (isLoggedIn) {
        Navigation.setRoot(afterLoginLayout);
      } else {
        Navigation.setRoot(beforeLoginLayout);
      }
    }
  }, [isLoggedIn]);

  return <ActivityIndicator />;
};

export default InitialisingScreen;
