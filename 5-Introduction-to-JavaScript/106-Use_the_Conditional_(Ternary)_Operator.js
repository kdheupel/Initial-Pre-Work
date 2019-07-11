usedthe conditional operator instead of an if/else statement; needed to use == instead of = to work

function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);
checkEqual(1, 1);
checkEqual(1, -1);
