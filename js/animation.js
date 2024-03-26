function onEntry(entry) {
    entry.forEach(change => {
        if(change.isIntersecting) {
            change.target.classList.add('wework_slide_show');
        }
    });
}

let options = {
    threshold: [1],
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.wework_slide');

for (let elm of elements) {
    observer.observe(elm);
}