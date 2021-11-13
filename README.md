id topButton olarak belirtilmiştir . Farklı bir id giremek isterseniz script dosyasındaki getelementbyid değerini değiştirmeyi unutmayın.

# SCSS - CSS
#topButton {
    position: fixed;
    right: 10px;
    bottom: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: none;
    border: none;
    z-index: 999;
    
    i {
        font-size: 30px;
        color: green;
        transition: all 0.2s;
    }
    
    i:hover {
        color: darkgreen;
    }
    
}
