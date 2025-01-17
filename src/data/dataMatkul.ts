export type DataMatkul = {
  sem: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
  kode: string;
  nama: string;
  mkjur: string;
};

export type CariMatkul = {
  kode: string;
  nama: string;
};

const dataMatkul: DataMatkul[] = [
  { kode: 'EW4001', mkjur: '29100', nama: 'Pengantar Teknologi Elektro', sem: '1' },
  { kode: 'EW4002', mkjur: '29100', nama: 'Dasar Pemrograman', sem: '1' },
  { kode: 'EW4003', mkjur: '29100', nama: 'Rangkaian Listrik', sem: '2' },
  { kode: 'EC4201', mkjur: '29100', nama: 'Pemrograman Lanjut', sem: '2' },
  { kode: 'EC4301', mkjur: '29100', nama: 'Aljabar Linier dan Matematika Diskrit', sem: '3' },
  { kode: 'EC4302', mkjur: '29100', nama: 'Sistem Telekomunikasi', sem: '3' },
  { kode: 'EC4303', mkjur: '29100', nama: 'Rangkaian elektronika', sem: '3' },
  { kode: 'EC4304', mkjur: '29100', nama: 'Struktur data dan Analisa Algoritma', sem: '3' },
  { kode: 'EC4305', mkjur: '29100', nama: 'Sistem Operasi', sem: '3' },
  { kode: 'EW4004', mkjur: '29100', nama: 'Metode Numerik', sem: '3' },
  { kode: 'EC4401', mkjur: '29100', nama: 'Desain Dan Rekayasa Sistem', sem: '4' },
  { kode: 'EC4402', mkjur: '29100', nama: 'Persamaan Diffirensial dan Deret Untuk Teknik', sem: '4' },
  { kode: 'EC4403', mkjur: '29100', nama: 'Sistem Manajemen Basis Data', sem: '4' },
  { kode: 'EC4404', mkjur: '29100', nama: 'Pengolahan Sinyal Digital', sem: '4' },
  { kode: 'EC4405', mkjur: '29100', nama: 'Rangkaian Digital dan Lab', sem: '4' },
  { kode: 'EC4406', mkjur: '29100', nama: 'Probabilitas dan Statistik', sem: '4' },
  { kode: 'EC4501', mkjur: '29100', nama: 'Jaringan Komputer dan lab', sem: '5' },
  { kode: 'EC4502', mkjur: '29100', nama: 'Arsitektur dan Organisasi Sistem Komputer', sem: '5' },
  { kode: 'EC4503', mkjur: '29100', nama: 'Pembelajaran mesin', sem: '5' },
  { kode: 'EC4504', mkjur: '29100', nama: 'Pengolahan Citra dan Video', sem: '5' },
  { kode: 'EC4505', mkjur: '29100', nama: 'Sistem Mikroprosesor dan Mikrokontroller', sem: '5' },
  { kode: 'EC4911', mkjur: '29100', nama: 'Desain Permainan', sem: '5' },
  { kode: 'EC4921', mkjur: '29100', nama: 'Perangkat Terprogram', sem: '5' },
  { kode: 'EC4931', mkjur: '29100', nama: 'Jaringan Komputer Lanjut', sem: '5' },
  { kode: 'EC4941', mkjur: '29100', nama: 'Mobile Programming', sem: '5' },
  { kode: 'EC4601', mkjur: '29100', nama: 'Kerja Praktek', sem: '6' },
  { kode: 'EC4602', mkjur: '29100', nama: 'Pemrograman Sistem dan Jaringan', sem: '6' },
  { kode: 'EC4603', mkjur: '29100', nama: 'Sistem Tertanam dan lab', sem: '6' },
  { kode: 'EC4604', mkjur: '29100', nama: 'Visi Komputer', sem: '6' },
  { kode: 'EC4912', mkjur: '29100', nama: 'Pemrograman Permainan', sem: '6' },
  { kode: 'EC4913', mkjur: '29100', nama: 'Kecerdasan Komputasional untuk Permainan', sem: '6' },
  { kode: 'EC4918', mkjur: '29100', nama: 'Magang A', sem: '6' },
  { kode: 'EC4919', mkjur: '29100', nama: 'Magang B', sem: '6' },
  { kode: 'EC4922', mkjur: '29100', nama: 'Sistem Konkuren Waktu Nyata', sem: '6' },
  { kode: 'EC4923', mkjur: '29100', nama: 'Pemrograman Mobile Robot', sem: '6' },
  { kode: 'EC4932', mkjur: '29100', nama: 'Komputasi Terdistribusi', sem: '6' },
  { kode: 'EC4933', mkjur: '29100', nama: 'Sistem Komputasi Grid dan Cloud', sem: '6' },
  { kode: 'EC4946', mkjur: '29100', nama: 'Soft Computing dan Deep Learning', sem: '6' },
  { kode: 'UG4915', mkjur: '29100', nama: 'Teknopreneur', sem: '6' },
  { kode: 'UG4917', mkjur: '29100', nama: 'Kuliah Kerja Nyata Tematik', sem: '6' },
  { kode: 'EC4704', mkjur: '29100', nama: 'Sekuriti Sistem Komputer', sem: '7' },
  { kode: 'EC4703', mkjur: '29100', nama: 'Jaringan Sensor Nirkabel dan Internet of Things', sem: '7' },
  { kode: 'EC4701', mkjur: '29100', nama: 'Pra Tugas Akhir', sem: '7' },
  { kode: 'EC4702', mkjur: '29100', nama: 'Proyek Telematika', sem: '7' },
  { kode: 'EC4924', mkjur: '29100', nama: 'Probabilistic Robotic', sem: '7' },
  { kode: 'EC4934', mkjur: '29100', nama: 'Web Intelligence dan Big Data', sem: '7' },
  { kode: 'EC4942', mkjur: '29100', nama: 'Komputasi Ubiquitous', sem: '7' },
  { kode: 'EC4943', mkjur: '29100', nama: 'Forensik Digital', sem: '7' },
  { kode: 'EC4944', mkjur: '29100', nama: 'Informatika Medis', sem: '7' },
  { kode: 'EC4945', mkjur: '29100', nama: 'Grafika Komputer', sem: '7' },
  { kode: 'EC4947', mkjur: '29100', nama: 'Interaksi Komputer Manusia', sem: '7' },
  { kode: 'EC4801', mkjur: '29100', nama: 'Tugas Akhir', sem: '8' },
  { kode: 'EC4802', mkjur: '29100', nama: 'Kompetensi Teknologi Elektro', sem: '8' },
  { kode: 'UG4916', mkjur: '29100', nama: 'Wawasan dan Aplikasi Teknologi', sem: '8' },
];

export const cariMatkul: CariMatkul[] = dataMatkul.map((datum) => {
  return {
    kode: datum.kode,
    nama: `${datum.kode} - ${datum.nama}`,
  };
});

export default dataMatkul;
