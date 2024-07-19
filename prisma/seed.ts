import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const covenants = [
    {
      cnpj: '00.354.249/0001-03',
      name: 'CESAR ANTONIO DE MORAES E CIA LTDA',
      slug: '00-354-249-0001-03-cesar-antonio-de-moraes-e-cia-ltda',
    },
    {
      cnpj: '00.830.456/0001-89',
      name: 'IRMAOS FIORENTIN',
      slug: '00-830-456-0001-89-irmaos-fiorentin',
    },
    {
      cnpj: '01.468.490/0001-18',
      name: 'R T RIBEIRO DIAS',
      slug: '01-468-490-0001-18-r-t-ribeiro-dias',
    },
    {
      cnpj: '01.934.557/0001-62',
      name: 'FARMACIA WERNER LTDA',
      slug: '01-934-557-0001-62-farmacia-werner-ltda',
    },
    {
      cnpj: '02.035.980/0001-93',
      name: 'MOSCON & CIA LTDA',
      slug: '02-035-980-0001-93-moscon-e-cia-ltda',
    },
    {
      cnpj: '02.042.206/0001-00',
      name: 'JA COMERCIO DE MEDICAMENTOS LTDA',
      slug: '02-042-206-0001-00-ja-comercio-de-medicamentos-ltda',
    },
    {
      cnpj: '02.072.540/0001-06',
      name: 'FARMACIA VERDE VIDA LTDA',
      slug: '02-072-540-0001-06-farmacia-verde-vida-ltda',
    },
    {
      cnpj: '02.626.780/0001-05',
      name: 'R S S SANTANA & CIA',
      slug: '02-626-780-0001-05-r-s-s-santana-e-cia',
    },
    {
      cnpj: '03.132.376/0001-48',
      name: 'FARMACIA HONDA LTDA',
      slug: '03-132-376-0001-48-farmacia-honda-ltda',
    },
    {
      cnpj: '03.940.344/0001-79',
      name: 'SCALDELAI E FEDATTO LTDA',
      slug: '03-940-344-0001-79-scaldelai-e-fedatto-ltda',
    },
    {
      cnpj: '07.790.043/0001-67',
      name: 'FARMACIA ITO E TERRA',
      slug: '07-790-043-0001-67-farmacia-ito-e-terra',
    },
    {
      cnpj: '07.863.379/0001-02',
      name: 'RPP COMERCIO DE MEDICAMENTOS',
      slug: '07-863-379-0001-02-rpp-comercio-de-medicamentos',
    },
    {
      cnpj: '08.065.638/0001-12',
      name: 'SILVIA A. T. PREZOTO',
      slug: '08-065-638-0001-12-silvia-a-t-prezoto',
    },
    {
      cnpj: '09.722.736/0001-48',
      name: 'RBS FARMACIA',
      slug: '09-722-736-0001-48-rbs-farmacia',
    },
    {
      cnpj: '10.703.555/0001-53',
      name: 'RK NISHIGATA',
      slug: '10-703-555-0001-53-rk-nishigata',
    },
    {
      cnpj: '10.794.663/0001-89',
      name: 'DROGARIA COCO, HERCULIS E DA COSTA',
      slug: '10-794-663-0001-89-drogaria-coco-herculis-e-da-costa',
    },
    {
      cnpj: '11.372.803/0001-93',
      name: 'HANSEN & MOTA',
      slug: '11-372-803-0001-93-hansen-e-mota',
    },
    {
      cnpj: '11.715.715/0001-47',
      name: 'NANDI & SIMON',
      slug: '11-715-715-0001-47-nandi-e-simon',
    },
    {
      cnpj: '12.678.433/0001-80',
      name: 'FARMACIA RF LTDA',
      slug: '12-678-433-0001-80-farmacia-rf-ltda',
    },
    {
      cnpj: '13.557.757/0001-22',
      name: 'FARMACIA PRECO JUSTO JK',
      slug: '13-557-757-0001-22-farmacia-preco-justo-jk',
    },
    {
      cnpj: '13.704.386/0001-64',
      name: 'FARMAFRAN COMERCIO DE MEDICAMENTOS',
      slug: '13-704-386-0001-64-farmafran-comercio-de-medicamentos',
    },
    {
      cnpj: '13.942.109/0001-90',
      name: 'CS COMERCIO DE PRODUTOS FARMACEUTICOS',
      slug: '13-942-109-0001-90-cs-comercio-de-produtos-farmaceuticos',
    },
    {
      cnpj: '15.519.931/0001-78',
      name: 'RAUBER E MAFFINI',
      slug: '15-519-931-0001-78-rauber-e-maffini',
    },
    {
      cnpj: '17.335.898/0001-51',
      name: 'FARMÁCIA SANTA FARMA LTDA',
      slug: '17-335-898-0001-51-farmacia-santa-farma-ltda',
    },
    {
      cnpj: '17.798.934/0001-13',
      name: 'MANSO E COSTA LTDA',
      slug: '17-798-934-0001-13-manso-e-costa-ltda',
    },
    {
      cnpj: '18.219.058/0001-96',
      name: 'M R MOTA & CIA LTDA ME',
      slug: '18-219-058-0001-96-m-r-mota-e-cia-ltda-me',
    },
    {
      cnpj: '20.663.901/0001-70',
      name: 'VILA C COMÉRCIO DE MEDICAMENTOS',
      slug: '20-663-901-0001-70-vila-c-comercio-de-medicamentos',
    },
    {
      cnpj: '24.090.496/0001-08',
      name: 'GJA COMERCIO DE MEDICAMENTOS EIRELI',
      slug: '24-090-496-0001-08-gja-comercio-de-medicamentos-eireli',
    },
    {
      cnpj: '24.300.623/0001-48',
      name: 'YOLANDA COMERCIO DE MEDICAMENTOS',
      slug: '24-300-623-0001-48-yolanda-comercio-de-medicamentos',
    },
    {
      cnpj: '24.792.957/0001-86',
      name: 'FARMACIA P J REPUBLICA',
      slug: '24-792-957-0001-86-farmacia-p-j-republica',
    },
    {
      cnpj: '26.072.471/0001-07',
      name: 'CBM COMERCIO DE MEDICAMENTOS LTDA - ME',
      slug: '26-072-471-0001-07-cbm-comercio-de-medicamentos-ltda-me',
    },
    {
      cnpj: '26.085.405/0001-63',
      name: 'COLOMBO & DIDOMENICO LTDA - ME',
      slug: '26-085-405-0001-63-colombo-e-didomenico-ltda-me',
    },
    {
      cnpj: '30.171.580/0001-40',
      name: 'HIEM YOUNES LTDA',
      slug: '30-171-580-0001-40-hiem-younes-ltda',
    },
    {
      cnpj: '33.043.335/0001-46',
      name: 'HAAS E ESCHER FARMACIA',
      slug: '33-043-335-0001-46-haas-e-escher-farmacia',
    },
    {
      cnpj: '40.481.195/0001-53',
      name: 'FARMÁCIA E DROGARIA CARIMA LTDA',
      slug: '40-481-195-0001-53-farmacia-e-drogaria-carima-ltda',
    },
    {
      cnpj: '42.947.576/0001-00',
      name: 'FARMACIA J E LTDA',
      slug: '42-947-576-0001-00-farmacia-j-e-ltda',
    },
    {
      cnpj: '43.060.304/0001-90',
      name: 'JULIANA DIAS DE MORAIS',
      slug: '43-060-304-0001-90-juliana-dias-de-morais',
    },
    {
      cnpj: '44.115.894/0001-74',
      name: 'BIO VITTA PHARMACIA',
      slug: '44-115-894-0001-74-bio-vitta-pharmacia',
    },
    {
      cnpj: '44.134.484/0001-88',
      name: 'DROGARIA SAO PAULO LTDA',
      slug: '44-134-484-0001-88-drogaria-sao-paulo-ltda',
    },
    {
      cnpj: '50.722.241/0001-98',
      name: 'A M D COMERCIO DE MEDICAMENTOS',
      slug: '50-722-241-0001-98-a-m-d-comercio-de-medicamentos',
    },
  ]

  await prisma.covenant.createMany({
    data: covenants,
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
