<?php
// proteksi method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(403);
    exit('Forbidden');
}

// sanitasi
$nama  = htmlspecialchars(trim($_POST['nama']));
$pesan = htmlspecialchars(trim($_POST['pesan']));

$dataBaru = [
    "nama"  => $nama,
    "pesan" => $pesan,
    "ip"    => $_SERVER['REMOTE_ADDR'],
    "time"  => date("Y-m-d H:i:s")
];

// lokasi PRIVATE
$file = __DIR__ . "/../storage/data.json";

// ambil data lama
$dataLama = [];
if (file_exists($file)) {
    $dataLama = json_decode(file_get_contents($file), true);
}

$dataLama[] = $dataBaru;

// simpan
file_put_contents($file, json_encode($dataLama, JSON_PRETTY_PRINT));

// redirect
header("Location: index.html?success=1");
exit;
