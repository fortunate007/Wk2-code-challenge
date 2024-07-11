<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Shopping List</title>
    <style>
        .purchased {
            text-decoration: line-through;
            background-color: #d3d3d3;
        }
    </style>
</head>
<body>
    <h1>Shopping List</h1>
    <input type="text" id="itemInput" placeholder="Add an item">
    <button id="addButton">Add</button>
    <button id="clearButton">Clear List</button>
    <ul id="listContainer"></ul>

    <script src="app.js"></script>
</body>
</html>

