import horarios from "../horarios.json";

export default function setNewStops() {
  let d = new Date().toLocaleTimeString().slice(0, 5);
  let parana = horarios.Parana.filter((item) => item.Horario >= "23:00");
  let santaFe = horarios.SantaFe.filter((item) => item.Horario >= d);

  parana = parana.slice(0, 3);
  santaFe = santaFe.slice(0, 3);

  parana.length === 3
    ? (parana = parana)
    : parana.length === 2
    ? parana.push(horarios.Parana[0])
    : parana.push(horarios.Parana[0], horarios.Parana[1]);

  santaFe.length === 3
    ? (santaFe = santaFe)
    : santaFe.length === 2
    ? santaFe.push(horarios.SantaFe[0])
    : santaFe.push(horarios.SantaFe[0], horarios.SantaFe[1]);

  return parana.concat(santaFe);
}
