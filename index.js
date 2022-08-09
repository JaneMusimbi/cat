
/* num4 */
var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();
// the first one  outer func: this.name=Adalab it is define by var self
// the second one  outer func: self.name=Adalab
// the third one  inner func: this.name=undefined because it is not defined.
// the fourth one  inner func: self.name=Adalab  it is defined by variable self  


// num1
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/w3css/3/w3.css">
<body>
{/* <!-- Navigation --> */}
<nav class="w3-bar w3-black">
  <a href="#home" class="w3-button w3-bar-item">Home</a>
  <a href="#tour" class="w3-button w3-bar-item">Tour</a>
  <a href="#contact" class="w3-button w3-bar-item">Contact</a>
</nav>
{/* <!-- Slide Show --> */}
<section>
  <img class="mySlides" src="https://nairobinews.nation.co.ke/wp-content/uploads/2019/09/Sauti-Sol.jpg"
  style="width:100%">
  <img class="mySlides" src="https://i2.wp.com/www.soundsofafrica.org/wp-content/uploads/2020/07/sauti-sol-2.jpg?fit=1200%2C1200&ssl=1"
  style="width:100%">
  <img class="mySlides" src="http://ocdn.eu/images/pulscms/NTE7MDA_/30b2539286250f255f865326b5d72f7e.png"
  style="width:100%">
</section>
{/* <!-- Band Description --> */}
<section class="w3-container w3-center w3-content" style="max-width:600px">
  <h2 class="w3-wide">THE BAND</h2>
  <p class="w3-opacity"><i>We love music</i></p>
  <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua.</p>
</section>
</script>
</body>
</html>


// num2


{/* // num3 */}
// The carousel  used many classes, attributes, and tags.

// The id= ”idname” is required for indicator and control of slider working properly.
// The carousel class is the main class to contain all the slider elements and the class 
// slide gives an animated effect when the next elements slide.
// The data-ride=”carousel” attribute helps to start slider immediately when page loading.
// The carousel-inner class used to hold slider items. It is a wrapper for wrapping the elements.
// The class item used for a specific element or slide and class active is used for the first active slide to show when the web page is loading.







