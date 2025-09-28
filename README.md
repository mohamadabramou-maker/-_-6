[Uploading index.html…]()
<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block Blast</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <h1>لعبة Block Blast</h1>
        <div>
            <label for="difficulty">اختر درجة الصعوبة: </label>
            <select id="difficulty">
                <option value="easy">سهل</option>
                <option value="medium">متوسط</option>
                <option value="hard">صعب</option>
            </select>
        </div>
        <div id="game-area" class="game-area"></div>
        <button id="restart-button" class="hidden">ابدأ من جديد</button>
        <div class="message" id="message"></div>
        <div id="level-display" class="level-display">المستوى: 1</div>
    </div>
    <script src="script.js"></script>
</body>

</html>
