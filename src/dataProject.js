
import DuniaTani from "../src/assets/project-asset/dunia Tani.png"
import Farmio from "../src/assets/project-asset/farmio1.jpeg"
import Saddlebags from "../src/assets/project-asset/saddlebags.png"
import Discover from "../src/assets/project-asset/dishcover.png"
import Genting from "../src/assets/project-asset/genting.png"
import Mutaalimin from "../src/assets/project-asset/muta'alimin.png"

class Project {
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

const dataProject = [
    new Project(1, DuniaTani, "Dunia Tani", "Project Tugas Kuliah", "Dunia tani merupakan sebuah aplikasi web yang memfasilitasi pengguna untuk mendapatkan kompetensi dan kapabilitas untuk menghasilkan hasil tani yang lebih baik di Industri.", "Laravel + Bootstrap", "https://github.com/Izurohmanq/SI4403_Kelompok3_DuniaTani"),
    new Project(2, Farmio, "Farm.io", "Project Tugas Kuliah", "Farm House.io adalah sebuah website pembelajaran untuk setiap orang yang ingin belajar tentang perternakan di Indonesia terutama para peternak yang ingin menambah ilmu dalam bidang peternakan.", "Laravel + Bootstrap", "https://github.com/SI-RPL-2023/SI4403_A_Farm.io"),
    new Project(3, Saddlebags, "Saddlebags", "Project", "SaddleBagsCo merupakan sebuah merek dari tas motor classic. Untuk saat ini SaddleBagsco menjual 2 produk yaitu Montana dan Brownco. SaddleBagsco hadir untuk menghiasi motor classic agar terlihat lebih authentic", "React + Tailwind + Material UI", "https://saddlebagsco.vercel.app/"),
    new Project(4, Discover, "Discover", "Project Bangkit Academy", "Dischover adalah sebuah aplikasi yang dapat mengatasi pemborosan makanan dengan merekomendasikan berbagai jenis masakan dari input gambar bahan makanan dengan menggunakan metode pemindaian.", "NodeJs + GCP + Prisma + MySQL", "https://github.com/Project-Dishcover/DISHCOVER-API"),
    new Project(5, Genting, "Genting", "Project Tugas Akhir", "Genting adalah sebuah aplikasi website untuk mencegah stunting. Pada website tersebut terdapat beberapa fitur, salah satunya adalah sistem rekomendasi makanan untuk ibu hamil.", "Laravel + Bootstrap + FlaskAPi + Scikit-Learn", "https://github.com/Izurohmanq/TA_RecSys.git"),
    new Project(6, Mutaalimin, "RA Muta'alimin", "Project", "Sekolah yang memiliki motto Religius, Mandiri, dan Pembiasaan yang baik terletak pada Jalan Moh Ramdhan, Desa Pangkalan, KAB. CIREBON.", "React + Tailwind + Material UI", "https://ra-mutaalimin.vercel.app/"),
]



export { dataProject }