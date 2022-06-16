import horarios from "../horarios.json";

export default function setNewStops() {
  let date = new Date();
  let hour = date.toLocaleTimeString().slice(0, 5);
  console.log(date.getDay());

  let parana, santaFe;
  if (date.getDay() === 0) {
    parana = horarios.Domingos.Parana.filter((item) => item.Horario >= hour);
    santaFe = horarios.Domingos.SantaFe.filter((item) => item.Horario >= hour);
  } else if (date.getDay() === 6) {
    parana = horarios.Sabados.Parana.filter((item) => item.Horario >= hour);
    santaFe = horarios.Sabados.SantaFe.filter((item) => item.Horario >= hour);
  } else {
    parana = horarios.Habiles.Parana.filter((item) => item.Horario >= hour);
    santaFe = horarios.Habiles.SantaFe.filter((item) => item.Horario >= hour);
  }

  parana = parana.slice(0, 3);
  santaFe = santaFe.slice(0, 3);

  if (date.getDay() === 6) {
    parana.length === 3
      ? (parana = parana)
      : parana.length === 2
      ? parana.push(horarios.Domingos.Parana[0])
      : parana.push(horarios.Domingos.Parana[0], horarios.Domingos.Parana[1]);

    santaFe.length === 3
      ? (santaFe = santaFe)
      : santaFe.length === 2
      ? santaFe.push(horarios.Domingos.SantaFe[0])
      : santaFe.push(
          horarios.Domingos.SantaFe[0],
          horarios.Domingos.SantaFe[1]
        );
  } else if (date.getDay() === 5) {
    parana.length === 3
      ? (parana = parana)
      : parana.length === 2
      ? parana.push(horarios.Sabados.Parana[0])
      : parana.push(horarios.Sabados.Parana[0], horarios.Sabados.Parana[1]);

    santaFe.length === 3
      ? (santaFe = santaFe)
      : santaFe.length === 2
      ? santaFe.push(horarios.Sabados.SantaFe[0])
      : santaFe.push(horarios.Sabados.SantaFe[0], horarios.Sabados.SantaFe[1]);
  } else {
    parana.length === 3
      ? (parana = parana)
      : parana.length === 2
      ? parana.push(horarios.Habiles.Parana[0])
      : parana.push(horarios.Habiles.Parana[0], horarios.Habiles.Parana[1]);

    santaFe.length === 3
      ? (santaFe = santaFe)
      : santaFe.length === 2
      ? santaFe.push(horarios.Habiles.SantaFe[0])
      : santaFe.push(horarios.Habiles.SantaFe[0], horarios.Habiles.SantaFe[1]);
  }

  return parana.concat(santaFe);
}
