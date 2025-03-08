document.addEventListener("DOMContentLoaded", function () {
    // ==============================
    // 🎨 Efek Pergantian Warna Background
    // ==============================
    const colors = ['#ff758c', '#ff7eb3', '#8a2be2', '#ff4500'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.background = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 4000);

    // ==============================
    // 🎬 Modal Pop-up & Musik Latar
    // ==============================
    const modal = document.getElementById("modal");
    const btn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");
    const bgMusic = document.getElementById("bgMusic");

    // 🔹 Fungsi untuk menampilkan modal
    function openModal() {
        modal.style.display = "flex";
        bgMusic.play();
    }

    // 🔹 Fungsi untuk menutup modal
    function closeModal() {
        modal.style.display = "none";
        bgMusic.pause();
        bgMusic.currentTime = 0; // Reset ke awal
    }

    // Event listener untuk membuka & menutup modal
    btn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function (event) {
        if (event.target === modal) closeModal();
    });
});
