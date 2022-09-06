import setNewStops from "./setNewStops";

export default function setHour(reset, newHorarios) {
  let d = new Date().toLocaleTimeString().slice(0, 5);
  const k = 0;
  // j = 3;
  let tiempo = 0;

  if (
    newHorarios[k].Horario.slice(0, 2) > d.slice(0, 2)
    // newHorarios[j].Horario.slice(0, 2) > d.slice(0, 2)
  ) {
    tiempo = (60 - d.slice(3)) * 60000;
    // let tiempo2 = (60 - d.slice(3)) * 60000;
    // if (tiempo2 < tiempo) tiempo = tiempo2;
    if (tiempo === 0) {
      tiempo = 20000;
    }
    setTimeout(() => {
      reset();
    }, tiempo);
  } else {
    tiempo = (newHorarios[k].Horario.slice(3) - d.slice(3)) * 60000;
    // let tiempo2 = (newHorarios[j].Horario.slice(3) - d.slice(3)) * 60000;
    // if (tiempo2 < tiempo) tiempo = tiempo2;
    if (tiempo === 0) {
      tiempo = 20000;
    }
    setTimeout(() => {
      reset();
    }, tiempo);
  }

  return tiempo
}
