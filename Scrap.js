const { webkit } = require("playwright");
const fs = require("fs");

const DAYS = ['[href="#habiles"]', '[href="#sabado"]', '[href="#domingo"]'];

async function Scrap() {
  let newHorarios = {
    Habiles: {},
    Sabados: {},
    Domingos: {},
  };

  let id = 1;
  const browser = await webkit.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.paranaonline.com.ar/horarios-fluviales-etacer/");
  for (let i = 0; i < DAYS.length; i++) {
    let horarios = {
      Parana: [],
      SantaFe: [],
    };
    await page.click(`${DAYS[i]}`);

    let RUTAS = [];
    const RUTASH = ['[href="#c1-h"]', '[href="#c2-h"]'];
    const RUTASS = ['[href="#c1-s"]', '[href="#c2-s"]'];
    const RUTASD = ['[href="#c1-d"]', '[href="#c2-d"]'];

    i === 0 ? (RUTAS = RUTASH) : i === 1 ? (RUTAS = RUTASS) : (RUTAS = RUTASD);

    for (let ruts of RUTAS) {
      await page.click(`${ruts}`);
      await page.waitForSelector(`${ruts}`);
      console.log(ruts);
      await page.waitForTimeout(100);
      // await page.waitForSelector('[aria-expanded="true"]');
      const content = await page.evaluate((arg) => {
        const extract = document.getElementsByClassName("col-md-6");
        let newCad, cad1, cad2;
        if (arg === '[href="#c1-h"]') {
          cad1 = extract[0].innerText;
          cad2 = extract[1].innerText;
        } else if (arg === '[href="#c2-h"]') {
          cad1 = extract[2].innerText;
          cad2 = extract[3].innerText;
        } else if (arg === '[href="#c1-s"]') {
          cad1 = extract[4].innerText;
          cad2 = extract[5].innerText;
        } else if (arg === '[href="#c2-s"]') {
          cad1 = extract[6].innerText;
          cad2 = extract[7].innerText;
        } else if (arg === '[href="#c1-d"]') {
          cad1 = extract[8].innerText;
          cad2 = extract[9].innerText;
        } else if (arg === '[href="#c2-d"]') {
          cad1 = extract[10].innerText;
          cad2 = extract[11].innerText;
        }

        newCad = cad1
          .concat(cad2)
          .replace(/(D\s\/\sR)/g, "D/R")
          .replace(/\s/g, ",")
          .split(",");

        newCad = newCad.filter((item) => item !== "Horario");
        newCad = newCad.filter((item) => item !== "Empresa");
        newCad = newCad.filter((item) => item !== "Tipo");

        return newCad;
      }, ruts);
      console.log(content);
      console.log(content.length);
      let j = 0;
      do {
        let obj = {
          id: id++,
          Salida:
            ruts === '[href="#c1-h"]' ||
            ruts === '[href="#c1-s"]' ||
            ruts === '[href="#c1-d"]'
              ? "Terminal de Paraná"
              : "Santa Fe",
          Horario: content[j],
          Empresa: content[j + 1],
          Tipo: content[j + 2],
        };

        ruts === '[href="#c1-h"]' ||
        ruts === '[href="#c1-s"]' ||
        ruts === '[href="#c1-d"]'
          ? horarios.Parana.push(obj)
          : horarios.SantaFe.push(obj);
        j = j + 3;
      } while (j <= content.length);
      ruts === '[href="#c1-h"]' ||
      ruts === '[href="#c1-s"]' ||
      ruts === '[href="#c1-d"]'
        ? horarios.Parana.pop()
        : horarios.SantaFe.pop();
    }

    if (i === 0) {
      newHorarios.Habiles = {
        Parana: horarios.Parana,
        SantaFe: horarios.SantaFe,
      };
    } else if (i === 1) {
      newHorarios.Sabados = {
        Parana: horarios.Parana,
        SantaFe: horarios.SantaFe,
      };
    } else {
      newHorarios.Domingos = {
        Parana: horarios.Parana,
        SantaFe: horarios.SantaFe,
      };
    }
  }

  await browser.close();

  fs.writeFile("horarios.json", JSON.stringify(newHorarios), (err) => {
    if (err) console.log(err);
  });
}

module.exports = Scrap();
