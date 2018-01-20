var playerTurn = "Red";
        var column = 0;

        function tokenColor (obj)
        {
            if (playerTurn == "Red")
            {
                obj.style.background = "Red";
                obj.style.border = "2px solid black";
            }
            else
            {
                obj.style.backgroundColor = "Blue";
                obj.style.border = "2px solid black";
            }
        }

        function noToken(obj)
        {
            obj.style.backgroundColor = "white";
            obj.style.border = "2px solid white";
        }

        function dropToken(obj, column)
    {
        for (var i = 7; i > 1; i--)
        {
            var element = $('table tr:nth-child(' + i + ') td:nth-child(' + column + ')');
            if (element.css("background-color") == "rgba(0, 0, 0, 0)")
            {
                element.css("background-color", playerTurn);
                break;
            }
        }
        if (playerTurn == "Red")
        {
              playerTurn = "Blue";
              obj.style.backgroundColor = "Blue";
         }
        else
        {
              playerTurn = "Red";
              obj.style.backgroundColor = "Red";
         }
    }

        function resetBoard()
        {
            location.reload();
        }
