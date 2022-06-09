const { webkit } = require("playwright");
const fs = require("fs");

const RUTAS = ['[aria-controls="c1-h"]', '[aria-controls="id="]'];

async function Scrap() {
  let horarios = {
    Parana: [],
    SantaFe: [],
  };
  let id = 1;
  const browser = await webkit.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.paranaonline.com.ar/horarios-fluviales-etacer/");
  for (let ruts of RUTAS) {
    await page.click(`${ruts}`);
    await page.waitForSelector(`${ruts}`);
    const content = await page.evaluate((arg) => {
      const extract = document.getElementsByClassName("col-md-6");
      let newCad;

      if (arg === '[aria-controls="c1-h"]') {
        const parana1 = extract[0].innerText;
        const parana2 = extract[1].innerText;
        newCad = parana1
          .concat(parana2)
          .replace(/(D\s\/\sR)/g, "D/R")
          .replace(/\s/g, ",")
          .split(",");
      } else {
        const santafe1 = extract[2].innerText;
        const santafe2 = extract[3].innerText;
        newCad = santafe1
          .concat(santafe2)
          .replace(/(D\s\/\sR)/g, "D/R")
          .replace(/\s/g, ",")
          .split(",");
      }

      newCad = newCad.filter((item) => item !== "Horario");
      newCad = newCad.filter((item) => item !== "Empresa");
      newCad = newCad.filter((item) => item !== "Tipo");

      return newCad;
    }, ruts);
    console.log(content);
    let i = 0;
    do {
      let obj = {
        id: id++,
        Salida:
          ruts === '[aria-controls="c1-h"]' ? "Terminal de Paraná" : "Santa Fe",
        Horario: content[i],
        Empresa: content[i + 1],
        Tipo: content[i + 2],
      };

      ruts === '[aria-controls="c1-h"]'
        ? horarios.Parana.push(obj)
        : horarios.SantaFe.push(obj);
      i = i + 3;
    } while (i <= content.length);
    ruts === '[aria-controls="c1-h"]'
      ? horarios.Parana.pop()
      : horarios.SantaFe.pop();
  }

  await browser.close();

  fs.writeFile("horarios.json", JSON.stringify(horarios), (err) => {
    if (err) console.log(err);
  });
}

module.exports = Scrap();
