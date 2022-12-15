function enablePhotoUploud() {
  const imageInput = document.querySelector('#image_input') // lendo o display de imagem

  imageInput.addEventListener('change', function () {
    // evendo de trocar as imagens
    const reader = new FileReader() // chamando o leitor
    reader.addEventListener('load', () => {
      // adicionando o evento do leitor de imagem
      const uploadImage = reader.result // vai pegar o resultatdo do leitor para carregar a imagem

      document.querySelector(
        '#display_image'
      ).style.backgroundImage = `url(${uploadImage})`
    })

    reader.readAsDataURL(this.files[0]) // pegando a primeira imagem
  })
}

async function MapImageList() {
  // mapear as imagens
  const memesObject = [
    // constante para selecionar as imagens dos  memes.
    {
      name: 'negãosorrindo',
      path: 'assets/image/meme-3.jpg'
    },
    {
      name: 'nenemVitorioso',
      path: 'assets/image/meme-4.jpg'
    },
    {
      name: 'seumadrugaSusto',
      path: 'assets/image/meme-5.jpg'
    },
    {
      name: 'seumadrugaResmungando',
      path: 'assets/image/meme-6.jpg'
    },
    {
      name: 'seumadrugaAtor',
      path: 'assets/image/meme-7.jpg'
    },
    {
      name: 'gatoMalmorado',
      path: 'assets/image/meme-10.jpg'
    },
    {
      name: 'gta5reais',
      path: 'assets/image/meme-8.jpg'
    },
    {
      name: 'gtaSnobe',
      path: 'assets/image/meme-9.jpg'
    },
    {
      name: 'chloe',
      path: 'assets/image/meme-chloe2.jpg'
    }
  ]
  return memesObject
}

async function creatGallery(imageList) {
  // criar a galeria de imagens
  const memeSelector = document.querySelector('#meme_list')

  imageList.forEach(picture => {
    let newOption = document.createElement('option') //crianco uma nova opção
    newOption.text = picture.name.toUpperCase() // pegando o nome da imagem  e deixando nome maiusculo
    newOption.value = picture.path // pegando o camninho da imagem
    memeSelector.appendChild(newOption)
  })
}

async function chageMemePicture(photo) {
  // função para fazer a troca das imagens
  let displayImage = document.querySelector('#display_image')
  displayImage.style.backgroundImage = `url('${photo}')`
}

async function init() {
  // Função criada para chamar todas as funções

  const memesImageList = await MapImageList()
  enablePhotoUploud()
  await creatGallery(memesImageList)
  await chageMemePicture(memesImageList[1].path)
}

init() //Chamado função init
