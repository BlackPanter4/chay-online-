// Bot automatizado para tu 8721551986
const RELOADLY_KEY = "TU_API_KEY_DE_RELOADLY";
const OPERADORES = {
  "Telcel": 174, "Movistar": 173, "AT&T": 171,
  "OXXO CEL": 174, "BAIT": 2135, "Unefon": 174
}

async function hacerRecarga(numero, monto, compania){
  const res = await fetch("https://topups.reloadly.com/topups", {
    method: "POST",
    headers: { "Authorization": "Bearer " + RELOADLY_KEY, "Content-Type":"application/json" },
    body: JSON.stringify({
      operatorId: OPERADORES[compania],
      amount: monto,
      useLocalAmount: true,
      customIdentifier: "luchanas-"+numero,
      recipientPhone: { countryCode: "MX", number: numero }
    })
  });
  return await res.json();
}
// Cuando te llegue pedido de tu web, llamas a hacerRecarga()