
import DuniaTani from "../src/assets/project-asset/dunia Tani.png"
import Farmio from "../src/assets/project-asset/farmio1.jpeg"
import Saddlebags from "../src/assets/project-asset/saddlebags.png"
import Discover from "../src/assets/project-asset/dishcover.png"

class Project {
    constructor(id, image, judul, desc, tag, techstack, link) {
        this.id = id
        this.image = image
        this.judul = judul
        this.tag = tag
        this.desc = desc
        this.techstack = techstack
        this.link = link
    }

}

const dataProject = [
    new Project(1, DuniaTani, "Dunia Tani", "Project Tugas Kuliah", "Dunia tani merupakan sebuah aplikasi web yang memfasilitasi pengguna untuk mendapatkan kompetensi dan kapabilitas untuk menghasilkan hasil tani yang lebih baik di Industri.", "Laravel + Bootstrap", "https://github.com/Izurohmanq/SI4403_Kelompok3_DuniaTani"),
    new Project(2, Farmio, "Farm.io", "Project Tugas Kuliah", "Farm House.io adalah sebuah website pembelajaran untuk setiap orang yang ingin belajar tentang perternakan di Indonesia terutama para peternak yang ingin menambah ilmu dalam bidang peternakan.", "Laravel + Bootstrap", "https://github.com/SI-RPL-2023/SI4403_A_Farm.io"),
    new Project(3, Saddlebags, "Saddlebags", "Project", "Farm House.io adalah sebuah website pembelajaran untuk setiap orang yang ingin belajar tentang perternakan di Indonesia terutama para peternak yang ingin menambah ilmu dalam bidang peternakan.", "React + Tailwind + Material UI", "https://saddlebagsco.vercel.app/"),
    new Project(4, Discover, "Discover", "Project Bangkit Academy", "Dischover adalah sebuah aplikasi yang dapat mengatasi pemborosan makanan dengan merekomendasikan berbagai jenis masakan dari input gambar bahan makanan dengan menggunakan metode pemindaian.", "NodeJs + GCP + Prisma + MySQL", "https://github.com/Project-Dishcover/DISHCOVER-API"),
]



export { dataProject }