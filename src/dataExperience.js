
import Daspro from "../src/assets/xp-asset/daspro.jpeg"
import EAD from "../src/assets/xp-asset/EAD.jpeg"
import Bangkit from "../src/assets/xp-asset/bangkit.jpeg"

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
    new Experience(1, Daspro, "Daspro Laboratory - Telkom University", "Asisten Praktikum - Media Team", "Mengajar pemrograman algoritma dalam bahasa pemrograman Python selama 6 bulan dan merancang modul praktikum dan konten untuk Laboratorium Daspro", "Python", null),
    new Experience(2, EAD, "EAD Laboratory - Telkom University", "Asisten Praktikum - Lead Media Team", "Mengajar pengembangan web selama 5 bulan, memimpin tim Media dalam merancang modul untuk praktikum serta konten untuk Laboratorium EAD", "HTML + CSS + PHP + Laravel + Bootstrap", null),
    new Experience(3, Bangkit, "Bangkit Academy", "Cohort Cloud Computing", "Mempelajari GCP dan node JS sebagai Backend dan membuat API untuk tim Mobile Development dan menerapkan model machine learning menggunakan App Engine dan Cloud Run", "GCP + NodeJS", null),
]



export { dataExperience }