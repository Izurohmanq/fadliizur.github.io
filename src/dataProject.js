import Farmio1 from "../src/assets/project-asset/farmio/farmio1.jpeg"
import Farmio2 from "../src/assets/project-asset/farmio/farmio2.jpeg"
import Farmio3 from "../src/assets/project-asset/farmio/farmio3.jpeg"
import Farmio4 from "../src/assets/project-asset/farmio/farmio4.jpeg"
import Farmio5 from "../src/assets/project-asset/farmio/farmio5.jpeg"
import Farmio6 from "../src/assets/project-asset/farmio/farmio6.jpeg"
import Farmio7 from "../src/assets/project-asset/farmio/farmio7.jpeg"
import DuniaTani1 from "../src/assets/project-asset/duniatani/duniatani1.png"
import DuniaTani2 from "../src/assets/project-asset/duniatani/duniatani2.jpeg"
import DuniaTani3 from "../src/assets/project-asset/duniatani/duniatani3.jpeg"
import DuniaTani4 from "../src/assets/project-asset/duniatani/duniatani4.jpeg"
import DuniaTani5 from "../src/assets/project-asset/duniatani/duniatani5.jpeg"
import DuniaTani6 from "../src/assets/project-asset/duniatani/duniatani6.jpeg"
import Saddlebags1 from "../src/assets/project-asset/saddlebags/saddlebags1.png"
import Saddlebags2 from "../src/assets/project-asset/saddlebags/saddlebags2.png"
import Saddlebags3 from "../src/assets/project-asset/saddlebags/saddlebags3.png"
import Saddlebags4 from "../src/assets/project-asset/saddlebags/saddlebags4.png"
import Saddlebags5 from "../src/assets/project-asset/saddlebags/saddlebags5.png"
import Saddlebags6 from "../src/assets/project-asset/saddlebags/saddlebags6.png"
import Dishcover1 from "../src/assets/project-asset/dishcover/dishcover1.png"
import Dishcover2 from "../src/assets/project-asset/dishcover/dishcover2.png"
import Dishcover3 from "../src/assets/project-asset/dishcover/dishcover3.png"
import Dishcover4 from "../src/assets/project-asset/dishcover/dishcover4.png"
import Dishcover5 from "../src/assets/project-asset/dishcover/dishcover5.png"
import Dishcover6 from "../src/assets/project-asset/dishcover/dishcover6.png"
import Genting1 from "../src/assets/project-asset/genting/genting1.png"
import Genting2 from "../src/assets/project-asset/genting/genting2.jpeg"
import Genting3 from "../src/assets/project-asset/genting/genting3.jpeg"
import Genting4 from "../src/assets/project-asset/genting/genting4.jpeg"
import Genting5 from "../src/assets/project-asset/genting/genting5.png"
import Genting6 from "../src/assets/project-asset/genting/genting6.png"
import Mutaalimin1 from "../src/assets/project-asset/mutaalimin/mutaalimin1.png"
import Mutaalimin2 from "../src/assets/project-asset/mutaalimin/mutaalimin2.png"
import Mutaalimin3 from "../src/assets/project-asset/mutaalimin/mutaalimin3.png"
import Mutaalimin4 from "../src/assets/project-asset/mutaalimin/mutaalimin4.png"


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
    new Project(1, [DuniaTani1, DuniaTani2, DuniaTani3, DuniaTani4, DuniaTani5, DuniaTani6], "Dunia Tani", "Project Tugas Kuliah", "Dunia tani merupakan sebuah aplikasi web yang memfasilitasi pengguna untuk mendapatkan kompetensi dan kapabilitas untuk menghasilkan hasil tani yang lebih baik di Industri. Kami merupakan kelompok 3 (Dutanesia) yang berasal dari kelas SI-44-03, program studi S1 Sistem Informasi, Telkom University. Kami beranggotakan 5 orang, diantaranya: Rafid Fadhil (1202204021) Kemal Aziz (1202204329) Fadli Izurohman (1202204033) Usein Akbar (1202204043) Ruben Adisuryo N (1202200152)", "Laravel + Bootstrap", "https://github.com/Izurohmanq/SI4403_Kelompok3_DuniaTani"),
    new Project(2, [Farmio1, Farmio2, Farmio3, Farmio4, Farmio5, Farmio6, Farmio7], "Farm.io", "Project Tugas Kuliah", "Farm House.io adalah sebuah website pembelajaran untuk setiap orang yang ingin belajar tentang perternakan di Indonesia terutama para peternak yang ingin menambah ilmu dalam bidang peternakan. Farm House.io merupakan course yang menyediakan berbagai macam materi dan video pembelajaran yang diakses secara gratis ataupun berbayar.", "Laravel + Bootstrap", "https://github.com/SI-RPL-2023/SI4403_A_Farm.io"),
    new Project(3, [Saddlebags1, Saddlebags2, Saddlebags3, Saddlebags4, Saddlebags5, Saddlebags6], "Saddlebags", "Project", "SaddleBagsCo merupakan sebuah merek dari tas motor classic. Untuk saat ini SaddleBagsco menjual 2 produk yaitu Montana dan Brownco. SaddleBagsco hadir untuk menghiasi motor classic agar terlihat lebih authentic", "React + Tailwind + Material UI", "https://saddlebagsco.vercel.app/"),
    new Project(4, [Dishcover1, Dishcover2, Dishcover3, Dishcover4, Dishcover5, Dishcover6], "Dishcover", "Project Bangkit Academy", "Dischover adalah sebuah aplikasi yang dapat mengatasi pemborosan makanan dengan merekomendasikan berbagai jenis masakan dari input gambar bahan makanan dengan menggunakan metode pemindaian.", "NodeJs + GCP + Prisma + MySQL", "https://github.com/Project-Dishcover/DISHCOVER-API"),
    new Project(5, [Genting1, Genting2, Genting3, Genting4, Genting5, Genting6], "Genting", "Project Tugas Akhir", "Genting adalah sebuah aplikasi website untuk mencegah stunting. Pada website tersebut terdapat beberapa fitur seperti pada gambar slide ke-6, salah satunya adalah sistem rekomendasi makanan untuk ibu hamil.", "Laravel + Bootstrap + FlaskAPi + Scikit-Learn", "https://github.com/Izurohmanq/TA_RecSys.git"),
    new Project(6, [Mutaalimin1, Mutaalimin2, Mutaalimin3, Mutaalimin4], "RA Muta'alimin", "Project", "Sekolah yang memiliki motto Religius, Mandiri, dan Pembiasaan yang baik terletak pada Jalan Moh Ramdhan, Desa Pangkalan, KAB. CIREBON.", "React + Tailwind + Material UI", "https://ra-mutaalimin.vercel.app/"),
]



export { dataProject }