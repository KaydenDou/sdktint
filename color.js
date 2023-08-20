const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('change');
            document.body.style.backgroundColor = '#2a2a2a';
            document.getElementById('tint').style.backgroundColor = '#2a2a2a';
            document.getElementById('third').style.backgroundColor = '#2a2a2a';
        } else {
            entry.target.classList.remove('change');
            document.body.style.backgroundColor = '#fdfdfd';
            document.getElementById('tint').style.backgroundColor = '#fdfdfd';
            document.getElementById('third').style.backgroundColor = '#fdfdfd';
        }
    });
});

const color = document.querySelectorAll('.color');
color.forEach((el) => observers.observe(el));