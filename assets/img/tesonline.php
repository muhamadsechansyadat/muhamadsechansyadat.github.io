<?php
session_start();

if (!isset($_SESSION['nama'])) {
    header("Location: ../index.php");
    exit();
}

include "../config.php";

$query = mysqli_query($conn, 'SELECT * FROM prosestes');
// Kode dalam while loop kosong
$qry2 = mysqli_query($conn, "SELECT tiu FROM prosestes WHERE id = '$_SESSION[id]'");
$q2 = mysqli_fetch_array($qry2);
$tiu = $q2['tiu'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Recruitment - PT. Roma Kelapa</title>

  <!-- Google Font: Source Sans Pro -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- DataTables -->
  <link rel="stylesheet" href="plugins/datatables-responsive/css/responsive.bootstrap4.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
</head>

<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
  </div>

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index.php" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link"></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->
      <li class="nav-item">
        <a class="nav-link" data-widget="navbar-search" href="#" role="button">
          <i class="fas fa-search"></i>
        </a>
        <div class="navbar-search-block">
          <form class="form-inline">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Messages Dropdown Menu -->
      
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/fotoadmin.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">PT. Roma Kelapa</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

            <li class="nav-item">
            <a href="#" class="nav-link active">
            <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Tes Online
                <i class="right fas "></i>
              </p>
            </a>
          </li>
            

          <li class="nav-item">
            <a href="../logout.php" class="nav-link">
              <i class="nav-icon far fas fa-th"></i>
              <p>
                Logout
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  <style>
  .btn-kerjakan {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 6px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 2px;
    cursor: pointer;
    border-radius: 4px;
  }

  .btn-kerjakan:hover {
    background-color: #45a049;
  }
</style>


  <div class="content-wrapper">
    <section class="content-header">
      <div class="card">
        <div class="card-header">
          <div class="container-fluid">
            <?php
  

              if (!isset($_SESSION['nama'])) {
                  header("Location: peserta");
              }
              include "koneksi.php";
              $nama = $_SESSION['nama'];
              $query = mysqli_query($kon, "SELECT * FROM prosestes WHERE nama='$nama'");
              if (mysqli_num_rows($query) > 0) {
                  while ($data = mysqli_fetch_array($query)) {
                      $statusTest = $data['tiu']; 
                      $_SESSION['id'] = $data['id'];
                      ?>  
                      <img src="gambar/logo.png"> <a><b>PT. Roma Kelapa</a></b>
                      <br></br>
                      <a>Selamat Datang Peserta Tes :  <span style="background-color: #FFFF00 ;"><b><?php echo $data['nama'] ?></b></a></span>
                      <p><a>Peserta Melamar Sebagai :  <span style="background-color: #FFFF00 ;"><b><?php echo $data['posisi'] ?><b> - <?php echo $data['leveltes'] ?></b></a></span></p>
                      <?php
                  } 
              } else {
                  echo "Tidak ada user aktif.";
              }
            ?>
                   </div>
                   </div>
                   </div>
               
                   
  <div class="card">
              <div class="card-header">
              <div class="container-fluid">
              <h4><b>Progres Tes Online Anda :</b></h4>

              <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Nama Tes</th>
      <th scope="col">Waktu Pengerjaan</th>
      <th scope="col">Option</th>
    </tr>
  </thead>
  <tbody>

  <?php
// Include file koneksi.php untuk mendapatkan koneksi ke database
include 'koneksi.php';

// Gantilah $id_dikandidat dengan nilai ID yang sesuai dari tabel "datakandidat"
$id_dikandidat = $_SESSION['id']; // Contoh ID, gantilah sesuai kebutuhan

// Kueri pertama untuk memeriksa keberadaan ID di tabel "datakandidat"
$query1 = "SELECT * FROM datakandidat WHERE id = $id_dikandidat";
$result1 = $conn->query($query1);

// Kueri kedua untuk memeriksa keberadaan ID di tabel "jawabanpapikostik"
$query2 = "SELECT * FROM jawabanpapikostik WHERE id = $id_dikandidat";
$result2 = $conn->query($query2);


// Kueri kedua untuk memeriksa keberadaan ID di tabel "jawabanpapikostik" 
$query3 = "SELECT * FROM jawabantiu WHERE id = $id_dikandidat";
$result3 = $conn->query($query3);

// Kueri kedua untuk memeriksa keberadaan ID di tabel "jawabanpapikostik"
$query4 = "SELECT * FROM jawabanmsdt WHERE id = $id_dikandidat";
$result4 = $conn->query($query4);

// Kueri kedua untuk memeriksa keberadaan ID di tabel "jawabanpapikostik"
$query5 = "SELECT * FROM jawabanist1 WHERE id = $id_dikandidat";
$result5 = $conn->query($query5);

$query6 = "SELECT * FROM jawabanist2 WHERE id = $id_dikandidat";
$result6 = $conn->query($query6);


$query7 = "SELECT * FROM jawabanist3 WHERE id = $id_dikandidat";
$result7 = $conn->query($query7);


$query8 = "SELECT * FROM jawabanist4 WHERE id = $id_dikandidat";
$result8 = $conn->query($query8);


$query9 = "SELECT * FROM jawabanist5 WHERE id = $id_dikandidat";
$result9 = $conn->query($query9);

$query10 = "SELECT * FROM jawabanist6 WHERE id = $id_dikandidat";
$result10 = $conn->query($query10);

$query11 = "SELECT * FROM jawabanist7 WHERE id = $id_dikandidat";
$result11 = $conn->query($query11);

$query12 = "SELECT * FROM jawabanist8 WHERE id = $id_dikandidat";
$result12 = $conn->query($query12);

$query13 = "SELECT * FROM jawabanist9 WHERE id = $id_dikandidat";
$result13 = $conn->query($query13);


?>



<tr>
    <th scope="row">1</th>
    <td>Pengisian Formulir Biodata Kandidat</td>
    <td>-</td>
    <td>
        <?php
        if ($result1->num_rows > 0) {
            // Jika ID sudah ada di tabel "datakandidat", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "datakandidat", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/pendataan/pendataan.php"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">2</th>
    <td>Papikostik</td>
    <td>20 Menit</td>
    <td>
        <?php
        if ($result2->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-papikostik/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>


<th scope="row">3</th>
    <td>Intelegensi Umum (TIU)</td>
    <td>10 Menit</td>
    <td>
        <?php
        if ($result3->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-tiu/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>


<th scope="row">4</th>
    <td>Managemen Style Diagnostic Test (MSDT)</td>
    <td>30 Menit</td>
    <td>
        <?php
        if ($result4->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-msdt/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">5</th>
    <td>Intelligenz Struktur Test (IST)</td>
    <td>
       
    </td>
</tr>

<th scope="row">6</th>
    <td>Tes - IST 1/9</td>
    <td>6 Menit</td>
    <td>
        <?php
        if ($result5->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">7</th>
    <td>Tes - IST 2/9</td>
    <td>6 Menit</td>
    <td>
        <?php
        if ($result6->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist2/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">8</th>
    <td>Tes - IST 3/9</td>
    <td>7 Menit</td>
    <td>
        <?php
        if ($result7->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist3/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">9</th>
    <td>Tes - IST 4/9</td>
    <td>8 Menit</td>
    <td>
        <?php
        if ($result8->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist4/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">10</th>
    <td>Tes - IST 5/9</td>
    <td>10 Menit</td>
    <td>
        <?php
        if ($result9->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist5/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>
<th scope="row">11</th>
    <td>Tes - IST 6/9</td>
    <td>10 Menit</td>
    <td>
        <?php
        if ($result10->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist6/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">12</th>
    <td>Tes - IST 7/9</td>
    <td>7 Menit</td>
    <td>
        <?php
        if ($result11->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist7/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">13</th>
    <td>Tes - IST 8/9</td>
    <td>9 Menit</td>
    <td>
        <?php
        if ($result12->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist8/media.php?hal=home"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>

<th scope="row">14</th>
    <td>Tes - IST 9/9</td>
    <td>9 Menit</td>
    <td>
        <?php
        if ($result13->num_rows > 0) {
            // Jika ID sudah ada di tabel "jawabanpapikostik", tandai sebagai Selesai
            echo '<a href="#"> <button class="btn-kerjakan" style="background-color: maroon; color: white;">Selesai</button></a>';
        } else {
            // Jika ID belum ada di tabel "jawabanpapikostik", tampilkan tombol untuk Kerjakan
            echo '<a href="0.tes-online/tes-ist9/media.php?hal=hafalan"><button class="btn-kerjakan">Kerjakan</button></a>';
        }
        ?>
    </td>
</tr>
<?php
// Tutup koneksi database
$conn->close();
?>


    
  </tbody>
</table>

                </div>
                </div>
                </div>
  

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.min.js">
  
  //const statusTest = <?php echo $statusTest;?>
  console.log("STATUS "+ statusTest);
</script>

<script>
  
  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
</script>

<script type="text/javascript">
  
  $(document).ready(function(){
    $('#example1').DataTable();
  });
</script>

<style>
/** Kode CSS Bullets untuk Metode A, B, dan C**/
ul.a {
  list-style-position: outside;
}
ul.b {
  list-style-position: inside;
}
ul.c {
    list-style-type: disc;
    list-style-position: outside;
    padding: 5px 0 5px 10px;
    margin-left:50px;
    line-height:28px;
    font-size:18px
}
</style>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</script>

</body>
</html>
