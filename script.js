const kalimatPertanyaan = document.querySelector('#pertanyaan');
const kalimatJawaban = document.querySelector('#jawaban');
const lihatJam = document.querySelector('#jamDigital');
const lihatTanggal = document.querySelector('#tanggal');
let tanya = document.querySelector('#tanya');
let jawab = document.querySelector('#jawab');

function tanyain() {
  kalimatPertanyaan.innerHTML = tanya.value + ' ?';
  tanya.value = null;
}

function jawabin() {
  kalimatJawaban.innerHTML = jawab.value + ' !';
  jawab.value = null;
}

function jamDigital() {
  const date = new Date();
  let jam = date.getHours();
  let menit = date.getMinutes();
  let detik = date.getSeconds();
  const tanggal = date.getDate();
  const hari = date.toLocaleDateString('id-id', {weekday: 'long'})
  const bulan = date.toLocaleDateString('id-id', {month: 'long'});
  const tahun = date.getFullYear();
  function cekDigit(i) {
    if (i < 10) {
      i = '0'+ i
    };
    return i
  }

  menit = cekDigit(menit);
  detik = cekDigit(detik);
  
  lihatTanggal.innerHTML = `${hari}, ${tanggal} ${bulan} ${tahun}`
  lihatJam.innerHTML = `${jam}:${menit}:${detik}`
  setInterval(jamDigital, 1000);
}