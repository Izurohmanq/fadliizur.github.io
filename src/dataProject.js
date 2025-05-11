import Farmio1 from "../src/assets/project-asset/farmio/farmio1.webp"
import Farmio2 from "../src/assets/project-asset/farmio/farmio2.webp"
import Farmio3 from "../src/assets/project-asset/farmio/farmio3.webp"
import Farmio4 from "../src/assets/project-asset/farmio/farmio4.webp"
import Farmio5 from "../src/assets/project-asset/farmio/farmio5.webp"
import Farmio6 from "../src/assets/project-asset/farmio/farmio6.webp"
import Farmio7 from "../src/assets/project-asset/farmio/farmio7.webp"
import DuniaTani1 from "../src/assets/project-asset/duniatani/duniatani1.webp"
import DuniaTani2 from "../src/assets/project-asset/duniatani/duniatani2.webp"
import DuniaTani3 from "../src/assets/project-asset/duniatani/duniatani3.webp"
import DuniaTani4 from "../src/assets/project-asset/duniatani/duniatani4.webp"
import DuniaTani5 from "../src/assets/project-asset/duniatani/duniatani5.webp"
import DuniaTani6 from "../src/assets/project-asset/duniatani/duniatani6.webp"
import Saddlebags1 from "../src/assets/project-asset/saddlebags/saddlebags1.webp"
import Saddlebags2 from "../src/assets/project-asset/saddlebags/saddlebags2.webp"
import Saddlebags3 from "../src/assets/project-asset/saddlebags/saddlebags3.webp"
import Saddlebags4 from "../src/assets/project-asset/saddlebags/saddlebags4.webp"
import Saddlebags5 from "../src/assets/project-asset/saddlebags/saddlebags5.webp"
import Saddlebags6 from "../src/assets/project-asset/saddlebags/saddlebags6.webp"
import Dishcover1 from "../src/assets/project-asset/dishcover/dishcover1.webp"
import Dishcover2 from "../src/assets/project-asset/dishcover/dishcover2.webp"
import Dishcover3 from "../src/assets/project-asset/dishcover/dishcover3.webp"
import Dishcover4 from "../src/assets/project-asset/dishcover/dishcover4.webp"
import Dishcover5 from "../src/assets/project-asset/dishcover/dishcover5.webp"
import Dishcover6 from "../src/assets/project-asset/dishcover/dishcover6.webp"
import Dishcover7 from "../src/assets/project-asset/dishcover/dishcover7.png"
import Genting1 from "../src/assets/project-asset/genting/genting1.webp"
import Genting2 from "../src/assets/project-asset/genting/genting2.webp"
import Genting3 from "../src/assets/project-asset/genting/genting3.webp"
import Genting4 from "../src/assets/project-asset/genting/genting4.webp"
import Genting5 from "../src/assets/project-asset/genting/genting5.webp"
import Genting6 from "../src/assets/project-asset/genting/genting6.webp"
import Mutaalimin1 from "../src/assets/project-asset/mutaalimin/mutaalimin1.webp"
import Mutaalimin2 from "../src/assets/project-asset/mutaalimin/mutaalimin2.webp"
import Mutaalimin3 from "../src/assets/project-asset/mutaalimin/mutaalimin3.webp"
import Mutaalimin4 from "../src/assets/project-asset/mutaalimin/mutaalimin4.webp"


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
    new Project(2, [Farmio1, Farmio2, Farmio3, Farmio4, Farmio5, Farmio6, Farmio7], "Farmio", "Project Tugas Kuliah", "Farm House io adalah sebuah website pembelajaran untuk setiap orang yang ingin belajar tentang perternakan di Indonesia terutama para peternak yang ingin menambah ilmu dalam bidang peternakan. Farm Houseio merupakan course yang menyediakan berbagai macam materi dan video pembelajaran yang diakses secara gratis ataupun berbayar.", "Laravel + Bootstrap", "https://github.com/SI-RPL-2023/SI4403_A_Farm.io"),
    new Project(3, [Saddlebags1, Saddlebags2, Saddlebags3, Saddlebags4, Saddlebags5, Saddlebags6], "Saddlebags", "Project", "SaddleBagsCo merupakan sebuah merek dari tas motor classic. Untuk saat ini SaddleBagsco menjual 2 produk yaitu Montana dan Brownco. SaddleBagsco hadir untuk menghiasi motor classic agar terlihat lebih authentic. Saat ini saddlebags sendiri sudah memiliki sekitar 1046 followers di Instagram dan mendapatkan penilaian 4,8 dari 635 ulasan di platform e-commerce.", "React + Tailwind + Material UI", "https://saddlebagsco.vercel.app/"),
    new Project(4, [Dishcover1, Dishcover2, Dishcover3, Dishcover4, Dishcover5, Dishcover6, Dishcover7], "Dishcover", "Project Bangkit Academy", "Dischover adalah sebuah aplikasi yang dapat mengatasi pemborosan makanan dengan merekomendasikan berbagai jenis masakan dari input gambar bahan makanan dengan menggunakan metode pemindaian. Pada saat mengerjakan project ini, kami terdiri dari 3 kelompok dari path yang berbeda, ada dari Machine Learning, Cloud Computing, dan Mobile Development. Machine Learning: Novan Janis Aditya H, Ahmad Dhiya Ulhaqi, dan Samantha Ismillah. Cloud Computing: Fadli Izurohman (saya hehe) dan Anhar Khoirun Najib. Mobile Development: Ersa Yunianti Sintha dan M Syaddad G Al Farez. Pengerjaan project ini dilakukan selama 2 bulan mulai dari planning hingga deploying.", "NodeJs + ExpressJs + GCP + Prisma + MySQL", "https://github.com/Project-Dishcover/DISHCOVER-API"),
    new Project(5, [Genting1, Genting2, Genting3, Genting4, Genting5, Genting6], "Genting", "Project Tugas Akhir/Skripsi", "Genting adalah sebuah aplikasi website untuk mencegah stunting. Tugas akhir dengan berbentuk website ini, dikerjakan oleh beberapa orang. Namun, setiap orang pada grup ini memiliki penelitian skripsi yang berbeda. Saya sendiri merancang fitur tracking dan sistem rekomendasi gizi untuk ibu hamil. Tidak hanya itu saja, ada juga dari beberapa teman saya, seperti Demitria Mayana Aziz dengan pendeteksi stunting, Aebil Taskari Rusdi dengan prediksi tinggi badan balita, dan Rafly Hamka dengan GIS penyebaran stunting di Indonesia menggunakan leaflet. Selain itu, ada beberapa fitur CRUD seperti pendataan ibu hamil, balita, hingga imunisasi balita Project ini memakan waktu sekitar hampir 1 tahun lamanya, mulai dari proposal skripsi, hingga akhirnya testing aplikasi di Posyandu di Kota Bandung, dan dilanjutkan untuk dipresentasikan sebagai di sidang skrip tugas akhir.", "Laravel + Bootstrap + FlaskAPi + Scikit-Learn", "https://github.com/Izurohmanq/TA_RecSys.git"),
    new Project(6, [Mutaalimin1, Mutaalimin2, Mutaalimin3, Mutaalimin4], "RA Muta'alimin", "Project", "Sekolah yang memiliki motto Religius, Mandiri, dan Pembiasaan yang baik terletak pada Jalan Moh Ramdhan, Desa Pangkalan, KABUPATEN CIREBON.", "React + Tailwind + Material UI", "https://ra-mutaalimin.vercel.app/"),
]



export { dataProject }