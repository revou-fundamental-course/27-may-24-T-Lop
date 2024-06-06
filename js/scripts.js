

// Function name
function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    
    replaceName();

    document.getElementById('formulir').addEventListener('submit', function(event) {
        event.preventDefault();  // submission
    
    
        // date
        const now = new Date();
        const dateTimeString = now.toLocaleString();
    
        // value formulir
        const nama = document.getElementById('nama').value;
        const tglLahir = document.getElementById('tglLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
    
        // input
        const resultText = `Date/time: ${dateTimeString}\n \nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;
    
        // output
        document.getElementById('result').value = resultText;
    
        // alert
        alert('Pesan telah tersubmit');
        document.getElementById('nama').value ="";
        document.getElementById('tglLahir').value ="";
        document.getElementById('pesan').value ="";
        
    });
    
    
    // Function Slider
    let currentSlide = 0;
    
    function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;
    
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
    