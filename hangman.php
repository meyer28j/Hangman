<!DOCTYPE html>
<html>

<head>
    <title>Hangman</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="hangman.css" />
</head>

<body>
    <div class="gridContainer">

        <section id="letterBox" class="letterBox">
        <button id="reset" class="buttonReset">Reset</button>
        <button id="rotate" class="buttonRotate">Rotate Image</button>

                <span class="letter">A</span><span class="letter">B</span><span class="letter">C</span><span class="letter">D</span><span class="letter">E</span><span class="letter">F</span><span class="letter">G</span><span class="letter">H</span><span class="letter">I</span><span class="letter">J</span><span class="letter">K</span><span class="letter">L</span><span class="letter">M</span><span class="letter">N</span><span class="letter">O</span><span class="letter">P</span><span class="letter">Q</span><span class="letter">R</span><span class="letter">S</span><span class="letter">T</span><span class="letter">U</span><span class="letter">V</span><span class="letter">W</span><span class="letter">X</span><span class="letter">Y</span><span class="letter">Z</span>
        </section>

        <canvas id="gradient" class="gradient">Gradient failed to load</canvas>

        <section id="wordBox" class="wordBox">
            <span class="word">hangmanLetters.js failed to load</span>
        </section>

        <img id="imgHangman" class="imgHangman" src="img/hangman0.png" />
        <!--<canvas id="mainImage" class="canvasHangman">Hangman image failed to load</canvas>-->

    </div>
    <footer>
        <p>Created by Jacob Meyer</p>
    </footer>
</body>

<script type="text/javascript" src="hangmanAnimations.js"></script>
<script type="text/javascript" src="hangmanLetters.js"></script>
<script type="text/javascript" src="hangmanCanvas.js"></script>

</html>