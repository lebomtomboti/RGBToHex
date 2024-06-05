function convertRGBtoHex() {
    let red = parseInt(document.getElementById("redInput").value);
    let green = parseInt(document.getElementById("greenInput").value);
    let blue = parseInt(document.getElementById("blueInput").value);

    if (isNaN(red) || isNaN(green) || isNaN(blue) || red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      document.getElementById("result").innerHTML = "Invalid RGB values!";
      return;
    }

    let hexColor = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);

    document.getElementById("result").innerHTML = "Hexadecimal color: " + hexColor;
  }

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }