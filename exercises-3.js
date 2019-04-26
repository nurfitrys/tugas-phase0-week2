// Exercises 3 - Mengenal penggunaan Conditional if-else dalam JavaScript

var nama = 'Danu'
var peran = 'Tabib'

if (nama == '' && peran == '') {
  console.log('Nama harus diisi!')
}
else if (nama == 'Mikael' && peran == ''){
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
}
else if (nama == 'Nina' && peran == 'Ksatria') {
  console.log('Selamat datang di dunia Proxytia, ', +nama)
  console.log('Halo ' + peran, nama + ', kamu dapat menyerang dengan senjatamu!')
}
else if(nama == 'Danu' && peran == 'Tabib'){
  console.log('Selamat datang di dunia Proxytia, ' + nama)
  console.log('Halo ' + peran, nama + ', kamu akan membantu temanmu yang terluka')
}
else if (nama == 'Zero' && peran == 'Penyihir') {
  console.log('Selamat datang di dunia Proxytia ' + nama)
  console.log('Halo' + peran, nama + ', ciptakan keajaiban untuk membantu kemenanganmu')
}
else {
  console.log('Default')
}