while (true) {
    if (getServerSecurityLevel("hong-fang-tea") > getServerMinSecurityLevel("hong-fang-tea")) {
     weaken("hong-fang-tea");
    } else if (getServerMoneyAvailable("hong-fang-tea") < getServerMaxMoney("hong-fang-tea")) {
     grow("hong-fang-tea");
    } else {
     hack("hong-fang-tea");
    }
  }
