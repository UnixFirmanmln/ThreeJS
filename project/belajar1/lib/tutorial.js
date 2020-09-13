/*
    Scene
     - Lingkungan 3D yg akan menjadi aplikasi kita
     - 3D World

    Camera
     - Digunakan untuk melihat kedlm Scene(3D)

    Renderer
     - Yg menampilkan hasil dari camera ke layar(display) / output
*/

let scene = new THREE.Scene();
let cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100);
/*
    45 = FOV
     - smakin kecil FOV maka semakin kecil juga camera
     - smakin besar FOV maka akan semakin besar camera/wide angel

    innerWidth/innerHeight = aspecration
     - untuk penyesesuaian layar
     - bisa diatur sesuka hati (diganti aja coy)
    
    1 = near clip
     - seberapa deket yg bisa dilihat oleh camera

    100 = far clip
     - seberapa jauh yg bisa dilihat oleh camera
*/

let renderer = new THREE.WebGLRenderer({antialias: true});

//---------------------- window set ---------------------------

//menambahkan sebuah box1
let box = new THREE.BoxGeometry(1,1,1); //box dgn ukuran 1,1,1 / panjang, lebar, tinggi
let boxMat = new THREE.MeshBasicMaterial({color: 0x03fcf0});  //box material - hex color format (0x + hexcolor)
let boxMesh = new THREE.Mesh(box, boxMat);

//menambahkan sebuah box2
let box2 = new THREE.BoxGeometry(1,1,1); //box dgn ukuran 1,1,1 / panjang, lebar, tinggi
let boxMat2 = new THREE.MeshBasicMaterial({color: 0x00ff00});  //box material - hex color format (0x + hexcolor)
let boxMesh2 = new THREE.Mesh(box2, boxMat2);

//menambahkan ke scene
scene.add(boxMesh);
scene.add(boxMesh2);

//menampilkan box
cam.position.z = 5;


//mengatur besarnya renderer
renderer.setSize(innerWidth, innerHeight);

//-------------------------------------------------------------

//DOM Element
document.body.appendChild(renderer.domElement);

//for responsive
window.addEventListener('resize', function() {
    renderer.setSize(innerWidth, innerHeight);
    cam.aspect = innerWidth/innerHeight;
    cam.updateProjectionMatrix();
});

function draw() {
    requestAnimationFrame(draw); //requestAnimationFrame() = fungsi dlm js for looping
    boxMesh.rotation.y += 0.01;
    boxMesh.position.x = -2;

}

function draw2() {
    requestAnimationFrame(draw2); //requestAnimationFrame() = fungsi dlm js for looping
    boxMesh2.rotation.y -= 0.04;
    boxMesh2.position.x = 2;
    renderer.render(scene, cam); //untuk pemanggilan / Output

}

draw();
draw2();
/* 
Nb: 
- untuk pengetesan hasil bisa menggunakan ekstensi (Live Server) di VSCode. Agar bisa membuat local server
- How to run: right click index.html -> Open wiht Live Server
    
*/