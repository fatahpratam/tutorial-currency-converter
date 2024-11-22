# Chapter 9: Membuat aplikasi konversi mata uang

## GitHube Pages
Link: [Password Generator](https://fatahpratam.github.io/tutorial-currency-converter/)

## Youtube Tutorial
- Link: [Full Stack React Developer Course with Appwrite](https://www.youtube.com/watch?v=Bvwq_S0n2pk)
- Creator: [HiteshCodeLab](https://www.youtube.com/@HiteshCodeLab)

## Materi: Custom hooks, make API request, and reusability of component.

## Referensi API
- GitHub API: https://api.github.com/
- Random User Generator: https://randomuser.me/
- Exchange API: https://github.com/fawazahmed0/exchange-api

## Tips
- Ketika ingin menghasilkan dafter element dari array; ketika menggunakan method array seperti `forEach`, `map`, `filter`, dll; pastikan gunakan () alih-alih {} pada callback body-nya.
- Ketika suatu component membutuhkan parameter callback, pastikan callback tersebut tidak undefined sebelum menjalankan callback tersebut di dalam component.
- Semua nilai yang dihasilkan oleh element input, select, dsb, pasti bertipe string; pastikan konversi nilai tersebut terlebih dahulu sebelum menggunakannya.
- Buat indexer dengan cara menggabungkan semua export ke dalam suatu file (mis: index.js) untuk mempermudah import kedepannya.
- Custom hooks di React pada dasarnya adalah sebuah fungsi JavaScript pada biasanya. 
- Sebagian besar error (menurut pengalaman pembuat tutorial) adalah salah menilai jenis data yang akan muncul. Inilah alasan mengapa typescript populer.

## Fungsi React
- `useId()`: useId adalah sebuah React Hook untuk menghasilkan ID unik yang dapat diteruskan ke atribut aksesibilitas.

## Cara Kerja
- Terdapat empat bagian utama dari aplikasi ini yaitu: sebelum konversi, sesudah konversi, tombol swap dan tombol convert.
- Pertama, pengguna memasukkan jumlah dan menentukan jenis mata uang asal pada bagian sebelum konversi.
- Selanjutnya, pengguna menentukan jenis mata uang target pada bagian sesudah konversi.
- Setelah itu, pengguna menekan tombol convert dan hasil konversi akan ditampilkan pada bagian sesudah konversi.
- Jika pengguna ingin menukar jumlah dan jenis mata uang antara sebelum konversi dan sesudah konversi, maka pengguna cukup menekan tombol swap.