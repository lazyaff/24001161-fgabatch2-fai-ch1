// Deklarasi variabel saldo dengan nilai awal 0
let saldo = 0;

// Fungsi untuk menambah saldo
function tambahSaldo() {
    // Meminta input dari pengguna
    let jumlah = window.prompt(
        "Masukkan jumlah saldo yang ingin ditambahkan:",
        "0"
    );

    // Mengkonversi input ke angka dan menambahkannya ke saldo
    if (jumlah !== null) {
        jumlah = parseFloat(jumlah);
        if (!isNaN(jumlah) && jumlah > 0) {
            saldo += jumlah;
            // Menampilkan saldo baru
            alert(
                "Saldo berhasil ditambahkan. Saldo baru Anda adalah: " + saldo
            );
        } else {
            alert("Input tidak valid. Silakan masukkan angka yang valid.");
        }
    }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
    // Meminta input dari pengguna
    let jumlah = window.prompt(
        "Masukkan jumlah saldo yang ingin dikurangi:",
        "0"
    );

    // Mengkonversi input ke angka dan menguranginya dari saldo
    if (jumlah !== null) {
        jumlah = parseFloat(jumlah);
        if (!isNaN(jumlah) && jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah;
            // Menampilkan saldo baru
            alert("Saldo berhasil dikurangi. Saldo baru Anda adalah: " + saldo);
        } else if (jumlah > saldo) {
            alert("Saldo tidak mencukupi.");
        } else {
            alert("Input tidak valid. Silakan masukkan angka yang valid.");
        }
    }
}

// Fungsi untuk menampilkan saldo saat ini
function tampilkanSaldo() {
    alert("Saldo Anda saat ini adalah: " + saldo);
}

// event listener
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("tambahSaldoButton")
        .addEventListener("click", tambahSaldo);
    document
        .getElementById("kurangiSaldoButton")
        .addEventListener("click", kurangiSaldo);
    document
        .getElementById("tampilkanSaldoButton")
        .addEventListener("click", tampilkanSaldo);
});
