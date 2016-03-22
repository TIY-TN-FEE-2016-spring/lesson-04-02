// 02-on-off

let on = true;

export default function () {
  if (on) {
    on = false;
    return `on`;
  }

  on = true;
  return `off`;
}
