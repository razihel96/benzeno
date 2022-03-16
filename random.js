

file_array = [
  'index_airbag.html',
  'index_flour.html',
  'index_molecule.html',
  'index_pepper.html',
  'index_soap.html'
]

function get_random_file() {
  random_index = Math.floor(Math.random()*file_array.length);

  file_selezionato = file_array[random_index];

  document.getElementById('file') = ${file_selezionato};
}
