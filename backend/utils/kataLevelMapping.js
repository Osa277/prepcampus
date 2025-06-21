function getKataLevel(userLevel) {
  if (userLevel >= 1 && userLevel <= 15) {
    return "8";
  } else if (userLevel >= 16 && userLevel <= 25) {
    return "7";
  } else if (userLevel >= 26 && userLevel <= 40) {
    return "6";
  } else if (userLevel >= 41 && userLevel <= 65) {
    return "5";
  } else if (userLevel >= 66 && userLevel <= 80) {
    return "4";
  } else if (userLevel >= 81 && userLevel <= 90) {
    return "3";
  } else if (userLevel >= 91 && userLevel <= 100) {
    return "2";
  } else if (userLevel > 100) {
    return "1";
  } else {
    return "Invalid Level";
  }
}

module.exports = getKataLevel;
