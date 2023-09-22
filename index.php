<!DOCTYPE html>
<html lang="da">
<head>
	<meta charset="utf-8">
	
	<title>Sigende titel</title>
	
	<meta name="robots" content="All">
	<meta name="author" content="Udgiver">
	<meta name="copyright" content="Information om copyright">
	
	<link href="css/styles.css" rel="stylesheet" type="text/css">
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <main class="container-fluid ">

        <div id="ScoreCounter" class="row p-5 pb-0">

            <div class="col-12">
                <h5 class="fw-normal">
                    Spiller: Amalie
                </h5>

            </div>

        </div>

        <div class="row p-5 pt-0">

            <div class="col-12">

                <div id="TotalScore">

                    <h5 class="fw-normal">
                        I alt:
                    </h5>

                </div>
            </div>

        </div>


        <div class="row text-center fixed-bottom p-3">

                <div class="col-6 d-grid">

                    <button class="text-center px-3 btn btn-danger " id="newGameButton">Start forfra</button>

                </div>


                <div class="col-6 d-grid">
                    <button class="text-center px-3 btn btn-secondary" id="resetButton">Reset</button>
                </div>

        </div>

    </main>


    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script type="module" src="js/app.js"></script>
</body>
</html>
