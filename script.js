

bd = document.getElementsByTagName("body")[0];

bd.bgColor = "cyan";

function cl(x) {
    const txt = document.createElement("p");
    txt.id = "text";
    const bd = document.getElementsByTagName("body")[0];
    bd.prepend(txt);
    txt.innerHTML = x;
    txt.style.textAlign = "center";
    txt.style.fontSize = "48px";
    txt.style.fontFamily = "Roboto Thin"
};

cl("Color by DabSkullz");
const btn1 = document.getElementById("cl1");

btn1.style.borderRadius = "12px";

btn1.addEventListener("click", color1);

const btn2 = document.getElementById("cl2");

btn2.style.borderRadius = "12px";

btn2.addEventListener("click", color2);

const btn3 = document.getElementById("cl3");

btn3.style.borderRadius = "12px";

btn3.addEventListener("click", color3);

const text = document.createElement("p");
bd.append(text);
text.style.fontSize = "48px";
text.style.color = "white";
text.style.fontFamily = "Roboto Thin"

function color1() {
    const bd = document.getElementsByTagName("body")[0];
    const txt = document.getElementsByTagName("p")[0];
    txt.style.color = "black";
    bd.bgColor = "cyan";
    text.style.color = "black";
    text.innerHTML = "Color 1";
};

function color2() {
    const bd = document.getElementsByTagName("body")[0];
    const txt = document.getElementsByTagName("p")[0];
    txt.style.color = "cyan";
    bd.bgColor = "black";
    text.style.color = "white";
    text.innerHTML = "Color 2";
};

function color3() {
    const bd = document.getElementsByTagName("body")[0];
    const txt = document.getElementsByTagName("p")[0];
    txt.style.color = "purple";
    bd.bgColor = "#1b1e23";
    text.style.color = "white";
    text.innerHTML = "Color 3";
};

bgt = document.createElement("input");
bgt.id = "tb";
bd.append(bgt);
bgt.type = "color";

bgt.max = "6"

bgt.placeholder = "Background Color Hex";

bgt.style.margin = "24px";

bd.append(document.createElement("br"));

bgt.addEventListener("input", inputgiven);

txt = document.getElementById("text");

hx = document.createElement("p");
bd.append(hx);
hx.style.fontFamily = "Roboto Thin";
hx.style.fontSize = "72px";

rb = document.createElement("p");
bd.append(rb);
rb.style.fontFamily = "Roboto Thin";
rb.style.fontSize = "72px";

function inputgiven() {
    bd.bgColor = bgt.value;

    txt.style.color = bgt.value;
    txt.style.filter = "invert(100%)";

    hx.style.color = bgt.value;
    hx.style.filter = "invert(100%)";

    rb.style.color = bgt.value;
    rb.style.filter = "invert(100%)";

    hx.innerHTML = "Hex: " + bgt.value;
    rb.innerHTML = hexToRGB(bgt.value);
    
    
};

function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
  
    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
  
    // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }
    
    return  "RGB: " + + r + "," + + g + "," + +b;
}






