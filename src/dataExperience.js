
import Daspro1 from "../src/assets/xp-asset/daspro/daspro1.webp"
import Daspro2 from "../src/assets/xp-asset/daspro/daspro2.webp"
import EAD1 from "../src/assets/xp-asset/ead/ead1.webp"
import EAD2 from "../src/assets/xp-asset/ead/ead2.webp"
import Bangkit1 from "../src/assets/xp-asset/bangkit/bangkit1.webp"
import Bangkit2 from "../src/assets/xp-asset/bangkit/bangkit2.webp"

class Experience {
    constructor(id, image, judul, desc, tag, utils, link) {
        this.id = id
        this.image = image
        this.judul = judul
        this.tag = tag
        this.desc = desc
        this.utils = utils
        this.link = link
    }

}

const dataExperience = [
    new Experience(1, 
        [Daspro1, Daspro2], 
        "Daspro Laboratory - Telkom University", 
        "Asisten Praktikum - Media Team", 
        "Mengajar kursus Algoritma Pemrograman selama enam bulan, membimbing siswa melalui konsep-konsep utama dalam pemrograman, terutama dalam bahasa pemrograman Python. Membuat modul praktikum yang komprehensif. Membuat konten pendidikan yang ditargetkan untuk Laboratorium Daspro, yang mendukung tujuan pembelajaran dasar dan lanjutan.", 
        "Python", 
        null),
    new Experience(2, 
        [EAD1, EAD2], 
        "EAD Laboratory - Telkom University", 
        "Asisten Praktikum - Lead Media Team", 
        "Mengajar kursus Aplikasi Web selama enam bulan, membimbing siswa melalui konsep-konsep utama dalam pengembangan web dengan Laravel. Membuat modul praktikum yang komprehensif. Membuat konten pendidikan yang ditargetkan untuk mendukung tujuan pembelajaran dasar dan lanjutan di laboratorium pengembangan aplikasi perusahaan (EAD).", 
        "HTML + CSS + PHP + Laravel + Bootstrap", 
        null),
    new Experience(3, 
        [Bangkit1, Bangkit2], 
        "Bangkit Academy", 
        "Cohort Cloud Computing", 
        "Membuat API untuk memfasilitasi kolaborasi antara tim Mobile Development dan Machine Learning. Merancang struktur penerapan yang dapat diskalakan dan tangguh untuk API. Memanfaatkan App Engine dan Cloud Run dari Google Cloud untuk menerapkan API, sehingga memungkinkan penskalaan yang fleksibel dan efisiensi biaya.", 
        "GCP + NodeJS", 
        null),
]



export { dataExperience }