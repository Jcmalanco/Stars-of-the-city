export class SotCActor extends Actor {
  prepareData() {
    super.prepareData();

    const data = this.system;
    if (data.hp) {
      data.hp.percent = Math.floor((data.hp.value / data.hp.max) * 100);
    }
  }
}