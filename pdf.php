<?php 
if (isset($_GET['file'], $_GET['name'])){
    $files = $_GET['file'];
    $name = $_GET['name'];
}
else{
    header("Location: /index.html");
}

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo $name; ?></title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="styles/main.css">
    </head>
    <body>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="width: 100%;">
            <a class="navbar-brand" href="#">My Portfolio</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" >
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link  text-light" href="/index.html">Accueil</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Projets
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="project/inmoov.html">InMoov : A humanoid robot</a></li>
                            <li><a class="dropdown-item" href="project/drone.html">Drone conception</a></li>
                            <li><a class="dropdown-item" href="project/folimotte.html">Folimotte</a></li>
                            <li><a class="dropdown-item" href="project/edt.html">Timetable software</a></li>
                            <li><a class="dropdown-item" href="project/mathclav.html">MathClav software</a></li>
                            <li><a class="dropdown-item" href="project/jardin.html">Controlled irrigation</a></li>
                            <li><a class="dropdown-item" href="project/poule.html">Automatic chicken coop</a></li>
                            <li><a class="dropdown-item" href="project/suiveur.html">Disabled person's follower</a></li>
                            <li><a class="dropdown-item" href="project/boat.html">Radio Controlled Boat</a></li>
                            <li><a class="dropdown-item" href="project/wind.html">Wind turbine</a></li>
                            <li><a class="dropdown-item" href="project/desk.html">Light Desk</a></li>
                            <li><a class="dropdown-item" href="project/autosound.html">AutoSound</a></li>
                        </ul>
                      </li>
                    <li class="nav-item">
                        <a class="nav-link  text-light" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item m-3 mb-0 mt-0">
                        <a class="nav-link  text-light" href="support.html">Supporting documents</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid pt-5">
            <!-- Top -->
            <div class="row">
                <div class="col-11 bg-light">
                    <iframe class="mt-4" src="<?php echo $files; ?>#toolbar=0" width="100%" height="500px"> </iframe>
                </div>
                <div class="col-sm-1 bg-secondary  text-center pt-4">
                    <div style="position: fixed">
                        <github-card data-user="ppgg88"></github-card>
                        <linkedin-card data-user="ppgg88"></linkedin-card>
                        <instagram-card data-user="ppgg88"></github-card>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <footer class="bg-dark text-center text-white py-3">
            <!-- Grid container -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8">
                        <p class="mt-2">All rights reserved &copy; 2023 | Portfolio Paul Giroux</p>
                    </div>
                    <div class="col-4">
                        <a class="btn btn-outline-light" href="https://github.com/ppgg88/portfolio_paulgrx"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>  GitHub repository of this Website</a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scripts -->
        <script>
            $(document).ready(function() {
              $('#project-carousel').carousel({
                interval: 3000
              });
            });
        </script>
          
        <script src="widget/github_card.js" type="module"></script>
        <script src="widget/linkedin_card.js" type="module"></script>
        <script src="widget/instagram_card.js" type="module"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    
    </body>
</html>

